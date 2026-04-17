const stats = [
  { num: "#1", label: "Capital regional del Blockchain en LATAM" },
  { num: "2", label: "Hubs permanentes de Web3 e IA en CABA" },
  { num: "📍", label: "Edificio en el corazón de la ciudad" },
  { num: "🌉", label: "El ambiente de Silicon Valley en Argentina" },
];

const bullets = [
  "Devconnect posicionó a BA como capital regional del Blockchain.",
  "El Distrito IA del GCBA ofrece reducción de Ingresos Brutos y exenciones fiscales únicas en el mundo.",
  "El talento tech argentino es reconocido internacionalmente.",
  "No existe otro hub permanente enfocado en Web3 e IA en el centro de la ciudad.",
  "Nómadas digitales de toda LATAM eligen Buenos Aires para conectar.",
];

export default function ElMomento() {
  return (
    <section id="espacio" className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,7rem)]">
      <div className="grid md:grid-cols-2 gap-0 border-t border-[rgba(200,216,232,0.1)]">
        {/* Left */}
        <div className="md:pr-16 md:border-r border-[rgba(200,216,232,0.1)] pb-12 md:pb-0">
          <SectionLabel>01 · El momento</SectionLabel>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.015em] text-[#F0EDE8] mb-4">
            Buenos Aires tiene una oportunidad histórica.
          </h2>
          <p className="text-[16px] font-light text-[#C8D8E8] leading-[1.75] opacity-75 max-w-[560px]">
            Devconnect 2025 nos puso en el mapa mundial del Blockchain. El talento está. La energía está. Lo que faltaba era un hogar permanente.
          </p>
          <div className="grid grid-cols-2 gap-[2px] mt-12">
            {stats.map((s, i) => (
              <div key={i} className={`bg-[rgba(200,216,232,0.04)] border border-[rgba(200,216,232,0.08)] p-8 ${
                i === 0 ? "rounded-tl-xl" : i === 1 ? "rounded-tr-xl" : i === 2 ? "rounded-bl-xl" : "rounded-br-xl"
              }`}>
                <div className="font-[family-name:var(--font-playfair)] text-[42px] font-semibold text-[#00D4AA] leading-none mb-1">{s.num}</div>
                <div className="text-[13px] font-light text-[#C8D8E8] leading-[1.5] opacity-75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="md:pl-16 pt-12 md:pt-0">
          <SectionLabel>02 · Por qué ahora</SectionLabel>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.015em] text-[#F0EDE8] mb-4">
            El momento es ahora. Y el lugar es Buenos Aires.
          </h2>
          <div className="flex flex-col mt-8">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-4 py-5 border-b border-[rgba(200,216,232,0.08)] last:border-0">
                <span className="font-[family-name:var(--font-geist-mono)] text-[13px] text-[#00D4AA] mt-[2px] flex-shrink-0">→</span>
                <span className="text-[15px] font-light text-[#C8D8E8] leading-[1.6] opacity-85">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#00D4AA] mb-5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(0,212,170,0.2)] after:max-w-[80px]">
      {children}
    </div>
  );
}
