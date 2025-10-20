import React from "react";

export default function ContactPage() {
  return (
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-blue-800/30">
      <div className="max-w-[700px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-cyan-400 mb-2">Contact Us</h2>
          <p className="text-base text-black/60 dark:text-white/60">We&apos;d love to hear from you! Reach out for a free consultation or any questions.</p>
        </div>
        <div className="bg-white dark:bg-cyan-900/40 rounded-3xl shadow-xl p-8 sm:p-12 text-lg text-black/80 dark:text-white/80">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-cyan-700 bg-blue-50 dark:bg-cyan-900/20 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-cyan-700 bg-blue-50 dark:bg-cyan-900/20 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@email.com" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-cyan-700 bg-blue-50 dark:bg-cyan-900/20 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={5} placeholder="How can we help you?" required />
            </div>
            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow hover:from-blue-700 hover:to-cyan-700 transition">Send Message</button>
          </form>
          <div className="mt-8 text-center text-sm text-black/60 dark:text-white/60">
            Or email us at <a href="mailto:info@veritontech.com" className="text-blue-600 dark:text-cyan-400 underline font-semibold">info@veritontech.com</a>
          </div>
        </div>
      </div>
    </main>
  );
}
