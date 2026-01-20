"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import { caseStudies } from "@/lib/case-studies";


export default function PortfolioPage() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (

    <article className="bg-white">
      <section
        className="relative overflow-hidden bg-bottom bg-cover bg-fixed text-white"
        style={{
          backgroundImage:
            "url('/services-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/85 via-indigo-950/70 to-indigo-900/40" />

        <div className="relative container py-16 md:py-24 text-center">
          <h1 className="font-varela text-4xl md:text-6xl">Portfolio</h1>
          <p className="font-varela mx-auto mt-6 max-w-3xl text-xl text-white/90">
            We’re proud to work alongside Indigenous Nations, organizations, and changemakers.
          </p>
        </div>
      </section>
      
      <section>
      <div className="mt-10 space-y-20 container py-10">
        {caseStudies.map((study, idx) => {
          const gallery = Array.isArray(study.gallery) ? study.gallery : [];
          const mainImage = gallery[0];
          const subImages = gallery.slice(1, 3);
          const reverse = idx % 2 === 1;

          return (
            <article
              key={study.slug}
              className={`grid items-start gap-8 md:grid-cols-2 ${
                reverse ? "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1" : ""
              }`}
            >

              <div>

                {mainImage && (
                  <div
                    className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 shadow"
                    onClick={() => setLightboxSrc(mainImage)}
                    role="button"
                    title="Open image"
                  >
                    <Image
                      src={mainImage}
                      alt={`${study.title} main image`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="cursor-zoom-in object-cover object-top"
                      priority={idx === 0}
                    />
                  </div>
                )}

                {subImages.length > 0 && (
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {subImages.map((src, i) => (
                      <div
                        key={`${src}-${i}`}
                        className="relative aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200 shadow-sm"
                        onClick={() => setLightboxSrc(src)}
                        role="button"
                        title="Open image"
                      >
                        <Image
                          src={src}
                          alt={`${study.title} image ${i + 2}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="cursor-zoom-in object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <div className="text-sm text-neutral-500">
                  {study.client} • {study.year}
                </div>
                <h2 className="mt-1 font-varela text-3xl md:text-4xl">{study.title}</h2>

                {Array.isArray(study.services) && study.services.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {study.services.map((svc) => (
                      <span
                        key={svc}
                        className="rounded-full border border-brand-red/30 bg-gradient-to-r from-brand-red/10 to-brand-orange/10 px-3 py-1 text-sm text-brand-red"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-4 text-neutral-700">{study.summary}</p>

                {study.testimonial?.quote && (
                  <figure className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                    <blockquote className="text-neutral-800 italic">
                      “{study.testimonial.quote}”
                    </blockquote>
                    {study.testimonial.author && (
                      <figcaption className="mt-2 text-sm text-neutral-600">
                        — {study.testimonial.author}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
            </article>
          );
        })}
      </div>
      </section>

      <section className="my-24 text-center">
        <div className="inline-block rounded-2xl bg-gradient-to-r from-brand-red to-brand-orange p-[2px] shadow-lg">
          <a
            href="/portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl bg-white px-8 py-4 font-varela text-lg text-brand-red transition hover:bg-brand-red hover:text-white"
          >
            Download Our Full Portfolio (PDF)
          </a>
        </div>
        <p className="mt-4 text-sm text-neutral-600">
          View or download the full PDF version of our work.
        </p>
      </section>

    <section className="bg-neutral-50 py-10">
      <div className="container">
        <h2 className="text-center font-varela text-xl text-neutral-600 mb-6">
          Trusted by communities and organizations across Canada
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
          <Image
            src="/clients/govcanada.png"
            alt="Government of Canada"
            width={120}
            height={50}
          />
          <Image
            src="/clients/norquest.png"
            alt="Norquest College"
            width={120}
            height={50}
          />
          <Image
            src="/clients/ncsa.png"
            alt="Native Counselling Services of Alberta"
            width={120}
            height={50}
          />
          <Image
            src="/clients/aboriginal-alert.png"
            alt="Aboriginal Alert"
            width={120}
            height={50}
          />
          <Image
            src="/clients/heiltsuk.png"
            alt="Heiltsuk Tribal Council"
            width={120}
            height={50}
          />
          <Image
            src="/clients/act-alberta.png"
            alt="ACT Alberta"
            width={120}
            height={50}
          />
          <Image
            src="/clients/fourwinds.png"
            alt="Four Winds and Associates"
            width={120}
            height={50}
          />
          <Image
            src="/clients/homefire.png"
            alt="Homefire Consulting Ltd."
            width={120}
            height={50}
          />
        </div>
      </div>
    </section>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </article>
  );
}
