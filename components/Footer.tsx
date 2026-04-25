export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black text-gray-400 text-center text-sm">
      <p>Studio · Cesena (FC) · Italy</p>
      <p>Email: info@3dwork.it</p>

      <div className="mt-4 flex justify-center gap-6">
        <a
          href="/privacy"
          className="underline hover:text-white transition"
        >
          Privacy Policy
        </a>

        <a
          href="/cookie"
          className="underline hover:text-white transition"
        >
          Cookie Policy
        </a>
      </div>

      <p className="mt-4">©2026 3D WORK™ · P.I. 03371840400</p>
    </footer>
  );
}
