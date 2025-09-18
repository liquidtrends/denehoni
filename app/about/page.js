// app/about/page.js
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "About Dene Honi — Vision, Mission, Values, Story, and Founders.",
};

export default function AboutPage() {
  return (
    <article className="bg-white">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-neutral-800 text-white">
        <div className="container py-24 md:py-36 text-center">
          <h1 className="font-varela text-5xl md:text-7xl font-bold tracking-tight">
            About Dene Honi
          </h1>
        </div>
      </section>

      {/* ===== Vision / Mission ===== */}
      <section className="relative bg-gradient-to-r from-brand-red via-brand-orange to-teal-500 text-white">
        <div className="container py-20 md:py-32 space-y-20 text-center">
          <div>
            <h2 className="font-varela text-4xl md:text-6xl font-bold">
              Vision
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-2xl leading-relaxed">
              Indigenous stories shaping the future – for generations to come.
            </p>
          </div>

          <div>
            <h2 className="font-varela text-4xl md:text-6xl font-bold">
              Mission
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-2xl leading-relaxed">
              We support Indigenous communities – and values-aligned
              non-Indigenous partners – in sharing their truths and visions
              through digital storytelling using technology, modern
              communications, and creative design rooted in Indigenous
              knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* ===== What We Believe ===== */}
      <section className="relative bg-neutral-50">
        <div className="container py-20 md:py-28 text-center">
          <h2 className="font-varela text-4xl md:text-6xl font-bold">
            What We Believe
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-xl md:text-2xl text-neutral-700 leading-relaxed">
            Our work is guided by a deep respect for community, cultural
            protocols, and Indigenous ways of knowing. We don’t just build
            websites or create designs – we build trust, co-create visions, and
            make space for stories that need to be heard.
          </p>
        </div>
      </section>

      {/* ===== Our Values ===== */}
      <section className="relative bg-neutral-900 text-white">
        <div className="container py-20 md:py-28">
          <h2 className="text-center font-varela text-4xl md:text-6xl font-bold">
            Our Values
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {[
              {
                title: "Honouring Cultures, Histories & Languages",
                text: "We center Indigenous knowledge systems in every aspect of our work. This means respecting language, cultural protocols, and community truths.",
              },
              {
                title: "Stories",
                text: "Stories are sacred. We help you tell them in ways that honour their meaning and purpose, using tools that align with your goals.",
              },
              {
                title: "Relationships",
                text: "We prioritize long-term, trust-based relationships over quick transactions. Every project is a partnership rooted in care and accountability.",
              },
              {
                title: "Listening",
                text: "We begin by listening deeply. Every solution is co-created, never imposed.",
              },
              {
                title: "Speaking Your Truth",
                text: "We support individuals and organizations in finding and sharing their voice with confidence, clarity, and strength.",
              },
            ].map((val, i) => (
              <div key={i} className="space-y-4">
                <h3 className="font-varela text-2xl md:text-3xl font-bold">
                  {val.title}
                </h3>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Our Story ===== */}
      <section className="relative bg-white">
        <div className="container py-20 md:py-28 text-center">
          <h2 className="font-varela text-4xl md:text-6xl font-bold">
            Our Story
          </h2>
          <div className="prose prose-lg md:prose-xl prose-neutral mx-auto mt-8 text-left">
            <p>
              Dene Honi is the evolution of over two decades of work under
              Liquid Trends Media, founded by Ryan Janvier, a proud member of
              the Chipewyan Prairie Dene First Nation. As our Founder and
              Creative Director, Ryan brings a deep connection to culture,
              land, and community – and a belief that technology is a powerful
              tool for preserving and sharing Indigenous knowledge and
              traditions.
            </p>
            <p>
              Since 2001, Ryan has led the delivery of high-quality web,
              graphic design, and digital storytelling services to Indigenous and
              nonprofit organizations across Alberta and beyond. What began as
              Liquid Trends Media has grown into Dene Honi: a full-service,
              Indigenous-owned creative studio dedicated to helping Indigenous
              communities and aligned partners bring their visions to life.
            </p>
            <p>
              We specialize in web design and development, graphic design,
              communications strategy, and digital planning. Our approach is
              always relational – centered on listening, trust, and cultural
              integrity. We maintain a roster of credentialed, values-driven
              professionals who bring both technical expertise and a deep
              respect for Indigenous worldviews.
            </p>
            <p>
              Our goal is to be a trusted partner in the change our communities
              are leading – leveraging storytelling with technology to increase
              reach, amplify truth, and strengthen identity. Every cause needs a
              voice. At Dene Honi, we are proud to help shape how those voices
              are heard, seen, and remembered – for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Our Founders ===== */}
      <section className="relative bg-neutral-50">
        <div className="container py-20 md:py-28">
          <h2 className="text-center font-varela text-4xl md:text-6xl font-bold">
            Our Founders
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xl md:text-2xl text-neutral-700 leading-relaxed">
            We’re Ryan Janvier and Daena Crosby, and together, we co-founded
            Dene Honi. Our work is rooted in a strong and respectful
            relationship – one that has been built over 5 years of working
            together, listening deeply, and showing up for communities with
            care, clarity, and accountability.
          </p>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {/* Ryan */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-neutral-200">
                  <Image
                    src="/images/ryan.jpg"
                    alt="Ryan Janvier"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-varela text-2xl md:text-3xl font-bold">
                    Ryan Janvier
                  </h3>
                  <p className="text-lg text-neutral-500">
                    Founder &amp; Creative Director
                  </p>
                </div>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Ryan: I'm a proud member of the Chipewyan Prairie Dene First
                Nation and Treaty 8 territory. I've been working as a graphic
                designer and web developer for over 20 years, supporting
                Indigenous organizations and First Nation communities across
                Canada and the U.S. My work is deeply connected to Dene culture
                and the land I come from. I believe that technology, when used
                with intention, can be a powerful way to preserve our knowledge
                systems, share our stories, and strengthen community
                connections.
              </p>
            </div>

            {/* Daena */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-neutral-200">
                  <Image
                    src="/images/daena.jpg"
                    alt="Daena Crosby"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-varela text-2xl md:text-3xl font-bold">
                    Daena Crosby
                  </h3>
                  <p className="text-lg text-neutral-500">Co-Founder</p>
                </div>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Daena: I’m a white settler, born in Toronto, with ancestral roots
                in England, Germany, Poland, and Austria. For more than 15
                years, I’ve worked alongside Indigenous communities and nonprofit
                organizations across Canada in research, communications, and
                project management roles. I have a PhD in Sociology and a deep
                commitment to creating relational, respectful, and culturally
                grounded spaces for collaboration. My work is guided by the
                belief that every story deserves to be told with integrity – and
                that we can build more just systems when we work together with
                humility and care.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl prose prose-lg md:prose-xl prose-neutral">
            <p>
              We are often told that our partnership is an example of
              reconciliation in action. While we hold that with respect, to us,
              it is about something deeper: long-term relational work, shared
              responsibility, and showing up with consistency for the
              communities we care about.
            </p>
            <p>
              We’ve learned to find a way forward – together – through listening,
              truth-telling, creativity, and a shared belief in the power of
              Indigenous stories to shape the future. Dene Honi was born from
              our shared belief. We’re here to offer not just services, but
              partnership – rooted in trust, led by story, and powered by
              design, technology, and strategy that honours Indigenous knowledge
              and vision.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Closing CTA ===== */}
      <section className="bg-gradient-to-r from-teal-500 to-brand-orange py-20 text-white">
        <div className="container text-center">
          <h2 className="font-varela text-3xl md:text-5xl font-bold">
            Ready to Start?
          </h2>
          <Link
            href="/services"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-varela text-xl font-bold text-brand-red shadow hover:bg-neutral-100"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </article>
  );
}
