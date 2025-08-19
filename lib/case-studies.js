// lib/case-studies.js
export const caseStudies = [
  {
    slug: "random-project",
    title: "Random Project",
    client: "Some Non Profit Organization Inc.",
    year: "2025",
    summary:
      "This is where the info will go",
    services: ["Communications", "UI Design", "Development", "Graphic Design"],
    outcomes: [
      "Custom designed interface",
      "Content writing",
      "Some random info will go here"
    ],
    tech: ["Next.js", "Tailwind CSS", "Django API", "Vercel"],
    testimonial: {
      quote:
        "DeneHoni is the best!",
      author: "Program Director, NCSA"
    },
    cta: { label: "View project", href: "/portfolio/connections-app" },

    // Theming / visuals
    theme: {
      bgMode: "color",                // "color" | "image" | "none"
      bgColor: "bg-brandNeutral-50",  // Tailwind class for the section background
      bgImage: "",                    // e.g., '/images/connections-bg.jpg'
      textOnDark: false               // flip text if using dark bg/image
    },
    accentColorClass: "from-brand-red to-brand-orange", // used for small accents

    // Media
    thumb: "https://picsum.photos/500",
    gallery: [
      "/images/portfolio/connections-1.jpg",
      "/images/portfolio/connections-2.jpg"
    ]
  },

  {
    slug: "seven-feathers-golf",
    title: "Seven Feathers Golf Co.",
    client: "Seven Feathers",
    year: "2025",
    summary:
      "A premium Indigenous golf brand identity and storefront experience, designed for pro shops and community supporters.",
    services: ["Brand System", "E-commerce", "Product Mockups", "Art Direction"],
    outcomes: [
      "Wholesale inquiries within first week",
      "Clear brand system across apparel and packaging",
      "Launch-ready product catalog"
    ],
    tech: ["Next.js", "Shopify", "Tailwind CSS"],
    testimonial: {
      quote:
        "The brand feels Indigenous and modern — exactly what we hoped for.",
      author: "Founder, Seven Feathers"
    },
    cta: { label: "View project", href: "/portfolio/seven-feathers-golf" },

    theme: {
      bgMode: "image",
      bgColor: "", // ignored if image
      bgImage: "https://picsum.photos/500",
      textOnDark: true
    },
    accentColorClass: "from-teal-500 to-brand-orange",
    thumb: "https://picsum.photos/500",
    gallery: [
      "/images/portfolio/seven-feathers-1.jpg",
      "/images/portfolio/seven-feathers-2.jpg"
    ]
  }
];
