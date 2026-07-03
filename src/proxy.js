export { auth as default } from "@/auth";

export const config = {
  // Protect everything except the login page, NextAuth's own API routes,
  // and Next.js internals/static assets.
  matcher: ["/((?!api/auth|login|_next/static|_next/image|favicon.ico).*)"],
};
