"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const skills: { label: string; href?: string }[] = [
  { label: "Architectural Design", href: "/services/architectural-design" },
  { label: "Construction Project Management", href: "/services/construction-project-management" },
  { label: "Construction Supervision", href: "/services/construction-supervision" },
  { label: "Interior Design", href: "/services/interior-design" },
  { label: "Space Planning", href: "/services/space-planning" },
  { label: "Cabinet Design", href: "/services/cabinet-design" },
  { label: "Renovation Design", href: "/services/renovation-remodeling" },
  { label: "Building Permit Documentation", href: "/services/building-permit-documentation" },
  { label: "Revit Architecture" },
  { label: "SketchUp" },
  { label: "Lumion" },
  { label: "Enscape" },
  { label: "AutoCAD" },
  { label: "Project Coordination" },
];

const certifications = [
  { title: "Licensed Architect", body: "Professional Regulation Commission (PRC)" },
  { title: "Safety Officer 2 (SO2)", body: "Department of Labor and Employment (DOLE)" },
  { title: "Project Management", body: "Professional Certification" },
];

const philippineLocations = [
  { label: "Baguio City, Benguet", slug: "baguio-city-architect", note: "Headquarters" },
  { label: "Ifugao, Cordillera", slug: "ifugao-architect" },
  { label: "Nueva Vizcaya", slug: "nueva-vizcaya-architect" },
  { label: "La Union", slug: "la-union-architect" },
  { label: "Ilocos Sur", slug: "ilocos-sur-architect" },
];

const internationalAreas = [
  "United States", "Canada", "Australia", "United Kingdom",
  "Japan", "South Korea", "Singapore", "United Arab Emirates",
  "Saudi Arabia", "Qatar", "Kuwait", "Hong Kong", "Germany", "Worldwide",
];

export default function AboutContent() {
  const { lang } = useLanguage();
  const tx = t[lang].aboutPage;

  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">{tx.heroTag}</span>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            {tx.heroHeading1}
            <br />
            <span className="text-[#FF3B30]">{tx.heroHeading2}</span>
          </h1>
        </div>
      </section>

      {/* Architect profile */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                <Image
                  src="/images/about/architect.jpg"
                  alt="Arch. Friendzel B. Pengi, UAP — FPA Design Consultancy"
                  fill className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw" priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF3B30] -z-10" />
            </div>

            <div>
              <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">{tx.principalTag}</span>
              <h2 className="display-heading text-fg mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Arch. Friendzel B. Pengi
              </h2>
              <p className="text-fg-faint text-xs tracking-[0.2em] uppercase mb-8">UAP · Licensed Architect · Safety Officer 2</p>

              <div className="space-y-5 text-fg-muted leading-relaxed text-sm">
                {tx.bio.map((para, i) => <p key={i}>{para}</p>)}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/services" className="inline-flex items-center justify-center px-8 py-3 bg-[#FF3B30] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#E0352B] transition-colors duration-200">
                  Our Services
                </Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-3 text-fg text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200" style={{ border: "1px solid var(--border-strong)" }}>
                  View Our Work
                </Link>
              </div>

              <div className="mt-8 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="text-xs text-fg-faint tracking-widest uppercase mb-3">{tx.langTag}</p>
                <div className="flex gap-3 flex-wrap">
                  {["English", "Filipino", "Ilocano"].map((language) => (
                    <span key={language} className="px-4 py-1.5 text-fg-muted text-sm hover:text-fg transition-colors" style={{ border: "1px solid var(--border-strong)" }}>{language}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#FF3B30]" />
              <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">{tx.philosophyTag}</span>
              <div className="w-8 h-px bg-[#FF3B30]" />
            </div>
            <blockquote className="display-heading text-fg leading-tight" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 400, fontStyle: "italic", textTransform: "none" }}>
              &ldquo;{tx.quote}&rdquo;
            </blockquote>
            <p className="text-fg-faint mt-6 text-xs tracking-[0.2em] uppercase">— Arch. Friendzel B. Pengi, UAP</p>
          </div>
        </div>
      </section>

      {/* Skills + Certifications */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">{tx.expertiseTag}</span>
              </div>
              <h2 className="display-heading text-fg mb-10" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>{tx.skillsHeading}</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) =>
                  skill.href ? (
                    <Link
                      key={skill.label}
                      href={skill.href}
                      className="px-4 py-2 text-fg-muted text-sm hover:text-[#FF3B30] hover:border-[#FF3B30] transition-colors duration-200"
                      style={{ border: "1px solid var(--border-strong)" }}
                    >
                      {skill.label}
                    </Link>
                  ) : (
                    <span key={skill.label} className="px-4 py-2 text-fg-muted text-sm hover:text-fg transition-colors duration-200" style={{ border: "1px solid var(--border-strong)" }}>
                      {skill.label}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">{tx.credentialsTag}</span>
              </div>
              <h2 className="display-heading text-fg mb-10" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>{tx.certsHeading}</h2>
              <div className="space-y-6">
                {certifications.map((cert, i) => (
                  <div key={cert.title} className="border-l-2 border-[#FF3B30] pl-5">
                    <h3 className="display-heading text-fg mb-1" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>{cert.title}</h3>
                    <p className="text-[#FF3B30] text-xs tracking-wider uppercase mb-2">{cert.body}</p>
                    <p className="text-fg-dim text-sm leading-relaxed">{tx.certDescriptions[i]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#FF3B30]" />
              <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">{tx.coverageTag}</span>
              <div className="w-8 h-px bg-[#FF3B30]" />
            </div>
            <h2 className="display-heading text-fg" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>{tx.coverageHeading}</h2>
            <p className="text-fg-dim mt-4 max-w-xl mx-auto text-sm">{tx.coverageDesc}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
            <div>
              <p className="text-fg-dim text-xs font-semibold tracking-[0.25em] uppercase mb-4">Philippines — Local Projects</p>
              <div className="flex flex-col gap-2">
                {philippineLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="flex items-center justify-between px-5 py-3 text-fg-muted text-sm hover:text-[#FF3B30] hover:border-[#FF3B30] transition-colors duration-200 group"
                    style={{ border: "1px solid var(--border-strong)" }}
                  >
                    <span>{loc.label}</span>
                    {loc.note && (
                      <span className="text-[#FF3B30] text-xs tracking-widest uppercase">{loc.note}</span>
                    )}
                    {!loc.note && (
                      <span className="text-fg-faint text-xs opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-fg-dim text-xs font-semibold tracking-[0.25em] uppercase mb-4">Remote & International</p>
              <p className="text-fg-muted text-sm leading-relaxed mb-4">
                Full design documentation and 3D visualization services are available for OFW families and overseas clients building in the Philippines. All deliverables are exchanged digitally; consultations are conducted via video call.
              </p>
              <div className="flex flex-wrap gap-2">
                {internationalAreas.map((area) => (
                  <span key={area} className="px-4 py-2 text-fg-muted text-xs hover:text-fg transition-colors" style={{ border: "1px solid var(--border-strong)" }}>{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FF3B30]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="display-heading text-white mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>{tx.ctaHeading}</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">{tx.ctaDesc}</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#FF3B30] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-100 transition-colors">{tx.ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
