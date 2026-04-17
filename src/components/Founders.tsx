const founders = [
  {
    initials: "LC",
    name: "Lucas Cariddi",
    role: "Founder",
    x: "@LucasCariddi",
    xUrl: "https://x.com/LucasCariddi",
    bio: "Años en el ecosistema Blockchain de Argentina sin encontrar un hogar permanente para la comunidad. Eso fue suficiente razón para construir uno desde cero.",
  },
  {
    initials: "BV",
    name: "Bella Vergara",
    role: "Cowork Manager",
    x: "@BelaVergara1",
    xUrl: "https://x.com/BelaVergara1",
    bio: "La persona que hace que el espacio funcione. Operaciones, comunidad y la experiencia de cada miembro, todo pasa por Bella.",
  },
];

export default function Founders() {
  return (
    <section id="nosotros" className="bg-[rgba(200,216,232,0.025)] border-t border-[rgba(200,216,232,0.08)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,7rem)]">
      <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#00D4AA] mb-5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(0,212,170,0.2)] after:max-w-[80px]">
        10 · El equipo
      </div>
      <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.015em] text-[#F0EDE8] mb-3">
        Todo empezó con<br />una pregunta simple.
      </h2>
      <p className="text-[16px] font-light text-[#C8D8E8] leading-[1.75] opacity-75 max-w-[560px] mb-12">
        &ldquo;¿Por qué no hay un lugar fijo en el centro de la ciudad?&rdquo; Y decidieron crearlo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {founders.map((f) => (
          <div key={f.name} className="border border-[rgba(200,216,232,0.1)] rounded-[16px] p-10">
            <div className="w-[80px] h-[80px] rounded-full border-[1.5px] border-[rgba(200,216,232,0.3)] overflow-hidden mb-5 bg-[rgba(0,212,170,0.06)] flex items-center justify-center">
              <span className="font-[family-name:var(--font-playfair)] text-[28px] font-semibold text-[#00D4AA]">{f.initials}</span>
            </div>
            <div className="mb-4">
              <a href={f.xUrl} target="_blank" rel="noopener" className="font-[family-name:var(--font-geist-mono)] text-[12px] text-[#00D4AA] no-underline opacity-80 transition-opacity hover:opacity-100">
                {f.x}
              </a>
            </div>
            <div className="font-[family-name:var(--font-playfair)] text-[28px] font-normal text-[#F0EDE8] mb-1">{f.name}</div>
            <div className="text-[12px] font-medium tracking-[0.14em] uppercase text-[#00D4AA] opacity-70 mb-4">{f.role}</div>
            <p className="text-[14px] font-light text-[#C8D8E8] leading-[1.7] opacity-70">{f.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
