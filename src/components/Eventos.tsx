export default function Eventos() {
  return (
    <section id="eventos" className="bg-[#0b1525] border-t border-[rgba(200,216,232,0.08)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,7rem)] relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute -top-[120px] -right-[80px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,107,107,0.08)_0%,rgba(255,142,83,0.05)_40%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[100px] -left-[60px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,212,170,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="flex items-end justify-between mb-12 flex-wrap gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#00D4AA] mb-5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(0,212,170,0.2)] after:max-w-[80px]">
            07 · Próximos eventos
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.015em] text-[#F0EDE8] mb-3">
            Donde pasa todo.
          </h2>
          <p className="text-[16px] font-light text-[#C8D8E8] leading-[1.75] opacity-75 max-w-[560px]">
            Meetups, hackathones y workshops del ecosistema Web3 e IA. Todos en Cariddi Cowork.
          </p>
        </div>
        <a
          href="https://luma.com/calendar/cal-mw3QjeLFPECeGOT"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium text-[#00D4AA] no-underline tracking-[0.08em] border border-[rgba(0,212,170,0.3)] px-4 py-2 rounded-[8px] transition-all hover:bg-[rgba(0,212,170,0.06)] hover:border-[rgba(0,212,170,0.5)]"
        >
          <span className="w-[18px] h-[18px] rounded-[4px] bg-gradient-to-br from-[#FF6B6B] via-[#FF8E53] to-[#FFC145] inline-flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">L</span>
          Ver todos en Luma →
        </a>
      </div>

      {/* Luma embed placeholder */}
      <div className="relative z-10 rounded-[16px] overflow-hidden border border-[rgba(200,216,232,0.1)] bg-[rgba(200,216,232,0.02)] min-h-[400px]">
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00D4AA] rounded-tl-[4px]" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#FF8E53] rounded-tr-[4px]" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#FF8E53] rounded-bl-[4px]" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00D4AA] rounded-br-[4px]" />

        <div className="flex flex-col items-center justify-center py-16 px-8 text-center gap-5 min-h-[360px]">
          <div className="w-[56px] h-[56px] rounded-[14px] bg-gradient-to-br from-[#FF6B6B] via-[#FF8E53] to-[#FFC145] flex items-center justify-center text-[24px] font-extrabold text-white shadow-[0_8px_24px_rgba(255,107,107,0.25)]">
            L
          </div>
          <div className="font-[family-name:var(--font-playfair)] text-[22px] font-normal text-[#F0EDE8]">
            Calendario de Eventos Cariddi
          </div>
          <p className="text-[14px] font-light text-[#C8D8E8] opacity-65 leading-[1.7] max-w-[420px]">
            Seguinos en Luma para ver todos los próximos eventos, meetups y hackathones del ecosistema Web3 e IA en Buenos Aires.
          </p>
          <a
            href="https://luma.com/calendar/cal-mw3QjeLFPECeGOT"
            target="_blank"
            rel="noopener"
            className="font-[family-name:var(--font-geist-mono)] text-[11px] text-[#00D4AA] bg-[rgba(0,212,170,0.06)] border border-[rgba(0,212,170,0.2)] px-4 py-2 rounded-[8px] tracking-[0.04em] no-underline hover:bg-[rgba(0,212,170,0.12)] transition-colors"
          >
            luma.com/cariddi-cowork
          </a>
        </div>
      </div>
    </section>
  );
}
