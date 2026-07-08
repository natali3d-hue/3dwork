import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering 3D Esterni – 3DWORK",
  description: "Rendering 3D fotorealistici di esterni per ville, edifici, cantieri e progetti architettonici.",
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Rendering 3D Esterni",
      "provider": {
        "@type": "Organization",
        "name": "3DWORK",
        "url": "https://www.3dwork.it"
      },
      "areaServed": "Italia",
      "serviceType": "Rendering 3D fotorealistico di esterni",
      "description": "Rendering 3D fotorealistici per ville, edifici e cantieri.",
      "offers": {
        "@type": "Offer",
        "price": "X",
        "priceCurrency": "EUR"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto costa un rendering 3D di esterni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il prezzo dipende dalla complessità dell’edificio e dal numero di viste richieste."
          }
        },
        {
          "@type": "Question",
          "name": "In quanto tempo consegni un rendering di esterni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I tempi medi vanno da Y a Z giorni lavorativi."
          }
        },
        {
          "@type": "Question",
          "name": "Quali file servono per iniziare un rendering di esterni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Posso lavorare da DWG, PDF, modelli 3D, foto del contesto o schizzi."
          }
        }
      ]
    })
  }
};

export default function RenderEsterniPage() {
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto space-y-8">

      <h1 className="text-3xl font-semibold">
        Rendering 3D di esterni fotorealistici


