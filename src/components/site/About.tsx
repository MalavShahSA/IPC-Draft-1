import { motion } from "motion/react";
import editorial from "@/assets/about-editorial.jpg";

const timeline = [
  { y: "2014", t: "Founded", d: "Established to deliver Indigenous-led infrastructure across Western Canada." },
  { y: "2018", t: "Modular Division", d: "Opened the first arctic-rated modular line. Built 200+ homes in 18 months." },
  { y: "2021", t: "Energy & Procurement", d: "Launched sovereign energy and turnkey procurement programs." },
  { y: "2024", t: "National Mandate", d: "Active across 7 provinces. Mandated partner on federal housing programs." },
  { y: "2026", t: "Future Cities", d: "Planning master-planned Indigenous-led communities for the next century." },
];

export function About() {
  return (
    <section id="about" className="relative bg-white py-32 lg:py-48 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img src={editorial} alt="Architectural detail" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 text-[10px] uppercase tracking-[0.25em] text-[#0A0A0A]/50">
              Indigenous Procurement Corp — Investor Brief 2026
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#020B42]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#020B42]/70">About IPC</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-display text-[#020B42] text-[clamp(2.5rem,5.5vw,5.25rem)] leading-[1] tracking-[-0.025em] font-light text-balance"
          >
            We are the infrastructure arm of a generation rebuilding what was promised.
          </motion.h2>

          <div className="mt-10 space-y-6 text-[#0A0A0A]/80 text-base lg:text-lg leading-relaxed font-light max-w-2xl">
            <p>
              IPC is an Indigenous-owned development corporation operating at the
              intersection of housing, energy, procurement, and human capital. We close
              the gap between federal commitments and on-the-ground delivery.
            </p>
            <p>
              Our partners include First Nations, Inuit, and Métis governments, federal
              and provincial agencies, and Canada's most demanding institutional clients.
            </p>
          </div>

          <div className="mt-16 lg:mt-20 border-t border-[#020B42]/15">
            {timeline.map((row, i) => (
              <motion.div
                key={row.y}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="grid grid-cols-[80px_1fr] lg:grid-cols-[120px_180px_1fr] gap-4 lg:gap-8 py-6 lg:py-8 border-b border-[#020B42]/15 group hover:bg-[#020B42]/[0.02] transition-colors"
              >
                <div className="font-display text-[#020B42] text-2xl lg:text-3xl font-light tabular-nums">{row.y}</div>
                <div className="text-[#020B42] font-medium text-sm lg:text-base uppercase tracking-[0.15em] col-span-2 lg:col-span-1">
                  {row.t}
                </div>
                <div className="text-[#0A0A0A]/65 text-sm lg:text-base leading-relaxed col-span-2 lg:col-span-1">
                  {row.d}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}