import Container from "./Container";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <>
      {/* Pre-Footer Section */}
      <div className="bg-gradient-to-r from-brand-red to-brand-orange text-white">
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
              Follow us on social media or reach out for collaborations.
            </p>
            <div className="mt-3 flex gap-3">
              <a href={site.links.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              <a href={site.links.twitter} target="_blank" rel="noreferrer" className="hover:underline">Twitter</a>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer Section */}
      <footer className="bg-black">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 text-center md:flex-row md:text-left">
          <div className="text-sm text-neutral-100">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link className="hover:underline" href="/privacy">Privacy</Link>
            <Link className="hover:underline" href="/terms">Terms</Link>
            <a className="hover:underline" href={site.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:underline" href={site.links.twitter} target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </Container>
      </footer>
    </>
  );
}

