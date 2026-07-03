// Next.js App Router automatically renders this as the Suspense fallback
// while `page.js` (an async Server Component) is still resolving — no
// manual wiring needed, it's a filename convention.
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-paper scrapbook-bg">
      <div className="relative flex items-center justify-center h-24 w-24">
        <span
          className="absolute inset-0 rounded-full bg-blush animate-[heart-glow_1.1s_ease-in-out_infinite]"
          aria-hidden="true"
        />
        <svg
          viewBox="0 0 32 29"
          className="relative h-14 w-14 text-rose animate-[heartbeat_1.1s_ease-in-out_infinite]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 28.5s-1.1-.8-2.6-2C7.9 22.1 1 16.6 1 9.9 1 5 4.6 1 9.2 1c2.6 0 5.1 1.3 6.8 3.4C17.7 2.3 20.2 1 22.8 1 27.4 1 31 5 31 9.9c0 6.7-6.9 12.2-12.4 16.6-1.5 1.2-2.6 2-2.6 2z" />
        </svg>
      </div>
      <p className="font-hand text-3xl sm:text-4xl text-rose text-center px-6">
        a little wait, Sweatheart...
      </p>
    </div>
  );
}
