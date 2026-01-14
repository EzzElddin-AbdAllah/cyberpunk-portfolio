import posthog from "posthog-js";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Minimize2,
  Square,
  Terminal as TerminalIcon,
  X,
} from "lucide-react";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { useAudio } from "../AudioManager";

type LogEntry = {
  type: "input" | "output" | "system";
  content: ReactNode;
  id: number;
};

const Terminal = () => {
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: "system", content: "Initializing Neural Link...", id: 1 },
    { type: "system", content: "Establishing Secure Connection...", id: 2 },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { playType, playClick } = useAudio();

  const [terminalMode, setTerminalMode] = useState<"normal" | "minimized">(
    "normal"
  );
  const [terminalResetKey, setTerminalResetKey] = useState(0);
  const [terminalPosition, setTerminalPosition] = useState({ x: 0, y: 0 });
  const [terminalSize, setTerminalSize] = useState({
    width: "100%",
    height: "360",
  });

  const resetTerminal = () => {
    setTerminalMode("normal");
    setTerminalPosition({ x: 0, y: 0 });
    setTerminalSize({ width: "100%", height: "360" });
    setTerminalResetKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      const scrollContainer =
        terminalEndRef.current.closest(".overflow-y-auto");
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: (scrollContainer as HTMLElement).scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [logs]);

  const hasBooted = useRef(false);

  useEffect(() => {
    if (hasBooted.current) return;
    hasBooted.current = true;

    const bootSequence = async () => {
      await new Promise((r) => setTimeout(r, 800));
      setLogs((prev) => [
        ...prev,
        { type: "system", content: "Access Granted. Welcome, User.", id: 3 },
      ]);

      await new Promise((r) => setTimeout(r, 500));
      await simulateTyping("help");
    };
    bootSequence();
  }, []);

  const simulateTyping = async (text: string) => {
    setIsTyping(true);
    setInputVal("");

    for (let i = 0; i < text.length; i++) {
      setInputVal((prev) => prev + text[i]);
      playType();
      await new Promise((r) => setTimeout(r, 50 + Math.random() * 50));
    }

    await new Promise((r) => setTimeout(r, 300));
    handleCommand(text);
    setInputVal("");
    setIsTyping(false);
    if (window.innerWidth >= 1024) {
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  };

  const handleCommand = useCallback((cmdText: string) => {
    const cmd = cmdText.trim().toLowerCase();
    const newLogInput: LogEntry = {
      type: "input",
      content: cmdText,
      id: Date.now(),
    };

    let response: LogEntry | null = null;

    switch (cmd) {
      case "help":
        response = {
          type: "output",
          id: Date.now() + 1,
          content: (
            <div className="grid grid-cols-1 gap-1 text-cyber-cyan/80">
              <div>
                <span className="text-white">whoami</span> - System identity
              </div>
              <div>
                <span className="text-white">edu</span> - Academic records
              </div>
              <div>
                <span className="text-white">work</span> - Professional logs
              </div>
              <div>
                <span className="text-white">skills</span> - Tech modules
              </div>
              <div>
                <span className="text-white">proj</span> - Project database
              </div>
              <div>
                <span className="text-white">certs</span> - Certifications
              </div>
              <div>
                <span className="text-white">msg</span> - Open comms
              </div>
              <div>
                <span className="text-white">clear</span> - Reset terminal
              </div>
            </div>
          ),
        };
        break;
      case "me":
      case "whoami":
        response = {
          type: "output",
          id: Date.now() + 1,
          content: (
            <div className="space-y-1 my-2">
              <div>
                <span className="text-cyber-pink">{">>"}</span> Identity:{" "}
                <span className="text-white font-bold tracking-wider">
                  EzzElddin Abdallah
                </span>
              </div>
              <div>
                <span className="text-cyber-pink">{">>"}</span> Role:{" "}
                <span className="text-cyber-cyan">Front-End Engineer</span>
              </div>
              <div>
                <span className="text-cyber-pink">{">>"}</span> Objective:
                Architecting accessible, high-performance web interfaces.
              </div>
              <div>
                <span className="text-cyber-pink">{">>"}</span> Status:{" "}
                <span className="text-green-400 animate-pulse">ONLINE</span>
              </div>
            </div>
          ),
        };
        break;
      case "edu":
      case "education":
        response = {
          type: "output",
          id: Date.now() + 1,
          content: (
            <span className="text-cyber-yellow">
              {">>"} Jumping to academic records...
            </span>
          ),
        };
        setTimeout(
          () =>
            document
              .getElementById("education")
              ?.scrollIntoView({ behavior: "smooth" }),
          800
        );
        break;
      case "work":
      case "experience":
        response = {
          type: "output",
          id: Date.now() + 1,
          content: (
            <span className="text-cyber-yellow">
              {">>"} Opening professional logs...
            </span>
          ),
        };
        setTimeout(
          () =>
            document
              .getElementById("experience")
              ?.scrollIntoView({ behavior: "smooth" }),
          800
        );
        break;
      case "certs":
      case "courses":
        response = {
          type: "output",
          id: Date.now() + 1,
          content: (
            <span className="text-cyber-yellow">
              {">>"} Scanning certifications...
            </span>
          ),
        };
        setTimeout(
          () =>
            document
              .getElementById("courses")
              ?.scrollIntoView({ behavior: "smooth" }),
          800
        );
        break;
      case "proj":
      case "projects":
        response = {
          type: "output",
          id: Date.now() + 1,
          content: (
            <span className="text-cyber-yellow">
              {">>"} Accessing project database...
            </span>
          ),
        };
        setTimeout(
          () =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" }),
          800
        );
        break;
      case "skills":
        response = {
          type: "output",
          id: Date.now() + 1,
          content: (
            <span className="text-cyber-yellow">
              {">>"} Analyzing tech stack...
            </span>
          ),
        };
        setTimeout(
          () =>
            document
              .getElementById("skills")
              ?.scrollIntoView({ behavior: "smooth" }),
          800
        );
        break;
      case "msg":
      case "contact":
        response = {
          type: "output",
          id: Date.now() + 1,
          content: (
            <span className="text-cyber-yellow">
              {">>"} Initializing secure channel...
            </span>
          ),
        };
        setTimeout(
          () =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" }),
          800
        );
        break;
      case "clear":
        setLogs([]);
        return;
      case "":
        break;
      default:
        response = {
          type: "output",
          id: Date.now() + 1,
          content: (
            <span className="text-red-500">
              Command not found: {cmd}. Type 'help' for available commands.
            </span>
          ),
        };
    }

    setLogs((prev) =>
      response ? [...prev, newLogInput, response] : [...prev, newLogInput]
    );
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isTyping) {
      handleCommand(inputVal);
      setInputVal("");
    }
  };

  return (
    <>
      <div className="relative w-full max-w-2xl mb-8 min-h-[350px]">
        <Rnd
          key={terminalResetKey}
          disableDragging={false}
          enableResizing={terminalMode === "normal"}
          position={terminalPosition}
          size={
            terminalMode === "minimized"
              ? { width: 320, height: 42 }
              : terminalSize
          }
          onDragStop={(e, d) => setTerminalPosition({ x: d.x, y: d.y })}
          onResizeStop={(e, direction, ref, delta, position) => {
            if (terminalMode === "normal") {
              setTerminalSize({
                width: ref.style.width,
                height: ref.style.height,
              });
              setTerminalPosition(position);
            }
          }}
          dragHandleClassName="terminal-header"
          className="!z-[100]"
          minWidth={300}
          minHeight={terminalMode === "minimized" ? 42 : 200}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-cyber-black/95 border border-cyber-cyan/30 rounded-lg overflow-hidden backdrop-blur-xl shadow-[0_0_60px_rgba(0,240,255,0.2)] h-full flex flex-col relative"
          >
            {/* Header */}
            <div className="terminal-header bg-cyber-gray/80 px-4 py-2 flex justify-between items-center border-b border-cyber-dim select-none cursor-grab active:cursor-grabbing shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <TerminalIcon size={12} />
                <span>root@ezz:~</span>
                {terminalMode !== "normal" && (
                  <span className="text-cyber-cyan text-[10px] uppercase ml-2 bg-cyber-cyan/10 px-2 py-0.5 rounded">
                    {terminalMode}
                  </span>
                )}
              </div>
              <div className="flex gap-2 text-slate-500">
                {terminalMode === "normal" ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setTerminalMode("minimized");
                      posthog.capture("Terminal Control Click", {
                        action: "Minimize",
                      });
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="hover:text-cyber-yellow transition-colors p-1 relative z-20"
                    title="Minimize"
                  >
                    <Minimize2 size={12} />
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setTerminalMode("normal");
                      posthog.capture("Terminal Control Click", {
                        action: "Restore",
                      });
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="hover:text-cyber-cyan transition-colors p-1 relative z-20"
                    title="Restore"
                  >
                    <Square size={10} />
                  </button>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetTerminal();
                    posthog.capture("Terminal Control Click", {
                      action: "Reset",
                    });
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  className="hover:text-red-400 transition-colors p-1 relative z-20"
                  title="Reset Position"
                >
                  <X size={12} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div
              className={`flex-1 overflow-hidden transition-opacity duration-300 ${
                terminalMode === "minimized"
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              <div
                className="p-5 h-full overflow-y-auto font-mono text-sm leading-relaxed scrollbar-thin scrollbar-thumb-cyber-cyan/30 scrollbar-track-transparent"
                onClick={() => inputRef.current?.focus()}
              >
                <div className="space-y-2">
                  {logs.map((log) => (
                    <div
                      key={log.id}
                      className={`${
                        log.type === "system" ? "text-slate-500 italic" : ""
                      }`}
                    >
                      {log.type === "input" && (
                        <span className="text-cyber-pink mr-2">
                          root@ezz:~$
                        </span>
                      )}
                      <span
                        className={log.type === "input" ? "text-white" : ""}
                      >
                        {log.content}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <span className="text-cyber-pink mr-2">root@ezz:~$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputVal}
                      onChange={(e) => {
                        setInputVal(e.target.value);
                        playType();
                      }}
                      onKeyDown={handleKeyDown}
                      disabled={isTyping}
                      className="bg-transparent border-none outline-none text-white w-full cursor-text caret-cyber-cyan"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </div>
                  <div ref={terminalEndRef} />
                </div>
              </div>
            </div>

            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"></div>
          </motion.div>
        </Rnd>
      </div>

      {/* Quick Scripts / Hints */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-6 mb-10"
      >
        <span className="text-xs font-mono text-slate-500 flex items-center gap-2 tracking-wider">
          QUICK_SCRIPTS <ChevronRight size={12} />
        </span>
        {["whoami", "edu", "work", "skills", "proj", "certs", "msg"].map(
          (cmd) => (
            <button
              key={cmd}
              onClick={() => {
                simulateTyping(cmd);
                posthog.capture("Quick Script Execution", { command: cmd });
              }}
              disabled={isTyping}
              className="text-xs font-mono px-3 py-1.5 border border-cyber-dim text-cyber-cyan bg-cyber-dim/20 hover:bg-cyber-cyan hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ./{cmd}.sh
            </button>
          )
        )}
      </motion.div>
    </>
  );
};

export default Terminal;
