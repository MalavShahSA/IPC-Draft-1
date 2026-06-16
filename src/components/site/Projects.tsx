import { motion } from "motion/react";
import housing from "@/assets/service-housing.jpg";
import projects from "@/assets/service-projects.jpg";
import furniture from "@/assets/service-furniture.jpg";
import energy from "@/assets/service-energy.jpg";

const items = [
  {
    tag: "Modular Housing",
    title: "Swan Lake First Nation",
    location: "Manitoba · 2024",
    desc: "48-unit family housing program delivered in 11 months — replacing aging stock with arctic-rated builds.",
    img: housing,
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    tag: "Energy Innovation",
    title: "Northern Microgrid",
    location: "Nunavut · 2025",
    desc: "Hybrid solar + storage system displacing 320,000 L of diesel annually.",
    img: energy,
    span: "lg:col-span-5",
  },
  {
    tag: "Civic Infrastructure",
    title: "Community Health Centre",
    location: "Treaty 7 · in build",
    desc: "12,000 ft² regional facility designed in consultation with Knowledge Keepers.",
    img: projects,
    span: "lg:col-span-5",
  },
  {
    tag: "Interiors",
    title: "Cultural Pavilion Fit-out",
    location: "Saskatchewan · 2024",
    desc: "Turnkey interior delivered through Indigenous-owned supply chain.",
    img: furniture,
    span: "lg:col-span-12",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-[#0A0A0A] py-32 lg:py-44">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#A9A9A9]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#A9A9A9]">Featured projects</span>
            </div>
            <h2 className="font-display text-white text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-[-0.02em] font-light text-balance max-w-3xl">
              Case studies in <span className="italic">scale</span>, precision, and trust.
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-white text-sm border-b border-white/40 pb-1 hover:border-white transition-colors w-fit">
            Request the full portfolio <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[minmax(260px,28vw)]">
          {items.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-sm bg-[#020B42] ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />

              <div className="relative h-full p-6 lg:p-10 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 glass-panel px-3 py-1.5 rounded-full">
                    {p.tag}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">{p.location}</span>
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-display text-white text-2xl lg:text-4xl font-light tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-white/70 text-sm lg:text-base max-w-md">{p.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-white text-xs uppercase tracking-[0.2em]">
                    Case Study
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}