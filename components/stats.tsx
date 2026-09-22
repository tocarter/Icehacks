"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { n: 200, suffix: "+", l: "HACKERS" },
  { n: 8, suffix: "", l: "DAYS" },
  { n: 10, prefix: "$", suffix: "K", l: "PRIZES" },
  { n: 100, suffix: "%", l: "FREE" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [vals, setVals] = useState(items.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!on) return;
    const start = performance.now();
    let raf = 0;
    const run = (t: number) => {
      const p = Math.min(1, (t - start) / 1100);
      const ease = 1 - (1 - p) ** 3;
      setVals(items.map((it) => Math.round(it.n * ease)));
      if (p < 1) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [on]);

  return (
    <div className="ice-strip" ref={ref}>
      <div className="stagger wrap grid grid-cols-2 md:grid-cols-4 py-8 gap-6 text-center">
        {items.map((it, i) => (
          <div key={it.l} className="stat-cell">
            <b>
              {it.prefix}
              {vals[i]}
              {it.suffix}
            </b>
            <i>{it.l}</i>
          </div>
        ))}
      </div>
    </div>
  );
}
