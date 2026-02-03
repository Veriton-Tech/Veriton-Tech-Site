
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.atveriton.com/careers',
  },
};

const positions = [
  {
    title: "Android Developers",
    icon: "🤖",
    color: "from-cyan-600 to-cyan-500",
    description: "Build cutting-edge mobile applications",
  },
  {
    title: "Web Developers",
    icon: "🌐",
    color: "from-blue-600 to-blue-500",
    description: "Create modern, responsive web experiences",
  },
  {
    title: "Shopify Experts",
    icon: "🛒",
    color: "from-green-600 to-green-500",
    description: "Develop powerful e-commerce solutions",
  },
  {
    title: "Cloud Engineers",
    icon: "☁️",
    color: "from-purple-600 to-purple-500",
    description: "Scale and optimize cloud infrastructure",
  },
  {
    title: "UI/UX Designers",
    icon: "🎨",
    color: "from-pink-600 to-pink-500",
    description: "Design beautiful user experiences",
  },
  {
    title: "Project Managers",
    icon: "📊",
    color: "from-orange-600 to-orange-500",
    description: "Lead projects and drive success",
  },
];

const values = [
  { label: "Innovation", emoji: "💡", desc: "We push boundaries and embrace new ideas" },
  { label: "Collaboration", emoji: "🤝", desc: "Teamwork makes the dream work" },
  { label: "Excellence", emoji: "⭐", desc: "Quality is our standard, not an exception" },
];

export default function CareersPage() {
  return (
    <main className="relative w-full overflow-hidden py-16 sm:py-20 bg-white">
      {/* FLOATING GRADIENT BLOBS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-purple-400/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-[26rem] h-[26rem] bg-blue-400/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 mb-4 holographic-text">Careers at Veriton</h2>
          <p className="text-base sm:text-xl text-slate-600" style={{ letterSpacing: '0.01em' }}>Join our team and help shape the future of technology!</p>
        </div>

        {/* Values Section */}
        <div className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-3xl shadow-lg p-8 sm:p-12 mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-8 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-3">{value.emoji}</div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{value.label}</h4>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-3xl shadow-lg p-8 sm:p-12 mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-8 text-center">Open Positions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${position.color} text-white mb-4 text-2xl group-hover:scale-110 transition-transform`}>
                  {position.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{position.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{position.description}</p>
                {/* Removed Learn More button */}
              </div>
            ))}
          </div>
        </div>

        {/* Why Join Us */}
        <div className="relative overflow-hidden rounded-3xl shadow-lg p-8 sm:p-12 mb-12 text-white">
          <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #0f172a 100%)' }}></div>
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Why Join Veriton?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="font-bold mb-1 text-cyan-100">Growth Opportunities</h4>
                  <p className="text-cyan-100/80 text-sm">Advance your career with challenging projects and continuous learning</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">💼</span>
                <div>
                  <h4 className="font-bold mb-1 text-cyan-100">Flexible Work</h4>
                  <p className="text-cyan-100/80 text-sm">Work remotely or from our modern office - flexibility matters</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">👥</span>
                <div>
                  <h4 className="font-bold mb-1 text-cyan-100">Great Team Culture</h4>
                  <p className="text-cyan-100/80 text-sm">Collaborate with talented professionals who are passionate about tech</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-bold mb-1 text-cyan-100">Impact-Driven Work</h4>
                  <p className="text-cyan-100/80 text-sm">Build solutions that make a real difference for businesses worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-3xl shadow-lg p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Make an Impact?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Send us your resume and a brief introduction. We&apos;d love to hear about your skills and ambitions!
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=veritoninfo@gmail.com&body=Hi%20Veriton%20Team,%0A%0AI%27m%20interested%20in%20joining%20your%20team."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/30"
          >
            Apply Now
          </a>
          <p className="text-slate-600 text-sm mt-6">
            Or reach out to us at{" "}
            <a href="mailto:veritoninfo@gmail.com" className="text-cyan-700 font-semibold hover:underline">
              veritoninfo@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
