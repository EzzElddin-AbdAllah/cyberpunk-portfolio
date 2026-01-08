import { useAudio } from "@/components/AudioManager";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const AudioToggle = () => {
  const { isMuted, toggleMute, playClick } = useAudio();

  const handleClick = () => {
    playClick();
    toggleMute();
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-[100] p-3 bg-cyber-black/90 border border-cyber-cyan/30 hover:border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all backdrop-blur-sm group"
      title={isMuted ? "Enable Sound Effects" : "Mute Sound Effects"}
    >
      <motion.div
        animate={{ scale: isMuted ? 1 : [1, 1.1, 1] }}
        transition={{ duration: 0.3 }}
      >
        {isMuted ? (
          <VolumeX size={18} className="text-slate-500 group-hover:text-cyber-cyan transition-colors" />
        ) : (
          <Volume2 size={18} className="text-cyber-cyan" />
        )}
      </motion.div>
      
      {/* Sound wave animation when unmuted */}
      {!isMuted && (
        <motion.div
          className="absolute inset-0 border border-cyber-cyan/50 rounded-sm"
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}
    </motion.button>
  );
};

export default AudioToggle;
