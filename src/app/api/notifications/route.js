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
    const notifications = await Notification.find({ recipient: identity })
      .sort({ createdAt: -1 })
      .limit(30)
      .lean();
    return NextResponse.json(notifications);
  } catch (err) {
    console.error("[GET /api/notifications] failed:", err);
    return NextResponse.json(
      { error: "Failed to load notifications", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}
