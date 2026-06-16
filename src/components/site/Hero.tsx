import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero-landscape.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={ref} id="top" className="relative h-[120vh] overflow-hidden bg-[#020B42]">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Canadian wilderness"
          width={1920}
          height={1280}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020B42]/70 via-[#020B42]/40 to-[#020B42]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B42]/60 via-transparent to-[#020B42]/30" />
      </motion.div>

      {/* floating grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(to right, rgba(169,169,169,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(169,169,169,0.15) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }} />
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-screen flex flex-col justify-end px-6 lg:px-12 pb-20 lg:pb-28 max-w-[1600px] mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-white/50" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">
            Indigenous Procurement Corp · est. Canada
          </span>
        </motion.div>

        <h1 className="font-display text-white text-balance text-[clamp(2.75rem,8vw,8.5rem)] leading-[0.95] tracking-[-0.02em] font-light max-w-[20ch]">
          {["Building the future", "of Indigenous communities."].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.6 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 grid lg:grid-cols-[1.2fr_auto] gap-8 lg:gap-16 items-end"
        >
          <p className="text-white/70 text-base lg:text-lg max-w-xl leading-relaxed font-light">
            Delivering modular housing, procurement solutions, energy innovation, and
            community development across Canada — from the prairie to the Arctic Circle.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#vision"
              className="group inline-flex items-center gap-3 rounded-full bg-white text-[#020B42] px-7 py-4 text-sm font-medium hover:bg-[#A9A9A9] transition-all duration-300"
            >
              Explore our vision
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 text-white px-7 py-4 text-sm hover:bg-white/10 transition-all duration-300"
            >
              View projects
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}