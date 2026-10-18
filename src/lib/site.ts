export const SITE = {
  name: "Veriton",
  legalName: "Veriton",
  url: "https://www.veriton.si",
  email: "info@veriton.si",
  telephone: "+49 1520 9475800",
  linkedin: "https://www.linkedin.com/company/veriton-tech",
  github: "https://github.com/Veriton-Tech",
  logo: "https://www.veriton.si/logo.png",
  description:
    "Veriton is a Berlin product & engineering studio building Android apps, web products, Shopify stores, and practical AI features for businesses.",
  sameAs: [
    "https://www.linkedin.com/company/veriton-tech",
    "https://github.com/Veriton-Tech",
  ],
  address: {
    streetAddress: "Woldegker Straße 8A",
    postalCode: "13059",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  services: [
    {
      name: "Android Development",
      path: "/services/android-development",
      description:
        "Custom Android apps with modern architecture, polished UI, and store-ready releases.",
      imageAlt:
        "Smartphone showing a modern Android mobile app interface",
    },
    {
      name: "Web Development",
      path: "/services/web-development",
      description:
        "Fast, accessible websites and web apps built with React and Next.js.",
      imageAlt: "Laptop displaying a clean, responsive website design",
    },
    {
      name: "Shopify Development",
      path: "/services/shopify-development",
      description:
        "Shopify stores and headless commerce experiences built for conversion and growth.",
      imageAlt: "Retail fashion store interior representing ecommerce shopping",
    },
    {
      name: "AI Development",
      path: "/services/ai-development",
      description:
        "LLM assistants, RAG systems, automation, and production-ready AI product features.",
      imageAlt: "Abstract AI neural network visualization with glowing nodes",
    },
  ],
} as const;

/** Homepage-ready meta description (~155 chars). */
export const HOME_DESCRIPTION =
  "Berlin studio for Android, web, Shopify, and AI development. Veriton designs and ships custom products with clear process from brief to launch.";
