import { COURSES } from "@/constants";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

const Courses = () => {
  return (
    <section
      id="courses"
      className="py-20 bg-cyber-black relative border-t border-cyber-dim"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end gap-2 md:gap-4 mb-16 border-b border-cyber-gray pb-4"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white glitch-text uppercase"
            data-text="CERT_PROTOCOL"
          >
            CERT_PROTOCOL
          </h2>
          <span className="text-cyber-pink font-mono text-xs sm:text-sm mb-1 sm:mb-2">
            /certifications
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {COURSES.map((course, index) => {
            const Content = (
              <>
                <div className="p-2 bg-cyber-pink/10 rounded border border-cyber-pink/20 shrink-0">
                  <BookOpen size={16} className="text-cyber-pink" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-slate-300 text-sm font-bold tracking-wide uppercase truncate">
                      {course.name}
                    </h4>
                    {course.url && (
                      <ExternalLink
                        size={12}
                        className="text-cyber-pink/50 shrink-0"
                      />
                    )}
                  </div>
                  {course.provider && (
                    <p className="text-slate-500 text-[10px] font-mono mt-0.5 uppercase tracking-wider">
                      Issued by: {course.provider}
                    </p>
                  )}
                </div>
              </>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {course.url ? (
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-cyber-pink/5 hover:border-cyber-pink/30 transition-all duration-300 group cursor-pointer h-full"
                  >
                    {Content}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02] h-full">
                    {Content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
