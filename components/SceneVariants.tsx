import Image from "next/image";

export default function SceneVariants() {
  return (
    <section className="py-24 px-6 bg-black text-white text-center">

      {/* LINEA SPAZIATRICE CENTRATA 50% */}
      <div className="w-1/2 mx-auto h-px bg-gray-300 mb-12"></div>

      {/* TESTO */}
      <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
        Tre varianti della stessa scena per mostrare come luce e stagione 
        possono trasformare la percezione dell’architettura.
      </h2>

      {/* GALLERIA 3 IMMAGINI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/Serale.webp"
            alt="Variante 1"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/Invernale-neve.webp"
            alt="Variante 2"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/Daylight.webp"
            alt="Variante 3"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}

