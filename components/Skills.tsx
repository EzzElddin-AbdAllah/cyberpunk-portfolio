import DecryptText from "@/components/DecryptText";
import { SKILLS } from "@/constants";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Search,
  Shield,
  Zap
} from "lucide-react";
import React from "react";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGithubactions,
  SiGoogle,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLighthouse,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const BRAND_ICONS: Record<string, React.ElementType> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "Tailwind CSS": SiTailwindcss,
  "SEO": SiGoogle,
  "Core Web Vitals": SiLighthouse,
  "Zustand": SiReact,
  "React Query": SiReactquery,
  "GraphQL / Apollo": SiGraphql,
  "IndexedDB (Dexie.js)": Database,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "WebSockets": SiSocketdotio,
  "Accessibility (A11y)": Shield,
  "Prisma / TypeORM": SiPrisma,
  "MongoDB": SiMongodb,
  "MySQL": TbBrandMysql,
  "Supabase": SiSupabase,
  "Git / GitHub": SiGithub,
  "Playwright": Search, 
  "Docker": SiDocker,
  "Vite": SiVite,
  "Turborepo": SiTurborepo,
  "Figma": SiFigma,
  "Unit Testing": SiJest,
  "CI/CD": SiGithubactions,
};

const SkillIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "Frontend Core":
      return <Globe size={20} className="text-cyber-cyan" />;
    case "State & Performance":
      return <Zap size={20} className="text-cyber-pink" />;
    case "Backend & Systems":
      return <Database size={20} className="text-cyber-yellow" />;
    case "Engineering Tools":
      return <Cpu size={20} className="text-white" />;
    default:
      return <Zap size={20} />;
  }
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 relative bg-[#020205] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyber-pink/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-cyber-cyan font-mono text-xs tracking-[0.3em]">
              <span className="w-8 h-[1px] bg-cyber-cyan"></span>
              CORE_COMPONENTS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white">
              <DecryptText text="TECH" /><span className="text-cyber-cyan">_</span><DecryptText text="STACK" delay={200} />
            </h2>
          </div>
          <div className="text-right font-mono text-[10px] text-slate-500 max-w-xs">
            <p>SYSTEM_VERSION: 2.0.4</p>
            <p>KERNEL_STATUS: OPTIMIZED</p>
            <p>MODULE_LOAD_STATUS: SUCCESSFUL</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((group, groupIndex) => (
            <div
              key={group.category}
              className="lg:col-span-1 border border-cyber-dim bg-cyber-black/40 backdrop-blur-md relative overflow-hidden group"
            >
              {/* Header */}
              <div className="p-4 border-b border-cyber-dim bg-cyber-gray/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <SkillIcon category={group.category} />
                  <h3 className="text-sm font-display font-bold text-white tracking-widest">
                    {group.category.toUpperCase()}
                  </h3>
                </div>
                <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></div>
              </div>

              {/* Skill List with "Neural Link" appearance */}
              <div className="p-6 relative">
                <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyber-dim via-cyber-cyan/30 to-cyber-dim"></div>

                <div className="space-y-6">
                  {group.skills.map((skill, skillIndex) => {
                    const Icon = BRAND_ICONS[skill] || Code2;
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: groupIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="flex items-center gap-4 group/skill pl-4 relative"
                      >
                        {/* Node point */}
                        <div className="absolute left-[-21px] top-1/2 -translate-y-1/2 w-4 h-[1px] bg-cyber-cyan/50 group-hover/skill:w-6 transition-all"></div>
                        <div className="absolute left-[-23px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-cyber-cyan/50 bg-cyber-black z-10 group-hover/skill:bg-cyber-cyan transition-all"></div>

                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1.5">
                            <div className="flex items-center gap-2.5">
                              <div className="text-cyber-cyan/60 group-hover/skill:text-cyber-cyan transition-colors">
                                <Icon size={16} />
                              </div>
                              <span className="text-sm font-mono text-slate-300 group-hover/skill:text-white transition-colors uppercase tracking-wider">
                                {skill}
                              </span>
                            </div>
                          </div>
                          <div className="h-[2px] w-full bg-cyber-dim/30 overflow-hidden relative">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{
                                duration: 1,
                                delay: skillIndex * 0.1,
                              }}
                              className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-cyan/50 to-transparent group-hover/skill:from-cyber-pink transition-all"
                            ></motion.div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Decorative Scan Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-cyan/20 group-hover:animate-scan pointer-events-none"></div>

              {/* Box Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 flex items-start justify-end p-1 pointer-events-none">
                <div className="w-1.5 h-1.5 border-t border-r border-cyber-cyan/50"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-8 h-8 flex items-end justify-start p-1 pointer-events-none">
                <div className="w-1.5 h-1.5 border-b border-l border-cyber-cyan/50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Global System Stats Overlay */}
        <div className="mt-12 p-6 border border-cyber-pink/20 bg-cyber-pink/5 flex flex-col lg:flex-row justify-around items-center gap-4 backdrop-blur-sm">
          <div className="flex justify-center flex-row items-center w-full gap-3 text-center sm:text-left">
            <div className="text-sm md:text-base font-mono text-cyber-pink tracking-widest font-bold">
              SEO_OPTIMIZATION
            </div>
            <div className="text-2xl font-display font-bold text-white">
              100/100
            </div>
          </div>
          <div className="hidden lg:block w-[1px] h-8 bg-cyber-pink/20 opacity-100"></div>
          <div className="flex justify-center flex-row items-center w-full gap-3 text-center sm:text-left">
            <div className="text-sm md:text-base font-mono text-cyber-cyan tracking-widest font-bold">
              PERFORMANCE_IDX
            </div>
            <div className="text-2xl font-display font-bold text-white">
              99.9%
            </div>
          </div>
          <div className="hidden lg:block w-[1px] h-8 bg-cyber-pink/20 opacity-100"></div>
          <div className="flex justify-center flex-row items-center w-full gap-3 text-center sm:text-left">
            <div className="text-sm md:text-base font-mono text-cyber-yellow tracking-widest font-bold">
              CORE_WEB_VITALS
            </div>
            <div className="text-2xl font-display font-bold text-white">
              OPTIMIZED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
