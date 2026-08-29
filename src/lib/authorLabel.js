/**
 * Author labels are relative to whoever is currently signed in — an
 * entry never says "Him"/"Her" in the abstract, it says "You" when it
 * was written by the person looking at the screen, and the partner's
 * label otherwise. The labels themselves come from the central
 * identity module (src/lib/identity.js) — override them with
 * NEXT_PUBLIC_ME_LABEL / NEXT_PUBLIC_HER_LABEL if "Him"/"Her" isn't
 * right for your couple.
 */
import { IDENTITY_META } from "./identity";

export function authorLabel(entryAuthor, viewerAuthor) {
  if (!entryAuthor) return "";
  if (viewerAuthor && entryAuthor === viewerAuthor) return "You";
  return IDENTITY_META[entryAuthor]?.label || entryAuthor;
}

export function possessiveLabel(entryAuthor, viewerAuthor) {
  if (viewerAuthor && entryAuthor === viewerAuthor) return "your";
  const label = IDENTITY_META[entryAuthor]?.label || entryAuthor;
  return label === "Him" ? "his" : label === "Her" ? "her" : `${label}'s`;
}
