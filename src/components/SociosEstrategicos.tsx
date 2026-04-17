const partners = [
  {
    type: "Comunidades Web3",
    title: "Cripto La Plata & Super Pioneros",
    desc: "Espacios que ya organizan eventos presenciales y necesitan una casa permanente en Buenos Aires.",
  },
  {
    type: "Empresas de la industria",
    title: "Blockchains, protocolos & fintechs",
    desc: "Que quieren visibilidad directa frente al mejor talento tech de la región.",
  },
  {
    type: "Hospitalidad",
    title: "Hoteles & Espacios",
    desc: "Partners para nómadas digitales internacionales que vienen exclusivamente a Buenos Aires a hacer networking.",
  },
];

export default function SociosEstrategicos() {
  return (
    <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,7rem)]">
      <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#00D4AA] mb-5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(0,212,170,0.2)] after:max-w-[80px]">
        08 · Socios estratégicos
      </div>
      <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.015em] text-[#F0EDE8] mb-12">
        No buscamos clientes.<br />Buscamos aliados.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px]">
        {partners.map((p) => (
          <div key={p.title} className="border border-[rgba(200,216,232,0.08)] p-9 rounded-xl transition-all duration-300 hover:border-[rgba(0,212,170,0.25)] hover:bg-[rgba(0,212,170,0.03)]">
            <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#00D4AA] opacity-70 mb-3">{p.type}</div>
            <div className="font-[family-name:var(--font-playfair)] text-[22px] font-normal text-[#F0EDE8] mb-3 leading-[1.2]">{p.title}</div>
            <div className="text-[14px] font-light text-[#C8D8E8] leading-[1.65] opacity-70">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
