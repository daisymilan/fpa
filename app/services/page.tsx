import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architectural Services | FPA Design Consultancy Baguio",
  description: "Full-service architectural firm offering design, construction management, interior design, and permit documentation across Baguio City and Northern Luzon.",
  alternates: { canonical: "https://fpadesignconsultancy.com/services" },
};

const services = [
  { number: "01", title: "Architectural Design", description: "From concept to construction documents, we design buildings that are functional, beautiful, and built to last. We handle residential, commercial, and institutional projects of all scales.", deliverables: ["Schematic design options","Floor plan development","Elevation & section drawings","3D visualization renders","Final construction drawings"] },
  { number: "02", title: "Construction Project Management", description: "We manage the full lifecycle of your construction project — from contractor selection and procurement to scheduling, cost control, and quality oversight.", deliverables: ["Contractor coordination","Schedule management","Cost monitoring & reporting","Quality control inspections","Project closeout documentation"] },
  { number: "03", title: "Construction Supervision", description: "On-site architectural supervision ensures that construction work faithfully follows the approved plans, specifications, and quality standards.", deliverables: ["Regular site visits","Site instruction issuance","Material approval","Progress documentation","Punch list & snagging"] },
  { number: "04", title: "Interior Design", description: "We design interior environments that reflect your lifestyle and brand while optimizing comfort, function, and aesthetics. Every material, finish, and fixture is purposefully selected.", deliverables: ["Interior concept development","Space planning & layout","Material & finish boards","Furniture layout plans","Lighting design coordination"] },
  { number: "05", title: "Space Planning", description: "Efficient space planning ensures that every square meter of your property is used meaningfully — whether for a home, office, retail space, or institutional facility.", deliverables: ["Needs analysis","Flow & circulation studies","Zoning layout plans","Furniture arrangement plans","Space efficiency review"] },
  { number: "06", title: "Cabinet Design", description: "Custom cabinet and millwork design for kitchens, bathrooms, bedrooms, and workspaces — designed to maximize storage, fit your space perfectly, and match your overall design scheme.", deliverables: ["Cabinet layout plans","Elevation drawings","Material & hardware specification","Shop drawing coordination","Installation supervision"] },
  { number: "07", title: "Renovation & Remodeling", description: "We transform existing spaces through thoughtful renovation — improving functionality, updating aesthetics, and adding value to your property without unnecessary demolition.", deliverables: ["Existing conditions survey","Renovation concept design","Structural assessment coordination","Phasing plan","Permit assistance if required"] },
  { number: "08", title: "Building Permit Documentation", description: "We prepare and process all permit documents required by the National Building Code of the Philippines and your local government unit — ensuring full compliance and a smooth approval process.", deliverables: ["Architectural permit drawings","Form B (Building Permit Application)","Sanitary & electrical coordination","LGU submission & follow-up","Certificate of Occupancy support"] },
  { number: "09", title: "3D Visualization & Rendering", description: "Photorealistic 3D renders and walkthroughs help you visualize your project before ground is broken — making it easier to approve designs, coordinate with contractors, and share your vision.", deliverables: ["Exterior 3D renders","Interior 3D renders","Bird's-eye perspective views","Virtual walkthrough (upon request)","Presentation-ready output files"] },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 bg-bg" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">What We Offer</span>
          </div>
          <h1 className="display-heading text-fg" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            Our Core
            <br />
            <span className="text-[#c41230]">Disciplines</span>
          </h1>
          <p className="text-fg-muted mt-6 max-w-xl text-sm leading-relaxed">
            FPA Design Consultancy offers a comprehensive range of architectural and design services tailored to the needs of clients across Baguio City and Northern Luzon.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px]" style={{ background: "var(--gap-color)" }}>
            {services.map((service) => (
              <div key={service.number} className="bg-bg p-8 group relative hover:bg-bg-alt transition-colors duration-300">
                <div className="absolute top-0 left-0 w-0 h-px bg-[#c41230] group-hover:w-full transition-all duration-500" />
                <span className="display-heading block mb-5 leading-none" style={{ fontSize: "3rem", color: "var(--fg-ghost)" }}>
                  {service.number}
                </span>
                <h2 className="display-heading text-fg mb-4 group-hover:text-[#c41230] transition-colors duration-200" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>
                  {service.title}
                </h2>
                <p className="text-fg-dim text-sm leading-relaxed mb-6">{service.description}</p>
                <div>
                  <p className="text-xs text-fg-faint tracking-widest uppercase mb-3">Deliverables</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-fg-dim">
                        <span className="w-1 h-1 rounded-full bg-[#c41230] mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-alt" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#c41230]" />
                <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">Get Started</span>
              </div>
              <h2 className="display-heading text-fg" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Not Sure Where to Start?
              </h2>
              <p className="text-fg-muted mt-4 text-sm leading-relaxed max-w-md">
                Every project is different. Tell us what you are planning and we will recommend the right services and a realistic scope for your budget and timeline.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#c41230] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#8b0000] transition-colors duration-200">
                Contact Us
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center px-10 py-4 text-fg text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200" style={{ border: "1px solid var(--border-strong)" }}>
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
