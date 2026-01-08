import DecryptText from "@/components/DecryptText";
import { EDUCATION } from "@/constants";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education= () => {
  return (
    <section
      id="education"
      className="py-20 bg-cyber-black relative border-t border-cyber-dim"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end gap-2 md:gap-4 mb-16 border-b border-cyber-gray pb-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-2 glitch-text uppercase">
            <DecryptText text="ACADEMIC_CORE" />
          </h2>
          <span className="text-cyber-cyan font-mono text-xs sm:text-sm mb-1 sm:mb-2">
            /academic_records
          </span>
        </motion.div>

        <div className="space-y-10 ml-2">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-6 border-l-2 border-cyber-cyan/30"
            >
              <div className="absolute -left-[5.5px] top-0 w-2.5 h-2.5 bg-cyber-cyan"></div>
              <h3 className="text-xl font-bold text-white font-display mb-1">
                <DecryptText speed={10} text={edu.school} />
              </h3>
              <p className="text-cyber-cyan font-mono text-sm mb-2 opacity-80">
                <DecryptText text={edu.degree} speed={10} delay={500} />
              </p>
              <div className="flex items-center gap-2 text-slate-500 font-mono text-sm uppercase">
                <GraduationCap size={14} />
                <span>Term: {edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
