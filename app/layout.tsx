import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.3dwork.it"),

  // ⭐ TITLE + DESCRIPTION AGGIORNATI
  title: "3D WORK™ Enhanced AI – Rendering 3D Fotorealistici e ArchViz a Cesena",
  description:
    "3D WORK™ Enhanced AI è lo studio di rendering 3D fotorealistici potenziato dall’intelligenza artificiale. Architettura, immobili, interni ed esterni con workflow AI avanzato.",

  icons: {
    icon: "/favicon.png",
  },

  alternates: {
    canonical: "https://www.3dwork.it/",
  },

  // ⭐ DATI STRUTTURATI AGGIORNATI
  other: {
    "script:ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.3dwork.it",
        "name": "3D WORK™ Enhanced AI",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.3dwork.it/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "3D WORK™ Enhanced AI",
        "alternateName": "3D WORK",
        "url": "https://www.3dwork.it",
        "logo": "https://www.3dwork.it/logo.png",
        "sameAs": [
          "https://www.instagram.com/3dwork_stefanonatali",
          "https://www.facebook.com/3DWORKstudio"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "ratingCount": "12"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "3D WORK™ Enhanced AI",
        "alternateName": "3D WORK",
        "url": "https://www.3dwork.it",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cesena",
          "addressRegion": "FC",
          "addressCountry": "IT"
        }
      }
    ])
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <Header />

        <div className="pt-20">
          {children}
        </div>

        <Footer />

        <Script 
          defer 
          src="https://cloud.umami.is/script.js" 
          data-website-id="1af06dfe-ae7e-4a09-81ac-7491b4542a70" 
        />
      </body>
    </html>
  );
}






