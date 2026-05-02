"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Track Record", href: "/#track-record" },
  { label: "Benefits", href: "/#benefits" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-brand-jet-black border-b border-brand-dim-grey sticky top-0 z-50">
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-playfair text-brand-alabaster text-xl font-bold hover:text-brand-red transition-colors duration-200 shrink-0"
          aria-label="Homepage"
        >
          [Owner Name]
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-barlow font-semibold text-brand-silver hover:text-brand-alabaster transition-colors duration-200 text-label"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="font-barlow font-bold text-brand-alabaster bg-brand-red px-5 py-2 hover:opacity-90 transition-opacity duration-200 text-label"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-brand-alabaster transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-brand-alabaster transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-brand-alabaster transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-jet-black border-t border-brand-dim-grey px-6 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-barlow font-semibold text-brand-silver hover:text-brand-alabaster transition-colors duration-200 text-label py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="font-barlow font-bold text-brand-alabaster bg-brand-red px-5 py-3 hover:opacity-90 transition-opacity duration-200 text-label text-center"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
