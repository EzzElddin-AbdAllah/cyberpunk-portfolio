import { createContext, useCallback, useContext, useRef, useState } from "react";

interface AudioContextType {
  playHover: () => void;
  playClick: () => void;
  playType: () => void;
  playSuccess: () => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
};

const createOscillatorSound = (
  audioCtx: AudioContext,
  frequency: number,
  duration: number,
  type: OscillatorType = "sine",
  volume: number = 0.1
) => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + duration);
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioCtxRef.current;
  }, []);

  const playHover = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (ctx.state === "suspended") ctx.resume();
    createOscillatorSound(ctx, 800, 0.05, "sine", 0.05);
  }, [isMuted, getAudioContext]);

  const playClick = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (ctx.state === "suspended") ctx.resume();
    createOscillatorSound(ctx, 400, 0.08, "square", 0.08);
    setTimeout(() => createOscillatorSound(ctx, 600, 0.05, "sine", 0.05), 30);
  }, [isMuted, getAudioContext]);

  const playType = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (ctx.state === "suspended") ctx.resume();
    const freq = 200 + Math.random() * 100;
    createOscillatorSound(ctx, freq, 0.03, "square", 0.04);
  }, [isMuted, getAudioContext]);

  const playSuccess = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (ctx.state === "suspended") ctx.resume();
    createOscillatorSound(ctx, 523, 0.1, "sine", 0.1);
    setTimeout(() => createOscillatorSound(ctx, 659, 0.1, "sine", 0.1), 100);
    setTimeout(() => createOscillatorSound(ctx, 784, 0.15, "sine", 0.1), 200);
  }, [isMuted, getAudioContext]);

  const toggleMute = useCallback(() => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    
    const ctx = getAudioContext();
    if (ctx.state === "suspended") {
      ctx.resume().then(() => {
        if (!nextMuted) {
          createOscillatorSound(ctx, 600, 0.1, "sine", 0.1);
        }
      });
    } else if (!nextMuted) {
      createOscillatorSound(ctx, 600, 0.1, "sine", 0.1);
    }
  }, [isMuted, getAudioContext]);

  return (
    <AudioContext.Provider value={{ playHover, playClick, playType, playSuccess, isMuted, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
