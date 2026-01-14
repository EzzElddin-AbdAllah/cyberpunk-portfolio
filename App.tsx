import { AudioProvider } from "@/components/AudioManager";
import AudioToggle from "@/components/AudioToggle";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import CustomCursor from "@/components/CustomCursor";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Skills from "@/components/Skills";
import SystemMonitor from "@/components/SystemMonitor";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <AudioProvider>
      <div className="bg-dark min-h-screen text-slate-300 relative">
        <CustomCursor />
        <ScrollProgress />
        <SystemMonitor />
        <AudioToggle />
        <Navbar />
        <main className="relative">
          <Hero />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Courses />
        </main>
        <Contact />
      </div>
      <Analytics />
    </AudioProvider>
  );
};

export default App;
