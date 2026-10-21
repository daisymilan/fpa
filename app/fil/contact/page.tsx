import ContactContent from "@/app/contact/ContactContent";
import { filipinoBreadcrumb, filipinoMetadata } from "@/lib/localeRoutes";
import { t } from "@/lib/translations";

export const metadata = filipinoMetadata(
  "/contact",
  "Kontakin ang Arkitekto sa Baguio | FPA Design Consultancy",
  "Makipag-ugnayan sa FPA Design Consultancy, arkitekto sa Baguio City, sa WhatsApp, Viber, Messenger o email. Tumawag sa +63 969 180 7841."
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "fil",
  mainEntity: t.fil.contactPage.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FilipinoContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(filipinoBreadcrumb("/contact", "Makipag-ugnayan")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ContactContent />
    </>
  );
}
