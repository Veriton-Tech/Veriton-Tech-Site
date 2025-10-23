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
        <header className="sticky top-0 z-30 bg-gradient-to-r from-blue-50 via-cyan-100 to-blue-200 dark:from-blue-900/60 dark:via-cyan-900/40 dark:to-blue-800/60 backdrop-blur-xl shadow-lg border-b border-blue-200 dark:border-cyan-700/40">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MobileMenu />
              <span className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 drop-shadow">Veriton Tech</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-base font-semibold">
              <Link href="/" className="px-3 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-700 dark:hover:text-cyan-400 transition">Home</Link>
              <Link href="/services" className="px-3 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-700 dark:hover:text-cyan-400 transition">Services</Link>
              <Link href="/about" className="px-3 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-700 dark:hover:text-cyan-400 transition">About</Link>
              <Link href="/careers" className="px-3 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-700 dark:hover:text-cyan-400 transition">Careers</Link>
              <Link href="/faq" className="px-3 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-700 dark:hover:text-cyan-400 transition">FAQ</Link>
              <Link href="/contact" className="px-3 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-700 dark:hover:text-cyan-400 transition">Contact Us</Link>
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
