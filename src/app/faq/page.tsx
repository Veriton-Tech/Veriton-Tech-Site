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
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
      
      <div className="relative z-10 max-w-[700px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">Frequently Asked Questions</h2>
          <p className="text-base text-slate-600 mb-2" style={{ letterSpacing: '0.01em' }}>Find answers to common questions about our services and process.</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-3xl shadow-lg p-8 sm:p-12 text-lg text-slate-900">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-6">
              <button
                className={`w-full text-left font-semibold text-lg px-4 py-3 rounded-lg bg-slate-100 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition flex justify-between items-center text-slate-900 ${openIndex === idx ? 'bg-slate-200' : ''}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.question}
                <span className="ml-2 text-cyan-700">{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="mt-3 px-4 text-slate-800 text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
