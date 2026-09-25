import type { MetadataRoute } from "next";
import { nav, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((n) => ({
    url: `${siteConfig.url}${n.href === "/" ? "" : n.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: n.href === "/" ? 1 : 0.8,
  }));
}
