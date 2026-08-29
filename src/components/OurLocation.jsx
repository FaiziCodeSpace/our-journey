"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Sun, Sunset, Moon } from "lucide-react";
import { IDENTITY_META, ME, HER } from "@/lib/identity";
import { formatDistance, haversineDistanceMeters } from "@/lib/geo";
import { timeAgo } from "@/lib/timeAgo";
import { sunState, approxLocalTime } from "@/lib/dayNight";

const LocationMapImpl = dynamic(() => import("./LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      <p className="font-ui text-sm text-ink/40">Finding our locations...</p>
    </div>
  ),
});
// MAP_STYLES is a plain object export, safe to pull in statically even
// though the component itself is dynamically imported.
import { MAP_STYLES } from "./LocationMap";

const POLL_MS = 20000;
const MOVE_THRESHOLD_M = 8; // ignore GPS jitter smaller than this
const MIN_POST_INTERVAL_MS = 15000; // ...and never write more often than this
const MAX_ACCEPTABLE_ACCURACY_M = 100; // discard fixes noisier than this — a bad reading is worse than no reading
const SHARING_KEY = "memory-lane:location-sharing-enabled";
const STYLE_KEY = "memory-lane:map-style";

const SUN_META = {
  day: { Icon: Sun, label: "Daytime", tint: "from-amber-50 to-orange-50", ring: "#F7B733" },
  twilight: { Icon: Sunset, label: "Dawn/dusk", tint: "from-orange-50 to-indigo-50", ring: "#F2994A" },
  night: { Icon: Moon, label: "Nighttime", tint: "from-indigo-100 to-slate-200", ring: "#6366F1" },
};

