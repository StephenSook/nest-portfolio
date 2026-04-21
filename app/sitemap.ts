import type { MetadataRoute } from "next";

const SITE_URL = "https://nest-portfolio-pi.vercel.app";

// Bump manually on meaningful content changes; avoids lastmod churn from minor deploys.
const HOME_LAST_MODIFIED = new Date("2026-04-20");
const NEST_LAST_MODIFIED = new Date("2026-04-20");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/nest`,
      lastModified: NEST_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
