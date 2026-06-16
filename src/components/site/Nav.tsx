import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Vision", href: "#vision" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 200], ["rgba(2,11,66,0)", "rgba(2,11,66,0.7)"]);
  const blur = useTransform(scrollY, [0, 200], ["blur(0px)", "blur(20px)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ background: bg, backdropFilter: blur as unknown as string }}
      className="fixed top-0 inset-x-0 z-50 border-b border-white/5"
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logo} alt="Indigenous Procurement Canada" className="h-10 w-auto brightness-0 invert" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors relative group"
            >
              <span>{l.label}</span>
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white hover:bg-white hover:text-[#020B42] transition-all duration-300"
          >
            Start a Project
            <span aria-hidden>→</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden text-white p-2"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-6 bg-white" />
              <span className="block h-px w-6 bg-white" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-white/5 bg-[#020B42]/95 backdrop-blur-xl"
        >
          <div className="px-6 py-6 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-white/80 text-lg font-display"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}