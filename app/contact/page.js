import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch to start your project."
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-neutral-600">
          Tell us about your project and we’ll reply within 1–2 business days.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
