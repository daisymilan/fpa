import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Licensed Architect in Baguio City",
  description: "Learn about Arch. Friendzel B. Pengi, UAP — licensed architect and founder of FPA Design Consultancy in Baguio City.",
  alternates: { canonical: "https://fpadesignconsultancy.com/about" },
};

const skills = [
  "Architectural Design","Construction Project Management","Construction Supervision",
  "Interior Design","Space Planning","Cabinet Design","Renovation Design",
  "Building Permit Documentation","Revit Architecture","SketchUp","Lumion",
  "Enscape","AutoCAD","Project Coordination",
];

const certifications = [
  { title: "Licensed Architect", body: "Professional Regulation Commission (PRC)", description: "Board-certified architect authorized to practice architecture in the Philippines under Republic Act 9266." },
  { title: "Safety Officer 2 (SO2)", body: "Department of Labor and Employment (DOLE)", description: "Certified to oversee occupational health and safety compliance on construction sites." },
  { title: "Project Management", body: "Professional Certification", description: "Trained in construction project management methodology, scheduling, and cost control." },
];

const serviceArea = ["Baguio City","Benguet","La Union","Pangasinan","Mountain Province","Ifugao","Kalinga","Abra","Apayao","Northern Luzon"];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">About the Firm</span>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            The Architect Behind
            <br />
            <span className="text-[#c41230]">FPA Design Consultancy</span>
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
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c41230] -z-10" />
            </div>

            <div>
              <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Principal Architect</span>
              <h2 className="display-heading text-fg mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Arch. Friendzel B. Pengi
              </h2>
              <p className="text-fg-faint text-xs tracking-[0.2em] uppercase mb-8">UAP · Licensed Architect · Safety Officer 2</p>

              <div className="space-y-5 text-fg-muted leading-relaxed text-sm">
                <p>Arch. Friendzel B. Pengi is a licensed architect and the founder of FPA Design Consultancy, a full-service architectural practice based in Baguio City, Benguet. He holds a Bachelor of Science in Architecture from Lyceum Northwestern University and is a proud member of the United Architects of the Philippines (UAP).</p>
                <p>With hands-on expertise spanning architectural design, construction project management, construction supervision, interior design, space planning, cabinet design, and renovation, Arch. Pengi brings a comprehensive and client-centered approach to every project he undertakes.</p>
                <p>His proficiency in industry-leading tools — including Revit Architecture, SketchUp, Lumion, Enscape, and AutoCAD — enables the firm to deliver precise technical documents and compelling photorealistic visualizations that help clients see, understand, and approve their designs with confidence.</p>
                <p>As a certified Safety Officer 2 (SO2), Arch. Pengi also ensures that every project under his supervision adheres to the highest standards of occupational health and safety on construction sites.</p>
              </div>

              <div className="mt-8 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="text-xs text-fg-faint tracking-widest uppercase mb-3">Languages</p>
                <div className="flex gap-3 flex-wrap">
                  {["English", "Filipino", "Ilocano"].map((lang) => (
                    <span key={lang} className="px-4 py-1.5 text-fg-muted text-sm hover:text-fg transition-colors" style={{ border: "1px solid var(--border-strong)" }}>{lang}</span>
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
              <div className="w-8 h-px bg-[#c41230]" />
              <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">Design Philosophy</span>
              <div className="w-8 h-px bg-[#c41230]" />
            </div>
            <blockquote className="display-heading text-fg leading-tight" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 400, fontStyle: "italic", textTransform: "none" }}>
              &ldquo;Good architecture is not just about how a building looks — it is about how it works, how it feels to live or work in, and how it serves the people who use it long after the architect has moved on.&rdquo;
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
                <div className="w-8 h-px bg-[#c41230]" />
                <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">Expertise</span>
              </div>
              <h2 className="display-heading text-fg mb-10" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Professional Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 text-fg-muted text-sm hover:text-fg transition-colors duration-200" style={{ border: "1px solid var(--border-strong)" }}>{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#c41230]" />
                <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">Credentials</span>
              </div>
              <h2 className="display-heading text-fg mb-10" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Certifications</h2>
              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div key={cert.title} className="border-l-2 border-[#c41230] pl-5">
                    <h3 className="display-heading text-fg mb-1" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>{cert.title}</h3>
                    <p className="text-[#c41230] text-xs tracking-wider uppercase mb-2">{cert.body}</p>
                    <p className="text-fg-dim text-sm leading-relaxed">{cert.description}</p>
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
              <div className="w-8 h-px bg-[#c41230]" />
              <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">Coverage</span>
              <div className="w-8 h-px bg-[#c41230]" />
            </div>
            <h2 className="display-heading text-fg" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Areas We Serve</h2>
            <p className="text-fg-dim mt-4 max-w-xl mx-auto text-sm">FPA Design Consultancy provides architectural services across Baguio City and the broader Northern Luzon region.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {serviceArea.map((area) => (
              <span key={area} className="px-5 py-2.5 text-fg-muted text-sm font-medium hover:text-fg transition-colors" style={{ border: "1px solid var(--border-strong)" }}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#c41230]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="display-heading text-white mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Let&apos;s Discuss Your Project</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">Ready to work with an architect who takes your vision seriously? Contact us today for a consultation.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#c41230] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-stone-100 transition-colors">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
