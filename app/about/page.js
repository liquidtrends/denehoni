// app/about/page.js
import Image from "next/image";

export const metadata = {
  title: "About Us",
  description:
    "About Dene Honi — Vision, Mission, Values, Story, and Founders.",
};

export default function AboutPage() {
  return (
    <article className="bg-white">
      {/* ===== Header + Vision/Mission share one background (like Services) ===== */}
      <section
        className="relative overflow-hidden bg-top bg-cover text-white"
        style={{
          backgroundImage: "url('/services-bg.jpg')",
        }}
      >
        {/* brand gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/85 via-indigo-950/70 to-indigo-900/40" />

        {/* Header */}
        <div className="relative container py-16 md:py-24 text-center">
          <h1 className="font-varela text-4xl md:text-6xl">About Dene Honi</h1>
          <p className="font-varela mx-auto mt-6 max-w-3xl text-xl text-white/90">
            Dene Honi means Stories for the People
          </p>
        </div>

        {/* Vision / Mission — equal height, same background continues */}
        <div className="relative container pb-16 md:pb-24">
          <div className="grid gap-8 md:grid-cols-2 auto-rows-fr">
            {/* Vision */}
            <div className="rounded-2xl p-[1px] shadow-xl h-full">
              <div className="flex h-full flex-col rounded-2xl bg-brand-orange/70 p-8">
                <h2 className="font-varela text-2xl md:text-3xl">Our Vision</h2>
                <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed">
                  Indigenous stories shaping the future — for generations to come.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="rounded-2xl p-[1px] shadow-xl h-full">
              <div className="flex h-full flex-col rounded-2xl bg-brand-orange/70 p-8">
                <h2 className="font-varela text-2xl md:text-3xl">Our Mission</h2>
                <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed">
                  We support Indigenous communities — and values-aligned partners — in
                  sharing truths and visions through digital storytelling that
                  blends technology, communications, and design rooted in Indigenous
                  knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What We Believe (unchanged) ===== */}
      <section className="bg-neutral-50">
        <div className="container py-16 md:py-24">
          <h2 className="text-center font-varela text-3xl md:text-5xl">
            What We Believe
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-center text-lg md:text-xl text-neutral-700 leading-relaxed">
            Our work is guided by respect for community, cultural protocols, and
            Indigenous ways of knowing. We don’t just deliver projects — together,
            we build trust, co-create vision, and make space for stories that need
            to be heard.
          </p>
        </div>
      </section>

      {/* ===== Our Values (unchanged) ===== */}
      <section className="border-t border-neutral-200">
        <div className="container py-16 md:py-24">
          <h2 className="text-center font-varela text-3xl md:text-5xl">
            Our Values
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Honouring Cultures, Histories & Languages",
                text: "We centre Indigenous knowledge systems. We respect language, cultural protocols, and community truths across every engagement.",
              },
              {
                title: "Stories",
                text: "Stories are sacred. We help tell them with integrity and purpose, using tools that align with your goals.",
              },
              {
                title: "Relationships",
                text: "We prioritize long - term, trust - based partnerships over transactions—grounded in care and accountability.",
              },
              {
                title: "Listening",
                text: "We begin by listening deeply. Every solution is co-created, never imposed.",
              },
              {
                title: "Speaking Your Truth",
                text: "We support people and organizations in sharing their voice with clarity, confidence, and strength.",
                fullWidth: true,
              },
            ].map((val, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-neutral-200 p-6 bg-gradient-to-t from-brand-red to-brand-orange text-white ${
                  val.fullWidth ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="font-varela text-xl md:text-2xl">{val.title}</h3>
                <p className="mt-3 text-white leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Our Story (unchanged) ===== */}
      <section className="bg-white">
        <div className="container py-16 md:py-24">
          <h2 className="text-center font-varela text-3xl md:text-5xl">
            Our Story
          </h2>
          <div className="prose prose-neutral prose-lg md:prose-xl mx-auto mt-8">
            <p>
              Dene Honi is the evolution of more than two decades of work under
              Liquid Trends Media, founded by Ryan Janvier of the Chipewyan
              Prairie Dene First Nation. As Founder and Creative Director, Ryan
              brings a deep connection to culture, land, and community — and a
              belief that technology can help preserve and share Indigenous
              knowledge and traditions.
            </p>
            <p>
              Since 2001, we’ve delivered web, design, and digital storytelling
              services to Indigenous and nonprofit organizations across Alberta
              and beyond. What began as Liquid Trends Media has grown into Dene
              Honi: an Indigenous-owned studio dedicated to helping communities
              and aligned partners bring their visions to life.
            </p>
            <p>
              Our practice spans web design and development, communications,
              and digital planning. We maintain a roster of credentialed,
              values-driven professionals who combine technical excellence with
              respect for Indigenous worldviews.
            </p>
            <p>
              Our goal is to be a trusted partner in the change our communities
              are leading — leveraging story and technology to increase reach,
              amplify truth, and strengthen identity for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Founders (unchanged) ===== */}
      <section className="bg-neutral-50">
        <div className="container py-16 md:py-24">
          <h2 className="text-center font-varela text-3xl md:text-5xl">
            Our Founders
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg md:text-xl text-neutral-700 leading-relaxed">
            Dene Honi is co-founded by Ryan Janvier and Daena Crosby. Our
            partnership is rooted in long-term relational work, shared
            responsibility, and consistent care for the communities we serve.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {/* Ryan */}
            <div className="rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-neutral-200">
                  <Image
                    src="/ryan.jpg"
                    alt="Ryan Janvier"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-varela text-xl md:text-2xl">Ryan Janvier</h3>
                  <p className="text-neutral-500">Founder - Creative Director</p>
                </div>
              </div>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                 I'm a proud member of the Chipewyan Prairie Dene First Nation and Treaty 8 territory. I've been working as a graphic designer and web developer for over 20 years, supporting Indigenous organizations and First Nation communities across Canada and the U.S. My work is deeply connected to Dene culture and the land I come from. I believe that technology, when used with intention, can be a powerful way to preserve our knowledge systems, share our stories, and strengthen community connections.
              </p>
            </div>

            {/* Daena */}
            <div className="rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-neutral-200">
                  <Image
                    src="/daena.jpg"
                    alt="Daena Crosby"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-varela text-xl md:text-2xl">Daena Crosby</h3>
                  <p className="text-neutral-500">Co-Founder - Director of Storytelling</p>
                </div>
              </div>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                I’m a white settler, born in Toronto, with ancestral roots in England, Germany, Poland, and Austria. For more than 15 years, I’ve worked alongside Indigenous communities and nonprofit organizations across Canada in research, communications, and project management roles. I have a PhD in Sociology and a deep commitment to creating relational, respectful, and culturally grounded spaces for collaboration. My work is guided by the belief that every story deserves to be told with integrity – and that we can build more just systems when we work together with humility and care.

              </p>
            </div>
          </div>

          <div className="prose prose-neutral prose-lg md:prose-xl mx-auto mt-8">
            <p>
              We are often told that our partnership is an example of reconciliation in action. To us, that means: long-term relational work, shared responsibility, and showing up with consistency for the communities we care about.            </p>
            <p>
              We’ve learned to find a way forward – together – through listening, truth-telling, creativity, and a shared belief in the power of Indigenous stories to shape the future.
            </p>
            <p>
              Dene Honi was born from our shared belief. We’re here to offer not just services, but partnership – rooted in trust, led by story, and powered by design, technology, and strategy that honours Indigenous knowledge and vision.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
