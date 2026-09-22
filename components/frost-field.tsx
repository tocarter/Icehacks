"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  s: number;
  v: number;
  o: number;
};

export function FrostField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999 };
    let dots: Dot[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;

    const spawn = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const n = Math.min(70, Math.floor((w * h) / 18000));
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: 1.2 + Math.random() * 2.4,
        v: 0.25 + Math.random() * 0.55,
        o: 0.25 + Math.random() * 0.45,
      }));
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < 120) {
          d.x += (dx / dist) * 1.4;
          d.y += (dy / dist) * 1.4;
        }
        d.y += d.v;
        d.x += Math.sin(d.y * 0.01) * 0.25;
        if (d.y > h + 8) {
          d.y = -8;
          d.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(232, 247, 255, ${d.o})`;
        ctx.arc(d.x, d.y, d.s, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    spawn();
    tick();
    window.addEventListener("resize", spawn);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", spawn);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="frost-field" aria-hidden="true" />;
}
