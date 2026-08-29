/**
 * Central identity system for Memory Lane.
 *
 * The whole app runs on exactly two authenticated accounts. NextAuth
 * resolves which one signed in and stores it as `session.user.author`
 * ("me" | "her") — see the jwt/session callbacks in src/auth.js. That
 * value is the ONLY source of truth for "who is this": every route
 * below derives identity from the server-side session, never from
 * anything a client sends.
 *
 * "me" is the relationship-owner's account (displayed as "Him" by
 * default) and "her" is the partner's account ("Her" by default).
 * Existing Entry documents already use these two values in their
 * `author` field, so nothing here requires a data migration — it just
 * gives every feature (memories, location, notifications) one place
 * to resolve identity instead of re-deriving it with ad hoc string
 * checks scattered across components.
 */

export const ME = "me";
export const HER = "her";
export const IDENTITIES = [ME, HER];

export const IDENTITY_META = {
  [ME]: {
    id: ME,
    label: process.env.NEXT_PUBLIC_ME_LABEL || "Him",
    color: "#3B82F6", // blue
    colorSoft: "#DBEAFE",
    gender: "male",
  },
  [HER]: {
    id: HER,
    label: process.env.NEXT_PUBLIC_HER_LABEL || "Her",
    color: "#EC4899", // pink
    colorSoft: "#FCE4EC",
    gender: "female",
  },
};

export function isValidIdentity(value) {
  return value === ME || value === HER;
}

/**
 * Resolves the current authenticated user's relationship identity from
 * a server-side session (the return value of `await auth()`). Returns
 * null if there's no session, or the session's author isn't one of the
 * two whitelisted identities — callers should treat null as
 * unauthorized and stop, never fall back to a guess.
 */
export function getIdentity(session) {
  const author = session?.user?.author;
  return isValidIdentity(author) ? author : null;
}

/** The other person, relative to a given identity. */
export function getOtherIdentity(identity) {
  if (identity === ME) return HER;
  if (identity === HER) return ME;
  return null;
}

export function identityMeta(identity) {
  return IDENTITY_META[identity] || null;
}
