import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import {
  X,
  Send,
  CheckCircle2,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  MessageSquare,
} from "lucide-react";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
  };

  const handleClose = () => {
    onClose();
    // Reset submission state after exit transition completes
    setTimeout(() => {
      resetForm();
    }, 300);
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sanka-yashodhana-a2732b288/",
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/sankayashodhana",
    },
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
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#0C0C0C]/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-[#0C0C0C] border-2 border-[#D7E2EA]/20 rounded-[30px] p-6 sm:p-8 md:p-10 text-[#D7E2EA] z-10 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors p-1.5 rounded-full hover:bg-white/5 cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-center">
                    Get in Touch
                  </h3>
                  <p className="text-sm text-center text-[#D7E2EA]/60 uppercase tracking-wide mt-2">
                    Fill out the form and I&apos;ll get back to you in 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/50">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Sanka"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B600A8]/80 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/50">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sanka@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B600A8]/80 transition-colors"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/50">
                    Tell me about your project
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="We need a full-stack MERN application with..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B600A8]/80 transition-colors resize-none"
                  />
                </div>

                {/* Submit button with linear gradient */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background:
                      "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                  }}
                  className="w-full mt-2 rounded-xl text-white font-medium uppercase tracking-widest py-3.5 text-sm cursor-pointer transition-opacity hover:opacity-90 active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#B600A8]/10 border-2 border-[#B600A8] flex items-center justify-center text-[#B600A8] mb-2 animate-bounce">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl sm:text-5xl font-black uppercase tracking-tight ">
                  Message Sent!
                </h3>
                <p className="text-sm text-[#D7E2EA]/70 max-w-sm">
                  Thank you for reaching out, <strong>{name}</strong>! I have received your request and will get back to you shortly.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-semibold uppercase tracking-wider px-8 py-2.5 text-xs hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
                >
                  Back to Portfolio
                </button>
              </motion.div>
            )}
            <br></br>

            {/* Quick contact direct links */}
            {!isSubmitted && (
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:scale-110 transition-all duration-200"
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
