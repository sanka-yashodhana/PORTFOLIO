import Navbar from "./Navbar";
import ContactButton from "./ContactButton";
import Magnet from "./Magnet";
import FadeIn from "./FadeIn";

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C] px-6 md:px-10 pb-7 sm:pb-8 md:pb-10"
    >
      {/* Navbar at top */}
      <Navbar onContactClick={onContactClick} />

      {/* Hero Portrait - Centered and Magnetic */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none"
      >
        <FadeIn delay={0.6} y={30} className="w-full pointer-events-auto">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <img
              src="https://i.postimg.cc/Y2mMKXkh/Gemini-Generated-Image-yslri7yslri7yslr1-bg-removed.png"
              alt="Sanka Portrait"
              className="w-full h-auto object-contain select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Middle: Hero Heading */}
      <div className="flex-1 flex items-center justify-center relative z-0 overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn 
          as="h1" 
          delay={0.15} 
          y={40} 
          className="hero-heading font-black uppercase tracking-tight leading-none text-center whitespace-nowrap w-full select-none"
        >
          Hi, i&apos;m sanka
        </FadeIn>
      </div>

      {/* Bottom Bar: Text + Button */}
      <div className="w-full flex justify-between items-end relative z-20">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p 
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          >
            Engineering modern web experiences from the ground up.
          </p>
        </FadeIn>

        {/* Right Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
