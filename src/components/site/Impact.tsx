import { motion, useInView, animate, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  { value: 1240, suffix: "+", label: "Homes delivered", sub: "modular & site-built across 7 provinces" },
  { value: 86, suffix: "", label: "Communities served", sub: "from Treaty 6 to Inuit Nunangat" },
  { value: 312, suffix: "M", prefix: "$", label: "Capital deployed", sub: "infrastructure invested back into nations" },
  { value: 2400, suffix: "+", label: "Jobs created", sub: "with local hiring as the default" },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section id="impact" className="relative bg-[#020B42] py-32 lg:py-48 overflow-hidden">
      {/* floating orbs */}
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-[#071475] opacity-50 blur-[140px]" />
      <div className="absolute -bottom-40 -right-20 w-[50rem] h-[50rem] rounded-full bg-[#071475] opacity-40 blur-[180px]" />

      {/* particles */}
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/40 animate-float"
          style={{
            top: `${(i * 53) % 100}%`,
            left: `${(i * 79) % 100}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}
        />
      ))}

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20 lg:mb-28">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#A9A9A9]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#A9A9A9]">Impact in numbers</span>
          </div>
          <h2 className="font-display text-white text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-[-0.02em] font-light text-balance">
            A decade of building — measured in <span className="italic">communities</span>, not contracts.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#020B42] p-8 lg:p-10 group hover:bg-[#071475]/40 transition-colors duration-500"
            >
              <div className="font-display text-white text-[clamp(3rem,6vw,5.5rem)] leading-none font-light">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-6 text-white text-base font-medium">{s.label}</div>
              <div className="mt-2 text-white/55 text-sm leading-relaxed">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}