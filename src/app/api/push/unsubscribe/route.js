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
  const { endpoint } = body || {};
  if (!endpoint) return NextResponse.json({ error: "endpoint is required" }, { status: 400 });

  try {
    await connectDB();
    // Only ever deletes your own subscription — scoped to identity so
    // one account can't unsubscribe the other's device.
    await PushSubscription.deleteOne({ endpoint, identity });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[POST /api/push/unsubscribe] failed:", err);
    return NextResponse.json(
      { error: "Failed to remove subscription", detail: isDev ? err.message : undefined },
      { status: 500 }
    );
  }
}
