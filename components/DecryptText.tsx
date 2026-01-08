import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface DecryptTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const DecryptText = ({
  text,
  className = "",
  delay = 0,
  speed = 50,
}:DecryptTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayText, setDisplayText] = useState(
    text
      .split("")
      .map((char) => (char === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
      .join("")
  );
  const [isDecrypted, setIsDecrypted] = useState(false);

  useEffect(() => {
    if (!isInView || isDecrypted) return;

    let currentIndex = 0;
    const textArray = text.split("");

    const startDecryption = () => {
      const interval = setInterval(() => {
        if (currentIndex >= textArray.length) {
          clearInterval(interval);
          setDisplayText(text);
          setIsDecrypted(true);
          return;
        }

        setDisplayText((prev) => {
          const chars = prev.split("");
          chars[currentIndex] = textArray[currentIndex];
          for (let i = currentIndex + 1; i < chars.length; i++) {
            if (textArray[i] !== " ") {
              chars[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
          return chars.join("");
        });

        currentIndex++;
      }, speed);

      return interval;
    };

    const timeout = setTimeout(() => {
      startDecryption();
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [isInView, text, delay, speed, isDecrypted]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.span>
  );
};

export default DecryptText;
