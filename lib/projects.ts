import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "bungalow-residence-with-loft-nueva-vizcaya",
    name: "Bungalow Residence with Loft",
    type: "Residential",
    location: "Nueva Vizcaya",
    description:
      "This modern minimalist residence in Nueva Vizcaya is a masterful expression of clean architecture and curated living. Designed with a refined white-dominant palette, the home balances openness and privacy through thoughtful spatial planning and a loft component that adds vertical interest without sacrificing the calm, uncluttered aesthetic that defines the design.",
    concept:
      "The design concept revolves around a seamless flow between living zones — from the open-plan kitchen and dining through to the lofted family lounge above. Every detail, from the gold-accented vanity to the slatted wood feature walls, was selected to elevate the everyday experience of the home while remaining rooted in restraint and simplicity.",
    keyFeatures: [
      "Open-plan living, dining, and kitchen layout for fluid spatial experience",
      "Loft-level family lounge with vaulted ceiling and natural light",
      "Master suite with gold vanity, pendant lighting, and marble flooring",
      "Modern kitchen with marble backsplash, bar counter, and rattan bar stools",
      "Children's bedroom with integrated study desk and custom wardrobe",
      "Spa-inspired bathroom with rain shower, gold fixtures, and LED mirror",
      "Consistent white-and-wood color palette throughout all spaces",
      "Layered lighting design: ambient, task, and accent illumination",
    ],
    coverImage: "/images/portfolio/project-1/cover.jpg",
    images: [
      "/images/portfolio/project-1/master-bedroom.jpg",
      "/images/portfolio/project-1/loft-lounge.jpg",
      "/images/portfolio/project-1/living-room.jpg",
      "/images/portfolio/project-1/kitchen.jpg",
      "/images/portfolio/project-1/dining-living.jpg",
      "/images/portfolio/project-1/kids-bedroom.jpg",
      "/images/portfolio/project-1/bathroom.jpg",
    ],
    featured: true,
  },
  {
    slug: "2-storey-residence-ifugao",
    name: "2 Storey Residence",
    type: "Residential",
    location: "Ifugao",
    description:
      "Situated in the highlands of Ifugao, this two-storey residence is a bold statement in contemporary tropical architecture. The design maximizes natural daylight through a dramatic double-height living area crowned by a full-length clerestory skylight, allowing sunlight to penetrate deep into the home's interior while creating a sense of airiness and connection to the surrounding landscape.",
    concept:
      "The central organizing principle of this project is bioclimatic design — harnessing natural light, ventilation, and views to reduce reliance on artificial systems while delivering a superior quality of life. The rear elevation opens to a private swimming pool and tropical garden, integrating interior and exterior living as a single continuous experience.",
    keyFeatures: [
      "Double-height living space with floor-to-ceiling clerestory skylight",
      "Dramatic glass facade that floods interiors with natural daylight",
      "Private swimming pool integrated with outdoor terrace and pergola",
      "Open-plan ground floor connecting living, dining, and garden",
      "Warm wood accents and frames throughout for tropical elegance",
      "Dusk-optimized facade lighting for striking evening presence",
      "Lush tropical landscaping designed as an extension of living spaces",
    ],
    coverImage: "/images/portfolio/project-2/cover.jpg",
    images: [
      "/images/portfolio/project-2/interior-living.jpg",
      "/images/portfolio/project-2/exterior-dusk.jpg",
      "/images/portfolio/project-2/exterior-pool.jpg",
    ],
    featured: true,
  },
  {
    slug: "bungalow-residence-with-loft-la-union",
    name: "Bungalow Residence with Loft",
    type: "Residential",
    location: "La Union",
    description:
      "Designed for the typhoon-prone coastal context of La Union, this single-storey bungalow with loft employs a robust and climate-responsive architectural strategy without compromising on contemporary aesthetics. The structure's clean geometric massing and carefully engineered roof form work in tandem to withstand extreme weather conditions while creating a warm, welcoming home for its occupants.",
    concept:
      "Structural resilience and everyday comfort are the twin mandates of this design. The pyramidal hip roof — engineered for superior wind-load resistance — becomes the defining visual element of the home, while deep overhangs provide shade and passive cooling. The loft element adds living area without increasing the building's wind profile, keeping the overall structure low and aerodynamically efficient.",
    keyFeatures: [
      "Pyramidal hip roof engineered for superior typhoon-wind resistance",
      "Standing seam metal roofing system with deep protective overhangs",
      "Low-profile massing that minimizes wind exposure during storms",
      "Reinforced concrete perimeter boundary wall for site security",
      "Wood slat and bamboo accent details for tropical character",
      "Dedicated outdoor living area with rattan furniture and garden shade structure",
      "Separate carport with matching architectural language",
      "Mediterranean cypress landscaping for windbreak and privacy",
    ],
    coverImage: "/images/portfolio/project-3/cover.jpg",
    images: [
      "/images/portfolio/project-3/front-elevation.jpg",
      "/images/portfolio/project-3/side-view.jpg",
      "/images/portfolio/project-3/carport-angle.jpg",
      "/images/portfolio/project-3/outdoor-seating.jpg",
      "/images/portfolio/project-3/front-closeup.jpg",
    ],
    featured: true,
  },
  {
    slug: "3-storey-office-building-ifugao",
    name: "3 Storey Office Building",
    type: "Commercial",
    location: "Ifugao",
    description:
      "This three-storey commercial office building in Ifugao is a landmark project that redefines professional workspace design in the Cordillera region. Its organic, curvilinear facade — composed of sweeping horizontal bands of wood-clad concrete and expansive curtain glazing — represents a departure from conventional commercial architecture toward a more biophilic, human-centered built environment.",
    concept:
      "The building's sinuous form is a direct response to its natural setting. Curved balcony bands at each floor level modulate sunlight and ventilation, while the extensive glazing systems ensure that every workstation is bathed in natural light from the surrounding pine and bamboo landscape. The ground floor reception incorporates indigenous Filipino art and natural material workstations, connecting the building's occupants to local culture.",
    keyFeatures: [
      "Signature wave-form curved facade with horizontal wood slat cladding",
      "Full-length curtain glazing on each floor for maximum daylighting",
      "Curved balcony sun-breakers providing shade and ventilation control",
      "Biophilic reception with rattan workstations and indigenous artwork",
      "Dark hardwood flooring and concrete-textured walls throughout",
      "Landscaped forecourt with water feature and tropical planting",
      "Dark stone base treatment for visual weight and material contrast",
      "Bamboo grove integration as natural backdrop and sound buffer",
    ],
    coverImage: "/images/portfolio/project-4/cover.jpg",
    images: [
      "/images/portfolio/project-4/exterior-composite.jpg",
      "/images/portfolio/project-4/interior-open-plan.jpg",
      "/images/portfolio/project-4/reception.jpg",
      "/images/portfolio/project-4/exterior-closeup.jpg",
    ],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByType(type: Project["type"]): Project[] {
  return projects.filter((p) => p.type === type);
}
