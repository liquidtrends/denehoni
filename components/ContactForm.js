"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    // Replace with your API, Formspree, Resend, etc.
    console.log("Form data:", data);

    setStatus("Thanks! We’ll be in touch soon.");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          required
          name="name"
          type="text"
          className="mt-1 w-full rounded-lg border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          required
          name="email"
          type="email"
          className="mt-1 w-full rounded-lg border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          required
          name="message"
          rows="5"
          className="mt-1 w-full rounded-lg border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Send Message
      </button>
      {status && <p className="text-sm text-green-600">{status}</p>}
    </form>
  );
}
