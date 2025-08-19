import Container from "./Container";
import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  return (
    <section className="relative">
      <HeroBackground />

      <Container className="relative py-40 md:py-52">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-7xl text-inset font-varela">
            Rooted in story.
          </h1>
          <p className="mt-6 text-4xl font-bold md:text-5xl text-white font-varela">
            Powered by Indigenous vision, design, and technology.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="relative inline-block"><svg aria-hidden="true" className="pointer-events-none absolute -left-8 -top-8 h-16 w-16 opacity-25 text-white" viewBox="0 0 64 64" fill="currentColor"><circle cx="32" cy="32" r="5"/><circle cx="32" cy="14" r="10"/><circle cx="46" cy="22" r="10"/><circle cx="46" cy="42" r="10"/><circle cx="32" cy="50" r="10"/><circle cx="18" cy="42" r="10"/><circle cx="18" cy="22" r="10"/></svg><svg aria-hidden="true" className="pointer-events-none absolute -right-10 -bottom-10 h-24 w-24 opacity-25 text-white" viewBox="0 0 64 64" fill="currentColor"><circle cx="32" cy="32" r="5"/><circle cx="32" cy="12" r="9"/><circle cx="48" cy="24" r="9"/><circle cx="44" cy="46" r="9"/><circle cx="20" cy="52" r="9"/><circle cx="14" cy="30" r="9"/></svg><a href="/contact" className="relative z-10 inline-flex items-center justify-center rounded-xl border border-white/20 bg-brand-red px-5 py-3 font-medium text-white shadow-lg hover:bg-brand-orange focus:outline-none focus:ring-2 focus:ring-white/60">See Our Work</a></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
