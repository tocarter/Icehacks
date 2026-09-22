"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#about", label: "about" },
  { href: "/#tracks", label: "tracks" },
  { href: "/#schedule", label: "schedule" },
  { href: "/#faq", label: "faq" },
  { href: "/#sponsors", label: "sponsors" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-in sticky top-0 z-50 bg-[#0d3354]/55 backdrop-blur-md border-b border-white/15">
      <div className="wrap flex items-center justify-between py-3">
        <Link href="/#top" className="flex items-center gap-2 font-bold text-white">
          <img src="/logo.png" alt="" width={28} height={28} className="w-7 h-7 object-contain" />
          Ice Hacks
        </Link>
        <button
          className="md:hidden text-white text-xl"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#c5ebff] hover:text-white capitalize"
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
        <div className="md:hidden wrap pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#c5ebff] capitalize"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:outreach@codestarters.org?subject=Apply%20to%20Ice%20Hacks"
            className="btn btn-ice btn-s w-fit"
          >
            Apply
          </a>
        </div>
      )}
    </nav>
  );
}
