# EzzElddin Abdallah | Cyberpunk Portfolio

A high-performance, immersive cyberpunk-themed portfolio built with React, Framer Motion, and Tailwind CSS. Featuring "hacker" aesthetics, interactive terminals, and synthetic audio interfaces.

**Live Demo:** [cyberpunk-portfolio-ezz.vercel.app](https://cyberpunk-portfolio-ezz.vercel.app)

## 🚀 Key Creative Features

### 1. Interactive Command Terminal
The Hero section features a functional "hacker" terminal with custom command handling, simulated typing, and mechanical sound effects. Try typing `help` to see available commands.

### 2. "Decryption" Text Reveal
Text elements throughout the portfolio animate with a "decryption" effect when scrolled into view, cycling through random characters before revealing the final text.

### 3. Interactive "System Monitor" Widget
A draggable, viewport-pinned widget that tracks:
- **CPU (Mouse Velocity):** Real-time tracking of mouse movement speed.
- **RAM (Scroll Depth):** Tracks how deep you've scrolled into the document.
- **NET (Simulated Ping):** High-fluctuation ping simulation.
- **UPTIME:** Session duration counter.

### 4. Audio Interface (UI SFX)
Synthetic, non-audio-file sound effects generated via Web Audio API:
- **Global Hover Blips:** Feedback on all interactive links and buttons.
- **Global Click Sounds:** Tactile auditory feedback for interactions.
- **Mute Toggle:** Global audio control in the bottom-right corner.

---

## 🛠 Tech Stack

- **Core:** [React 18](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Components:** [React Rnd](https://github.com/bokuweb/react-rnd) (Draggable components)
- **Audio:** Custom Web Audio API Oscillators

---

## 🏃 Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EzzElddin-AbdAllah/cyberpunk-portfolio.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run in development mode:**
   ```bash
   npm run dev
   ```
---