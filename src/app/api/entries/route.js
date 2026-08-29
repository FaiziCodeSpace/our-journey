import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import Entry from "@/lib/models/Entry";
import Notification from "@/lib/models/Notification";
import { getIdentity, getOtherIdentity, IDENTITY_META } from "@/lib/identity";

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
    const recipient = getOtherIdentity(identity);
    if (recipient) {
      Notification.create({
        recipient,
        sender: identity,
        type: "memory_created",
        memoryId: entry._id,
        title: `${IDENTITY_META[identity].label} added a new memory`,
        message: entry.note.length > 80 ? `${entry.note.slice(0, 80)}…` : entry.note,
      }).catch((err) => console.error("[POST /api/entries] notification failed:", err));
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