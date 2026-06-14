import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/ui/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fpadesignconsultancy.com"),
  title: {
    default: "FPA Design Consultancy | Architect in Baguio City, Benguet",
    template: "%s | FPA Design Consultancy",
  },
  description:
    "FPA Design Consultancy is a licensed architectural firm in Baguio City led by Arch. Friendzel B. Pengi, UAP. Specializing in residential design, commercial architecture, interior design, renovation, and building permit assistance across Benguet, La Union, Pangasinan, and Northern Luzon.",
  keywords: [
    "architect Baguio",
    "architect Benguet",
    "house design Baguio",
    "architectural design Baguio",
    "architectural firm Benguet",
    "residential architect Northern Luzon",
    "commercial building design Baguio",
    "interior design Baguio",
    "renovation design Baguio",
    "building permit Baguio",
    "FPA Design Consultancy",
    "Friendzel Pengi architect",
  ],
  authors: [{ name: "Arch. Friendzel B. Pengi, UAP" }],
  creator: "FPA Design Consultancy",
  publisher: "FPA Design Consultancy",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://fpadesignconsultancy.com",
    siteName: "FPA Design Consultancy",
    title: "FPA Design Consultancy | Architect in Baguio City, Benguet",
    description:
      "Licensed architectural firm in Baguio City specializing in residential, commercial, and interior design across Northern Luzon.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FPA Design Consultancy — Designing Spaces. Building Futures.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FPA Design Consultancy | Architect in Baguio City",
    description:
      "Licensed architectural firm in Baguio City specializing in residential, commercial, and interior design.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
