import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";

const baseUrl = "https://www.fp-architect.com";
const title = "Guides for Home Builders | FPA Design Consultancy";
const description =
  "Practical guides to building in the Philippines: building permits in Baguio City, construction costs, and building a house from abroad as an OFW.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${baseUrl}/guides` },
  openGraph: {
    title,
    description,
    url: `${baseUrl}/guides`,
    images: [{ url: "/images/og/default.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/guides` },
  ],
};

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6 text-xs text-fg-faint tracking-widest uppercase">
            <Link href="/" className="hover:text-[#FF3B30] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FF3B30]">Guides</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">Guides</span>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            Building in the
            <br />
            <span className="text-[#FF3B30]">Philippines</span>
          </h1>
          <p className="text-fg-muted mt-6 max-w-2xl text-sm leading-relaxed">
            Plain answers to the questions clients ask us most: what a building permit needs, what a house
            really costs, and how to build at home while you work abroad.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]" style={{ background: "var(--gap-color)" }}>
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group bg-bg p-8 hover:bg-surface transition-colors duration-200 relative flex flex-col"
              >
                <div className="absolute top-0 left-0 w-0 h-px bg-[#FF3B30] group-hover:w-full transition-all duration-500" />
                <span className="text-fg-faint text-xs tracking-widest uppercase mb-4">
                  {guide.readingMinutes} min read
                </span>
                <h2
                  className="display-heading text-fg group-hover:text-[#FF3B30] transition-colors duration-200 mb-4"
                  style={{ fontSize: "1.25rem", letterSpacing: "0.04em" }}
                >
                  {guide.title}
                </h2>
                <p className="text-fg-dim text-sm leading-relaxed mb-6 flex-1">{guide.excerpt}</p>
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.15em] uppercase">Read the Guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
