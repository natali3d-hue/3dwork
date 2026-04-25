import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script"; // 1. Importa il componente Script

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.3dwork.it"),
  title: "3DWORK – Rendering 3D Fotorealistici",
  description: "Rendering 3D fotorealistici per immobili, architettura e agenzie.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {/* HEADER FISSO */}
        <Header />

        {/* CONTENUTO DELLE PAGINE */}
        <div className="pt-20"> 
          {children}
        </div>

        <Footer />

        {/* 2. Inserito lo script di Umami qui sotto */}
        <Script 
          defer 
          src="https://cloud.umami.is/script.js" 
          data-website-id="1af06dfe-ae7e-4a09-81ac-7491b4542a70" 
        />
      </body>
    </html>
  );
}




