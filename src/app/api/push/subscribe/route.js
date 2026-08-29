import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import PushSubscription from "@/lib/models/PushSubscription";
import { getIdentity } from "@/lib/identity";

const isDev = process.env.NODE_ENV !== "production";

export async function POST(request) {
  const session = await auth();
  const identity = getIdentity(session);
  if (!identity) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json().catch(() => null);
  const { endpoint, keys } = body || {};

  if (!endpoint || !keys?.p256dh || !keys?.auth) {
    return NextResponse.json({ error: "Invalid subscription" }, { status: 400 });
  }

  try {
    await connectDB();
    // Identity comes from the session, same as everywhere else — a
    // subscription can't be registered against the wrong person.
    await PushSubscription.findOneAndUpdate(
      { endpoint },
      { $set: { identity, keys } },
      { upsert: true, setDefaultsOnInsert: true }
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[POST /api/push/subscribe] failed:", err);
    return NextResponse.json(
      { error: "Failed to save subscription", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}
