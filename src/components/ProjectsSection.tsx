import { useRef, useState, useEffect } from "react";
import { PROJECTS } from "../data";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "./LiveProjectButton";
import AboutProjectButton from "./AboutProjectButton";
import FadeIn from "./FadeIn";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 relative z-30 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={40} as="h2">
            <span
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
              className="hero-heading font-black uppercase tracking-tight block select-none"
            >
              Projects
            </span>
          </FadeIn>
        </div>

        {/* Sticky Cards Stacking Area */}
        <div className="relative flex flex-col gap-10 sm:gap-14 md:gap-16 pb-20 sm:pb-24 md:pb-32 overflow-visible">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
  total: number;
  key?: any;
}

function ProjectCard({ project, index, total }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  // Track scroll of this card container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale down from 1 to targetScale as we scroll past
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Create a slight visual dimming / deepening effect on past cards
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.75 + index * 0.05]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0 && isDescriptionVisible) {
        setIsDescriptionVisible(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, isDescriptionVisible]);

  return (
    <div
      ref={containerRef}
      className="sticky w-full flex justify-center items-start overflow-visible"
      style={{
        // Stick below the top of the viewport to create a gap.
        top: "12vh",
        // Add padding to create space for the stacking effect. This is 0 for the last card.
        paddingBottom: `${(total - 1 - index) * 28}px`,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
        }}
        className="w-full max-w-5xl xl:max-w-6xl border-2 border-[#D7E2EA]/70 bg-[#0C0C0C] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-5 sm:p-6 md:p-8 flex flex-col justify-between gap-4 md:gap-6 shadow-2xl"
      >
        {/* Top Row: Number, category, name, and Live Project Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Massive Number */}
            <div
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              className="font-black text-[#D7E2EA] leading-none select-none"
            >
              {project.number}
            </div>

            {/* Category + Project Name stacked */}
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#D7E2EA] opacity-60">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Ghost button */}
          <div className="flex-shrink-0 self-end sm:self-center flex flex-col gap-2">
            <AboutProjectButton
              onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
            />
            <LiveProjectButton
              onClick={() =>
                window.open(project.liveUrl, "_blank", "noopener,noreferrer")
              }
            />
            {project.liveUr2 && (
              <LiveProjectButton
                onClick={() =>
                  window.open(project.liveUr2, "_blank", "noopener,noreferrer")
                }
              />
            )}
            {project.liveUr3 && (
              <LiveProjectButton
                onClick={() =>
                  window.open(project.liveUr3, "_blank", "noopener,noreferrer")
                }
              />
            )}
          </div>
        </div>

        {/* Detailed Description */}
        <motion.div
          initial={false}
          animate={{ height: isDescriptionVisible ? "auto" : 0, opacity: isDescriptionVisible ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="p-4 border-t-2 border-[#D7E2EA]/20">
            <p className="text-base text-[#D7E2EA]">
              {project.detailedDescription}
            </p>
          </div>
        </motion.div>

        {/* Bottom Row: 2-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 sm:gap-6 w-full flex-1 min-h-0">
          {/* Column 1 (40% width) - 2 stacked images */}
          <div className="flex flex-col gap-4 sm:gap-6 h-full justify-between">
            {/* Col 1 image 1 - More flexible height */}
            <div
              style={{ height: "clamp(100px, 15vw, 180px)" }}
              className="w-full rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-neutral-900 border border-white/5 shadow-inner"
            >
              <img
                src={project.col1_1}
                alt={`${project.name} visual 1`}
                className="w-full h-full object-cover object-center select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Col 1 image 2 - More flexible height */}
            <div
              style={{ height: "clamp(120px, 25vw, 280px)" }}
              className="w-full rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-neutral-900 border border-white/5 shadow-inner flex-grow"
            >
              <img
                src={project.col1_2}
                alt={`${project.name} visual 2`}
                className="w-full h-full object-cover select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Column 2 (60% width) - 1 tall showcase image */}
          <div className="w-full h-full min-h-[180px] md:min-h-0 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-neutral-900 border border-white/5 shadow-inner">
            <img
              src={project.col2}
              alt={`${project.name} showcase`}
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
