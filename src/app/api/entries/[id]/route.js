import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import Entry from "@/lib/models/Entry";
import { deleteImagesByUrl } from "@/lib/cloudinary";

const isDev = process.env.NODE_ENV !== "production";

async function loadOwnedEntry(id, session) {
  const entry = await Entry.findById(id);
  if (!entry) return { error: NextResponse.json({ error: "Entry not found" }, { status: 404 }) };
  if (entry.author !== session.user.author) {
    // You can only edit/delete your own entries — not your partner's.
    return { error: NextResponse.json({ error: "You can only edit your own entries" }, { status: 403 }) };
  }
  return { entry };
}

export async function PATCH(request, { params }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await request.json();
  const { date, note, images } = body;

  if (note !== undefined && !note.trim()) {
    return NextResponse.json({ error: "Note can't be empty" }, { status: 400 });
  }

  try {
    await connectDB();
    const { entry, error } = await loadOwnedEntry(id, session);
    if (error) return error;

    // Any images that were on the entry before but aren't in the incoming
    // list were removed in the editor — clean them up in Cloudinary too.
    const removedImages =
      images !== undefined ? entry.images.filter((src) => !images.includes(src)) : [];

    if (date !== undefined) entry.date = new Date(date);
    if (note !== undefined) entry.note = note.trim();
    if (images !== undefined) entry.images = images;
    await entry.save();

    if (removedImages.length) await deleteImagesByUrl(removedImages);

    return NextResponse.json(entry);
  } catch (err) {
    console.error("[PATCH /api/entries/:id] failed:", err);
    return NextResponse.json(
      { error: "Failed to update entry", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  try {
    await connectDB();
    const { entry, error } = await loadOwnedEntry(id, session);
    if (error) return error;

    await entry.deleteOne();
    if (entry.images?.length) await deleteImagesByUrl(entry.images);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[DELETE /api/entries/:id] failed:", err);
    return NextResponse.json(
      { error: "Failed to delete entry", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}
