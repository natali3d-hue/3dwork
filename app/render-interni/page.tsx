import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering 3D Interni – 3DWORK",
  description: "Rendering 3D fotorealistici di interni per immobili, architettura e design.",
  other: {
    "script:ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Rendering 3D Interni",
        "provider": {
          "@type": "Organization",
          "name": "3DWORK",
          "url": "https://www.3dwork.it"
        },
        "areaServed": "Italia",
        "serviceType": "Rendering 3D di interni",
        "description": "Rendering 3D fotorealistici per interni residenziali e commerciali.",
        "offers": {
          "@type": "Offer",
          "price": "X",
          "priceCurrency": "EUR"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quanto costa un rendering 3D di interni?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Il costo dipende dal numero di ambienti, dal livello di dettaglio e dalle viste richieste."
            }
          },
          {
            "@type": "Question",
            "name": "In quanto tempo consegni un rendering di interni?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I tempi medi vanno da Y a Z giorni lavorativi."
            }
          },
          {
            "@type": "Question",
            "name": "Quali file servono per iniziare un rendering di interni?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Posso lavorare da planimetrie, DWG, PDF, modelli 3D, foto o schizzi."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.3dwork.it"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Rendering Interni",
            "item": "https://www.3dwork.it/render-interni"
          }
        ]
      }
    ])
  }
};

export default function RenderInterniPage() {
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto space-y-8">

      <h1 className="text-3xl font-semibold">
        Rendering 3D di interni fotorealistici
      </h1>

      <p className="text-lg">
        Realizzo rendering 3D fotorealistici di interni per immobili residenziali, commerciali e progetti di design.
        Ideali per annunci immobiliari, brochure, presentazioni e concept architettonici.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quanto costa un rendering 3D di interni?</h2>
        <p>
          Il costo dipende dal numero di ambienti, dal livello di dettaglio e dalle viste richieste.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">In quanto tempo consegni un rendering di interni?</h2>
        <p>
          I tempi medi vanno da Y a Z giorni lavorativi, a seconda della complessità del progetto.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quali file servono per iniziare un rendering di interni?</h2>
        <p>
          Posso lavorare da planimetrie, DWG, PDF, modelli 3D, foto dell’ambiente o progetti preliminari.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">A chi è utile un rendering di interni?</h2>
        <p>
          Il servizio è ideale per agenzie immobiliari, interior designer, architetti e costruttori.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Domande frequenti sui rendering di interni</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Posso richiedere più viste dello stesso ambiente?</h3>
          <p>Sì, posso realizzare viste multiple: panoramiche, dettagli, angoli specifici.</p>

          <h3 className="text-xl font-semibold">È possibile inserire arredi o materiali specifici?</h3>
          <p>Sì, posso aggiungere arredi, materiali, illuminazione realistica e decorazioni.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Richiedi un preventivo per rendering di interni</h2>
        <p>
          Inviami planimetrie, foto o documenti dell’ambiente. Ti preparo un preventivo chiaro con costi e tempi.
        </p>
      </section>

    </main>
  );
}


