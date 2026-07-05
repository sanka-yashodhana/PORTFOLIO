import { MouseEventHandler } from "react";

interface AboutProjectButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  className?: string;
}

export default function AboutProjectButton({
  onClick,
  label = "About",
  className = "",
}: AboutProjectButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-base cursor-pointer transition-colors duration-200 hover:bg-[#D7E2EA]/10 active:bg-[#D7E2EA]/20 focus:outline-none ${className}`}
    >
      {label}
    </button>
  );
}
