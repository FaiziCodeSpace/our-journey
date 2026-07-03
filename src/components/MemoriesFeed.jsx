"use client";

import { useMemo } from "react";
import PolaroidImage from "./PolaroidImage";
import { authorLabel } from "@/lib/authorLabel";

export default function MemoriesFeed({ entries = [], viewerAuthor, onOpenEntry }) {
  const sorted = useMemo(
    () => [...entries].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [entries]
  );

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-baseline justify-between px-1 mb-3">
        <h2 className="font-hand text-3xl text-ink rotate-[-1deg]">Your memories</h2>
        <span className="font-ui text-xs text-ink/40">{sorted.length} entries</span>
      </div>

      {sorted.length === 0 && (
        <p className="font-ui text-sm text-ink/50 text-center py-12">
          Nothing here yet — add your first memory below.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 px-1">
        {sorted.map((entry) => {
          const date = new Date(entry.date);
          const dateLabel = date.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          });

          return (
            <button
              key={entry._id || entry.id}
              onClick={() => onOpenEntry?.(entry)}
              className="w-full text-left bg-paper/90 border border-blush/70 rounded-md p-3 hover:border-rose/50 hover:-translate-y-0.5 transition-all animate-[rise-in_0.25s_ease-out] shadow-[2px_3px_0_rgba(74,53,64,0.06)]"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-ui text-[11px] uppercase tracking-wide text-rose">
                  {dateLabel} · {authorLabel(entry.author, viewerAuthor)}
                </span>
              </div>

              {entry.images?.[0] && (
                <div className="mb-2">
                  <PolaroidImage src={entry.images[0]} seed={entry._id || entry.id} size="sm" />
                </div>
              )}

              <p className="font-hand text-lg leading-snug text-ink line-clamp-2">{entry.note}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
