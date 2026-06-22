export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  description: string;
  deliverables: string[];
  relatedProjectSlugs: string[];
  faqs: ServiceFAQ[];
}

export const services: ServiceData[] = [
  {
    slug: "architectural-design",
    title: "Architectural Design",
    metaTitle: "Architectural Design Services in Baguio City | FPA Design Consultancy",
    metaDescription:
      "Licensed architectural design services in Baguio City and across the Philippines. From schematic concept to construction documents — residential and commercial projects by Arch. Friendzel B. Pengi, UAP.",
    keywords: [
      "architectural design Baguio",
      "architect Baguio City",
      "residential architect Philippines",
      "commercial building design Baguio",
      "architectural firm Benguet",
    ],
    description:
      "From concept to construction documents, we design buildings that are functional, beautiful, and built to last. We handle residential, commercial, and institutional projects of all scales.",
    deliverables: [
      "Schematic design options",
      "Floor plan development",
      "Elevation & section drawings",
      "3D visualization renders",
      "Final construction drawings",
    ],
    relatedProjectSlugs: [
      "bungalow-residence-with-loft-nueva-vizcaya",
      "2-storey-residence-ifugao",
      "bungalow-residence-with-loft-la-union",
      "3-bedroom-bungalow-residence-tagudin",
      "3-storey-office-building-ifugao",
    ],
    faqs: [
      {
        question: "How much does architectural design cost in the Philippines?",
        answer:
          "Architectural fees follow the UAP Schedule of Minimum Basic Fees, typically ranging from 5–10% of total construction cost for full design and supervision services. FPA Design Consultancy provides project-specific quotations after an initial consultation.",
      },
      {
        question: "How long does an architectural design project take?",
        answer:
          "Schematic design typically takes 2–4 weeks. Full construction document sets take an additional 4–8 weeks depending on project scale and complexity. We provide a detailed timeline at the start of every engagement.",
      },
      {
        question: "Do you design both residential and commercial buildings?",
        answer:
          "Yes — FPA Design Consultancy handles residential homes, commercial buildings, offices, and mixed-use projects across the Philippines and for international Filipino clients.",
      },
      {
        question: "Are you a licensed architect in the Philippines?",
        answer:
          "Yes. Arch. Friendzel B. Pengi is a licensed architect registered with the Professional Regulation Commission (PRC) under Republic Act 9266 and a member of the United Architects of the Philippines (UAP).",
      },
    ],
  },
  {
    slug: "construction-project-management",
    title: "Construction Project Management",
    metaTitle: "Construction Project Management Baguio City | FPA Design Consultancy",
    metaDescription:
      "Professional construction project management services in the Philippines. End-to-end contractor coordination, scheduling, cost control, and quality oversight by FPA Design Consultancy, Baguio City.",
    keywords: [
      "construction project management Philippines",
      "construction manager Baguio",
      "project management architect Philippines",
      "construction coordination Baguio City",
    ],
    description:
      "We manage the full lifecycle of your construction project — from contractor selection and procurement to scheduling, cost control, and quality oversight.",
    deliverables: [
      "Contractor coordination",
      "Schedule management",
      "Cost monitoring & reporting",
      "Quality control inspections",
      "Project closeout documentation",
    ],
    relatedProjectSlugs: [
      "bungalow-residence-with-loft-nueva-vizcaya",
      "2-storey-residence-ifugao",
      "3-bedroom-bungalow-residence-tagudin",
      "3-storey-office-building-ifugao",
    ],
    faqs: [
      {
        question: "What is construction project management?",
        answer:
          "Construction project management covers the full lifecycle of a building project — from contractor procurement and scheduling to cost control, quality oversight, and formal project closeout.",
      },
      {
        question:
          "What is the difference between construction supervision and project management?",
        answer:
          "Construction supervision focuses on architectural quality compliance on-site. Project management takes a broader view — covering procurement, scheduling, budgets, vendor coordination, and formal documentation.",
      },
      {
        question: "Can you manage a construction project remotely?",
        answer:
          "Yes. We offer remote project management services for overseas Filipino clients with projects in the Philippines, coordinating with local contractors and providing regular digital progress reports and documentation.",
      },
    ],
  },
  {
    slug: "construction-supervision",
    title: "Construction Supervision",
    metaTitle: "Construction Supervision Services Philippines | FPA Design Consultancy",
    metaDescription:
      "On-site architectural construction supervision in Baguio City and across the Philippines. Ensuring quality, plan compliance, and material standards on every project — FPA Design Consultancy.",
    keywords: [
      "construction supervision Philippines",
      "architectural supervision Baguio",
      "building inspection Benguet",
      "construction quality control Philippines",
    ],
    description:
      "On-site architectural supervision ensures that construction work faithfully follows the approved plans, specifications, and quality standards.",
    deliverables: [
      "Regular site visits",
      "Site instruction issuance",
      "Material approval",
      "Progress documentation",
      "Punch list & snagging",
    ],
    relatedProjectSlugs: [
      "bungalow-residence-with-loft-nueva-vizcaya",
      "2-storey-residence-ifugao",
      "3-bedroom-bungalow-residence-tagudin",
      "3-storey-office-building-ifugao",
    ],
    faqs: [
      {
        question: "What does a construction supervisor do?",
        answer:
          "An architectural supervisor makes regular site visits, issues site instructions, approves materials, documents construction progress, and ensures the finished work faithfully matches the approved design plans and specifications.",
      },
      {
        question: "How often do you visit the construction site?",
        answer:
          "Site visit frequency depends on the construction phase and scope. During critical structural phases, visits may be weekly; during routine phases, bi-weekly or monthly visits are common. We coordinate scheduling with your contractor.",
      },
      {
        question: "Is construction supervision required in the Philippines?",
        answer:
          "Under the National Building Code of the Philippines (PD 1096), a licensed architect or civil engineer must supervise construction of buildings requiring a permit. FPA Design Consultancy provides fully compliant supervision documentation.",
      },
    ],
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    metaTitle: "Interior Design Services Baguio City | FPA Design Consultancy",
    metaDescription:
      "Interior design services in Baguio City and across the Philippines. Residential and commercial interiors — space planning, material selection, furniture layouts, and lighting design by FPA Design Consultancy.",
    keywords: [
      "interior design Baguio",
      "interior designer Baguio City",
      "interior design Philippines",
      "home interior design Benguet",
      "commercial interior design Baguio",
    ],
    description:
      "We design interior environments that reflect your lifestyle and brand while optimizing comfort, function, and aesthetics. Every material, finish, and fixture is purposefully selected.",
    deliverables: [
      "Interior concept development",
      "Space planning & layout",
      "Material & finish boards",
      "Furniture layout plans",
      "Lighting design coordination",
    ],
    relatedProjectSlugs: [
      "bungalow-residence-with-loft-nueva-vizcaya",
      "3-bedroom-bungalow-residence-tagudin",
      "home-office-renovation-baguio",
    ],
    faqs: [
      {
        question: "Can you design interiors for an existing home?",
        answer:
          "Yes. We work on both new-build interiors and existing homes — redesigning, renovating, or refurnishing spaces to better match your lifestyle and aesthetic preferences.",
      },
      {
        question: "What interior design styles do you specialize in?",
        answer:
          "Our portfolio spans modern minimalist, contemporary tropical, biophilic, and industrial-meets-warm aesthetics. We adapt our design approach to your preferences, the building context, and the local climate.",
      },
      {
        question: "Do you handle furniture and finish sourcing?",
        answer:
          "We provide detailed material and furniture specifications and can coordinate with local suppliers and fabricators. Full procurement assistance is available upon request.",
      },
      {
        question: "How much does interior design cost in the Philippines?",
        answer:
          "Interior design fees vary based on scope, space size, and finish level. FPA Design Consultancy provides a detailed scope and fee proposal after an initial consultation.",
      },
    ],
  },
  {
    slug: "space-planning",
    title: "Space Planning",
    metaTitle: "Space Planning Services Philippines | FPA Design Consultancy Baguio",
    metaDescription:
      "Professional space planning for residential, commercial, and institutional properties in the Philippines. Optimize every square meter with FPA Design Consultancy, Baguio City.",
    keywords: [
      "space planning Philippines",
      "space planning Baguio",
      "floor plan optimization Philippines",
      "commercial space planning",
      "residential space planning Philippines",
    ],
    description:
      "Efficient space planning ensures that every square meter of your property is used meaningfully — whether for a home, office, retail space, or institutional facility.",
    deliverables: [
      "Needs analysis",
      "Flow & circulation studies",
      "Zoning layout plans",
      "Furniture arrangement plans",
      "Space efficiency review",
    ],
    relatedProjectSlugs: [
      "bungalow-residence-with-loft-nueva-vizcaya",
      "3-bedroom-bungalow-residence-tagudin",
      "3-storey-office-building-ifugao",
    ],
    faqs: [
      {
        question: "What is space planning in architecture?",
        answer:
          "Space planning is the analysis and optimization of a building's interior layout — determining how spaces relate to each other, how people move through them, and how each area is allocated to best serve its intended function.",
      },
      {
        question: "Do you offer space planning for commercial properties?",
        answer:
          "Yes. We provide space planning for offices, retail spaces, hospitality venues, and institutional facilities — maximizing efficiency, circulation, and user experience.",
      },
      {
        question: "Can space planning help me make the most of a small lot?",
        answer:
          "Absolutely. Efficient space planning is especially valuable for compact lots and small homes, ensuring that every square meter is purposeful, comfortable, and visually generous.",
      },
    ],
  },
  {
    slug: "cabinet-design",
    title: "Cabinet Design",
    metaTitle: "Custom Cabinet Design Philippines | FPA Design Consultancy Baguio",
    metaDescription:
      "Custom cabinet and millwork design in the Philippines — kitchens, bathrooms, bedrooms, and workspaces. Coordinated with your overall interior design by FPA Design Consultancy, Baguio City.",
    keywords: [
      "cabinet design Philippines",
      "custom kitchen cabinets Baguio",
      "built-in wardrobe design Philippines",
      "millwork design Baguio City",
      "cabinet design Benguet",
    ],
    description:
      "Custom cabinet and millwork design for kitchens, bathrooms, bedrooms, and workspaces — designed to maximize storage, fit your space perfectly, and match your overall design scheme.",
    deliverables: [
      "Cabinet layout plans",
      "Elevation drawings",
      "Material & hardware specification",
      "Shop drawing coordination",
      "Installation supervision",
    ],
    relatedProjectSlugs: [
      "bungalow-residence-with-loft-nueva-vizcaya",
      "home-office-renovation-baguio",
    ],
    faqs: [
      {
        question: "What types of cabinets do you design?",
        answer:
          "We design kitchen cabinets, bathroom vanities, built-in bedroom wardrobes, TV feature wall units, home office storage, and custom display shelving — all coordinated to match the overall interior design of your space.",
      },
      {
        question: "Do you fabricate the cabinets you design?",
        answer:
          "We produce detailed fabrication drawings for local cabinet makers and millwork shops, and can supervise fabrication and installation to ensure quality and accuracy.",
      },
      {
        question:
          "Can cabinet design be done separately from a full interior design project?",
        answer:
          "Yes. We offer standalone cabinet design services for kitchens, wardrobes, or home offices — without requiring a full interior design engagement.",
      },
    ],
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    metaTitle: "Renovation & Remodeling Design Baguio City | FPA Design Consultancy",
    metaDescription:
      "Professional renovation and remodeling design in Baguio City and across the Philippines. Room transformations, home renovations, and commercial remodels by FPA Design Consultancy.",
    keywords: [
      "renovation design Baguio",
      "home renovation Baguio City",
      "room renovation Philippines",
      "remodeling design Benguet",
      "house renovation architect Philippines",
    ],
    description:
      "We transform existing spaces through thoughtful renovation — improving functionality, updating aesthetics, and adding value to your property without unnecessary demolition.",
    deliverables: [
      "Existing conditions survey",
      "Renovation concept design",
      "Structural assessment coordination",
      "Phasing plan",
      "Permit assistance if required",
    ],
    relatedProjectSlugs: ["home-office-renovation-baguio"],
    faqs: [
      {
        question: "How much does a room renovation cost in the Philippines?",
        answer:
          "Renovation costs vary based on scope, materials, and finishes. A basic room renovation starts from ₱50,000; comprehensive transformations with premium finishes range higher. FPA Design Consultancy provides detailed cost estimates after assessing your space.",
      },
      {
        question: "Do you handle renovation building permits?",
        answer:
          "For structural renovations or additions requiring a permit under the National Building Code, yes — we prepare and process all permit documentation and coordinate with the relevant local government unit.",
      },
      {
        question: "Can you renovate a space without fully gutting it?",
        answer:
          "Yes. We assess your existing space and recommend the most efficient renovation approach, which often involves targeted design interventions rather than a complete strip-out — saving time and cost.",
      },
      {
        question: "Do you renovate commercial spaces?",
        answer:
          "Yes. We handle both residential and commercial renovation projects — offices, retail stores, restaurants, and mixed-use spaces across the Philippines.",
      },
    ],
  },
  {
    slug: "building-permit-documentation",
    title: "Building Permit Documentation",
    metaTitle:
      "Building Permit Documentation Philippines | FPA Design Consultancy Baguio",
    metaDescription:
      "Building permit preparation and processing in Baguio City and across the Philippines. Full compliance with the National Building Code — architectural drawings, Form B, LGU coordination by FPA Design Consultancy.",
    keywords: [
      "building permit Philippines",
      "building permit Baguio City",
      "building permit processing Benguet",
      "National Building Code Philippines",
      "building permit architect Baguio",
    ],
    description:
      "We prepare and process all permit documents required by the National Building Code of the Philippines and your local government unit — ensuring full compliance and a smooth approval process.",
    deliverables: [
      "Architectural permit drawings",
      "Form B (Building Permit Application)",
      "Sanitary & electrical coordination",
      "LGU submission & follow-up",
      "Certificate of Occupancy support",
    ],
    relatedProjectSlugs: [
      "bungalow-residence-with-loft-nueva-vizcaya",
      "2-storey-residence-ifugao",
      "bungalow-residence-with-loft-la-union",
      "3-bedroom-bungalow-residence-tagudin",
      "3-storey-office-building-ifugao",
    ],
    faqs: [
      {
        question: "How long does a building permit take in the Philippines?",
        answer:
          "Processing times vary by LGU. In Baguio City and Benguet, standard residential permits typically take 3–8 weeks. FPA Design Consultancy handles all documentation and conducts regular LGU follow-up to expedite the process.",
      },
      {
        question:
          "What documents are needed for a building permit in the Philippines?",
        answer:
          "Required documents include architectural plans, structural drawings, electrical and sanitary plans, Form B (Building Permit Application), fire safety documents, and proof of property ownership. FPA Design Consultancy prepares and coordinates all of these on your behalf.",
      },
      {
        question:
          "Can you process permits for projects outside Baguio City?",
        answer:
          "Yes. We process building permits for projects across the Philippines, coordinating with the relevant local government unit wherever your project is located.",
      },
      {
        question:
          "Is a licensed architect required for a building permit in the Philippines?",
        answer:
          "Yes. Under the National Building Code of the Philippines (PD 1096), a licensed architect must sign and seal all architectural drawings submitted for a building permit. Arch. Friendzel B. Pengi, UAP is duly licensed by the PRC.",
      },
    ],
  },
  {
    slug: "3d-visualization-rendering",
    title: "3D Visualization & Rendering",
    metaTitle:
      "3D Architectural Visualization & Rendering Philippines | FPA Design Consultancy",
    metaDescription:
      "Photorealistic 3D architectural visualization and rendering in the Philippines. Exterior and interior renders, virtual walkthroughs using Lumion and Enscape — by FPA Design Consultancy, Baguio City.",
    keywords: [
      "3D architectural rendering Philippines",
      "architectural visualization Baguio",
      "Lumion rendering Philippines",
      "photorealistic architectural renders",
      "3D visualization architect Baguio City",
    ],
    description:
      "Photorealistic 3D renders and walkthroughs help you visualize your project before ground is broken — making it easier to approve designs, coordinate with contractors, and share your vision.",
    deliverables: [
      "Exterior 3D renders",
      "Interior 3D renders",
      "Bird's-eye perspective views",
      "Virtual walkthrough (upon request)",
      "Presentation-ready output files",
    ],
    relatedProjectSlugs: [
      "bungalow-residence-with-loft-nueva-vizcaya",
      "2-storey-residence-ifugao",
      "bungalow-residence-with-loft-la-union",
      "3-bedroom-bungalow-residence-tagudin",
      "3-storey-office-building-ifugao",
    ],
    faqs: [
      {
        question: "What software do you use for 3D visualization?",
        answer:
          "FPA Design Consultancy uses Lumion and Enscape for photorealistic architectural rendering and virtual walkthroughs, with SketchUp and Revit Architecture as the 3D modeling base.",
      },
      {
        question: "Can I see 3D renders before approving the design?",
        answer:
          "Yes — 3D visualization is a standard part of our design process. We produce exterior and interior renders to help you see, understand, and approve your design with confidence before construction begins.",
      },
      {
        question: "Do you offer virtual walkthroughs?",
        answer:
          "Yes. We produce video walkthroughs for client presentations and contractor briefings. This is particularly valuable for overseas clients who cannot visit the site in person.",
      },
      {
        question:
          "Can 3D renders be used for marketing or investor presentations?",
        answer:
          "Absolutely. Our presentation-ready renders and walkthroughs are well-suited for property marketing, pre-selling, investor pitches, and social media content.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
