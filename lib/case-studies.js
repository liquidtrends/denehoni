// lib/case-studies.js
export const caseStudies = [

  {
    slug: "homefire",
    title: "Homefire",
    client: "Homefire Consulting Ltd.",
    year: "2026",
    summary:
      "Homefire Consulting Ltd. partnered with DeneHoni to develop a custom website that reflects their values and vision. The site was thoughtfully designed with a clean, modern layout, fast performance, and a user-friendly experience to clearly communicate their services and support future growth.",
    services: ["Web Design", "Web Development", "Graphic Design"],
    cta: { label: "View project", href: "https://homefireconsultingltd.com"},

    // Theming / visuals
    theme: {
      bgMode: "color",                // "color" | "image" | "none"
      bgColor: "bg-brandNeutral-50",  // Tailwind class for the section background
      bgImage: "",                    // e.g., '/images/connections-bg.jpg'
      textOnDark: false               // flip text if using dark bg/image
    },
    accentColorClass: "from-brand-red to-brand-orange", // used for small accents

    // Media
    gallery: [
      "/portfolio/homefire1.png",
      "/portfolio/homefire2.png",
      "/portfolio/homefire3.png"
    ]
  },



  {
    slug: "lalem",
    title: "Lá:Lém",
    client: "Lá:Lém Building Inspections & Consulting",
    year: "2025",
    summary:
      "We had the privilege of redesigning the Lá:Lém Building Inspection and Consulting website, giving it a fresh new look that reflects the company’s vision and values. Our team restructured and redeveloped the site’s content to ensure clarity and accessibility, while also rebranding the company with updated visuals, social media assets, and even t-shirt designs. The result is a modern, engaging platform that communicates professionalism and cultural meaning.",
    services: ["Web Design", "Web Development", "Social Media", "Graphic Design"],
    testimonial: {
      quote:
        " I wanted to take a moment to recommend DeneHoni — they recently helped redesign my website, www.lalem.ca, and I couldn’t be happier with how everything turned out.",
      author: "Danny Tourville, Lá:Lém"
    },
    cta: { label: "View project", href: "https://lalem.ca"},

    // Theming / visuals
    theme: {
      bgMode: "color",                // "color" | "image" | "none"
      bgColor: "bg-brandNeutral-50",  // Tailwind class for the section background
      bgImage: "",                    // e.g., '/images/connections-bg.jpg'
      textOnDark: false               // flip text if using dark bg/image
    },
    accentColorClass: "from-brand-red to-brand-orange", // used for small accents

    // Media
    gallery: [
      "/portfolio/lalem.png",
      "/portfolio/lalem2.png",
      "/portfolio/lalem3.png"
    ]
  },

  {
    slug: "heiltsuk",
    title: "Heiltsuk Tribal Council",
    client: "Heiltsuk Tribal Council",
    year: "2025",
    summary:
      "We had the honour of redesigning the Heiltsuk Tribal Council website, creating a custom design that reflects the Nation’s rich cultural identity. Our team worked closely with the community to rewrite and organize content, ensuring the information was clear, accessible, and meaningful to both Nation members and visitors.",
    services: ["Web Development", "Web Design"],
    testimonial: {
      quote:
        "We worked as a team, putting our Heiltsuk vision to content and web design on both projects and also making the content easy to navigate. They have been a pleasure to work with, bringing attention to detail. Their communication and people skills are excellent, and they know what’s trending. I can highly recommend Ryan Janvier and Dene Honi.",
      author: "Nicole Carpenter - Heiltsuk Nation"
    },
    cta: { label: "View project", href: "/portfolio/seven-feathers-golf" },

    theme: {
      bgMode: "image",
      bgColor: "", // ignored if image
      bgImage: "https://picsum.photos/500",
      textOnDark: true
    },
    accentColorClass: "from-teal-500 to-brand-orange",
    thumb: "/portfolio/heiltsuk.png",
    gallery: [
      "/portfolio/heiltsuk.png",
      "/portfolio/heiltsuk2.png",
      "/portfolio/heiltsuk3.png"
    ]
  },

  {
    slug: "zachary-knight-enterprises",
    title: "Zachary Knight Enterprises",
    client: "Zachary Knight Enterprises",
    year: "2025",
    summary:
      "We designed and developed a custom website for Zachary Knight Enterprises, an Indigenous consulting company dedicated to supporting Indigenous communities across Canada and the United States. The site was built to clearly communicate their wide range of services — from assisting with funding applications to managing complex housing projects and delivering training for housing staff. A key focus was highlighting their innovative “Inspector in a Box” program, a unique solution that builds housing capacity in Indigenous communities. We also created dedicated space to honour the Zachary Knight Memorial Scholarship, launching in June 2026, which supports Indigenous youth pursuing post-secondary education in housing, infrastructure, or community development. This project was rooted in purpose and meaning, reflecting the organization’s mission and the legacy of Zachary Knight.",
    services: ["Web Development", "Web Design"],
    testimonial: {
      quote:
        "From the very beginning, the team at Dene Honi demonstrated professionalism, speed, and a deep understanding of our Goals. As an Indigenous-owned business themselves, the brought a shared sense of purpose to the project - one grounded in supporting Indigenous entrepreneurs and building capacity in our Communities. They were quick to respond to every idea, adjustment, and peice of feedback I offered, and worked tirelessly to ensure the site reflected both my vision and the values behind Zachary Knight Enterprises.",
      author: "Stan Knight - Founder"
    },
    cta: { label: "View project", href: "/portfolio/seven-feathers-golf" },

    gallery: [
      "/portfolio/zke.png",
      "/portfolio/zke2.png",
      "/portfolio/zke3.png"
    ]
  },

    {
    slug: "norquest-college",
    title: "Norquest College",
    client: "Norquest College",
    year: "2025",
    summary:
      "We collaborated with NorQuest College to create a suite of Indigenous-focused marketing materials aimed at engaging and inspiring prospective Indigenous learners. This included the design of a visually impactful banner, postcard, tablecloth, and PowerPoint presentation, all aligned with NorQuest’s brand while incorporating culturally respectful and meaningful elements. These materials were created to support outreach efforts at events and community engagements, helping to strengthen NorQuest’s connection with Indigenous communities and highlight the college’s commitment to inclusive and accessible education.",
    services: ["Graphic Design", "Marketing", "Communications"],

    cta: { label: "View project", href: "/portfolio/seven-feathers-golf" },

    gallery: [
      "/portfolio/norquest.png",
      "/portfolio/norquest2.png",
      "/portfolio/norquest3.png"
    ]
  }


];
