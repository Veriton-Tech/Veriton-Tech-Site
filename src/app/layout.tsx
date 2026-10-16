import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import SiteHeader from "../components/SiteHeader";
import ScrollProgress from "../components/ScrollProgress";
import JsonLd from "../components/JsonLd";
import Footer from "./Footer";
import { SITE } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Veriton — Android, Web, Shopify & AI Development Studio",
    template: "%s — Veriton",
  },
  description: SITE.description,
  keywords: [
    "Veriton",
    "Android development",
    "Shopify development",
    "web development",
    "AI development",
    "Next.js agency",
    "product engineering studio",
  ],
  authors: [{ name: "Veriton", url: SITE.url }],
  creator: "Veriton",
  publisher: "Veriton",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Veriton — Android, Web, Shopify & AI Development Studio",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veriton — Android, Web, Shopify & AI Development Studio",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${fraunces.variable} antialiased`}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <ScrollProgress />
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
