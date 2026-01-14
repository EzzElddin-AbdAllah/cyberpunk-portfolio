import { useAudio } from "@/components/AudioManager";
import { track } from "@vercel/analytics";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Cpu,
  HardDrive,
  Minimize2,
  Square,
  Wifi,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Rnd } from "react-rnd";

const SystemMonitor = () => {
  const { playClick } = useAudio();
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPosition({ x: 20, y: window.innerHeight - 250 });
  }, []);

  const [cpuUsage, setCpuUsage] = useState(0);
  const [ramUsage, setRamUsage] = useState(0);
  const [ping, setPing] = useState(42);
  const [uptime, setUptime] = useState(0);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const velocityBuffer = useRef<number[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => ({
        x: Math.min(prev.x, window.innerWidth - 220),
        y: Math.min(prev.y, window.innerHeight - 100),
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        const dx = e.clientX - lastMousePos.current.x;
        const dy = e.clientY - lastMousePos.current.y;
        const velocity = Math.sqrt(dx * dx + dy * dy) / dt;
        velocityBuffer.current.push(velocity);
        if (velocityBuffer.current.length > 20) velocityBuffer.current.shift();
      }
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      lastTime.current = now;
    };

    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrollPercent = (window.scrollY / scrollHeight) * 100;
        setRamUsage(Math.min(100, Math.max(0, scrollPercent)));
      }
    };

    const cpuInterval = setInterval(() => {
      if (velocityBuffer.current.length > 0) {
        const avgVelocity =
          velocityBuffer.current.reduce((a, b) => a + b, 0) /
          velocityBuffer.current.length;
        const normalizedCpu = Math.min(100, avgVelocity * 40);
        setCpuUsage((prev) => prev * 0.8 + normalizedCpu * 0.2);
      } else {
        setCpuUsage((prev) => prev * 0.95);
      }
    }, 150);

    const pingInterval = setInterval(() => {
      setPing((prev) => {
        const fluctuation = (Math.random() - 0.5) * 15;
        return Math.max(20, Math.min(120, prev + fluctuation));
      });
    }, 2000);

    const uptimeInterval = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearInterval(cpuInterval);
      clearInterval(pingInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const formatUptime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getStatusColor = (value: number, type: "cpu" | "ping") => {
    if (type === "cpu") {
      if (value < 30) return "text-green-400";
      if (value < 70) return "text-cyber-yellow";
      return "text-red-400";
    }
    if (type === "ping") {
      if (value < 50) return "text-green-400";
      if (value < 90) return "text-cyber-yellow";
      return "text-red-400";
    }
    return "text-cyber-cyan";
  };

  const handleToggleMinimize = () => {
    playClick();
    const newState = !isMinimized;
    setIsMinimized(newState);
    track("System Monitor " + (newState ? "Minimized" : "Maximized"));
  };

  const handleClose = () => {
    playClick();
    setIsVisible(false);
    track("System Monitor Closed");
  };

  const handleOpen = () => {
    playClick();
    setPosition({ x: 20, y: window.innerHeight - 200 });
    setIsVisible(true);
    track("System Monitor Opened");
  };

  if (!mounted) return null;

  if (!isVisible) {
    return createPortal(
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 left-4 z-[90] p-3 bg-cyber-black/90 border border-cyber-cyan/30 hover:border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all backdrop-blur-sm group hidden lg:flex"
        onClick={handleOpen}
        title="Open System Monitor"
      >
        <Activity
          size={16}
          className="text-cyber-cyan group-hover:scale-110 transition-transform"
        />
      </motion.button>,
      document.body
    );
  }

  return createPortal(
    <div className="fixed inset-0 z-[120] pointer-events-none hidden lg:block">
      <Rnd
        key={isVisible ? "open" : "closed"}
        position={position}
        onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
        enableResizing={false}
        dragHandleClassName="monitor-header"
        className="pointer-events-auto"
        bounds="parent"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-cyber-black/95 border border-cyber-cyan/30 rounded-lg overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(0,240,255,0.15)] w-[200px]"
        >
          {/* Header */}
          <div className="monitor-header bg-cyber-gray/80 px-3 py-2 flex justify-between items-center border-b border-cyber-dim cursor-grab active:cursor-grabbing">
            <div className="flex items-center gap-2">
              <Activity size={12} className="text-cyber-cyan" />
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                SYS_MONITOR
              </span>
            </div>
            <div className="flex gap-1.5">
              <button
                onClick={handleToggleMinimize}
                className="hover:text-cyber-cyan text-slate-500 transition-colors p-0.5"
                onMouseDown={(e) => e.stopPropagation()}
              >
                {isMinimized ? <Square size={10} /> : <Minimize2 size={10} />}
              </button>
              <button
                onClick={handleClose}
                className="hover:text-red-400 text-slate-500 transition-colors p-0.5"
                onMouseDown={(e) => e.stopPropagation()}
              >
                <X size={10} />
              </button>
            </div>
          </div>

          {/* Body */}
          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="p-3 space-y-3 font-mono text-[10px]"
              >
                {/* CPU */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Cpu size={10} />
                      <span>CPU</span>
                    </div>
                    <span className={getStatusColor(cpuUsage, "cpu")}>
                      {cpuUsage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-1 bg-cyber-dim/50 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-pink"
                      animate={{ width: `${cpuUsage}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>

                {/* RAM */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <HardDrive size={10} />
                      <span>RAM</span>
                    </div>
                    <span className="text-cyber-cyan">
                      {ramUsage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-1 bg-cyber-dim/50 overflow-hidden">
                    <motion.div
                      className="h-full bg-cyber-cyan"
                      animate={{ width: `${ramUsage}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Ping */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Wifi size={10} />
                    <span>PING</span>
                  </div>
                  <span className={getStatusColor(ping, "ping")}>
                    {ping.toFixed(0)}ms
                  </span>
                </div>

                {/* Uptime */}
                <div className="flex justify-between items-center pt-2 border-t border-cyber-dim/50">
                  <span className="text-slate-500">UPTIME</span>
                  <span className="text-cyber-yellow">
                    {formatUptime(uptime)}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Rnd>
    </div>,
    document.body
  );
};

export default SystemMonitor;
