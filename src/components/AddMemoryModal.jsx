"use client";

import { useState } from "react";
import { uploadImages } from "@/lib/uploadImage";

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function toISODate(date) {
  return new Date(date).toISOString().slice(0, 10);
}

/**
 * Doubles as both "add a memory" and "edit a memory" — pass an
 * `entry` prop to switch into edit mode (prefilled fields, PATCH
 * instead of POST, plus a delete option).
 */
export default function AddMemoryModal({ onClose, onSaved, onDeleted, entry = null }) {
  const isEditing = Boolean(entry);
  const [date, setDate] = useState(entry ? toISODate(entry.date) : todayISO());
  const [note, setNote] = useState(entry?.note || "");
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState(entry?.images || []);
  const [removedExisting, setRemovedExisting] = useState([]);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [error, setError] = useState(null);

  function handleFiles(e) {
    const chosen = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...chosen]);
    setPreviews((prev) => [...prev, ...chosen.map((f) => URL.createObjectURL(f))]);
  }

  function removePreview(i) {
    const src = previews[i];
    if (entry?.images?.includes(src)) setRemovedExisting((prev) => [...prev, src]);
    else setFiles((prev) => prev.filter((f) => URL.createObjectURL(f) !== src));
    setPreviews((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!note.trim()) {
      setError("Write something first — even a line.");
      return;
    }
    setSaving(true);
    setError(null);

    try {
      const newlyUploaded = files.length ? await uploadImages(files) : [];
      const keptExisting = (entry?.images || []).filter((src) => !removedExisting.includes(src));
      const images = [...keptExisting, ...newlyUploaded];

      const res = await fetch(isEditing ? `/api/entries/${entry._id || entry.id}` : "/api/entries", {
        method: isEditing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, note, images }),
      });

      if (!res.ok) throw new Error(isEditing ? "Failed to update entry" : "Failed to save entry");
      const saved = await res.json();
      onSaved?.(saved);
      onClose?.();
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    setDeleting(true);
    setError(null);
    try {
      const res = await fetch(`/api/entries/${entry._id || entry.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete entry");
      onDeleted?.(entry);
      onClose?.();
    } catch (err) {
      setError(err.message || "Something went wrong");
      setDeleting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-ink/40 backdrop-blur-sm p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md sm:max-w-lg max-h-[92vh] overflow-y-auto pretty-scroll bg-paper rounded-lg border border-blush shadow-[6px_8px_0_rgba(74,53,64,0.15)] p-6 animate-[rise-in_0.2s_ease-out]"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-hand text-3xl text-ink rotate-[-1deg]">
            {isEditing ? "Edit this memory" : "New memory"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-baby-pink/70 text-ink/60 hover:text-ink font-ui text-sm"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <label className="block font-ui text-xs uppercase tracking-wide text-rose mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-4 rounded-md border border-blush bg-white/70 px-3 py-2 font-ui text-sm text-ink focus:outline-none focus:ring-2 focus:ring-rose/30"
        />

        <label className="block font-ui text-xs uppercase tracking-wide text-rose mb-1">Note</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          placeholder="What happened today..."
          className="w-full mb-4 rounded-md border border-blush bg-white/70 px-3 py-2 font-hand text-lg text-ink focus:outline-none focus:ring-2 focus:ring-rose/30 resize-none"
        />

        <label className="block font-ui text-xs uppercase tracking-wide text-rose mb-1">Photos</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFiles}
          className="w-full mb-3 font-ui text-xs text-ink/70 file:mr-3 file:rounded-full file:border-0 file:bg-baby-pink file:px-3 file:py-1.5 file:font-ui file:text-xs file:font-semibold file:text-rose"
        />

        {previews.length > 0 && (
          <div className="flex gap-2 mb-4 overflow-x-auto pretty-scroll">
            {previews.map((src, i) => (
              <div key={src + i} className="relative shrink-0">
                <img src={src} alt="" className="h-16 w-16 object-cover rounded-sm border border-blush" />
                <button
                  type="button"
                  onClick={() => removePreview(i)}
                  className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-rose text-paper text-[10px] leading-5 shadow"
                  aria-label="Remove photo"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {error && <p className="font-ui text-xs text-rose mb-3">{error}</p>}

        <button
          type="submit"
          disabled={saving || deleting}
          className="w-full font-ui text-sm font-semibold bg-rose text-paper px-5 py-3 rounded-full shadow-[0_4px_14px_rgba(181,56,79,0.35)] hover:brightness-110 active:scale-95 transition disabled:opacity-60"
        >
          {saving ? "Saving..." : isEditing ? "Save changes" : "Save memory"}
        </button>

        {isEditing && (
          <div className="mt-4 pt-4 border-t border-dashed border-blush">
            {!confirmingDelete ? (
              <button
                type="button"
                onClick={() => setConfirmingDelete(true)}
                className="w-full font-ui text-xs text-ink/40 hover:text-rose transition-colors"
              >
                Delete this memory
              </button>
            ) : (
              <div className="flex items-center justify-center gap-3 font-ui text-xs">
                <span className="text-ink/60">Delete for good?</span>
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={deleting}
                  className="text-rose font-semibold hover:underline disabled:opacity-60"
                >
                  {deleting ? "Deleting..." : "Yes, delete"}
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmingDelete(false)}
                  className="text-ink/50 hover:underline"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
