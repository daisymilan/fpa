import { MetadataRoute } from "next";
import { projects, getLastModified, getLatestProjectDate } from "@/lib/projects";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { guides } from "@/lib/guides";
import { filipinoPaths, languageAlternates } from "@/lib/localeRoutes";

const baseUrl = "https://www.fp-architect.com";

// Last real content change for pages that aren't driven by data files. Update a date when that
// page's content changes, so Google knows what to recrawl.
const pageUpdated = {
  home: "2026-10-22",
  about: "2026-10-21",
  services: "2026-10-21",
  portfolio: "2026-10-21",
  contact: "2026-10-21",
  locations: "2026-10-20",
  buildFromAbroad: "2026-10-21",
  guides: "2026-10-22",
};

/** Home and portfolio also change whenever a project is added. */
const latest = (...dates: string[]) => new Date(dates.sort().at(-1)!);

export default function sitemap(): MetadataRoute.Sitemap {
  const latestProjectDate = getLatestProjectDate();
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: latest(latestProjectDate, pageUpdated.home),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(pageUpdated.about),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(pageUpdated.services),
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: latest(latestProjectDate, pageUpdated.portfolio),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(pageUpdated.contact),
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service.updated),
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(getLastModified(project)),
    priority: 0.7,
    changeFrequency: "monthly" as const,
    images: project.images.map((img) => `${baseUrl}${img}`),
    ...(project.video && {
      videos: [
        {
          title: project.video.title,
          description: project.video.description,
          thumbnail_loc: `${baseUrl}${project.video.poster}`,
          content_loc: `${baseUrl}${project.video.src}`,
          ...(project.video.youtubeId && { player_loc: `https://www.youtube.com/embed/${project.video.youtubeId}` }),
          ...(project.video.durationSeconds && { duration: project.video.durationSeconds }),
          ...(project.video.uploadDate && { publication_date: project.video.uploadDate }),
        },
      ],
    }),
  }));

  const locationIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(pageUpdated.locations),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/build-from-abroad`,
      lastModified: new Date(pageUpdated.buildFromAbroad),
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];

  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(loc.updated),
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const guidePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/guides`, lastModified: new Date(pageUpdated.guides), priority: 0.7, changeFrequency: "monthly" },
    ...guides.map((g) => ({
      url: `${baseUrl}/guides/${g.slug}`,
      lastModified: new Date(g.updated),
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];

  // English pages that have a Filipino version list both, and each Filipino page is added.
  const withLanguages = [...staticPages, ...guidePages].flatMap((page) => {
    const path = page.url.slice(baseUrl.length) || "/";
    if (!(filipinoPaths as readonly string[]).includes(path)) return [page];
    const { languages } = languageAlternates(path, "en");
    const alternates = { languages: { en: languages.en, fil: languages.fil } };
    return [{ ...page, alternates }, { ...page, url: languages.fil, alternates }];
  });

  return [...withLanguages, ...servicePages, ...projectPages, ...locationIndexPage, ...locationPages];
}
