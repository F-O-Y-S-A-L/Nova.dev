import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Crave.",
      category: "E-commerce Platform",
      tagline:
        "Next-generation shopping experience with seamless blockchain integration.",
      image:
        "https://images.unsplash.com/photo-1758640927926-9f0b1cda712e?q=80&w=1170&auto=format&fit=crop",
      siteLink: "https://ecoshop-swart.vercel.app/",
    },
    {
      title: "Lumina Blog",
      category: "Blog Platform",
      tagline: "Modern, SEO-friendly blog for Tech, Life & Design insights.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
      siteLink: "https://luminablogs.vercel.app/",
    },
    {
      title: "Quotespace",
      category: "Quotes Archive",
      tagline:
        "A stylish community platform to share and like inspirational quotes.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
      siteLink: "https://quotespace-sigma.vercel.app/",
    },
  ];
  return (
    <section
      id="projects"
      className="py-16 px-4 md:py-32 md:px-6 bg-black relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
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
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-[-0.08em] leading-[0.85] uppercase"
          >
            Projects <br className="hidden md:block" /> Showcase
          </motion.h2>
        </div>

        <div className="space-y-14 md:space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-24 group`}
            >
              {/* Image Container */}
              <div className="w-full md:w-3/5 aspect-16/10 overflow-hidden bg-zinc-900 relative">
                <motion.div className="absolute inset-0 bg-accent/20 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover md:grayscale md:opacity-40 group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:scale-[1.02] transition-all duration-1000 ease-out"
                />
              </div>
              {/* Content Container */}
              <div className="w-full md:w-2/5 md:space-y-8">
                <div className="space-y-4">
                  <p className="font-mono text-[10px] md:text-xs text-accent font-black uppercase tracking-[0.4em] md:mb-4">
                    {project.category}
                  </p>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tighter leading-[0.85] md:mb-6">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-lg md:text-xl font-medium tracking-tight leading-snug">
                    {project.tagline}
                  </p>
                  <Link href={project.siteLink} target="_blank">
                    <motion.button
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 group/btn cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-accent group-hover/btn:bg-accent group-hover/btn:text-black transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 group-hover/btn:opacity-100 transition-opacity">
                        Explore Case
                      </span>
                    </motion.button>
                  </Link>
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
