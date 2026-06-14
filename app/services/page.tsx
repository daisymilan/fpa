import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Architectural & Design Services in Baguio City",
  description:
    "FPA Design Consultancy offers full architectural services including architectural design, interior design, renovation, space planning, project management, construction supervision, building permit assistance, 3D visualization, and CAD drafting in Baguio City and Northern Luzon.",
  alternates: {
    canonical: "https://fpadesignconsultancy.com/services",
  },
};

const services = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Our architectural design service covers the complete design lifecycle of your project — from initial programming and site analysis through schematic design, design development, and full construction document production. We design structures that are beautiful, compliant with the National Building Code of the Philippines, and built to serve your specific spatial needs.",
    deliverables: [
      "Site analysis and feasibility study",
      "Schematic design options",
      "Design development drawings",
      "Complete construction documents",
      "3D architectural renderings",
    ],
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "We create interior environments that reflect the personality and lifestyle of their occupants, while remaining practical and durable. From material selection and furniture layout to lighting design and custom joinery, our interior design service delivers spaces that are as functional as they are refined.",
    deliverables: [
      "Interior concept and mood board",
      "Space planning and furniture layout",
      "Material and finish specifications",
      "Custom cabinet and joinery design",
      "Lighting plan",
      "Interior 3D visualizations",
    ],
  },
  {
    number: "03",
    title: "Renovation Design",
    description:
      "Renovation requires a thorough understanding of existing conditions combined with a clear vision for what the space can become. We assess your current structure, identify opportunities for improvement, and develop a renovation design that maximizes function and value without unnecessary disruption.",
    deliverables: [
      "Existing conditions assessment",
      "Renovation scope definition",
      "Demolition and construction drawings",
      "Material and fixture specifications",
      "Contractor coordination support",
    ],
  },
  {
    number: "04",
    title: "Space Planning",
    description:
      "Efficient space planning is the invisible foundation of a well-designed building. We analyze your spatial requirements and traffic patterns to develop layouts that maximize usable area, improve circulation, and support the activities that happen in your space — whether residential, commercial, or mixed-use.",
    deliverables: [
      "Space needs analysis",
      "Block and stack plans",
      "Detailed floor plan layouts",
      "Circulation and adjacency diagrams",
      "Furniture and equipment planning",
    ],
  },
  {
    number: "05",
    title: "Project Management",
    description:
      "We take full ownership of your construction project from pre-construction planning through final turnover. Our project management service ensures your project is completed on time, within budget, and to the quality standard specified in the architectural documents — with clear communication at every stage.",
    deliverables: [
      "Project schedule and phasing plan",
      "Contractor selection and evaluation",
      "Budget monitoring and cost control",
      "Progress reporting",
      "Quality inspection and snag list",
      "Project turnover documentation",
    ],
  },
  {
    number: "06",
    title: "Construction Supervision",
    description:
      "Our construction supervision service provides regular on-site presence and technical oversight to ensure that the construction work conforms to the approved architectural and engineering plans, specifications, and applicable building codes. We act as your representative on site to protect your interests throughout the build.",
    deliverables: [
      "Regular site inspections",
      "Instruction to contractors",
      "Compliance verification",
      "Site progress photos and reports",
      "Defects identification and correction",
    ],
  },
  {
    number: "07",
    title: "Building Permit Assistance",
    description:
      "Navigating the building permit process in the Philippines can be complex and time-consuming. We prepare all required architectural documents, coordinate the necessary engineering clearances, and facilitate the permit application with the local government unit on your behalf — ensuring your project is fully compliant and legally protected.",
    deliverables: [
      "Building permit drawings (architectural set)",
      "Ancillary documents preparation",
      "LGU requirements coordination",
      "Occupancy permit support",
      "Zoning compliance verification",
    ],
  },
  {
    number: "08",
    title: "3D Visualization",
    description:
      "We produce photorealistic architectural renderings and animated walkthroughs using Lumion and Enscape, giving you a clear and accurate preview of your finished project before a single wall is built. Our visualizations are used for client presentations, marketing, and design approval.",
    deliverables: [
      "Exterior photorealistic renders",
      "Interior photorealistic renders",
      "Day and night lighting studies",
      "Animated walkthrough video",
      "360° panoramic views",
    ],
  },
  {
    number: "09",
    title: "CAD Drafting",
    description:
      "Accurate technical drawings are the cornerstone of every successful construction project. We produce precise CAD drawings using AutoCAD and Revit Architecture, including as-built documentation, measured drawings, and permit-ready sets that meet professional and regulatory standards.",
    deliverables: [
      "Floor plans, sections, elevations",
      "Detail drawings and schedules",
      "As-built documentation",
      "Revit BIM models",
      "PDF and DWG deliverables",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 bg-[#0a0a0a] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              "repeating-linear-gradient(45deg, #c41230 0, #c41230 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c41230]" />
            <span className="text-[#c41230] text-xs font-semibold tracking-[0.3em] uppercase">
              What We Offer
            </span>
          </div>
          <h1
            className="text-white leading-tight max-w-2xl"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 600,
            }}
          >
            Comprehensive Architectural & Design Services
          </h1>
          <p className="text-stone-400 mt-6 max-w-xl">
            From initial concept to construction completion, we offer the full
            spectrum of professional architectural services — all under one
            roof.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-0 divide-y divide-stone-100">
            {services.map((service, i) => (
              <div
                key={service.number}
                className="py-14 grid grid-cols-1 lg:grid-cols-3 gap-8 group"
              >
                {/* Left: Number + Title */}
                <div>
                  <span className="text-stone-200 text-sm font-medium tracking-widest block mb-2">
                    {service.number}
                  </span>
                  <h2
                    className="text-stone-900 leading-tight"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </h2>
                </div>

                {/* Middle: Description */}
                <div className="lg:col-span-1">
                  <p className="text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right: Deliverables */}
                <div>
                  <p className="text-xs text-stone-400 tracking-widest uppercase mb-4">
                    What You Receive
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-[#c41230] flex-shrink-0 mt-2" />
                        <span className="text-stone-600 text-sm">{item}</span>
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
      <section className="py-20 bg-[#f9f8f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-stone-900 mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 600,
            }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-stone-500 mb-8 max-w-xl mx-auto">
            Contact us today to discuss which services best fit your project
            requirements. We offer consultations across Baguio City and
            Northern Luzon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#c41230] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#8b0000] transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-10 py-4 border border-stone-300 text-stone-800 text-sm font-semibold tracking-widest uppercase hover:border-stone-800 transition-colors duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
