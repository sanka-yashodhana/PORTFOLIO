import { SKILLS } from "../data";
import FadeIn from "./FadeIn";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20"
    >
      <div className="max-w-5xl mx-auto my">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={40} as="h2">
            <span
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
              className="hero-heading font-black uppercase tracking-tight block select-none my"
            >
              Skills
            </span>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SKILLS.map((skillCategory, index) => (
            <FadeIn key={index} delay={0.1 * index} y={30}>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">{skillCategory.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-[#1A1A1A] border border-white/10 rounded-full px-4 py-2 text-sm font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
