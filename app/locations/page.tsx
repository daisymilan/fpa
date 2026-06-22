import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Service Locations | FPA Design Consultancy",
  description:
    "FPA Design Consultancy serves clients across the Philippines — Baguio City (HQ), Ifugao, Nueva Vizcaya, La Union, and Ilocos Sur — with completed projects in each location.",
  alternates: { canonical: "https://www.fp-architect.com/locations" },
};

const baseUrl = "https://www.fp-architect.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${baseUrl}/locations` },
  ],
};

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6 text-xs text-fg-faint tracking-widest uppercase">
            <Link href="/" className="hover:text-[#FF3B30] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FF3B30]">Locations</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">Where We Work</span>
          </div>
          <h1
            className="display-heading text-fg"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Service Locations
          </h1>
          <p className="text-fg-muted mt-6 max-w-2xl text-sm leading-relaxed">
            FPA Design Consultancy is based in Baguio City, Benguet and has completed projects
            across the Cordillera Administrative Region and Northern Luzon. International and
            remote design services are available worldwide.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]"
            style={{ background: "var(--gap-color)" }}
          >
            {locations.map((loc) => {
              const projectCount = loc.projectSlugs.length;
              return (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group bg-bg p-8 hover:bg-surface transition-colors duration-200 relative"
                >
                  <div className="absolute top-0 left-0 w-0 h-px bg-[#FF3B30] group-hover:w-full transition-all duration-500" />
                  {loc.isHeadquarters && (
                    <span className="inline-block text-[#FF3B30] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                      Headquarters
                    </span>
                  )}
                  <h2
                    className="display-heading text-fg group-hover:text-[#FF3B30] transition-colors duration-200 mb-1"
                    style={{ fontSize: "1.35rem", letterSpacing: "0.07em" }}
                  >
                    {loc.city}
                  </h2>
                  <p className="text-fg-faint text-xs tracking-widest uppercase mb-4">
                    {loc.province} · {loc.region}
                  </p>
                  <p className="text-fg-dim text-xs leading-relaxed mb-6 line-clamp-3">
                    {loc.intro}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-fg-faint text-xs">
                      {projectCount} completed project{projectCount !== 1 ? "s" : ""}
                    </span>
                    <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.15em] uppercase">
                      View Location →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Remote Note */}
      <section
        className="section-padding bg-bg-alt"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">
                  Remote Design
                </span>
              </div>
              <h2
                className="display-heading text-fg"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Serving Clients Worldwide
              </h2>
            </div>
            <div>
              <p className="text-fg-muted text-sm leading-relaxed mb-6">
                In addition to on-site services across Northern Luzon, FPA Design Consultancy
                provides remote architectural and interior design services for OFW families,
                diaspora clients, and international property owners building in the Philippines.
                Full design documentation, 3D visualization, and permit coordination are
                available via digital file exchange and video consultation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-fg-dim text-xs font-semibold tracking-[0.2em] uppercase group hover:text-fg transition-colors duration-200"
              >
                Inquire About Remote Services
                <span className="block w-8 h-px bg-[#FF3B30]/60 group-hover:w-14 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
