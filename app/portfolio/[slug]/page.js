// app/portfolio/[slug]/page.js
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case Study`,
    description: study.summary
  };
}

export default function CaseStudyPage({ params }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return notFound();

  const dark = study?.theme?.textOnDark;

  return (
    <article className={`relative ${dark ? "text-white" : "text-neutral-900"}`}>
      {/* Optional hero with image bg */}
      {study?.theme?.bgMode === "image" && (
        <div className="absolute inset-0 -z-10">
          <Image src={study.theme.bgImage} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      <header className="container py-16 md:py-24">
        <div className="text-sm opacity-80">{study.client} • {study.year}</div>
        <h1 className="mt-2 font-varela text-4xl md:text-5xl">{study.title}</h1>
        <p className={`mt-4 max-w-2xl text-lg ${dark ? "text-white/90" : "text-neutral-700"}`}>
          {study.summary}
        </p>
      </header>

      {/* Body sections you can expand */}
      <section className="container pb-12 md:pb-16">
        <h2 className="text-2xl font-semibold">Goals & Constraints</h2>
        <ul className="mt-4 list-disc pl-6 text-neutral-700">
          <li>What the client needed to achieve</li>
          <li>Any constraints (timeline, budget, tech, accessibility)</li>
        </ul>
      </section>

      <section className="container pb-12 md:pb-16">
        <h2 className="text-2xl font-semibold">Process</h2>
        <ol className="mt-4 list-decimal pl-6 text-neutral-700">
          <li>Discovery & Listening Sessions with community stakeholders</li>
          <li>Wireframes & UI explorations</li>
          <li>Build & Content Integration</li>
          <li>Testing, Accessibility, and Launch</li>
        </ol>
      </section>

      {study.gallery?.length > 0 && (
        <section className="container pb-12 md:pb-16">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.gallery.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {study.testimonial && (
        <section className="container pb-20">
          <figure className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <blockquote className="text-lg italic">“{study.testimonial.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-neutral-600">— {study.testimonial.author}</figcaption>
          </figure>
        </section>
      )}
    </article>
  );
}
