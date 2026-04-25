import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Sections from "@/components/Sections";
import CTA from "@/components/CTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SceneVariants from "@/components/SceneVariants";
import FullScreenImage from "@/components/FullScreenImage";
import Gallery8 from "@/components/Gallery8";

// 🔥 SEO metadata
export const metadata = {
  title: "ArchViz per Costruzioni e Immobiliari | 3DWORK",
  description: "Rendering 3D fotorealistici per immobili, architettura e agenzie.",
  openGraph: {
    title: "3DWORK – Rendering 3D Fotorealistici",
    description: "Servizi di visualizzazione 3D per immobili e architettura.",
    url: "https://www.3dwork.it",
    siteName: "3DWORK",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {

  // ⭐ Schema.org LocalBusiness
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "3DWORK",
    "image": "https://www.3dwork.it/og-image.jpg",
    "url": "https://www.3dwork.it",
    "telephone": "+39 0000000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cesena",
      "addressLocality": "Cesena",
      "addressRegion": "Emilia-Romagna",
      "postalCode": "47521",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.139,
      "longitude": 12.243
    },
    "priceRange": "€€",
    "description": "Servizi professionali di rendering 3D fotorealistico, brochure digitali e siti web Next.js."
  };

  // ⭐ Schema.org Services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Rendering 3D Fotorealistici",
        "description": "Render professionali per immobili, architettura, interni ed esterni.",
        "provider": { "@type": "LocalBusiness", "name": "3DWORK" }
      },
      {
        "@type": "Service",
        "name": "Brochure Digitali",
        "description": "Brochure digitali premium per presentare immobili e progetti.",
        "provider": { "@type": "LocalBusiness", "name": "3DWORK" }
      },
      {
        "@type": "Service",
        "name": "Visual Identity del Progetto",
        "description": "Materiali visivi coordinati per presentazioni immobiliari e architettoniche.",
        "provider": { "@type": "LocalBusiness", "name": "3DWORK" }
      },
      {
        "@type": "Service",
        "name": "Siti Web & Landing Page Next.js",
        "description": "Siti web moderni, veloci e ottimizzati SEO per immobili e progetti.",
        "provider": { "@type": "LocalBusiness", "name": "3DWORK" }
      }
    ]
  };

  // ⭐ Schema.org FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Che tipo di rendering 3D realizza 3DWORK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3DWORK realizza rendering fotorealistici per immobili, architettura, interni, esterni e progetti di design."
        }
      },
      {
        "@type": "Question",
        "name": "Posso richiedere una brochure digitale insieme ai render?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, 3DWORK realizza brochure digitali professionali complete di testi, immagini e layout premium."
        }
      },
      {
        "@type": "Question",
        "name": "Realizzate anche siti web per immobili e progetti?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, 3DWORK sviluppa siti web e landing page in Next.js ottimizzati per presentare immobili e progetti."
        }
      },
      {
        "@type": "Question",
        "name": "Lavorate anche da remoto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, 3DWORK lavora completamente da remoto con clienti in tutta Italia."
        }
      }
    ]
  };

  return (
    <>
      {/* ⭐ LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />

      {/* ⭐ Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* ⭐ FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-black">
        <Header />
        <Hero />
        <Intro />
        <Services />
        <Sections />
        <SceneVariants />
        <Gallery8 />

        <div className="w-1/2 mx-auto h-px bg-gray-300 my-12"></div>

        <FullScreenImage />
        <CTA />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
