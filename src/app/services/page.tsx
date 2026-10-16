import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — Veriton",
  alternates: {
    canonical: "https://www.veriton.si/services",
  },
};

const services = [
  {
    name: "Android Development",
    desc: "Mobile products that feel native — fast, polished, and ready for the store.",
    detail: "Flutter, clean architecture, release pipelines, and ongoing care.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&h=560&q=80",
  },
  {
    name: "Web Development",
    desc: "Sites and apps with solid architecture, sharp UI, and room to grow.",
    detail: "React, Next.js, SEO, APIs, and maintainable frontends.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&h=560&q=80",
  },
  {
    name: "Shopify Development",
    desc: "Stores that convert — clear UX, dependable checkout, room to expand.",
    detail: "Themes, apps, headless storefronts, and migrations.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&h=560&q=80",
  },
  {
    name: "AI Development",
    desc: "Intelligent features and workflows — assistants, automation, and models that fit your product.",
    detail: "LLMs, agents, RAG, integrations, and production-ready AI UX.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&h=560&q=80",
  },
];

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#f7f6f3] py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">Services</p>
          <h1 className="font-display text-[2.75rem] sm:text-[3.75rem] leading-[1.05] tracking-[-0.03em] text-[#14181f]">
            Our services
          </h1>
          <div className="accent-rule mt-5 mb-5" />
          <p className="mb-14 max-w-lg text-[1.05rem] leading-relaxed text-[#5e6670]">
            Clear scope, careful build, and delivery you can rely on — across
            mobile, web, commerce, and AI.
          </p>
        </Reveal>

        <div className="service-showcase">
          {services.map((s, idx) => {
            const slug = s.name
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9\-]/g, "");
            return (
              <Reveal key={s.name} delay={idx * 80} className="h-full">
                <Link
                  prefetch={false}
                  href={`/services/${slug}`}
                  className="service-tile group"
                >
                  <div className="service-tile__media">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="service-tile__body">
                    <span className="service-tile__index">0{idx + 1}</span>
                    <h2 className="service-tile__title">{s.name}</h2>
                    <p className="service-tile__desc">{s.desc}</p>
                    <p className="mt-2 text-[0.8rem] text-[#7d8b9a]">{s.detail}</p>
                    <span className="service-tile__cta">
                      Learn more <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}
