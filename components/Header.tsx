"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO TONDO VERDE */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="3DWORK Logo"
            width={58}
            height={58}
            className="rounded-full"
            priority
          />
          <span className="text-white text-xl font-semibold tracking-wide">
            3D WORK™
          </span>
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm">
          <a href="/#services" className="hover:text-gray-300 transition">Servizi</a>

          <a 
            href="https://www.stefanonatali.it/chi-sono/" 
            className="hover:text-gray-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chi sono
          </a>

          <a href="/#studio" className="hover:text-gray-300 transition">Contatti</a>

          {/* 👉 LINK AL TOUR 360° */}
          <a 
            href="https://www.3dwork.it/PanoTest/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition font-semibold"
          >
            Tour 360°
          </a>
        </nav>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <nav className="md:hidden flex flex-col bg-black text-white px-6 pb-4 space-y-4 text-lg border-t border-white/10">
          <a href="/#services" onClick={() => setOpen(false)}>Servizi</a>

          <a 
            href="https://www.stefanonatali.it"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Chi sono
          </a>

          <a href="/#studio" onClick={() => setOpen(false)}>Contatti</a>

          {/* 👉 LINK AL TOUR 360° */}
          <a 
            href="https://www.3dwork.it/PanoTest/index.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Tour 360°
          </a>
        </nav>
      )}
    </header>
  );
}





