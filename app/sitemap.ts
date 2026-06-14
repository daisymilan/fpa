import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fp-architect.com";

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/portfolio`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...projectPages];
}
