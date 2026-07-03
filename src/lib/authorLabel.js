/**
 * Author labels are relative to whoever is currently signed in — an
 * entry never says "Me"/"Her" in the abstract, it says "You" when it
 * was written by the person looking at the screen, and the partner's
 * label otherwise. Override the partner-facing labels with
 * NEXT_PUBLIC_ME_LABEL / NEXT_PUBLIC_HER_LABEL (e.g. real first names)
 * if "Him"/"Her" isn't right for your couple.
 */
const OTHER_PERSON_LABELS = {
  me: process.env.NEXT_PUBLIC_ME_LABEL || "Him",
  her: process.env.NEXT_PUBLIC_HER_LABEL || "Her",
};

export function authorLabel(entryAuthor, viewerAuthor) {
  if (!entryAuthor) return "";
  if (viewerAuthor && entryAuthor === viewerAuthor) return "You";
  return OTHER_PERSON_LABELS[entryAuthor] || entryAuthor;
}

export function possessiveLabel(entryAuthor, viewerAuthor) {
  if (viewerAuthor && entryAuthor === viewerAuthor) return "your";
  const label = OTHER_PERSON_LABELS[entryAuthor] || entryAuthor;
  return label === "Him" ? "his" : label === "Her" ? "her" : `${label}'s`;
}
