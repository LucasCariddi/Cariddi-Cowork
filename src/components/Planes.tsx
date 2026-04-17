"use client";

const plans = [
  {
    name: "Day Pass",
    price: "10",
    period: "/día",
    badge: null,
    featured: false,
    features: [
      "Acceso por el día completo",
      "Área de trabajo compartida",
      "WiFi de alta velocidad",
      "Café & amenities incluidos",
      "Descuentos en eventos",
    ],
    btnLabel: "Reservar →",
    btnStyle: "outline",
  },
  {
    name: "Pase Mensual",
    price: "30",
    period: "/mes",
    badge: "Más popular",
    featured: true,
    features: [
      "Acceso libre todo el mes",
      "Área de trabajo compartida",
      "WiFi de alta velocidad",
      "Acceso a todos los eventos",
      "Comunidad y networking activo",
      "Beneficios Distrito IA GCBA",
    ],
    btnLabel: "Quiero este plan →",
    btnStyle: "filled",
  },
  {
    name: "Pase Anual",
    price: "300",
    period: "/año",
    badge: "🎁 Caja Misteriosa incluida",
    badgeAmber: true,
    featured: false,
    saving: "= 2 meses gratis vs mensual",
    features: [
      "Acceso libre los 365 días",
      "Sala de reuniones prioritaria",
      "Acceso VIP a todos los eventos",
      "Caja misteriosa",
      "Comunidad y networking activo",
      "Beneficios Distrito IA GCBA",
    ],
    btnLabel: "Unirme →",
    btnStyle: "outline",
  },
];

export default function Planes() {
  return (
    <section id="planes" className="bg-[#F0EDE8] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,7rem)]">
      <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#080f1e] opacity-50 mb-5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(8,15,30,0.15)] after:max-w-[80px]">
        05 · Planes
      </div>
      <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.015em] text-[#080f1e] mb-3">
        Hay un lugar para vos, para los locos, los inadaptados que no encajan. Para los Builders.
      </h2>
      <p className="text-[16px] font-light text-[#080f1e] opacity-60 leading-[1.75] max-w-[560px] mb-12">
        Elegí el acceso que mejor se adapta a tu ritmo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px]">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`p-10 rounded-[14px] relative flex flex-col transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
              p.featured
                ? "bg-[#080f1e] border border-[#00D4AA] md:scale-[1.02] z-10"
                : "bg-white border border-[rgba(8,15,30,0.1)]"
            }`}
          >
            {p.badge && (
              <div className={`inline-block text-[10px] font-semibold tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-5 ${
                p.badgeAmber
                  ? "bg-[#E8892A] text-[#080f1e]"
                  : "bg-[#00D4AA] text-[#080f1e]"
              }`}>
                {p.badge}
              </div>
            )}

            <div className={`font-[family-name:var(--font-playfair)] text-[28px] font-normal mb-1 ${p.featured ? "text-[#F0EDE8]" : "text-[#080f1e]"}`}>
              {p.name}
            </div>

            <div className="flex items-baseline gap-1 mb-1">
              <span className={`font-[family-name:var(--font-geist-mono)] text-[13px] ${p.featured ? "text-[#C8D8E8] opacity-60" : "text-[#080f1e] opacity-40"}`}>USD</span>
              <span className={`font-[family-name:var(--font-playfair)] text-[44px] font-semibold leading-none ${p.featured ? "text-[#00D4AA]" : "text-[#080f1e]"}`}>{p.price}</span>
              <span className={`text-[13px] ${p.featured ? "text-[#C8D8E8] opacity-50" : "text-[#080f1e] opacity-40"}`}>{p.period}</span>
            </div>

            {p.saving && <div className="text-[12px] text-[#00D4AA] font-medium mb-1">{p.saving}</div>}

            <div className={`h-px my-6 ${p.featured ? "bg-[rgba(200,216,232,0.15)]" : "bg-[rgba(8,15,30,0.1)]"}`} />

            <ul className="list-none flex flex-col gap-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className={`flex items-start gap-[10px] text-[14px] font-light leading-[1.5] before:content-['✓'] before:text-[12px] before:text-[#00D4AA] before:font-bold before:mt-[2px] before:flex-shrink-0 ${
                  p.featured ? "text-[#C8D8E8] opacity-85" : "text-[#080f1e] opacity-75"
                }`}>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
              className={`w-full text-center font-[family-name:var(--font-geist-sans)] text-[14px] font-semibold py-[13px] rounded-[9px] tracking-[0.04em] transition-all cursor-pointer border-none mt-auto ${
                p.btnStyle === "filled"
                  ? "bg-[#E8892A] text-[#080f1e] hover:bg-[#d97e25]"
                  : p.featured
                  ? "border-[1.5px] border-[rgba(200,216,232,0.3)] text-[#F0EDE8] bg-transparent hover:bg-[rgba(200,216,232,0.1)]"
                  : "border-[1.5px] border-[rgba(8,15,30,0.2)] text-[#080f1e] bg-transparent hover:bg-[#080f1e] hover:text-[#F0EDE8] hover:border-[#080f1e]"
              }`}
            >
              {p.btnLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
