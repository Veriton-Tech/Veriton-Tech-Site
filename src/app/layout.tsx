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
  title: "Veriton Tech — Android, Shopify, Web & Cloud Services",
  description: "Veriton Tech provides expert Android, Shopify, web development, and cloud services for businesses and entrepreneurs.",
};

import Link from "next/link";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {/* Header - Enhanced Theme */}
  <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-900/70 backdrop-blur-xl shadow-sm border-b border-black/10 dark:border-white/10">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MobileMenu />
              <span className="text-3xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400">Veriton Tech</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-base font-semibold">
              <Link href="/" className="px-3 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-700 dark:hover:text-indigo-300 transition">Home</Link>
              <Link href="/services" className="px-3 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-700 dark:hover:text-indigo-300 transition">Services</Link>
              <Link href="/about" className="px-3 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-700 dark:hover:text-indigo-300 transition">About</Link>
              <Link href="/careers" className="px-3 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-700 dark:hover:text-indigo-300 transition">Careers</Link>
              <Link href="/faq" className="px-3 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-700 dark:hover:text-indigo-300 transition">FAQ</Link>
              <Link href="/contact" className="px-3 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:text-indigo-700 dark:hover:text-indigo-300 transition">Contact Us</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
