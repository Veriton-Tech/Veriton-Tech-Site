
import React from "react";
import Link from "next/link";
import ServiceAccordion from "@/components/ServiceAccordion";
import EstimateWidget from "@/components/EstimateWidget";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.atveriton.com/services', // Consider dynamic canonical if needed
  },
};

type Service = {
  title: string;
  subtitle: string;
  features: string[];
  faqs: { q: string; a: string }[];
  content?: string;
};

const SERVICES: Record<string, Service> = {
  "android-development": {
    title: "Android Development",
    subtitle: "Custom, performant Android apps built with modern architecture.",
    features: [
      "Kotlin & Jetpack Compose",
      "Clean Architecture & Test Coverage",
      "Play Store release & CI/CD",
      "Performance optimization & profiling",
    ],
    faqs: [
      { q: "How long does an app take to build?", a: "Typical timelines are 8–16 weeks for a production-ready app depending on complexity." },
      { q: "Do you provide post-launch support?", a: "Yes — we offer maintenance, monitoring, and feature roadmaps after launch." },
    ],
  },
  "web-development": {
    title: "Web Development",
    subtitle: "Fast, accessible and maintainable web apps and marketing sites.",
    features: [
      "React / Next.js architecture",
      "Responsive & accessible UI",
      "SEO-friendly server rendering",
      "Integrations with APIs and databases",
    ],
    faqs: [
      { q: "Which frameworks do you use?", a: "We primarily use React and Next.js but can work with other stacks on request." },
      { q: "Can you migrate an existing site?", a: "Yes — we support migrations, performance audits and progressive rewrites." },
    ],
  },
  "shopify-development": {
    title: "Shopify Development",
    subtitle: "Custom Shopify stores, theme work and headless commerce setups.",
    features: [
      "Theme customization & Liquid",
      "App integrations and private apps",
      "Headless Shopify with Storefront API",
      "Payment and shipping workflows",
    ],
    faqs: [
      { q: "Do you build custom themes?", a: "Yes — from small tweaks to full custom themes and headless storefronts." },
      { q: "Can you help with migrations?", a: "We can migrate products, customers, and history to Shopify from most platforms." },
    ],
  },
  "cloud-services": {
    title: "Cloud Services",
    subtitle: "Scalable infrastructure, cost optimization and secure deployments.",
    features: [
      "AWS / GCP / Azure architecture",
      "Containerization & Kubernetes",
      "CI/CD pipelines & IaC (Terraform)",
      "Monitoring, backups & security reviews",
    ],
    faqs: [
      { q: "Which cloud provider do you recommend?", a: "It depends on your needs — we help choose the best fit and can work across providers." },
      { q: "Do you manage on-call or SRE tasks?", a: "Yes, we provide SRE, monitoring and incident response engagements." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}


export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const key = decodeURIComponent(slug);
  const s = SERVICES[key];
  if (!s) return notFound();

  return (
    <main className="min-h-screen py-16 relative" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e0e7ff 40%, #fbeaff 70%, #e0f2fe 100%)' }}>
      {/* Elegant animated accent for Service detail page */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-200/40 via-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-purple-300/40 via-pink-200/30 to-cyan-100/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.2s' }}></div>
      </div>
      <div className="max-w-[900px] mx-auto px-6">
        <div className="rounded-3xl shadow-2xl p-8 sm:p-12 border border-cyan-100/60 dark:border-neutral-800 bg-white dark:bg-neutral-900" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">{s.title}</h1>
              <p className="text-slate-900 dark:text-white mb-6 font-medium" style={{ letterSpacing: '0.01em' }}>{s.subtitle}</p>

              <h3 className="font-bold mb-3 text-cyan-700/90 tracking-wide uppercase">What we do</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {s.features.map((f, i) => (
                  <li key={i} className="rounded-md bg-slate-50 dark:bg-neutral-800 p-3 border border-cyan-100/60 dark:border-neutral-800 text-slate-900 dark:text-white font-semibold shadow-sm">{f}</li>
                ))}
              </ul>

              <div className="mb-6">
                <h3 className="font-bold mb-3 text-cyan-800 dark:text-cyan-300 tracking-wide uppercase">Frequently asked questions</h3>
                <div className="[&_.faq-q]:text-slate-900 [&_.faq-q]:dark:text-white [&_.faq-a]:text-slate-800 [&_.faq-a]:dark:text-slate-200">
                  <ServiceAccordion items={s.faqs} />
                </div>
              </div>

              <div className="mt-6">
                <Link href="/contact" className="inline-block px-5 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-bold shadow hover:from-blue-700 hover:to-cyan-700 transition">Contact us about this service</Link>
              </div>
            </div>

            <aside className="w-full lg:w-72">
              <div className="rounded-xl bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:bg-neutral-800 p-4 shadow-md">
                <h4 className="font-bold mb-3 text-cyan-700">Estimate calculator</h4>
                <EstimateWidget />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

// Client-only widgets moved to components; imported above.
