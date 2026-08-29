import mongoose, { Schema } from "mongoose";
import { IDENTITIES } from "../identity";

const EntrySchema = new Schema(
  {
    date: { type: Date, required: true },
    author: { type: String, enum: IDENTITIES, required: true },
    note: { type: String, required: true, maxlength: 4000 },
    images: [{ type: String }], // Cloudinary secure_urls
  },
  { timestamps: true }
);

EntrySchema.index({ date: 1 });

export default mongoose.models.Entry || mongoose.model("Entry", EntrySchema);