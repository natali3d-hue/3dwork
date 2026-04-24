import Image from "next/image";

export default function Sections() {
  const blocks = [
    {
      title: "Exterior Visualization",
      text: "Le visualizzazioni esterne raccontano l’identità architettonica di un progetto, valorizzando materiali, luce naturale e atmosfera.",
      img: "/esterno-serale-1.webp"
    },
    {
      title: "Interior Visualization",
      text: "Gli interni sono spazi da vivere. Attraverso luce, materiali e composizione, creiamo ambienti accoglienti e realistici.",
      img: "/Attico-8-1.webp"
    },
    {
      title: "Virtual Tour 360°",
      text: "Tour 360° immersivi per presentare spazi architettonici e immobili in modo coinvolgente e interattivo.",
      img: "/Profonfita-di-campo.webp"
    },
    {
      title: "AI‑Enhanced Visualization",
      text: "Un flusso avanzato che combina AI e rendering 3D per accelerare la fase creativa e ottenere varianti visive in pochi minuti.",
      img: "/AI-e-3D.webp"
    },
    {
      title: "Concept Design & Art Direction",
      text: "Diamo forma alle idee con immagini curate, moodboard e una direzione visiva chiara e coerente.",
      img: "/Brochure-web-2-1.webp"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto space-y-24">
        {blocks.map((b, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* IMMAGINE */}
            <Image
              src={b.img}
              alt={b.title}
              width={900}
              height={600}
              className="rounded-xl shadow-lg"
            />

            {/* TESTO */}
            <div>
              <h3 className="text-3xl font-bold mb-4">{b.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{b.text}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}



