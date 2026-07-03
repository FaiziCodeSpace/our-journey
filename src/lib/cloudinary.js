import crypto from "crypto";

/**
 * Server-side Cloudinary cleanup. Uploads happen client-side (unsigned
 * preset, see uploadImage.jsx), but deletion needs the API secret, so it
 * has to happen here instead.
 *
 * Setup: set CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in .env.local
 * (from Cloudinary dashboard > Settings > Access Keys). Reuses
 * NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME for the cloud name.
 */
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

/**
 * Pulls the public_id out of a Cloudinary secure_url, e.g.
 *   https://res.cloudinary.com/demo/image/upload/v1699999999/our-journey/abc123.jpg
 *   -> "our-journey/abc123"
 */
export function extractPublicId(url) {
  try {
    const { pathname } = new URL(url);
    const parts = pathname.split("/").filter(Boolean);
    const uploadIdx = parts.indexOf("upload");
    if (uploadIdx === -1) return null;

    let rest = parts.slice(uploadIdx + 1);
    // Drop a version segment like "v1699999999" if present.
    if (rest[0] && /^v\d+$/.test(rest[0])) rest = rest.slice(1);
    if (rest.length === 0) return null;

    const filename = rest.join("/");
    return filename.replace(/\.[a-zA-Z0-9]+$/, ""); // strip extension
  } catch {
    return null;
  }
}

async function deleteOne(publicId) {
  const timestamp = Math.floor(Date.now() / 1000);
  const paramsToSign = `public_id=${publicId}&timestamp=${timestamp}`;
  const signature = crypto
    .createHash("sha1")
    .update(paramsToSign + API_SECRET)
    .digest("hex");

  const body = new URLSearchParams({
    public_id: publicId,
    timestamp: String(timestamp),
    api_key: API_KEY,
    signature,
  });

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = await res.json().catch(() => ({}));
  // Cloudinary returns {result: "ok"} on success, {result: "not found"} if
  // it's already gone — both are fine, anything else we surface as a warning.
  if (!res.ok || (data.result && data.result !== "ok" && data.result !== "not found")) {
    console.warn(`[cloudinary] failed to delete "${publicId}":`, data.result || res.status);
  }
  return data;
}

/**
 * Deletes a batch of Cloudinary images given their secure_urls. Best-effort:
 * failures are logged but never thrown, so a Cloudinary hiccup never blocks
 * deleting the underlying note.
 */
export async function deleteImagesByUrl(urls = []) {
  if (!urls.length) return;

  if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
    console.warn(
      "[cloudinary] Missing CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET (or cloud name) — skipping image cleanup for",
      urls.length,
      "image(s)."
    );
    return;
  }

  const publicIds = urls.map(extractPublicId).filter(Boolean);
  await Promise.all(publicIds.map((id) => deleteOne(id).catch((err) => console.warn("[cloudinary] delete error:", err.message))));
}
