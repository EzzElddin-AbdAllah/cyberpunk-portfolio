/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Share Tech Mono"', "monospace"],
        display: ["Orbitron", "sans-serif"],
      },
      colors: {
        cyber: {
          black: "#020205",
          dark: "#09090b",
          gray: "#18181b",
          cyan: "#00f0ff",
          pink: "#ff003c",
          yellow: "#fcee0a",
          dim: "rgba(0, 240, 255, 0.1)",
        },
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(transparent 0%, rgba(0, 240, 255, 0.1) 1%, transparent 2%), linear-gradient(90deg, transparent 0%, rgba(0, 240, 255, 0.1) 1%, transparent 2%)",
        "cyber-gradient":
          "linear-gradient(180deg, rgba(2,2,5,0) 0%, rgba(0,240,255,0.05) 100%)",
      },
      animation: {
        glitch: "glitch 1s linear infinite",
        scan: "scan 4s linear infinite",
        "scan-slow": "scan-line 8s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        matrix: "matrix 20s linear infinite",
      },
      keyframes: {
        glitch: {
          "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
          "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
          "62%": { transform: "translate(0,0) skew(5deg)" },
        },
        scan: {
          "0%": { backgroundPosition: "0 -100vh" },
          "100%": { backgroundPosition: "0 100vh" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000px)" },
        },
      },
    },
  },
  plugins: [],
};
