import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Complete design services from schematic concept through construction documents for residential and commercial projects.",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Curated interior environments that balance aesthetics, function, and the daily rhythms of the people who inhabit them.",
  },
  {
    number: "03",
    title: "Renovation Design",
    description:
      "Thoughtful transformation of existing structures — improving function, aesthetics, and structural integrity.",
  },
  {
    number: "04",
    title: "Space Planning",
    description:
      "Strategic space analysis and layout optimization for residential, commercial, and mixed-use properties.",
  },
  {
    number: "05",
    title: "Project Management",
    description:
      "End-to-end construction project management ensuring quality, timeline adherence, and budget control.",
  },
  {
    number: "06",
    title: "Construction Supervision",
    description:
      "On-site supervision to ensure construction quality conforms to approved plans and specifications.",
  },
  {
    number: "07",
    title: "Building Permit Assistance",
    description:
      "Preparation and processing of all building permit documentation in compliance with local government requirements.",
  },
  {
    number: "08",
    title: "3D Visualization",
    description:
      "Photorealistic architectural renders and walkthroughs using Lumion and Enscape for client presentations.",
  },
  {
    number: "09",
    title: "CAD Drafting",
    description:
      "Precise technical drawings and as-built documentation using AutoCAD and Revit Architecture.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c41230]" />
              <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">
                What We Offer
              </span>
            </div>
            <h2
              className="text-stone-900 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
              }}
            >
              Comprehensive
              <br />
              Architectural Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-3 text-stone-900 text-sm font-semibold tracking-widest uppercase group flex-shrink-0"
          >
            All Services
            <span className="block w-8 h-px bg-stone-900 group-hover:w-14 transition-all duration-300" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-[#f9f8f6] p-8 hover:bg-white transition-colors duration-300 group"
            >
              <span className="text-stone-300 text-sm font-medium tracking-widest block mb-4">
                {service.number}
              </span>
              <h3
                className="text-stone-900 mb-3 group-hover:text-[#c41230] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                }}
              >
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
