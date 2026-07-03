import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";

// Dev-only: hit GET /api/debug/db while logged in to check the Mongo
// connection directly, without going through the entries form.
// Returns 404 outside development so this never ships to production.
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const conn = await connectDB();
    return NextResponse.json({
      ok: true,
      readyState: conn.connection.readyState, // 1 = connected
      host: conn.connection.host,
      name: conn.connection.name,
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
