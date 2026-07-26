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

          {/* ▼ TOUR 360° CON SOTTOMENU STABILE */}
          <div className="relative group">
            <span className="hover:text-gray-300 transition font-semibold cursor-pointer">
              Tour 360°
            </span>

            {/* SUBMENU */}
            <div
              className="
                absolute left-0 top-full mt-1 
                hidden group-hover:flex flex-col
                bg-black border border-white/10 rounded-md shadow-lg
                pointer-events-auto p-1
              "
            >
              <a 
                href="/PanoTest/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 hover:bg-white/10 text-sm text-white"
              >
                Interno
              </a>

              <a 
                href="/tour360-esterno"
                className="px-4 py-2 hover:bg-white/10 text-sm text-white"
              >
                Esterno
              </a>
            </div>
          </div>
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

          {/* ▼ TOUR 360° MOBILE CON SOTTOMENU */}
          <div className="flex flex-col">
            <span className="font-semibold mb-2">Tour 360°</span>

            <a 
              href="/PanoTest/index.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="pl-4 py-1 text-white/80"
            >
              Interno
            </a>

            <a 
              href="/tour360-esterno"
              onClick={() => setOpen(false)}
              className="pl-4 py-1 text-white/80"
            >
              Esterno
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
