import Container from "./Container";

const features = [
  { title: "Blazing Fast", desc: "Next.js App Router, optimized images, and edge-ready rendering." },
  { title: "Accessible", desc: "Semantic HTML and sensible defaults out of the box." },
  { title: "Developer Friendly", desc: "Tailwind CSS, simple components, and clear structure." },
  { title: "SEO Ready", desc: "Metadata, sitemap, robots, and Open Graph in place." }
];

export default function FeatureGrid() {
  return (
    <section>
      <Container className="py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div className="card" key={f.title}>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
