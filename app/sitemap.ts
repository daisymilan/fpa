import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";

const baseUrl = "https://www.fp-architect.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-06-22"),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-06-22"),
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-06-22"),
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date("2026-06-22"),
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date("2026-06-22"),
    priority: 0.7,
    changeFrequency: "monthly" as const,
    images: project.images.map((img) => `${baseUrl}${img}`),
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
