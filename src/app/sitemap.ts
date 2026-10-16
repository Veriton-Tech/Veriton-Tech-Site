import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/careers", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const services = SITE.services.map((service) => ({
    path: service.path,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [...core, ...services].map((entry) => ({
    url: `${SITE.url}${entry.path === "/" ? "" : entry.path}`,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
