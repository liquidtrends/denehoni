import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Animated gradient */}
      <div className="hero-animated-gradient absolute inset-0 z-0" />

      {/* Optional grain texture */}
      <div className="hero-grain absolute inset-0 z-10 opacity-70" />

      {/* Bottom-left floral (responsive width) */}
      <div className="absolute -bottom-20 left-0 z-30 w-[300px] sm:w-[500px] md:w-[650px] lg:w-[800px]">
        <Image
          src="/flowers-left.png"
          alt="Cree/Dene floral design (placeholder)"
          width={800}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
