import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import Entry from "@/lib/models/Entry";
import Notification from "@/lib/models/Notification";
import { getIdentity, getOtherIdentity, IDENTITY_META } from "@/lib/identity";
import { sendPushToIdentity } from "@/lib/push";

const isDev = process.env.NODE_ENV !== "production";

export async function GET() {
  const session = await auth();
  if (!getIdentity(session)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const entries = await Entry.find().sort({ date: 1 }).lean();
    return NextResponse.json(entries);
  } catch (err) {
    console.error("[GET /api/entries] failed:", err);
    return NextResponse.json(
      { error: "Failed to load entries", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const session = await auth();
  const identity = getIdentity(session);
  if (!identity) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const { date, note, images = [] } = body;

  if (!date || !note?.trim()) {
    return NextResponse.json({ error: "date and note are required" }, { status: 400 });
  }

  try {
    await connectDB();
    const entry = await Entry.create({
      date: new Date(date),
      author: identity, // trust the session, not the client, for who's writing
      note: note.trim(),
      images,
    });

    // Notify the OTHER person — never the creator. Best-effort: a
    // notification hiccup should never fail an otherwise-successful save.
    // The title always names the SENDER ("Him added a new memory"), from
    // the recipient's point of view — never "You posted a memory".
    const recipient = getOtherIdentity(identity);
    if (recipient) {
      const title = `${IDENTITY_META[identity].label} added a new memory`;
      const message = entry.note.length > 80 ? `${entry.note.slice(0, 80)}…` : entry.note;

      Notification.create({
        recipient,
        sender: identity,
        type: "memory_created",
        memoryId: entry._id,
        title,
        message,
      }).catch((err) => console.error("[POST /api/entries] notification failed:", err));

      // Push reaches the OTHER person even if the site is closed — same
      // personalized copy as the in-app notification, no-ops silently if
      // push isn't configured or they haven't enabled it on any device.
      sendPushToIdentity(recipient, { title, body: message, url: "/", tag: "memory-lane" }).catch(
        (err) => console.error("[POST /api/entries] push failed:", err)
      );
    }

    return NextResponse.json(entry, { status: 201 });
  } catch (err) {
    console.error("[POST /api/entries] failed:", err);
    return NextResponse.json(
      { error: "Failed to create entry", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}