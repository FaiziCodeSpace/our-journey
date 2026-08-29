import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import Notification from "@/lib/models/Notification";
import { getIdentity } from "@/lib/identity";

const isDev = process.env.NODE_ENV !== "production";

export async function PATCH(request, { params }) {
  const session = await auth();
  const identity = getIdentity(session);
  if (!identity) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  try {
    await connectDB();
    // Recipient must match the authenticated identity — you can only
    // mark your own notifications as read, never your partner's.
    const notification = await Notification.findOneAndUpdate(
      { _id: id, recipient: identity },
      { $set: { read: true } },
      { new: true }
    );
    if (!notification) {
      return NextResponse.json({ error: "Notification not found" }, { status: 404 });
    }
    return NextResponse.json(notification);
  } catch (err) {
    console.error("[PATCH /api/notifications/:id] failed:", err);
    return NextResponse.json(
      { error: "Failed to update notification", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}
