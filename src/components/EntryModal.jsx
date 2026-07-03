"use client";

import { useEffect, useState } from "react";
import PolaroidImage from "./PolaroidImage";
import { authorLabel } from "@/lib/authorLabel";

export default function EntryModal({ entry, viewerAuthor, onClose, onEdit, onDelete }) {
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!entry) return null;

  async function handleDelete() {
    setDeleting(true);
    setError(null);
    try {
      const res = await fetch(`/api/entries/${entry._id || entry.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete entry");
      onDelete?.(entry);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setDeleting(false);
    }
  }

  const date = new Date(entry.date);
  const dateLabel = date.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const isMine = entry.author === viewerAuthor;
  const label = authorLabel(entry.author, viewerAuthor);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md sm:max-w-lg max-h-[85vh] overflow-y-auto pretty-scroll bg-paper rounded-lg border border-blush shadow-[6px_8px_0_rgba(74,53,64,0.15)] p-6 animate-[rise-in_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-baby-pink/70 text-ink/60 hover:text-ink font-ui text-sm"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex items-center justify-between pr-10 mb-1">
          <p className="font-ui text-xs uppercase tracking-wide text-rose">
            {label === "You" ? "You wrote" : `${label} wrote`}
          </p>
          {isMine && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => onEdit?.(entry)}
                className="font-ui text-xs font-semibold text-rose hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => setConfirmingDelete(true)}
                className="font-ui text-xs font-semibold text-ink/40 hover:text-rose transition-colors"
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <h3 className="font-hand text-3xl text-ink mb-4">{dateLabel}</h3>

        {entry.images?.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-4 justify-center">
            {entry.images.map((src, i) => (
              <PolaroidImage key={src} src={src} seed={`${entry._id || entry.id}-${i}`} size="md" />
            ))}
          </div>
        )}

        <p className="font-hand text-2xl leading-relaxed text-ink whitespace-pre-wrap">{entry.note}</p>

        {error && <p className="font-ui text-xs text-rose mt-4">{error}</p>}

        {confirmingDelete && (
          <div className="mt-5 pt-4 border-t border-dashed border-blush flex items-center justify-center gap-3 font-ui text-xs">
            <span className="text-ink/60">Delete this memory{entry.images?.length ? " and its photos" : ""} for good?</span>
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="text-rose font-semibold hover:underline disabled:opacity-60"
            >
              {deleting ? "Deleting..." : "Yes, delete"}
            </button>
            <button
              onClick={() => setConfirmingDelete(false)}
              disabled={deleting}
              className="text-ink/50 hover:underline"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
