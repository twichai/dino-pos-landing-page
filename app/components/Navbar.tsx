"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Why Free", href: "#story" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-violet-100 shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-dino-primary to-dino-secondary text-white shadow-md">
            <DinoMark className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-dino-dark">
            Dino <span className="text-dino-primary">POS</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-dino-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="flex items-center gap-2 rounded-full bg-dino-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-violet-700"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-dino-dark md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass border-t border-violet-100 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-violet-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-dino-primary px-5 py-3 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* Small geometric dino mark for the brand badge */
function DinoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 14c0-1 1-2 2-2 1-3 4-5 7-5s6 2 7 5c1 0 2 1 2 2v3c0 1-1 2-2 2h-1c0 1-1 2-2 2h-2c-1 0-2-1-2-2v-2H9v2c0 1-1 2-2 2H5c-1 0-2-1-2-2v-3z" />
      <circle cx="15" cy="9" r="1.2" fill="white" />
    </svg>
  );
}
