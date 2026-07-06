import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

const navLinks = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "services", label: "Price" },
  { id: "projects", label: "Projects" },
];

export default function Sidebar({ isOpen, onClose, onContactClick }: SidebarProps) {
  const handleScroll = (id: string) => {
    onClose();
    // Add a small delay for the sidebar to close before scrolling
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const handleTopScroll = () => {
    onClose();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  const handleContact = () => {
    onClose();
    setTimeout(onContactClick, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0C0C0C]/80 backdrop-blur-sm"
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 h-full w-full max-w-xs bg-[#0C0C0C] border-l-2 border-white/10 p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6">
              <button // Sanka Yashodhana
                onClick={handleTopScroll}
                className="text-xl font-bold tracking-widest uppercase text-[#D7E2EA] h-10"
              >
                Sanka Yashodhana
              </button>
              <button
                onClick={onClose}
                className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors p-1.5 rounded-full hover:bg-white/5"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <hr className="border-white/10 h-7" />

            {/* Navigation Links */}
            <nav className="flex flex-col items-start gap-4 pt-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className="w-full text-left p-4 border border-white/20 rounded-lg text-xl font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors duration-200 hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={handleContact}
                className="w-full text-left p-4 border border-white/20 rounded-lg text-xl font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors duration-200 hover:bg-white/5"
              >
                Contact
              </button>
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}