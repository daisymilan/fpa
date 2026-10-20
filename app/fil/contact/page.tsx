import ContactContent from "@/app/contact/ContactContent";
import { filipinoBreadcrumb, filipinoMetadata } from "@/lib/localeRoutes";

export const metadata = filipinoMetadata(
  "/contact",
  "Kontakin ang Arkitekto sa Baguio | FPA Design Consultancy",
  "Makipag-ugnayan sa FPA Design Consultancy, arkitekto sa Baguio City, sa WhatsApp, Viber, Messenger o email. Tumawag sa +63 969 180 7841."
);

export default function FilipinoContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(filipinoBreadcrumb("/contact", "Makipag-ugnayan")) }} />
      <ContactContent />
    </>
  );
}
