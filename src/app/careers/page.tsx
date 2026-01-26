
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.atveriton.com/careers',
  },
};

export default function CareersPage() {
  return (
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-blue-100 via-cyan-100 to-pink-100 dark:from-blue-900/60 dark:via-cyan-900/40 dark:to-pink-900/40">
      {/* Animated gradient accent (matching contact/FAQ) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none z-0 opacity-70 blur-2xl animate-gradient-x"
        style={{background: "linear-gradient(90deg, #a7f3d0 0%, #bae6fd 40%, #fbcfe8 100%)"}} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-pink-300 mb-2 drop-shadow">Careers at Veriton</h2>
          <p className="text-base text-slate-700 dark:text-slate-200/80 mb-2" style={{ letterSpacing: '0.01em' }}>Join our team and help shape the future of technology!</p>
        </div>
        <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/70 border border-white/40 dark:border-cyan-900/40 rounded-3xl shadow-2xl p-8 sm:p-12 text-lg text-slate-900 dark:text-white/90">
          <p className="mb-6">At Veriton, we are always looking for talented, passionate individuals to join our growing team. We value <span className="text-cyan-700 font-semibold dark:text-cyan-300">innovation</span>, <span className="text-pink-700 font-semibold dark:text-pink-300">collaboration</span>, and a <span className="text-blue-700 font-semibold dark:text-blue-300">commitment to excellence</span>.</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-cyan-700 font-semibold dark:text-cyan-300">Android Developers</li>
            <li className="text-pink-700 font-semibold dark:text-pink-300">Web Developers</li>
            <li className="text-blue-700 font-semibold dark:text-blue-300">Shopify Experts</li>
            <li className="text-pink-700 font-semibold dark:text-pink-300">Cloud Engineers</li>
            <li className="text-cyan-700 font-semibold dark:text-cyan-300">UI/UX Designers</li>
            <li className="text-pink-700 font-semibold dark:text-pink-300">Project Managers</li>
          </ul>
          <p className="mb-6">If you are interested in working with us, please send your resume and a brief introduction to <a href="mailto:veritoninfo@gmail.com" className="text-cyan-700 dark:text-cyan-300 underline font-semibold">veritoninfo@gmail.com</a>.</p>
          <p>We look forward to hearing from you and exploring how you can make an impact at Veriton!</p>
        </div>
      </div>
      {/* Keyframes for animated accent (matching contact/FAQ) */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-55%) scale(1.04); }
        }
        .animate-gradient-x {
          animation: gradient-x 8s ease-in-out infinite alternate;
        }
      `}</style>
    </main>
  );
}
