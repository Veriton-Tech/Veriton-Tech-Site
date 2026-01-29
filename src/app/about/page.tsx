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
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 relative overflow-hidden bg-white/60 backdrop-blur-3xl">
      {/* Animated gradient accent background */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[400px] bg-gradient-to-br from-slate-300/5 via-slate-400/4 to-transparent rounded-full blur-3xl pointer-events-none z-0 animate-float"></div>
      <div className="absolute -bottom-40 right-1/4 w-[600px] h-[500px] bg-gradient-to-tl from-slate-400/4 via-slate-300/5 to-transparent rounded-full blur-3xl pointer-events-none z-0 animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-slate-800 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-4">About Veriton</h2>
          <p className="text-base sm:text-lg text-slate-600 mb-2" style={{ letterSpacing: '0.01em' }}>Empowering businesses with innovative technology solutions</p>
        </div>
        
        <div className="bg-gradient-to-br from-white via-blue-50/30 to-white border border-cyan-300/30 rounded-3xl shadow-xl p-8 sm:p-12 text-lg text-slate-900 relative overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-br-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-3xl"></div>
          
          <div className="relative z-10">
            <p className="mb-6 leading-relaxed">Veriton is a leading provider of <span className="font-semibold text-cyan-700">Android</span>, <span className="font-semibold text-pink-600">Shopify</span>, <span className="font-semibold text-blue-700">web development</span>, and <span className="font-semibold text-purple-700">cloud services</span>. Our mission is to help businesses and entrepreneurs harness the power of technology to achieve their goals.</p>
            
            <p className="mb-6 leading-relaxed">With a team of experienced professionals, we deliver modern, scalable, and secure solutions tailored to your unique needs. From custom mobile apps to robust e-commerce platforms and cloud infrastructure, we ensure your digital success.</p>
            
            <p className="mb-8 leading-relaxed">We believe in <span className="text-cyan-700 font-semibold">innovation</span>, <span className="text-pink-600 font-semibold">transparency</span>, and <span className="text-purple-700 font-semibold">long-term partnerships</span>. Our commitment to quality and customer satisfaction sets us apart in the industry.</p>
            
            {/* Values List with icons and gradient backgrounds */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50/60 to-blue-50/40 border border-cyan-200/50 hover:border-cyan-300 transition-colors">
                <div className="text-cyan-600 font-semibold mb-2">🎯 Expert Android & Web Development</div>
                <p className="text-sm text-slate-600">Crafted with cutting-edge technology and best practices</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50/60 to-orange-50/40 border border-pink-200/50 hover:border-pink-300 transition-colors">
                <div className="text-pink-600 font-semibold mb-2">🛒 Shopify E-commerce Solutions</div>
                <p className="text-sm text-slate-600">Scalable stores built for conversion and growth</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50/60 to-blue-50/40 border border-purple-200/50 hover:border-purple-300 transition-colors">
                <div className="text-purple-600 font-semibold mb-2">☁️ Cloud Infrastructure & Support</div>
                <p className="text-sm text-slate-600">Reliable, secure, and highly available systems</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50/60 to-cyan-50/40 border border-blue-200/50 hover:border-blue-300 transition-colors">
                <div className="text-blue-600 font-semibold mb-2">🤝 Dedicated Customer Service</div>
                <p className="text-sm text-slate-600">Always available to support your success</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-200/50">
              <p className="text-center sm:text-left">Ready to transform your business? <a href="/contact" className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 font-semibold hover:underline transition-colors">Contact us today <span>→</span></a></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
