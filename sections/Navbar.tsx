import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "PROJECT", href: "#projects" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 pointer-events-none ${scrolled ? "py-4" : "py-8"}`}
    >
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 pointer-events-auto ${scrolled ? "bg-black/40 backdrop-blur-3xl rounded-3xl py-3 px-8 border border-white/15 w-[94%]" : "w-full px-6"}`}
      >
        <motion.a
          href="#"
          className="text-2xl font-display font-black tracking-tighter"
          whileHover={{ scale: 1.05 }}
        >
          NOVA<span className="text-accent">.DEV</span>
        </motion.a>

        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold opacity-50 hover:opacity-100 transition-all tracking-[0.3em] uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 overflow-hidden pointer-events-auto"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium tracking-widest uppercase hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
