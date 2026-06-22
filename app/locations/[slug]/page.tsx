import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { locations, getLocationBySlug } from "@/lib/locations";
import { getProjectBySlug } from "@/lib/projects";
import { getServiceBySlug, ServiceData } from "@/lib/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `https://www.fp-architect.com/locations/${slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://www.fp-architect.com/locations/${slug}`,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const baseUrl = "https://www.fp-architect.com";

  const locationProjects = location.projectSlugs
    .map((s) => getProjectBySlug(s))
    .filter(Boolean);

  const locationServices = location.featuredServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is ServiceData => s !== undefined);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${baseUrl}/locations` },
      {
        "@type": "ListItem",
        position: 3,
        name: location.city,
        item: `${baseUrl}/locations/${slug}`,
      },
    ],
  };

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/locations/${slug}#service`,
    name: `FPA Design Consultancy — ${location.city}`,
    url: `${baseUrl}/locations/${slug}`,
    provider: { "@id": `${baseUrl}/#business` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: location.city,
      containedInPlace: {
        "@type": "Country",
        name: "Philippines",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Architectural Services in ${location.city}`,
      itemListElement: locationServices.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          "@id": `${baseUrl}/services/${s.slug}#service`,
          name: s.title,
          url: `${baseUrl}/services/${s.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6 text-xs text-fg-faint tracking-widest uppercase">
            <Link href="/" className="hover:text-[#FF3B30] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[#FF3B30] transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-[#FF3B30]">{location.city}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">
              {location.isHeadquarters ? "Headquarters" : "Service Area"}
            </span>
          </div>
          <h1
            className="display-heading text-fg"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            {location.h1}
          </h1>
          <p className="text-fg-muted mt-6 max-w-2xl text-sm leading-relaxed">{location.intro}</p>
          <p className="text-fg-faint mt-4 text-xs tracking-widest uppercase">
            {location.province} · {location.region} · Philippines
          </p>
        </div>
      </section>

      {/* Completed Projects */}
      {locationProjects.length > 0 && (
        <section className="section-padding bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-px bg-[#FF3B30]" />
                  <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">
                    Project Evidence
                  </span>
                </div>
                <h2
                  className="display-heading text-fg"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  Work Completed in {location.city}
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-fg-dim text-xs tracking-widest uppercase hover:text-fg transition-colors"
              >
                View All →
              </Link>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-[1px]"
              style={{ background: "var(--gap-color)" }}
            >
              {locationProjects.map(
                (p) =>
                  p && (
                    <Link
                      key={p.slug}
                      href={`/portfolio/${p.slug}`}
                      className="group block overflow-hidden bg-bg"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={p.coverImage}
                          alt={p.imageAlts[0] ?? `${p.name} — ${p.type} in ${p.location}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4 bg-surface group-hover:bg-surface-2 transition-colors duration-200 relative">
                        <div className="absolute top-0 left-0 w-0 h-px bg-[#FF3B30] group-hover:w-full transition-all duration-500" />
                        <span className="text-[#FF3B30] text-xs font-semibold tracking-widest uppercase block mb-1">
                          {p.type} · {p.location}
                        </span>
                        <h3
                          className="display-heading text-fg group-hover:text-[#FF3B30] transition-colors"
                          style={{ fontSize: "1rem" }}
                        >
                          {p.name}
                        </h3>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Design Context */}
      <section
        className="section-padding bg-bg-alt"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">
                  Design Context
                </span>
              </div>
              <h2
                className="display-heading text-fg"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Designing for {location.region}
              </h2>
            </div>
            <div>
              <p className="text-fg-muted text-sm leading-relaxed">{location.context}</p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FF3B30] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#E0352B] transition-colors duration-200"
                >
                  Start Your {location.city} Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      {locationServices.length > 0 && (
        <section
          className="section-padding bg-bg"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#FF3B30]" />
              <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">
                What We Offer
              </span>
            </div>
            <h2
              className="display-heading text-fg mb-10"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Services in {location.city}
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]"
              style={{ background: "var(--gap-color)" }}
            >
              {locationServices.map((s) => (
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
                  <p className="text-fg-dim text-xs leading-relaxed mb-5 line-clamp-3">
                    {s.description}
                  </p>
                  <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.15em] uppercase">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#FF3B30]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="display-heading text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Ready to Build in {location.city}?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">
            Contact FPA Design Consultancy to discuss your {location.city} project and get a
            tailored quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#FF3B30] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/60 text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
