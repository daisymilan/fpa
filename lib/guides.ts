export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
  note?: string;
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  published: string;
  updated: string;
  readingMinutes: number;
  intro: string;
  sections: GuideSection[];
  faqs: GuideFAQ[];
  relatedServiceSlugs: string[];
  relatedLinks: { href: string; label: string }[];
}

export const guides: Guide[] = [
  {
    slug: "building-permit-requirements-baguio-city",
    title: "Building Permit Requirements in Baguio City",
    metaTitle: "Baguio Building Permit Requirements | FPA Design Consultancy",
    metaDescription:
      "What you need for a building permit in Baguio City: documents, signed and sealed plans, clearances, the process and how long it takes.",
    excerpt:
      "The documents, plans and clearances you need before you can build in Baguio City, and how the process runs from locational clearance to occupancy permit.",
    published: "2026-10-21",
    updated: "2026-10-21",
    readingMinutes: 7,
    intro:
      "Every new house, extension or major renovation in Baguio City needs a building permit before work starts. The National Building Code of the Philippines (PD 1096) requires it, and in Baguio the permit is issued by the City Buildings and Architecture Office (CBAO), which has its own office separate from City Hall. This guide lists what the application usually needs and how the process runs. Requirements change from time to time, so always check the current checklist with the CBAO before you file.",
    sections: [
      {
        heading: "Who needs a building permit?",
        paragraphs: [
          "Section 301 of the National Building Code says no one may construct, alter, convert, move or demolish a building without first getting a building permit from the local Building Official. In practice that covers new houses, additions, structural alterations, and most renovations that change walls, floors or the roof.",
          "Building without a permit can lead to fines, stop-work orders and problems later, for example when you apply for an occupancy permit, connect utilities, or sell the property.",
        ],
      },
      {
        heading: "Documents you will usually need",
        list: [
          "The building permit application form, signed by the owner and by the licensed professionals responsible for each part of the design.",
          "Proof that you own or may build on the lot: a certified true copy of the land title (TCT) and the latest tax declaration and real property tax receipt. If you don't own the lot, a notarized lease or deed of sale and the owner's written consent.",
          "A locational (zoning) clearance from the City Planning office, confirming the building is allowed in that zone.",
          "Plans and documents signed and sealed by licensed professionals: architectural, structural (civil), electrical, sanitary and plumbing, plus mechanical where needed, with specifications, a bill of materials and a cost estimate.",
          "A Fire Safety Evaluation Clearance (FSEC) from the Bureau of Fire Protection.",
          "If you can't sign the forms yourself, a Special Power of Attorney (SPA) authorizing your representative.",
          "Copies of the professionals' PRC IDs and professional tax receipts.",
        ],
        note:
          "Baguio's CBAO checklist has also listed items such as a zoning compliance certificate, a waste disposal certificate from the City Environment and Parks Management Office (CEPMO), a construction logbook and tarpaulin, and a construction safety and health program. Ask the CBAO for the current version before you file.",
      },
      {
        heading: "Why the plans must be signed and sealed",
        paragraphs: [
          "Only licensed professionals may sign and seal the plans submitted for a permit: a PRC-licensed architect for the architectural documents (Republic Act 9266), and licensed civil, electrical, sanitary and mechanical engineers for theirs. A draftsman or contractor cannot sign them in the architect's place, and the Building Official will reject a set that isn't properly signed and sealed.",
        ],
      },
      {
        heading: "Things to check on a Baguio lot",
        paragraphs: [
          "Baguio's terrain and climate make some checks especially important before design starts:",
        ],
        list: [
          "Slope and soil: many Baguio lots are steep. Retaining walls, foundations and drainage need to be designed for the slope, and a soil investigation is often worth doing.",
          "Trees: if the lot has trees, especially Benguet pines, cutting or relocating them needs government approval. It is usually easier to design around them.",
          "Access and setbacks: check the road right-of-way, easements and the required setbacks for your zone before you fix the house's footprint.",
          "Rain and moisture: Baguio's long rainy season calls for careful waterproofing, roof drainage and ventilation.",
        ],
      },
      {
        heading: "The process, step by step",
        ordered: true,
        list: [
          "Design: your architect prepares the plans and coordinates the engineers' drawings.",
          "Locational clearance: apply at the City Planning office.",
          "Fire safety: secure the Fire Safety Evaluation Clearance from the Bureau of Fire Protection.",
          "Submission: file the complete set with the CBAO and pay the assessed fees.",
          "Evaluation: the office reviews the architectural, structural, electrical, sanitary and other documents and may ask for corrections.",
          "Release: once approved, the building permit is issued. Post it at the site while construction is going on.",
          "Completion: when construction is finished, apply for a Certificate of Occupancy before anyone moves in.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "Processing usually takes about 4–12 weeks, depending on how complete the documents are and how busy the office is. Incomplete or unsigned documents are the most common cause of delay, so it pays to submit a complete, checked set the first time.",
          "Once issued, a permit becomes void if work doesn't start within one year, or if the work is suspended or abandoned for 120 days.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a building permit for a renovation in Baguio?",
        answer:
          "Usually, yes. Renovations that change the structure, walls, roof, plumbing or electrical layout need a permit. Minor repairs such as repainting or replacing fixtures usually don't, but check with the CBAO if you are unsure.",
      },
      {
        question: "Can I apply for a building permit while I am abroad?",
        answer:
          "Yes. Your architect can prepare and coordinate the documents, and a representative can sign and file for you with a Special Power of Attorney. An SPA signed abroad usually needs to be apostilled or acknowledged at a Philippine embassy or consulate.",
      },
      {
        question: "How much is the building permit fee?",
        answer:
          "The fee is assessed by the Building Official based on the building's floor area, type of construction and use, so it differs from project to project. Ask for an assessment when you submit, and budget separately for the professional fees for the plans.",
      },
    ],
    relatedServiceSlugs: ["building-permit-documentation", "architectural-design"],
    relatedLinks: [
      { href: "/guides/house-construction-cost-baguio", label: "How much does it cost to build a house in Baguio?" },
      { href: "/locations/baguio-city-architect", label: "Architect in Baguio City" },
    ],
  },
  {
    slug: "house-construction-cost-baguio",
    title: "How Much Does It Cost to Build a House in Baguio?",
    metaTitle: "House Construction Cost in Baguio | FPA Design Consultancy",
    metaDescription:
      "Typical 2026 costs to build a house in Baguio: price per square meter by finish level, architect's fees, permits and what pushes the budget up.",
    excerpt:
      "Price per square meter by finish level, what an architect costs, the extra costs people forget, and a worked example for a typical family home.",
    published: "2026-10-21",
    updated: "2026-10-21",
    readingMinutes: 6,
    intro:
      "The honest answer is: it depends on the size of the house, the finish level and the lot. This guide gives you the ranges people use for planning in 2026, explains what makes Baguio different, and walks through an example so you can set a realistic budget before you talk to a contractor.",
    sections: [
      {
        heading: "Construction cost per square meter (2026)",
        paragraphs: [
          "Published 2026 estimates for houses in the Philippines fall roughly into these ranges for construction alone, per square meter of floor area:",
        ],
        list: [
          "Basic finish: about ₱28,000–₱35,000 per m²",
          "Standard / mid-range finish: about ₱35,000–₱50,000 per m²",
          "High-end finish: about ₱50,000–₱75,000 per m²",
          "Luxury: ₱75,000 per m² and up",
        ],
        note:
          "These are planning figures, not quotes. Material prices change, and the same house can cost very differently on two different lots.",
      },
      {
        heading: "What makes building in Baguio different",
        list: [
          "Sloped lots: retaining walls, deeper foundations, excavation and drainage can add a lot to the structural cost.",
          "Climate: the cool, wet highland climate calls for better waterproofing, roofing and moisture control.",
          "Access: tight roads and steep sites can make hauling materials slower and more expensive.",
          "Structure: designs must meet the structural code for earthquakes and typhoon winds, which affects the frame and the roof.",
        ],
      },
      {
        heading: "Architect's fees",
        paragraphs: [
          "Architect fees in the Philippines are guided by the UAP schedule of fees (UAP Document 201). For full design and supervision services they typically range from 8–12% of the total construction cost, depending on the project type, size and complexity. FPA Design Consultancy offers a free initial consultation and gives a project-specific, itemized quotation.",
        ],
      },
      {
        heading: "Costs people often forget",
        list: [
          "Permits and clearances (building permit, locational clearance, fire safety evaluation, occupancy permit)",
          "Engineering designs: structural, electrical, sanitary and plumbing",
          "Soil investigation and site preparation, especially on a slope",
          "Utility connections for water and electricity",
          "Fences, gates, driveway, landscaping and drainage outside the house",
          "A contingency of around 10–15% for price changes and surprises during construction",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Say you are planning a two-storey family home with 120 m² of floor area and a standard finish at ₱40,000 per m²:",
        ],
        list: [
          "Construction: 120 m² × ₱40,000 = ₱4,800,000",
          "Architect's design and supervision at 8–12%: about ₱384,000–₱576,000",
          "Contingency at 10%: about ₱480,000",
          "Then add permits, engineering, utility connections and any site work, which depend on the lot",
        ],
        note:
          "The example shows how a budget is built up. It isn't a quote. Your architect can give you a much closer estimate once the lot and the brief are known.",
      },
      {
        heading: "How to keep the cost under control",
        list: [
          "Fix your budget and priorities before design starts, and share them with your architect.",
          "Keep the floor plan compact. Every extra square meter costs money to build and to maintain.",
          "Design with the slope, not against it, to reduce excavation and retaining walls.",
          "Get bids from licensed contractors on the same plans and bill of materials, so you compare like with like.",
          "Avoid changing the design once construction starts. Changes on site are the most expensive kind.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a 2-storey house cost in Baguio?",
        answer:
          "It depends on the floor area and finish level. As a planning figure, a standard-finish house costs about ₱35,000–₱50,000 per square meter to build, so a 120 m² two-storey house is roughly ₱4.2–₱6 million for construction alone, before design fees, permits and site work.",
      },
      {
        question: "Is it cheaper to buy a house plan online?",
        answer:
          "A stock plan costs less up front, but it isn't designed for your lot, slope or local requirements, and it still has to be adapted and signed and sealed by a licensed architect and engineers before you can get a permit. A design made for your lot often saves money during construction.",
      },
      {
        question: "Do you give free estimates?",
        answer:
          "FPA Design Consultancy offers a free initial consultation. After it, you receive a project-specific, itemized quotation for the design work.",
      },
    ],
    relatedServiceSlugs: ["architectural-design", "construction-project-management"],
    relatedLinks: [
      { href: "/guides/building-permit-requirements-baguio-city", label: "Building permit requirements in Baguio City" },
      { href: "/portfolio", label: "See houses we have designed" },
    ],
  },
  {
    slug: "ofw-guide-building-house-philippines",
    title: "An OFW's Guide to Building a House in the Philippines",
    metaTitle: "An OFW's Guide to Building a House in the Philippines",
    metaDescription:
      "How to build a house in the Philippines while working abroad: lot documents, budget, finding an architect and contractor, permits, SPA and progress updates.",
    excerpt:
      "From checking the lot title to the occupancy permit: how to plan, design and build your home in the Philippines while you work overseas.",
    published: "2026-10-21",
    updated: "2026-10-21",
    readingMinutes: 8,
    intro:
      "Building a house back home is one of the biggest reasons many OFWs work abroad, and one of the easiest projects to lose money on from a distance. This guide walks through the steps in order, with the checks that protect your savings while you are away.",
    sections: [
      {
        heading: "1. Get the lot and its documents in order",
        paragraphs: [
          "Before any design work, make sure the land is really buildable and really yours.",
        ],
        list: [
          "Get a certified true copy of the title from the Registry of Deeds, and check that the owner's name and the technical description match.",
          "Make sure the real property tax is paid and the tax declaration is up to date.",
          "Check road access, the slope, and whether water and power are available nearby.",
          "Ask the city or municipal planning office what the zoning allows on the lot.",
        ],
      },
      {
        heading: "2. Set a realistic budget",
        paragraphs: [
          "Work out how much you can spend in total, including design, permits, construction and a contingency of around 10–15%. If you need financing, OFWs who are Pag-IBIG members can look into its housing loan programs, and banks also offer construction loans.",
          "Plan your remittances around construction milestones, not all at once.",
        ],
      },
      {
        heading: "3. Hire a licensed architect",
        paragraphs: [
          "Only a PRC-licensed architect can sign and seal the architectural plans for your building permit. A good architect also turns your budget and your family's needs into a design that fits the lot.",
          "You don't need to fly home for the design. With video consultations, digital drawings and 3D renders, you can review every stage from abroad. Walkthrough videos let you see the house before it's built.",
        ],
      },
      {
        heading: "4. Choose a representative and prepare an SPA",
        paragraphs: [
          "Some steps need a signature or someone present in the Philippines: signing permit forms, meeting the contractor, or receiving documents. Choose someone you trust and give them a Special Power of Attorney (SPA) that clearly lists what they may do.",
          "An SPA signed abroad usually has to be notarized and then apostilled, or acknowledged at a Philippine embassy or consulate, before offices in the Philippines will accept it.",
        ],
      },
      {
        heading: "5. Get the building permit",
        paragraphs: [
          "Your architect prepares the plans and coordinates the structural, electrical and sanitary designs. Your representative or architect then files them with the Office of the Building Official together with the lot documents and clearances. Allow about 4–12 weeks, depending on the city or municipality.",
        ],
      },
      {
        heading: "6. Choose a licensed contractor",
        list: [
          "Hire a contractor licensed by the Philippine Contractors Accreditation Board (PCAB), and check the license is current.",
          "Ask two or three contractors to bid on the same plans and bill of materials, so the prices are comparable.",
          "Sign a written contract with the scope, price, schedule and payment milestones.",
          "Pay by completed milestones, directly to the contractor's business account, and keep every receipt. Avoid large advances.",
        ],
      },
      {
        heading: "7. Follow the construction from abroad",
        paragraphs: [
          "Ask for regular progress reports with photos and videos, tied to the payment milestones. Construction supervision by your architect checks that the work follows the approved plans and the material standards, so you aren't relying only on the contractor's word.",
          "Try not to change the design once construction starts. Changes on site cost the most, and they are hardest to manage from far away.",
        ],
      },
      {
        heading: "8. Finish properly",
        paragraphs: [
          "When the house is complete, do a final walkthrough (in person or by video) with a snag list, and make sure the contractor fixes the items before the final payment. Apply for the Certificate of Occupancy before anyone moves in.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I build a house in the Philippines without going home?",
        answer:
          "Yes. Design can be done fully remotely through video calls and digital drawings, and a trusted representative with a Special Power of Attorney can handle signatures and filings.",
      },
      {
        question: "How do I make sure my money is spent properly?",
        answer:
          "Use a written contract with a licensed contractor, pay only for completed milestones, pay the contractor's business account directly, keep receipts, and have an independent architect supervise the construction and report on progress.",
      },
      {
        question: "How long does it take to build a house in the Philippines?",
        answer:
          "Design for a typical single-family home takes about 4–8 weeks, and permits about 4–12 weeks more. Construction time depends on the size and the contractor, so ask for a schedule as part of the contract.",
      },
    ],
    relatedServiceSlugs: ["architectural-design", "construction-project-management", "3d-visualization-rendering"],
    relatedLinks: [
      { href: "/build-from-abroad", label: "How we work with OFW and overseas clients" },
      { href: "/guides/house-construction-cost-baguio", label: "How much does it cost to build a house?" },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}
