import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full my-6 md:my-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-6 font-black text-accent">
            Focused Software Architecture & Implementation
          </p>
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] font-black leading-[0.82] tracking-[-0.07em] mb-10 max-w-[15ch] uppercase">
            Full Stack
            <br />
            <span className="text-stroke-white">Developer</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 mt-4"
        >
          <Link href={"/#projects"}>
            <Button className="h-14 px-8 bg-accent text-black hover:bg-accent hover:scale-105">
              View Work <ArrowUpRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href={"/#contact"}>
            <Button className="h-14 px-8 border border-white/20 text-white hover:border-white/50 hover:scale-105">
              Get in touch
            </Button>
          </Link>
        </motion.div>

        {/* System Status & Manifesto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 pt-6 border-t border-white/10 md:pt-12 md:mt-24"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            {/* Technical Metadata */}
            <div className="flex flex-wrap gap-12 font-mono text-[10px] uppercase tracking-[0.2em] font-black">
              <div className="opacity-40">
                <p className="mb-1 opacity-50">Base Environment</p>
                <p className="text-white text-xs">Production / v1.4.2</p>
              </div>
              <div className="opacity-40">
                <p className="mb-1 opacity-50">System Load</p>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1 bg-white/10 overflow-hidden">
                    <motion.div
                      animate={{ x: [-48, 48] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-full h-full bg-accent"
                    />
                  </div>
                  <span className="text-white text-xs">Optimal</span>
                </div>
              </div>
              <div className="opacity-40">
                <p className="mb-1 opacity-50">Primary Architecture</p>
                <p className="text-white text-xs">Full Stack / Modular</p>
              </div>
            </div>

            {/* Design Manifesto */}
            <div className="md:border-l md:border-white/10 md:pl-6 space-y-2">
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-30 font-mono">
                Manifesto
              </p>
              <p className="text-2xl md:text-3xl font-display font-black leading-none uppercase tracking-tighter">
                Code is <span className="text-accent italic">Poetry</span>.
                <br />
                Design is <span className="text-stroke-white">Strategy</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
