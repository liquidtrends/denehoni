"use client";

import { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import ActiveLink from "./ActiveLink";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container className="flex items-center justify-between py-3">
        <Logo />
          <nav className="hidden md:flex items-center gap-8 relative">
            {site.nav.map((item) => (
              <ActiveLink
                key={item.href}
                href={item.href}
                className="relative text-base font-semibold tracking-wide text-neutral-800 hover:text-brand-red transition-colors duration-300 group font-varela"
              >
                {item.name}
                {/* Fancy underline */}
                <span className="absolute left-0 bottom-[-4px] h-[3px] w-0 bg-gradient-to-r from-brand-red to-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </ActiveLink>
            ))}
          </nav>
        <button
          className="md:hidden rounded-lg border border-neutral-200 p-2  bg-brand-red"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          <span className="block h-0.5 w-5 bg-white mb-1"></span>
          <span className="block h-0.5 w-5 bg-white mb-1"></span>
          <span className="block h-0.5 w-5 bg-white"></span>
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <Container className="py-2">
            <nav className="flex flex-col gap-2 py-2">
              {site.nav.map((item) => (
                <ActiveLink
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </ActiveLink>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
