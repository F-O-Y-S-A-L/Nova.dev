import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Aether OS",
      category: "System Interface",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
      color: "bg-emerald-500",
    },
    {
      title: "Vortex", 
      category: "Motion Design",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      color: "bg-blue-500",
    },
    {
      title: "Solstice",
      category: "E-commerce",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      color: "bg-orange-500",
      long: true
    },
  ];

  return (
    <section id="projects" className="py-14 px-6 bg-black md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] mb-4 font-black text-accent"
        >
          Featured Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-display font-black tracking-[-0.08em] leading-[0.85] uppercase"
        >
          Projects Showcase
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-20 border border-white/5 bg-white/5 overflow-hidden">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden bg-black cursor-pointer transition-all ${project.long ? "md:col-span-2 aspect-video" : "aspect-4/5 md:aspect-square"}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-70 md:opacity-50 md:group-hover:scale-105 md:group-hover:opacity-60 transition-all duration-1000 md:grayscale md:group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-14 pt-44 flex flex-col justify-end bg-linear-to-t from-black via-black/40 to-transparent">
                <div className="flex justify-between items-end border-t border-white/10 pt-10 group-hover:border-[var(--color-accent)/40] transition-all duration-700">
                  <div className="transform group-hover:translate-x-2 transition-transform duration-700">
                    <p className="font-mono text-[9px] sm:text-[10px] opacity-40 mb-3 uppercase tracking-[0.4em] text-accent font-black italic">
                      {project.category} / 2024
                    </p>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[0.8] tracking-[-0.05em] uppercase transition-all duration-700 group-hover:text-accent">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-accent group-hover:translate-x-3 transition-all duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-100">
                    <ArrowUpRight className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 stroke-[2.5px]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
