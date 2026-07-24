import type { MetadataRoute } from "next";

/**
 * Tells search engines they may crawl the whole site (including the favicon,
 * which Google requires to be crawlable before it will show it in results),
 * and points them at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The embedded CMS studio should not be indexed
        disallow: ["/admin", "/admin/"],
      },
    ],
    sitemap: "https://sw.quest.edu.pk/sitemap.xml",
  };
}
