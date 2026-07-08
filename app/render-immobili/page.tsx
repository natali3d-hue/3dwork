import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering 3D Immobili – 3DWORK",
  description: "Rendering 3D fotorealistici per immobili residenziali, commerciali e cantieri.",
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Rendering 3D Immobili",
      "provider": {
        "@type": "Organization",
        "name": "3DWORK",
        "url": "https://www.3dwork.it"
      },
      "areaServed": "Italia",
      "serviceType": "Rendering 3D per immobili",
      "description": "Rendering 3D fotorealistici per immobili residenziali e commerciali.",
      "offers": {
        "@type": "Offer",
        "price": "X",
        "priceCurrency": "EUR"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto costa un rendering 3D per immobili?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il costo dipende dal tipo di immobile e dal numero di viste richieste."
          }
        },
        {
          "@type": "Question",
          "name": "In quanto tempo consegni un rendering immobiliare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I tempi medi vanno da Y a Z giorni lavorativi."
          }
        },
        {
          "@type": "Question",
          "name": "Quali file servono per iniziare un rendering immobiliare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Posso lavorare da planimetrie, prospetti, DWG, PDF, modelli 3D o foto."
          }
        }
      ]
    })
  }
};

export default function RenderImmobiliPage() {
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto space-y-8">

      <h1 className="text-3xl font-semibold">
        Rendering 3D per immobili fotorealistici
      </h1>

      <p className="text-lg">
        Realizzo rendering 3D fotorealistici per immobili residenziali, commerciali e cantieri.
        Immagini pensate per annunci immobiliari, brochure, presentazioni e progetti architettonici.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quanto costa un rendering 3D per immobili?</h2>
        <p>
          Il costo dipende dal tipo di immobile, dal numero di viste richieste e dal livello di dettaglio.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">In quanto tempo consegni un rendering immobiliare?</h2>
        <p>
          I tempi medi vanno da Y a Z giorni lavorativi, a seconda della complessità dell’immobile.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quali file servono per iniziare un rendering immobiliare?</h2>
        <p>
          Posso lavorare da planimetrie, prospetti, DWG, PDF, modelli 3D, foto dell’immobile o progetti preliminari.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">A chi è utile un rendering immobiliare?</h2>
        <p>
          Il servizio è ideale per agenzie immobiliari, costruttori, architetti e investitori.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Domande frequenti sui rendering immobiliari</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Posso richiedere più viste dello stesso immobile?</h3>
          <p>Sì, posso realizzare viste multiple: esterni, interni, prospetti e dettagli.</p>

          <h3 className="text-xl font-semibold">È possibile inserire arredi o ambientazioni realistiche?</h3>
          <p>Sì, posso aggiungere arredi, illuminazione realistica, vegetazione e contesto urbano.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Richiedi un preventivo per rendering immobiliari</h2>
        <p>
          Inviami planimetrie, foto o documenti dell’immobile. Ti preparo un preventivo chiaro con costi e tempi.
        </p>
      </section>

    </main>
  );
}
