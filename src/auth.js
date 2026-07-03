import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

function getAccounts() {
  return [
    { id: "me", email: process.env.AUTH_ME_EMAIL, passwordHash: process.env.AUTH_ME_PASSWORD_HASH, name: "Me" },
    { id: "her", email: process.env.AUTH_HER_EMAIL, passwordHash: process.env.AUTH_HER_PASSWORD_HASH, name: "Her" },
  ];
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
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
        const account = getAccounts().find((a) => a.email && a.email.toLowerCase() === email);
        if (!account || !account.passwordHash) return null;
        const valid = await bcrypt.compare(password, account.passwordHash);
        if (!valid) return null;
        return { id: account.id, name: account.name, email: account.email };
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, user }) {
      if (user) token.author = user.id;
      return token;
    },
    async session({ session, token }) {
      session.user.author = token.author;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
});