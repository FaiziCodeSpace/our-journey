"use client";

import { useMemo, useRef, useState, useCallback, useEffect, useLayoutEffect } from "react";
import * as d3 from "d3";
import PolaroidImage from "./PolaroidImage";
import { authorLabel } from "@/lib/authorLabel";

/* ------------------------------------------------------------------ *
 * RelationshipTimeline
 *
 * A horizontal, independently-scrollable "meter" for the relationship.
 * It reads left (oldest) to right (most recent / "today"), like a
 * ruler that's zoomed in near "now" — the last few months get generous
 * spacing while everything older compresses together the further back
 * it goes. The scrollable width is computed analytically from the data
 * (not measured from the DOM), so every entry is guaranteed to land
 * inside the scroll range — nothing can render off in unreachable
 * space.
 *
 * Props:
 *  - entries: [{ id|_id, date: Date|string, author: 'me'|'her', note, images: [url] }]
 *  - onOpenEntry(entry): called when "read full entry" is pressed
 * ------------------------------------------------------------------ */

// ---- mock data for preview only — swap for real entries from MongoDB ----
const MOCK_ENTRIES = [
  { id: "1", date: "2022-03-14", author: "me", note: "The day we first called each other 'us'.", images: [] },
  { id: "2", date: "2022-06-02", author: "her", note: "You sent me a voice note at 3am and I fell asleep smiling.", images: [] },
  { id: "3", date: "2022-11-20", author: "me", note: "First video call where we just left the camera on for hours.", images: [] },
  { id: "4", date: "2023-02-14", author: "her", note: "Our first Valentine's, 6,000 miles apart.", images: [] },
  { id: "5", date: "2023-07-09", author: "me", note: "You finally visited. Airport hug lasted a full minute.", images: [] },
  { id: "6", date: "2024-01-01", author: "her", note: "New year, same us. Promised each other another year.", images: [] },
  { id: "7", date: "2024-08-22", author: "me", note: "Booked flights. Counting down.", images: [] },
  { id: "8", date: "2025-05-03", author: "her", note: "Two years in. Still choosing this every day.", images: [] },
  { id: "9", date: "2026-04-17", author: "me", note: "Talked about actually living in the same city.", images: [] },
  { id: "10", date: "2026-06-28", author: "her", note: "Just a normal Tuesday call. Those are my favorite now.", images: [] },
];

const DAY_MS = 86400000;
const RECENT_WINDOW_DAYS = 150; // this much time stays spacious, linear
const PX_PER_RECENT_DAY = 5; // spacing for the recent/linear zone
const COMPRESSED_ZONE_PX = 260; // fixed width the *entire* older history compresses into
const EDGE_PADDING = 48; // breathing room at each end of the track

/**
 * Builds a date -> x-position function across an analytically-sized
 * scrollable track. The most recent RECENT_WINDOW_DAYS get linear
 * spacing (PX_PER_RECENT_DAY each); everything older shares a fixed
 * COMPRESSED_ZONE_PX on a log scale, so as years pass and history
 * grows, older entries keep compressing tighter instead of pushing
 * the track's width out to infinity.
 */
function useTimeScale(sorted) {
  return useMemo(() => {
    if (!sorted.length) {
      return { dateToX: () => EDGE_PADDING, minDate: new Date(), maxDate: new Date(), trackWidth: 600, recentBoundary: new Date() };
    }

    const dates = sorted.map((e) => new Date(e.date));
    const minDate = d3.min(dates);
    const now = new Date();
    const maxDate = now > d3.max(dates) ? now : d3.max(dates);

    const recentBoundary = new Date(maxDate.getTime() - RECENT_WINDOW_DAYS * DAY_MS);
    const spansBeforeRecent = minDate < recentBoundary;

    const recentSpanDays = Math.max(1, (maxDate - recentBoundary) / DAY_MS);
    const recentZonePx = recentSpanDays * PX_PER_RECENT_DAY;
    const compressedZonePx = spansBeforeRecent ? COMPRESSED_ZONE_PX : 0;

    const recentScale = d3
      .scaleTime()
      .domain([recentBoundary, maxDate])
      .range([EDGE_PADDING + compressedZonePx, EDGE_PADDING + compressedZonePx + recentZonePx])
      .clamp(true);

    const oldestDaysBeforeBoundary = spansBeforeRecent
      ? Math.max(2, (recentBoundary - minDate) / DAY_MS)
      : 2;
    const compressedScale = d3
      .scaleLog()
      .domain([1, oldestDaysBeforeBoundary + 1])
      .range([EDGE_PADDING + compressedZonePx, EDGE_PADDING])
      .clamp(true);

    function dateToX(rawDate) {
      const date = new Date(rawDate);
      if (date >= recentBoundary) return recentScale(date);
      const daysBeforeBoundary = (recentBoundary - date) / DAY_MS;
      return compressedScale(daysBeforeBoundary + 1);
    }

    const trackWidth = EDGE_PADDING + compressedZonePx + recentZonePx + EDGE_PADDING;

    return { dateToX, minDate, maxDate, trackWidth, recentBoundary };
  }, [sorted]);
}

