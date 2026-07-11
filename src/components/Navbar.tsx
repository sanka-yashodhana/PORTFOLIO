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
      <div className="flex items-center justify-between px-2 sm:px-6 md:px-10 pt-2 sm:pt-6 md:pt-8 w-full">
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
        <div className="md:hidden pr-3 pt-3">
          <button
            onClick={onMenuClick}
            className="flex flex-col items-center justify-center gap-1.5 rounded-full border border-[#D7E2EA]/40 p-2 text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
          </button>
        </div>
      </div>
    </FadeIn>
  );
}
