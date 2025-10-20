import Container from "./Container";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <>
      <section className="bg-sky-950 py-14 text-white">
        <div className="container text-center">
          <h2 className="font-varela text-3xl md:text-4xl">Let’s build something meaningful together</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg opacity-90">
            Whether it’s web, design, or strategy, we’re here to help bring your vision to life with respect, creativity, and care.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-varela text-lg font-semibold text-brand-red shadow hover:bg-neutral-100"
          >
            Start Your Project
          </Link>
        </div>
      </section>
      <div className="bg-gradient-to-t from-black to-sky-950 text-white">
        <Container className="grid gap-8 py-12 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-2 text-sm opacity-90">
              We’re an Indigenous-owned creative and strategic studio bringing design,
              technology, and story together.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="mt-2 text-sm opacity-90">
              Follow us on social media (coming soon!)
            </p>
            <div className="mt-3 flex gap-3">
            </div>
          </div>
        </Container>
      </div>
      
      <footer className="bg-black">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 text-center md:flex-row md:text-center">
          <div className="text-sm text-neutral-100">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
        </Container>
      </footer>
      
    </>
  );
}

