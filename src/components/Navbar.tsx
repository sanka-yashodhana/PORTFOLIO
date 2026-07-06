import FadeIn from "./FadeIn";

interface NavbarProps {
  onContactClick: () => void;
  onMenuClick: () => void;
}

export default function Navbar({ onContactClick, onMenuClick }: NavbarProps) {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FadeIn as="nav" delay={0} y={-20} className="w-full">
      <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 w-full">
        {/* Sleek brand label */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm md:text-lg lg:text-[1.4rem] font-bold tracking-widest uppercase text-[#D7E2EA] cursor-pointer"
        >
          Software Builder
        </button>

        {/* Links - Hidden on small screens */}
        <div className="hidden md:flex items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          <button
            onClick={() => handleScroll("about")}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            About
          </button>
          
           <button
            onClick={() => handleScroll("education")}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Education
          </button>

          <button
            onClick={() => handleScroll("services")}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Price
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={onContactClick}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Contact
          </button>
        </div>
        
        {/* Hamburger Menu - Visible on small screens */}
        <div className="md:hidden">
          <button onClick={onMenuClick} className="text-white">
            Menu
          </button>
        </div>
      </div>
    </FadeIn>
  );
}
