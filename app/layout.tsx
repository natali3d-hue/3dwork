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

  // 🔥 TITLE + DESCRIPTION OTTIMIZZATI
  title: "3D Work | 3DWORK – Rendering 3D Fotorealistici",
  description:
    "3DWORK (o 3D Work) è lo studio di rendering 3D fotorealistici per immobili, architettura e agenzie.",

  icons: {
    icon: "/favicon.png",
  },

  alternates: {
    canonical: "https://www.3dwork.it/",
  },

  // 🔥 DATI STRUTTURATI CON alternateName
  other: {
    "script:ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.3dwork.it",
        "name": "3DWORK",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.3dwork.it/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "3DWORK",
        "alternateName": "3D Work",
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
        "name": "3DWORK",
        "alternateName": "3D Work",
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





