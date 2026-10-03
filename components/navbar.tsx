"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/#about", label: "about" },
  { href: "/#tracks", label: "tracks" },
  { href: "/#schedule", label: "schedule" },
  { href: "/#faq", label: "faq" },
  { href: "/#sponsors", label: "sponsors" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-in sticky top-0 z-50 bg-[#0d3354]/40 backdrop-blur-lg border-b border-white/10 nav-glass ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap flex items-center justify-between py-3">
        <Link href="/#top" className="flex items-center gap-2 font-bold text-white">
          <img src="/logo.png" alt="" width={28} height={28} className="w-7 h-7 object-contain" />
          Ice Hacks
        </Link>
        <button
          className="md:hidden text-white text-xl"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link capitalize"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:outreach@codestarters.org?subject=Apply%20to%20Ice%20Hacks"
            className="btn btn-ice btn-s"
          >
            Apply
          </a>
        </div>
      </div>
      {open && (
        <div className="mobile-menu-overlay">
          <button 
            className="mobile-menu-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <div className="flex flex-col items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link capitalize text-2xl"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:outreach@codestarters.org?subject=Apply%20to%20Ice%20Hacks"
              className="btn btn-ice btn-s w-fit mt-4"
              onClick={() => setOpen(false)}
            >
              Apply
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
