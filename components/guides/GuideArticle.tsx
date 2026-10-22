import Link from "next/link";
import type { Guide } from "@/lib/guides";
import type { ServiceData } from "@/lib/services";

const baseUrl = "https://www.fp-architect.com";

export interface GuideLabels {
  home: string;
  homeHref: string;
  guides: string;
  updated: string;
  minRead: string;
  commonQuestions: string;
  readNext: string;
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
  contactHref: string;
  dateLocale: string;
}

export const englishGuideLabels: GuideLabels = {
  home: "Home",
  homeHref: "/",
  guides: "Guides",
  updated: "Updated",
  minRead: "min read",
  commonQuestions: "Common Questions",
  readNext: "Read Next",
  ctaHeading: "Planning Your Build?",
  ctaText: "Talk to a licensed architect about your lot, your budget and your timeline. The first consultation is free.",
  ctaButton: "Book a Consultation",
  contactHref: "/contact",
  dateLocale: "en-PH",
};

export const filipinoGuideLabels: GuideLabels = {
  home: "Tahanan",
  homeHref: "/fil",
  guides: "Mga Gabay",
  updated: "In-update",
  minRead: "minutong basahin",
  commonQuestions: "Mga Karaniwang Tanong",
  readNext: "Basahin Din",
  ctaHeading: "Nagpaplano Kayong Magpatayo?",
  ctaText: "Makipag-usap sa lisensyadong arkitekto tungkol sa inyong lote, badyet at timeline. Libre ang unang konsultasyon.",
  ctaButton: "Mag-book ng Konsultasyon",
  contactHref: "/fil/contact",
  dateLocale: "fil-PH",
};

function formatDate(iso: string, locale: string) {
  return new Date(`${iso}T00:00:00+08:00`).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Manila",
  });
}

interface Props {
  guide: Guide;
  /** Path of this page, e.g. "/guides/x" or "/fil/guides/x". */
  path: string;
  inLanguage: "en" | "fil";
  labels: GuideLabels;
  /** Link to the same guide in the other language, when it exists. */
  languageLink?: { href: string; label: string };
  relatedServices?: ServiceData[];
}

export default function GuideArticle({ guide, path, inLanguage, labels, languageLink, relatedServices = [] }: Props) {
  const url = `${baseUrl}${path}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: guide.published,
    dateModified: guide.updated,
    inLanguage,
    mainEntityOfPage: url,
    image: `${baseUrl}/images/og/default.jpg`,
    author: { "@id": `${baseUrl}/#business` },
    publisher: { "@id": `${baseUrl}/#business` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.home, item: `${baseUrl}${labels.homeHref === "/" ? "" : labels.homeHref}` },
      { "@type": "ListItem", position: 2, name: labels.guides, item: `${baseUrl}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
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
            <Link href={labels.homeHref} className="hover:text-[#FF3B30] transition-colors">{labels.home}</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-[#FF3B30] transition-colors">{labels.guides}</Link>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            {guide.title}
          </h1>
          <p className="text-fg-faint mt-6 text-xs tracking-widest uppercase">
            FPA Design Consultancy · {labels.updated} {formatDate(guide.updated, labels.dateLocale)} · {guide.readingMinutes} {labels.minRead}
          </p>
          {languageLink && (
            <Link
              href={languageLink.href}
              className="inline-block mt-4 text-[#FF3B30] text-xs font-semibold tracking-[0.15em] uppercase hover:underline underline-offset-4"
            >
              {languageLink.label} →
            </Link>
          )}
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
              {labels.commonQuestions}
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
            <p className="text-fg-dim text-xs font-semibold tracking-[0.25em] uppercase mb-4">{labels.readNext}</p>
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
            {labels.ctaHeading}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">{labels.ctaText}</p>
          <Link
            href={labels.contactHref}
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#FF3B30] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-100 transition-colors"
          >
            {labels.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
