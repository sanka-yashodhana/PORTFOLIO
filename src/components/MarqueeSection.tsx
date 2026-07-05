import { useEffect, useRef, useState } from "react";
import { MARQUEE_GIFS } from "../data";

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;

      // Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const calcOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calcOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Row 1: first 11 images (indices 0 to 10), tripled
  const row1 = MARQUEE_GIFS.slice(0, 11);
  const row1Tripled = [...row1, ...row1, ...row1];

  // Row 2: remaining 10 images (indices 11 to 20), tripled
  const row2 = MARQUEE_GIFS.slice(11, 21);
  const row2Tripled = [...row2, ...row2, ...row2];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves right */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-3 whitespace-nowrap"
            style={{
              transform: `translate3d(${offset - 200}px, 0px, 0px)`,
              willChange: "transform",
            }}
          >
            {row1Tripled.map((url, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[280px] h-[180px] sm:w-[360px] sm:h-[230px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-neutral-900/50 border border-white/5"
              >
                <img
                  src={url}
                  alt="3D Artwork Row 1"
                  loading="lazy"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves left */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-3 whitespace-nowrap"
            style={{
              transform: `translate3d(${-(offset - 200)}px, 0px, 0px)`,
              willChange: "transform",
            }}
          >
            {row2Tripled.map((url, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[280px] h-[180px] sm:w-[360px] sm:h-[230px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-neutral-900/50 border border-white/5"
              >
                <img
                  src={url}
                  alt="3D Artwork Row 2"
                  loading="lazy"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
