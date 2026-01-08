import { motion } from "framer-motion";
import { Download, Fingerprint } from "lucide-react";
import { useEffect, useState } from "react";
import { SiNextdotjs, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import { Rnd } from "react-rnd";

const IDCard = () => {
  const [idCardPosition, setIdCardPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleInitialPos = () => {
      if (window.innerWidth < 1024) {
        const cardWidth =
          window.innerWidth < 640 ? 320 : window.innerWidth < 768 ? 350 : 400;
        const availableWidth = window.innerWidth - 48;
        const initialX = Math.max(0, (availableWidth - cardWidth) / 2);
        setIdCardPosition({ x: initialX, y: 0 });
      }
    };
    handleInitialPos();
  }, []);

  return (
    <div className="order-1 lg:order-2 lg:col-span-5 relative mb-16 lg:mb-0 min-h-[500px]">
      <Rnd
        position={idCardPosition}
        onDragStop={(e, d) => setIdCardPosition({ x: d.x, y: d.y })}
        className="!z-[100]"
        enableResizing={false}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="w-[320px] sm:w-[350px] md:w-[400px] h-[520px] lg:h-[500px] bg-cyber-black/95 backdrop-blur-xl border border-cyber-cyan/30 rounded-lg relative shadow-[0_0_60px_rgba(0,240,255,0.2)] group overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {/* Global Scanning Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-cyber-cyan/30 blur-[2px] animate-scan-slow z-30 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-cyan/50 animate-scan-slow z-30 pointer-events-none"></div>
          
          {/* Decorative Circuit Background */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] pointer-events-none"></div>

          {/* Top Holographic Sheen */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-pink/5 pointer-events-none z-10"></div>

          {/* Card Header */}
          <div className="absolute top-0 left-0 w-full h-12 border-b border-cyber-dim flex justify-between items-center px-4 bg-cyber-gray/30" style={{ transform: "translateZ(20px)" }}>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border border-cyber-cyan flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-cyber-cyan/50 animate-pulse"></div>
              </div>
              <span className="text-[10px] font-display font-bold tracking-widest text-cyber-cyan">NETRUNNER_ID</span>
            </div>
            <Fingerprint size={20} className="text-cyber-pink/70" />
          </div>

          {/* Avatar Section */}
          <div className="absolute top-20 inset-x-0 flex justify-center" style={{ transform: "translateZ(30px)" }}>
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 border-2 border-cyber-cyan/30 rounded-full border-t-cyber-cyan animate-spin duration-[3s]"></div>
              <div className="absolute inset-2 border border-cyber-pink/30 rounded-full border-b-cyber-pink animate-spin duration-[5s] direction-reverse"></div>
              <div className="absolute inset-4 rounded-full bg-cyber-black border border-cyber-dim flex items-center justify-center overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="EzzElddin"
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.classList.add("bg-cyber-gray");
                  }}
                />
                <div className="absolute inset-0 bg-cyber-cyan/10 z-20"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent animate-scan z-20"></div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-cyber-black border border-cyber-cyan px-2 py-0.5 rounded text-[10px] font-mono text-cyber-cyan whitespace-nowrap shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                LOCKED / SECURED
              </div>
            </div>
          </div>

          {/* Sidebar Metadata */}
          <div className="absolute top-32 left-4 flex flex-col gap-4 text-[8px] font-mono text-cyber-cyan/50" style={{ transform: "translateZ(15px)" }}>
            <div className="space-y-1">
              <div className="text-cyber-cyan">UPLINK_QUAL</div>
              <div className="w-12 h-1 bg-cyber-cyan/20">
                <div className="w-[85%] h-full bg-cyber-cyan animate-pulse"></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-cyber-cyan">SIGNAL_STRENGTH</div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`w-1 h-3 ${i <= 4 ? "bg-cyber-cyan" : "bg-cyber-cyan/20"}`}></div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-32 right-4 flex flex-col gap-4 text-[8px] font-mono text-cyber-pink/50 items-end" style={{ transform: "translateZ(15px)" }}>
            <div className="text-right">
              <div>SYS_UPTIME</div>
              <div className="text-cyber-pink">04:12:88:21</div>
            </div>
            <div className="text-right">
              <div>CORE_TEMP</div>
              <div className="text-cyber-pink text-xs">32°C</div>
            </div>
          </div>

          {/* Details Section */}
          <div className="absolute top-[260px] lg:top-60 left-0 w-full px-6 lg:px-6 space-y-4" style={{ transform: "translateZ(25px)" }}>
            <div className="text-center relative">
              <div className="absolute -top-1 left-2 w-4 h-4 border-l border-t border-cyber-cyan/40"></div>
              <div className="absolute -top-1 right-2 w-4 h-4 border-r border-t border-cyber-cyan/40"></div>
              <div className="absolute -bottom-1 left-2 w-4 h-4 border-l border-b border-cyber-cyan/40"></div>
              <div className="absolute -bottom-1 right-2 w-4 h-4 border-r border-b border-cyber-cyan/40"></div>
              <h3 className="text-2xl lg:text-xl font-display font-bold text-white tracking-widest leading-none mb-1">EZZELDDIN ABDALLAH</h3>
              <p className="text-xs lg:text-[10px] font-mono text-cyber-pink tracking-[0.2em] uppercase font-bold">FRONT-END ENGINEER</p>
            </div>

            <div className="space-y-2 pt-1">
              <div className="group/stat">
                <div className="flex justify-between items-center text-[11px] font-mono text-cyber-cyan mb-1 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="animate-spin-slow flex items-center justify-center"><SiReact size={14} /></span>
                    <span>REACT.JS</span>
                  </div>
                  <span className="opacity-70">100%</span>
                </div>
                <div className="h-1 w-full bg-cyber-dark border border-cyber-dim p-[1px]">
                  <div className="h-full bg-cyber-cyan w-full shadow-[0_0_8px_rgba(0,240,255,0.5)]"></div>
                </div>
              </div>

              <div className="group/stat">
                <div className="flex justify-between items-center text-[11px] font-mono text-white/90 mb-1 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="bg-black rounded-full flex items-center justify-center"><SiNextdotjs size={14} /></span>
                    <span>NEXT.JS</span>
                  </div>
                  <span className="opacity-70">95%</span>
                </div>
                <div className="h-1 w-full bg-cyber-dark border border-cyber-dim p-[1px]">
                  <div className="h-full bg-white w-[99%] shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
                </div>
              </div>

              <div className="group/stat">
                <div className="flex justify-between items-center text-[11px] font-mono text-cyber-yellow mb-1">
                  <div className="flex items-center gap-2 text-[#3178C6]">
                    <span className="bg-white rounded-[2px] flex items-center justify-center"><SiTypescript size={14} /></span>
                    <span className="text-cyber-yellow">TYPESCRIPT</span>
                  </div>
                  <span className="opacity-70">100%</span>
                </div>
                <div className="h-1 w-full bg-cyber-dark border border-cyber-dim p-[1px]">
                  <div className="h-full bg-cyber-yellow w-full shadow-[0_0_8px_rgba(252,238,10,0.4)]"></div>
                </div>
              </div>

              <div className="group/stat">
                <div className="flex justify-between items-center text-[11px] font-mono text-[#68A063] mb-1">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center"><SiNodedotjs size={14} /></span>
                    <span className="text-white">NODE.JS</span>
                  </div>
                  <span className="opacity-70 text-white/70">90%</span>
                </div>
                <div className="h-1 w-full bg-cyber-dark border border-cyber-dim p-[1px]">
                  <div className="h-full bg-white w-[90%] shadow-[0_0_8px_rgba(255,255,255,0.2)]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end" style={{ transform: "translateZ(20px)" }}>
            <div className="w-10 h-8 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded flex items-center justify-center opacity-80">
              <div className="w-full h-[1px] bg-black/20 my-1"></div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex gap-[2px] h-6 items-end opacity-70">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`w-[2px] bg-white ${Math.random() > 0.5 ? "h-full" : "h-2/3"}`}></div>
                ))}
              </div>
              <span className="text-[8px] font-mono text-slate-500">ID: 884-291-X4</span>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-cyber-cyan rounded-tl-lg opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-cyber-pink rounded-br-lg opacity-40"></div>

          {/* Vertical Hex Stream */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 flex flex-col gap-1 text-[6px] font-mono text-cyber-cyan/30 select-none pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div key={i}>0x{Math.floor(Math.random() * 0xfff).toString(16).toUpperCase()}</div>
            ))}
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 flex flex-col gap-1 text-[6px] font-mono text-cyber-pink/30 select-none pointer-events-none items-end">
            {[...Array(12)].map((_, i) => (
              <div key={i}>0x{Math.floor(Math.random() * 0xfff).toString(16).toUpperCase()}</div>
            ))}
          </div>
        </motion.div>

        {/* Download CV Button */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-6 w-full flex justify-center">
          <a
            href="/EzzElddin AbdAllah Front End Engineer CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm px-8 py-4 border border-cyber-cyan text-cyber-cyan font-display font-bold text-base sm:text-lg tracking-widest cyber-clip-button hover:bg-cyber-cyan/10 transition-colors flex items-center justify-center gap-3 relative overflow-hidden group whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2"><Download size={20} />DOWNLOAD_CV</span>
            <div className="absolute inset-0 bg-cyber-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-20"></div>
          </a>
        </motion.div>
      </Rnd>
    </div>
  );
};

export default IDCard;
