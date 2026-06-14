import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Architect in Baguio City — Get a Consultation",
  description: "Contact FPA Design Consultancy for architectural design, interior design, renovation, and building permit services in Baguio City and Northern Luzon. Call (074) 424 4644 or 0945 422 1874.",
  alternates: { canonical: "https://fpadesignconsultancy.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">Get in Touch</span>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            Let&apos;s Start
            <br />
            <span className="text-[#c41230]">Your Project</span>
          </h1>
          <p className="text-fg-muted mt-6 max-w-xl text-sm leading-relaxed">
            Reach out for a consultation — we welcome residential, commercial, and interior design inquiries from clients in the Philippines and worldwide.
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
                <div className="w-8 h-px bg-[#c41230]" />
                <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">Contact Information</span>
              </div>
              <h2 className="display-heading text-fg mb-8 leading-tight" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                Reach Us Directly
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                    label: "Office Location",
                    content: <p className="text-fg-muted text-sm leading-relaxed">Baguio City, Benguet<br />Philippines</p>,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    label: "Phone",
                    content: <div className="space-y-1"><a href="tel:+63744244644" className="block text-fg-muted text-sm hover:text-fg transition-colors">(074) 424 4644</a><a href="tel:+639454221874" className="block text-fg-muted text-sm hover:text-fg transition-colors">0945 422 1874</a></div>,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    label: "Email",
                    content: <a href="mailto:fpadesignconsultancy@gmail.com" className="text-fg-muted text-sm hover:text-fg transition-colors break-all">fpadesignconsultancy@gmail.com</a>,
                  },
                ].map(({ icon, label, content }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(196,18,48,0.1)", border: "1px solid rgba(196,18,48,0.2)" }}>
                      <svg className="w-4 h-4 text-[#c41230]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <div>
                      <p className="text-xs text-fg-faint tracking-widest uppercase mb-1">{label}</p>
                      {content}
                    </div>
                  </div>
                ))}

                {/* Social links */}
                {[
                  { label: "Facebook", href: "https://www.facebook.com/share/1E4rr19U8p/?mibextid=wwXIfr", text: "FPA Design Consultancy", icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />, fill: true },
                  { label: "Instagram", href: "https://www.instagram.com/fpadesignconsultancy?igsh=MWcxZDBibXh0aDRoMA==", text: "@fpadesignconsultancy", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />, fill: true },
                ].map(({ label, href, text, icon, fill }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(196,18,48,0.1)", border: "1px solid rgba(196,18,48,0.2)" }}>
                      <svg className="w-4 h-4 text-[#c41230]" fill={fill ? "currentColor" : "none"} viewBox="0 0 24 24">{icon}</svg>
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
                <div className="w-8 h-px bg-[#c41230]" />
                <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">Send a Message</span>
              </div>
              <h2 className="display-heading text-fg mb-8 leading-tight" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                Tell Us About Your Project
              </h2>
              <ContactForm />
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
