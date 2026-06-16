import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import housing from "@/assets/service-housing.jpg";
import furniture from "@/assets/service-furniture.jpg";
import energy from "@/assets/service-energy.jpg";

const panels = [
  {
    n: "01",
    title: "Modular Housing",
    sub: "Rapid-build · Arctic-grade",
    body: "Factory-precision homes engineered for Northern climates — delivered in weeks, not years.",
    img: housing,
  },
  {
    n: "02",
    title: "Furniture Solutions",
    sub: "Turnkey interiors",
    body: "Complete fit-outs sourced through Indigenous-owned supply chains. Every detail considered.",
    img: furniture,
  },
  {
    n: "03",
    title: "Energy Innovation",
    sub: "Sovereign power",
    body: "Solar, wind and micro-grid systems that take communities off diesel and onto the future.",
    img: energy,
  },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  
  // Calculate dynamic transform based on the number of panels
  const xOffset = -((panels.length - 1) / panels.length) * 100;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${xOffset}%`]);

  return (
    <section id="services" ref={ref} className="relative bg-[#0A0A0A]" style={{ height: `${panels.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* heading overlay */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 lg:px-12 pt-28 pointer-events-none">
          <div className="max-w-[1600px] mx-auto flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-white/40" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/60">What we deliver</span>
              </div>
              <h2 className="font-display text-white text-3xl lg:text-5xl font-light tracking-tight">
                Three disciplines. <span className="text-[#A9A9A9]">One mandate.</span>
              </h2>
            </div>
            <div className="hidden lg:block text-white/40 text-xs uppercase tracking-[0.25em]">
              Scroll →
            </div>
          </div>
        </div>

        <motion.div style={{ x }} className="flex h-full w-[max-content]" >
          {panels.map((p) => (
            <article key={p.n} className="relative shrink-0 w-screen h-full flex items-center justify-center">
              <div className="absolute inset-0">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />
              </div>
              <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-8 items-end pb-24 lg:pb-32">
                <div className="lg:col-span-2">
                  <div className="font-mono text-white/60 text-sm tabular-nums">{p.n} / 03</div>
                </div>
                <div className="lg:col-span-7">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-4">{p.sub}</div>
                  <h3 className="font-display text-white text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em] font-light text-balance">
                    {p.title}
                  </h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-white/75 text-base lg:text-lg leading-relaxed font-light">{p.body}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-white text-sm border-b border-white/40 pb-1 hover:border-white transition-colors">
                    Inquire <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}