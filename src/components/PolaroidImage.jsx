"use client";

// Deterministic "random" rotation per image so it doesn't reshuffle on re-render
function rotationFor(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) % 1000;
  return (hash % 60) / 10 - 3; // -3deg to +3deg
}

export default function PolaroidImage({ src, alt = "", seed = src, size = "md" }) {
  const rotation = rotationFor(seed || "x");
  const sizes = {
    sm: "w-20",
    md: "w-32",
    lg: "w-full max-w-xs",
  };

  return (
    <div
      className={`relative ${sizes[size]} bg-white p-2 pb-4 shadow-[3px_5px_0_rgba(74,53,64,0.15)]`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* washi tape corner */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-9 -rotate-3 bg-baby-pink/80" />
      <img src={src} alt={alt} className="w-full h-auto object-cover aspect-square" loading="lazy" />
    </div>
  );
}