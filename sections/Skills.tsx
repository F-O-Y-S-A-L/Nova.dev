import { motion } from "motion/react";
import { Zap, Code, Shield, Palette } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "JavaScript", "TailwindCSS", "Next.js", "Nuxt.js"],
      icon: <Palette size={32} strokeWidth={1.5} />,
    },
    {
      title: "Backend",
      skills: ["Express.js", "Nest.js", "MongoDB"],
      icon: <Zap size={32} strokeWidth={1.5} />,
    },
    {
      title: "Languages",
      skills: ["TypeScript"],
      icon: <Code size={32} strokeWidth={1.5} />,
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub"],
      icon: <Shield size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative text-white">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] mb-4 font-black text-accent"
        >
          Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-display font-black tracking-[-0.08em] leading-[0.85] uppercase"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-20 border border-white/5 bg-white/5 overflow-hidden">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="p-8 md:p-14 bg-black group flex flex-col h-full relative"
            >
              <div className="text-accent mb-12 group-hover:scale-110 transition-transform duration-700 origin-left opacity-60 group-hover:opacity-100">
                {category.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-10 font-display uppercase tracking-tighter leading-none">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[9px] md:text-[10px] font-black border border-white/10 px-3 py-1 uppercase tracking-widest bg-white/2 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
