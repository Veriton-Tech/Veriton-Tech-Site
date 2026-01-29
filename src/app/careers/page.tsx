
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.atveriton.com/careers',
  },
};

export default function CareersPage() {
  return (
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
      {/* Floating gradient accent */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none z-0 opacity-15 blur-3xl animate-float" style={{background: "linear-gradient(90deg, #e2e8f0 0%, #f1f5f9 40%, #f8fafc 100%)"}} />
      <div className="absolute -bottom-32 right-1/4 w-[600px] h-[400px] pointer-events-none z-0 opacity-12 blur-3xl animate-float" style={{background: "linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 50%, transparent 100%)", animationDelay: "1.5s"}} />
      
      <div className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">Careers at Veriton</h2>
          <p className="text-base text-slate-600 mb-2" style={{ letterSpacing: '0.01em' }}>Join our team and help shape the future of technology!</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-3xl shadow-lg p-8 sm:p-12 text-lg text-slate-900">
          <p className="mb-6">At Veriton, we are always looking for talented, passionate individuals to join our growing team. We value <span className="text-cyan-700 font-semibold">innovation</span>, <span className="text-pink-700 font-semibold">collaboration</span>, and a <span className="text-blue-700 font-semibold">commitment to excellence</span>.</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-cyan-700 font-semibold">Android Developers</li>
            <li className="text-pink-700 font-semibold">Web Developers</li>
            <li className="text-blue-700 font-semibold">Shopify Experts</li>
            <li className="text-pink-700 font-semibold">Cloud Engineers</li>
            <li className="text-cyan-700 font-semibold">UI/UX Designers</li>
            <li className="text-pink-700 font-semibold">Project Managers</li>
          </ul>
          <p className="mb-6">If you are interested in working with us, please send your resume and a brief introduction to <a href="mailto:veritoninfo@gmail.com" className="text-cyan-700 underline font-semibold">veritoninfo@gmail.com</a>.</p>
          <p>We look forward to hearing from you and exploring how you can make an impact at Veriton!</p>
        </div>
      </div>
    </main>
  );
}
