const cards = [
  {
    num: "01",
    title: "Freelancers & Nómadas Digitales",
    desc: "Que trabajan en proyectos Web3 e IA y necesitan un espacio profesional.",
  },
  {
    num: "02",
    title: "Startups en etapa temprana",
    desc: "Que quieren construir rodeados de talento y acceso a inversores del ecosistema.",
  },
  {
    num: "03",
    title: "Comunidades Web3",
    desc: "Que necesitan un lugar para sus eventos, meetups y hackathones.",
  },
  {
    num: "04",
    title: "Empresas de la industria",
    desc: "Que buscan conectar con el ecosistema local de manera directa.",
  },
];

const tags = ["DeFi", "ZK", "RWA", "IA Generativa", "Gaming On-Chain", "NFTs", "DAOs", "Layer 2", "DePIN", "Stablecoins"];

export default function Comunidad() {
  return (
    <>
      {/* Community types */}
      <section id="comunidad" className="bg-[rgba(200,216,232,0.025)] border-t border-b border-[rgba(200,216,232,0.08)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,7rem)]">
        <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#00D4AA] mb-5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(0,212,170,0.2)] after:max-w-[80px]">
          04 · Nuestra comunidad
        </div>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.015em] text-[#F0EDE8] mb-3">
          Construimos para los que<br />construyen el futuro.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5px] mt-12">
          {cards.map((c) => (
            <div
              key={c.num}
              className="bg-[rgba(8,15,30,0.8)] border border-[rgba(200,216,232,0.08)] p-10 relative overflow-hidden transition-colors duration-300 group hover:border-[rgba(0,212,170,0.2)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-[#00D4AA] before:scale-x-0 before:transition-transform before:duration-300 before:origin-left hover:before:scale-x-100"
            >
              <div className="font-[family-name:var(--font-geist-mono)] text-[11px] text-[#00D4AA] opacity-50 mb-6 tracking-[0.1em]">{c.num}</div>
              <div className="font-[family-name:var(--font-playfair)] text-[22px] font-normal text-[#F0EDE8] leading-[1.2] mb-4">{c.title}</div>
              <div className="text-[14px] font-light text-[#C8D8E8] leading-[1.7] opacity-70">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Community stats */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,7rem)] border-t border-[rgba(200,216,232,0.08)] bg-[linear-gradient(135deg,rgba(0,212,170,0.04)_0%,transparent_60%)]">
        <div className="mb-14">
          <div className="font-[family-name:var(--font-playfair)] text-[clamp(80px,14vw,160px)] font-light leading-[0.9] tracking-[-0.04em] text-[#00D4AA] mb-1">
            +100
          </div>
          <div className="font-[family-name:var(--font-playfair)] text-[clamp(24px,3.5vw,42px)] font-light text-[#F0EDE8] tracking-[-0.01em] mb-5">
            builders en la comunidad
          </div>
          <p className="text-[16px] font-light text-[#C8D8E8] leading-[1.75] opacity-75 max-w-[580px]">
            Devs, founders, inversores y nómadas digitales que se conectan, colaboran y construyen el futuro de Web3 e IA en Buenos Aires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px] mb-8">
          <div className="border border-[rgba(200,216,232,0.08)] rounded-xl p-8 bg-[rgba(200,216,232,0.025)] transition-colors hover:border-[rgba(0,212,170,0.2)]">
            <div className="font-[family-name:var(--font-playfair)] text-[36px] font-semibold text-[#E8892A] leading-none mb-1">+80</div>
            <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C8D8E8] opacity-60 mb-3">Eventos al año</div>
            <div className="text-[14px] font-light text-[#C8D8E8] leading-[1.6] opacity-60">
              Meetups, workshops, hackathones y charlas técnicas del ecosistema.
            </div>
          </div>
          <div className="border-l-2 border-[rgba(0,212,170,0.15)] rounded-r-xl border-r border-t border-b border-[rgba(200,216,232,0.08)] p-8 bg-[rgba(200,216,232,0.025)] flex flex-col justify-center">
            <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C8D8E8] opacity-60 mb-2">Lo que dicen</div>
            <a href="#opiniones" className="font-[family-name:var(--font-geist-mono)] text-[12px] text-[#00D4AA] no-underline opacity-75 tracking-[0.06em] transition-opacity hover:opacity-100">
              ver todas →
            </a>
          </div>
          <div className="border border-[rgba(200,216,232,0.08)] rounded-xl p-8 bg-[rgba(200,216,232,0.025)] transition-colors hover:border-[rgba(0,212,170,0.2)]">
            <div className="font-[family-name:var(--font-playfair)] text-[36px] font-semibold text-[#E8892A] leading-none mb-1">LATAM</div>
            <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C8D8E8] opacity-60 mb-3">Alcance regional</div>
            <div className="text-[14px] font-light text-[#C8D8E8] leading-[1.6] opacity-60">
              Nómadas y proyectos de toda América Latina eligiendo Buenos Aires como base.
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="font-[family-name:var(--font-geist-mono)] text-[11px] text-[#00D4AA] border border-[rgba(0,212,170,0.25)] px-[14px] py-[5px] rounded-full tracking-[0.06em] transition-colors hover:bg-[rgba(0,212,170,0.06)] cursor-default">
              {t}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
