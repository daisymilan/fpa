import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import DesignProcess from "@/components/home/DesignProcess";
import WhyArchitect from "@/components/home/WhyArchitect";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "FPA Design Consultancy | Architect in Baguio City, Benguet",
  description:
    "FPA Design Consultancy is a licensed architectural firm in Baguio City led by Arch. Friendzel B. Pengi, UAP. We design homes, commercial buildings, and interiors across Northern Luzon.",
  alternates: {
    canonical: "https://fpadesignconsultancy.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <DesignProcess />
      <WhyArchitect />
      <ContactCTA />
    </>
  );
}