export default function OurLocation({ viewerIdentity, onToast }) {
  const [data, setData] = useState(null); // { me, her, distanceMeters, closest }
  const [loadError, setLoadError] = useState(null);
  const [permission, setPermission] = useState("idle"); // idle | prompting | granted | denied | unsupported | error
  const [sharing, setSharing] = useState(false);
  const [tileStyle, setTileStyle] = useState("voyager");
  const [, forceTick] = useState(0); // re-render periodically so "x sec ago" / sun state stay fresh, no network involved

  const watchIdRef = useRef(null);
  const lastSentRef = useRef({ pos: null, at: 0 });

  useEffect(() => {
    // Deferred via setTimeout(..., 0), same reasoning as the kickoff
    // effect below — reading localStorage and setting state directly in
    // an effect body trips the same lint rule.
    const t = setTimeout(() => {
      const saved = localStorage.getItem(STYLE_KEY);
      if (saved && MAP_STYLES[saved]) setTileStyle(saved);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  function changeTileStyle(id) {
    setTileStyle(id);
    if (typeof window !== "undefined") localStorage.setItem(STYLE_KEY, id);
  }

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/location");
      if (!res.ok) throw new Error("Couldn't load your locations.");
      setData(await res.json());
      setLoadError(null);
    } catch (err) {
      setLoadError(err.message);
    }
  }, []);

  const sendLocation = useCallback(
    async (coords) => {
      try {
        const res = await fetch("/api/location", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
          }),
        });
        if (!res.ok) return;
        const json = await res.json();
        setData(json);
        setLoadError(null);
        if (json.newRecord && json.closest) {
          onToast?.(`New closest-ever record: ${formatDistance(json.closest.distanceMeters)} 💕`);
        }
      } catch {
        // Silent — the next fix or the next poll tick will retry.
      }
    },
    [onToast]
  );

  const stopSharing = useCallback(() => {
    if (watchIdRef.current != null && typeof navigator !== "undefined") {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    setSharing(false);
  }, []);

  const startSharing = useCallback(
    () => {
      if (typeof window === "undefined" || !("geolocation" in navigator)) {
        setPermission("unsupported");
        return;
      }
      if (watchIdRef.current != null) return; // already watching

      setPermission("prompting");
      watchIdRef.current = navigator.geolocation.watchPosition(
        (pos) => {
          setPermission("granted");
          setSharing(true);
          if (typeof window !== "undefined") localStorage.setItem(SHARING_KEY, "true");

          const { latitude, longitude, accuracy } = pos.coords;

          // A noisy fix is worse than no fix — it can plant a false
          // "closest ever" record. Wait for a better one instead of
          // sending it.
          if (typeof accuracy === "number" && accuracy > MAX_ACCEPTABLE_ACCURACY_M) return;

          const now = Date.now();
          const last = lastSentRef.current;
          const moved = last.pos
            ? haversineDistanceMeters(last.pos, { latitude, longitude })
            : Infinity;

          // Throttle DB writes (not GPS reads): only write when we've
          // moved enough, or enough time has passed.
          if (moved < MOVE_THRESHOLD_M && now - last.at < MIN_POST_INTERVAL_MS) return;

          lastSentRef.current = { pos: { latitude, longitude }, at: now };
          sendLocation({ latitude, longitude, accuracy });
        },
        (err) => {
          watchIdRef.current = null;
          setSharing(false);
          if (typeof window !== "undefined") localStorage.setItem(SHARING_KEY, "false");
          setPermission(err.code === err.PERMISSION_DENIED ? "denied" : "error");
        },
        // maximumAge: 0 forces a fresh GPS read every time rather than a
        // cached one — costs a little more battery, but this is a live
        // location feature, so freshness/accuracy wins.
        { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 }
      );
    },
    [sendLocation]
  );

  useEffect(() => {
    // Deferred via setTimeout(..., 0) rather than called directly: this
    // is a scheduled-callback pattern (same shape as the setIntervals
    // below), not a synchronous setState call from the effect body.
    const kickoff = setTimeout(() => {
      refresh();
      if (typeof window !== "undefined" && localStorage.getItem(SHARING_KEY) === "true") {
        startSharing();
      }
    }, 0);
    const poll = setInterval(refresh, POLL_MS);
    const tick = setInterval(() => forceTick((n) => n + 1), 1000);
    return () => {
      clearTimeout(kickoff);
      clearInterval(poll);
      clearInterval(tick);
      stopSharing();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleStopSharing() {
    stopSharing();
    if (typeof window !== "undefined") localStorage.setItem(SHARING_KEY, "false");
  }

  const me = data?.me || null;
  const her = data?.her || null;
  const distanceMeters = data?.distanceMeters ?? null;
  const closest = data?.closest || null;

  const meMeta = IDENTITY_META[ME];
  const herMeta = IDENTITY_META[HER];

  const meSun = useMemo(() => (me ? sunState(me.latitude, me.longitude) : null), [me]);
  const herSun = useMemo(() => (her ? sunState(her.latitude, her.longitude) : null), [her]);

  return (
    <div className="w-full bg-paper/90 rounded-xl border border-blush shadow-[3px_5px_0_rgba(74,53,64,0.10)] p-4 sm:p-5">
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <h2 className="font-hand text-3xl text-ink rotate-[-1deg]">Our Location ❤️</h2>
        {!sharing ? (
          <button
            onClick={() => startSharing()}
            className="shrink-0 font-ui text-xs font-semibold text-paper bg-rose px-3 py-1.5 rounded-full shadow-[0_2px_8px_rgba(181,56,79,0.3)] hover:brightness-110 active:scale-95 transition"
          >
            Share my location
          </button>
        ) : (
          <button
            onClick={handleStopSharing}
            className="shrink-0 font-ui text-xs font-semibold text-rose border border-rose/40 px-3 py-1.5 rounded-full hover:bg-rose/5 transition"
          >
            Stop sharing
          </button>
        )}
      </div>

      {distanceMeters != null ? (
        <p className="font-hand text-xl text-rose/80 -mt-1 mb-3">{formatDistance(distanceMeters)} apart</p>
      ) : (
        <p className="font-ui text-xs text-ink/35 -mt-0.5 mb-3">
          {me && her ? "Waiting on a location fix to measure the distance." : "Share your location to see the distance between you."}
        </p>
      )}

      {permission === "denied" && (
        <p className="font-ui text-xs text-rose bg-rose/5 border border-rose/20 rounded-md px-3 py-2 mb-3">
          Location permission is required to share your live location. Enable it in your browser&rsquo;s
          site settings, then try again.
        </p>
      )}
      {permission === "unsupported" && (
        <p className="font-ui text-xs text-rose bg-rose/5 border border-rose/20 rounded-md px-3 py-2 mb-3">
          Your browser doesn&rsquo;t support location sharing.
        </p>
      )}
      {permission === "error" && (
        <p className="font-ui text-xs text-rose bg-rose/5 border border-rose/20 rounded-md px-3 py-2 mb-3">
          Couldn&rsquo;t get your location right now — check your device&rsquo;s location settings and try again.
        </p>
      )}
      {loadError && <p className="font-ui text-xs text-rose mb-3">{loadError}</p>}

      <div className="relative h-56 sm:h-72 rounded-lg border border-blush overflow-hidden bg-baby-pink/30">
        {me || her ? (
          <LocationMapImpl me={me} her={her} meMeta={meMeta} herMeta={herMeta} meSun={meSun} herSun={herSun} tileStyle={tileStyle} />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-center px-6">
            <p className="font-ui text-sm text-ink/40">
              Neither of you has shared a location yet — tap &ldquo;Share my location&rdquo; to start.
            </p>
          </div>
        )}
      </div>

      {/* Map style picker — purely cosmetic, swaps tiles without moving markers */}
      <div className="flex items-center gap-1.5 mt-2 overflow-x-auto pretty-scroll">
        <span className="font-ui text-[10px] uppercase tracking-wide text-ink/35 shrink-0">Map style</span>
        {Object.entries(MAP_STYLES).map(([id, style]) => (
          <button
            key={id}
            onClick={() => changeTileStyle(id)}
            className={`shrink-0 font-ui text-[11px] px-2.5 py-1 rounded-full border transition ${
              tileStyle === id
                ? "bg-rose text-paper border-rose"
                : "bg-white/60 text-ink/60 border-blush hover:bg-baby-pink/40"
            }`}
          >
            {style.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <PersonStatus meta={meMeta} loc={me} sun={meSun} isViewer={viewerIdentity === ME} />
        <PersonStatus meta={herMeta} loc={her} sun={herSun} isViewer={viewerIdentity === HER} />
      </div>

      <div className="mt-4 pt-4 border-t border-dashed border-blush flex items-center justify-between gap-2">
        <span className="font-ui text-xs uppercase tracking-wide text-ink/40">❤️ Closest we&rsquo;ve ever been</span>
        {closest ? (
          <span className="font-hand text-xl text-rose text-right">
            {formatDistance(closest.distanceMeters)}
            <span className="block font-ui text-[10px] text-ink/40 normal-case tracking-normal">
              {new Date(closest.recordedAt).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </span>
        ) : (
          <span className="font-ui text-xs text-ink/40">Not recorded yet</span>
        )}
      </div>
    </div>
  );
}

function PersonStatus({ meta, loc, sun, isViewer }) {
  const sunMeta = sun ? SUN_META[sun] : null;
  const localTime = loc && sun ? approxLocalTime(loc.longitude) : null;

  return (
    <div
      className={`relative overflow-hidden flex items-center gap-2 rounded-lg border border-blush/60 px-3 py-2 ${
        sunMeta ? `bg-gradient-to-br ${sunMeta.tint}` : "bg-white/50"
      }`}
    >
      <span
        className="h-3 w-3 rounded-full shrink-0"
        style={{ background: meta.color, boxShadow: `0 0 0 3px ${meta.color}22` }}
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <p className="font-ui text-xs font-semibold text-ink truncate">
          {meta.label}
          {isViewer ? " (you)" : ""}
        </p>
        <p className="font-ui text-[11px] text-ink/50 truncate">
          {loc ? (
            <>
              {timeAgo(loc.updatedAt)}
              {loc.stale && <span className="text-rose/70"> · last known</span>}
            </>
          ) : (
            `${meta.label}'s location isn't available right now.`
          )}
        </p>
      </div>
      {sunMeta && localTime && (
        <div className="shrink-0 flex flex-col items-center gap-0.5" title={sunMeta.label}>
          <sunMeta.Icon size={15} style={{ color: sunMeta.ring }} />
          <span className="font-ui text-[9px] text-ink/45 whitespace-nowrap">{localTime}</span>
        </div>
      )}
    </div>
  );
}
