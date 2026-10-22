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
      { href: "/guides/building-on-sloping-lot-baguio", label: "Building on a sloping lot in Baguio" },
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
    updated: "2026-10-22",
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
          "Architect fees in the Philippines are guided by the 2010 Standards of Professional Practice for architects (SPP Document 201 for pre-design services and SPP Document 202 for regular design services). For full design and supervision services they typically range from 8–12% of the total construction cost, depending on the project type, size and complexity. FPA Design Consultancy offers a free initial consultation and gives a project-specific, itemized quotation.",
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
      { href: "/guides/architect-fees-philippines", label: "How much does an architect cost in the Philippines?" },
      { href: "/guides/building-on-sloping-lot-baguio", label: "Building on a sloping lot in Baguio" },
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
      { href: "/guides/typhoon-resistant-house-design-philippines", label: "Designing a typhoon-resistant house" },
    ],
  },
  {
    slug: "architect-fees-philippines",
    title: "How Much Does an Architect Cost in the Philippines?",
    metaTitle: "Architect Fees in the Philippines | FPA Design Consultancy",
    metaDescription:
      "How Philippine architects charge: percentage of construction cost, what the fee covers and leaves out, paying in stages, and a worked example for a family home.",
    excerpt:
      "How licensed architects in the Philippines charge, what the fee covers, what it leaves out, and how to compare quotations fairly.",
    published: "2026-10-22",
    updated: "2026-10-22",
    readingMinutes: 6,
    intro:
      "The architect's fee is one of the first questions clients ask, and one of the most confusing. This guide explains how licensed architects in the Philippines usually charge, what the fee covers, what it doesn't, and how to compare quotations so you aren't comparing different things.",
    sections: [
      {
        heading: "How architects usually charge",
        paragraphs: [
          "For houses and most building projects, the fee is usually a percentage of the construction cost. For full design and construction supervision services it typically ranges from 8–12% of the total construction cost, depending on the type, size and complexity of the project.",
          "Other ways of charging include a fixed lump-sum fee for a clearly defined scope, and time-based fees for consultations or small jobs. Whatever the method, the fee and the scope of work should be written into a contract before design starts.",
        ],
      },
      {
        heading: "Where the percentages come from",
        paragraphs: [
          "Fees are guided by the Standards of Professional Practice (SPP) for architects. The current edition was approved by the Board of Architecture in 2010 under the Architecture Act (RA 9266), replacing the 1979 UAP documents. SPP Document 201 covers pre-design services, such as consultation, site analysis, feasibility studies and architectural programming. SPP Document 202 covers regular design services, including the recommended minimum fees. The recommended percentage depends on the kind of building: more complex buildings carry higher percentages, and homes, with their many details per square meter, sit toward the upper end. The final fee is agreed between you and your architect.",
        ],
      },
      {
        heading: "What the fee usually covers",
        list: [
          "Pre-design services, if you need them: site analysis, feasibility studies and the architectural program (SPP Document 201). These are usually agreed as a separate service.",
          "Schematic design: layout options and the overall concept, based on your brief, lot and budget.",
          "Design development: the chosen design worked out in detail, often with 3D renders.",
          "Construction documents: the plans, sections, details and specifications needed to build and to get the permit.",
          "Coordination with the structural, electrical, sanitary and plumbing engineers. Some architects include the engineering designs and some quote them separately, so ask.",
          "Help choosing a contractor, and construction-phase services such as site supervision, if they're part of the agreed scope.",
        ],
      },
      {
        heading: "What the fee usually doesn't cover",
        list: [
          "Building permit fees and other government charges paid to the city or municipality",
          "The lot survey and the soil investigation",
          "The contractor's cost of building the house",
          "Travel to distant sites, if the contract says it is charged separately",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "For a 120 m² family home with a construction cost of ₱4,800,000, a fee of 8–12% for full design and supervision comes to about ₱384,000–₱576,000. It is a planning figure, not a quote: the actual fee depends on the agreed scope.",
        ],
        note:
          "Our guide to house construction costs in Baguio shows how this fits into a full budget.",
      },
      {
        heading: "Paying in stages",
        paragraphs: [
          "Fees are normally paid in stages tied to the design phases, so you pay as each stage is delivered rather than all at once. The schedule should be written into the contract.",
        ],
      },
      {
        heading: "How to compare quotations",
        list: [
          "Check that the architect is licensed by the PRC. Only a licensed architect can sign and seal the architectural documents for your building permit.",
          "Compare the scope, not just the price: number of design options and revisions, engineering designs, permit processing and supervision visits.",
          "Ask how long each phase takes and what happens if you change the design.",
          "Be careful with very cheap \"plans only\" offers. Plans that aren't signed and sealed by licensed professionals won't get a permit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the architect's fee based on the total construction cost?",
        answer:
          "Usually, yes. For full design and supervision services, fees in the Philippines typically range from 8–12% of the total construction cost. A fixed fee can also be agreed for a clearly defined scope.",
      },
      {
        question: "Can I hire an architect for the permit plans only?",
        answer:
          "Yes. Design-only services cost less than full design and supervision. The plans still need to be signed and sealed by a licensed architect and licensed engineers to get a building permit.",
      },
      {
        question: "Do you charge for the first consultation?",
        answer:
          "No. FPA Design Consultancy offers a free initial consultation. Afterwards you receive a project-specific, itemized quotation.",
      },
    ],
    relatedServiceSlugs: ["architectural-design", "construction-supervision", "building-permit-documentation"],
    relatedLinks: [
      { href: "/guides/house-construction-cost-baguio", label: "How much does it cost to build a house in Baguio?" },
      { href: "/guides/building-permit-requirements-baguio-city", label: "Building permit requirements in Baguio City" },
    ],
  },
  {
    slug: "building-on-sloping-lot-baguio",
    title: "Building on a Sloping Lot in Baguio",
    metaTitle: "Building on a Sloping Lot in Baguio | FPA Design Consultancy",
    metaDescription:
      "What to check before building on a steep lot in Baguio: geohazard maps, surveys and soil tests, retaining walls, drainage, and house designs that follow the slope.",
    excerpt:
      "Geohazard maps, surveys, soil tests, retaining walls and drainage: what to check before you build on a hillside lot, and designs that make the slope work for you.",
    published: "2026-10-22",
    updated: "2026-10-22",
    readingMinutes: 6,
    intro:
      "Many lots in Baguio and the rest of Benguet are on steep hillsides. A slope can give you views and a house with real character, but it adds cost and risk if it isn't handled properly. This guide covers what to check before you buy or build, and the design choices that make a sloping lot work.",
    sections: [
      {
        heading: "Check the lot before you commit",
        list: [
          "Look the lot up on the geohazard maps of the Mines and Geosciences Bureau (MGB), which show landslide and flood susceptibility.",
          "Ask the City Planning office about the zoning and any restrictions in the area. Areas hit by landslides can be declared no-build zones.",
          "Have a geodetic engineer do a topographic survey. Accurate contours are where a hillside design starts.",
          "Have a soil investigation done. The structural engineer needs it to design the foundations and retaining walls.",
        ],
      },
      {
        heading: "Design with the slope, not against it",
        list: [
          "Split-level or stepped floor plans follow the contours and cut down on excavation and retaining walls.",
          "Stepped foundations let the house sit into the hillside instead of on a large flattened platform.",
          "Place the house on the most stable part of the lot, and keep deep cuts away from the bottom of the slope.",
          "Balance cut and fill, so soil isn't hauled away or dumped on the slope.",
          "Plan the driveway, parking and entrance at road level early. Access often decides the layout.",
        ],
      },
      {
        heading: "Retaining walls and foundations",
        paragraphs: [
          "Retaining walls and foundations on a slope must be designed by a licensed civil or structural engineer, following the structural code and the soil investigation. Walls need drainage behind them, such as weep holes and free-draining backfill, so water can't build up pressure. Tall walls should not rely on unreinforced stone or riprap.",
        ],
      },
      {
        heading: "Drainage is the most important detail",
        paragraphs: [
          "Most slope failures during the rainy season are triggered by water. On a hillside, drainage deserves as much attention as the house itself:",
        ],
        list: [
          "Collect all roof water in gutters and downspouts, and pipe it away from the slope.",
          "Lead surface water through lined canals to the street drainage.",
          "Install subsurface drains behind retaining walls and around foundations.",
          "Don't let water pond near the house or soak into the slope above it.",
          "Keep or plant deep-rooted vegetation on slopes you don't build on.",
        ],
      },
      {
        heading: "Budget for the slope",
        paragraphs: [
          "Excavation, retaining walls, deeper foundations and drainage can add a lot to the structural cost on a steep lot. A design that follows the slope keeps that extra cost down. Our guide to house construction costs in Baguio explains how to build up a realistic budget.",
        ],
      },
      {
        heading: "Permits",
        paragraphs: [
          "A house on a sloping lot needs the same building permit as any other, with structural plans that cover the foundations and retaining walls. If the lot has trees, especially Benguet pines, cutting or relocating them needs government approval. Our building permit guide lists the documents.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is it safe to build on a steep lot in Baguio?",
        answer:
          "Often, yes, when the lot isn't in a high landslide-susceptibility area and the house, foundations, retaining walls and drainage are engineered for the site. Check the MGB geohazard maps and get a soil investigation before you design.",
      },
      {
        question: "Is building on a slope more expensive?",
        answer:
          "Usually. Excavation, retaining walls, foundations and drainage add cost. A design that follows the slope, with split levels and stepped foundations, keeps the extra cost down.",
      },
      {
        question: "Do I need a soil test for a sloping lot?",
        answer:
          "It's strongly recommended. The structural engineer needs the soil data to design safe foundations and retaining walls for a hillside.",
      },
    ],
    relatedServiceSlugs: ["architectural-design", "construction-supervision", "building-permit-documentation"],
    relatedLinks: [
      { href: "/guides/building-permit-requirements-baguio-city", label: "Building permit requirements in Baguio City" },
      { href: "/guides/house-construction-cost-baguio", label: "How much does it cost to build a house in Baguio?" },
      { href: "/locations/baguio-city-architect", label: "Architect in Baguio City" },
    ],
  },
  {
    slug: "typhoon-resistant-house-design-philippines",
    title: "Designing a Typhoon-Resistant House in the Philippines",
    metaTitle: "Typhoon-Resistant House Design | FPA Design Consultancy",
    metaDescription:
      "How to design a house that stands up to typhoons in the Philippines: the structural code, roof shape, roof-to-wall connections, openings and flood levels.",
    excerpt:
      "Roof shape, roof-to-wall connections, openings and floor levels: the design decisions that help a house come through typhoon season.",
    published: "2026-10-22",
    updated: "2026-10-22",
    readingMinutes: 6,
    intro:
      "On average, about 20 tropical cyclones enter the Philippine Area of Responsibility every year, and most typhoon damage to houses starts at the roof. This guide covers the design decisions that help a house come through a typhoon, from the roof shape to the floor level. Use it to brief your architect and engineer. It isn't a substitute for an engineered design.",
    sections: [
      {
        heading: "Design to the structural code",
        paragraphs: [
          "The National Structural Code of the Philippines (NSCP 2015) sets the wind loads a building must resist. They depend on where the building is, since design wind speeds differ across the country, and on how exposed the site is. Coastal sites and open hilltops see higher wind loads. A licensed structural engineer calculates them for your lot.",
        ],
      },
      {
        heading: "Roof shape and overhangs",
        list: [
          "Hip roofs, which slope down on all four sides, generally perform better in strong winds than gable roofs with tall, flat end walls.",
          "A moderate roof pitch is better than a very flat or very steep one.",
          "Keep eaves and overhangs short and well tied. Long, unsupported overhangs catch the wind and can pull the roof off.",
        ],
        note:
          "Our La Union bungalow uses a pyramidal hip roof designed for wind-load resistance. It's the defining feature of the house.",
      },
      {
        heading: "Tie the roof down",
        paragraphs: [
          "The weakest point is usually where the roof meets the walls. Research after Typhoon Yolanda found that roof panels are often the first thing lost. To prevent it:",
        ],
        list: [
          "Tie the roof framing to the wall beams with steel straps or connectors, not just nails or mortar.",
          "Fasten roofing sheets with the right fasteners, spaced closer at the edges and corners, where wind uplift is strongest.",
          "Use roofing and framing of adequate thickness for the design wind load.",
        ],
      },
      {
        heading: "A continuous load path",
        paragraphs: [
          "Wind forces have to travel from the roof through the walls and columns down to the foundations. Every link needs to be connected: roof to beams, beams to columns, walls to the frame and columns to footings. Reinforced concrete frames and properly reinforced hollow-block walls do this well when they're detailed and built correctly.",
        ],
      },
      {
        heading: "Doors and windows",
        paragraphs: [
          "Openings are weak points. If a window or door breaks during a typhoon, wind rushes in, pressure inside the house rises, and the roof can be pushed off from below. Strong frames, impact-resistant glass or storm shutters protect the openings, and with them the roof.",
        ],
      },
      {
        heading: "Water, flooding and the coast",
        list: [
          "Set the finished floor above known flood levels for the site, and plan where water will drain.",
          "Use gutters and downspouts sized for heavy rain.",
          "Near the coast, as in much of La Union and Ilocos Sur, use corrosion-resistant fasteners, connectors and finishes. Salt air corrodes ordinary steel.",
        ],
      },
      {
        heading: "Before each typhoon season",
        list: [
          "Check the roof fasteners and replace any rusted or loose ones.",
          "Clear gutters and drains.",
          "Trim trees and branches close to the house.",
          "Secure or store anything loose outdoors.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best roof for typhoons?",
        answer:
          "A well-tied hip roof with a moderate pitch and short overhangs generally performs best. How the roof is connected to the walls matters as much as its shape.",
      },
      {
        question: "Are concrete houses typhoon-proof?",
        answer:
          "Concrete walls resist wind well, but many concrete houses still lose their roofs. The roof framing and its connections to the walls are what usually fail, so they need as much attention as the walls.",
      },
      {
        question: "Can an existing house be made more typhoon-resistant?",
        answer:
          "Often, yes. Adding roof straps, upgrading fasteners and protecting windows can make a real difference. An engineer should check the existing structure first, and we can design the renovation.",
      },
    ],
    relatedServiceSlugs: ["architectural-design", "renovation-remodeling", "construction-supervision"],
    relatedLinks: [
      { href: "/locations/la-union-architect", label: "Architect in La Union" },
      { href: "/guides/house-construction-cost-baguio", label: "How much does it cost to build a house?" },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}
