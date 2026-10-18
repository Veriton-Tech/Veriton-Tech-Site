import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import SiteHeader from "../components/SiteHeader";
import ScrollProgress from "../components/ScrollProgress";
import JsonLd from "../components/JsonLd";
import MotionProviders from "../components/motion/MotionProviders";
import Footer from "./Footer";
import { HOME_DESCRIPTION, SITE } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const HOME_TITLE =
  "Veriton | Android, Web, Shopify & AI Development Studio in Berlin";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veriton.si"),
  title: {
    default: HOME_TITLE,
    template: "%s | Veriton",
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "Veriton",
    "Android development Berlin",
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
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "https://www.veriton.si",
    siteName: "Veriton",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Veriton — Android, Web, Shopify & AI Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/opengraph-image"],
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
        <MotionProviders>
          <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
          <ScrollProgress />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <Footer />
        </MotionProviders>
      </body>
    </html>
  );
}
