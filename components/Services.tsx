export default function Services() {
  const items = [
    {
      title: "Render Professionali",
      text: "Immagini fotorealistiche e brevi clip video che valorizzano progetto, materiali e luce reale.",
      icon: () => (
        <svg className="h-10 w-10 text-white mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75V21h15V9.75" />
        </svg>
      )
    },
    {
      title: "Comunicazione Visiva",
      text: "Brochure digitali e materiali visivi per presentare il progetto.",
      icon: () => (
        <svg className="h-10 w-10 text-white mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.364-6.364l-2.121 2.121M8.757 15.243l-2.121 2.121m0-10.485l2.121 2.121m6.364 6.364l2.121 2.121" />
        </svg>
      )
    },
    {
      title: "Visual Identity del Progetto",
      text: "Render, brochure e landing page dedicata.",
      icon: () => (
        <svg className="h-10 w-10 text-white mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5H3.75z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5h3m-3 3h3m4.5-3h3" />
        </svg>
      )
    },
    {
      title: "Siti Web & Landing Page Next.js",
      text: "Sviluppo siti web moderni, veloci e ottimizzati SEO utilizzando tecnologia Next.js. Ideali per presentare progetti, immobili e brand con un design pulito, professionale e ad alte prestazioni.",
      icon: () => (
        <svg className="h-10 w-10 text-white mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12h19.5M12 2.25c3 3 3 16.5 0 19.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-black text-white">

      {/* Linea spaziatrice chiara */}
      <div className="w-1/2 mx-auto h-px bg-gray-300 mb-16"></div>

      <h2 className="text-4xl font-bold text-center mb-16">Servizi</h2>

      {/* ⭐ FRASE LOCAL SEO */}
      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
        3D WORK™ Enhanced AI è uno studio di rendering 3D con sede a Cesena, operativo in tutta Italia.
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
        {items.map((s, i) => (
          <div
            key={i}
            className="p-8 border border-gray-800 rounded-xl hover:bg-gray-900 transition flex flex-col h-full"
          >
            <s.icon />
            <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
            <p className="text-gray-300 flex-grow">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
