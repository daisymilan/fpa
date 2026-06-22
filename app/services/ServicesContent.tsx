"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { services } from "@/lib/services";

const numbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

const globalFaqs = [
  {
    question: "Is FPA Design Consultancy a licensed architectural firm?",
    answer:
      "Yes. FPA Design Consultancy is led by Arch. Friendzel B. Pengi, UAP — a licensed architect registered with the Professional Regulation Commission (PRC) under Republic Act 9266 and a member of the United Architects of the Philippines.",
  },
  {
    question: "Do you serve clients outside Baguio City?",
    answer:
      "Yes. We serve clients across the Philippines and internationally, offering remote consultation and design services to Filipino families and businesses worldwide.",
  },
  {
    question: "How do I start a project with FPA Design Consultancy?",
    answer:
      "Simply reach out via our contact page or call us directly. We begin with a free initial consultation to understand your project goals, site conditions, and budget — then recommend the right scope of services.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. Our portfolio spans single-family residences, multi-storey homes, commercial office buildings, and interior renovation projects across the Philippines.",
  },
];

export default function ServicesContent() {
  const { lang } = useLanguage();
  const tx = t[lang].servicesPage;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: globalFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page hero */}
      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">{tx.tag}</span>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            {tx.heading1}
            <br />
            <span className="text-[#FF3B30]">{tx.heading2}</span>
          </h1>
          <p className="text-fg-muted mt-6 max-w-xl text-sm leading-relaxed">
            {tx.desc}
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px]" style={{ background: "var(--gap-color)" }}>
            {tx.items.map((service, i) => (
              <div key={i} className="bg-bg p-8 group relative hover:bg-bg-alt transition-colors duration-300">
                <div className="absolute top-0 left-0 w-0 h-px bg-[#FF3B30] group-hover:w-full transition-all duration-500" />
                <span className="display-heading block mb-5 leading-none" style={{ fontSize: "3rem", color: "var(--fg-ghost)" }}>
                  {numbers[i]}
                </span>
                <h2 className="display-heading text-fg mb-4 group-hover:text-[#FF3B30] transition-colors duration-200" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>
                  {service.title}
                </h2>
                <p className="text-fg-dim text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="mb-6">
                  <p className="text-xs text-fg-faint tracking-widest uppercase mb-3">{tx.delivLabel}</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-fg-dim">
                        <span className="w-1 h-1 rounded-full bg-[#FF3B30] mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {services[i] && (
                  <Link
                    href={`/services/${services[i].slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#FF3B30] hover:gap-3 transition-all duration-200"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global FAQ */}
      <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)" }}>
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
              {globalFaqs.map((faq) => (
                <div key={faq.question} className="border-l-2 border-[#FF3B30] pl-6">
                  <h3 className="display-heading text-fg mb-3" style={{ fontSize: "1.05rem", letterSpacing: "0.05em" }}>{faq.question}</h3>
                  <p className="text-fg-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">{tx.ctaTag}</span>
              </div>
              <h2 className="display-heading text-fg" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                {tx.ctaHeading}
              </h2>
              <p className="text-fg-muted mt-4 text-sm leading-relaxed max-w-md">
                {tx.ctaDesc}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#FF3B30] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#E0352B] transition-colors duration-200">
                {tx.ctaBtn1}
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center px-10 py-4 text-fg text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200" style={{ border: "1px solid var(--border-strong)" }}>
                {tx.ctaBtn2}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
