import AboutContent from "@/app/about/AboutContent";
import { filipinoBreadcrumb, filipinoMetadata } from "@/lib/localeRoutes";

export const metadata = filipinoMetadata(
  "/about",
  "Tungkol kay Arch. Friendzel Pengi | FPA Design Consultancy",
  "Si Arch. Friendzel B. Pengi, UAP ay lisensyadong arkitekto at tagapagtatag ng FPA Design Consultancy sa Baguio City, Benguet."
);

export default function FilipinoAboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(filipinoBreadcrumb("/about", "Tungkol Sa Amin")) }} />
      <AboutContent />
    </>
  );
}
