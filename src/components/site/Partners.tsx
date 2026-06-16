const partners = [
  "Government of Canada", "CMHC", "Indigenous Services Canada", "Province of Manitoba",
  "Treaty 6", "Treaty 7", "AMIK", "Dyness", "Inuit Tapiriit Kanatami", "Métis Nation",
  "Assembly of First Nations", "Crown-Indigenous Relations",
];

export function Partners() {
  return (
    <section className="relative bg-white py-20 border-y border-[#020B42]/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-10 flex items-center gap-3">
        <span className="h-px w-10 bg-[#020B42]" />
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#020B42]/70">
          Trusted by governments, nations, and institutional partners
        </span>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="shrink-0 px-10 lg:px-16 flex items-center justify-center"
            >
              <span className="font-display text-[#020B42]/70 hover:text-[#020B42] transition-colors text-xl lg:text-3xl whitespace-nowrap font-light tracking-tight">
                {p}
              </span>
            </div>
          ))}
        </div>
        {/* edge fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}