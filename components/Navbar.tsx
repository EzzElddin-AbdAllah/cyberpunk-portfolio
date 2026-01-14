import { CONTACT_INFO } from "@/constants";
import posthog from "posthog-js";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, Terminal, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "ACADEMIC", href: "#education" },
    { name: "LOGS", href: "#experience" },
    { name: "SYSTEM", href: "#skills" },
    { name: "DATA", href: "#projects" },
    { name: "CERTS", href: "#courses" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
          isScrolled
            ? "py-2 bg-cyber-black/90 border-b border-cyber-cyan/30 backdrop-blur-md"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo / ID */}
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => posthog.capture("Navbar Logo Click")}
          >
            <div className="w-8 h-8 bg-cyber-cyan text-black flex items-center justify-center font-bold cyber-clip hover:bg-cyber-pink transition-colors duration-300">
              EA
            </div>
            <div className="flex flex-col">
              <span className="text-cyber-cyan font-display font-bold tracking-widest text-sm leading-none group-hover:text-cyber-pink transition-colors">
                EZZ.DEV
              </span>
              <span className="text-[10px] text-cyber-pink tracking-widest leading-none">
                NETRUNNER_V1.0
              </span>
            </div>
          </div>

          {/* Desktop HUD */}
          <div className="hidden md:flex items-center bg-cyber-dark/80 border border-cyber-dim px-2 py-1 cyber-clip">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() =>
                  posthog.capture("Nav Link Click", {
                    name: link.name,
                    source: "Desktop",
                  })
                }
                className="relative px-4 py-2 text-[10px] font-bold text-slate-400 hover:text-cyber-cyan transition-colors tracking-widest group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute inset-0 bg-cyber-cyan/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></span>
              </a>
            ))}
          </div>

          {/* Connect Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex gap-2">
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                onClick={() =>
                  posthog.capture("Social Link Click", {
                    platform: "GitHub",
                    source: "Navbar",
                  })
                }
                className="text-cyber-cyan hover:text-cyber-pink transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,60,0.8)]"
              >
                <Github size={20} />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                onClick={() =>
                  posthog.capture("Social Link Click", {
                    platform: "LinkedIn",
                    source: "Navbar",
                  })
                }
                className="text-cyber-cyan hover:text-cyber-pink transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,60,0.8)]"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => posthog.capture("Initiate Button Click")}
              className="px-6 py-2 bg-transparent border border-cyber-cyan text-cyber-cyan text-xs font-bold tracking-widest hover:bg-cyber-cyan hover:text-black transition-all duration-300 cyber-clip-button relative group overflow-hidden"
            >
              <span className="relative z-10">INITIATE</span>
              <div className="absolute inset-0 bg-cyber-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-cyber-cyan border border-cyber-cyan p-1"
            onClick={() => {
              setIsMobileMenuOpen(true);
              posthog.capture("Mobile Menu Opened");
            }}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] bg-cyber-black flex flex-col p-6 overflow-y-auto"
          >
            {/* Mobile Header */}
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cyber-cyan text-black flex items-center justify-center font-bold cyber-clip">
                  EA
                </div>
                <span className="text-cyber-cyan font-display font-bold tracking-widest text-sm">
                  EZZ.DEV
                </span>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  posthog.capture("Mobile Menu Closed");
                }}
                className="text-cyber-pink w-10 h-10 border border-cyber-pink/30 flex items-center justify-center"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    posthog.capture("Nav Link Click", {
                      name: link.name,
                      source: "Mobile",
                    });
                  }}
                  className="group flex items-center justify-between p-4 border border-white/5 bg-white/5 cyber-clip-button"
                >
                  <span className="text-2xl font-display font-bold text-white group-hover:text-cyber-cyan transition-colors">
                    {link.name}
                  </span>
                  <span className="text-xs font-mono text-cyber-pink">
                    0{index + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 space-y-8">
              <div className="text-center">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] mb-4">
                  Secure_Uplink
                </p>
                <div className="flex gap-6 justify-center">
                  <a
                    href={CONTACT_INFO.github}
                    target="_blank"
                    onClick={() =>
                      posthog.capture("Social Link Click", {
                        platform: "GitHub",
                        source: "Mobile Menu",
                      })
                    }
                    className="text-cyber-cyan hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    onClick={() =>
                      posthog.capture("Social Link Click", {
                        platform: "LinkedIn",
                        source: "Mobile Menu",
                      })
                    }
                    className="text-cyber-cyan hover:text-white transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    onClick={() =>
                      posthog.capture("Social Link Click", {
                        platform: "Email",
                        source: "Mobile Menu",
                      })
                    }
                    className="text-cyber-cyan hover:text-white transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  posthog.capture("Initiate Connection Click", {
                    source: "Mobile Menu",
                  });
                }}
                className="w-full flex items-center justify-center gap-2 py-4 bg-cyber-cyan text-black font-bold tracking-[0.2em] cyber-clip-button"
              >
                <Terminal size={18} />
                INITIATE_CONNECTION
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
