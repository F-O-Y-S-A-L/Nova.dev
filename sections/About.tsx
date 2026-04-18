import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-14 px-6 bg-black overflow-hidden md:py-32"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] mb-4 font-black text-accent"
        >
          Who I Am
        </motion.p> 
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-display font-black tracking-[-0.08em] leading-[0.85] uppercase"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mt-16 md:mt-24">
          <motion.div
            style={{ opacity, scale }}
            className="w-full lg:flex-1 max-w-sm mx-auto lg:max-w-none"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-zinc-900 border border-white/5 group">
              <Image
                src="/faisal.jpeg"
                alt="Profile"
                loading="eager"
                referrerPolicy="no-referrer"
                width={500}
                height={500}
                className="w-full h-full object-cover md:grayscale transition-all duration-1000 md:group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-8 md:border-12 border-black/50 pointer-events-none" />
              <div className="absolute top-4 left-4 w-8 md:w-12 h-8 md:h-12 border-t-2 border-l-2 border-accent" />
              <div className="absolute bottom-4 right-4 w-8 md:w-12 h-8 md:h-12 border-b-2 border-r-2 border-accent" />
            </div>
          </motion.div>

          <div className="flex-[1.4] space-y-10 md:space-y-16">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-display font-black leading-[0.9] uppercase tracking-tighter"
            >
              Architecting <span className="text-accent">Robust</span> digital
              systems that <span className="text-stroke">scale</span> with
              precision.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-px bg-accent" />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    Mission
                  </p>
                </div>
                <p className="text-sm opacity-50 leading-relaxed font-medium">
                  I specialize in bridging the gap between high-end design and
                  robust engineering. Every pixel and line of code I write is
                  optimized for performance, accessibility, and user delight.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-px bg-accent" />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    Approach
                  </p>
                </div>
                <p className="text-sm opacity-50 leading-relaxed font-medium">
                  My workflow is deeply collaborative and iterative. I leverage
                  modern frameworks like Next.js and Nuxt.js to build fast,
                  SEO-friendly applications that scale with your business.
                </p>
              </motion.div>
            </div>

            <motion.div
              style={{ opacity }}
              className="pt-10 border-t border-white/10"
            >
              <div className="flex flex-wrap gap-8 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-black tracking-widest uppercase">
                  Trusted By:
                </span>
                <span className="text-xl font-display font-black tracking-widest italic">
                  AETHER.
                </span>
                <span className="text-xl font-display font-black tracking-widest italic">
                  VERVE.
                </span>
                <span className="text-xl font-display font-black tracking-widest italic">
                  SOLSTICE.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
