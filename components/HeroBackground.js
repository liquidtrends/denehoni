"use client";
import { useEffect, useRef } from "react";

export default function HeroBackground({ range = 400 }) {

  const rafRef = useRef(0);

  useEffect(() => {
    const root = document.documentElement;

    const clamp01 = (v) => Math.max(0, Math.min(1, v));

    const onScroll = () => {
      const y = window.scrollY || 0;
      const p = clamp01(y / range);

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        root.style.setProperty("--sun-progress", String(p));
        root.style.setProperty("--day-opacity", String(p));
      });
    };

    onScroll();
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
