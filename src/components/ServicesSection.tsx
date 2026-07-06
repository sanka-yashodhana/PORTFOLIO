import { SERVICES } from "../data";
import FadeIn from "./FadeIn";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-[50px] md:rounde-[60px] px-5 sm:px-8 md:px-10 py-30 sm:py-34 md:py-40 relative z-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <span
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            className="font-black uppercase tracking-tight text-[#0C0C0C] leading-none block select-none"
          >
            Services
          </span>
        </div>

        {/* 5 Service items with horizontal layout */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {SERVICES.map((item, i) => (
            <FadeIn
              key={item.id}
              delay={i * 0.1}
              y={35}
              className="border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10"
            >
              {/* Left Column: Number */}
              <div
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                className="font-black text-[#0C0C0C] leading-none select-none md:w-[180px] lg:w-[220px] flex-shrink-0"
              >
                {item.number}
              </div>

              {/* Right Column: Name & Description Stack */}
              <div className="flex-1 flex flex-col gap-2 md:gap-3">
                <h3
                  style={{ fontSize: "clamp(1.2rem, 2.2vw, 2.1rem)" }}
                  className="font-medium uppercase text-[#0C0C0C] tracking-tight"
                >
                  {item.name}
                </h3>
                <p
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                >
                  {item.description}
                </p>
                <p className="flex flex-wrap gap-3 mt-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#0C0C0C] text-white text-xs font-medium px-4 py-2 rounded-full mr-2 gap-2"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
                <br></br>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
