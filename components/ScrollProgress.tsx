import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 h-[40vh] w-2 hidden md:flex flex-col items-center justify-between z-50 mix-blend-difference">
      {/* Top Cap */}
      <div className="w-4 h-1 bg-cyber-cyan mb-2"></div>
      
      {/* Main Track */}
      <div className="w-px h-full bg-cyber-dim relative">
        <motion.div
          className="absolute top-0 left-0 w-full bg-cyber-cyan origin-top shadow-[0_0_10px_#00f0ff]"
          style={{ scaleY, height: "100%" }}
        />
      </div>

      {/* Decorative Marks */}
      <div className="absolute right-3 top-0 h-full flex flex-col justify-between py-2 pointer-events-none">
        {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-1">
                 <span className="text-[8px] font-mono text-cyber-cyan/50">0{i*2}</span>
                 <div className="w-2 h-px bg-cyber-cyan/30"></div>
            </div>
        ))}
      </div>

      {/* Bottom Cap */}
      <div className="w-4 h-1 bg-cyber-pink mt-2"></div>
      
      {/* Percentage Text */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-cyber-cyan tracking-widest rotate-90 origin-left translate-y-8">
        SCROLL
      </div>
    </div>
  );
};

export default ScrollProgress;