function HeartMark({ size = 16, filled = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="drop-shadow-sm">
      <path
        d="M12 20.5s-7.5-4.6-10-9.4C0.3 7.6 2.4 4 6 4c2 0 3.6 1.1 4.5 2.6C11.4 5.1 13 4 15 4c3.6 0 5.7 3.6 4 7.1-2.5 4.8-10 9.4-10 9.4z"
        fill={filled ? "var(--color-rose)" : "var(--color-paper)"}
        stroke="var(--color-rose)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EntryPreviewCard({ entry, viewerAuthor, onOpenEntry }) {
  if (!entry) {
    return (
      <div className="flex h-full items-center justify-center text-center px-4">
        <p className="font-ui text-xs text-ink/40">
          Tap a heart on the ribbon to preview a memory
        </p>
      </div>
    );
  }

  const date = new Date(entry.date);
  const dateLabel = date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });

  return (
    <div key={entry._id || entry.id} className="relative h-full flex gap-3 p-3 sm:p-4 animate-[fade-in_0.15s_ease-out]">
      {entry.images?.[0] && (
        <div className="shrink-0 self-center">
          <PolaroidImage src={entry.images[0]} seed={entry._id || entry.id} size="sm" />
        </div>
      )}
      <div className="min-w-0 flex-1 flex flex-col">
        <p className="font-ui text-[11px] tracking-wide uppercase text-rose mb-1">
          {dateLabel} · {authorLabel(entry.author, viewerAuthor)}
        </p>
        <p className="font-hand text-lg leading-snug text-ink line-clamp-3 flex-1">{entry.note}</p>
        <button
          onClick={() => onOpenEntry?.(entry)}
          className="mt-1 self-start font-ui text-xs font-semibold text-rose hover:underline"
        >
          Read full entry →
        </button>
      </div>
    </div>
  );
}

export default function RelationshipTimeline({ entries = MOCK_ENTRIES, viewerAuthor, onOpenEntry }) {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(320);
  const [activeId, setActiveId] = useState(null);
  const hasAutoScrolled = useRef(false);

  const sorted = useMemo(
    () => [...entries].sort((a, b) => new Date(a.date) - new Date(b.date)),
    [entries]
  );

  const { dateToX, minDate, maxDate, trackWidth: computedWidth } = useTimeScale(sorted);
  // never let the track be narrower than the visible viewport — otherwise
  // there'd be nothing to scroll and the ribbon would look squashed
  const trackWidth = Math.max(computedWidth, containerWidth);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Default scroll position: right edge (most recent), so "today" is
  // visible on load — scoped to this module only, never the page.
  useLayoutEffect(() => {
    if (!hasAutoScrolled.current && scrollRef.current && trackWidth > containerWidth) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
      hasAutoScrolled.current = true;
    }
  }, [trackWidth, containerWidth]);

  const yearMarkers = useMemo(() => {
    if (!minDate || !maxDate) return [];
    const years = [];
    for (let y = minDate.getFullYear(); y <= maxDate.getFullYear(); y++) {
      years.push(new Date(y, 0, 1));
    }
    return years;
  }, [minDate, maxDate]);

  const activeEntry = sorted.find((e) => (e._id || e.id) === activeId);

  const handleMarkerInteract = useCallback((id) => {
    setActiveId((cur) => (cur === id ? null : id));
  }, []);

  return (
    <div className="w-full bg-paper/90 rounded-xl border border-blush shadow-[3px_5px_0_rgba(74,53,64,0.10)] p-4 sm:p-5">
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="font-hand text-3xl text-ink rotate-[-1deg]">us, so far</h2>
        <span className="font-ui text-[11px] text-ink/40">scroll for the past →</span>
      </div>

      {sorted.length > 0 && (
        <p className="font-ui text-xs text-rose/70 -mt-2 mb-3">
          {Math.max(1, Math.floor((maxDate - minDate) / DAY_MS))} days of &ldquo;us&rdquo; and counting 💌
        </p>
      )}

      <div
        ref={containerRef}
        className="relative rounded-lg border border-blush bg-paper shadow-inner overflow-hidden"
      >
        <div
          ref={scrollRef}
          className="pretty-scroll relative w-full overflow-x-auto overflow-y-hidden touch-pan-x"
        >
          <div className="relative h-40 sm:h-44" style={{ width: trackWidth }}>
            {/* stitched ribbon spine */}
            <div
              className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed -translate-y-1/2"
              style={{ borderColor: "var(--color-rose)", opacity: 0.35 }}
            />

            {/* year labels, sitting under the ribbon */}
            {yearMarkers.map((yearDate) => (
              <div
                key={yearDate.getFullYear()}
                className="absolute bottom-3 -translate-x-1/2 font-hand text-sm text-rose/60"
                style={{ left: dateToX(yearDate) }}
              >
                {yearDate.getFullYear()}
              </div>
            ))}

            {/* entry markers */}
            {sorted.map((entry) => {
              const entryId = entry._id || entry.id;
              const x = dateToX(entry.date);
              const isActive = activeId === entryId;
              return (
                <button
                  key={entryId}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-rose/40"
                  style={{ left: x }}
                  onMouseEnter={() => setActiveId(entryId)}
                  onClick={() => handleMarkerInteract(entryId)}
                  aria-label={`Entry from ${new Date(entry.date).toDateString()}`}
                >
                  <HeartMark filled={isActive} size={isActive ? 20 : 14} />
                </button>
              );
            })}

            {/* "today" pin */}
            <div
              className="absolute top-3 -translate-x-1/2 font-ui text-[10px] font-semibold text-rose bg-baby-pink px-2 py-0.5 rounded-full whitespace-nowrap"
              style={{ left: dateToX(maxDate) }}
            >
              today
            </div>
          </div>
        </div>
      </div>

      {/* dedicated preview slot below the ribbon — never floats over the
          track, so it can't get clipped or push the module's own scroll
          area around */}
      <div className="mt-3 h-24 sm:h-28 rounded-lg border border-blush/70 bg-white/40">
        <EntryPreviewCard entry={activeEntry} viewerAuthor={viewerAuthor} onOpenEntry={onOpenEntry} />
      </div>
    </div>
  );
}
