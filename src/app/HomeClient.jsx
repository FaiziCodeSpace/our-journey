"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import RelationshipTimeline from "@/components/RelationshipTimeline";
import MemoriesFeed from "@/components/MemoriesFeed";
import DiarySpread from "@/components/DiarySpread";
import EntryModal from "@/components/EntryModal";
import AddMemoryModal from "@/components/AddMemoryModal";

const TABS = [
  { id: "journey", label: "Journey" },
  { id: "diary", label: "Diary" },
];

function entryId(e) {
  return e?._id || e?.id;
}

export default function HomePage() {
  const { data: session, status } = useSession();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [tab, setTab] = useState("journey");
  const [openEntry, setOpenEntry] = useState(null);
  const [editingEntry, setEditingEntry] = useState(null); // non-null (or {}) => modal is in edit/add mode
  const [toast, setToast] = useState(null);

  const viewerAuthor = session?.user?.author;

  useEffect(() => {
    // Middleware already gates this page, but guard in case the session
    // hasn't hydrated yet on first paint.
    if (status !== "authenticated") return;

    fetch("/api/entries")
      .then((r) => {
        if (!r.ok) throw new Error("Couldn't load your memories. Try refreshing.");
        return r.json();
      })
      .then((data) => setEntries(Array.isArray(data) ? data : []))
      .catch((err) => setLoadError(err.message))
      .finally(() => setLoading(false));
  }, [status]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  function handleSaved(saved) {
    setEntries((prev) => {
      const exists = prev.some((e) => entryId(e) === entryId(saved));
      return exists
        ? prev.map((e) => (entryId(e) === entryId(saved) ? saved : e))
        : [...prev, saved];
    });
    setToast(editingEntry?._id || editingEntry?.id ? "Memory updated 💕" : "Memory saved 💕");
  }

  function handleDeleted(deleted) {
    setEntries((prev) => prev.filter((e) => entryId(e) !== entryId(deleted)));
    if (entryId(openEntry) === entryId(deleted)) setOpenEntry(null);
    setToast("Memory deleted");
  }

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="font-ui text-sm text-ink/50">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <header className="pt-6 sm:pt-8 pb-3 sm:pb-4 px-4 sm:px-8 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="w-16 sm:w-24" aria-hidden /> {/* balances the sign-out button so the title stays centered */}
        <div className="text-center">
          <h1 className="font-hand text-3xl sm:text-5xl text-ink rotate-[-1deg]">Memory Lane</h1>
          {session?.user?.name && (
            <p className="font-ui text-[11px] sm:text-xs text-ink/40 mt-0.5">
              signed in as {session.user.name}
            </p>
          )}
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="font-ui text-xs text-ink/40 hover:text-rose transition-colors w-16 sm:w-24 text-right"
        >
          Sign out
        </button>
      </header>

      <nav className="flex justify-center gap-2 mb-4 sm:mb-6 px-4">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`font-ui text-sm px-5 py-1.5 rounded-full transition-colors ${
              tab === t.id ? "bg-rose text-paper" : "bg-baby-pink/60 text-ink/60 hover:bg-baby-pink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="flex-1 px-3 sm:px-8 pb-28 w-full max-w-7xl mx-auto">
        {loading ? (
          <p className="font-ui text-sm text-ink/50 text-center py-16">Loading your memories...</p>
        ) : loadError ? (
          <p className="font-ui text-sm text-rose text-center py-16">{loadError}</p>
        ) : (
          <>
            {tab === "journey" && (
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                <div className="w-full lg:w-[46%] lg:sticky lg:top-6">
                  <RelationshipTimeline entries={entries} viewerAuthor={viewerAuthor} onOpenEntry={setOpenEntry} />
                </div>
                <div className="w-full lg:flex-1 lg:min-w-0">
                  <MemoriesFeed entries={entries} viewerAuthor={viewerAuthor} onOpenEntry={setOpenEntry} />
                </div>
              </div>
            )}
            {tab === "diary" && <DiarySpread entries={entries} viewerAuthor={viewerAuthor} />}
          </>
        )}
      </div>

      <button
        onClick={() => setEditingEntry({})}
        className="fixed left-1/2 -translate-x-1/2 z-30 font-ui text-sm font-semibold bg-rose text-paper px-5 py-3 rounded-full shadow-[0_4px_14px_rgba(181,56,79,0.35)] hover:brightness-110 active:scale-95 transition"
        style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
      >
        + Add more memories
      </button>

      {toast && (
        <div
          className="fixed left-1/2 -translate-x-1/2 z-40 font-ui text-xs font-semibold bg-ink text-paper px-4 py-2 rounded-full shadow-lg animate-[rise-in_0.2s_ease-out]"
          style={{ bottom: "max(5.5rem, calc(env(safe-area-inset-bottom) + 4.5rem))" }}
        >
          {toast}
        </div>
      )}

      {openEntry && (
        <EntryModal
          entry={openEntry}
          viewerAuthor={viewerAuthor}
          onClose={() => setOpenEntry(null)}
          onEdit={(entry) => {
            setOpenEntry(null);
            setEditingEntry(entry);
          }}
          onDelete={handleDeleted}
        />
      )}
      {editingEntry && (
        <AddMemoryModal
          entry={entryId(editingEntry) ? editingEntry : null}
          onClose={() => setEditingEntry(null)}
          onSaved={handleSaved}
          onDeleted={handleDeleted}
        />
      )}
    </main>
  );
}
