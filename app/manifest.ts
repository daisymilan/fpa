import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FPA Design Consultancy",
    short_name: "FPA Design",
    description: "Licensed architect in Baguio City — residential, commercial, and interior design.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FF3B30",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
