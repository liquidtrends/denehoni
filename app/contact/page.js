// app/contact/page.js
export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Dene Honi — Let’s tell your story together.",
};

export default function ContactPage() {
  return (
    <article className="bg-white">
      {/* ===== Header (same style as Portfolio) ===== */}
      <section className="bg-gradient-to-t from-sky-950 to-indigo-950 text-white">
        <div className="container py-14 md:py-20">
          <h1 className="text-center font-varela text-4xl md:text-6xl">Contact</h1>
          <p className="mx-auto mt-6 max-w-3xl font-varela text-center text-xl text-white">
            Let’s tell your story — together.
          </p>
        </div>
      </section>

      {/* ===== Content ===== */}
      <section>
        <div className="container py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Left: Info */}
            <div className="space-y-6">
              <p className="text-neutral-700 text-lg leading-relaxed">
                Whether you're planning a new initiative, refreshing your brand, or
                need technical or visual support, we’d love to connect!
              </p>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm uppercase tracking-wide text-neutral-500">
                      Email
                    </dt>
                    <dd className="mt-1 text-lg">
                      <a
                        href="mailto:daena@denehoni.ca"
                        className="underline decoration-brand-orange/40 underline-offset-4 hover:text-brand-orange"
                      >
                        daena@denehoni.ca
                      </a>
                      <br />
                      <a
                        href="mailto:ryan@denehoni.ca"
                        className="underline decoration-brand-orange/40 underline-offset-4 hover:text-brand-orange"
                      >
                        ryan@denehoni.ca
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm uppercase tracking-wide text-neutral-500">
                      Phone
                    </dt>
                    <dd className="mt-1 text-lg">
                      <span className="text-neutral-800">780-709-8847</span>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm uppercase tracking-wide text-neutral-500">
                      Location
                    </dt>
                    <dd className="mt-1 text-lg text-neutral-800">
                      Based in Treaty 6, Amiskwacîwâskahikan (Edmonton, Alberta).<br />
                      Serving communities across Turtle Island.
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Optional: direct email CTA */}
              <a
                href="mailto:info@denehoni.ca?subject=New%20Project%20Inquiry"
                className="inline-block rounded-2xl bg-gradient-to-r from-brand-red to-brand-orange px-6 py-3 font-varela text-white shadow transition hover:opacity-90"
              >
                Email Us
              </a>
            </div>

            {/* Right: Form */}
            <div className="rounded-2xl border border-neutral-200 p-[1px] bg-gradient-to-r from-brand-red/40 to-brand-orange/40">
              <div className="rounded-2xl bg-white p-6 md:p-8">
                <h2 className="font-varela text-2xl md:text-3xl">Contact Form</h2>
                <p className="mt-2 text-neutral-600">
                  We’ll get back to you as soon as possible.
                </p>

                {/* 
                  ACTION NOTE:
                  - Replace action with your handler (e.g., /api/contact) or a form service.
                  - For now, it’s just a placeholder.
                */}
                <form
                  action="https://formspree.io/f/myznndvd"
                  method="POST"
                  className="space-y-5 max-w-lg mx-auto"
                >
                  <label className="block">
                    <span className="text-sm">Name*</span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-1 w-full rounded-xl border border-brand-orange bg-white/10 px-3 py-2 text-black placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm">Organization (optional)</span>
                    <input
                      type="text"
                      name="organization"
                      className="mt-1 w-full rounded-xl border border-brand-orange bg-white/10 px-3 py-2 text-black placeholder-white/50"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm">Email*</span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="mt-1 w-full rounded-xl border border-brand-orange bg-white/10 px-3 py-2 text-black placeholder-white/50"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm">What would you like to work on?*</span>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="mt-1 w-full rounded-xl border border-brand-orange bg-white/10 px-3 py-2 text-black placeholder-white/50"
                    ></textarea>
                  </label>

                  {/* hidden spam trap */}
                  <input type="text" name="_gotcha" className="hidden" />

                  <button
                    type="submit"
                    className="rounded-2xl bg-gradient-to-r from-brand-red to-brand-orange px-6 py-3 text-white font-semibold hover:scale-105 transition"
                  >
                    Send Message
                  </button>
                </form>

                {/* small privacy note */}
                <p className="mt-4 text-xs text-neutral-500">
                  By submitting this form, you consent to us contacting you about your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
