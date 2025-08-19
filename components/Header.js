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

        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <ActiveLink key={item.href} href={item.href} className="text-sm font-medium">
              {item.name}
            </ActiveLink>
          ))}
        </nav>

        <button
          className="md:hidden rounded-lg border border-neutral-200 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          <span className="block h-0.5 w-5 bg-neutral-900 mb-1"></span>
          <span className="block h-0.5 w-5 bg-neutral-900 mb-1"></span>
          <span className="block h-0.5 w-5 bg-neutral-900"></span>
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
