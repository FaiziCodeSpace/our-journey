"use client";

import { useMemo, useState, useRef } from "react";
import PolaroidImage from "./PolaroidImage";
import { authorLabel } from "@/lib/authorLabel";

/**
 * Pairs "me" and "her" entries into spreads by chronological index —
 * the Nth thing I wrote sits opposite the Nth thing she wrote. If one
 * side runs longer, the shorter side just shows an empty page.
 *
 * (Open question from the brief: index-pairing vs. date-nearest pairing.
 * This uses index-pairing because it's simpler and doesn't leave gaps —
 * swap the `spreads` memo below if you'd rather pair by nearest date.)
 */
function useSpreads(entries) {
  return useMemo(() => {
    const mine = entries.filter((e) => e.author === "me").sort((a, b) => new Date(a.date) - new Date(b.date));
    const hers = entries.filter((e) => e.author === "her").sort((a, b) => new Date(a.date) - new Date(b.date));
    const count = Math.max(mine.length, hers.length);
    return Array.from({ length: count }, (_, i) => ({ left: mine[i] || null, right: hers[i] || null }));
  }, [entries]);
}

function DiaryPage({ entry, side, viewerAuthor }) {
  const isEmpty = !entry;
  const rotationClass = side === "left" ? "-rotate-[0.4deg]" : "rotate-[0.4deg]";

  return (
    <div
      className={`relative h-full w-full bg-[#FBF6EF]/90 ${rotationClass} rounded-sm p-3 sm:p-5 flex flex-col`}
      style={{
        boxShadow: side === "left" ? "inset -6px 0 12px -8px rgba(74,53,64,0.15)" : "inset 6px 0 12px -8px rgba(74,53,64,0.15)",
        clipPath: "polygon(0 0, 100% 0, 100% 98%, 98% 100%, 0 100%)", // faint deckled corner
      }}
    >
      {isEmpty ? (
        <p className="font-ui text-sm text-ink/30 m-auto text-center">
          {side === "left" ? "Nothing written here yet" : "Waiting for the next entry"}
        </p>
      ) : (
        <>
          <div className="flex items-center justify-between mb-2">
            <p className="font-ui text-[11px] uppercase tracking-wide text-rose">
              {new Date(entry.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
            </p>
            <span className="font-ui text-[10px] uppercase tracking-wide text-ink/35">
              {authorLabel(entry.author, viewerAuthor)}
            </span>
          </div>
          {entry.images?.[0] && (
            <div className="mb-3 self-center">
              <PolaroidImage src={entry.images[0]} seed={entry._id || entry.id} size="sm" />
            </div>
          )}
          <p className="font-hand text-lg sm:text-xl leading-relaxed text-ink overflow-y-auto pretty-scroll flex-1 whitespace-pre-wrap">
            {entry.note}
          </p>
        </>
      )}
    </div>
  );
}

export default function DiarySpread({ entries = [], viewerAuthor }) {
  const spreads = useSpreads(entries);
  const [page, setPage] = useState(Math.max(0, spreads.length - 1));
  const touchStartX = useRef(null);

  const goTo = (i) => setPage(Math.min(Math.max(i, 0), spreads.length - 1));

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? page + 1 : page - 1);
    touchStartX.current = null;
  }

  if (spreads.length === 0) {
    return <p className="font-ui text-sm text-ink/50 text-center py-16">No diary entries yet.</p>;
  }

  const current = spreads[page];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* the photographed open-book background frames the pages; percentages
          below approximate the visible page area of that photo so the
          editable content sits "inside" the book rather than over its
          washi-tape / polaroid / flower decorations */}
      <div className="diary-bg relative w-full aspect-square sm:aspect-[4/3] rounded-2xl border border-blush shadow-[4px_6px_0_rgba(74,53,64,0.15)] overflow-hidden">
        <div
          key={page}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="absolute flex animate-[page-flip_0.25s_ease-out]"
          style={{ top: "16%", bottom: "20%", left: "9%", right: "9%" }}
        >
          <div className="w-1/2 pr-[2px]">
            <DiaryPage entry={current.left} side="left" viewerAuthor={viewerAuthor} />
          </div>
          <div className="w-1/2 pl-[2px]">
            <DiaryPage entry={current.right} side="right" viewerAuthor={viewerAuthor} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 px-1 font-ui text-sm text-ink/60">
        <button
          onClick={() => goTo(page - 1)}
          disabled={page === 0}
          className="px-3 py-1.5 rounded-full hover:bg-baby-pink/60 disabled:opacity-30"
        >
          ← Back
        </button>
        <span className="text-xs">
          page {page + 1} of {spreads.length}
        </span>
        <button
          onClick={() => goTo(page + 1)}
          disabled={page === spreads.length - 1}
          className="px-3 py-1.5 rounded-full hover:bg-baby-pink/60 disabled:opacity-30"
        >
          Forward →
        </button>
      </div>
    </div>
  );
}
