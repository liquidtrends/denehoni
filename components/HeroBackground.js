"use client";
import { useEffect, useRef } from "react";

export default function HeroBackground({ range = 400 }) {
  // 'range' = how many pixels of scroll it takes to reach full day (progress=1)

  const rafRef = useRef(0);

  useEffect(() => {
    const root = document.documentElement;

    const clamp01 = (v) => Math.max(0, Math.min(1, v));

    const onScroll = () => {
      // compute progress based on page scroll
      const y = window.scrollY || 0;
      const p = clamp01(y / range);

      // write to CSS vars once per frame
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        root.style.setProperty("--sun-progress", String(p));
        root.style.setProperty("--day-opacity", String(p));
      });
    };

    onScroll(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [range]);

  return (
    <div className="sunrise-sky">
      <div className="sunrise-sun" />
      <div className="sunrise-horizon-line" />
    </div>
  );
}
