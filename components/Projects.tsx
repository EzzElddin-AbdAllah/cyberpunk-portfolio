import DecryptText from "@/components/DecryptText";
import { PROJECTS } from "@/constants";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-cyber-black relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyber-cyan/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 flex justify-between items-end border-b border-cyber-gray pb-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-2">
              <DecryptText text="PROJECT_DATABASE" className="glitch-text" />
            </h2>
            <p className="text-cyber-cyan font-mono text-sm">
              Loaded {PROJECTS.length} records...
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#05050a] border border-cyber-gray/50 hover:border-cyber-cyan transition-all duration-500 flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              {/* Image Terminal Visual */}
              <div className="relative h-56 overflow-hidden border-b border-cyber-dim group-hover:border-cyber-cyan/30 transition-colors bg-cyber-black">
                {/* HUD Brackets - Top */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyber-cyan/40 z-20 group-hover:border-cyber-cyan transition-colors"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan/40 z-20 group-hover:border-cyber-cyan transition-colors"></div>
                {/* HUD Brackets - Bottom */}
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyber-cyan/40 z-20 group-hover:border-cyber-cyan transition-colors"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyber-cyan/40 z-20 group-hover:border-cyber-cyan transition-colors"></div>

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                />

                {/* Cyan Tint / Standby Overlay */}
                <div className="absolute inset-0 bg-cyber-cyan/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

                {/* Scanline / CRT Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 bg-[length:100%_3px,2px_100%] opacity-40"></div>

                {/* Animated Scanner Beam */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-cyan/50 shadow-[0_0_15px_#00f0ff] translate-y-[-100%] group-hover:animate-scan z-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Status Tag */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md border border-cyber-cyan/30 text-cyber-cyan text-[9px] px-2 py-0.5 font-mono tracking-widest z-30 flex items-center gap-1.5 uppercase">
                  <span className="w-1 h-1 bg-cyber-cyan animate-pulse rounded-full"></span>
                  Active_Module
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow relative bg-gradient-to-b from-transparent to-cyber-cyan/[0.02]">
                {/* Decorative Side Trace */}
                <div className="absolute top-0 right-0 w-[1px] h-0 group-hover:h-full bg-cyber-cyan/20 transition-all duration-1000"></div>

                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h3 className="text-xl font-display font-black text-white group-hover:text-cyber-cyan transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <div className="h-0.5 w-0 group-hover:w-full bg-cyber-cyan transition-all duration-500 mt-1"></div>
                  </div>
                  <div className="flex gap-4">
                    {project.sourceLink && (
                      <a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          track("Project Source Click", {
                            project: project.title,
                          })
                        }
                        className="text-slate-500 hover:text-white transition-all hover:scale-110"
                        title="View Source"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          track("Project Live Click", {
                            project: project.title,
                          })
                        }
                        className="text-cyber-cyan/50 hover:text-cyber-cyan transition-all hover:scale-110"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="subtitle-text text-sm mb-8 flex-grow leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2.5">
                    {project.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono text-cyber-cyan/60 border border-cyber-cyan/10 bg-cyber-cyan/[0.03] px-2.5 py-1 rounded-sm uppercase tracking-tighter group-hover:border-cyber-cyan/30 group-hover:text-cyber-cyan transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
