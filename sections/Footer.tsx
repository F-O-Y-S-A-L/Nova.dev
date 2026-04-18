import { motion } from "motion/react";
import { ArrowUp, Github, Linkedin, Twitter, Globe, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialicon = [
    { icon: <Twitter size={18} />, href: "https://x.com/GMFoysal811738" },
    { icon: <Github size={18} />, href: "https://github.com/F-O-Y-S-A-L" },
    { icon: <Linkedin size={18} />, href: "https://x.com/GMFoysal811738" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/gm4482/" },
  ];

  const navigation = ["Projects", "About", "Skills", "Contact"]

  return (
    <footer className="relative bg-black text-white pt-32 pb-12 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-20 border-b border-white/10">
          {/* Brand & Vision */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-none">
              Let's craft your <br />
              <span className="text-accent italic">Digital Edge</span>.
            </h2>
            <p className="max-w-md text-sm opacity-50 leading-relaxed font-medium">
              A bespoke fullstack engineering studio focused on creating
              high-performance, visually stunning, and scalable digital
              solutions for forward-thinking brands.
            </p>
            <div className="flex gap-4">
              {socialicon.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, color: "var(--color-accent)" }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links & Info */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 font-mono">
                Navigation
              </p>
              <ul className="space-y-4">
                {navigation.map((link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 font-mono">
                Location
              </p>
              <div className="space-y-4">
                <p className="text-sm font-bold opacity-60">
                  BASED IN CHOTTOGRAM,
                  <br />
                  BANGLADESH
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-40">
            © 2026 NOVA.DEV // ARCHITECTING THE FUTURE
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-4 group"
          >
            <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
              Back to top
            </span>
            <div className="w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center">
              <ArrowUp size={20} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
