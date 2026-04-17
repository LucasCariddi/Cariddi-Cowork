const reviews = [
  {
    initials: "J",
    name: "JUAMPI",
    meta: "Local Guide · 271 opiniones · 183 fotos",
    time: "Una semana atrás",
    text: "\"La verdad que Cariddi Cowork me cambió totalmente la dinámica de laburo. Lo que más destaco es el clima que se arma: hay una energía muy positiva y la gente que va es súper predispuesta. En cuanto a la productividad, es ideal — el espacio está muy bien puesto, cómodo, te permite concentrarte a fondo. Si buscás un lugar con buenas vibras, buena conexión y gente con ganas de progresar, no lo dudes. ¡Súper recomendado!\"",
    featured: true,
    borderColor: "border-[rgba(0,212,170,0.5)]",
    avatarBg: "bg-[rgba(0,212,170,0.12)] text-[#00D4AA]",
  },
  {
    initials: "H",
    name: "Huilén Canullán",
    meta: "Local Guide · 7 opiniones · 2 fotos",
    time: "Hace 17 horas",
    text: "\"Cariddi Cowork es increíble. Es un gran espacio para trabajar de forma cómoda, y la gente que va es muy profesional y talentosa. El café también es muy bueno. 100% recomendado.\"",
    featured: false,
    borderColor: "border-[rgba(232,137,42,0.5)]",
    avatarBg: "bg-[rgba(232,137,42,0.15)] text-[#E8892A]",
  },
  {
    initials: "C",
    name: "Ciro Villafraz",
    meta: "2 opiniones",
    time: "Hace 5 días",
    text: "\"Ni más entré en Cariddi Cowork y gané 5 hackathones.\"",
    featured: false,
    borderColor: "border-[rgba(200,216,232,0.4)]",
    avatarBg: "bg-[rgba(200,216,232,0.08)] text-[#C8D8E8]",
  },
  {
    initials: "T",
    name: "Tobías Kap",
    meta: "Local Guide · 86 opiniones · 138 fotos",
    time: "Hace 5 días",
    text: "\"Es como un cowork, pero con Cariddi Cowork.\"",
    featured: false,
    borderColor: "border-[rgba(0,212,170,0.4)]",
    avatarBg: "bg-[rgba(0,212,170,0.08)] text-[#00D4AA]",
  },
  {
    initials: "M",
    name: "martinG",
    meta: "4 opiniones",
    time: "Hace 1 minuto",
    text: "\"El wifi anda muy bien, el lugar muy cómodo y la gente amable. 5/5 porque tenía frío y había sábanas.\"",
    featured: false,
    borderColor: "border-[rgba(200,216,232,0.3)]",
    avatarBg: "bg-[rgba(200,216,232,0.05)] text-[#C8D8E8]",
  },
  {
    initials: "MB",
    name: "Matias Boldrini",
    meta: "1 opinión · 1 foto",
    time: "Hace 1 día",
    text: "\"Muy buena experiencia. Dicen que si sos de Mendoza te regalan stickers y merch exclusivo de Cariddi Cowork.\"",
    featured: false,
    borderColor: "border-[rgba(232,137,42,0.4)]",
    avatarBg: "bg-[rgba(232,137,42,0.1)] text-[#E8892A]",
  },
];

export default function Reviews() {
  return (
    <section id="opiniones" className="border-t border-[rgba(200,216,232,0.08)] bg-[#080f1e] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,7rem)]">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#00D4AA] mb-5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(0,212,170,0.2)] after:max-w-[80px]">
            Lo que dice la comunidad
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.015em] text-[#F0EDE8] mb-3">
            12 opiniones · 5.0 ★
          </h2>
          <div className="flex items-center gap-3 mb-1">
            <span className="font-[family-name:var(--font-playfair)] text-[52px] font-semibold text-[#F0EDE8] leading-none">5.0</span>
            <div>
              <div className="text-[#E8892A] text-[22px] tracking-[2px]">★★★★★</div>
              <div className="font-[family-name:var(--font-geist-mono)] text-[13px] text-[#C8D8E8] opacity-50 mt-1">12 reseñas · Google Maps · Cariddi Cowork Buenos Aires</div>
            </div>
          </div>
        </div>
        <a
          href="https://maps.app.goo.gl/bdVK7oUFDUxDAkxQ7"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium text-[#C8D8E8] no-underline tracking-[0.08em] border border-[rgba(200,216,232,0.2)] px-4 py-2 rounded-[8px] opacity-60 transition-all hover:opacity-100 hover:border-[rgba(200,216,232,0.4)]"
        >
          <span className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#EA4335] inline-block flex-shrink-0" />
          Ver en Google Maps →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((r) => (
          <div
            key={r.name}
            className={`bg-[rgba(200,216,232,0.03)] border border-[rgba(200,216,232,0.09)] rounded-[14px] p-6 flex flex-col gap-[0.65rem] transition-all hover:border-[rgba(200,216,232,0.18)] hover:bg-[rgba(200,216,232,0.05)] ${
              r.featured ? "md:col-span-2 !border-[rgba(0,212,170,0.2)] !bg-[rgba(0,212,170,0.03)]" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-[42px] h-[42px] rounded-full flex-shrink-0 flex items-center justify-center font-[family-name:var(--font-playfair)] text-[16px] font-semibold border-2 ${r.borderColor} ${r.avatarBg}`}>
                {r.initials}
              </div>
              <div>
                <div className="text-[14px] font-medium text-[#F0EDE8]">{r.name}</div>
                <div className="font-[family-name:var(--font-geist-mono)] text-[10px] text-[#C8D8E8] opacity-45 mt-[2px]">{r.meta}</div>
              </div>
            </div>
            <div className="text-[#E8892A] text-[13px] tracking-[1px]">★★★★★</div>
            <p className={`font-light text-[#C8D8E8] leading-[1.7] opacity-85 ${r.featured ? "text-[15px]" : "text-[14px]"}`}>{r.text}</p>
            <div className="flex items-center justify-between pt-2 border-t border-[rgba(200,216,232,0.07)] mt-1">
              <span className="font-[family-name:var(--font-geist-mono)] text-[10px] text-[#C8D8E8] opacity-35">{r.time}</span>
              <div className="flex items-center gap-1 text-[10px] text-[#C8D8E8] opacity-35 font-[family-name:var(--font-geist-mono)]">
                <span className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#EA4335] inline-block" />
                Google
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
