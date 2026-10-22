export interface LocationData {
  slug: string;
  city: string;
  province: string;
  region: string;
  isHeadquarters?: boolean;
  metaTitle: string;
  metaDescription: string;
  /** Last real content change (YYYY-MM-DD); the sitemap's lastmod. Update it when the page changes. */
  updated: string;
  h1: string;
  intro: string;
  context: string;
  /** Local design considerations shown under "Design Context". */
  considerations: string[];
  faqs: { question: string; answer: string }[];
  guideSlugs: string[];
  projectSlugs: string[];
  featuredServiceSlugs: string[];
}

export const locations: LocationData[] = [
  {
    slug: "baguio-city-architect",
    updated: "2026-10-22",
    city: "Baguio City",
    province: "Benguet",
    region: "Cordillera Administrative Region",
    isHeadquarters: true,
    metaTitle: "Architect in Baguio City, Benguet | FPA Design Consultancy",
    metaDescription:
      "Licensed architect in Baguio City, Benguet — residential, commercial and interior design, renovation, and building permits across the Cordillera.",
    h1: "Architect in Baguio City",
    intro:
      "FPA Design Consultancy is headquartered in Baguio City, Benguet — the highland capital of the Cordillera Administrative Region. Led by Arch. Friendzel B. Pengi, UAP, the firm provides full architectural, interior, and project management services to homeowners, developers, and institutions throughout Baguio City and the wider Cordillera.",
    context:
      "Baguio City's cool, cloud-prone highland climate at 1,500 metres above sea level demands architecture that addresses moisture management, thermal comfort, and passive heating. Every project we design in Baguio accounts for the city's distinct microclimate, the DPWH and LGU building code requirements specific to the region, and the highland architectural character that defines this unique Philippine city.",
    considerations: [
      "Steep lots: many Baguio sites need retaining walls, stepped foundations and careful drainage, so a topographic survey and soil investigation come first.",
      "Rain and fog: the long rainy season calls for thorough waterproofing, roof drainage and ventilation to keep interiors dry.",
      "Cool highland climate: the design focuses on keeping homes dry and comfortable all year rather than on cooling.",
      "Trees and setbacks: Benguet pines need government approval to cut or relocate, and setbacks and road right-of-way can limit the buildable area.",
    ],
    faqs: [
      {
        question: "Do you design houses in Baguio City?",
        answer:
          "Yes. Baguio City is our home base. We design new houses, extensions and renovations across the city, and our completed work includes a home office renovation in Baguio.",
      },
      {
        question: "Can you handle the building permit in Baguio?",
        answer:
          "Yes. We prepare the signed and sealed architectural documents, coordinate the engineers' drawings and file with the City Buildings and Architecture Office (CBAO). Our building permit guide lists the requirements.",
      },
      {
        question: "Is it harder to build on a sloping lot in Baguio?",
        answer:
          "It needs more engineering for retaining walls, foundations and drainage, but a design that follows the slope keeps the extra cost down and often gives you better views. Our guide to building on a sloping lot explains what to check.",
      },
    ],
    guideSlugs: ["building-permit-requirements-baguio-city", "building-on-sloping-lot-baguio", "house-construction-cost-baguio"],
    projectSlugs: ["home-office-renovation-baguio"],
    featuredServiceSlugs: [
      "architectural-design",
      "interior-design",
      "renovation-remodeling",
      "building-permit-documentation",
    ],
  },
  {
    slug: "ifugao-architect",
    updated: "2026-10-22",
    city: "Ifugao",
    province: "Ifugao",
    region: "Cordillera Administrative Region",
    metaTitle: "Architect in Ifugao, Cordillera | FPA Design Consultancy",
    metaDescription:
      "Architect in Ifugao — residential and commercial design and construction documents by FPA Design Consultancy. See our completed Ifugao projects.",
    h1: "Architect in Ifugao",
    intro:
      "FPA Design Consultancy has completed both residential and commercial architectural projects in Ifugao — bringing contemporary, climate-responsive design to the Cordillera highlands. Our Ifugao portfolio includes a two-storey tropical residence and a landmark three-storey commercial office building.",
    context:
      "Ifugao's highland setting, indigenous Cordilleran heritage, and the UNESCO World Heritage rice terrace landscape set a compelling context for architecture that honours place. Our designs apply bioclimatic principles suited to the cool tropical highland environment, incorporating natural materials and spatial organisation that connect the built work to the province's extraordinary landscape and cultural context.",
    considerations: [
      "Mountain terrain: steep, rain-soaked slopes mean the site, foundations and drainage need careful engineering.",
      "Heavy rainfall: roofs, gutters and site drainage are designed for long, intense rains.",
      "Heritage landscape: near the UNESCO-listed rice terraces, check the local rules with the municipality before design starts.",
      "Remote sites: material deliveries and the availability of workers affect cost and schedule, so they're planned early.",
    ],
    faqs: [
      {
        question: "Do you take on projects in Ifugao?",
        answer:
          "Yes. We have completed a two-storey residence and a three-storey office building in Ifugao, and we serve clients across the province from our Baguio City office.",
      },
      {
        question: "Who issues building permits in Ifugao?",
        answer:
          "The Office of the Building Official of the city or municipality where your lot is. We prepare the signed and sealed architectural documents, coordinate the engineers' drawings and confirm that office's checklist at the start, since requirements vary between local governments.",
      },
      {
        question: "Can we work with you if we live elsewhere or abroad?",
        answer:
          "Yes. Consultations can be held by video call and drawings are delivered digitally, so you can follow the design from anywhere. Our page for overseas clients explains how remote projects work.",
      },
    ],
    guideSlugs: ["building-on-sloping-lot-baguio", "typhoon-resistant-house-design-philippines", "ofw-guide-building-house-philippines"],
    projectSlugs: ["2-storey-residence-ifugao", "3-storey-office-building-ifugao"],
    featuredServiceSlugs: [
      "architectural-design",
      "3d-visualization-rendering",
      "construction-supervision",
      "building-permit-documentation",
    ],
  },
  {
    slug: "nueva-vizcaya-architect",
    updated: "2026-10-22",
    city: "Nueva Vizcaya",
    province: "Nueva Vizcaya",
    region: "Cagayan Valley",
    metaTitle: "Architect in Nueva Vizcaya | FPA Design Consultancy",
    metaDescription:
      "Residential design, 3D visualization and building permits in Nueva Vizcaya by FPA Design Consultancy, Baguio City. See our completed bungalow.",
    h1: "Architect in Nueva Vizcaya",
    intro:
      "FPA Design Consultancy serves clients in Nueva Vizcaya from our base in Baguio City, providing full architectural design, documentation, and building permit services across the province. Our completed modern bungalow project demonstrates our expertise in delivering refined residential design in Nueva Vizcaya.",
    context:
      "Nueva Vizcaya's warm interior climate and growing residential development make it an ideal setting for modern, climate-responsive homes. Our bungalow project in the province showcases how thoughtful architectural design — clean massing, a sculptural hip roof, and considered natural lighting — can deliver a compelling quality of life in an emerging residential location.",
    considerations: [
      "Warm valley climate: cross-ventilation, shaded openings and an insulated roof keep a home comfortable with less air-conditioning.",
      "Typhoons: northern Luzon is regularly crossed by typhoons, so the roof shape and roof-to-wall connections matter.",
      "Low-lying ground: lots near rivers or in low areas should be checked for flooding, with floor levels set above it.",
      "Earthquakes: as everywhere in Luzon, buildings are designed to the structural code for earthquake loads.",
    ],
    faqs: [
      {
        question: "Do you take on projects in Nueva Vizcaya?",
        answer:
          "Yes. Our completed work there includes a modern bungalow with a loft, and we serve clients across the province from our Baguio City office.",
      },
      {
        question: "Who issues building permits in Nueva Vizcaya?",
        answer:
          "The Office of the Building Official of the city or municipality where your lot is. We prepare the signed and sealed architectural documents, coordinate the engineers' drawings and confirm that office's checklist at the start, since requirements vary between local governments.",
      },
      {
        question: "Can we work with you if we live elsewhere or abroad?",
        answer:
          "Yes. Consultations can be held by video call and drawings are delivered digitally, so you can follow the design from anywhere. Our page for overseas clients explains how remote projects work.",
      },
    ],
    guideSlugs: ["typhoon-resistant-house-design-philippines", "architect-fees-philippines", "ofw-guide-building-house-philippines"],
    projectSlugs: ["bungalow-residence-with-loft-nueva-vizcaya"],
    featuredServiceSlugs: [
      "architectural-design",
      "space-planning",
      "3d-visualization-rendering",
      "building-permit-documentation",
    ],
  },
  {
    slug: "la-union-architect",
    updated: "2026-10-22",
    city: "La Union",
    province: "La Union",
    region: "Ilocos Region",
    metaTitle: "Architect in La Union | FPA Design Consultancy",
    metaDescription:
      "Climate-responsive, typhoon-ready home design and building permits in La Union by FPA Design Consultancy. See our completed La Union bungalow.",
    h1: "Architect in La Union",
    intro:
      "FPA Design Consultancy extends its architectural design and documentation services to La Union, serving clients across the province from our headquarters in Baguio City. Our completed coastal residential project in La Union demonstrates our ability to balance structural resilience with contemporary living in typhoon-prone locations.",
    context:
      "La Union's coastal position on the South China Sea places it in the path of seasonal typhoons and strong prevailing winds. Architecture here requires structural resilience alongside livability — a balance achieved in our La Union bungalow through an engineered pyramidal hip roof, protective overhangs, and a building form optimised for wind-load performance without sacrificing aesthetic refinement.",
    considerations: [
      "Typhoons and strong winds: a well-tied hip roof, short overhangs and protected openings help a house through typhoon season, as in our La Union bungalow.",
      "Salt air: near the coast, corrosion-resistant fasteners, roofing and finishes last much longer.",
      "Monsoon rain and flooding: floor levels and site drainage are set for heavy southwest-monsoon (habagat) rains and low-lying ground.",
      "Sun and heat: shading and cross-ventilation keep interiors comfortable.",
    ],
    faqs: [
      {
        question: "Do you take on projects in La Union?",
        answer:
          "Yes. Our completed work there includes a typhoon-ready bungalow with a loft, and we serve clients across the province from our Baguio City office.",
      },
      {
        question: "Who issues building permits in La Union?",
        answer:
          "The Office of the Building Official of the city or municipality where your lot is. We prepare the signed and sealed architectural documents, coordinate the engineers' drawings and confirm that office's checklist at the start, since requirements vary between local governments.",
      },
      {
        question: "How do you design a house for typhoons?",
        answer:
          "We start from the wind loads the structural code sets for the site, then use a hip roof, strong roof-to-wall connections, short overhangs and protected openings. Our typhoon guide explains each step.",
      },
    ],
    guideSlugs: ["typhoon-resistant-house-design-philippines", "architect-fees-philippines", "ofw-guide-building-house-philippines"],
    projectSlugs: ["bungalow-residence-with-loft-la-union"],
    featuredServiceSlugs: [
      "architectural-design",
      "space-planning",
      "3d-visualization-rendering",
      "building-permit-documentation",
    ],
  },
  {
    slug: "ilocos-sur-architect",
    updated: "2026-10-22",
    city: "Ilocos Sur",
    province: "Ilocos Sur",
    region: "Ilocos Region",
    metaTitle: "Architect in Ilocos Sur | FPA Design Consultancy",
    metaDescription:
      "Architectural design and building permits in Ilocos Sur by FPA Design Consultancy, Baguio City. See our completed 3-bedroom bungalow in Tagudin.",
    h1: "Architect in Ilocos Sur",
    intro:
      "FPA Design Consultancy brings full architectural design and documentation services to clients in Ilocos Sur, reaching the province from our headquarters in Baguio City. Our completed project in Tagudin demonstrates our capacity to deliver richly resolved residential architecture across the Ilocos Region.",
    context:
      "Ilocos Sur's warm semi-arid climate, rich Spanish colonial heritage, and expanding residential development create a distinctive architectural context. Our three-bedroom bungalow in Tagudin responds to this setting through an earth-toned material palette — terracotta hip roof, dark timber cladding, and walnut-accented interiors — that connects contemporary living with the region's historic built character.",
    considerations: [
      "Hot dry season: shading, cross-ventilation and roof insulation keep homes comfortable through the long, hot dry months.",
      "Typhoons: the roof shape and roof-to-wall connections are designed for the strong winds of typhoon season.",
      "Heritage areas: in and around Vigan's historic district, new buildings and renovations are subject to heritage conservation rules.",
      "Coastal sites: near the sea, corrosion-resistant fasteners and finishes last much longer.",
    ],
    faqs: [
      {
        question: "Do you take on projects in Ilocos Sur?",
        answer:
          "Yes. Our completed work there includes a three-bedroom bungalow in Tagudin, and we serve clients across the province from our Baguio City office.",
      },
      {
        question: "Who issues building permits in Ilocos Sur?",
        answer:
          "The Office of the Building Official of the city or municipality where your lot is. We prepare the signed and sealed architectural documents, coordinate the engineers' drawings and confirm that office's checklist at the start, since requirements vary between local governments.",
      },
      {
        question: "Can we work with you if we live elsewhere or abroad?",
        answer:
          "Yes. Consultations can be held by video call and drawings are delivered digitally, so you can follow the design from anywhere. Our page for overseas clients explains how remote projects work.",
      },
    ],
    guideSlugs: ["typhoon-resistant-house-design-philippines", "architect-fees-philippines", "ofw-guide-building-house-philippines"],
    projectSlugs: ["3-bedroom-bungalow-residence-tagudin"],
    featuredServiceSlugs: [
      "architectural-design",
      "interior-design",
      "space-planning",
      "building-permit-documentation",
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}
