"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Lightbox({ src, alt = "", onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl aspect-[16/9]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 rounded-lg bg-white/10 px-3 py-1 text-white hover:bg-white/20"
        >
          Close
        </button>
      </div>
    </div>
  );
}
