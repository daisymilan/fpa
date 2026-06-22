"use client";

import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const localLocations = [
  { label: "Baguio City, Benguet", slug: "baguio-city-architect", note: "HQ" },
  { label: "Ifugao, Cordillera", slug: "ifugao-architect" },
  { label: "Nueva Vizcaya", slug: "nueva-vizcaya-architect" },
  { label: "La Union", slug: "la-union-architect" },
  { label: "Ilocos Sur", slug: "ilocos-sur-architect" },
];

export default function ContactContent() {
  const { lang } = useLanguage();
  const tx = t[lang].contactPage;

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
          <p className="text-fg-muted mt-6 max-w-xl text-sm leading-relaxed">
            {tx.heroDesc}
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">{tx.infoTag}</span>
              </div>
              <h2 className="display-heading text-fg mb-8 leading-tight" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                {tx.infoHeading}
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                    label: tx.officeLabel,
                    content: <p className="text-fg-muted text-sm leading-relaxed">Baguio City, Benguet<br />Philippines</p>,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    label: tx.phoneLabel,
                    content: <div className="space-y-1"><a href="tel:+63744244644" className="block text-fg-muted text-sm hover:text-fg transition-colors">(074) 424 4644</a><a href="tel:+639454221874" className="block text-fg-muted text-sm hover:text-fg transition-colors">0945 422 1874</a></div>,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    label: tx.emailLabel,
                    content: <a href="mailto:fpadesignconsultancy@gmail.com" className="text-fg-muted text-sm hover:text-fg transition-colors break-all">fpadesignconsultancy@gmail.com</a>,
                  },
                ].map(({ icon, label, content }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,59,48,0.1)", border: "1px solid rgba(255,59,48,0.2)" }}>
                      <svg className="w-4 h-4 text-[#FF3B30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <div>
                      <p className="text-xs text-fg-faint tracking-widest uppercase mb-1">{label}</p>
                      {content}
                    </div>
                  </div>
                ))}

                {/* Social links */}
                {[
                  { label: "WhatsApp", href: "https://wa.me/639454221874", text: "+63 945 422 1874", icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />, fill: true },
                  { label: "Messenger", href: "https://m.me/FPADesignConsultancy", text: "FPA Design Consultancy", icon: <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.479 8.652V24l4.086-2.242c1.09.301 2.246.464 3.435.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.26L19.752 8l-6.561 6.963z" />, fill: true },
                  { label: "Facebook", href: "https://www.facebook.com/share/1E4rr19U8p/?mibextid=wwXIfr", text: "FPA Design Consultancy", icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />, fill: true },
                  { label: "Instagram", href: "https://www.instagram.com/fpadesignconsultancy?igsh=MWcxZDBibXh0aDRoMA==", text: "@fpadesignconsultancy", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />, fill: true },
                ].map(({ label, href, text, icon, fill }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,59,48,0.1)", border: "1px solid rgba(255,59,48,0.2)" }}>
                      <svg className="w-4 h-4 text-[#FF3B30]" fill={fill ? "currentColor" : "none"} viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <div>
                      <p className="text-xs text-fg-faint tracking-widest uppercase mb-1">{label}</p>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-fg-muted text-sm hover:text-fg transition-colors">{text}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">{tx.formTag}</span>
              </div>
              <h2 className="display-heading text-fg mb-8 leading-tight" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                {tx.formHeading}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#FF3B30]" />
                <span className="text-[#FF3B30] text-xs font-semibold tracking-[0.3em] uppercase">Service Coverage</span>
              </div>
              <h2 className="display-heading text-fg mb-6" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                Where We Work
              </h2>
              <div className="flex flex-col gap-2">
                {localLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="flex items-center justify-between px-5 py-3 text-fg-muted text-sm hover:text-[#FF3B30] hover:border-[#FF3B30] transition-colors duration-200 group"
                    style={{ border: "1px solid var(--border-strong)" }}
                  >
                    <span>{loc.label}</span>
                    <span className="text-[#FF3B30] text-xs tracking-widest uppercase">
                      {loc.note ?? "View →"}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:pt-16">
              <p className="text-fg-dim text-xs font-semibold tracking-[0.25em] uppercase mb-4">Remote &amp; International</p>
              <p className="text-fg-muted text-sm leading-relaxed mb-6">
                Remote architectural and interior design services are available for OFW families, diaspora clients, and international property owners building in the Philippines. All design documents and 3D visualizations are delivered digitally; consultations are conducted via video call.
              </p>
              <Link
                href="/locations"
                className="inline-flex items-center gap-3 text-fg-dim text-xs font-semibold tracking-[0.2em] uppercase group hover:text-fg transition-colors duration-200"
              >
                View All Service Locations
                <span className="block w-8 h-px bg-[#FF3B30]/60 group-hover:w-14 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="h-96 relative" style={{ borderTop: "1px solid var(--border)" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1781439504032!6m8!1m7!1ssdc0-T2xR2SdxUTwSo_yFQ!2m2!1d16.41167172191616!2d120.5785344856931!3f294.5787759869739!4f-8.721430022092164!5f0.4000000000000002"
          width="100%" height="100%"
          style={{ border: 0 }}
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="FPA Design Consultancy Location — Baguio City, Benguet"
          className="absolute inset-0"
        />
      </section>
    </>
  );
}
