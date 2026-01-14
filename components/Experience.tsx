import DecryptText from "@/components/DecryptText";
import { EXPERIENCE } from "@/constants";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-cyber-black relative border-t border-cyber-dim"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end gap-2 md:gap-4 mb-16 border-b border-cyber-gray pb-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-2 glitch-text uppercase">
            <DecryptText text="SYSTEM_LOGS" />
          </h2>
          <span className="text-cyber-pink font-mono text-xs sm:text-sm mb-1 sm:mb-2">
            /root/experience
          </span>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 p-6 border border-white/5 bg-cyber-gray/20 hover:border-cyber-cyan/50 transition-all duration-300"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-pink opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Date Column */}
              <div className="md:col-span-3 font-mono text-cyber-cyan/80 text-sm tracking-tighter border-b md:border-b-0 md:border-r border-cyber-dim pb-4 md:pb-0 md:pr-4 flex flex-col justify-between">
                <span>[{job.period}]</span>
                <span
                  className={`text-xs mt-2 ${
                    job.period.includes("Present")
                      ? "text-cyber-green animate-pulse"
                      : "text-slate-500"
                  }`}
                >
                  STATUS:{" "}
                  {job.period.includes("Present") ? "IN_PROGRESS" : "COMPLETED"}
                </span>
              </div>

              {/* Content Column */}
              <div className="md:col-span-9">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors font-display">
                      <DecryptText speed={10} text={job.role} />
                    </h3>
                    <div className="text-cyber-pink font-bold mt-1">
                      <DecryptText
                        speed={10}
                        text={`@${job.company}`}
                        delay={400}
                      />
                    </div>
                  </div>
                  {job.links && (
                    <div className="flex flex-wrap gap-3">
                      {job.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            track("Experience Link Click", {
                              label: link.label,
                              company: job.company,
                            })
                          }
                          className="text-[10px] font-mono px-2 py-1 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  {job.description.map((desc, i) => {
                    const isSubItem = desc.startsWith("  ");
                    return (
                      <div
                        key={i}
                        className={`flex items-start gap-3 text-slate-400 text-sm ${
                          isSubItem ? "ml-6" : ""
                        }`}
                      >
                        <span className="text-cyber-cyan">
                          {isSubItem ? "•" : ">>"}
                        </span>
                        <p>
                          <DecryptText
                            text={desc.trim()}
                            speed={10}
                            delay={600}
                          />
                        </p>
                      </div>
                    );
                  })}
                </div>

                {job.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {job.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono text-cyber-yellow border border-cyber-yellow/30 bg-cyber-yellow/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
