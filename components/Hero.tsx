import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-65 items-center text-center px-6 bg-black text-white overflow-hidden">

      {/* IMMAGINE DI SFONDO */}
      <Image
        src="/Cucina.webp"
        alt="3D Rendering"
        fill
        className="object-cover hero-tech z-0"
        loading="eager"
        priority
      />

      {/* CONTENUTO */}
      <div className="relative z-10 max-w-3xl">

        {/* ⭐ NUOVO TITOLO */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-[0_3px_6px_rgba(0,0,0,0.55)]">
          3D WORK™ Enhanced AI
        </h1>

        {/* ⭐ NUOVO SOTTOTITOLO */}
        <p className="text-2xl md:text-3xl font-semibold text-white mb-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.55)]">
          Architectural Rendering Studio con workflow 3D professionale potenziato dall’intelligenza artificiale.
        </p>

        {/* CTA WHATSAPP */}
        <a
          href="https://wa.me/393342481592?text=Ciao%20Stefano,%20vorrei%20un%20preventivo%20per%20un%20render"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="#25D366"
            className="w-6 h-6"
          >
            <path d="M16.001 3.2c-7.064 0-12.8 5.736-12.8 12.8 0 2.256.592 4.448 1.712 6.4L3.2 28.8l6.592-1.68c1.856.992 3.936 1.52 6.208 1.52 7.064 0 12.8-5.736 12.8-12.8s-5.736-12.8-12.8-12.8zm0 23.2c-1.92 0-3.744-.512-5.36-1.488l-.384-.224-3.92 1.008 1.04-3.84-.24-.4A10.55 10.55 0 0 1 5.6 16c0-5.744 4.656-10.4 10.4-10.4s10.4 4.656 10.4 10.4-4.656 10.4-10.4 10.4zm5.488-7.696c-.304-.16-1.792-.88-2.064-.976-.272-.096-.464-.144-.656.144-.192.288-.752.976-.928 1.168-.176.192-.336.208-.624.08-.288-.128-1.216-.448-2.32-1.424-.864-.768-1.456-1.712-1.632-2-.176-.288-.016-.448.128-.576.128-.128.288-.336.432-.512.144-.176.192-.304.288-.496.096-.192.048-.352-.016-.496-.064-.144-.656-1.584-.896-2.176-.24-.592-.48-.512-.656-.512-.176 0-.384 0-.592 0-.208 0-.544.08-.832.384-.288.304-1.088 1.056-1.088 2.56 0 1.504 1.12 2.96 1.28 3.168.16.208 2.24 3.52 5.44 4.8.768.32 1.36.512 1.824.656.768.24 1.44.208 1.984.128.608-.096 1.84-.752 2.096-1.488.256-.736.256-1.328.176-1.456-.08-.128-.272-.208-.576-.368z"/>
          </svg>

          Richiedi preventivo
        </a>
      </div>
    </section>
  );
}




