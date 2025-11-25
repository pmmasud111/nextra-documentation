// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = { title: string; href: string };

const NAV: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Guide", href: "/guide" },
  { title: "API", href: "/api" },
  { title: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="font-semibold text-lg">Walsh</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map(n => {
              const active =
                pathname === n.href || pathname.startsWith(n.href + "/");
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={
                    "px-2 py-1 rounded-md text-sm transition " +
                    (active
                      ? "font-semibold border-b-2 border-indigo-600 text-indigo-700"
                      : "text-gray-700 hover:text-indigo-600")
                  }
                >
                  {n.title}
                </Link>
              );
            })}
          </nav>

          {/* Right: actions + mobile button */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden md:inline-block px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50"
            >
              Login
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md"
              aria-label="Toggle menu"
              onClick={() => setOpen(v => !v)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white/95">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV.map(n => {
              const active =
                pathname === n.href || pathname.startsWith(n.href + "/");
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={
                    "block px-3 py-2 rounded-md text-sm " +
                    (active ? "font-semibold text-indigo-700" : "text-gray-700")
                  }
                >
                  {n.title}
                </Link>
              );
            })}

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-gray-700"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
