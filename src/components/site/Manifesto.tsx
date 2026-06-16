import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const lines = [
  "Communities deserve more than buildings.",
  "They deserve opportunity.",
  "They deserve a future.",
];

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section id="vision" ref={ref} className="relative bg-[#020B42] py-40 lg:py-56 overflow-hidden">
      {/* soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-[#071475] opacity-40 blur-[160px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 space-y-32 lg:space-y-48">
        {lines.map((line, i) => {
          const start = i / lines.length;
          const end = (i + 1) / lines.length;
          return <Line key={line} text={line} start={start} end={end} progress={scrollYProgress} index={i} />;
        })}
      </div>
    </section>
  );
}

function Line({
  text,
  start,
  end,
  progress,
  index,
}: {
  text: string;
  start: number;
  end: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
}) {
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.05, end + 0.05], [0.15, 1, 1, 0.25]);
  const y = useTransform(progress, [start, end], [40, -40]);

  return (
    <motion.div style={{ opacity, y }} className="flex items-start gap-6 lg:gap-10">
      <div className="pt-4 lg:pt-8 text-white/40 font-mono text-xs lg:text-sm tabular-nums">
        0{index + 1}
      </div>
      <h2 className="font-display text-white text-balance text-[clamp(2rem,6.5vw,6rem)] leading-[1.02] tracking-[-0.02em] font-light max-w-[18ch]">
        {text}
      </h2>
    </motion.div>
  );
}