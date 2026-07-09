import { useState } from "react";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import PatternSection from "./components/PatternSection";
import ContactDialog from "./components/ContactDialog";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div 
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans relative"
    >
      {/* 1. Hero Section */}
      <HeroSection onContactClick={openContact} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onContactClick={openContact} />

      {/* 4. Services Section */}
      <ServicesSection />

      <div className="h-20 sm:h-40 md:z-30"/>

      {/* 5. Education Section */}
      <EducationSection />

      <div className="h-20 sm:h-40 md:z-30"/>

      {/* Skills Section */}
      <SkillsSection />

      <div className="h-20 sm:h-30 md:h-40"/>

      {/* 6. Projects Section */}
      <ProjectsSection />

      <div className="h-20 sm:h-40 md:z-30"/>

      {/* 7. Pattern Section */}
      <PatternSection />

      {/* Contact Dialog Popup */}
      <ContactDialog isOpen={isContactOpen} onClose={closeContact} />

      
      <div className="h-20 sm:h-40 md:z-30"/>

      {/* Footer */}
      <Footer />
    </div>
  );
}
