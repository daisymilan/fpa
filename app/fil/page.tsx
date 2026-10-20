import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import DesignProcess from "@/components/home/DesignProcess";
import WhyArchitect from "@/components/home/WhyArchitect";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";
import { t } from "@/lib/translations";
import { filipinoBreadcrumb, filipinoMetadata } from "@/lib/localeRoutes";

export const metadata = filipinoMetadata(
  "/",
  "Arkitekto sa Baguio City, Benguet | FPA Design Consultancy",
  "Lisensyadong arkitekto sa Baguio City — disenyo ng bahay, gusaling pangkomersiyo at interior para sa mga kliyente sa Pilipinas at sa ibang bansa."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "fil",
  mainEntity: t.fil.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FilipinoHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(filipinoBreadcrumb("/")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <DesignProcess />
      <WhyArchitect />
      <FAQ />
      <ContactCTA />
    </>
  );
}
