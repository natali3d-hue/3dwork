"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 300); // fade-in elegante
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    window.location.reload(); // attiva eventuali script (Analytics)
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md text-white p-6 z-50 shadow-lg animate-fadeIn">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-gray-300 leading-relaxed">
          Questo sito utilizza cookie tecnici e, previo consenso, cookie di terze parti
          per migliorare l’esperienza utente. Puoi leggere di più nella{" "}
          <a href="/cookie" className="underline text-gray-100">
            Cookie Policy
          </a>.
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 border border-gray-500 text-gray-300 rounded hover:bg-gray-700 transition"
          >
            Rifiuta
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-white text-black rounded font-semibold hover:bg-gray-200 transition"
          >
            Accetta
          </button>
        </div>

      </div>
    </div>
  );
}
