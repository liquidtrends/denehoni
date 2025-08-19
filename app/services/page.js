// app/services/page.js
import Link from "next/link";

export const metadata = {
  title: "Our Services",
  description:
    "Full-service project development blending management, writing, design, and relational support — guided by culturally grounded collaboration and excellence.",
};

export default function ServicesPage() {
  return (
    <article className="bg-white">
      {/* Header */}
      <section className="border-b border-neutral-200 bg-brandNeutral-50">
        <div className="container py-14 md:py-20">
          <h1 className="text-center font-varela text-4xl md:text-6xl">Services</h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-neutral-700">
            We provide full-service project development that blends high-quality management, writing, design, and relational support. 
            Everything we do is guided by a commitment to culturally grounded collaboration and excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <div className="container py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {/* 1 */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="font-varela text-2xl">1. Web Design &amp; Development</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
                <li>Custom websites that reflect your values and community vision</li>
                <li>Ongoing maintenance, updates &amp; accessibility improvements</li>
                <li>Web and email hosting for seamless communication</li>
              </ul>
            </div>

            {/* 2 */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="font-varela text-2xl">2. Graphic Design &amp; Visual Storytelling</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
                <li>Custom logo and brand design</li>
                <li>Banners, promotional materials, signage</li>
                <li>Publication design &amp; layout</li>
                <li>Custom illustrations for strategic storytelling and reports</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="font-varela text-2xl">3. Communications Strategy</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
                <li>Narrative development &amp; messaging support</li>
                <li>Internal &amp; external communications planning</li>
                <li>Social media content development</li>
                <li>Media kits, press releases, and campaign design</li>
              </ul>
            </div>

            {/* 4 */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="font-varela text-2xl">4. Strategic Planning with Visual Tools</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
                <li>Facilitation and co-development of strategic plans</li>
                <li>Use of storytelling frameworks and custom illustrations</li>
                <li>Final products that are engaging, easy to understand, and community-ready</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-gradient-to-r from-teal-500 to-brand-orange py-14 text-white">
        <div className="container text-center">
          <h2 className="font-varela text-3xl md:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg opacity-90">
            Tell us about your project and we’ll reply within 1–2 business days.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-varela text-lg font-semibold text-brand-red shadow hover:bg-neutral-100"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </article>
  );
}
