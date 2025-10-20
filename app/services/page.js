// app/services/page.js
export const metadata = {
  title: "Our Services",
  description:
    "Full-service project development blending management, writing, design, and relational support — guided by culturally grounded collaboration and excellence.",
};

export default function ServicesPage() {
  return (
    <article className="bg-white">
      {/* ONE continuous section: header + grid share the same background */}
      <section
        className="relative overflow-hidden bg-top bg-cover text-white"
        style={{
          backgroundImage: "url('/services-bg.jpg')",
        }}
      >
        {/* brand gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/85 via-indigo-950/70 to-indigo-900/40" />

        {/* Header copy */}
        <div className="relative container pt-16 pb-10 md:pt-24 md:pb-14 text-center">
          <h1 className="font-varela text-4xl md:text-6xl">Our Services</h1>
          <p className="font-varela mx-auto mt-6 max-w-3xl text-xl text-white/90">
            We provide full-service project development that blends high-quality
            management, writing, design, and relational support. Everything we do
            is guided by a commitment to culturally grounded collaboration and
            excellence.
          </p>
        </div>

        {/* Services Grid (equal height) */}
        <div className="relative container pb-16 md:pb-24">
          {/* 👇 add auto-rows-fr so every row's cells match height */}
          <div className="grid gap-8 md:grid-cols-2 auto-rows-fr">
            {/* 1 */}
            <div className="rounded-2xl p-[1px] shadow-xl h-full">
              <div className="flex h-full flex-col rounded-2xl bg-brand-orange/70 p-6">
                <h2 className="font-varela text-3xl text-white">
                  Web Design &amp; Development
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90 flex-1">
                  <li>Custom websites that reflect your values and community vision</li>
                  <li>Ongoing maintenance, updates &amp; accessibility improvements</li>
                  <li>Web and email hosting for seamless communication</li>
                </ul>
              </div>
            </div>

            {/* 2 */}
            <div className="rounded-2xl p-[1px] shadow-xl h-full">
              <div className="flex h-full flex-col rounded-2xl bg-brand-orange/70 p-6">
                <h2 className="font-varela text-3xl text-white">
                  Graphic Design &amp; Visual Storytelling
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90 flex-1">
                  <li>Custom logo and brand design</li>
                  <li>Banners, promotional materials, signage</li>
                  <li>Publication design &amp; layout</li>
                  <li>Custom illustrations for strategic storytelling and reports</li>
                </ul>
              </div>
            </div>

            {/* 3 */}
            <div className="rounded-2xl p-[1px] shadow-xl h-full">
              <div className="flex h-full flex-col rounded-2xl bg-brand-orange/70 p-6">
                <h2 className="font-varela text-3xl text-white">
                  Communications Strategy
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90 flex-1">
                  <li>Narrative development &amp; messaging support</li>
                  <li>Internal &amp; external communications planning</li>
                  <li>Social media content development</li>
                  <li>Media kits, press releases, and campaign design</li>
                </ul>
              </div>
            </div>

            {/* 4 */}
            <div className="rounded-2xl p-[1px] shadow-xl h-full">
              <div className="flex h-full flex-col rounded-2xl bg-brand-orange/70 p-6">
                <h2 className="font-varela text-3xl text-white">
                  Strategic Planning with Visual Tools
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90 flex-1">
                  <li>Facilitation and co-development of strategic plans</li>
                  <li>Use of storytelling frameworks and custom illustrations</li>
                  <li>
                    Final products that are engaging, easy to understand, and community-ready
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    </article>
  );
}
