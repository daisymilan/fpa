export interface Project {
  slug: string;
  name: string;
  type: "Residential" | "Commercial" | "Interior Design" | "Renovation";
  location: string;
  country?: string;
  seoTitle: string;
  metaDescription: string;
  relatedServiceSlugs: string[];
  description: string;
  concept: string;
  keyFeatures: string[];
  coverImage: string;
  images: string[];
  imageAlts: string[];
  video?: ProjectVideo;
  lastModified?: string;
  featured: boolean;
}

export interface ProjectVideo {
  src: string;
  poster: string;
  title: string;
  description: string;
  /** YouTube copy of the video, shown as an embed on the project page. */
  youtubeId?: string;
  /** Date the video was first published (YYYY-MM-DD), for structured data. */
  uploadDate?: string;
  durationSeconds?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
