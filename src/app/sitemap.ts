import type { MetadataRoute } from "next";
import { categories, products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.domain,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...Object.values(categories).map((category) => ({
      url: `${siteConfig.domain}/${category.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...products.map((product) => ({
      url: `${siteConfig.domain}/${product.category}/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteConfig.domain}/contacto`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
