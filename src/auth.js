import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

/**
 * Two whitelisted accounts only — no public registration.
 * Generate password hashes once with:
 *   node -e "console.log(require('bcryptjs').hashSync('yourpassword', 10))"
 * and put the emails/hashes in env vars, never in code.
 */
function getAccounts() {
  return [
    {
      id: "me",
      email: process.env.AUTH_ME_EMAIL,
      passwordHash: process.env.AUTH_ME_PASSWORD_HASH,
      name: "Me",
    },
    {
      id: "her",
      email: process.env.AUTH_HER_EMAIL,
      passwordHash: process.env.AUTH_HER_PASSWORD_HASH,
      name: "Her",
    },
  ];
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email and password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase();
        const password = credentials?.password;
        if (!email || !password) return null;

        const account = getAccounts().find(
          (a) => a.email && a.email.toLowerCase() === email
        );
        if (!account || !account.passwordHash) return null;

        const valid = await bcrypt.compare(password, account.passwordHash);
        if (!valid) return null;

        return { id: account.id, name: account.name, email: account.email };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.author = user.id; // 'me' | 'her'
      return token;
    },
    async session({ session, token }) {
      session.user.author = token.author;
      return session;
    },
    // This is what src/proxy.js actually relies on. Without it, `auth()`
    // still runs and attaches a session to the request, but it never
    // blocks anything — every route stays reachable even signed out.
    // Returning false here is what makes NextAuth redirect unauthenticated
    // requests to `pages.signIn` for every path matched by proxy.js.
    authorized({ auth: session }) {
      return !!session?.user;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
});
