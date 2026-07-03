(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/PolaroidImage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PolaroidImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Deterministic "random" rotation per image so it doesn't reshuffle on re-render
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function rotationFor(seed) {
    let hash = 0;
    for(let i = 0; i < seed.length; i++)hash = (hash * 31 + seed.charCodeAt(i)) % 1000;
    return hash % 60 / 10 - 3; // -3deg to +3deg
}
function PolaroidImage(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "1300931fb752a797df5ed0c3342877342dbfebea7ef82822b622311472763b7a") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1300931fb752a797df5ed0c3342877342dbfebea7ef82822b622311472763b7a";
    }
    const { src, alt: t1, seed: t2, size: t3 } = t0;
    const alt = t1 === undefined ? "" : t1;
    const seed = t2 === undefined ? src : t2;
    const size = t3 === undefined ? "md" : t3;
    const t4 = seed || "x";
    let t5;
    if ($[1] !== t4) {
        t5 = rotationFor(t4);
        $[1] = t4;
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    const rotation = t5;
    let t6;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            sm: "w-20",
            md: "w-32",
            lg: "w-full max-w-xs"
        };
        $[3] = t6;
    } else {
        t6 = $[3];
    }
    const sizes = t6;
    const t7 = `relative ${sizes[size]} bg-white p-2 pb-4 shadow-[3px_5px_0_rgba(74,53,64,0.15)]`;
    const t8 = `rotate(${rotation}deg)`;
    let t9;
    if ($[4] !== t8) {
        t9 = {
            transform: t8
        };
        $[4] = t8;
        $[5] = t9;
    } else {
        t9 = $[5];
    }
    let t10;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-9 -rotate-3 bg-baby-pink/80"
        }, void 0, false, {
            fileName: "[project]/src/components/PolaroidImage.jsx",
            lineNumber: 63,
            columnNumber: 11
        }, this);
        $[6] = t10;
    } else {
        t10 = $[6];
    }
    let t11;
    if ($[7] !== alt || $[8] !== src) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            className: "w-full h-auto object-cover aspect-square",
            loading: "lazy"
        }, void 0, false, {
            fileName: "[project]/src/components/PolaroidImage.jsx",
            lineNumber: 70,
            columnNumber: 11
        }, this);
        $[7] = alt;
        $[8] = src;
        $[9] = t11;
    } else {
        t11 = $[9];
    }
    let t12;
    if ($[10] !== t11 || $[11] !== t7 || $[12] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            style: t9,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PolaroidImage.jsx",
            lineNumber: 79,
            columnNumber: 11
        }, this);
        $[10] = t11;
        $[11] = t7;
        $[12] = t9;
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    return t12;
}
_c = PolaroidImage;
var _c;
__turbopack_context__.k.register(_c, "PolaroidImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/authorLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authorLabel",
    ()=>authorLabel,
    "possessiveLabel",
    ()=>possessiveLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Author labels are relative to whoever is currently signed in — an
 * entry never says "Me"/"Her" in the abstract, it says "You" when it
 * was written by the person looking at the screen, and the partner's
 * label otherwise. Override the partner-facing labels with
 * NEXT_PUBLIC_ME_LABEL / NEXT_PUBLIC_HER_LABEL (e.g. real first names)
 * if "Him"/"Her" isn't right for your couple.
 */ const OTHER_PERSON_LABELS = {
    me: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ME_LABEL || "Him",
    her: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HER_LABEL || "Her"
};
function authorLabel(entryAuthor, viewerAuthor) {
    if (!entryAuthor) return "";
    if (viewerAuthor && entryAuthor === viewerAuthor) return "You";
    return OTHER_PERSON_LABELS[entryAuthor] || entryAuthor;
}
function possessiveLabel(entryAuthor, viewerAuthor) {
    if (viewerAuthor && entryAuthor === viewerAuthor) return "your";
    const label = OTHER_PERSON_LABELS[entryAuthor] || entryAuthor;
    return label === "Him" ? "his" : label === "Her" ? "her" : `${label}'s`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RelationshipTimeline.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RelationshipTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__min$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/min.js [app-client] (ecmascript) <export default as min>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__max$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/max.js [app-client] (ecmascript) <export default as max>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleTime$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/time.js [app-client] (ecmascript) <export default as scaleTime>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLog$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/log.js [app-client] (ecmascript) <export default as scaleLog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PolaroidImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PolaroidImage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/authorLabel.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ------------------------------------------------------------------ *
 * RelationshipTimeline
 *
 * A horizontal, independently-scrollable "meter" for the relationship.
 * It reads left (oldest) to right (most recent / "today"), like a
 * ruler that's zoomed in near "now" — the last few months get generous
 * spacing while everything older compresses together the further back
 * it goes. The scrollable width is computed analytically from the data
 * (not measured from the DOM), so every entry is guaranteed to land
 * inside the scroll range — nothing can render off in unreachable
 * space.
 *
 * Props:
 *  - entries: [{ id|_id, date: Date|string, author: 'me'|'her', note, images: [url] }]
 *  - onOpenEntry(entry): called when "read full entry" is pressed
 * ------------------------------------------------------------------ */ // ---- mock data for preview only — swap for real entries from MongoDB ----
const MOCK_ENTRIES = [
    {
        id: "1",
        date: "2022-03-14",
        author: "me",
        note: "The day we first called each other 'us'.",
        images: []
    },
    {
        id: "2",
        date: "2022-06-02",
        author: "her",
        note: "You sent me a voice note at 3am and I fell asleep smiling.",
        images: []
    },
    {
        id: "3",
        date: "2022-11-20",
        author: "me",
        note: "First video call where we just left the camera on for hours.",
        images: []
    },
    {
        id: "4",
        date: "2023-02-14",
        author: "her",
        note: "Our first Valentine's, 6,000 miles apart.",
        images: []
    },
    {
        id: "5",
        date: "2023-07-09",
        author: "me",
        note: "You finally visited. Airport hug lasted a full minute.",
        images: []
    },
    {
        id: "6",
        date: "2024-01-01",
        author: "her",
        note: "New year, same us. Promised each other another year.",
        images: []
    },
    {
        id: "7",
        date: "2024-08-22",
        author: "me",
        note: "Booked flights. Counting down.",
        images: []
    },
    {
        id: "8",
        date: "2025-05-03",
        author: "her",
        note: "Two years in. Still choosing this every day.",
        images: []
    },
    {
        id: "9",
        date: "2026-04-17",
        author: "me",
        note: "Talked about actually living in the same city.",
        images: []
    },
    {
        id: "10",
        date: "2026-06-28",
        author: "her",
        note: "Just a normal Tuesday call. Those are my favorite now.",
        images: []
    }
];
const DAY_MS = 86400000;
const RECENT_WINDOW_DAYS = 150; // this much time stays spacious, linear
const PX_PER_RECENT_DAY = 5; // spacing for the recent/linear zone
const COMPRESSED_ZONE_PX = 260; // fixed width the *entire* older history compresses into
const EDGE_PADDING = 48; // breathing room at each end of the track
/**
 * Builds a date -> x-position function across an analytically-sized
 * scrollable track. The most recent RECENT_WINDOW_DAYS get linear
 * spacing (PX_PER_RECENT_DAY each); everything older shares a fixed
 * COMPRESSED_ZONE_PX on a log scale, so as years pass and history
 * grows, older entries keep compressing tighter instead of pushing
 * the track's width out to infinity.
 */ function useTimeScale(sorted) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "b719023dce0c8036527b085042a15b1a7ff9fc099999394a914a25ccf1747581") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b719023dce0c8036527b085042a15b1a7ff9fc099999394a914a25ccf1747581";
    }
    let t0;
    bb0: {
        if (!sorted.length) {
            let t1;
            let t2;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = new Date();
                t2 = new Date();
                $[1] = t1;
                $[2] = t2;
            } else {
                t1 = $[1];
                t2 = $[2];
            }
            let t3;
            if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
                t3 = {
                    dateToX: _temp,
                    minDate: t1,
                    maxDate: t2,
                    trackWidth: 600,
                    recentBoundary: new Date()
                };
                $[3] = t3;
            } else {
                t3 = $[3];
            }
            t0 = t3;
            break bb0;
        }
        let compressedZonePx;
        let maxDate;
        let minDate;
        let recentBoundary;
        let recentZonePx;
        let spansBeforeRecent;
        let t1;
        if ($[4] !== sorted) {
            const dates = sorted.map(_useTimeScaleSortedMap);
            minDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__min$3e$__["min"](dates);
            const now = new Date();
            maxDate = now > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__max$3e$__["max"](dates) ? now : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__max$3e$__["max"](dates);
            recentBoundary = new Date(maxDate.getTime() - RECENT_WINDOW_DAYS * DAY_MS);
            spansBeforeRecent = minDate < recentBoundary;
            const recentSpanDays = Math.max(1, (maxDate - recentBoundary) / DAY_MS);
            recentZonePx = recentSpanDays * PX_PER_RECENT_DAY;
            compressedZonePx = spansBeforeRecent ? COMPRESSED_ZONE_PX : 0;
            t1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleTime$3e$__["scaleTime"]().domain([
                recentBoundary,
                maxDate
            ]).range([
                EDGE_PADDING + compressedZonePx,
                EDGE_PADDING + compressedZonePx + recentZonePx
            ]).clamp(true);
            $[4] = sorted;
            $[5] = compressedZonePx;
            $[6] = maxDate;
            $[7] = minDate;
            $[8] = recentBoundary;
            $[9] = recentZonePx;
            $[10] = spansBeforeRecent;
            $[11] = t1;
        } else {
            compressedZonePx = $[5];
            maxDate = $[6];
            minDate = $[7];
            recentBoundary = $[8];
            recentZonePx = $[9];
            spansBeforeRecent = $[10];
            t1 = $[11];
        }
        const recentScale = t1;
        const oldestDaysBeforeBoundary = spansBeforeRecent ? Math.max(2, (recentBoundary - minDate) / DAY_MS) : 2;
        let t2;
        if ($[12] !== compressedZonePx || $[13] !== oldestDaysBeforeBoundary) {
            t2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLog$3e$__["scaleLog"]().domain([
                1,
                oldestDaysBeforeBoundary + 1
            ]).range([
                EDGE_PADDING + compressedZonePx,
                EDGE_PADDING
            ]).clamp(true);
            $[12] = compressedZonePx;
            $[13] = oldestDaysBeforeBoundary;
            $[14] = t2;
        } else {
            t2 = $[14];
        }
        const compressedScale = t2;
        let t3;
        if ($[15] !== compressedScale || $[16] !== recentBoundary || $[17] !== recentScale) {
            t3 = function dateToX(rawDate) {
                const date = new Date(rawDate);
                if (date >= recentBoundary) {
                    return recentScale(date);
                }
                const daysBeforeBoundary = (recentBoundary - date) / DAY_MS;
                return compressedScale(daysBeforeBoundary + 1);
            };
            $[15] = compressedScale;
            $[16] = recentBoundary;
            $[17] = recentScale;
            $[18] = t3;
        } else {
            t3 = $[18];
        }
        const dateToX = t3;
        const trackWidth = EDGE_PADDING + compressedZonePx + recentZonePx + EDGE_PADDING;
        let t4;
        if ($[19] !== dateToX || $[20] !== maxDate || $[21] !== minDate || $[22] !== recentBoundary || $[23] !== trackWidth) {
            t4 = {
                dateToX,
                minDate,
                maxDate,
                trackWidth,
                recentBoundary
            };
            $[19] = dateToX;
            $[20] = maxDate;
            $[21] = minDate;
            $[22] = recentBoundary;
            $[23] = trackWidth;
            $[24] = t4;
        } else {
            t4 = $[24];
        }
        t0 = t4;
    }
    return t0;
}
function _useTimeScaleSortedMap(e) {
    return new Date(e.date);
}
function _temp() {
    return EDGE_PADDING;
}
function HeartMark(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "b719023dce0c8036527b085042a15b1a7ff9fc099999394a914a25ccf1747581") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b719023dce0c8036527b085042a15b1a7ff9fc099999394a914a25ccf1747581";
    }
    const { size: t1, filled: t2 } = t0;
    const size = t1 === undefined ? 16 : t1;
    const filled = t2 === undefined ? true : t2;
    const t3 = filled ? "var(--color-rose)" : "var(--color-paper)";
    let t4;
    if ($[1] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 20.5s-7.5-4.6-10-9.4C0.3 7.6 2.4 4 6 4c2 0 3.6 1.1 4.5 2.6C11.4 5.1 13 4 15 4c3.6 0 5.7 3.6 4 7.1-2.5 4.8-10 9.4-10 9.4z",
            fill: t3,
            stroke: "var(--color-rose)",
            strokeWidth: "1.4",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 251,
            columnNumber: 10
        }, this);
        $[1] = t3;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    let t5;
    if ($[3] !== size || $[4] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            className: "drop-shadow-sm",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 259,
            columnNumber: 10
        }, this);
        $[3] = size;
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
}
_c = HeartMark;
function EntryPreviewCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "b719023dce0c8036527b085042a15b1a7ff9fc099999394a914a25ccf1747581") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b719023dce0c8036527b085042a15b1a7ff9fc099999394a914a25ccf1747581";
    }
    const { entry, viewerAuthor, onOpenEntry } = t0;
    if (!entry) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full items-center justify-center text-center px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-ui text-xs text-ink/40",
                    children: "Tap a heart on the ribbon to preview a memory"
                }, void 0, false, {
                    fileName: "[project]/src/components/RelationshipTimeline.jsx",
                    lineNumber: 284,
                    columnNumber: 86
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RelationshipTimeline.jsx",
                lineNumber: 284,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] !== entry.date) {
        const date = new Date(entry.date);
        t1 = date.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
        $[2] = entry.date;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const dateLabel = t1;
    const t2 = entry._id || entry.id;
    let t3;
    if ($[4] !== entry._id || $[5] !== entry.id || $[6] !== entry.images) {
        t3 = entry.images?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shrink-0 self-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PolaroidImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: entry.images[0],
                seed: entry._id || entry.id,
                size: "sm"
            }, void 0, false, {
                fileName: "[project]/src/components/RelationshipTimeline.jsx",
                lineNumber: 308,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 308,
            columnNumber: 31
        }, this);
        $[4] = entry._id;
        $[5] = entry.id;
        $[6] = entry.images;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== entry.author || $[9] !== viewerAuthor) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authorLabel"])(entry.author, viewerAuthor);
        $[8] = entry.author;
        $[9] = viewerAuthor;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== dateLabel || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-ui text-[11px] tracking-wide uppercase text-rose mb-1",
            children: [
                dateLabel,
                " · ",
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 327,
            columnNumber: 10
        }, this);
        $[11] = dateLabel;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== entry.note) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-hand text-lg leading-snug text-ink line-clamp-3 flex-1",
            children: entry.note
        }, void 0, false, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 336,
            columnNumber: 10
        }, this);
        $[14] = entry.note;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== entry || $[17] !== onOpenEntry) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "EntryPreviewCard[<button>.onClick]": ()=>onOpenEntry?.(entry)
            }["EntryPreviewCard[<button>.onClick]"],
            className: "mt-1 self-start font-ui text-xs font-semibold text-rose hover:underline",
            children: "Read full entry →"
        }, void 0, false, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 344,
            columnNumber: 10
        }, this);
        $[16] = entry;
        $[17] = onOpenEntry;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== t5 || $[20] !== t6 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 flex-1 flex flex-col",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 355,
            columnNumber: 10
        }, this);
        $[19] = t5;
        $[20] = t6;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== t2 || $[24] !== t3 || $[25] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full flex gap-3 p-3 sm:p-4 animate-[fade-in_0.15s_ease-out]",
            children: [
                t3,
                t8
            ]
        }, t2, true, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 365,
            columnNumber: 10
        }, this);
        $[23] = t2;
        $[24] = t3;
        $[25] = t8;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    return t9;
}
_c1 = EntryPreviewCard;
function RelationshipTimeline(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(55);
    if ($[0] !== "b719023dce0c8036527b085042a15b1a7ff9fc099999394a914a25ccf1747581") {
        for(let $i = 0; $i < 55; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b719023dce0c8036527b085042a15b1a7ff9fc099999394a914a25ccf1747581";
    }
    const { entries: t1, viewerAuthor, onOpenEntry } = t0;
    const entries = t1 === undefined ? MOCK_ENTRIES : t1;
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [containerWidth, setContainerWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(320);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const hasAutoScrolled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t2;
    if ($[1] !== entries) {
        t2 = [
            ...entries
        ].sort(_RelationshipTimelineAnonymous);
        $[1] = entries;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const sorted = t2;
    const { dateToX, minDate, maxDate, trackWidth: computedWidth } = useTimeScale(sorted);
    const trackWidth = Math.max(computedWidth, containerWidth);
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "RelationshipTimeline[useEffect()]": ()=>{
                const el = containerRef.current;
                if (!el || typeof ResizeObserver === "undefined") {
                    return;
                }
                const ro = new ResizeObserver((t5)=>{
                    const [entry] = t5;
                    return setContainerWidth(entry.contentRect.width);
                });
                ro.observe(el);
                return ()=>ro.disconnect();
            }
        })["RelationshipTimeline[useEffect()]"];
        t4 = [];
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[5] !== containerWidth || $[6] !== trackWidth) {
        t5 = ({
            "RelationshipTimeline[useLayoutEffect()]": ()=>{
                if (!hasAutoScrolled.current && scrollRef.current && trackWidth > containerWidth) {
                    scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
                    hasAutoScrolled.current = true;
                }
            }
        })["RelationshipTimeline[useLayoutEffect()]"];
        t6 = [
            trackWidth,
            containerWidth
        ];
        $[5] = containerWidth;
        $[6] = trackWidth;
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t5, t6);
    let t7;
    bb0: {
        if (!minDate || !maxDate) {
            let t8;
            if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
                t8 = [];
                $[9] = t8;
            } else {
                t8 = $[9];
            }
            t7 = t8;
            break bb0;
        }
        let years;
        if ($[10] !== maxDate || $[11] !== minDate) {
            years = [];
            for(let y = minDate.getFullYear(); y <= maxDate.getFullYear(); y++){
                years.push(new Date(y, 0, 1));
            }
            $[10] = maxDate;
            $[11] = minDate;
            $[12] = years;
        } else {
            years = $[12];
        }
        t7 = years;
    }
    const yearMarkers = t7;
    let t8;
    if ($[13] !== activeId || $[14] !== sorted) {
        let t9;
        if ($[16] !== activeId) {
            t9 = ({
                "RelationshipTimeline[sorted.find()]": (e)=>(e._id || e.id) === activeId
            })["RelationshipTimeline[sorted.find()]"];
            $[16] = activeId;
            $[17] = t9;
        } else {
            t9 = $[17];
        }
        t8 = sorted.find(t9);
        $[13] = activeId;
        $[14] = sorted;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const activeEntry = t8;
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "RelationshipTimeline[handleMarkerInteract]": (id)=>{
                setActiveId({
                    "RelationshipTimeline[handleMarkerInteract > setActiveId()]": (cur)=>cur === id ? null : id
                }["RelationshipTimeline[handleMarkerInteract > setActiveId()]"]);
            }
        })["RelationshipTimeline[handleMarkerInteract]"];
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    const handleMarkerInteract = t9;
    let t10;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-baseline justify-between mb-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-hand text-3xl text-ink rotate-[-1deg]",
                    children: "us, so far"
                }, void 0, false, {
                    fileName: "[project]/src/components/RelationshipTimeline.jsx",
                    lineNumber: 520,
                    columnNumber: 69
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-ui text-[11px] text-ink/40",
                    children: "scroll for the past →"
                }, void 0, false, {
                    fileName: "[project]/src/components/RelationshipTimeline.jsx",
                    lineNumber: 520,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 520,
            columnNumber: 11
        }, this);
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== maxDate || $[21] !== minDate || $[22] !== sorted.length) {
        t11 = sorted.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-ui text-xs text-rose/70 -mt-2 mb-3",
            children: [
                Math.max(1, Math.floor((maxDate - minDate) / DAY_MS)),
                " days of “us” and counting 💌"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 527,
            columnNumber: 32
        }, this);
        $[20] = maxDate;
        $[21] = minDate;
        $[22] = sorted.length;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== trackWidth) {
        t12 = {
            width: trackWidth
        };
        $[24] = trackWidth;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1/2 left-0 right-0 border-t-2 border-dashed -translate-y-1/2",
            style: {
                borderColor: "var(--color-rose)",
                opacity: 0.35
            }
        }, void 0, false, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== dateToX || $[28] !== yearMarkers) {
        t14 = yearMarkers.map({
            "RelationshipTimeline[yearMarkers.map()]": (yearDate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-3 -translate-x-1/2 font-hand text-sm text-rose/60",
                    style: {
                        left: dateToX(yearDate)
                    },
                    children: yearDate.getFullYear()
                }, yearDate.getFullYear(), false, {
                    fileName: "[project]/src/components/RelationshipTimeline.jsx",
                    lineNumber: 558,
                    columnNumber: 62
                }, this)
        }["RelationshipTimeline[yearMarkers.map()]"]);
        $[27] = dateToX;
        $[28] = yearMarkers;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== activeId || $[31] !== dateToX || $[32] !== sorted) {
        let t16;
        if ($[34] !== activeId || $[35] !== dateToX) {
            t16 = ({
                "RelationshipTimeline[sorted.map()]": (entry_0)=>{
                    const entryId = entry_0._id || entry_0.id;
                    const x = dateToX(entry_0.date);
                    const isActive = activeId === entryId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-rose/40",
                        style: {
                            left: x
                        },
                        onMouseEnter: {
                            "RelationshipTimeline[sorted.map() > <button>.onMouseEnter]": ()=>setActiveId(entryId)
                        }["RelationshipTimeline[sorted.map() > <button>.onMouseEnter]"],
                        onClick: {
                            "RelationshipTimeline[sorted.map() > <button>.onClick]": ()=>handleMarkerInteract(entryId)
                        }["RelationshipTimeline[sorted.map() > <button>.onClick]"],
                        "aria-label": `Entry from ${new Date(entry_0.date).toDateString()}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeartMark, {
                            filled: isActive,
                            size: isActive ? 20 : 14
                        }, void 0, false, {
                            fileName: "[project]/src/components/RelationshipTimeline.jsx",
                            lineNumber: 583,
                            columnNumber: 138
                        }, this)
                    }, entryId, false, {
                        fileName: "[project]/src/components/RelationshipTimeline.jsx",
                        lineNumber: 577,
                        columnNumber: 18
                    }, this);
                }
            })["RelationshipTimeline[sorted.map()]"];
            $[34] = activeId;
            $[35] = dateToX;
            $[36] = t16;
        } else {
            t16 = $[36];
        }
        t15 = sorted.map(t16);
        $[30] = activeId;
        $[31] = dateToX;
        $[32] = sorted;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[37] !== dateToX || $[38] !== maxDate) {
        t16 = dateToX(maxDate);
        $[37] = dateToX;
        $[38] = maxDate;
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    let t17;
    if ($[40] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-3 -translate-x-1/2 font-ui text-[10px] font-semibold text-rose bg-baby-pink px-2 py-0.5 rounded-full whitespace-nowrap",
            style: {
                left: t16
            },
            children: "today"
        }, void 0, false, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 611,
            columnNumber: 11
        }, this);
        $[40] = t16;
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    let t18;
    if ($[42] !== t12 || $[43] !== t14 || $[44] !== t15 || $[45] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "relative rounded-lg border border-blush bg-paper shadow-inner overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "pretty-scroll relative w-full overflow-x-auto overflow-y-hidden touch-pan-x",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-40 sm:h-44",
                    style: t12,
                    children: [
                        t13,
                        t14,
                        t15,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RelationshipTimeline.jsx",
                    lineNumber: 621,
                    columnNumber: 234
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RelationshipTimeline.jsx",
                lineNumber: 621,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 621,
            columnNumber: 11
        }, this);
        $[42] = t12;
        $[43] = t14;
        $[44] = t15;
        $[45] = t17;
        $[46] = t18;
    } else {
        t18 = $[46];
    }
    let t19;
    if ($[47] !== activeEntry || $[48] !== onOpenEntry || $[49] !== viewerAuthor) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 h-24 sm:h-28 rounded-lg border border-blush/70 bg-white/40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntryPreviewCard, {
                entry: activeEntry,
                viewerAuthor: viewerAuthor,
                onOpenEntry: onOpenEntry
            }, void 0, false, {
                fileName: "[project]/src/components/RelationshipTimeline.jsx",
                lineNumber: 632,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 632,
            columnNumber: 11
        }, this);
        $[47] = activeEntry;
        $[48] = onOpenEntry;
        $[49] = viewerAuthor;
        $[50] = t19;
    } else {
        t19 = $[50];
    }
    let t20;
    if ($[51] !== t11 || $[52] !== t18 || $[53] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-paper/90 rounded-xl border border-blush shadow-[3px_5px_0_rgba(74,53,64,0.10)] p-4 sm:p-5",
            children: [
                t10,
                t11,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RelationshipTimeline.jsx",
            lineNumber: 642,
            columnNumber: 11
        }, this);
        $[51] = t11;
        $[52] = t18;
        $[53] = t19;
        $[54] = t20;
    } else {
        t20 = $[54];
    }
    return t20;
}
_s(RelationshipTimeline, "wTPqzrv8aMbVputAQKrvPBTOXVQ=", false, function() {
    return [
        useTimeScale
    ];
});
_c2 = RelationshipTimeline;
function _RelationshipTimelineAnonymous(a, b) {
    return new Date(a.date) - new Date(b.date);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HeartMark");
__turbopack_context__.k.register(_c1, "EntryPreviewCard");
__turbopack_context__.k.register(_c2, "RelationshipTimeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MemoriesFeed.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemoriesFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PolaroidImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PolaroidImage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/authorLabel.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function MemoriesFeed(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "fea24f9ec497eb157e2d09ecd12241758c11a3d623f8d3d48bd25feb8e93a5b5") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fea24f9ec497eb157e2d09ecd12241758c11a3d623f8d3d48bd25feb8e93a5b5";
    }
    const { entries: t1, viewerAuthor, onOpenEntry } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const entries = t2;
    let t3;
    if ($[3] !== entries) {
        t3 = [
            ...entries
        ].sort(_MemoriesFeedAnonymous);
        $[3] = entries;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const sorted = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-hand text-3xl text-ink rotate-[-1deg]",
            children: "Your memories"
        }, void 0, false, {
            fileName: "[project]/src/components/MemoriesFeed.jsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] !== sorted.length) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-baseline justify-between px-1 mb-3",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-ui text-xs text-ink/40",
                    children: [
                        sorted.length,
                        " entries"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MemoriesFeed.jsx",
                    lineNumber: 48,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MemoriesFeed.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        t6 = sorted.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-ui text-sm text-ink/50 text-center py-12",
            children: "Nothing here yet — add your first memory below."
        }, void 0, false, {
            fileName: "[project]/src/components/MemoriesFeed.jsx",
            lineNumber: 49,
            columnNumber: 33
        }, this);
        $[6] = sorted.length;
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    let t7;
    if ($[9] !== onOpenEntry || $[10] !== sorted || $[11] !== viewerAuthor) {
        let t8;
        if ($[13] !== onOpenEntry || $[14] !== viewerAuthor) {
            t8 = ({
                "MemoriesFeed[sorted.map()]": (entry)=>{
                    const date = new Date(entry.date);
                    const dateLabel = date.toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    });
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "MemoriesFeed[sorted.map() > <button>.onClick]": ()=>onOpenEntry?.(entry)
                        }["MemoriesFeed[sorted.map() > <button>.onClick]"],
                        className: "w-full text-left bg-paper/90 border border-blush/70 rounded-md p-3 hover:border-rose/50 hover:-translate-y-0.5 transition-all animate-[rise-in_0.25s_ease-out] shadow-[2px_3px_0_rgba(74,53,64,0.06)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-ui text-[11px] uppercase tracking-wide text-rose",
                                    children: [
                                        dateLabel,
                                        " · ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authorLabel"])(entry.author, viewerAuthor)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MemoriesFeed.jsx",
                                    lineNumber: 71,
                                    columnNumber: 331
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemoriesFeed.jsx",
                                lineNumber: 71,
                                columnNumber: 273
                            }, this),
                            entry.images?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PolaroidImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: entry.images[0],
                                    seed: entry._id || entry.id,
                                    size: "sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MemoriesFeed.jsx",
                                    lineNumber: 71,
                                    columnNumber: 515
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemoriesFeed.jsx",
                                lineNumber: 71,
                                columnNumber: 493
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-hand text-lg leading-snug text-ink line-clamp-2",
                                children: entry.note
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemoriesFeed.jsx",
                                lineNumber: 71,
                                columnNumber: 600
                            }, this)
                        ]
                    }, entry._id || entry.id, true, {
                        fileName: "[project]/src/components/MemoriesFeed.jsx",
                        lineNumber: 69,
                        columnNumber: 18
                    }, this);
                }
            })["MemoriesFeed[sorted.map()]"];
            $[13] = onOpenEntry;
            $[14] = viewerAuthor;
            $[15] = t8;
        } else {
            t8 = $[15];
        }
        t7 = sorted.map(t8);
        $[9] = onOpenEntry;
        $[10] = sorted;
        $[11] = viewerAuthor;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 px-1",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/MemoriesFeed.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t5 || $[19] !== t6 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col",
            children: [
                t5,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MemoriesFeed.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[18] = t5;
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    return t9;
}
_c = MemoriesFeed;
function _MemoriesFeedAnonymous(a, b) {
    return new Date(b.date) - new Date(a.date);
}
var _c;
__turbopack_context__.k.register(_c, "MemoriesFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DiarySpread.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiarySpread
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PolaroidImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PolaroidImage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/authorLabel.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/**
 * Pairs "me" and "her" entries into spreads by chronological index —
 * the Nth thing I wrote sits opposite the Nth thing she wrote. If one
 * side runs longer, the shorter side just shows an empty page.
 *
 * (Open question from the brief: index-pairing vs. date-nearest pairing.
 * This uses index-pairing because it's simpler and doesn't leave gaps —
 * swap the `spreads` memo below if you'd rather pair by nearest date.)
 */ function useSpreads(entries) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "fbcb6c24f99925b7cc1f0506b55ca9fd37f74d290616db841c82ff3e9a88b728") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fbcb6c24f99925b7cc1f0506b55ca9fd37f74d290616db841c82ff3e9a88b728";
    }
    let t0;
    if ($[1] !== entries) {
        const mine = entries.filter(_useSpreadsEntriesFilter).sort(_useSpreadsAnonymous);
        const hers = entries.filter(_useSpreadsEntriesFilter2).sort(_useSpreadsAnonymous2);
        const count = Math.max(mine.length, hers.length);
        t0 = Array.from({
            length: count
        }, {
            "useSpreads[Array.from()]": (_, i)=>({
                    left: mine[i] || null,
                    right: hers[i] || null
                })
        }["useSpreads[Array.from()]"]);
        $[1] = entries;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
}
function _useSpreadsAnonymous2(a_0, b_0) {
    return new Date(a_0.date) - new Date(b_0.date);
}
function _useSpreadsEntriesFilter2(e_0) {
    return e_0.author === "her";
}
function _useSpreadsAnonymous(a, b) {
    return new Date(a.date) - new Date(b.date);
}
function _useSpreadsEntriesFilter(e) {
    return e.author === "me";
}
function DiaryPage(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "fbcb6c24f99925b7cc1f0506b55ca9fd37f74d290616db841c82ff3e9a88b728") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fbcb6c24f99925b7cc1f0506b55ca9fd37f74d290616db841c82ff3e9a88b728";
    }
    const { entry, side, viewerAuthor } = t0;
    const isEmpty = !entry;
    const rotationClass = side === "left" ? "-rotate-[0.4deg]" : "rotate-[0.4deg]";
    const t1 = `relative h-full w-full bg-[#FBF6EF]/90 ${rotationClass} rounded-sm p-3 sm:p-5 flex flex-col`;
    const t2 = side === "left" ? "inset -6px 0 12px -8px rgba(74,53,64,0.15)" : "inset 6px 0 12px -8px rgba(74,53,64,0.15)";
    let t3;
    if ($[1] !== t2) {
        t3 = {
            boxShadow: t2,
            clipPath: "polygon(0 0, 100% 0, 100% 98%, 98% 100%, 0 100%)"
        };
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== entry || $[4] !== isEmpty || $[5] !== side || $[6] !== viewerAuthor) {
        t4 = isEmpty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-ui text-sm text-ink/30 m-auto text-center",
            children: side === "left" ? "Nothing written here yet" : "Waiting for the next entry"
        }, void 0, false, {
            fileName: "[project]/src/components/DiarySpread.jsx",
            lineNumber: 87,
            columnNumber: 20
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-ui text-[11px] uppercase tracking-wide text-rose",
                            children: new Date(entry.date).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/DiarySpread.jsx",
                            lineNumber: 87,
                            columnNumber: 224
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-ui text-[10px] uppercase tracking-wide text-ink/35",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authorLabel"])(entry.author, viewerAuthor)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DiarySpread.jsx",
                            lineNumber: 91,
                            columnNumber: 18
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DiarySpread.jsx",
                    lineNumber: 87,
                    columnNumber: 168
                }, this),
                entry.images?.[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3 self-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PolaroidImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: entry.images[0],
                        seed: entry._id || entry.id,
                        size: "sm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiarySpread.jsx",
                        lineNumber: 91,
                        columnNumber: 202
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/DiarySpread.jsx",
                    lineNumber: 91,
                    columnNumber: 168
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-hand text-lg sm:text-xl leading-relaxed text-ink overflow-y-auto pretty-scroll flex-1 whitespace-pre-wrap",
                    children: entry.note
                }, void 0, false, {
                    fileName: "[project]/src/components/DiarySpread.jsx",
                    lineNumber: 91,
                    columnNumber: 287
                }, this)
            ]
        }, void 0, true);
        $[3] = entry;
        $[4] = isEmpty;
        $[5] = side;
        $[6] = viewerAuthor;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t1 || $[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            style: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/DiarySpread.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_c = DiaryPage;
function DiarySpread(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "fbcb6c24f99925b7cc1f0506b55ca9fd37f74d290616db841c82ff3e9a88b728") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fbcb6c24f99925b7cc1f0506b55ca9fd37f74d290616db841c82ff3e9a88b728";
    }
    const { entries: t1, viewerAuthor } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const entries = t2;
    const spreads = useSpreads(entries);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Math.max(0, spreads.length - 1));
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    if ($[3] !== spreads.length) {
        t3 = ({
            "DiarySpread[goTo]": (i)=>setPage(Math.min(Math.max(i, 0), spreads.length - 1))
        })["DiarySpread[goTo]"];
        $[3] = spreads.length;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const goTo = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = function onTouchStart(e) {
            touchStartX.current = e.touches[0].clientX;
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const onTouchStart = t4;
    let t5;
    if ($[6] !== goTo || $[7] !== page) {
        t5 = function onTouchEnd(e_0) {
            if (touchStartX.current === null) {
                return;
            }
            const dx = e_0.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 50) {
                goTo(dx < 0 ? page + 1 : page - 1);
            }
            touchStartX.current = null;
        };
        $[6] = goTo;
        $[7] = page;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const onTouchEnd = t5;
    if (spreads.length === 0) {
        let t6;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-ui text-sm text-ink/50 text-center py-16",
                children: "No diary entries yet."
            }, void 0, false, {
                fileName: "[project]/src/components/DiarySpread.jsx",
                lineNumber: 179,
                columnNumber: 12
            }, this);
            $[9] = t6;
        } else {
            t6 = $[9];
        }
        return t6;
    }
    const current = spreads[page];
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            top: "16%",
            bottom: "20%",
            left: "9%",
            right: "9%"
        };
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== current.left || $[12] !== viewerAuthor) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-1/2 pr-[2px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiaryPage, {
                entry: current.left,
                side: "left",
                viewerAuthor: viewerAuthor
            }, void 0, false, {
                fileName: "[project]/src/components/DiarySpread.jsx",
                lineNumber: 201,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/DiarySpread.jsx",
            lineNumber: 201,
            columnNumber: 10
        }, this);
        $[11] = current.left;
        $[12] = viewerAuthor;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== current.right || $[15] !== viewerAuthor) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-1/2 pl-[2px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiaryPage, {
                entry: current.right,
                side: "right",
                viewerAuthor: viewerAuthor
            }, void 0, false, {
                fileName: "[project]/src/components/DiarySpread.jsx",
                lineNumber: 210,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/DiarySpread.jsx",
            lineNumber: 210,
            columnNumber: 10
        }, this);
        $[14] = current.right;
        $[15] = viewerAuthor;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== onTouchEnd || $[18] !== page || $[19] !== t7 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "diary-bg relative w-full aspect-square sm:aspect-[4/3] rounded-2xl border border-blush shadow-[4px_6px_0_rgba(74,53,64,0.15)] overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onTouchStart: onTouchStart,
                onTouchEnd: onTouchEnd,
                className: "absolute flex animate-[page-flip_0.25s_ease-out]",
                style: t6,
                children: [
                    t7,
                    t8
                ]
            }, page, true, {
                fileName: "[project]/src/components/DiarySpread.jsx",
                lineNumber: 219,
                columnNumber: 169
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/DiarySpread.jsx",
            lineNumber: 219,
            columnNumber: 10
        }, this);
        $[17] = onTouchEnd;
        $[18] = page;
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== goTo || $[23] !== page) {
        t10 = ({
            "DiarySpread[<button>.onClick]": ()=>goTo(page - 1)
        })["DiarySpread[<button>.onClick]"];
        $[22] = goTo;
        $[23] = page;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    const t11 = page === 0;
    let t12;
    if ($[25] !== t10 || $[26] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t10,
            disabled: t11,
            className: "px-3 py-1.5 rounded-full hover:bg-baby-pink/60 disabled:opacity-30",
            children: "← Back"
        }, void 0, false, {
            fileName: "[project]/src/components/DiarySpread.jsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t11;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    const t13 = page + 1;
    let t14;
    if ($[28] !== spreads.length || $[29] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs",
            children: [
                "page ",
                t13,
                " of ",
                spreads.length
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DiarySpread.jsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[28] = spreads.length;
        $[29] = t13;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== goTo || $[32] !== page) {
        t15 = ({
            "DiarySpread[<button>.onClick]": ()=>goTo(page + 1)
        })["DiarySpread[<button>.onClick]"];
        $[31] = goTo;
        $[32] = page;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    const t16 = page === spreads.length - 1;
    let t17;
    if ($[34] !== t15 || $[35] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t15,
            disabled: t16,
            className: "px-3 py-1.5 rounded-full hover:bg-baby-pink/60 disabled:opacity-30",
            children: "Forward →"
        }, void 0, false, {
            fileName: "[project]/src/components/DiarySpread.jsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = t16;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== t12 || $[38] !== t14 || $[39] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mt-4 px-1 font-ui text-sm text-ink/60",
            children: [
                t12,
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DiarySpread.jsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[37] = t12;
        $[38] = t14;
        $[39] = t17;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t18 || $[42] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl mx-auto",
            children: [
                t9,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DiarySpread.jsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[41] = t18;
        $[42] = t9;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    return t19;
}
_s(DiarySpread, "vPN2Vd+0gk4jk5pcYhkAKi/trYk=", false, function() {
    return [
        useSpreads
    ];
});
_c1 = DiarySpread;
var _c, _c1;
__turbopack_context__.k.register(_c, "DiaryPage");
__turbopack_context__.k.register(_c1, "DiarySpread");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/EntryModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EntryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PolaroidImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PolaroidImage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/authorLabel.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function EntryModal({ entry, viewerAuthor, onClose, onEdit, onDelete }) {
    _s();
    const [confirmingDelete, setConfirmingDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EntryModal.useEffect": ()=>{
            function onKey(e) {
                if (e.key === "Escape") onClose?.();
            }
            window.addEventListener("keydown", onKey);
            return ({
                "EntryModal.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["EntryModal.useEffect"];
        }
    }["EntryModal.useEffect"], [
        onClose
    ]);
    if (!entry) return null;
    async function handleDelete() {
        setDeleting(true);
        setError(null);
        try {
            const res = await fetch(`/api/entries/${entry._id || entry.id}`, {
                method: "DELETE"
            });
            if (!res.ok) throw new Error("Failed to delete entry");
            onDelete?.(entry);
        } catch (err) {
            setError(err.message || "Something went wrong");
            setDeleting(false);
        }
    }
    const date = new Date(entry.date);
    const dateLabel = date.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });
    const isMine = entry.author === viewerAuthor;
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$authorLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authorLabel"])(entry.author, viewerAuthor);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/40 backdrop-blur-sm p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-md sm:max-w-lg max-h-[85vh] overflow-y-auto pretty-scroll bg-paper rounded-lg border border-blush shadow-[6px_8px_0_rgba(74,53,64,0.15)] p-6 animate-[rise-in_0.2s_ease-out]",
            onClick: (e_0)=>e_0.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-3 right-3 h-8 w-8 rounded-full bg-baby-pink/70 text-ink/60 hover:text-ink font-ui text-sm",
                    "aria-label": "Close",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/src/components/EntryModal.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pr-10 mb-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-ui text-xs uppercase tracking-wide text-rose",
                            children: label === "You" ? "You wrote" : `${label} wrote`
                        }, void 0, false, {
                            fileName: "[project]/src/components/EntryModal.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onEdit?.(entry),
                                    className: "font-ui text-xs font-semibold text-rose hover:underline",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EntryModal.jsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setConfirmingDelete(true),
                                    className: "font-ui text-xs font-semibold text-ink/40 hover:text-rose transition-colors",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EntryModal.jsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EntryModal.jsx",
                            lineNumber: 57,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/EntryModal.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-hand text-3xl text-ink mb-4",
                    children: dateLabel
                }, void 0, false, {
                    fileName: "[project]/src/components/EntryModal.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                entry.images?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4 mb-4 justify-center",
                    children: entry.images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PolaroidImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: src,
                            seed: `${entry._id || entry.id}-${i}`,
                            size: "md"
                        }, src, false, {
                            fileName: "[project]/src/components/EntryModal.jsx",
                            lineNumber: 69,
                            columnNumber: 43
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/EntryModal.jsx",
                    lineNumber: 68,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-hand text-2xl leading-relaxed text-ink whitespace-pre-wrap",
                    children: entry.note
                }, void 0, false, {
                    fileName: "[project]/src/components/EntryModal.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-ui text-xs text-rose mt-4",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/EntryModal.jsx",
                    lineNumber: 74,
                    columnNumber: 19
                }, this),
                confirmingDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 pt-4 border-t border-dashed border-blush flex items-center justify-center gap-3 font-ui text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-ink/60",
                            children: [
                                "Delete this memory",
                                entry.images?.length ? " and its photos" : "",
                                " for good?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EntryModal.jsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDelete,
                            disabled: deleting,
                            className: "text-rose font-semibold hover:underline disabled:opacity-60",
                            children: deleting ? "Deleting..." : "Yes, delete"
                        }, void 0, false, {
                            fileName: "[project]/src/components/EntryModal.jsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setConfirmingDelete(false),
                            disabled: deleting,
                            className: "text-ink/50 hover:underline",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/EntryModal.jsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/EntryModal.jsx",
                    lineNumber: 76,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/EntryModal.jsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/EntryModal.jsx",
        lineNumber: 47,
        columnNumber: 10
    }, this);
}
_s(EntryModal, "mE70R6SrAU4dzivSbTVevHDnZ34=");
_c = EntryModal;
var _c;
__turbopack_context__.k.register(_c, "EntryModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/uploadImage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadImage",
    ()=>uploadImage,
    "uploadImages",
    ()=>uploadImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Client-side image upload: compress first (mobile data matters), then
 * push straight to Cloudinary using an unsigned upload preset — no server
 * round-trip needed for the file bytes.
 *
 * Setup:
 *  1. npm install browser-image-compression
 *  2. In Cloudinary dashboard: Settings > Upload > Add unsigned preset
 *  3. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-client] (ecmascript)");
;
const CLOUD_NAME = ("TURBOPACK compile-time value", "jm5csuap");
const UPLOAD_PRESET = ("TURBOPACK compile-time value", "our journey");
async function uploadImage(file, { onProgress } = {}) {
    const compressed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1600,
        useWebWorker: true
    });
    const formData = new FormData();
    formData.append("file", compressed);
    formData.append("upload_preset", UPLOAD_PRESET);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData
    });
    if (!res.ok) throw new Error("Image upload failed");
    const data = await res.json();
    return data.secure_url;
}
async function uploadImages(files, opts) {
    return Promise.all(Array.from(files).map((f)=>uploadImage(f, opts)));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AddMemoryModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddMemoryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/uploadImage.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function todayISO() {
    return new Date().toISOString().slice(0, 10);
}
function toISODate(date) {
    return new Date(date).toISOString().slice(0, 10);
}
function AddMemoryModal({ onClose, onSaved, onDeleted, entry = null }) {
    _s();
    const isEditing = Boolean(entry);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(entry ? toISODate(entry.date) : todayISO());
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(entry?.note || "");
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previews, setPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(entry?.images || []);
    const [removedExisting, setRemovedExisting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmingDelete, setConfirmingDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function handleFiles(e) {
        const chosen = Array.from(e.target.files || []);
        setFiles((prev)=>[
                ...prev,
                ...chosen
            ]);
        setPreviews((prev_0)=>[
                ...prev_0,
                ...chosen.map((f)=>URL.createObjectURL(f))
            ]);
    }
    function removePreview(i) {
        const src = previews[i];
        if (entry?.images?.includes(src)) setRemovedExisting((prev_1)=>[
                ...prev_1,
                src
            ]);
        else setFiles((prev_2)=>prev_2.filter((f_0)=>URL.createObjectURL(f_0) !== src));
        setPreviews((prev_3)=>prev_3.filter((_, idx)=>idx !== i));
    }
    async function handleSubmit(e_0) {
        e_0.preventDefault();
        if (!note.trim()) {
            setError("Write something first — even a line.");
            return;
        }
        setSaving(true);
        setError(null);
        try {
            const newlyUploaded = files.length ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploadImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadImages"])(files) : [];
            const keptExisting = (entry?.images || []).filter((src_0)=>!removedExisting.includes(src_0));
            const images = [
                ...keptExisting,
                ...newlyUploaded
            ];
            const res = await fetch(isEditing ? `/api/entries/${entry._id || entry.id}` : "/api/entries", {
                method: isEditing ? "PATCH" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    date,
                    note,
                    images
                })
            });
            if (!res.ok) throw new Error(isEditing ? "Failed to update entry" : "Failed to save entry");
            const saved = await res.json();
            onSaved?.(saved);
            onClose?.();
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally{
            setSaving(false);
        }
    }
    async function handleDelete() {
        setDeleting(true);
        setError(null);
        try {
            const res_0 = await fetch(`/api/entries/${entry._id || entry.id}`, {
                method: "DELETE"
            });
            if (!res_0.ok) throw new Error("Failed to delete entry");
            onDeleted?.(entry);
            onClose?.();
        } catch (err_0) {
            setError(err_0.message || "Something went wrong");
            setDeleting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-ink/40 backdrop-blur-sm p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "w-full max-w-md sm:max-w-lg max-h-[92vh] overflow-y-auto pretty-scroll bg-paper rounded-lg border border-blush shadow-[6px_8px_0_rgba(74,53,64,0.15)] p-6 animate-[rise-in_0.2s_ease-out]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-hand text-3xl text-ink rotate-[-1deg]",
                            children: isEditing ? "Edit this memory" : "New memory"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddMemoryModal.jsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "h-8 w-8 rounded-full bg-baby-pink/70 text-ink/60 hover:text-ink font-ui text-sm",
                            "aria-label": "Close",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddMemoryModal.jsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block font-ui text-xs uppercase tracking-wide text-rose mb-1",
                    children: "Date"
                }, void 0, false, {
                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    value: date,
                    onChange: (e_1)=>setDate(e_1.target.value),
                    className: "w-full mb-4 rounded-md border border-blush bg-white/70 px-3 py-2 font-ui text-sm text-ink focus:outline-none focus:ring-2 focus:ring-rose/30"
                }, void 0, false, {
                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block font-ui text-xs uppercase tracking-wide text-rose mb-1",
                    children: "Note"
                }, void 0, false, {
                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: note,
                    onChange: (e_2)=>setNote(e_2.target.value),
                    rows: 4,
                    placeholder: "What happened today...",
                    className: "w-full mb-4 rounded-md border border-blush bg-white/70 px-3 py-2 font-hand text-lg text-ink focus:outline-none focus:ring-2 focus:ring-rose/30 resize-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block font-ui text-xs uppercase tracking-wide text-rose mb-1",
                    children: "Photos"
                }, void 0, false, {
                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "file",
                    accept: "image/*",
                    multiple: true,
                    onChange: handleFiles,
                    className: "w-full mb-3 font-ui text-xs text-ink/70 file:mr-3 file:rounded-full file:border-0 file:bg-baby-pink file:px-3 file:py-1.5 file:font-ui file:text-xs file:font-semibold file:text-rose"
                }, void 0, false, {
                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                previews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 mb-4 overflow-x-auto pretty-scroll",
                    children: previews.map((src_1, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: src_1,
                                    alt: "",
                                    className: "h-16 w-16 object-cover rounded-sm border border-blush"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>removePreview(i_0),
                                    className: "absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-rose text-paper text-[10px] leading-5 shadow",
                                    "aria-label": "Remove photo",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, src_1 + i_0, true, {
                            fileName: "[project]/src/components/AddMemoryModal.jsx",
                            lineNumber: 112,
                            columnNumber: 43
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                    lineNumber: 111,
                    columnNumber: 33
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-ui text-xs text-rose mb-3",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                    lineNumber: 120,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: saving || deleting,
                    className: "w-full font-ui text-sm font-semibold bg-rose text-paper px-5 py-3 rounded-full shadow-[0_4px_14px_rgba(181,56,79,0.35)] hover:brightness-110 active:scale-95 transition disabled:opacity-60",
                    children: saving ? "Saving..." : isEditing ? "Save changes" : "Save memory"
                }, void 0, false, {
                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 pt-4 border-t border-dashed border-blush",
                    children: !confirmingDelete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setConfirmingDelete(true),
                        className: "w-full font-ui text-xs text-ink/40 hover:text-rose transition-colors",
                        children: "Delete this memory"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AddMemoryModal.jsx",
                        lineNumber: 127,
                        columnNumber: 34
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-3 font-ui text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-ink/60",
                                children: "Delete for good?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddMemoryModal.jsx",
                                lineNumber: 130,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleDelete,
                                disabled: deleting,
                                className: "text-rose font-semibold hover:underline disabled:opacity-60",
                                children: deleting ? "Deleting..." : "Yes, delete"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddMemoryModal.jsx",
                                lineNumber: 131,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setConfirmingDelete(false),
                                className: "text-ink/50 hover:underline",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddMemoryModal.jsx",
                                lineNumber: 134,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddMemoryModal.jsx",
                        lineNumber: 129,
                        columnNumber: 27
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AddMemoryModal.jsx",
                    lineNumber: 126,
                    columnNumber: 23
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AddMemoryModal.jsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AddMemoryModal.jsx",
        lineNumber: 91,
        columnNumber: 10
    }, this);
}
_s(AddMemoryModal, "CHg7OREja/2F3I/hN+/ebRJWQAs=");
_c = AddMemoryModal;
var _c;
__turbopack_context__.k.register(_c, "AddMemoryModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RelationshipTimeline$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RelationshipTimeline.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MemoriesFeed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MemoriesFeed.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DiarySpread$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DiarySpread.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EntryModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EntryModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddMemoryModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AddMemoryModal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const TABS = [
    {
        id: "journey",
        label: "Journey"
    },
    {
        id: "diary",
        label: "Diary"
    }
];
function entryId(e) {
    return e?._id || e?.id;
}
function HomePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    if ($[0] !== "af73d01799adb40b3c3d4b3b91f14b54be30d81b9b72409f56d1b808ebe0d1ab") {
        for(let $i = 0; $i < 52; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "af73d01799adb40b3c3d4b3b91f14b54be30d81b9b72409f56d1b808ebe0d1ab";
    }
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("journey");
    const [openEntry, setOpenEntry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingEntry, setEditingEntry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const viewerAuthor = session?.user?.author;
    let t1;
    let t2;
    if ($[2] !== status) {
        t1 = ({
            "HomePage[useEffect()]": ()=>{
                if (status !== "authenticated") {
                    return;
                }
                fetch("/api/entries").then(_HomePageUseEffectAnonymous).then({
                    "HomePage[useEffect() > (anonymous)()]": (data)=>setEntries(Array.isArray(data) ? data : [])
                }["HomePage[useEffect() > (anonymous)()]"]).catch({
                    "HomePage[useEffect() > (anonymous)()]": (err)=>setLoadError(err.message)
                }["HomePage[useEffect() > (anonymous)()]"]).finally({
                    "HomePage[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["HomePage[useEffect() > (anonymous)()]"]);
            }
        })["HomePage[useEffect()]"];
        t2 = [
            status
        ];
        $[2] = status;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[5] !== toast) {
        t3 = ({
            "HomePage[useEffect()]": ()=>{
                if (!toast) {
                    return;
                }
                const t = setTimeout({
                    "HomePage[useEffect() > setTimeout()]": ()=>setToast(null)
                }["HomePage[useEffect() > setTimeout()]"], 2200);
                return ()=>clearTimeout(t);
            }
        })["HomePage[useEffect()]"];
        t4 = [
            toast
        ];
        $[5] = toast;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] !== editingEntry?._id || $[9] !== editingEntry?.id) {
        t5 = function handleSaved(saved) {
            setEntries({
                "HomePage[handleSaved > setEntries()]": (prev)=>{
                    const exists = prev.some({
                        "HomePage[handleSaved > setEntries() > prev.some()]": (e)=>entryId(e) === entryId(saved)
                    }["HomePage[handleSaved > setEntries() > prev.some()]"]);
                    return exists ? prev.map({
                        "HomePage[handleSaved > setEntries() > prev.map()]": (e_0)=>entryId(e_0) === entryId(saved) ? saved : e_0
                    }["HomePage[handleSaved > setEntries() > prev.map()]"]) : [
                        ...prev,
                        saved
                    ];
                }
            }["HomePage[handleSaved > setEntries()]"]);
            setToast(editingEntry?._id || editingEntry?.id ? "Memory updated \uD83D\uDC95" : "Memory saved \uD83D\uDC95");
        };
        $[8] = editingEntry?._id;
        $[9] = editingEntry?.id;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const handleSaved = t5;
    let t6;
    if ($[11] !== openEntry) {
        t6 = function handleDeleted(deleted) {
            setEntries({
                "HomePage[handleDeleted > setEntries()]": (prev_0)=>prev_0.filter({
                        "HomePage[handleDeleted > setEntries() > prev_0.filter()]": (e_1)=>entryId(e_1) !== entryId(deleted)
                    }["HomePage[handleDeleted > setEntries() > prev_0.filter()]"])
            }["HomePage[handleDeleted > setEntries()]"]);
            if (entryId(openEntry) === entryId(deleted)) {
                setOpenEntry(null);
            }
            setToast("Memory deleted");
        };
        $[11] = openEntry;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const handleDeleted = t6;
    if (status === "loading") {
        let t7;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-ui text-sm text-ink/50",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 141,
                    columnNumber: 76
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 141,
                columnNumber: 12
            }, this);
            $[13] = t7;
        } else {
            t7 = $[13];
        }
        return t7;
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-16 sm:w-24",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "font-hand text-3xl sm:text-5xl text-ink rotate-[-1deg]",
            children: "Memory Lane"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== session) {
        t9 = session?.user?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-ui text-[11px] sm:text-xs text-ink/40 mt-0.5",
            children: [
                "signed in as ",
                session.user.name
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 164,
            columnNumber: 33
        }, this);
        $[16] = session;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: _HomePageButtonOnClick,
            className: "font-ui text-xs text-ink/40 hover:text-rose transition-colors w-16 sm:w-24 text-right",
            children: "Sign out"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "pt-6 sm:pt-8 pb-3 sm:pb-4 px-4 sm:px-8 flex items-center justify-between max-w-7xl mx-auto w-full",
            children: [
                t7,
                " ",
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== tab) {
        t13 = TABS.map({
            "HomePage[TABS.map()]": (t_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "HomePage[TABS.map() > <button>.onClick]": ()=>setTab(t_0.id)
                    }["HomePage[TABS.map() > <button>.onClick]"],
                    className: `font-ui text-sm px-5 py-1.5 rounded-full transition-colors ${tab === t_0.id ? "bg-rose text-paper" : "bg-baby-pink/60 text-ink/60 hover:bg-baby-pink"}`,
                    children: t_0.label
                }, t_0.id, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 196,
                    columnNumber: 38
                }, this)
        }["HomePage[TABS.map()]"]);
        $[23] = tab;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex justify-center gap-2 mb-4 sm:mb-6 px-4",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== entries || $[28] !== loadError || $[29] !== loading || $[30] !== tab || $[31] !== viewerAuthor) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 px-3 sm:px-8 pb-28 w-full max-w-7xl mx-auto",
            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-ui text-sm text-ink/50 text-center py-16",
                children: "Loading your memories..."
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 215,
                columnNumber: 90
            }, this) : loadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-ui text-sm text-rose text-center py-16",
                children: loadError
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 215,
                columnNumber: 194
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    tab === "journey" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-[46%] lg:sticky lg:top-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RelationshipTimeline$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    entries: entries,
                                    viewerAuthor: viewerAuthor,
                                    onOpenEntry: setOpenEntry
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 215,
                                    columnNumber: 422
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 215,
                                columnNumber: 368
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:flex-1 lg:min-w-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MemoriesFeed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    entries: entries,
                                    viewerAuthor: viewerAuthor,
                                    onOpenEntry: setOpenEntry
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 215,
                                    columnNumber: 570
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 215,
                                columnNumber: 525
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 215,
                        columnNumber: 295
                    }, this),
                    tab === "diary" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DiarySpread$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        entries: entries,
                        viewerAuthor: viewerAuthor
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 215,
                        columnNumber: 692
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[27] = entries;
        $[28] = loadError;
        $[29] = loading;
        $[30] = tab;
        $[31] = viewerAuthor;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "HomePage[<button>.onClick]": ()=>setEditingEntry({})
        })["HomePage[<button>.onClick]"];
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t16,
            className: "fixed left-1/2 -translate-x-1/2 z-30 font-ui text-sm font-semibold bg-rose text-paper px-5 py-3 rounded-full shadow-[0_4px_14px_rgba(181,56,79,0.35)] hover:brightness-110 active:scale-95 transition",
            style: {
                bottom: "max(1.5rem, env(safe-area-inset-bottom))"
            },
            children: "+ Add more memories"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== toast) {
        t18 = toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed left-1/2 -translate-x-1/2 z-40 font-ui text-xs font-semibold bg-ink text-paper px-4 py-2 rounded-full shadow-lg animate-[rise-in_0.2s_ease-out]",
            style: {
                bottom: "max(5.5rem, calc(env(safe-area-inset-bottom) + 4.5rem))"
            },
            children: toast
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 245,
            columnNumber: 20
        }, this);
        $[35] = toast;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== handleDeleted || $[38] !== openEntry || $[39] !== viewerAuthor) {
        t19 = openEntry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EntryModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            entry: openEntry,
            viewerAuthor: viewerAuthor,
            onClose: {
                "HomePage[<EntryModal>.onClose]": ()=>setOpenEntry(null)
            }["HomePage[<EntryModal>.onClose]"],
            onEdit: {
                "HomePage[<EntryModal>.onEdit]": (entry)=>{
                    setOpenEntry(null);
                    setEditingEntry(entry);
                }
            }["HomePage[<EntryModal>.onEdit]"],
            onDelete: handleDeleted
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 255,
            columnNumber: 24
        }, this);
        $[37] = handleDeleted;
        $[38] = openEntry;
        $[39] = viewerAuthor;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== editingEntry || $[42] !== handleDeleted || $[43] !== handleSaved) {
        t20 = editingEntry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddMemoryModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            entry: entryId(editingEntry) ? editingEntry : null,
            onClose: {
                "HomePage[<AddMemoryModal>.onClose]": ()=>setEditingEntry(null)
            }["HomePage[<AddMemoryModal>.onClose]"],
            onSaved: handleSaved,
            onDeleted: handleDeleted
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 272,
            columnNumber: 27
        }, this);
        $[41] = editingEntry;
        $[42] = handleDeleted;
        $[43] = handleSaved;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== t12 || $[46] !== t14 || $[47] !== t15 || $[48] !== t18 || $[49] !== t19 || $[50] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen flex flex-col",
            children: [
                t12,
                t14,
                t15,
                t17,
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[45] = t12;
        $[46] = t14;
        $[47] = t15;
        $[48] = t18;
        $[49] = t19;
        $[50] = t20;
        $[51] = t21;
    } else {
        t21 = $[51];
    }
    return t21;
}
_s(HomePage, "C0VLo87iOtgr8apLu4vLVq6bxYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = HomePage;
function _HomePageButtonOnClick() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
        callbackUrl: "/login"
    });
}
function _HomePageUseEffectAnonymous(r) {
    if (!r.ok) {
        throw new Error("Couldn't load your memories. Try refreshing.");
    }
    return r.json();
}
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1jj_jm_._.js.map