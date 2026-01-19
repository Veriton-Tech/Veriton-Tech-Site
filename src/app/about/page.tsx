import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Veriton Tech",
  description: "Learn about Veriton Tech's mission to empower businesses with innovative Android, Shopify, web development, and cloud solutions.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-blue-800/30">
      <div className="max-w-[900px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-cyan-400 mb-2">About Veriton Tech</h2>
          <p className="text-base text-black/60 dark:text-white/60">Empowering businesses with innovative technology solutions</p>
        </div>
        <div className="bg-white dark:bg-cyan-900/40 rounded-3xl shadow-xl p-8 sm:p-12 text-lg text-black/80 dark:text-white/80">
          <p className="mb-6">Veriton Tech is a leading provider of Android, Shopify, web development, and cloud services. Our mission is to help businesses and entrepreneurs harness the power of technology to achieve their goals.</p>
          <p className="mb-6">With a team of experienced professionals, we deliver modern, scalable, and secure solutions tailored to your unique needs. From custom mobile apps to robust e-commerce platforms and cloud infrastructure, we ensure your digital success.</p>
          <p className="mb-6">We believe in innovation, transparency, and long-term partnerships. Our commitment to quality and customer satisfaction sets us apart in the industry.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Expert Android & Web Development</li>
            <li>Shopify E-commerce Solutions</li>
            <li>Cloud Infrastructure & Support</li>
            <li>Dedicated Customer Service</li>
          </ul>
          <p>Ready to transform your business? <a href="#contact" className="text-blue-600 dark:text-cyan-400 underline font-semibold">Contact us</a> today!</p>
        </div>
      </div>
    </main>
  );
}
