import type { MetadataRoute } from "next";

const routes = ["", "/about", "/services", "/industries", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route, index) => ({
    url: `https://platinummanpowerservices.com${route}`,
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
