/** Short, human "time ago" label — "18 sec ago", "3 min ago", "2 hr ago", "5d ago". */
export function timeAgo(date) {
  if (!date) return "";
  const seconds = Math.max(0, Math.floor((Date.now() - new Date(date).getTime()) / 1000));

  if (seconds < 5) return "just now";
  if (seconds < 60) return `${seconds} sec ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;

  return new Date(date).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}
