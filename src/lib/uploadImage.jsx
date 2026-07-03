/**
 * Client-side image upload: compress first (mobile data matters), then
 * push straight to Cloudinary using an unsigned upload preset — no server
 * round-trip needed for the file bytes.
 *
 * Setup:
 *  1. npm install browser-image-compression
 *  2. In Cloudinary dashboard: Settings > Upload > Add unsigned preset
 *  3. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
 */
import imageCompression from "browser-image-compression";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

export async function uploadImage(file, { onProgress } = {}) {
  const compressed = await imageCompression(file, {
    maxSizeMB: 1,
    maxWidthOrHeight: 1600,
    useWebWorker: true,
  });

  const formData = new FormData();
  formData.append("file", compressed);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Image upload failed");
  const data = await res.json();
  return data.secure_url;
}

export async function uploadImages(files, opts) {
  return Promise.all(Array.from(files).map((f) => uploadImage(f, opts)));
}