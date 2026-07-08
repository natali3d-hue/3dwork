import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering 3D Interni – 3DWORK",
  description: "Rendering 3D fotorealistici di interni per immobili, appartamenti e architettura.",
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Rendering 3D Interni",
      "provider": {
        "@type": "Organization",
        "name": "3DWORK",
        "url": "https://www.3dwork.it"
      },
      "areaServed": "Italia",
      "serviceType": "Rendering 3D fotorealistico di interni",
      "description": "Rendering 3D fotorealistici per appartamenti, ville e immobili.",
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
            "text": "Il costo dipende dalla complessità dell’ambiente e dal numero di viste richieste."
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
            "text": "Posso lavorare da PDF, DWG, foto dell’immobile o modelli 3D."
          }
        }
      ]
    })
  }
};

export default function RenderInterniPage() {
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto space-y-8">

      {/* H1 principale */}
      <h1 className="text-3xl font-semibold">
        Rendering 3D di interni fotorealistici
      </h1>

      {/* Intro breve */}
      <p className="text-lg">
        Realizzo rendering 3D di interni per appartamenti, ville e immobili in vendita,
        con luce realistica e attenzione ai materiali, per agenzie immobiliari e studi di architettura.
      </p>

      {/* Sezione: Quanto costa... */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Quanto costa un rendering 3D di interni?
        </h2>
        <p>
          Il costo dipende dalla complessità dell’ambiente, dal numero di viste richieste
          e dalla qualità dei materiali. In media, un rendering di interni parte da X € per
          una singola vista, con sconti per più ambienti nello stesso progetto.
        </p>
      </section>

      {/* Sezione: In quanto tempo... */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          In quanto tempo consegni un rendering di interni?
        </h2>
        <p>
          Per un appartamento standard, i tempi medi vanno da Y a Z giorni lavorativi,
          a seconda del numero di viste e delle revisioni richieste.
        </p>
      </section>

      {/* Sezione: Che file servono... */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Quali file servono per iniziare un rendering di interni?
        </h2>
        <p>
          Posso lavorare da planimetrie in PDF, DWG, schizzi, foto dell’immobile o
          modelli 3D esistenti. Più dettagli mi fornisci, più preciso sarà il risultato.
        </p>
      </section>

      {/* Sezione: Per chi è questo servizio */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          A chi è utile un rendering di interni?
        </h2>
        <p>
          Il servizio è pensato per agenzie immobiliari, studi di architettura, interior designer
          e costruttori che vogliono presentare gli ambienti in modo chiaro e coinvolgente.
        </p>
      </section>

      {/* Sezione FAQ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Domande frequenti sul rendering di interni
        </h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            Posso richiedere modifiche dopo il primo render?
          </h3>
          <p>
            Sì, includo normalmente una serie di revisioni per allineare il risultato
            alle tue esigenze, prima della consegna finale.
          </p>

          <h3 className="text-xl font-semibold">
            Posso usare i rendering per annunci online e brochure?
          </h3>
          <p>
            Certamente, i file vengono consegnati in alta risoluzione, adatti sia al web
            che alla stampa.
          </p>
        </div>
      </section>

      {/* Call to action */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Richiedi un preventivo per rendering di interni
        </h2>
        <p>
          Se vuoi un preventivo preciso per un progetto di interni, puoi inviarmi
          planimetrie e una breve descrizione dell’immobile. Ti rispondo con una proposta
          chiara su costi e tempi.
        </p>
      </section>

    </main>
  );
}

