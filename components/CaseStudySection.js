// components/CaseStudySection.js
import Image from "next/image";
import Link from "next/link";

export default function CaseStudySection({ study, index = 0 }) {
  const isEven = index % 2 === 0;
  const dark = study?.theme?.textOnDark;

  return (
    <section className="relative">
      {study?.theme?.bgMode === "image" ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={study.theme.bgImage}
            alt=""
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : study?.theme?.bgMode === "color" ? (
        <div className={`absolute inset-0 -z-10 ${study.theme.bgColor}`} />
      ) : null}

      <div className={`container py-16 md:py-24 ${dark ? "text-white" : "text-neutral-900"}`}>
        <div
          className={`grid items-center gap-10 md:grid-cols-2 ${
            isEven ? "" : "md:[&>*:first-child]:order-2"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={study.thumb || "/og-image.png"}
                alt={`${study.title} preview`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <div className="inline-block bg-gradient-to-r bg-clip-text text-sm font-medium text-transparent opacity-90
                            from-brand-red to-brand-orange">
              {study.client} • {study.year}
            </div>
            <h3 className="mt-2 font-varela text-3xl md:text-4xl">
              {study.title}
            </h3>
            <p className={`mt-4 max-w-prose text-lg ${dark ? "text-white/90" : "text-neutral-700"}`}>
              {study.summary}
            </p>

            {study.services?.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {study.services.map((s) => (
                  <li key={s} className={`rounded-full border px-3 py-1 text-sm
                    ${dark ? "border-white/30 text-white/90" : "border-neutral-200 text-neutral-700"}`}>
                    {s}
                  </li>
                ))}
              </ul>
            )}

            {(study.outcomes?.length || study.metrics?.length) && (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {study.outcomes?.length > 0 && (
                  <ul className={`list-disc pl-5 ${dark ? "text-white/90" : "text-neutral-700"}`}>
                    {study.outcomes.map((o) => <li key={o}>{o}</li>)}
                  </ul>
                )}
                {study.metrics?.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {study.metrics.map((m) => (
                      <div key={m.label} className={`rounded-xl p-3 text-center
                          ${dark ? "bg-white/10" : "bg-neutral-50 border border-neutral-200"}`}>
                        <div className="text-xs opacity-70">{m.label}</div>
                        <div className="text-lg font-semibold">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {study.testimonial && (
              <figure className={`mt-6 rounded-xl p-5 ${dark ? "bg-white/10" : "bg-neutral-50 border border-neutral-200"}`}>
                <blockquote className="italic">
                  “{study.testimonial.quote}”
                </blockquote>
                <figcaption className="mt-2 text-sm opacity-80">
                  — {study.testimonial.author}
                </figcaption>
              </figure>
            )}

            {study.cta?.href && (
              <Link
                href={study.cta.href}
                className={`mt-8 inline-flex items-center rounded-xl px-5 py-3 font-varela font-semibold shadow
                    ${dark ? "bg-white text-brand-red hover:bg-neutral-100" : "bg-brand-red text-white hover:bg-brand-orange"}`}
              >
                {study.cta.label || "Read case study"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
