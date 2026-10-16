"use client";

import BannerCarousel from "./BannerCarousel";
import TeamCarousel from "../components/TeamCarousel";
import Reveal from "../components/Reveal";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import VelocityMarquee from "@/components/motion/VelocityMarquee";
import TiltCard from "@/components/motion/TiltCard";
import ProcessTimeline from "@/components/motion/ProcessTimeline";
import { WordReveal } from "@/components/motion/LetterReveal";
import Magnetic from "@/components/motion/Magnetic";

const tickerItems = [
  "Android",
  "Web",
  "Shopify",
  "AI Development",
  "Design",
  "Mobile",
];

const services = [
  {
    name: "Android Development",
    desc: "Mobile products that feel native — fast, polished, and ready for the store.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&h=560&q=80",
  },
  {
    name: "Web Development",
    desc: "Sites and apps with solid architecture, sharp UI, and room to grow.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&h=560&q=80",
  },
  {
    name: "Shopify Development",
    desc: "Commerce experiences built for conversion, clarity, and lasting growth.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&h=560&q=80",
  },
  {
    name: "AI Development",
    desc: "Intelligent product features — assistants, automation, and practical AI workflows.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&h=560&q=80",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Discover",
    desc: "We learn the goals, constraints, and what success actually looks like for you.",
  },
  {
    step: "2",
    title: "Design & build",
    desc: "We shape the product together — with clear checkpoints and no black boxes.",
  },
  {
    step: "3",
    title: "Launch & refine",
    desc: "Ship with confidence, then keep improving with support after go-live.",
  },
];

export default function Home() {
  return (
    <div>
      <BannerCarousel />

      <section
        id="about-veriton"
        className="border-b border-[#d9dde3] bg-white py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <Reveal>
            <p className="section-label mb-3">About Veriton</p>
            <h2 className="font-display max-w-3xl text-[2rem] sm:text-[2.6rem] leading-[1.12] tracking-[-0.03em] text-[#14181f]">
              Veriton is a product &amp; engineering studio
            </h2>
            <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-[#5e6670]">
              We help businesses and startups ship Android apps, web products,
              Shopify stores, and practical AI features — from discovery through
              launch and ongoing support. Clear communication, custom delivery,
              no black boxes.
            </p>
            <ul className="mt-6 grid max-w-2xl grid-cols-1 gap-2 text-[0.95rem] text-[#14181f] sm:grid-cols-2">
              <li className="border-l-2 border-[#12263a] pl-3">Android development</li>
              <li className="border-l-2 border-[#12263a] pl-3">Web development</li>
              <li className="border-l-2 border-[#12263a] pl-3">Shopify development</li>
              <li className="border-l-2 border-[#12263a] pl-3">AI development</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="ticker" aria-label="Capabilities">
        <VelocityMarquee className="ticker-track-motion" baseSpeed={42}>
          {tickerItems.map((item) => (
            <span key={item} className="ticker-item">
              {item}
              <span className="ticker-sep">/</span>
            </span>
          ))}
        </VelocityMarquee>
      </section>

      <section className="bg-[#f7f6f3] py-20 sm:py-28">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="section-label mb-3">Services</p>
                <h2 className="font-display text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-[#14181f]">
                  What we build
                </h2>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-[#5e6670]">
                  Four focused practices — from mobile and web to commerce and
                  AI — delivered with care from brief to launch.
                </p>
              </div>
              <Link
                href="/services"
                className="btn-outline self-start md:self-auto shrink-0"
              >
                All services
              </Link>
            </div>
          </Reveal>

          <div className="service-showcase mt-12 sm:mt-14" style={{ perspective: 1200 }}>
            {services.map((s, idx) => {
              const slug = s.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9\-]/g, "");

              return (
                <Reveal key={s.name} delay={idx * 90} variant="up" className="h-full">
                  <TiltCard className="h-full">
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
                        <h3 className="service-tile__title">{s.name}</h3>
                        <p className="service-tile__desc">{s.desc}</p>
                        <span className="service-tile__cta">
                          Explore <span aria-hidden>→</span>
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0c1826] py-20 sm:py-28 text-white">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <Reveal>
            <p className="mb-3 text-[0.9rem] text-[#9eacbc]">How we work</p>
            <h2 className="font-display max-w-lg text-[2.4rem] sm:text-[3.1rem] leading-[1.1] tracking-[-0.025em]">
              Simple process. Serious craft.
            </h2>
          </Reveal>

          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <Reveal className="mx-auto mb-10 max-w-lg text-center" variant="fade">
            <p className="section-label mb-3">Team</p>
            <h2 className="font-display text-[2.4rem] sm:text-[3rem] leading-[1.1] tracking-[-0.025em] text-[#14181f]">
              The people behind the work
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-[#5e6670]">
              A small team that stays close to the product — and to you.
            </p>
          </Reveal>
          <Reveal delay={120} variant="scale">
            <TeamCarousel animateOnView />
          </Reveal>
        </div>
      </section>

      <section className="project-band py-16 sm:py-20 relative overflow-hidden">
        <motion.div
          className="project-band__ornament"
          aria-hidden
          animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="project-band__inner mx-auto max-w-[1120px] px-5 sm:px-8 relative z-10">
          <Reveal>
            <div>
              <p className="section-label mb-3">Next step</p>
              <h2 className="font-display text-[2.2rem] sm:text-[2.85rem] leading-[1.12] tracking-[-0.03em] text-[#14181f] max-w-xl">
                <WordReveal text="Have a project in mind?" />
              </h2>
              <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-[#5e6670]">
                Share a few details about what you&apos;re building. We&apos;ll
                come back with a clear path forward — no pressure, no fluff.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Magnetic strength={8}>
                <Link
                  href="/contact"
                  className="btn-primary magnetic-sheen magnetic-ripple"
                  onClick={(e) => {
                    const el = e.currentTarget;
                    el.classList.remove("is-rippling");
                    void el.offsetWidth;
                    el.classList.add("is-rippling");
                  }}
                >
                  Start a conversation
                </Link>
              </Magnetic>
              <a
                href="mailto:veritoninfo@gmail.com"
                className="text-[0.95rem] text-[#2c4a6e] underline-offset-4 hover:underline"
              >
                or email us directly
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
