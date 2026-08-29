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

# Optional — override the default "Him"/"Her" labels used everywhere
# (memories, the location page, notifications) with real names.
NEXT_PUBLIC_ME_LABEL=
NEXT_PUBLIC_HER_LABEL=

# Optional — push notifications (memory alerts even when the site is
# closed). Leave these blank and everything else still works; the bell's
# in-app notifications don't need them. Generate a pair with:
#   npx web-push generate-vapid-keys
# and paste the two keys below. VAPID_SUBJECT must be a mailto: or
# https: URL — some push services require it to be reachable.
NEXT_PUBLIC_VAPID_PUBLIC_KEY=
VAPID_PRIVATE_KEY=
VAPID_SUBJECT=mailto:you@example.com
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

## Live Location, notifications, and the identity audit (this pass)

**No new required env vars.** The map uses Leaflet + OpenStreetMap raster
tiles, which need no API key/token. `NEXT_PUBLIC_ME_LABEL`/`NEXT_PUBLIC_HER_LABEL`
(above) already existed as an undocumented option in `authorLabel.js` —
they're just documented now, and also drive the new Location page's
colors/labels.

- **`src/lib/identity.js`** is the new single source of truth for "who is
  this": `getIdentity(session)` resolves `"me" | "her"` from the
  server-side session only (never from the client), `getOtherIdentity()`
  gives you the partner, and `IDENTITY_META` holds each identity's label
  + color. `authorLabel.js`, `Entry.js`, `DiarySpread.jsx`, and every new
  route now read from here instead of repeating `"me"`/`"her"` string
  literals.
- **Identity audit finding**: I read through every component listed in the
  brief (`AddMemoryModal`, `EntryModal`, `MemoriesFeed`,
  `RelationshipTimeline`, `HomeClient`) and didn't find an actual
  swapped Him/Her display bug — `authorLabel()` was already threaded
  through consistently everywhere. What *was* true is that `"me"`/`"her"`
  were hardcoded as raw strings in several unrelated files with no shared
  source, which is exactly the kind of thing that causes drift later.
  That's now centralized (see above).
- **Live Location** (`src/components/OurLocation.jsx` + `LocationMap.jsx`):
  a third tab ("Location") next to Journey/Diary. Uses the browser's
  Geolocation `watchPosition`, throttled to at most one write per ~20s
  (or a 15m move, whichever comes first) so it doesn't hammer the DB.
  Custom blue "Him" / pink "Her" markers are hand-built Leaflet divIcons
  (no generic pins, no paid map API). Handles both-available,
  one-available, neither-available, permission-denied, unsupported, and
  stale-location states explicitly. The geolocation watcher is stopped
  whenever the Location tab unmounts (switching tabs, or leaving the
  page) — it never keeps running in the background.
- **Closest-we've-ever-been** is a single record (`DistanceRecord` model),
  updated via a race-safe atomic upsert (`findOneAndUpdate` with a `$gt`
  guard) so two near-simultaneous location updates from both accounts
  can't corrupt it.
- **Notifications**: creating a memory (`POST /api/entries`) now creates a
  `Notification` for the *other* identity only — never the creator. The
  bell in the header polls an unread count every ~25s; clicking a
  notification marks it read and opens the memory in the existing
  `EntryModal` (no second memory viewer was built).
- **Security**: every new route derives identity from `getIdentity(session)`
  server-side. Nothing in `/api/location` or `/api/notifications` accepts
  an identity/recipient from the request body — there's no field to spoof.
- **One gap I noticed, unrelated to this pass**: this file documents
  `src/proxy.js` (redirects unauthenticated visitors to `/login`), but
  that file isn't actually in the project as uploaded. The root page
  (`src/app/page.js`) still gates itself with its own `auth()` check, and
  every API route (old and new) checks auth independently, so nothing is
  unprotected — but if `proxy.js` really is missing rather than just
  gitignored, worth re-adding it.

## Second pass: map polish, day/night, accuracy, push notifications

- **Fixed a real bug**: Tailwind's Preflight resets `img { max-width:
  100%; height: auto }` globally, which breaks Leaflet — its tiles and
  markers are positioned assuming their real pixel size. This is almost
  certainly why the map looked wrong/squished. Scoped a fix to
  `.leaflet-container img` in `globals.css` so it doesn't touch anything
  else.
- **Map style is now switchable** — Voyager/Light/Dark/Classic tile
  presets (all free, no API key), picked from small pills under the map,
  remembered in `localStorage`. Markers now also carry a small
  sun/twilight/moon corner badge per person.
- **Day/night** (`src/lib/dayNight.js`, uses `suncalc`) is computed from
  each person's actual coordinates, not timezone — a sun-altitude
  calculation, so it's correct regardless of political time zones or DST.
  Shown as an icon + rough "solar" local time (15°-of-longitude estimate,
  not a real timezone) next to each person's status card, with the card's
  background tinting warm for day / cool for night.
- **Location accuracy**: `watchPosition` now forces `maximumAge: 0`
  (always a fresh GPS read, not a cached one), and fixes noisier than
  100m accuracy are discarded client-side before ever reaching the
  server — a bad reading is worse than no reading, especially for the
  closest-ever record. Movement threshold for DB writes tightened to 8m.
- **Closest-ever record now always updates**, including from the very
  first pairing of locations — it no longer waits for both locations to
  be "fresh" (within 5 minutes of each other) before computing/saving a
  distance. The distance shown in the UI does the same. Staleness is
  still surfaced separately via the "last known" badge on each person's
  status, it just no longer blocks the record itself.
- **Push notifications** (optional, see `NEXT_PUBLIC_VAPID_PUBLIC_KEY`/
  `VAPID_PRIVATE_KEY` above): when a memory is created, the other
  identity gets a real OS-level push notification — even with the site
  closed — via a service worker (`public/sw.js`) + the `web-push` package.
  The copy is identical to the in-app notification ("Him added a new
  memory", never "You posted a memory") since both read from the same
  title/message built in `POST /api/entries`. Enabled per-device from a
  toggle at the bottom of the notification panel (requires a user tap —
  never auto-prompts for permission). If the VAPID keys aren't set, this
  toggle just doesn't appear; nothing else is affected.

## Still open / worth deciding next
1. **Diary pairing**: left/right pages are paired by chronological index (your Nth entry opposite her Nth
   entry), not by nearest date. Swap in `DiarySpread.jsx` if you want date-based pairing instead.
2. **Marker clustering**: on the timeline, many entries landing in the same compressed year will currently
   overlap. Worth adding once you're testing with real volume of entries.
3. **Feed-position ↔ meter-scroll syncing** — listed as a nice-to-have in the original brief, not built.
4. **Cloudinary preset is unsigned** — fine for a private two-person app, but anyone with the public cloud
   name + preset could technically upload to your account. Say the word if you want it switched to signed
   uploads (adds a small server step).
