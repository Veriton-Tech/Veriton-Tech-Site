import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./Footer";
import MobileMenu from "../components/MobileMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veriton — Expert Android, Shopify, Web & Cloud Development Services",
  description: "Veriton provides expert Android, Shopify, web development, and cloud services for businesses and entrepreneurs. Leading tech solutions and development company.",
  metadataBase: new URL('https://atveriton.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Veriton — Expert Android, Shopify, Web & Cloud Development Services",
    description: "Veriton provides expert Android, Shopify, web development, and cloud services for businesses and entrepreneurs. Leading tech solutions and development company.",
    url: 'https://atveriton.com',
    siteName: 'Veriton',
    locale: 'en_US',
    type: 'website',
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

import Link from "next/link";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header with Footer Theme */}
        <header className="sticky top-0 z-50 border-b border-cyan-500/30 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <div className="w-full px-2 xs:px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative z-10 max-w-none">
            <div className="flex items-center gap-2 sm:gap-3">
              <MobileMenu />
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cyan-400 relative">
                Veriton
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-3 lg:gap-6 text-sm lg:text-base font-semibold">
              <Link href="/" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10">
                Home
              </Link>
              <Link href="/services" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10">
                Services
              </Link>
              <Link href="/about" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10">
                About
              </Link>
              <Link href="/careers" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10">
                Careers
              </Link>
              <Link href="/faq" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10">
                FAQ
              </Link>
              <Link href="/contact" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10">
                Contact Us
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
