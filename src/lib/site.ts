export const SITE = {
  name: "Veriton",
  legalName: "Veriton",
  url: "https://atveriton.com",
  email: "veritoninfo@gmail.com",
  linkedin: "https://www.linkedin.com/company/veriton-tech",
  description:
    "Veriton is a product and engineering studio that builds Android apps, web applications, Shopify stores, and practical AI features for businesses and startups.",
  sameAs: ["https://www.linkedin.com/company/veriton-tech"],
  services: [
    {
      name: "Android Development",
      path: "/services/android-development",
      description:
        "Custom Android apps with modern architecture, polished UI, and store-ready releases.",
    },
    {
      name: "Web Development",
      path: "/services/web-development",
      description:
        "Fast, accessible websites and web apps built with React and Next.js.",
    },
    {
      name: "Shopify Development",
      path: "/services/shopify-development",
      description:
        "Shopify stores and headless commerce experiences built for conversion and growth.",
    },
    {
      name: "AI Development",
      path: "/services/ai-development",
      description:
        "LLM assistants, RAG systems, automation, and production-ready AI product features.",
    },
  ],
} as const;
