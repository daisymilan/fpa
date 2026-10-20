import ServicesContent from "@/app/services/ServicesContent";
import { filipinoBreadcrumb, filipinoMetadata } from "@/lib/localeRoutes";

export const metadata = filipinoMetadata(
  "/services",
  "Serbisyong Arkitektural, Baguio | FPA Design Consultancy",
  "Disenyong arkitektural, interior design, renovation, building permit, construction supervision at 3D rendering para sa mga kliyente sa Pilipinas at sa ibang bansa."
);

export default function FilipinoServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(filipinoBreadcrumb("/services", "Mga Serbisyo")) }} />
      <ServicesContent />
    </>
  );
}
