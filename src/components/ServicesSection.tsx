import { SERVICES } from "../data";
import FadeIn from "./FadeIn";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 flex flex-col justify-center items-center"
    >
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <div className="text-center justify-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn as="h2" y={40}>
            <span
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
              className="font-black uppercase tracking-tight text-[#0C0C0C] block select-none"
            >
              Services
            </span>
          </FadeIn>
        </div>

        {/* Service items */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {SERVICES.map((item, i) => (
            <FadeIn
              key={item.id}
              delay={i * 0.1}
              y={35}
              className="border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10"
            >
              {/* Left Column: Number & Name */}
              <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-1 ">
                <div
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
                  className="font-black text-[#0C0C0C]/30 leading-none select-none"
                >
                  {item.number}
                </div>
                <h3
                  style={{ fontSize: "clamp(1.2rem, 2.2vw, 2.1rem)" }}
                  className="font-medium uppercase text-[#0C0C0C] tracking-tight"
                >
                  {item.name}
                  
                </h3>
              </div>

              {/* Right Column: Description */}
              <div className="flex-1">
                <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60">
                  {item.description}
                </p>
                <br></br>
              </div>
              <br></br>
            </FadeIn>
            
          ))}
        </div>
      </div>
    </section>
  );
}