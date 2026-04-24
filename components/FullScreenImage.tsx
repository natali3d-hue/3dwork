import Image from "next/image";

export default function FullScreenImage() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/Esterno Render.webp"
        alt="Full Screen Architecture"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/1
      0"></div>
    </section>
  );
}
