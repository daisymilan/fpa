import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuideBySlug } from "@/lib/guides";
import { getServiceBySlug, ServiceData } from "@/lib/services";
import { languageAlternates, toFilipinoPath } from "@/lib/localeRoutes";
import GuideArticle, { englishGuideLabels } from "@/components/guides/GuideArticle";

interface Props {
  params: Promise<{ slug: string }>;
}

const baseUrl = "https://www.fp-architect.com";

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  const path = `/guides/${slug}`;
  const url = `${baseUrl}${path}`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: toFilipinoPath(path) ? languageAlternates(path, "en") : { canonical: url },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.metaDescription,
      url,
      publishedTime: guide.published,
      modifiedTime: guide.updated,
      images: [{ url: "/images/og/default.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const path = `/guides/${slug}`;
  const filipinoPath = toFilipinoPath(path);
  const relatedServices = guide.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is ServiceData => s !== undefined);

  return (
    <GuideArticle
      guide={guide}
      path={path}
      inLanguage="en"
      labels={englishGuideLabels}
      languageLink={filipinoPath ? { href: filipinoPath, label: "Basahin sa Filipino" } : undefined}
      relatedServices={relatedServices}
    />
  );
}
