import { EDUCATION } from "../data";
import FadeIn from "./FadeIn";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 flex flex-col justify-center"
    >
      <div className="max-w-5xl">
        {/* Heading */}
        <div className="text-center justify-center mb-16 sm:mb-20 md:mb-28">
          <span
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            className="font-black uppercase tracking-tight text-[#0C0C0C]  block select-none"
          >
            Education
          </span>
        </div>

        {/* Education items */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {EDUCATION.map((item, i) => (
            <FadeIn
              key={item.id}
              delay={i * 0.1}
              y={35}
              className="border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10"
            >
              {/* Left Column: Year */}
              <div
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                className="font-black text-[#0C0C0C] leading-none select-none md:w-[180px] lg:w-[220px] flex-shrink-0"
              >
                {item.year}
              </div>

              {/* Right Column: School & Degree Stack */}
              <div className="flex-1 flex flex-col gap-2 md:gap-3">
                <h3
                  style={{ fontSize: "clamp(1.2rem, 2.2vw, 2.1rem)" }}
                  className="font-medium uppercase text-[#0C0C0C] tracking-tight"
                >
                  {item.school}
                </h3>
                <p
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                >
                  {item.degree}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
