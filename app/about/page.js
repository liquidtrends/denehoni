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
      {/* Title */}
      <section className="relative border-b border-neutral-200 bg-brandNeutral-50">
        <div className="container py-14 md:py-20">
          <h1 className="text-center font-varela text-4xl md:text-6xl">
            About
          </h1>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="relative">
        <div className="container py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="font-varela text-2xl">Vision</h2>
              <p className="mt-3 text-neutral-700">
                Indigenous stories shaping the future – for generations to come.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="font-varela text-2xl">Mission</h2>
              <p className="mt-3 text-neutral-700">
                We support Indigenous communities – and values-aligned
                non-Indigenous partners – in sharing their truths and visions
                through digital storytelling using technology, modern
                communications, and creative design rooted in Indigenous
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="relative">
        <div className="container py-12 md:py-16">
          <h2 className="font-varela text-3xl md:text-4xl">What We Believe</h2>
          <p className="mt-4 text-lg text-neutral-700">
            Our work is guided by a deep respect for community, cultural
            protocols, and Indigenous ways of knowing. We don’t just build
            websites or create designs – we build trust, co-create visions, and
            make space for stories that need to be heard.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative bg-brandNeutral-50">
        <div className="container py-12 md:py-16">
          <h2 className="font-varela text-3xl md:text-4xl">Our Values</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">
                Honouring Cultures, Histories &amp; Languages
              </h3>
              <p className="mt-2 text-neutral-700">
                We center Indigenous knowledge systems in every aspect of our
                work. This means respecting language, cultural protocols, and
                community truths.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Stories</h3>
              <p className="mt-2 text-neutral-700">
                Stories are sacred. We help you tell them in ways that honour
                their meaning and purpose, using tools that align with your
                goals.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Relationships</h3>
              <p className="mt-2 text-neutral-700">
                We prioritize long-term, trust-based relationships over quick
                transactions. Every project is a partnership rooted in care and
                accountability.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Listening</h3>
              <p className="mt-2 text-neutral-700">
                We begin by listening deeply. Every solution is co-created,
                never imposed.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:col-span-2">
              <h3 className="font-semibold">Speaking Your Truth</h3>
              <p className="mt-2 text-neutral-700">
                We support individuals and organizations in finding and sharing
                their voice with confidence, clarity, and strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative">
        <div className="container py-12 md:py-16">
          <h2 className="font-varela text-3xl md:text-4xl">Our Story</h2>
          <div className="prose prose-neutral mt-4 max-w-none">
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

      {/* Our Founders */}
      <section className="relative bg-brandNeutral-50">
        <div className="container py-12 md:py-16">
          <h2 className="font-varela text-3xl md:text-4xl">Our Founders</h2>
          <p className="mt-3 max-w-3xl text-neutral-700">
            We’re Ryan Janvier and Daena Crosby, and together, we co-founded
            Dene Honi.
            Our work is rooted in a strong and respectful relationship – one that
            has been built over 5 years of working together, listening deeply,
            and showing up for communities with care, clarity, and accountability.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Ryan */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src="/images/ryan.jpg"
                    alt="Ryan Janvier"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-varela text-2xl">Ryan Janvier</h3>
                  <p className="text-sm text-neutral-600">
                    Founder &amp; Creative Director
                  </p>
                </div>
              </div>
              <p className="mt-4 text-neutral-700">
                Ryan: I'm a proud member of the Chipewyan Prairie Dene First
                Nation and Treaty 8 territory. I've been working as a graphic
                designer and web developer for over 20 years, supporting Indigenous
                organizations and First Nation communities across Canada and the U.S.
                My work is deeply connected to Dene culture and the land I come from.
                I believe that technology, when used with intention, can be a powerful
                way to preserve our knowledge systems, share our stories, and
                strengthen community connections.
              </p>
            </div>

            {/* Daena */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src="/images/daena.jpg"
                    alt="Daena Crosby"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-varela text-2xl">Daena Crosby</h3>
                  <p className="text-sm text-neutral-600">Co-Founder</p>
                </div>
              </div>
              <p className="mt-4 text-neutral-700">
                Daena: I’m a white settler, born in Toronto, with ancestral roots in
                England, Germany, Poland, and Austria. For more than 15 years, I’ve
                worked alongside Indigenous communities and nonprofit organizations
                across Canada in research, communications, and project management roles.
                I have a PhD in Sociology and a deep commitment to creating relational,
                respectful, and culturally grounded spaces for collaboration. My work is
                guided by the belief that every story deserves to be told with integrity –
                and that we can build more just systems when we work together with humility
                and care.
              </p>
            </div>
          </div>

          <div className="prose prose-neutral mt-8 max-w-none">
            <p>
              We are often told that our partnership is an example of reconciliation
              in action. While we hold that with respect, to us, it is about something
              deeper: long-term relational work, shared responsibility, and showing up
              with consistency for the communities we care about.
            </p>
            <p>
              We’ve learned to find a way forward – together – through listening,
              truth-telling, creativity, and a shared belief in the power of Indigenous
              stories to shape the future.
              Dene Honi was born from our shared belief. We’re here to offer not just
              services, but partnership – rooted in trust, led by story, and powered by
              design, technology, and strategy that honours Indigenous knowledge and vision.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA (link only, content unchanged above) */}
      <section className="bg-gradient-to-r from-teal-500 to-brand-orange py-12 text-white">
        <div className="container text-center">
          <Link
            href="/services"
            className="inline-flex rounded-xl bg-white px-6 py-3 font-varela text-lg font-semibold text-brand-red shadow hover:bg-neutral-100"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </article>
  );
}
