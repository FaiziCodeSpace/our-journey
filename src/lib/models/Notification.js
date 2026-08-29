import mongoose, { Schema } from "mongoose";
import { IDENTITIES } from "../identity";

const NotificationSchema = new Schema(
  {
    recipient: { type: String, enum: IDENTITIES, required: true, index: true },
    sender: { type: String, enum: IDENTITIES, required: true },
    type: { type: String, enum: ["memory_created"], default: "memory_created" },
    memoryId: { type: Schema.Types.ObjectId, ref: "Entry" },
    title: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

// Every notification list/unread-count query filters by recipient (and
// usually read too) and sorts by recency — this is the one index that
// matters here.
NotificationSchema.index({ recipient: 1, read: 1, createdAt: -1 });

export default mongoose.models.Notification || mongoose.model("Notification", NotificationSchema);
