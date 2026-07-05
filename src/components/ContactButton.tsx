import { MouseEventHandler } from "react";

interface ContactButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  className?: string;
}

export default function ContactButton({
  onClick,
  label = "Contact Me",
  className = "",
}: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
      }}
      className={`rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base outline-2 outline-white outline-offset-[-3px] cursor-pointer transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus:outline-none ${className}`}
      id="contact-button-pill"
    >
      {label}
    </button>
  );
}
