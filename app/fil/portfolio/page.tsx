import PortfolioContent from "@/app/portfolio/PortfolioContent";
import { filipinoBreadcrumb, filipinoMetadata } from "@/lib/localeRoutes";

export const metadata = filipinoMetadata(
  "/portfolio",
  "Portfolio ng mga Proyekto, Baguio | FPA Design Consultancy",
  "Mga bahay, gusaling pangkomersiyo at interior na dinisenyo ng FPA Design Consultancy sa Baguio, La Union, Ifugao, Nueva Vizcaya, Ilocos Sur at sa ibang bansa."
);

export default function FilipinoPortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(filipinoBreadcrumb("/portfolio", "Portfolio")) }} />
      <PortfolioContent />
    </>
  );
}
