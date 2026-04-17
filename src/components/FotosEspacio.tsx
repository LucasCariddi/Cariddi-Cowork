const slots = [
  { icon: "🏛️", label: "Área principal", main: true },
  { icon: "🤝", label: "Sala de reuniones", main: false },
  { icon: "🌊", label: "Vista al río", main: false },
  { icon: "☕", label: "Área común", main: false },
  { icon: "⚡", label: "Eventos", main: false },
];

export default function FotosEspacio() {
  return (
    <section id="fotos" className="bg-[#0b1525] border-t border-[rgba(200,216,232,0.08)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,7rem)]">
      <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#00D4AA] mb-5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(0,212,170,0.2)] after:max-w-[80px]">
        03 · El espacio
      </div>
      <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.015em] text-[#F0EDE8] mb-3">
        El lugar que estabas buscando.
      </h2>
      <p className="text-[16px] font-light text-[#C8D8E8] leading-[1.75] opacity-75 max-w-[560px] mb-10">
        Microcentro, en el corazón de Buenos Aires.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] grid-rows-[260px_260px] gap-[3px] rounded-[14px] overflow-hidden">
        {slots.map((s, i) => (
          <div
            key={i}
            className={`bg-[rgba(200,216,232,0.04)] border border-[rgba(200,216,232,0.08)] flex flex-col items-center justify-center gap-[10px] cursor-pointer transition-colors hover:bg-[rgba(200,216,232,0.07)] relative overflow-hidden ${
              s.main ? "md:row-span-2 row-span-1" : ""
            }`}
          >
            <div className="text-[28px] opacity-20">{s.icon}</div>
            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#C8D8E8] opacity-30">{s.label}</div>
            <div className="font-[family-name:var(--font-geist-mono)] text-[10px] text-[#00D4AA] opacity-40 mt-1">Fotos próximamente</div>
          </div>
        ))}
      </div>
    </section>
  );
}
