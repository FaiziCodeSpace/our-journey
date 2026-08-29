import mongoose, { Schema } from "mongoose";
import { IDENTITIES } from "../identity";

/**
 * One document per subscribed browser/device. A person can have several
 * (phone + laptop, etc.) — `endpoint` is unique per browser subscription
 * and is how we address individual pushes and clean up dead ones.
 */
const PushSubscriptionSchema = new Schema(
  {
    identity: { type: String, enum: IDENTITIES, required: true, index: true },
    endpoint: { type: String, required: true, unique: true },
    keys: {
      p256dh: { type: String, required: true },
      auth: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export default mongoose.models.PushSubscription ||
  mongoose.model("PushSubscription", PushSubscriptionSchema);
