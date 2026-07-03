export const authConfig = {
  pages: { signIn: "/login" },
  callbacks: {
    authorized({ auth: session }) {
      return !!session?.user;
    },
  },
  providers: [], // real providers only added in auth.js
};  