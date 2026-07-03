"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("That email or password doesn't match.");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="scrapbook-bg min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-paper border border-blush rounded-lg shadow-[4px_6px_0_rgba(74,53,64,0.12)] p-6 sm:p-8"
      >
        <h1 className="font-hand text-4xl text-ink text-center mb-1 rotate-[-1deg]">
          Memory Lane
        </h1>

        <p className="font-ui text-xs text-ink/50 text-center mb-6">
          just the two of us
        </p>

        {/* Email */}
        <label className="block font-ui text-xs uppercase tracking-wide text-rose mb-1">
          Email
        </label>

        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 rounded-md border border-blush bg-white/70 px-3 py-2 font-ui text-sm text-ink focus:outline-none focus:ring-2 focus:ring-rose/30"
        />

        {/* Password */}
        <label className="block font-ui text-xs uppercase tracking-wide text-rose mb-1">
          Password
        </label>

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-blush bg-white/70 px-3 py-2 pr-11 font-ui text-sm text-ink focus:outline-none focus:ring-2 focus:ring-rose/30"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center justify-center text-ink/60 hover:text-rose transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="font-ui text-xs text-rose mb-3">
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full font-ui text-sm font-semibold bg-rose text-paper px-5 py-3 rounded-full shadow-[0_4px_14px_rgba(181,56,79,0.35)] hover:brightness-110 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}