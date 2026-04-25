export const metadata = {
  title: "Cookie Policy | 3DWORK",
  description: "Informativa sui cookie del sito 3DWORK.",
};

export default function CookiePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

      <p className="mb-6">Ultimo aggiornamento: Aprile 2026</p>

      <section className="space-y-6">
        <p>
          Il sito <strong>3DWORK</strong> (www.3dwork.it) adotta un approccio "Privacy by Design". 
          A differenza della maggior parte dei siti web, abbiamo scelto di non utilizzare cookie di profilazione 
          o tecnologie di tracciamento invasivo.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Cosa sono i cookie?</h2>
          <p>
            I cookie sono piccoli file di testo che i siti visitati dall'utente inviano al suo terminale, 
            dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">2. Cookie utilizzati da questo sito</h2>
          <p className="mb-4">
            Questo sito utilizza esclusivamente <strong>cookie tecnici</strong> (se necessari al funzionamento del server) 
            o tecnologie alternative che non richiedono il salvataggio di informazioni sul tuo dispositivo.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Nessun cookie di profilazione:</strong> Non utilizziamo cookie per creare profili relativi all'utente 
              o per inviare messaggi pubblicitari in linea con le preferenze manifestate durante la navigazione.
            </li>
            <li>
              <strong>Nessun cookie di terze parti invasivo:</strong> Non sono presenti pixel di Facebook, 
              Google Analytics o altri sistemi di tracciamento commerciale.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">3. Statistiche Web (Umami Analytics)</h2>
          <p>
            Per capire quante persone visitano il sito e quali contenuti sono più apprezzati, utilizziamo 
            <strong> Umami Analytics</strong>. A differenza di altri strumenti (come Google Analytics), 
            Umami:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li><strong>Non utilizza cookie</strong>.</li>
            <li>Non raccoglie dati personali.</li>
            <li>Anonimizza tutti i dati dei visitatori.</li>
            <li>I dati vengono utilizzati esclusivamente per scopi statistici interni.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Come gestire i cookie</h2>
          <p>
            Poiché non utilizziamo cookie di profilazione, non è necessario un banner di consenso. 
            Tuttavia, puoi limitare o bloccare i cookie modificando le impostazioni del tuo browser, 
            ma tieni presente che ciò potrebbe influire sulla corretta visualizzazione di alcuni siti web.
          </p>
        </div>

        <div className="pt-8">
          <p>
            Per ulteriori informazioni, puoi contattarci all'indirizzo: <strong>info@3dwork.it</strong>
          </p>
        </div>
      </section>
    </main>
  );
}



