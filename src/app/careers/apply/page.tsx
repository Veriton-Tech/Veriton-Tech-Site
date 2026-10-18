import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ApplyForm from "@/components/ApplyForm";

const description =
  "Apply to join Veriton in Berlin. Submit your CV, LinkedIn, and GitHub for open roles including AI Engineer.";

export const metadata: Metadata = {
  title: "Apply",
  description,
  alternates: {
    canonical: "/careers/apply",
  },
  openGraph: {
    title: "Apply | Veriton",
    description,
    url: "https://www.veriton.si/careers/apply",
    type: "website",
    siteName: "Veriton",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply | Veriton",
    description,
  },
  robots: {
    index: false,
    follow: true,
  },
};

type PageProps = {
  searchParams: Promise<{ role?: string }>;
};

export default async function CareersApplyPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const role = (params.role || "AI Engineer").trim() || "AI Engineer";

  return (
    <main className="w-full bg-[#f7f6f3]">
      <section className="relative overflow-hidden bg-[#0c1826] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(44,74,110,0.35),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
          <Link
            href="/careers"
            className="mb-8 inline-flex items-center gap-2 text-[0.9rem] text-[#9eacbc] transition-colors hover:text-white"
          >
            <span aria-hidden>←</span> Back to careers
          </Link>
          <p className="mb-3 text-[0.9rem] text-[#9eacbc]">Application</p>
          <h1 className="font-display max-w-2xl text-[2.75rem] sm:text-[3.75rem] leading-[1.05] tracking-[-0.03em]">
            Apply — {role}
          </h1>
          <div className="mt-5 mb-5 h-px w-14 bg-white/35" />
          <p className="max-w-xl text-[1.08rem] leading-relaxed text-[#b8c0ca]">
            Share your CV, LinkedIn, and GitHub. We&apos;ll review your
            application and get back to you.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-[640px] px-5 sm:px-8">
          <p className="section-label mb-3">Your details</p>
          <h2 className="font-display text-[1.75rem] tracking-[-0.02em] text-[#14181f] mb-8">
            Application form
          </h2>
          <ApplyForm role={role} />
        </div>
      </section>
    </main>
  );
}
