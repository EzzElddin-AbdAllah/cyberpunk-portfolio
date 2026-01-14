import DecryptText from "@/components/DecryptText";
import IDCard from "@/components/Hero/IDCard";
import Terminal from "@/components/Hero/Terminal";
import { track } from "@vercel/analytics";
import { motion, useMotionValue } from "framer-motion";
import { ChevronRight, Cpu, Wifi } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 w-full h-full bg-cyber-black perspective-1000 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] origin-top h-[200%] animate-scan"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex w-full flex-wrap items-center justify-between mb-8 md:mb-12 text-cyber-cyan/80 font-mono text-[10px] md:text-xs tracking-[0.2em] border-b border-cyber-dim pb-4 lg:w-fit lg:gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyber-cyan animate-pulse shadow-[0_0_10px_#00f0ff]"></span>
              SYSTEM: ONLINE
            </div>
            <div className="h-4 w-px bg-cyber-cyan/30"></div>
            <div>LOC: CAIRO, EGYPT</div>
            <div className="h-4 w-px bg-cyber-cyan/30"></div>
            <div className="flex items-center gap-2">
              <Wifi size={12} />
              <span>UPLINK: STABLE</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-16 items-center">
            {/* Left Column: Interactive Terminal */}
            <div className="order-2 lg:order-1 lg:col-span-7">
              <motion.h1
                initial={{
                  opacity: 0,
                  clipPath: "polygon(0 0, 0 0, 0 0, 0 0)",
                }}
                animate={{
                  opacity: 1,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="hidden lg:flex text-4xl sm:text-6xl md:text-7xl font-display font-black leading-none text-white mb-8 tracking-tighter flex-col items-start gap-2"
              >
                <span className="glitch-text inline-block text-nowrap">
                  <DecryptText text="FRONT-END" />
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-pink animate-pulse">
                  <DecryptText text="ENGINEER" delay={400} />
                </span>
              </motion.h1>

              {/* TERMINAL COMPONENT */}
              <Terminal />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <a
                  href="#projects"
                  onClick={() => track("Hero Access Projects Click")}
                  className="w-full sm:w-fit px-8 py-4 bg-cyber-cyan text-black font-display font-bold text-lg tracking-widest cyber-clip-button hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-3 group"
                >
                  <Cpu size={20} />
                  ACCESS_PROJECTS
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            </div>

            {/* Holographic ID Card */}
            <IDCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
