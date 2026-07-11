import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  MessageSquare,
  Mail,
  Phone,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "services" },
  { id: "education", label: "Education" },

  { id: "projects", label: "Projects" },
];

const aboutText =
  "Hello, I'm Sanka Yashodhana. As a BICT (Hons) in Information and Communication Technology undergraduate, I approach software development with a deep commitment to structural integrity and user experience. For me, writing code is about balancing clean architecture with seamless functionality—ensuring that what happens under the hood is just as refined as the interface the user interacts with.";

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sanka-yashodana/",
  },
  { label: "GitHub", icon: Github, href: "https://github.com/sanka-yashodhana" },
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/sanka.yasodana.3?mibextid=ZbWKwL",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/sankayashodhana/",
  },
  {
    label: "WhatsApp",
    icon: MessageSquare,
    href: "https://wa.me/+94729902577",
  },
  { label: "Email", icon: Mail, href: "mailto:sankayashodana13@gmail.com" },
  { label: "Phone", icon: Phone, href: "tel:+94729902577" },
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
            className="absolute right-0 top-0 h-full w-full max-w-xs bg-[#0C0C0C] border-l-2 border-white/10 flex flex-col"
          >
            {/* Scrollable Content Area */}
            <div className="flex-grow overflow-y-auto p-6">
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
              <br></br>

              <hr className="border-white/10" />

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

              <br></br>
              <br></br>

              {/* About Text */}
              <p className="text-sm text-[#D7E2EA]/70 leading-relaxed py-8">
                {aboutText}
              </p>
            </div>

            {/* Fixed Bottom Social Links */}
            <div className="flex-shrink-0 p-6 flex items-center justify-center gap-5 border-t-2 border-white/10">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:scale-110 transition-all duration-200"
                >
                  <link.icon size={22} />
                </a>
              ))}
            </div>
            <br></br>
            <br></br>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}