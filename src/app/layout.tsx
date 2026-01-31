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
        <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border-b-2 border-transparent border-b-cyan-400/40 shadow-lg before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/10 before:via-pink-400/10 before:to-blue-400/10 before:blur-lg before:opacity-60 before:pointer-events-none">
          <div className="w-full px-2 xs:px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative z-10 max-w-none">
            <div className="flex items-center gap-2 sm:gap-3">
              <MobileMenu />
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight holographic-text mb-0 relative">
                Veriton
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-blue-400 opacity-60 blur-sm animate-gradient-x" />
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-3 lg:gap-6 text-sm lg:text-base font-semibold">
              <Link href="/" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all relative overflow-hidden group">
                <span className="relative z-10">Home</span>
                <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </Link>
              <Link href="/services" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all relative overflow-hidden group">
                <span className="relative z-10">Services</span>
                <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </Link>
              <Link href="/about" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all relative overflow-hidden group">
                <span className="relative z-10">About</span>
                <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </Link>
              <Link href="/careers" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all relative overflow-hidden group">
                <span className="relative z-10">Careers</span>
                <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </Link>
              <Link href="/faq" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all relative overflow-hidden group">
                <span className="relative z-10">FAQ</span>
                <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </Link>
              <Link href="/contact" className="px-3 lg:px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all relative overflow-hidden group">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
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
