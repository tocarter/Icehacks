"use client";

import { useEffect, useState } from "react";

const APPLY =
  "mailto:outreach@codestarters.org?subject=Apply%20to%20Ice%20Hacks";

const OPEN = Date.parse("2026-11-08T18:00:00-08:00");

function split(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Hero() {
  const [now, setNow] = useState(OPEN - 1);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, []);

  const left = Math.max(0, OPEN - now);
  const t = split(left);
  const live = left > 0;

  return (
    <header id="top" className="hero relative min-h-[100dvh] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-10">
        <p className="in kicker-line">
          November 8–15, 2026 · Online · 100% free
        </p>

        <div className="hero-mark in">
          <h1 className="icy-title">
            ICE
            <br />
            HACKS
          </h1>
          <span className="drip" style={{ left: "28%", animationDelay: "0s" }} />
          <span className="drip" style={{ left: "50%", animationDelay: "0.35s" }} />
          <span className="drip" style={{ left: "72%", animationDelay: "0.7s" }} />
        </div>
        <p className="in d1 edition">2026 Edition</p>
        <p className="in d2 lede hero-lede">
          A week online for high schoolers to build something that actually
          runs — software, hardware, or the weird idea in between.
        </p>

        <p className="in d2 count-label">Live countdown to opening</p>
        <div className="in d3 melt-clock" aria-live="polite">
          {live ? (
            [
              [pad(t.d), "days"],
              [pad(t.h), "hours"],
              [pad(t.m), "mins"],
              [pad(t.s), "secs"],
            ].map(([n, l]) => (
              <div key={l} className="count-cell">
                <b>{n}</b>
                <span>{l}</span>
              </div>
            ))
          ) : (
            <p className="text-[#c5ebff]">The freeze has started.</p>
          )}
        </div>
      </div>

      <div className="hero-cta in d4">
        <div className="wrap flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="text-[10px] sm:text-[11px] tracking-[0.15em] text-[#c5ebff] uppercase">
              Online · software, hardware, anything · 200+ hackers
            </p>
            <p className="text-[10px] sm:text-xs text-[#d5eefc] mt-1">
              8 days · $10K in prizes · all skill levels
            </p>
          </div>
          <div className="flex gap-2.5 w-full sm:w-auto">
            <a href={APPLY} className="btn btn-ice flex-1 sm:flex-initial">
              Apply
            </a>
            <a href="#about" className="btn btn-quiet flex-1 sm:flex-initial">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
