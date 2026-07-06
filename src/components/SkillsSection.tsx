import { SKILLS } from "../data";
import FadeIn from "./FadeIn";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-[50px] md:rounded-t-[60px] -mt-1 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 flex flex-col justify-center items-center"
    >
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <div className="text-center justify-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn as="h2" y={40}>
            <span
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
              className="hero-heading font-black uppercase tracking-tight block select-none"
            >
              Skills
            </span>
          </FadeIn>
        </div>
        <br></br>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {SKILLS.map((skillCategory, i) => (
            <FadeIn
              key={skillCategory.category}
              delay={i * 0.1}
              y={35}
              className="flex flex-col gap-4 items-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#D7E2EA]/90">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillCategory.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm sm:text-base text-[#D7E2EA]/80"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}