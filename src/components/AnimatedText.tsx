import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  // Scroll tracking on target element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const total = text.length;
  const words = text.split(" ");
  let globalIndex = 0;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIndex) => {
        const chars = word.split("");
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {chars.map((char, charIndex) => {
              const index = globalIndex;
              globalIndex++;
              return (
                <Character
                  key={charIndex}
                  char={char}
                  index={index}
                  total={total}
                  progress={scrollYProgress}
                />
              );
            })}
            {/* Append space between words */}
            {wordIndex < words.length - 1 && (
              <span className="inline-block select-none">&nbsp;</span>
            )}
          </span>
        );
      })}
    </p>
  );
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: any;
  key?: any;
}

function Character({ char, index, total, progress }: CharacterProps) {
  // Scale range gracefully between 0.0 and 1.0 with a sliding overlap window
  const start = (index / total) * 0.8;
  const end = Math.min(1.0, start + 0.2);

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block select-none">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char}
      </motion.span>
    </span>
  );
}
