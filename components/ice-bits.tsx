"use client";

import { useEffect, useState } from "react";

const bits = [
  { c: "a", x: "6%", y: "18%" },
  { c: "b", x: "86%", y: "28%" },
  { c: "c", x: "10%", y: "68%" },
  { c: "d", x: "82%", y: "72%" },
];

function Crystal({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 64 80" fill="none" aria-hidden="true">
      <path
        d="M32 4 L56 28 L32 76 L8 28 Z"
        fill={`url(#${id})`}
        stroke="rgba(255,255,255,0.65)"
        strokeWidth="1.6"
      />
      <path d="M32 4 L32 76" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
      <path d="M8 28 H56" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <defs>
        <linearGradient id={id} x1="32" y1="4" x2="32" y2="76">
          <stop stopColor="#f4fbff" />
          <stop offset="0.45" stopColor="#9fd4ff" />
          <stop offset="1" stopColor="#3a8ec4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IceBits() {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="ice-bits" aria-hidden="true">
      {bits.map((b, i) => (
        <span
          key={b.c}
          className={`ice-bit ${b.c}`}
          style={{
            left: b.x,
            top: b.y,
            transform: `translateY(${y * (0.035 + i * 0.018)}px)`,
          }}
        >
          <span className="ice-bit-spin" style={{ animationDelay: `${i * 0.4}s` }}>
            <Crystal id={`iceg-${b.c}`} />
          </span>
        </span>
      ))}
    </div>
  );
}
