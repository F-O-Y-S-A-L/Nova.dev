import { motion } from "motion/react";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";

const social = [
  { linkName: "TWITTER", link: "https://x.com/GMFoysal811738" },
  { linkName: "GITHUB", link: "https://github.com/F-O-Y-S-A-L" },
  { linkName: "LINKDIN", link: "https://x.com/GMFoysal811738" },
  { linkName: "INSTAGRAM", link: "https://www.instagram.com/gm4482/" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "An error occurred.");
    }
  };

  return (
    <section id="contact" className="py-32 px-4 bg-accent text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="flex-[1.5]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] mb-4 font-black text-gray-700"
          >
            Inquiry
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-display font-black tracking-[-0.08em] leading-[0.85] uppercase"
          >
            Contact
          </motion.h2>

          <p className="text-3xl sm:text-4xl md:text-6xl font-display font-black leading-[0.85] tracking-tighter mb-12 uppercase">
            Let's build
            <span className="text-stroke"> the next</span> <br />
            <span className="text-black italic">high scale</span> thing.
          </p>

          <div className="flex flex-col gap-10">
            <a
              href="mailto:hello@nova.dev"
              className="text-2xl sm:text-3xl md:text-5xl font-black font-display tracking-tighter hover:text-gray-600 transition-colors uppercase"
            >
              gmalfoysal59@gmail.com
            </a>
            <div className="flex flex-wrap gap-4">
              {social.map((item, i) => (
                <Link
                  key={i}
                  href={`${item.link}`}
                  target="_blank"
                  className="text-[10px] font-black border border-black/10 px-5 py-2 hover:bg-black hover:text-accent transition-all uppercase tracking-widest"
                >
                  {item.linkName}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 w-full bg-black/5 p-6 md:p-12 border border-black/5">
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <div className="flex flex-col">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-transparent border-b border-black/20 py-3 outline-none focus:border-black transition-all font-bold placeholder:text-black/10 text-lg"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="bg-transparent border-b border-black/20 py-3 outline-none focus:border-black transition-all font-bold placeholder:text-black/10 text-lg"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your system architecture..."
                  rows={3}
                  className="bg-transparent border-b border-black/20 py-3 outline-none focus:border-black transition-all font-bold placeholder:text-black/10 text-lg resize-none"
                />
              </div>

              {status === "success" && (
                <p className="text-xs font-bold uppercase tracking-widest text-green-700 animate-pulse">
                  Transmission Received Successfully.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs font-bold uppercase tracking-widest text-red-700">
                  {errorMessage || "Transmission Failed. Source Error."}
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                variant="secondary"
                className="bg-black text-accent py-8 uppercase tracking-[0.3em] font-black text-[10px] hover:bg-zinc-900 border-none transition-all disabled:opacity-50"
              >
                {status === "loading" ? "Executing..." : "Execute Transmission"}
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
