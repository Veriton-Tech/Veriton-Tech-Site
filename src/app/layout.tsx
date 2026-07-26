import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import SiteHeader from "../components/SiteHeader";
import ScrollProgress from "../components/ScrollProgress";
import Footer from "./Footer";
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
  title: "Veriton — Expert Android, Shopify, Web & AI Development Services",
  description:
    "Veriton provides expert Android, Shopify, web development, and AI services for businesses and entrepreneurs. Leading tech solutions and development company.",
  metadataBase: new URL("https://atveriton.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Veriton — Expert Android, Shopify, Web & AI Development Services",
    description:
      "Veriton provides expert Android, Shopify, web development, and AI services for businesses and entrepreneurs. Leading tech solutions and development company.",
    url: "https://atveriton.com",
    siteName: "Veriton",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${fraunces.variable} antialiased`}>
        <ScrollProgress />
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
