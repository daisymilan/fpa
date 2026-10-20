import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getShareImage } from "@/lib/projects";
import { getServiceBySlug, ServiceData } from "@/lib/services";

const baseUrl = "https://www.fp-architect.com";
const pageUrl = `${baseUrl}/build-from-abroad`;
const title = "OFW House Design: Build From Abroad | FPA Design Consultancy";
const description =
  "Licensed architect for OFWs and overseas clients building in the Philippines — remote design, 3D renders, building permits and supervised construction.";

const internationalProject = getProjectBySlug("2-storey-house-interior-renovation-australia");

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "OFW house design",
    "architect for OFW",
    "build a house in the Philippines from abroad",
    "remote architect Philippines",
    "overseas Filipino house design",
    "Filipino architect online",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    images: [{ url: getShareImage(internationalProject), width: 1200, height: 630 }],
  },
};

const steps = [
  {
    title: "Video Consultation",
    description:
      "We start with a video call about your lot, your plans, your budget and your timeline. The initial consultation is free, and you leave it with a clear project timeline.",
  },
  {
    title: "Design & 3D Visualization",
    description:
      "Schematic options, floor plans, elevations and photorealistic 3D renders, reviewed in phases over video calls and digital file exchange. Walkthrough videos let you see the house before it is built.",
  },
  {
    title: "Building Permit",
    description:
      "Only a PRC-licensed architect can sign and seal building permit documents in the Philippines. We prepare the full permit set, coordinate the engineers' drawings and work with your LGU.",
  },
  {
    title: "Construction You Can Follow",
    description:
      "We coordinate with local contractors and send regular digital progress reports and documentation, so you can follow the build from wherever you are.",
  },
];

const serviceSlugs = [
  "architectural-design",
  "3d-visualization-rendering",
  "building-permit-documentation",
  "construction-project-management",
];

const internationalAreas = [
  "United States", "Canada", "Australia", "United Kingdom",
  "Japan", "South Korea", "Singapore", "United Arab Emirates",
  "Saudi Arabia", "Qatar", "Kuwait", "Hong Kong", "Germany",
];

const faqs = [
  {
    question: "Can I build a house in the Philippines while I am working abroad?",
    answer:
      "Yes. We work with OFWs and Filipinos living overseas who are building homes in the Philippines. Our process is designed for remote collaboration: video consultations, digital file exchange and phased design reviews mean you don't need to be in the Philippines to design your home.",
  },
  {
    question: "How do I see the design if I can't visit?",
    answer:
      "You review floor plans, elevations and photorealistic 3D renders at each design stage. We also produce video walkthroughs, which are especially useful for overseas clients who can't visit the site in person.",
  },
  {
    question: "Who handles the building permit while I am overseas?",
    answer:
      "We prepare and coordinate the building permit documentation with your local government unit. Some documents must come from the lot owner, such as the title and tax declaration. If you can't be in the Philippines, a representative can usually act for you with a Special Power of Attorney. We'll tell you exactly what your LGU requires.",
  },
  {
    question: "How will I know construction is going well?",
    answer:
      "Through remote project management: we coordinate with local contractors and send you regular digital progress reports and documentation throughout construction.",
  },
  {
    question: "How long does it take?",
    answer:
      "A typical single-family home takes 4–8 weeks from schematic design to final construction documents. Building permit processing at the LGU then adds about 4–12 weeks, depending on the municipality.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Architectural fees follow the UAP schedule of fees and depend on the project's type, size and scope. After the free initial consultation, we give you a project-specific, itemised quotation.",
  },
];

const whatsappHref = `https://wa.me/639691807841?text=${encodeURIComponent(
  "Hello FPA Design Consultancy, I'm overseas and would like to ask about building in the Philippines."
)}`;

