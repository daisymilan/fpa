import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/ui/StructuredData";
import HtmlLangSync from "@/components/ui/HtmlLangSync";

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
  metadataBase: new URL("https://www.fp-architect.com"),
  title: {
    default: "FPA Design Consultancy | Architect in Baguio City, Benguet",
    template: "%s | FPA Design Consultancy",
  },
  description:
    "Licensed architect in Baguio City, Philippines — residential, commercial, and interior design, renovation, and building permits by FPA Design Consultancy.",
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
    url: "https://www.fp-architect.com",
    siteName: "FPA Design Consultancy",
    title: "FPA Design Consultancy | Architect in Baguio City, Benguet",
    description:
      "Licensed architectural firm in Baguio City specializing in residential, commercial, and interior design — serving clients in the Philippines and worldwide.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FPA Design Consultancy — Designing Spaces. Building Futures.",
      },
    ],
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://formspree.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Providers>
          <HtmlLangSync />
          <StructuredData />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-[#FF3B30] focus:text-white focus:text-xs focus:font-semibold focus:tracking-widest focus:uppercase"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
