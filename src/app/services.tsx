import React from "react";
import Link from "next/link";
import Footer from "./Footer";

const services = [
  { name: "Android Development", icon: "🤖", desc: "Custom Android apps for business and consumers." },
  { name: "Web Development", icon: "🌐", desc: "Modern, responsive websites and web apps." },
  { name: "Shopify Development", icon: "🛒", desc: "E-commerce solutions built on Shopify." },
  { name: "Cloud Services", icon: "☁️", desc: "Scalable cloud infrastructure and support." },
];

export default function ServicesPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Our Services Section */}
      <main className="flex-1 py-12 sm:py-20 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-[1100px] mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-base sm:text-lg text-slate-600">Explore our expert solutions for your business growth</p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {services.map((s) => {
              const slug = s.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
              return (
                <div
                  key={s.name}
                  className="group rounded-xl bg-white p-6 xs:p-8 sm:p-10 shadow-md hover:shadow-xl transition-all border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/20 text-center flex flex-col items-center justify-center min-h-[320px] sm:min-h-[340px]"
                >
                  <div className="text-4xl xs:text-5xl mb-3 xs:mb-4">{s.icon}</div>
                  <div className="font-bold text-lg xs:text-xl text-cyan-600 mb-2 xs:mb-3 group-hover:text-cyan-700 transition-colors">{s.name}</div>
                  <div className="text-sm xs:text-base text-slate-600 mb-4 xs:mb-6 leading-relaxed flex-grow">{s.desc}</div>
                  <Link href={`/services/${slug}`} className="px-5 xs:px-6 py-2 xs:py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-500 text-white text-xs xs:text-sm font-bold hover:from-cyan-700 hover:to-cyan-600 transition-all hover:shadow-lg hover:shadow-cyan-500/40">
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
