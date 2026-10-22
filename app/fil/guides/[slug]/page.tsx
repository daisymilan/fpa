import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { filipinoGuides, getFilipinoGuideBySlug } from "@/lib/guidesFil";
import { filipinoMetadata } from "@/lib/localeRoutes";
import GuideArticle, { filipinoGuideLabels } from "@/components/guides/GuideArticle";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return filipinoGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getFilipinoGuideBySlug(slug);
  if (!guide) return {};
  return filipinoMetadata(`/guides/${slug}`, guide.metaTitle, guide.metaDescription);
}

export default async function FilipinoGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getFilipinoGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <GuideArticle
      guide={guide}
      path={`/fil/guides/${slug}`}
      inLanguage="fil"
      labels={filipinoGuideLabels}
      languageLink={{ href: `/guides/${slug}`, label: "Read in English" }}
    />
  );
}
