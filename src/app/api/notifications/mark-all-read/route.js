import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import Notification from "@/lib/models/Notification";
import { getIdentity } from "@/lib/identity";

const isDev = process.env.NODE_ENV !== "production";

export async function POST() {
  const session = await auth();
  const identity = getIdentity(session);
  if (!identity) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    await Notification.updateMany({ recipient: identity, read: false }, { $set: { read: true } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[POST /api/notifications/mark-all-read] failed:", err);
    return NextResponse.json(
      { error: "Failed to update notifications", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}
