import webpush from "web-push";
import PushSubscription from "./models/PushSubscription";

const VAPID_PUBLIC = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
const VAPID_PRIVATE = process.env.VAPID_PRIVATE_KEY;
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || "mailto:hello@example.com";

let configured = false;
function ensureConfigured() {
  if (configured) return true;
  if (!VAPID_PUBLIC || !VAPID_PRIVATE) return false;
  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC, VAPID_PRIVATE);
  configured = true;
  return true;
}

/**
 * Sends a push notification to every device the given identity has
 * subscribed from. Push is optional/progressive: if VAPID keys aren't
 * configured this silently no-ops — in-app notifications (the bell)
 * keep working regardless.
 */
export async function sendPushToIdentity(identity, payload) {
  if (!ensureConfigured()) return;

  const subs = await PushSubscription.find({ identity }).lean();
  if (!subs.length) return;

  await Promise.all(
    subs.map(async (sub) => {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: sub.keys },
          JSON.stringify(payload)
        );
      } catch (err) {
        if (err?.statusCode === 404 || err?.statusCode === 410) {
          // The browser/device unsubscribed or its data was cleared —
          // this subscription is dead, stop trying it.
          await PushSubscription.deleteOne({ endpoint: sub.endpoint }).catch(() => {});
        } else {
          console.error("[push] send failed:", err?.statusCode, err?.message);
        }
      }
    })
  );
}
