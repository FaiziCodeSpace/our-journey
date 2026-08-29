import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import Notification from "@/lib/models/Notification";
import { getIdentity } from "@/lib/identity";

const isDev = process.env.NODE_ENV !== "production";

export async function GET() {
  const session = await auth();
  const identity = getIdentity(session);
  if (!identity) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const count = await Notification.countDocuments({ recipient: identity, read: false });
    return NextResponse.json({ count });
  } catch (err) {
    console.error("[GET /api/notifications/unread-count] failed:", err);
    return NextResponse.json(
      { error: "Failed to load unread count", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}
