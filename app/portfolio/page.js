// app/portfolio/page.js
import { caseStudies } from "@/lib/case-studies";
import CaseStudySection from "@/components/CaseStudySection";

export const metadata = {
  title: "Portfolio",
  description: "Selected case studies and outcomes."
};

export default function PortfolioPage() {
  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl font-bold md:text-4xl">Case Studies</h1>
          <p className="mt-2 text-neutral-600">
            A deeper look at recent projects, outcomes, and how we work.
          </p>
        </div>
      </section>

      {caseStudies.map((study, i) => (
        <CaseStudySection key={study.slug} study={study} index={i} />
      ))}
    </>
  );
}
