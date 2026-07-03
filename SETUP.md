# Memory Lane — setup notes

## Env vars (.env.local — never commit this)
```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/memory-lane?retryWrites=true&w=majority
NEXTAUTH_SECRET=              # any long random string, e.g. openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000   # your real domain in production
AUTH_ME_EMAIL=
AUTH_ME_PASSWORD_HASH=        # node -e "console.log(require('bcryptjs').hashSync('yourpassword', 10))"
AUTH_HER_EMAIL=
AUTH_HER_PASSWORD_HASH=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=   # unsigned preset, no spaces in the name
CLOUDINARY_API_KEY=           # Cloudinary dashboard > Settings > Access Keys — needed to delete images
CLOUDINARY_API_SECRET=        # same place; keep this one secret, never NEXT_PUBLIC_
```
Restart `next dev` after any change to `.env.local` — it's only read on startup.

### Deleting a memory also deletes its photos
Uploads happen client-side straight to Cloudinary (unsigned preset), but deleting an
image requires a signed request, so that part happens server-side in
`src/lib/cloudinary.js` using `CLOUDINARY_API_KEY`/`CLOUDINARY_API_SECRET`. If those
two vars aren't set, deleting a memory still works — it just leaves the orphaned
images sitting in Cloudinary and logs a warning instead of failing the request.

### ⚠️ Escape the `$` in bcrypt hashes
Next.js's built-in env loader supports shell-style variable interpolation — any `$word`
inside a `.env*` value is treated as a reference to another variable and silently replaced
(with an empty string if that variable doesn't exist). Bcrypt hashes are full of `$` characters
(`$2b$10$...`), so **every `$` in `NEXTAUTH_SECRET`, `AUTH_ME_PASSWORD_HASH`, and
`AUTH_HER_PASSWORD_HASH` must be escaped as `\$`**, or the stored hash gets silently truncated
and no password will ever match it. Example of a correctly-escaped line:
```
AUTH_ME_PASSWORD_HASH=\$2b\$10\$SgmvAffTvc9sW9EzS8kY8.Km0YNGTpNGWImmzRkF788DgDAZFQAU2
```
This is the actual cause behind "email or password doesn't match" even with correct
credentials — the comparison was never against your real hash.

## Auth stack: Auth.js v5 (`next-auth@5.0.0-beta.31`)
This project runs on **Next.js 16**, which renamed `middleware.js` → `proxy.js` with a new,
stricter export convention. `next-auth@4`'s `next-auth/middleware` predates that convention and
isn't recognized by it, which broke *every* route (not just protected ones) — including the
login page and the NextAuth API routes themselves. That's the second half of why login always
failed: the request never even reached `authorize()`.

The fix was migrating to Auth.js v5, which has first-class support for the `proxy.js`
convention:
- Auth config now lives in `src/auth.js`, exporting `{ handlers, auth, signIn, signOut }`
  from a single `NextAuth(...)` call.
- `src/app/api/auth/[...nextauth]/route.js` re-exports `handlers.GET` / `handlers.POST`.
- `src/proxy.js` re-exports `auth` directly as the default export — no wrapper needed.
- `src/app/api/entries/route.js` uses `await auth()` instead of
  `getServerSession(authOptions)`.
- `next-auth/react` (`useSession`, `signIn`, `signOut`, `SessionProvider`) is unchanged.

No credentials, secrets, or hashes are hardcoded anywhere in the code — everything still comes
from `AUTH_ME_EMAIL`, `AUTH_ME_PASSWORD_HASH`, `AUTH_HER_EMAIL`, `AUTH_HER_PASSWORD_HASH`, and
`NEXTAUTH_SECRET` in your env file, same as before.

## What's in this pass
- **Auth is now actually wired up**: `src/app/login/page.js` (themed sign-in form), `src/app/providers.jsx`
  (SessionProvider), `src/proxy.js` (Next.js 16's replacement for `middleware.js` — redirects anyone without
  a session to `/login`, except the login page and NextAuth's own API routes).
- **Sign-out button** + "signed in as ..." label in the header on `src/app/page.js`.
- **Responsiveness pass**: timeline and diary now use viewport-relative heights (`h-[min(65vh,560px)]` etc.)
  instead of fixed pixel heights, so they don't clip on short phone screens. Diary page padding/text scale
  down on small screens. The add-memory modal caps its height and scrolls internally instead of overflowing
  on landscape/short viewports. The floating "+ Add more memories" button respects `env(safe-area-inset-bottom)`
  for notched phones.
- **Removed a duplicate**: there were two "+ Add more memories" buttons wired up (one in `MemoriesFeed`,
  one in `page.js`). Now there's a single one in `page.js` shared across all three tabs.
- **Load errors surface in the UI** instead of silently showing an empty state — if `/api/entries` fails,
  you'll see a message instead of a blank feed.

## First login
There's no signup flow by design — create your two accounts by hashing passwords yourself (command above)
and putting the emails/hashes in `.env.local`. Then go to `/login` and sign in with the plain-text password
(the hash is only for storage/comparison).

## Still open / worth deciding next
1. **Diary pairing**: left/right pages are paired by chronological index (your Nth entry opposite her Nth
   entry), not by nearest date. Swap in `DiarySpread.jsx` if you want date-based pairing instead.
2. **Marker clustering**: on the timeline, many entries landing in the same compressed year will currently
   overlap. Worth adding once you're testing with real volume of entries.
3. **Feed-position ↔ meter-scroll syncing** — listed as a nice-to-have in the original brief, not built.
4. **Cloudinary preset is unsigned** — fine for a private two-person app, but anyone with the public cloud
   name + preset could technically upload to your account. Say the word if you want it switched to signed
   uploads (adds a small server step).
