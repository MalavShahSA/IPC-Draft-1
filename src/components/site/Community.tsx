import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import community from "@/assets/community-story.png";

export function Community() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section ref={ref} className="relative bg-white py-32 lg:py-48 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#020B42]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#020B42]/70">Community Story</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#020B42] text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.02em] font-light text-balance"
          >
            Designed <span className="italic">with</span> Nations, not for them.
          </motion.h2>
          <div className="mt-8 space-y-5 text-[#0A0A0A]/75 text-base lg:text-lg leading-relaxed font-light max-w-xl">
            <p>
              Every project starts at the table — with elders, leaders, and families.
              We listen first. We build what's needed. We hand back the keys, and the
              skills.
            </p>
            <p>
              The result is infrastructure that reflects the place it stands on, owned
              by the people it serves, and engineered to outlast a generation.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            {[
              { k: "Indigenous-owned", v: "100%" },
              { k: "Local hire target", v: "≥ 70%" },
              { k: "Carbon vs. legacy", v: "−40%" },
              { k: "Build time", v: "1/3" },
            ].map((s) => (
              <div key={s.k} className="border-t border-[#020B42]/15 pt-4">
                <div className="font-display text-[#020B42] text-2xl lg:text-3xl font-light">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/60">{s.k}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-sm">
            <motion.img
              src={community}
              alt="Community gathering"
              loading="lazy"
              style={{ y: imgY, scale: imgScale }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B42]/30 via-transparent to-transparent" />
          </div>
          {/* floating quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="absolute -bottom-8 -left-4 lg:-left-12 max-w-md glass-panel-light p-7 rounded-sm shadow-2xl"
          >
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#020B42]/60 mb-3">Chief, Treaty 6 Nation</div>
            <p className="font-display text-[#020B42] text-lg lg:text-xl leading-snug italic">
              "They didn't just build us houses. They built us a future our kids can come home to."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}