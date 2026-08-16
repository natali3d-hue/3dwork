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

  title: "3D WORK™ Enhanced AI – Rendering 3D Fotorealistici e ArchViz",
  description:
    "3D WORK™ Enhanced AI è lo studio di rendering 3D fotorealistici potenziato dall’intelligenza artificiale. Architettura, immobili, interni ed esterni con workflow AI avanzato.",

  icons: {
    icon: "/favicon.png",
  },

  alternates: {
    canonical: "https://www.3dwork.it/",
  },

  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.3dwork.it/#organization",
          "name": "3D WORK™ Enhanced AI",
          "url": "https://www.3dwork.it",
          "logo": "https://www.3dwork.it/logo.png",
          "description":
            "Studio di rendering 3D fotorealistici, ArchViz e comunicazione visiva con workflow potenziato dall’intelligenza artificiale.",
          "founder": "Stefano",
          "sameAs": [
            "https://www.instagram.com/3dwork.it",
            "https://www.linkedin.com/company/3dwork",
            "https://www.facebook.com/3dwork.it"
          ]
        },

        {
          "@type": "LocalBusiness",
          "@id": "https://www.3dwork.it/#localbusiness",
          "name": "3D WORK™ Enhanced AI",
          "image": "https://www.3dwork.it/Cucina.webp",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Cesare Battisti 149",
            "addressLocality": "Cesena",
            "addressRegion": "FC",
            "postalCode": "47521",
            "addressCountry": "IT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.139,
            "longitude": 12.243
          },
          "areaServed": [
            "Cesena",
            "Forlì-Cesena",
            "Emilia-Romagna",
            "Italia"
          ],
          "priceRange": "€€",
          "telephone": "+39 334 248 1592"
        },

        {
          "@type": "WebSite",
          "@id": "https://www.3dwork.it/#website",
          "url": "https://www.3dwork.it",
          "name": "3D WORK™ Enhanced AI",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.3dwork.it/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },

        {
          "@type": "BreadcrumbList",
          "@id": "https://www.3dwork.it/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.3dwork.it/"
            }
          ]
        }
      ]
    })
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







