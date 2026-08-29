import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import Location from "@/lib/models/Location";
import DistanceRecord from "@/lib/models/DistanceRecord";
import { getIdentity, getOtherIdentity, ME, HER } from "@/lib/identity";
import { haversineDistanceMeters } from "@/lib/geo";

const isDev = process.env.NODE_ENV !== "production";

// A location older than this is still shown (as "last known"), but is
// never treated as live and never feeds into distance/record math.
const STALE_MS = 5 * 60 * 1000;

function serializeLocation(doc) {
  if (!doc) return null;
  const updatedAt = doc.updatedAt;
  const ageMs = Date.now() - new Date(updatedAt).getTime();
  return {
    latitude: doc.latitude,
    longitude: doc.longitude,
    accuracy: doc.accuracy ?? null,
    updatedAt,
    stale: ageMs > STALE_MS,
  };
}

export async function GET() {
  const session = await auth();
  const identity = getIdentity(session);
  if (!identity) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const [meDoc, herDoc, record] = await Promise.all([
      Location.findOne({ identity: ME }).lean(),
      Location.findOne({ identity: HER }).lean(),
      DistanceRecord.findById("closest").lean(),
    ]);

    const me = serializeLocation(meDoc);
    const her = serializeLocation(herDoc);
    const distanceMeters = me && her && !me.stale && !her.stale ? haversineDistanceMeters(me, her) : null;

    return NextResponse.json({
      me,
      her,
      distanceMeters,
      closest: record
        ? { distanceMeters: record.closestDistanceMeters, recordedAt: record.recordedAt }
        : null,
    });
  } catch (err) {
    console.error("[GET /api/location] failed:", err);
    return NextResponse.json(
      { error: "Failed to load location", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const session = await auth();
  const identity = getIdentity(session);
  if (!identity) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json().catch(() => ({}));
  const { latitude, longitude, accuracy } = body;

  const validCoord =
    typeof latitude === "number" &&
    typeof longitude === "number" &&
    !Number.isNaN(latitude) &&
    !Number.isNaN(longitude) &&
    latitude >= -90 &&
    latitude <= 90 &&
    longitude >= -180 &&
    longitude <= 180;

  if (!validCoord) {
    return NextResponse.json({ error: "Invalid coordinates" }, { status: 400 });
  }

  try {
    await connectDB();

    const setFields = { latitude, longitude };
    if (typeof accuracy === "number" && !Number.isNaN(accuracy)) setFields.accuracy = accuracy;

    // Identity comes from the session, never from the request body — a
    // client can never claim to be updating the other person's location.
    const mine = await Location.findOneAndUpdate(
      { identity },
      { $set: setFields },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    const otherIdentity = getOtherIdentity(identity);
    const otherDoc = await Location.findOne({ identity: otherIdentity }).lean();

    let closest = await DistanceRecord.findById("closest").lean();
    let distanceMeters = null;
    let newRecord = false;

    if (otherDoc) {
      const otherFresh = Date.now() - new Date(otherDoc.updatedAt).getTime() <= STALE_MS;

      if (otherFresh) {
        distanceMeters = haversineDistanceMeters(mine, otherDoc);

        if (distanceMeters != null) {
          const meLoc =
            identity === ME
              ? { latitude: mine.latitude, longitude: mine.longitude }
              : { latitude: otherDoc.latitude, longitude: otherDoc.longitude };
          const herLoc =
            identity === HER
              ? { latitude: mine.latitude, longitude: mine.longitude }
              : { latitude: otherDoc.latitude, longitude: otherDoc.longitude };

          try {
            // Atomic + race-safe: this only matches (and writes) if the
            // stored record is still worse than the new distance. If two
            // POSTs land nearly simultaneously and the other one already
            // won, this filter matches zero docs and upsert:true tries to
            // insert a duplicate _id — caught below as "not a new record",
            // not a real error.
            const updated = await DistanceRecord.findOneAndUpdate(
              { _id: "closest", closestDistanceMeters: { $gt: distanceMeters } },
              {
                $set: {
                  closestDistanceMeters: distanceMeters,
                  recordedAt: new Date(),
                  meLocation: meLoc,
                  herLocation: herLoc,
                },
              },
              { upsert: true, new: true, setDefaultsOnInsert: true }
            );
            closest = updated;
            newRecord = true;
          } catch (err) {
            if (err?.code !== 11000) throw err;
          }
        }
      }
    }

    return NextResponse.json({
      me: identity === ME ? serializeLocation(mine) : serializeLocation(otherDoc),
      her: identity === HER ? serializeLocation(mine) : serializeLocation(otherDoc),
      distanceMeters,
      closest: closest ? { distanceMeters: closest.closestDistanceMeters, recordedAt: closest.recordedAt } : null,
      newRecord,
    });
  } catch (err) {
    console.error("[POST /api/location] failed:", err);
    return NextResponse.json(
      { error: "Failed to update location", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}
