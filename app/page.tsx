"use client";

import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { Skills } from "@/sections/Skills";
import { useScroll, motion } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-black text-white font-sans selection:bg-accent selection:text-black overflow-x-hidden">
      <motion.div
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="fixed top-0 left-0 h-1 bg-accent w-full origin-left z-50"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
