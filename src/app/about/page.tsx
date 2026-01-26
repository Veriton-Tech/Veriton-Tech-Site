import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Veriton",
  description: "Learn about Veriton's mission to empower businesses with innovative Android, Shopify, web development, and cloud solutions.",
  alternates: {
    canonical: '/about',
  },
  keywords: [
    "About Veriton",
    "Veriton",
    "Tech Company",
    "Android Development",
    "Shopify Development",
    "Web Development",
    "Cloud Solutions",
    "Business Technology",
    "IT Services",
    "Company Mission"
  ],
  openGraph: {
    title: "About Us — Veriton",
    description: "Learn about Veriton's mission to empower businesses with innovative technology solutions, including Android, Shopify, web, and cloud services.",
    url: 'https://atveriton.com/about',
    type: 'website',
    siteName: 'Veriton',
    images: [
      {
        url: 'https://atveriton.com/public/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Veriton',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us — Veriton",
    description: "Learn about Veriton's mission to empower businesses with innovative technology solutions, including Android, Shopify, web, and cloud services.",
    images: ['https://atveriton.com/public/og-about.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-blue-100 via-cyan-100 to-pink-100 dark:from-blue-900/60 dark:via-cyan-900/40 dark:to-pink-900/40">
      {/* Animated gradient accent (matching contact/careers/FAQ) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none z-0 opacity-70 blur-2xl animate-gradient-x"
        style={{background: "linear-gradient(90deg, #a7f3d0 0%, #bae6fd 40%, #fbcfe8 100%)"}} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-pink-300 mb-2 drop-shadow">About Veriton</h2>
          <p className="text-base text-slate-700 dark:text-slate-200/80 mb-2" style={{ letterSpacing: '0.01em' }}>Empowering businesses with innovative technology solutions</p>
        </div>
        <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/70 border border-white/40 dark:border-cyan-900/40 rounded-3xl shadow-2xl p-8 sm:p-12 text-lg text-slate-900 dark:text-white/90">
          <p className="mb-6">Veriton is a leading provider of <span className="font-semibold text-cyan-700 dark:text-cyan-300">Android</span>, <span className="font-semibold text-pink-700 dark:text-pink-300">Shopify</span>, <span className="font-semibold text-blue-700 dark:text-blue-300">web development</span>, and <span className="font-semibold text-pink-700 dark:text-pink-300">cloud services</span>. Our mission is to help businesses and entrepreneurs harness the power of technology to achieve their goals.</p>
          <p className="mb-6">With a team of experienced professionals, we deliver modern, scalable, and secure solutions tailored to your unique needs. From custom mobile apps to robust e-commerce platforms and cloud infrastructure, we ensure your digital success.</p>
          <p className="mb-6">We believe in <span className="text-cyan-700 font-semibold dark:text-cyan-300">innovation</span>, <span className="text-pink-700 font-semibold dark:text-pink-300">transparency</span>, and <span className="text-blue-700 font-semibold dark:text-blue-300">long-term partnerships</span>. Our commitment to quality and customer satisfaction sets us apart in the industry.</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-cyan-700 font-semibold dark:text-cyan-300">Expert Android & Web Development</li>
            <li className="text-pink-700 font-semibold dark:text-pink-300">Shopify E-commerce Solutions</li>
            <li className="text-blue-700 font-semibold dark:text-blue-300">Cloud Infrastructure & Support</li>
            <li className="text-pink-700 font-semibold dark:text-pink-300">Dedicated Customer Service</li>
          </ul>
          <p>Ready to transform your business? <a href="#contact" className="text-cyan-700 dark:text-cyan-300 underline font-semibold">Contact us</a> today!</p>
        </div>
      </div>

      {/* Keyframes for animated accent (matching contact/careers/FAQ) */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-55%) scale(1.04); }
        }
        .animate-gradient-x {
          animation: gradient-x 8s ease-in-out infinite alternate;
        }
      `}</style>

      {/* FAQ Schema JSON-LD for SEO */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services does Veriton offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Veriton offers Android & web development, Shopify e-commerce solutions, cloud infrastructure, and dedicated customer service."
              }
            },
            {
              "@type": "Question",
              "name": "How can Veriton help my business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We help businesses harness technology for growth by delivering modern, scalable, and secure solutions tailored to your needs."
              }
            },
            {
              "@type": "Question",
              "name": "How do I contact Veriton?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact us through our website's contact form or by emailing veritoninfo@gmail.com."
              }
            }
          ]
        })}
      </script>

      {/* Breadcrumb Schema JSON-LD for SEO */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://atveriton.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": "https://atveriton.com/about"
            }
          ]
        })}
      </script>
    </main>
  );
}
