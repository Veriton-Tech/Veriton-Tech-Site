"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Veriton Tech offer?",
    answer: "We provide Android development, web development, Shopify e-commerce solutions, and cloud services tailored for businesses and entrepreneurs.",
  },
  {
    question: "How can I contact Veriton Tech?",
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
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-blue-800/30">
      <div className="max-w-[700px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-cyan-400 mb-2">Frequently Asked Questions</h2>
          <p className="text-base text-black/60 dark:text-white/60">Find answers to common questions about our services and process.</p>
        </div>
        <div className="bg-white dark:bg-cyan-900/40 rounded-3xl shadow-xl p-8 sm:p-12">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-6">
              <button
                className={`w-full text-left font-semibold text-lg px-4 py-3 rounded-lg bg-blue-50 dark:bg-cyan-900/20 border border-blue-200 dark:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition flex justify-between items-center ${openIndex === idx ? 'bg-blue-100 dark:bg-cyan-900/40' : ''}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.question}
                <span className="ml-2 text-blue-600 dark:text-cyan-400">{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="mt-3 px-4 text-black/80 dark:text-white/80 text-base">
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
