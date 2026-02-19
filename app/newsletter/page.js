// app/about/page.js
import Image from "next/image";
import MailChimp from '@/components/MailChimp'


export const metadata = {
  title: "Newsletter",
  description:
    "About Dene Honi — Vision, Mission, Values, Story, and Founders.",
};

export default function AboutPage() {
  return (
    <article className="bg-white">
      <section
        className="relative overflow-hidden bg-top bg-cover text-white py-20 h-screen"
        style={{
          backgroundImage: "url('/services-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/85 via-indigo-950/70 to-indigo-900/40" />

        <div className="relative container py-16 md:py-24 text-center md:w-1/3 w-full">
          <h1 className="font-varela text-4xl md:text-6xl font-bold">Be Apart of Our Story</h1>
          <p className="font-varela mx-auto mt-6 max-w-3xl text-xl text-white/90">
            Subscribe for new project showcases, behind-the-scenes process, and community spotlights
          </p>
          <MailChimp/>
          <p className="pt-10 text-xs opacity-50">Your inbox is sacred. No spam, no nonsense, ever. We’ll only send the occasional update (new work, client highlights, and a few cool organizations we think you’ll love). <br />Unsubscribe anytime.</p>
        </div>
      </section>
    </article>
  );
}