export default function BuildFromAbroadPage() {
  const services = serviceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is ServiceData => s !== undefined);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Build From Abroad", item: pageUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Remote architectural design for overseas clients",
    serviceType: "Architectural design",
    url: pageUrl,
    description,
    provider: { "@id": `${baseUrl}/#business` },
    areaServed: [{ "@type": "Country", name: "Philippines" }, "Worldwide"],
    audience: { "@type": "Audience", audienceType: "OFWs, overseas Filipinos and international property owners" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6 text-xs text-fg-faint tracking-widest uppercase">
            <Link href="/" className="hover:text-[#FF3B30] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FF3B30]">Build From Abroad</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">
              OFW &amp; Overseas Clients
            </span>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            Build Your Philippine Home
            <br />
            <span className="text-[#FF3B30]">From Abroad</span>
          </h1>
          <p className="text-fg-muted mt-6 max-w-2xl text-sm leading-relaxed">
            FPA Design Consultancy works with OFW families, Filipinos living overseas and international
            property owners building in the Philippines. Led by Arch. Friendzel B. Pengi, UAP, a licensed
            architect based in Baguio City, we design your home, prepare the building permit and keep you
            updated through construction, all through video consultations, digital drawings and regular
            progress reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#FF3B30] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#E0352B] transition-colors duration-200"
            >
              Book a Video Consultation
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-fg text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 hover:text-[#FF3B30]"
              style={{ border: "1px solid var(--border-strong)" }}
            >
              Message on WhatsApp
            </a>
          </div>
          <p className="text-fg-faint mt-6 text-xs tracking-widest uppercase">
            Video consultations · Digital drawings · Projects anywhere in the Philippines
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">How It Works</span>
          </div>
          <h2 className="display-heading text-fg mb-10" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            From Video Call to Finished Home
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]" style={{ background: "var(--gap-color)" }}>
            {steps.map((step, i) => (
              <div key={step.title} className="bg-bg p-8">
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.2em] block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-heading text-fg mb-3" style={{ fontSize: "1rem", letterSpacing: "0.07em" }}>
                  {step.title}
                </h3>
                <p className="text-fg-dim text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where clients are */}
      <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">Wherever You Are</span>
              </div>
              <h2 className="display-heading text-fg" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Your Project in the Philippines, Managed From Overseas
              </h2>
            </div>
            <div>
              <p className="text-fg-muted text-sm leading-relaxed mb-6">
                We design for clients across the Philippines and overseas. On-site services cover Baguio City,
                Benguet, La Union, Ifugao, Nueva Vizcaya and Ilocos Sur, and remote design is available for
                projects anywhere in the country. We work with clients in:
              </p>
              <div className="flex flex-wrap gap-2">
                {internationalAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 text-fg-muted text-xs tracking-wide"
                    style={{ border: "1px solid var(--border-strong)" }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International work */}
      {internationalProject && (
        <section className="section-padding bg-bg" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Link href={`/portfolio/${internationalProject.slug}`} className="group block overflow-hidden relative h-72 lg:h-96">
                <Image
                  src={internationalProject.coverImage}
                  alt={internationalProject.imageAlts[0] ?? `${internationalProject.name} — ${internationalProject.location}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Link>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-[#FF3B30]" />
                  <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">
                    {internationalProject.type} · {internationalProject.location}
                  </span>
                </div>
                <h2 className="display-heading text-fg mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                  {internationalProject.name}
                </h2>
                <p className="text-fg-muted text-sm leading-relaxed mb-6">{internationalProject.metaDescription}</p>
                <Link
                  href={`/portfolio/${internationalProject.slug}`}
                  className="inline-flex items-center gap-3 text-fg-dim text-xs font-semibold tracking-[0.2em] uppercase group hover:text-fg transition-colors duration-200"
                >
                  View the Project
                  <span className="block w-8 h-px bg-[#FF3B30]/60 group-hover:w-14 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="section-padding bg-bg" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">What We Offer</span>
          </div>
          <h2 className="display-heading text-fg mb-10" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Services for Overseas Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]" style={{ background: "var(--gap-color)" }}>
            {services.map((s) => (
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
                <p className="text-fg-dim text-xs leading-relaxed mb-5 line-clamp-3">{s.description}</p>
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.15em] uppercase">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">Common Questions</span>
          </div>
          <h2 className="display-heading text-fg mb-10" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Building From Abroad: FAQ
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="pb-8" style={{ borderBottom: "1px solid var(--border)" }}>
                <h3 className="text-fg text-base font-semibold mb-3">{faq.question}</h3>
                <p className="text-fg-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FF3B30]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="display-heading text-white mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Planning a Build Back Home?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">
            Tell us about your lot and your plans. Reach us by WhatsApp, Viber, Messenger or email, whichever is
            easiest for you.
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
