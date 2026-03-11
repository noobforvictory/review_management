import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReviewFlow – Get More 5-Star Google Reviews",
  description:
    "Simple review funnel SaaS that helps local businesses get more 5-star Google reviews and catch unhappy customers before they post publicly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-xs font-semibold text-white">
                  RF
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-tight">
                    ReviewFlow
                  </span>
                  <span className="text-xs text-zinc-500">
                    Google reviews on autopilot
                  </span>
                </div>
              </Link>
              <nav className="flex items-center gap-4 text-sm">
                <Link
                  href="/dashboard"
                  className="hidden text-zinc-600 hover:text-zinc-900 sm:inline-flex"
                >
                  Dashboard
                </Link>
                <Link
                  href="/auth/sign-in"
                  className="text-zinc-600 hover:text-zinc-900"
                >
                  Log in
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
                >
                  Start free trial
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-zinc-200 bg-white/80">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-zinc-500 sm:px-6 lg:px-8">
              <span>© {new Date().getFullYear()} ReviewFlow</span>
              <span>Made for local businesses</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
