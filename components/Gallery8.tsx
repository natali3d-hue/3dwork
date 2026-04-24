"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery8() {
  const images = [
    "/gallery/1.webp",
    "/gallery/2.webp",
    "/gallery/3.webp",
    "/gallery/4.webp",
    "/gallery/5.webp",
    "/gallery/6.webp",
    "/gallery/7.webp",
    "/gallery/8.webp",
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  };

  return (
    <>
      {/* GALLERIA */}
      <section className="py-24 px-6 bg-black text-white">
        <h2 className="text-center text-2xl md:text-3xl font-light mb-12">
          Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-full h-64 rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Immagine grande */}
          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={images[lightboxIndex]}
              alt="Lightbox"
              fill
              className="object-contain"
            />
          </div>

          {/* Freccia sinistra */}
          <button
            onClick={showPrev}
            className="absolute left-6 text-white text-4xl select-none"
          >
            ‹
          </button>

          {/* Freccia destra */}
          <button
            onClick={showNext}
            className="absolute right-6 text-white text-4xl select-none"
          >
            ›
          </button>

          {/* Pulsante chiudi */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
