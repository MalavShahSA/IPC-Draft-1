import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="relative bg-[#020B42] text-white overflow-hidden">
      {/* layered light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] rounded-full bg-[#071475] opacity-50 blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-[#071475] opacity-30 blur-[140px]" />
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(to right, rgba(169,169,169,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(169,169,169,0.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }} />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 lg:pt-44 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-white/50" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/60">Let's begin</span>
          </div>
          <h2 className="font-display text-white text-balance text-[clamp(2.5rem,9vw,9rem)] leading-[0.95] tracking-[-0.025em] font-light max-w-[20ch]">
            Let's build Canada's next generation of communities.
          </h2>
        </motion.div>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@ipcgroup.ca"
                className="group inline-flex items-center gap-3 rounded-full bg-white text-[#020B42] px-8 py-5 text-base font-medium hover:bg-[#A9A9A9] transition-all duration-300"
              >
                Start a conversation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 text-white px-8 py-5 text-base hover:bg-white/10 transition-all duration-300"
              >
                View capability deck
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 text-sm">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-3">Head Office</div>
              <div className="text-white/90 leading-relaxed">
                110-200 Alpine Way<br/>
                Swan Lake First Nation<br/>
                Headingley, MB R4H 0E7
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-3">Direct</div>
              <div className="text-white/90 leading-relaxed">
                204-306-0554<br/>
                info@ipcgroup.ca<br/>
                Mon–Fri · 08:00–18:00
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/50">
          <div className="flex items-center gap-4">
            <div className="relative h-7 w-7">
              <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-white to-[#A9A9A9]" />
              <div className="absolute inset-[2px] rounded-[2px] bg-[#020B42] grid place-items-center">
                <span className="font-display text-white text-xs leading-none">i</span>
              </div>
            </div>
            <span>© 2026 Indigenous Procurement Corp · Made on Treaty 1 territory</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </section>
  );
}