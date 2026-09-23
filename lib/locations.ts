export interface LocationData {
  slug: string;
  city: string;
  province: string;
  region: string;
  isHeadquarters?: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  context: string;
  projectSlugs: string[];
  featuredServiceSlugs: string[];
}

export const locations: LocationData[] = [
  {
    slug: "baguio-city-architect",
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
