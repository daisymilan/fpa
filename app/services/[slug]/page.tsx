import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug, services } from "@/lib/services";
import { getProjectBySlug } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `https://www.fp-architect.com/services/${slug}` },
    openGraph: {
      title: `${service.title} | FPA Design Consultancy`,
      description: service.metaDescription,
      url: `https://www.fp-architect.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = service.relatedProjectSlugs
    .map((s) => getProjectBySlug(s))
    .filter(Boolean)
    .slice(0, 3);

  const baseUrl = "https://www.fp-architect.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${baseUrl}/services/${slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "LocalBusiness", "@id": `${baseUrl}/#business` },
    areaServed: ["Philippines", "Worldwide"],
    url: `${baseUrl}/services/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6 text-xs text-fg-faint tracking-widest uppercase">
            <Link href="/" className="hover:text-[#FF3B30] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#FF3B30] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#FF3B30]">{service.title}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">What We Offer</span>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            {service.title}
          </h1>
          <p className="text-fg-muted mt-6 max-w-xl text-sm leading-relaxed">{service.description}</p>
        </div>
      </section>

      {/* Description + Deliverables */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">Overview</span>
              </div>
              <h2 className="display-heading text-fg mb-6" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                What This Service Includes
              </h2>
              <p className="text-fg-muted text-sm leading-relaxed">{service.description}</p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 bg-[#FF3B30] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#E0352B] transition-colors duration-200"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">Deliverables</span>
              </div>
              <h2 className="display-heading text-fg mb-6" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                What You Receive
              </h2>
              <ul className="space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] flex-shrink-0 mt-2" />
                    <span className="text-fg-muted text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">Our Work</span>
              </div>
              <Link href="/portfolio" className="text-fg-dim text-xs tracking-widest uppercase hover:text-fg transition-colors">
                View All →
              </Link>
            </div>
            <h2 className="display-heading text-fg mb-10" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]" style={{ background: "var(--gap-color)" }}>
              {relatedProjects.map((p) => p && (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block overflow-hidden bg-bg-alt">
                  <div className="relative h-52 overflow-hidden">
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
                    <h3 className="display-heading text-fg group-hover:text-[#FF3B30] transition-colors" style={{ fontSize: "1rem" }}>
                      {p.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-bg" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#FF3B30]" />
              <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">FAQ</span>
            </div>
            <h2 className="display-heading text-fg mb-10" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="border-l-2 border-[#FF3B30] pl-6">
                  <h3 className="display-heading text-fg mb-3" style={{ fontSize: "1.05rem", letterSpacing: "0.05em" }}>
                    {faq.question}
                  </h3>
                  <p className="text-fg-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FF3B30]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="display-heading text-white mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">
            Contact FPA Design Consultancy to discuss your project and get a tailored quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#FF3B30] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/60 text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
