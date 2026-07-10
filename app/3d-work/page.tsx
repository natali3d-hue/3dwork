import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Work | Alias ufficiale di 3DWORK – Rendering 3D Fotorealistici",
  description:
    "3D Work è l'alias ufficiale di 3DWORK, studio specializzato in rendering 3D fotorealistici per immobili, architettura e design.",
  alternates: {
    canonical: "https://www.3dwork.it/3d-work",
  },
  openGraph: {
    title: "3D Work | 3DWORK – Rendering 3D Fotorealistici",
    description:
      "3D Work è la variante del brand 3DWORK, studio di rendering 3D fotorealistici.",
    url: "https://www.3dwork.it/3d-work",
    siteName: "3DWORK",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "3DWORK",
    "alternateName": "3D Work",
    "url": "https://www.3dwork.it/3d-work",
    "description":
      "3D Work è l'alias ufficiale di 3DWORK, studio di rendering 3D fotorealistici.",
    "sameAs": [
      "https://www.instagram.com/3dwork_stefanonatali",
      "https://www.facebook.com/3DWORKstudio"
    ]
  };

  return (
    <main className="px-6 py-20 max-w-3xl mx-auto text-white">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-4xl font-bold mb-6">3D Work – Alias ufficiale di 3DWORK</h1>

      <p className="text-lg leading-relaxed mb-6">
        3D Work è semplicemente la variante del nome del brand <strong>3DWORK</strong>.
        Molti utenti cercano “3D Work” con lo spazio, e questa pagina serve a chiarire
        che si tratta dello stesso studio di rendering 3D fotorealistici.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        3DWORK realizza rendering 3D professionali per immobili, architettura, interni,
        esterni e progetti di design. L’obiettivo è offrire visualizzazioni fotorealistiche
        che valorizzano ogni progetto.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Visita la homepage ufficiale:{" "}
        <a href="/" className="text-blue-400 underline">www.3dwork.it</a>
      </p>
    </main>
  );
}
