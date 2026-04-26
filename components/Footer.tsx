export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black text-gray-400 text-center text-sm">
      <p>Studio · Cesena (FC) · Italy</p>
      <p>Email: info@3dwork.it</p>

      {/* SOCIAL ICONS */}
      <div className="mt-6 flex justify-center gap-6">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/3DWORKstudio/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/stefano-natali-pittura-3dwork/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3zM14.5 9c-2.33 0-3.5 1.34-3.5 3.2V21h-4V9h4v1.7c.6-1 1.8-1.7 3.5-1.7 2.76 0 5 2.24 5 5v7h-4v-7c0-1.1-.9-2-2-2z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/3dwork_stefanonatali/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8zm4.8-9.6a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" />
          </svg>
        </a>
      </div>

      {/* LEGAL LINKS */}
      <div className="mt-6 flex justify-center gap-6">
        <a href="/privacy" className="underline hover:text-white transition">
          Privacy Policy
        </a>

        <a href="/cookie" className="underline hover:text-white transition">
          Cookie Policy
        </a>
      </div>

      {/* TECHNOLOGY NOTE */}
      <p className="mt-6 text-gray-500 text-xs">
        Sito sviluppato con Next.js ·
      </p>

      <p className="mt-2">©2026 3D WORK™ · P.I. 03371840400</p>
    </footer>
  );
}
