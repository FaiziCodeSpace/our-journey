"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Bell, BellRing } from "lucide-react";
import { IDENTITY_META } from "@/lib/identity";
import { timeAgo } from "@/lib/timeAgo";
import { getPushStatus, enablePush, disablePush } from "@/lib/pushClient";

const POLL_MS = 25000;

/**
 * Doubles as the bell trigger and the dropdown panel — reuses the
 * existing Entry/Memory modal in HomeClient (via onOpenMemory) rather
 * than building a second memory viewer.
 */
export default function NotificationBell({ onOpenMemory }) {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [pushStatus, setPushStatus] = useState("unsupported"); // unsupported | unconfigured | not-subscribed | subscribed | denied
  const wrapRef = useRef(null);

  useEffect(() => {
    // Deferred, same reasoning as the unread-count kickoff below.
    const t = setTimeout(() => {
      getPushStatus().then(setPushStatus).catch(() => {});
    }, 0);
    return () => clearTimeout(t);
  }, []);

  async function togglePush() {
    if (pushStatus === "subscribed") {
      await disablePush();
      setPushStatus("not-subscribed");
    } else {
      const result = await enablePush();
      setPushStatus(result);
    }
  }

  const refreshUnread = useCallback(async () => {
    try {
      const res = await fetch("/api/notifications/unread-count");
      if (!res.ok) return;
      const { count } = await res.json();
      setUnreadCount(count);
    } catch {
      // Silent — the badge catches up on the next poll.
    }
  }, []);

  useEffect(() => {
    // Deferred via setTimeout(..., 0) rather than called directly: this
    // is a scheduled-callback pattern (same shape as the setInterval
    // below), not a synchronous setState call from the effect body.
    const kickoff = setTimeout(refreshUnread, 0);
    const t = setInterval(refreshUnread, POLL_MS);
    return () => {
      clearTimeout(kickoff);
      clearInterval(t);
    };
  }, [refreshUnread]);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function togglePanel() {
    const next = !open;
    setOpen(next);
    if (next && !loaded) {
      try {
        const res = await fetch("/api/notifications");
        if (res.ok) {
          setNotifications(await res.json());
          setLoaded(true);
        }
      } catch {
        // leave the panel showing whatever we already have (possibly empty)
      }
    }
  }

  function handleClick(n) {
    if (!n.read) {
      setNotifications((prev) => prev.map((x) => (x._id === n._id ? { ...x, read: true } : x)));
      setUnreadCount((c) => Math.max(0, c - 1));
      fetch(`/api/notifications/${n._id}`, { method: "PATCH" }).catch(() => {});
    }
    setOpen(false);
    onOpenMemory?.(n.memoryId);
  }

  function markAllRead() {
    setNotifications((prev) => prev.map((x) => ({ ...x, read: true })));
    setUnreadCount(0);
    fetch("/api/notifications/mark-all-read", { method: "POST" }).catch(() => {});
  }

  return (
    <div className="relative" ref={wrapRef}>
      <button
        onClick={togglePanel}
        className="relative h-9 w-9 flex items-center justify-center rounded-full hover:bg-baby-pink/60 transition-colors"
        aria-label="Notifications"
      >
        <Bell size={18} className="text-ink/60" />
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-rose text-paper text-[10px] font-ui font-bold flex items-center justify-center leading-none">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed sm:absolute left-3 right-3 sm:left-auto sm:right-0 top-16 sm:top-auto sm:mt-2 sm:w-80 bg-paper border border-blush rounded-lg shadow-[4px_6px_0_rgba(74,53,64,0.15)] z-50 overflow-hidden animate-[rise-in_0.15s_ease-out]">
          <div className="flex items-center justify-between px-4 py-3 border-b border-blush/70">
            <span className="font-hand text-xl text-ink">Notifications</span>
            {unreadCount > 0 && (
              <button onClick={markAllRead} className="font-ui text-[11px] text-rose hover:underline">
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto pretty-scroll">
            {notifications.length === 0 ? (
              <p className="font-ui text-xs text-ink/40 text-center py-8 px-4">No notifications yet.</p>
            ) : (
              notifications.map((n) => {
                const meta = IDENTITY_META[n.sender];
                return (
                  <button
                    key={n._id}
                    onClick={() => handleClick(n)}
                    className={`w-full text-left px-4 py-3 border-b border-blush/40 last:border-0 hover:bg-baby-pink/30 transition-colors flex gap-2.5 ${
                      n.read ? "" : "bg-baby-pink/40"
                    }`}
                  >
                    <span
                      className="mt-1.5 h-2 w-2 rounded-full shrink-0"
                      style={{ background: n.read ? "transparent" : meta?.color || "#B5384F" }}
                      aria-hidden
                    />
                    <span className="min-w-0">
                      <span className="block font-ui text-xs text-ink">
                        <strong>{meta?.label || n.sender}</strong> added a new memory
                      </span>
                      <span className="block font-hand text-base text-ink/70 truncate">{n.message}</span>
                      <span className="block font-ui text-[10px] text-ink/35 mt-0.5">{timeAgo(n.createdAt)}</span>
                    </span>
                  </button>
                );
              })
            )}
          </div>

          {pushStatus !== "unsupported" && pushStatus !== "unconfigured" && (
            <button
              onClick={togglePush}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 border-t border-blush/70 font-ui text-[11px] text-ink/60 hover:bg-baby-pink/30 transition-colors"
            >
              {pushStatus === "subscribed" ? (
                <>
                  <BellRing size={13} className="text-rose" /> Push notifications on — tap to turn off
                </>
              ) : (
                <>
                  <Bell size={13} /> Get notified even when the site is closed
                </>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
