import ContactButton from "./ContactButton";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

interface AboutSectionProps {
  onContactClick: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  const aboutText =
    "I approach software development with a deep commitment to structural integrity and user experience. For me, writing code is about balancing clean architecture with seamless functionality, ensuring that what happens under the hood is just as refined as the interface the user interacts with.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative 3D Images Positioned Absolutely in Corners */}

      {/* Top Left: Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://i.postimg.cc/rw1yL87P/React.png"
            alt="3D Moon Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom Left: 3D Object Shape */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://i.postimg.cc/1XRkqSzb/Node-js.png"
            alt="3D Core Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Top Right: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://i.postimg.cc/L6n7KNgj/Mongo-DB.png"
            alt="3D Lego Block"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom Right: 3D Group Shapes */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://i.postimg.cc/fbTqCCsw/Tailwind-CSS.png"
            alt="3D Shapes Cluster"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Centered narrative and headers */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[620px] mx-auto text-center">
        {/* Title */}
        <FadeIn delay={0} y={40} as="h2" className="w-full">
          <span
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center block select-none"
          >
            About me
          </span>
        </FadeIn>

        {/* Heading spacing: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated scroll-reveal paragraph */}
        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-medium leading-relaxed text-center text-[clamp(1rem,2vw,1.35rem)]"
        />

        {/* Paragraph button spacing: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* CTA Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
