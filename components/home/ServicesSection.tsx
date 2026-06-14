import Link from "next/link";

const services = [
  { number: "01", title: "Architectural Design", description: "Complete design services from schematic concept through construction documents for residential and commercial projects." },
  { number: "02", title: "Interior Design", description: "Curated interior environments that balance aesthetics, function, and the daily rhythms of the people who inhabit them." },
  { number: "03", title: "Renovation Design", description: "Thoughtful transformation of existing structures — improving function, aesthetics, and structural integrity." },
  { number: "04", title: "Space Planning", description: "Strategic space analysis and layout optimization for residential, commercial, and mixed-use properties." },
  { number: "05", title: "Project Management", description: "End-to-end construction project management ensuring quality, timeline adherence, and budget control." },
  { number: "06", title: "Construction Supervision", description: "On-site supervision to ensure construction quality conforms to approved plans and specifications." },
  { number: "07", title: "Building Permit Assistance", description: "Preparation and processing of all building permit documentation in compliance with local government requirements." },
  { number: "08", title: "3D Visualization", description: "Photorealistic architectural renders and walkthroughs using Lumion and Enscape for client presentations." },
  { number: "09", title: "CAD Drafting", description: "Precise technical drawings and as-built documentation using AutoCAD and Revit Architecture." },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c41230]" />
              <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">What We Offer</span>
            </div>
            <h2 className="display-heading text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Our Core
              <br />
              Disciplines
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-3 text-white text-xs font-semibold tracking-[0.2em] uppercase group flex-shrink-0">
            All Services
            <span className="block w-8 h-px bg-white group-hover:w-14 transition-all duration-300" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((service) => (
            <div key={service.number} className="bg-[#0d0d0d] p-8 hover:bg-[#111111] transition-colors duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-px bg-[#c41230] group-hover:w-full transition-all duration-500" />
              <span className="text-[#c41230] text-xs font-medium tracking-widest block mb-4">{service.number}</span>
              <h3 className="display-heading text-white mb-3 group-hover:text-[#c41230] transition-colors duration-200" style={{ fontSize: "1.1rem", letterSpacing: "0.08em" }}>
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
