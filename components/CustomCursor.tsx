import { useAudio } from "@/components/AudioManager";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Fingerprint, Grab, Hand, MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const { playHover, playClick } = useAudio();
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const lastHoveredElement = useRef<HTMLElement | null>(null);
  const [shockwaves, setShockwaves] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const hudX = useTransform(springX, (v) => v + 20);
  const hudY = useTransform(springY, (v) => v + 20);
  const labelX = useTransform(mouseX, (v) => v + 20);
  const labelY = useTransform(mouseY, (v) => v - 30);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });

      if (document.body.getAttribute("data-clicking") === "true") {
        setIsDragging(true);
        document.body.setAttribute("data-dragging", "true");
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveContainer = target.closest(
        "a, button, [role='button'], .cursor-pointer"
      ) as HTMLElement;
      const isInteractive = !!interactiveContainer;

      const draggableContainer = target.closest(
        ".terminal-header, .cursor-grab, [draggable='true']"
      );
      const isDraggableArea = !!draggableContainer;

      const textContainer = target.closest(
        "input, textarea, [contenteditable='true'], .cursor-text"
      );
      const isText = !!textContainer;

      setIsHovering(isInteractive);
      setIsDraggable(isDraggableArea);
      setIsTextHover(isText);

      if (isInteractive && lastHoveredElement.current !== interactiveContainer) {
        playHover();
      }
      lastHoveredElement.current = interactiveContainer;

      if (isInteractive) {
        const label =
          interactiveContainer.innerText?.trim().split("\n")[0].slice(0, 20) ||
          interactiveContainer.getAttribute("aria-label") ||
          interactiveContainer.getAttribute("title") ||
          "LINK_DETECTED";
        setHoverLabel(label.toUpperCase());
      } else if (isDraggableArea) {
        setHoverLabel("DRAG_AVAILABLE");
      } else {
        setHoverLabel(null);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      document.body.setAttribute("data-clicking", "true");

      // Play global click sound if over interactive element
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], .cursor-pointer")) {
        playClick();
      }

      const id = Date.now();
      setShockwaves((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setShockwaves((prev) => prev.filter((sw) => sw.id !== id));
      }, 600);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      setIsDragging(false);
      document.body.removeAttribute("data-clicking");
      document.body.removeAttribute("data-dragging");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY, playHover, playClick]);

  return (
    <>
      {/* Shockwaves */}
      <AnimatePresence>
        {shockwaves.map((sw) => (
          <motion.div
            key={sw.id}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 4 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-8 h-8 border border-cyber-cyan rounded-full pointer-events-none z-[9999]"
            style={{
              x: sw.x,
              y: sw.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Coordinate HUD */}
      {!isTextHover && (
        <motion.div
          className="fixed pointer-events-none z-[10001] font-mono text-[8px] text-cyber-cyan/40 whitespace-nowrap flex flex-col gap-0.5"
          style={{
            x: hudX,
            y: hudY,
          }}
        >
          <div className="flex items-center gap-1 text-cyber-cyan/60">
            <span className="opacity-50">X:</span> {coords.x}
          </div>
          <div className="flex items-center gap-1 text-cyber-cyan/60">
            <span className="opacity-50">Y:</span> {coords.y}
          </div>
        </motion.div>
      )}

      {/* Proximity Label */}
      <AnimatePresence>
        {hoverLabel && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: coords.x + 20,
              y: coords.y - 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: coords.x + 20,
              y: coords.y - 30,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`fixed pointer-events-none z-[10001] border backdrop-blur-sm px-2 py-0.5 rounded-sm ${
              isDraggable
                ? "bg-cyber-yellow/20 border-cyber-yellow/50"
                : "bg-cyber-pink/20 border-cyber-pink/50"
            }`}
            style={{
              x: labelX,
              y: labelY,
            }}
          >
            <span
              className={`font-mono text-[10px] uppercase font-black tracking-tighter ${
                isDraggable ? "text-cyber-yellow" : "text-cyber-pink"
              }`}
            >
              [{hoverLabel}]
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Morphing Pointer Icon */}
      {!isTextHover && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10002]"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.div
            animate={{
              color: isClicking
                ? "#fcee0a"
                : isDragging
                ? "#fcee0a"
                : isDraggable
                ? "#fcee0a"
                : isHovering
                ? "#ff003c"
                : "#00f0ff",
              scale: isClicking ? 0.9 : 1,
              rotate: isDragging ? 15 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {isDragging ? (
              <Grab size={18} />
            ) : isHovering ? (
              <Fingerprint size={20} className="text-cyber-pink" />
            ) : isDraggable ? (
              <Hand size={20} className="text-cyber-yellow" />
            ) : (
              <MousePointer2
                size={18}
                fill="currentColor"
                className="drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
              />
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Outer Multi-Ring HUD */}
      <motion.div
        className="fixed top-0 left-0 border rounded-full pointer-events-none z-[9999] mix-blend-exclusion flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isTextHover ? 2 : isHovering || isDraggable ? 48 : 32,
          height: isTextHover ? 24 : isHovering || isDraggable ? 48 : 32,
          borderColor: isTextHover
            ? "#00f0ff"
            : isDragging || isDraggable
            ? "#fcee0a88"
            : isHovering
            ? "#ff003c88"
            : "#00f0ff88",
          backgroundColor: isTextHover ? "#00f0ff" : "transparent",
          borderRadius: isTextHover ? 0 : "50%",
          scale: isClicking ? 0.7 : 1,
          rotate: isHovering || isDraggable ? 90 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Inner Hexagonal Frame */}
        {!isTextHover && (isHovering || isDraggable) && (
          <div className="absolute inset-0 border border-cyber-cyan/30 animate-spin-slow rounded-[30%]" />
        )}
      </motion.div>

      {/* Global Click Glitch */}
      <AnimatePresence>
        {!isTextHover && isClicking && (
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-cyber-cyan/5 pointer-events-none z-[9998] mix-blend-screen"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;
