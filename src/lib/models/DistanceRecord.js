import mongoose, { Schema } from "mongoose";

/**
 * A single relationship-level record: the smallest distance ever
 * measured between "me" and "her". There is at most one document in
 * this collection, addressed by a fixed _id ("closest") — updates are
 * a plain atomic upsert guarded by a `$gt` filter (see
 * src/app/api/location/route.js) rather than a find-then-write race
 * that two near-simultaneous location updates could corrupt.
 */
const DistanceRecordSchema = new Schema(
  {
    _id: { type: String, default: "closest" },
    closestDistanceMeters: { type: Number, required: true },
    recordedAt: { type: Date, required: true },
    meLocation: {
      latitude: Number,
      longitude: Number,
    },
    herLocation: {
      latitude: Number,
      longitude: Number,
    },
  },
  { timestamps: true, _id: false }
);

export default mongoose.models.DistanceRecord || mongoose.model("DistanceRecord", DistanceRecordSchema);
