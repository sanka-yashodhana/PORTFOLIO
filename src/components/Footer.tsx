import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  MessageSquare, // Using as a stand-in for WhatsApp
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const iconVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sanka-yashodhana-a2732b288/",
  },
  { label: "GitHub", icon: Github, href: "https://github.com/sankayashodhana" },
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/sanka.yashodhana.7",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/sankayashodhana/",
  },
  {
    label: "WhatsApp",
    icon: MessageSquare,
    href: "https://wa.me/+94788776363",
  },
  { label: "Email", icon: Mail, href: "mailto:sankayashodhana@gmail.com" },
  { label: "Phone", icon: Phone, href: "tel:+94788776363" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 pt-12 pb-16 relative z-30 border-t-2 border-white/10 flex flex-col items-center justify-center">
      <FadeIn>
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
          <div className="text-center">
            <h4 className="text-lg font-bold uppercase tracking-widest text-center">
              Sanka Yashodhana
            </h4>
            <br></br>
            <p className="text-sm text-[#D7E2EA]/60 mt-6 text-center" >I approach software development with a deep commitment to structural integrity and user experience. For me, writing code is about balancing clean architecture with seamless functionality, ensuring that what happens under the hood is just as refined as the interface the user interacts with.</p>
           
          </div>
          <motion.div
            className="flex items-center gap-4"
            variants={iconContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] hover:scale-110 transition-all duration-200"
                variants={iconVariants}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <br></br>
         <p className="text-sm text-[#D7E2EA]/60 mt-4 text-center">
              All Right Reserved | Sanka Yashodhana &copy; {new Date().getFullYear()}
            </p>
      </FadeIn>
    </footer>
  );
}