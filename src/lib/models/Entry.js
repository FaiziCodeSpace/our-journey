import mongoose, { Schema } from "mongoose";

const EntrySchema = new Schema(
  {
    date: { type: Date, required: true },
    author: { type: String, enum: ["me", "her"], required: true },
    note: { type: String, required: true, maxlength: 4000 },
    images: [{ type: String }], // Cloudinary secure_urls
  },
  { timestamps: true }
);

EntrySchema.index({ date: 1 });

export default mongoose.models.Entry || mongoose.model("Entry", EntrySchema);