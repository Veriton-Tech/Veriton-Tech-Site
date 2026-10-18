import { faqs } from "@/data/faqs";
import { SITE } from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: SITE.logo,
    image: SITE.logo,
    email: SITE.email,
    telephone: SITE.telephone,
    description: SITE.description,
    sameAs: SITE.sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.addressLocality,
      addressCountry: SITE.address.addressCountry,
    },
    areaServed: ["DE", "EU", "Worldwide"],
    knowsAbout: [
      "Android development",
      "Web development",
      "Shopify development",
      "AI development",
      "Next.js",
      "React",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      telephone: SITE.telephone,
      availableLanguage: ["English", "German"],
    },
    makesOffer: SITE.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: `${SITE.url}${service.path}`,
        provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
      },
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: SITE.logo,
    },
  };
}

export function faqPageJsonLd(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(service: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE.url}${service.path}`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: SITE.logo,
    },
    areaServed: "Worldwide",
  };
}
