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
        {/* Futuristic Header with Glassmorphism */}
        <header className="sticky top-0 z-50 border-b border-cyan-500/20 w-full bg-gradient-to-r from-blue-900 via-cyan-900 to-pink-900">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 via-cyan-900 to-pink-900"></div>
          <div className="w-full px-2 xs:px-3 sm:px-6 h-20 flex items-center justify-between relative z-10 max-w-none">
            <div className="flex items-center gap-3">
              <MobileMenu />
              <span className="text-3xl font-extrabold tracking-tight holographic-text relative">
                Veriton
                <span className="absolute -inset-1 bg-cyan-400/30 blur-xl opacity-50"></span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-base font-semibold">
              <Link href="/" className="relative px-4 py-2 text-cyan-100 hover:text-white transition-all group">
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-lg transition-all border border-cyan-500/0 group-hover:border-cyan-500/30"></span>
              </Link>
              <Link href="/services" className="relative px-4 py-2 text-cyan-100 hover:text-white transition-all group">
                <span className="relative z-10">Services</span>
                <span className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-lg transition-all border border-cyan-500/0 group-hover:border-cyan-500/30"></span>
              </Link>
              <Link href="/about" className="relative px-4 py-2 text-cyan-100 hover:text-white transition-all group">
                <span className="relative z-10">About</span>
                <span className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-lg transition-all border border-cyan-500/0 group-hover:border-cyan-500/30"></span>
              </Link>
              <Link href="/careers" className="relative px-4 py-2 text-cyan-100 hover:text-white transition-all group">
                <span className="relative z-10">Careers</span>
                <span className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-lg transition-all border border-cyan-500/0 group-hover:border-cyan-500/30"></span>
              </Link>
              <Link href="/faq" className="relative px-4 py-2 text-cyan-100 hover:text-white transition-all group">
                <span className="relative z-10">FAQ</span>
                <span className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-lg transition-all border border-cyan-500/0 group-hover:border-cyan-500/30"></span>
              </Link>
              <Link href="/contact" className="relative px-4 py-2 text-cyan-100 hover:text-white transition-all group">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-lg transition-all border border-cyan-500/0 group-hover:border-cyan-500/30"></span>
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
