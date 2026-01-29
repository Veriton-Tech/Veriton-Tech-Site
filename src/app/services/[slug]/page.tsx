
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
    <main className="min-h-screen py-16 relative bg-white/60 backdrop-blur-3xl">
      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <div className="rounded-3xl shadow-lg p-8 sm:p-12 border border-slate-200 bg-white">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold mb-2 text-slate-800">{s.title}</h1>
              <p className="text-slate-600 mb-6 font-medium" style={{ letterSpacing: '0.01em' }}>{s.subtitle}</p>

              <h3 className="font-bold mb-3 text-slate-800 tracking-wide uppercase text-sm">What we do</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {s.features.map((f, i) => (
                  <li key={i} className="rounded-md bg-slate-50 p-3 border border-slate-200 text-slate-900 font-semibold shadow-sm">{f}</li>
                ))}
              </ul>

              <div className="mb-6">
                <h3 className="font-bold mb-3 text-slate-800 tracking-wide uppercase text-sm">Frequently asked questions</h3>
                <div className="[&_.faq-q]:text-slate-900 [&_.faq-a]:text-slate-700">
                  <ServiceAccordion items={s.faqs} />
                </div>
              </div>

              <div className="mt-6">
                <Link href="/contact" className="inline-block px-5 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-bold shadow hover:from-blue-700 hover:to-cyan-700 transition">Contact us about this service</Link>
              </div>
            </div>

            <aside className="w-full lg:w-72">
              <div className="rounded-xl bg-white border border-slate-200 p-4 shadow-md">
                <h4 className="font-bold mb-3 text-slate-800">Estimate calculator</h4>
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
