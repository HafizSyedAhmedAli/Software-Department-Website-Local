import type { MetadataRoute } from "next";

const BASE = "https://sw.quest.edu.pk";

const ROUTES: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1.0, freq: "weekly" },
  { path: "/faculty", priority: 0.9, freq: "monthly" },
  { path: "/staff", priority: 0.7, freq: "monthly" },
  { path: "/courses", priority: 0.9, freq: "monthly" },
  { path: "/research", priority: 0.8, freq: "monthly" },
  { path: "/alumni", priority: 0.8, freq: "monthly" },
  { path: "/events", priority: 0.9, freq: "weekly" },
  { path: "/gallery", priority: 0.7, freq: "monthly" },
  { path: "/downloads", priority: 0.7, freq: "monthly" },
  { path: "/contact", priority: 0.8, freq: "monthly" },
  { path: "/obe/vision", priority: 0.6, freq: "monthly" },
  { path: "/obe/peos", priority: 0.6, freq: "monthly" },
  { path: "/obe/plos", priority: 0.6, freq: "monthly" },
  { path: "/obe/clos", priority: 0.6, freq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map(({ path, priority, freq }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
