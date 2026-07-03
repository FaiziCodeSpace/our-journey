import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI env var");
}

// Reuse the connection across hot reloads / serverless invocations
let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    console.log("[connectDB] connecting to:", MONGODB_URI.replace(/\/\/.*@/, "//<redacted>@"));

    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false, serverSelectionTimeoutMS: 8000 })
      .then((m) => {
        console.log("[connectDB] connected OK, readyState:", m.connection.readyState);
        return m;
      })
      .catch((err) => {
        console.error("[connectDB] connection FAILED:", err.message);
        cached.promise = null; // let the next request retry instead of caching a dead promise
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}