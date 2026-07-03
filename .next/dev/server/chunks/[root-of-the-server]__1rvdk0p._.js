module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/auth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
;
/**
 * Two whitelisted accounts only — no public registration.
 * Generate password hashes once with:
 *   node -e "console.log(require('bcryptjs').hashSync('yourpassword', 10))"
 * and put the emails/hashes in env vars, never in code.
 */ function getAccounts() {
    return [
        {
            id: "me",
            email: process.env.AUTH_ME_EMAIL,
            passwordHash: process.env.AUTH_ME_PASSWORD_HASH,
            name: "Me"
        },
        {
            id: "her",
            email: process.env.AUTH_HER_EMAIL,
            passwordHash: process.env.AUTH_HER_PASSWORD_HASH,
            name: "Her"
        }
    ];
}
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            name: "Email and password",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                const email = credentials?.email?.toLowerCase();
                const password = credentials?.password;
                if (!email || !password) return null;
                const account = getAccounts().find((a)=>a.email && a.email.toLowerCase() === email);
                if (!account || !account.passwordHash) return null;
                const valid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, account.passwordHash);
                if (!valid) return null;
                return {
                    id: account.id,
                    name: account.name,
                    email: account.email
                };
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt ({ token, user }) {
            if (user) token.author = user.id; // 'me' | 'her'
            return token;
        },
        async session ({ session, token }) {
            session.user.author = token.author;
            return session;
        },
        // This is what src/proxy.js actually relies on. Without it, `auth()`
        // still runs and attaches a session to the request, but it never
        // blocks anything — every route stays reachable even signed out.
        // Returning false here is what makes NextAuth redirect unauthenticated
        // requests to `pages.signIn` for every path matched by proxy.js.
        authorized ({ auth: session }) {
            return !!session?.user;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    trustHost: true
});
}),
"[project]/src/lib/db.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectDB",
    ()=>connectDB
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI env var");
}
// Reuse the connection across hot reloads / serverless invocations
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g._mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g._mongoose = {
        conn: null,
        promise: null
    };
}
async function connectDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        console.log("[connectDB] connecting to:", MONGODB_URI.replace(/\/\/.*@/, "//<redacted>@"));
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, {
            bufferCommands: false,
            serverSelectionTimeoutMS: 8000
        }).then((m)=>{
            console.log("[connectDB] connected OK, readyState:", m.connection.readyState);
            return m;
        }).catch((err)=>{
            console.error("[connectDB] connection FAILED:", err.message);
            cached.promise = null; // let the next request retry instead of caching a dead promise
            throw err;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
}),
"[project]/src/lib/models/Entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const EntrySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    date: {
        type: Date,
        required: true
    },
    author: {
        type: String,
        enum: [
            "me",
            "her"
        ],
        required: true
    },
    note: {
        type: String,
        required: true,
        maxlength: 4000
    },
    images: [
        {
            type: String
        }
    ]
}, {
    timestamps: true
});
EntrySchema.index({
    date: 1
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Entry || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Entry", EntrySchema);
}),
"[project]/src/lib/cloudinary.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteImagesByUrl",
    ()=>deleteImagesByUrl,
    "extractPublicId",
    ()=>extractPublicId
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
/**
 * Server-side Cloudinary cleanup. Uploads happen client-side (unsigned
 * preset, see uploadImage.jsx), but deletion needs the API secret, so it
 * has to happen here instead.
 *
 * Setup: set CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in .env.local
 * (from Cloudinary dashboard > Settings > Access Keys). Reuses
 * NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME for the cloud name.
 */ const CLOUD_NAME = ("TURBOPACK compile-time value", "jm5csuap");
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;
function extractPublicId(url) {
    try {
        const { pathname } = new URL(url);
        const parts = pathname.split("/").filter(Boolean);
        const uploadIdx = parts.indexOf("upload");
        if (uploadIdx === -1) return null;
        let rest = parts.slice(uploadIdx + 1);
        // Drop a version segment like "v1699999999" if present.
        if (rest[0] && /^v\d+$/.test(rest[0])) rest = rest.slice(1);
        if (rest.length === 0) return null;
        const filename = rest.join("/");
        return filename.replace(/\.[a-zA-Z0-9]+$/, ""); // strip extension
    } catch  {
        return null;
    }
}
async function deleteOne(publicId) {
    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = `public_id=${publicId}&timestamp=${timestamp}`;
    const signature = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha1").update(paramsToSign + API_SECRET).digest("hex");
    const body = new URLSearchParams({
        public_id: publicId,
        timestamp: String(timestamp),
        api_key: API_KEY,
        signature
    });
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body
    });
    const data = await res.json().catch(()=>({}));
    // Cloudinary returns {result: "ok"} on success, {result: "not found"} if
    // it's already gone — both are fine, anything else we surface as a warning.
    if (!res.ok || data.result && data.result !== "ok" && data.result !== "not found") {
        console.warn(`[cloudinary] failed to delete "${publicId}":`, data.result || res.status);
    }
    return data;
}
async function deleteImagesByUrl(urls = []) {
    if (!urls.length) return;
    if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
        console.warn("[cloudinary] Missing CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET (or cloud name) — skipping image cleanup for", urls.length, "image(s).");
        return;
    }
    const publicIds = urls.map(extractPublicId).filter(Boolean);
    await Promise.all(publicIds.map((id)=>deleteOne(id).catch((err)=>console.warn("[cloudinary] delete error:", err.message))));
}
}),
"[project]/src/app/api/entries/[id]/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$Entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/Entry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cloudinary.js [app-route] (ecmascript)");
;
;
;
;
;
const isDev = ("TURBOPACK compile-time value", "development") !== "production";
async function loadOwnedEntry(id, session) {
    const entry = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$Entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id);
    if (!entry) return {
        error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Entry not found"
        }, {
            status: 404
        })
    };
    if (entry.author !== session.user.author) {
        // You can only edit/delete your own entries — not your partner's.
        return {
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "You can only edit your own entries"
            }, {
                status: 403
            })
        };
    }
    return {
        entry
    };
}
async function PATCH(request, { params }) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
    if (!session) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "Unauthorized"
    }, {
        status: 401
    });
    const { id } = await params;
    const body = await request.json();
    const { date, note, images } = body;
    if (note !== undefined && !note.trim()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Note can't be empty"
        }, {
            status: 400
        });
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const { entry, error } = await loadOwnedEntry(id, session);
        if (error) return error;
        // Any images that were on the entry before but aren't in the incoming
        // list were removed in the editor — clean them up in Cloudinary too.
        const removedImages = images !== undefined ? entry.images.filter((src)=>!images.includes(src)) : [];
        if (date !== undefined) entry.date = new Date(date);
        if (note !== undefined) entry.note = note.trim();
        if (images !== undefined) entry.images = images;
        await entry.save();
        if (removedImages.length) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteImagesByUrl"])(removedImages);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(entry);
    } catch (err) {
        console.error("[PATCH /api/entries/:id] failed:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to update entry",
            detail: ("TURBOPACK compile-time truthy", 1) ? err.message : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
async function DELETE(request, { params }) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
    if (!session) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "Unauthorized"
    }, {
        status: 401
    });
    const { id } = await params;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const { entry, error } = await loadOwnedEntry(id, session);
        if (error) return error;
        await entry.deleteOne();
        if (entry.images?.length) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteImagesByUrl"])(entry.images);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch (err) {
        console.error("[DELETE /api/entries/:id] failed:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to delete entry",
            detail: ("TURBOPACK compile-time truthy", 1) ? err.message : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1rvdk0p._.js.map