import mongoose, { Schema } from "mongoose";
import { IDENTITIES } from "../identity";

/**
 * One document per identity ("me" | "her") holding their latest known
 * fix. We deliberately don't keep a history of every GPS point — only
 * the most recent per person — to avoid unbounded collection growth
 * from frequent live-location updates. The one piece of history that
 * matters (the closest the two of you have ever been) is derived and
 * persisted separately in DistanceRecord.
 */
const LocationSchema = new Schema(
  {
    identity: { type: String, enum: IDENTITIES, required: true, unique: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    accuracy: { type: Number }, // meters, from the Geolocation API
  },
  { timestamps: true } // updatedAt = last time this identity shared a fix
);

export default mongoose.models.Location || mongoose.model("Location", LocationSchema);
