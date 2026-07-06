import React, { useState } from "react";
import Navbar from "./Navbar";
import ContactButton from "./ContactButton";
import Magnet from "./Magnet";
import FadeIn from "./FadeIn";
import Sidebar from "./Sidebar";

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C] px-6 md:px-10 pb-7 sm:pb-8 md:pb-10"
    >
      {/* Navbar at top */}
      <Navbar onContactClick={onContactClick} onMenuClick={openSidebar} />
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} onContactClick={onContactClick} />

      {/* Middle Content: Heading + Portrait */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-0 overflow-hidden">
        {/* Hero Heading */}
        <FadeIn 
          as="h1" 
          delay={0.15} 
          y={40} 
          className="hero-heading font-black uppercase tracking-tight leading-none text-center whitespace-nowrap w-full select-none z-10 mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, i&apos;m sanka
        </FadeIn>

        {/* Hero Portrait - In flow on mobile, absolute on larger screens */}
        <div 
          className="relative md:absolute md:top-8/12 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-0 w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] pointer-events-none mt-4 sm:mt-6 md:mt-0"
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
