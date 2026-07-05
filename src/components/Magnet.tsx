import { useState, useEffect, useRef, ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number; // default 150
  strength?: number; // default 3
  activeTransition?: string; // default "transform 0.3s ease-out"
  inactiveTransition?: string; // default "transform 0.6s ease-in-out"
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const mx = e.clientX;
      const my = e.clientY;

      // Check if mouse is within padding distance of the element's bounding rectangle
      const isWithinPadding =
        mx >= rect.left - padding &&
        mx <= rect.right + padding &&
        my >= rect.top - padding &&
        my <= rect.bottom + padding;

      if (isWithinPadding) {
        setIsActive(true);
        const dx = mx - cx;
        const dy = my - cy;

        // Apply translate3d transform divided by strength factor
        setPosition({
          x: dx / strength,
          y: dy / strength,
        });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, strength]);

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isActive ? activeTransition : inactiveTransition,
    willChange: "transform",
  };

  return (
    <div ref={ref} style={style} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
