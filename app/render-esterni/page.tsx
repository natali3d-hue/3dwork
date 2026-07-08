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
      </h1>

      <p className="text-lg">
        Realizzo rendering 3D di esterni per ville, edifici residenziali, cantieri e progetti architettonici.
        Immagini fotorealistiche pensate per presentazioni, brochure, concorsi e marketing immobiliare.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quanto costa un rendering 3D di esterni?</h2>
        <p>
          Il prezzo dipende dalla complessità dell’edificio, dal contesto ambientale e dal numero di viste richieste.
          In media, un rendering esterno parte da X € per una singola vista.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">In quanto tempo consegni un rendering di esterni?</h2>
        <p>
          I tempi medi vanno da Y a Z giorni lavorativi, a seconda della complessità del progetto.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quali file servono per iniziare un rendering di esterni?</h2>
        <p>
          Posso lavorare da DWG, PDF, modelli 3D, foto del terreno o del contesto, schizzi o progetti preliminari.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">A chi è utile un rendering di esterni?</h2>
        <p>
          Il servizio è ideale per studi di architettura, costruttori, agenzie immobiliari e progettisti.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Domande frequenti sui rendering di esterni</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Posso richiedere modifiche alla luce o all’inquadratura?</h3>
          <p>Sì, posso adattare luce, atmosfera, ora del giorno e angolazioni.</p>

          <h3 className="text-xl font-semibold">È possibile inserire vegetazione o contesto realistico?</h3>
          <p>Sì, posso aggiungere vegetazione, auto, persone e ambientazione coerente.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Richiedi un preventivo per rendering di esterni</h2>
        <p>
          Inviami planimetrie, prospetti o modelli 3D del progetto. Ti preparo un preventivo chiaro con costi e tempi.
        </p>
      </section>

    </main>
  );
}
