import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guides, getGuideBySlug } from "@/lib/guides";
import { getServiceBySlug, ServiceData } from "@/lib/services";

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
  const url = `${baseUrl}/guides/${slug}`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
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

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00+08:00`).toLocaleDateString("en-PH", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Manila",
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const url = `${baseUrl}/guides/${slug}`;
  const relatedServices = guide.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is ServiceData => s !== undefined);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: guide.published,
    dateModified: guide.updated,
    inLanguage: "en",
    mainEntityOfPage: url,
    image: `${baseUrl}/images/og/default.jpg`,
    author: { "@id": `${baseUrl}/#business` },
    publisher: { "@id": `${baseUrl}/#business` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-fg-faint tracking-widest uppercase">
            <Link href="/" className="hover:text-[#FF3B30] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-[#FF3B30] transition-colors">Guides</Link>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            {guide.title}
          </h1>
          <p className="text-fg-faint mt-6 text-xs tracking-widest uppercase">
            FPA Design Consultancy · Updated {formatDate(guide.updated)} · {guide.readingMinutes} min read
          </p>
          <p className="text-fg-muted mt-8 text-base leading-relaxed">{guide.intro}</p>
        </div>
      </section>

      {/* Body */}
      <article className="section-padding bg-bg">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">
          {guide.sections.map((section) => {
            const ListTag = section.ordered ? "ol" : "ul";
            return (
              <section key={section.heading}>
                <h2 className="display-heading text-fg mb-5" style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)", letterSpacing: "0.03em" }}>
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p) => (
                  <p key={p} className="text-fg-muted text-sm leading-relaxed mb-4">{p}</p>
                ))}
                {section.list && (
                  <ListTag className={`${section.ordered ? "list-decimal" : "list-disc"} pl-5 space-y-2 text-fg-muted text-sm leading-relaxed marker:text-[#FF3B30]`}>
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ListTag>
                )}
                {section.note && (
                  <p
                    className="mt-5 p-5 text-fg-dim text-sm leading-relaxed"
                    style={{ border: "1px solid var(--border-strong)", borderLeft: "2px solid #FF3B30" }}
                  >
                    {section.note}
                  </p>
                )}
              </section>
            );
          })}

          <section>
            <h2 className="display-heading text-fg mb-6" style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)", letterSpacing: "0.03em" }}>
              Common Questions
            </h2>
            <div className="space-y-6">
              {guide.faqs.map((faq) => (
                <div key={faq.question} className="pb-6" style={{ borderBottom: "1px solid var(--border)" }}>
                  <h3 className="text-fg text-base font-semibold mb-2">{faq.question}</h3>
                  <p className="text-fg-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-fg-dim text-xs font-semibold tracking-[0.25em] uppercase mb-4">Read Next</p>
            <ul className="space-y-3">
              {guide.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-fg-muted text-sm hover:text-[#FF3B30] transition-colors">
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#FF3B30]" />
              <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">How We Can Help</span>
            </div>
            <h2 className="display-heading text-fg mb-10" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]" style={{ background: "var(--gap-color)" }}>
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-bg p-8 hover:bg-surface transition-colors duration-200 relative"
                >
                  <div className="absolute top-0 left-0 w-0 h-px bg-[#FF3B30] group-hover:w-full transition-all duration-500" />
                  <h3
                    className="display-heading text-fg group-hover:text-[#FF3B30] transition-colors duration-200 mb-3"
                    style={{ fontSize: "1rem", letterSpacing: "0.07em" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-fg-dim text-xs leading-relaxed mb-5">{s.description}</p>
                  <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.15em] uppercase">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#FF3B30]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="display-heading text-white mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Planning Your Build?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">
            Talk to a licensed architect about your lot, your budget and your timeline. The first consultation
            is free.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#FF3B30] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-100 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
