import type { Metadata } from "next";
import type { Language } from "@/lib/translations";

const baseUrl = "https://www.fp-architect.com";

// Pages with a Filipino version at /fil/... . Everywhere else, other languages stay
// client-side only (one URL, English to Google).
export const filipinoPaths = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/guides/building-permit-requirements-baguio-city",
  "/guides/house-construction-cost-baguio",
] as const;

export function isFilipinoPath(pathname: string) {
  return pathname === "/fil" || pathname.startsWith("/fil/");
}

/** "/about" -> "/fil/about"; null when the page has no Filipino version. */
export function toFilipinoPath(pathname: string): string | null {
  if (isFilipinoPath(pathname)) return pathname;
  if (!(filipinoPaths as readonly string[]).includes(pathname)) return null;
  return pathname === "/" ? "/fil" : `/fil${pathname}`;
}

/** "/fil/about" -> "/about" */
export function toEnglishPath(pathname: string) {
  if (!isFilipinoPath(pathname)) return pathname;
  return pathname.slice("/fil".length) || "/";
}

/** Points links at the Filipino page when the visitor reads Filipino and one exists. */
export function localizeHref(href: string, lang: Language) {
  return lang === "fil" ? toFilipinoPath(href) ?? href : href;
}

/** canonical + hreflang links for a page that exists in English and Filipino. */
export function languageAlternates(englishPath: string, current: "en" | "fil") {
  const en = englishPath === "/" ? baseUrl : `${baseUrl}${englishPath}`;
  const fil = `${baseUrl}${toFilipinoPath(englishPath)}`;
  return {
    canonical: current === "en" ? en : fil,
    languages: { en, fil, "x-default": en },
  };
}

/** Metadata for the /fil version of an English page. */
export function filipinoMetadata(englishPath: string, title: string, description: string, image = "/images/og/default.jpg"): Metadata {
  const alternates = languageAlternates(englishPath, "fil");
  return {
    title,
    description,
    alternates,
    openGraph: {
      type: "website",
      locale: "fil_PH",
      siteName: "FPA Design Consultancy",
      title,
      description,
      url: alternates.canonical,
      images: [{ url: image, width: 1200, height: 630 }],
    },
  };
}

/** BreadcrumbList for a /fil page ("Tahanan" > page). */
export function filipinoBreadcrumb(englishPath: string, name?: string) {
  const items = [{ "@type": "ListItem", position: 1, name: "Tahanan", item: `${baseUrl}/fil` }];
  if (name) items.push({ "@type": "ListItem", position: 2, name, item: `${baseUrl}${toFilipinoPath(englishPath)}` });
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}
