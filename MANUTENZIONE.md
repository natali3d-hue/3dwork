MANUTENZIONE.md
(File da includere nel progetto 3dwork.it)

🧰 Manutenzione mensile – Sito Next.js (senza database)
Questo documento descrive la procedura di manutenzione mensile del sito 3dwork.it, sviluppato con Next.js e privo di database.
La manutenzione riguarda aggiornamenti, sicurezza, performance e deploy.

1. Backup del progetto
Copiare l’intera cartella del progetto in una directory di backup.

Se si usa Git:

git add .

git commit -m "Backup pre-manutenzione"

git push

2. Controllo aggiornamenti
Eseguire nel terminale:

Codice
npm outdated
Verificare:

Aggiornamenti Wanted → sicuri

Aggiornamenti Latest → valutare caso per caso

3. Aggiornamento dipendenze
Aggiornare i pacchetti sicuri:

Codice
npm update
Se necessario, aggiornare Next.js alla versione più recente compatibile modificando package.json oppure tramite:

Codice
npm audit fix --force
(Usare --force solo se la vulnerabilità riguarda dipendenze interne di Next.js.)

4. Controllo sicurezza
Eseguire:

Codice
npm audit
npm audit fix
Se restano vulnerabilità e il fix richiede aggiornamenti di Next.js:

Codice
npm audit fix --force
5. Build locale
Verificare che il progetto compili correttamente:

Codice
npm run build
Controllare:

Nessun ERROR

Eventuali WARNING → annotare

6. Test locale
Avviare il server di sviluppo:

Codice
npm run dev
Verificare:

Navigazione tra le pagine

Immagini ottimizzate

Nessun errore in console

Layout e responsive corretti

7. Commit delle modifiche
Se tutto funziona:

Codice
git add .
git commit -m "Manutenzione mensile: aggiornamenti + sicurezza"
git push
8. Deploy su Vercel
Controllare su Vercel:

Log di build

Nessun errore

Warning non critici

Testare il sito online:
https://www.3dwork.it/

9. Note mensili
Annotare qui eventuali modifiche rilevanti:

Aggiornamenti importanti

Warning da risolvere

Ottimizzazioni future

Problemi riscontrati

10. Storico manutenzioni
Aggiungere una voce ogni mese:

Manutenzione 2026-08-06
Aggiornati pacchetti sicuri

Risolte vulnerabilità con npm audit fix --force

Aggiornato Next.js a 16.3.0

Build locale OK

Dev server OK

Commit + Push OK

Deploy su Vercel OK