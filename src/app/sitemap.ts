import type { MetadataRoute } from "next";

const baseUrl = "https://farhananalyst.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-13"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
