"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Veriton offer?",
    answer: "We provide Android development, web development, Shopify e-commerce solutions, and cloud services tailored for businesses and entrepreneurs.",
  },
  {
    question: "How can I contact Veriton?",
    answer: "You can reach us via the Contact Us page or email us at veritoninfo@gmail.com.",
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we specialize in custom technology solutions to fit your unique business needs.",
  },
  {
    question: "What is your project delivery process?",
    answer: "We follow a transparent, collaborative process from consultation to deployment, ensuring quality and satisfaction at every step.",
  },
  {
    question: "Can you help with ongoing support?",
    answer: "Absolutely! We offer ongoing support and maintenance for all our services.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-blue-100 via-cyan-100 to-pink-100 dark:from-blue-900/60 dark:via-cyan-900/40 dark:to-pink-900/40">
      {/* Animated gradient accent (matching contact page) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none z-0 opacity-70 blur-2xl animate-gradient-x"
        style={{background: "linear-gradient(90deg, #a7f3d0 0%, #bae6fd 40%, #fbcfe8 100%)"}} />

      <div className="relative z-10 max-w-[700px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-pink-300 mb-2 drop-shadow">Frequently Asked Questions</h2>
          <p className="text-base text-slate-700 dark:text-slate-200/80 mb-2" style={{ letterSpacing: '0.01em' }}>Find answers to common questions about our services and process.</p>
        </div>
        <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/70 border border-white/40 dark:border-cyan-900/40 rounded-3xl shadow-2xl p-8 sm:p-12 text-lg text-slate-900 dark:text-white/90">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-6">
              <button
                className={`w-full text-left font-semibold text-lg px-4 py-3 rounded-lg bg-cyan-50/60 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition flex justify-between items-center text-slate-900 dark:text-white ${openIndex === idx ? 'bg-cyan-100/80 dark:bg-cyan-900/80' : ''}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.question}
                <span className="ml-2 text-cyan-700 dark:text-cyan-300">{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="mt-3 px-4 text-slate-800 dark:text-white/90 text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Keyframes for animated accent (matching contact page) */}
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
