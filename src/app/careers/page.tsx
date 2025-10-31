import React from "react";

export default function CareersPage() {
  return (
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-blue-800/30">
      <div className="max-w-[900px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-cyan-400 mb-2">Careers at Veriton Tech</h2>
          <p className="text-base text-black/60 dark:text-white/60">Join our team and help shape the future of technology!</p>
        </div>
        <div className="bg-white dark:bg-cyan-900/40 rounded-3xl shadow-xl p-8 sm:p-12 text-lg text-black/80 dark:text-white/80">
          <p className="mb-6">At Veriton Tech, we are always looking for talented, passionate individuals to join our growing team. We value innovation, collaboration, and a commitment to excellence.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Android Developers</li>
            <li>Web Developers</li>
            <li>Shopify Experts</li>
            <li>Cloud Engineers</li>
            <li>UI/UX Designers</li>
            <li>Project Managers</li>
          </ul>
          <p className="mb-6">If you are interested in working with us, please send your resume and a brief introduction to <a href="mailto:veritoninfo@gmail.com" className="text-blue-600 dark:text-cyan-400 underline font-semibold">veritoninfo@gmail.com</a>.</p>
          <p>We look forward to hearing from you and exploring how you can make an impact at Veriton Tech!</p>
        </div>
      </div>
    </main>
  );
}
