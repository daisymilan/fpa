export interface Project {
  slug: string;
  name: string;
  type: "Residential" | "Commercial" | "Interior Design" | "Renovation";
  location: string;
  description: string;
  concept: string;
  keyFeatures: string[];
  coverImage: string;
  images: string[];
  imageAlts: string[];
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
