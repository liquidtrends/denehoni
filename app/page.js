import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";

export default function Page() {
  return (
    <>
      <Hero />
      <section className="relative border-t-4 border-brand-red bg-brandNeutral-50 py-20">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img src="4flower.png" alt="" className="h-full w-full object-cover" />
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-varela text-3xl md:text-5xl">Dene Honi means Stories for the People</h2>
            <p className="mb-4 text-lg leading-relaxed">
              We’re an Indigenous-owned creative and strategic studio offering full-service, relationally grounded support in web development,
              graphic design, communications, and strategic planning.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Every project begins with listening. Every story is rooted in truth. And every solution is tailored to honour the unique voices, cultures,
              and visions of the Indigenous communities we serve.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              We also collaborate with non-Indigenous clients who are committed to respectful, values-aligned engagement and seek to integrate Indigenous
              perspectives, design, or storytelling into their work with care and integrity.
            </p>
            <a href="/services" className="btn btn-primary bg-brand-red hover:bg-brand-orange text-white">Explore Our Services</a>
          </div>
        </div>
        </section>
    </>
  );
}
