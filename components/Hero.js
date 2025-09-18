import Container from "./Container";
import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  return (
    <section className="relative">
      <HeroBackground />

      <Container className="relative py-40 md:py-52">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-7xl font-varela text-brand-orange">
            Rooted in story
          </h1>
          <p className="mt-6 text-4xl font-bold md:text-5xl text-white font-varela">
            Powered by Indigenous vision, design, and technology
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-brand-red px-5 py-3 font-medium text-white shadow-lg hover:bg-brand-orange focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              See Our Work
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
