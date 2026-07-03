import { Caveat, Quicksand } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

// Self-hosted via next/font — avoids the render-blocking network @import
// and the Turbopack CSS-ordering error that comes with putting a Google
// Fonts @import inside globals.css alongside `@import "tailwindcss"`.
const caveat = Caveat({
  variable: "--caveat-font",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--quicksand-font",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Memory Lane",
  description: "A private timeline and diary for two.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="app-bg-layer" aria-hidden="true" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
