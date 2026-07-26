import React from "react";
import Link from "next/link";
import Image from "next/image";
import ServiceAccordion from "@/components/ServiceAccordion";
import EstimateWidget from "@/components/EstimateWidget";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.atveriton.com/services",
  },
};

type Service = {
  title: string;
  subtitle: string;
  label: string;
  image: string;
  features: string[];
  faqs: { q: string; a: string }[];
};

const SERVICES: Record<string, Service> = {
  "android-development": {
    title: "Android Development",
    label: "Mobile",
    subtitle: "Custom, performant Android apps built with modern architecture.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&h=700&q=80",
    features: [
      "Flutter with Material & Cupertino widgets",
      "Clean Architecture with modular code & testing",
      "Play Store & App Store release with CI/CD",
      "High-performance UI, optimization & profiling",
    ],
    faqs: [
      {
        q: "How long does an app take to build?",
        a: "Typical timelines are 8–16 weeks for a production-ready app depending on complexity.",
      },
      {
        q: "Do you provide post-launch support?",
        a: "Yes — we offer maintenance, monitoring, and feature roadmaps after launch.",
      },
    ],
  },
  "web-development": {
    title: "Web Development",
    label: "Web",
    subtitle: "Fast, accessible and maintainable web apps and marketing sites.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&h=700&q=80",
    features: [
      "React / Next.js architecture",
      "Responsive & accessible UI",
      "SEO-friendly server rendering",
      "Integrations with APIs and databases",
    ],
    faqs: [
      {
        q: "Which frameworks do you use?",
        a: "We primarily use React and Next.js but can work with other stacks on request.",
      },
      {
        q: "Can you migrate an existing site?",
        a: "Yes — we support migrations, performance audits and progressive rewrites.",
      },
    ],
  },
  "shopify-development": {
    title: "Shopify Development",
    label: "Commerce",
    subtitle: "Custom Shopify stores, theme work and headless commerce setups.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&h=700&q=80",
    features: [
      "Theme customization & Liquid",
      "App integrations and private apps",
      "Headless Shopify with Storefront API",
      "Payment and shipping workflows",
    ],
    faqs: [
      {
        q: "Do you build custom themes?",
        a: "Yes — from small tweaks to full custom themes and headless storefronts.",
      },
      {
        q: "Can you help with migrations?",
        a: "We can migrate products, customers, and history to Shopify from most platforms.",
      },
    ],
  },
  "ai-development": {
    title: "AI Development",
    label: "Intelligence",
    subtitle:
      "Practical AI features — assistants, automation, and models wired into real products.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&h=700&q=80",
    features: [
      "LLM apps, agents & workflow automation",
      "RAG systems with your private data",
      "API integrations & evaluation pipelines",
      "Secure, production-ready AI UX",
    ],
    faqs: [
      {
        q: "Do you build custom AI or use existing models?",
        a: "Both — we design around your goals using proven models, fine-tuning, or custom pipelines when it earns its keep.",
      },
      {
        q: "Can AI features plug into our existing product?",
        a: "Yes. We integrate with your stack, data sources, and auth so AI feels native — not bolted on.",
      },
    ],
  },
  "cloud-services": {
    title: "Cloud Services",
    label: "Infrastructure",
    subtitle: "Scalable infrastructure, cost optimization and secure deployments.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&h=700&q=80",
    features: [
      "AWS / GCP / Azure architecture",
      "Containerization & Kubernetes",
      "CI/CD pipelines & IaC (Terraform)",
      "Monitoring, backups & security reviews",
    ],
    faqs: [
      {
        q: "Which cloud provider do you recommend?",
        a: "It depends on your needs — we help choose the best fit and can work across providers.",
      },
      {
        q: "Do you manage on-call or SRE tasks?",
        a: "Yes, we provide SRE, monitoring and incident response engagements.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const key = decodeURIComponent(slug);
  const s = SERVICES[key];
  if (!s) return notFound();

  const others = Object.entries(SERVICES)
    .filter(([id]) => id !== key && id !== "cloud-services")
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f7f6f3]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c1826] text-white">
        <div className="absolute inset-0">
          <Image
            src={s.image}
            alt=""
            fill
            unoptimized
            className="object-cover opacity-35"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1826] via-[#0c1826]/88 to-[#0c1826]/55" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-[0.9rem] text-[#9eacbc] transition-colors hover:text-white"
          >
            <span aria-hidden>←</span> All services
          </Link>

          <p className="mb-3 text-[0.9rem] text-[#9eacbc]">{s.label}</p>
          <h1 className="font-display max-w-2xl text-[2.6rem] sm:text-[3.5rem] leading-[1.05] tracking-[-0.03em]">
            {s.title}
          </h1>
          <div className="mt-5 mb-5 h-px w-14 bg-white/35" />
          <p className="max-w-xl text-[1.05rem] leading-relaxed text-[#b8c0ca]">
            {s.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn-primary-light">
              Talk about this project
            </Link>
            <a href="#estimate" className="btn-outline-light">
              Get an estimate
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="section-label mb-3">Capabilities</p>
            <h2 className="font-display text-[1.9rem] sm:text-[2.2rem] tracking-[-0.02em] text-[#14181f] mb-6">
              What we deliver
            </h2>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {s.features.map((f, i) => (
                <li
                  key={i}
                  className="border border-[#d9dde3] bg-white p-5 transition-colors hover:border-[#c5ccd6]"
                >
                  <span className="mb-2 block text-[0.75rem] text-[#7d8b9a]">
                    0{i + 1}
                  </span>
                  <p className="text-[0.95rem] font-medium leading-snug text-[#14181f]">
                    {f}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-14">
              <p className="section-label mb-3">FAQ</p>
              <h2 className="font-display text-[1.9rem] sm:text-[2.2rem] tracking-[-0.02em] text-[#14181f] mb-6">
                Common questions
              </h2>
              <div className="border border-[#d9dde3] bg-white px-5 sm:px-6">
                <ServiceAccordion items={s.faqs} />
              </div>
            </div>

            <div className="mt-12 border border-[#d9dde3] bg-white p-7 sm:p-8">
              <h3 className="font-display text-[1.6rem] tracking-[-0.02em] text-[#14181f]">
                Ready to start?
              </h3>
              <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-[#5e6670]">
                Tell us about your goals — we&apos;ll respond with a clear next
                step and timeline.
              </p>
              <Link href="/contact" className="btn-primary mt-6 inline-flex">
                Contact us about this service
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div
              id="estimate"
              className="border border-[#d9dde3] bg-white p-6 sm:p-7 lg:sticky lg:top-24"
            >
              <p className="section-label mb-2">Planning</p>
              <h3 className="font-display text-[1.65rem] tracking-[-0.02em] text-[#14181f] mb-2">
                Estimate calculator
              </h3>
              <p className="mb-6 text-[0.9rem] leading-relaxed text-[#5e6670]">
                A rough sense of scope — not a final quote. We&apos;ll refine it
                together.
              </p>
              <EstimateWidget />
            </div>
          </aside>
        </div>
      </section>

      {/* Other services */}
      {others.length > 0 ? (
        <section className="border-t border-[#d9dde3] bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="section-label mb-2">Explore</p>
                <h2 className="font-display text-[1.8rem] tracking-[-0.02em] text-[#14181f]">
                  Other services
                </h2>
              </div>
              <Link
                href="/services"
                className="text-[0.9rem] text-[#12263a] transition-opacity hover:opacity-70"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {others.map(([id, svc]) => (
                <Link
                  key={id}
                  href={`/services/${id}`}
                  className="group border border-[#d9dde3] bg-[#f7f6f3] p-5 transition-colors hover:border-[#c5ccd6] hover:bg-white"
                >
                  <span className="text-[0.8rem] text-[#7d8b9a]">{svc.label}</span>
                  <h3 className="mt-2 font-display text-[1.25rem] tracking-[-0.02em] text-[#14181f] group-hover:text-[#12263a]">
                    {svc.title}
                  </h3>
                  <span className="mt-4 inline-block text-[0.88rem] text-[#12263a] opacity-70 transition-all group-hover:opacity-100 group-hover:translate-x-1">
                    View →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
