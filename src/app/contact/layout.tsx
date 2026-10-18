import type { Metadata } from "next";

const description =
  "Contact Veriton in Berlin to discuss Android, web, Shopify, or AI projects. Email info@veriton.si or send a note — we’ll reply with a clear next step.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Veriton",
    description,
    url: "https://www.veriton.si/contact",
    type: "website",
    siteName: "Veriton",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Veriton",
    description,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
