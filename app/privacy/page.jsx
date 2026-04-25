export const metadata = {
  title: "Privacy Policy | 3DWORK",
  description: "Informativa sulla privacy del sito 3DWORK, conforme al GDPR.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-4">Ultimo aggiornamento: Aprile 2026</p>

      {/* 1. Titolare */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Titolare del trattamento</h2>
        <p>
          Stefano Natali – 3DWORK™ <br />
          Email: info@3dwork.it <br />
          Sede: Cesena (FC), Italia
           P.I. 03371840400
        </p>
      </section>

      {/* 2. Dati raccolti */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Tipologie di dati raccolti</h2>
        <p className="mb-4">Il sito può raccogliere le seguenti categorie di dati:</p>
        <ul className="list-disc ml-6">
          <li><strong>Dati tecnici anonimi</strong>: indirizzo IP (anonimizzato), tipo di browser, pagine visitate, orario delle richieste, provenienza geografica (solo a livello di nazione/città, senza tracciamento preciso).</li>
          <li><strong>Dati forniti volontariamente</strong>: informazioni inviate tramite email o eventuali moduli di contatto.</li>
        </ul>
      </section>

      {/* 3. Finalità */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Finalità del trattamento</h2>
        <ul className="list-disc ml-6">
          <li>Rispondere a richieste inviate dall’utente via email.</li>
          <li>Analisi statistica aggregata sull'uso del sito per migliorarne i contenuti e le prestazioni.</li>
        </ul>
      </section>

      {/* 4. Base giuridica */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Base giuridica del trattamento</h2>
        <p>
          I dati vengono trattati sulla base del legittimo interesse del titolare per il corretto funzionamento e l'analisi del sito. 
          Il sistema di analisi statistica è configurato per non richiedere il consenso preventivo in quanto non effettua profilazione e non utilizza cookie.
        </p>
      </section>

      {/* 5. Conservazione */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Conservazione dei dati</h2>
        <p>
          I dati statistici sono conservati sui server del fornitore del servizio di analisi. 
          Le comunicazioni via email vengono conservate per il tempo necessario a gestire il rapporto professionale.
        </p>
      </section>

      {/* 6. Destinatari */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Destinatari dei dati</h2>
        <p className="mb-4">
          I dati non vengono ceduti a terzi per finalità commerciali. I dati tecnici e statistici sono trattati da:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Netlify</strong>: Fornitore di hosting.</li>
          <li><strong>Umami Cloud</strong>: Servizio di analisi web privacy-focused (i dati sono raccolti in forma aggregata e anonima).</li>
        </ul>
      </section>

      {/* 7. Hosting */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Hosting e sicurezza</h2>
        <p>
          Il sito è ospitato su Netlify. Il trasferimento delle informazioni avviene tramite protocollo crittografato HTTPS per garantire la massima sicurezza.
        </p>
      </section>

      {/* 8. Diritti */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Diritti dell’utente</h2>
        <p className="mb-4">
          L’utente può esercitare i diritti previsti dal GDPR (accesso, rettifica, cancellazione). Poiché i dati statistici raccolti da Umami non sono riconducibili a un individuo specifico, l'esercizio del diritto di accesso su tali dati potrebbe non essere tecnicamente possibile.
        </p>
        <p className="mt-4">
          Per richieste: <strong>info@3dwork.it</strong>
        </p>
      </section>

      {/* 9. Cookie */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Cookie</h2>
        <p>
           Questo sito non utilizza cookie (né tecnici, né di profilazione). La misurazione delle prestazioni avviene tramite Umami Analytics, che non installa file nel browser dell'utente e non ne traccia l'identità.Per maggiori dettagli, visita la{" "}
          <a href="/cookie" className="text-blue-600 underline">
            Cookie Policy
          </a>.
        </p>
      </section>
    </main>
  );
}
