"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Dónde está ubicado exactamente el espacio?",
    a: "Estamos en Microcentro, en el corazón de Buenos Aires. A pasos del subte y con múltiples líneas de colectivo. La dirección exacta se comparte al confirmar la membresía.",
  },
  {
    q: "¿Qué incluye el acceso 24/7?",
    a: "Los pases mensual y anual incluyen acceso al cowork en cualquier horario del día, de lunes a viernes. WiFi de alta velocidad, café, área de trabajo compartida, casilleros, acceso a eventos gratuitos y exclusivos.",
  },
  {
    q: "¿Hay salas de reuniones disponibles?",
    a: "Sí. Todos los miembros tienen acceso a sala de reuniones.",
  },
  {
    q: "¿Puedo recibir correspondencia o paquetes?",
    a: "Sí, los miembros con pase mensual o anual pueden usar la dirección de Cariddi Cowork para correspondencia y recibir paquetes. Ideal para freelancers y startups que necesitan una dirección profesional en Buenos Aires.",
  },
  {
    q: "¿Qué es la Caja Misteriosa del Pase Anual?",
    a: "¡Es una sorpresa! Cada miembro que pague el pase anual recibirá la caja misteriosa al final del año con sorpresas increíbles. No te arruinamos el momento 🎁",
  },
  {
    q: "¿Qué beneficios del Distrito IA del GCBA aplican?",
    a: "Al operar desde Cariddi Cowork podés acceder a reducción de Ingresos Brutos y otras exenciones fiscales del Distrito IA del Gobierno de la Ciudad de Buenos Aires. Nuestro equipo te orienta en los trámites. Es uno de los beneficios fiscales más interesantes para empresas tech de la Argentina y toda Latinoamérica.",
  },
  {
    q: "¿Puedo probar el Cowork antes de suscribirme?",
    a: "¡Sí! Ofrecemos un día de prueba gratuito para que vengas a conocer el espacio, trabajar y ser parte de la comunidad por un día sin ningún compromiso. Es la mejor manera de ver si Cariddi Cowork es el lugar que estás buscando. Anotate en el waitlist y coordinamos tu día de prueba.",
  },
  {
    q: "¿Solo para proyectos de Web3 e IA?",
    a: "Nuestro Cowork está especializado en Blockchain e Inteligencia Artificial, queremos que empresas de todo el mundo den sus primeros pasos con nosotros. Si querés aprender, incorporar tecnología o conocer a tu próximo socio, ¡este es el lugar que estás buscando!",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[rgba(200,216,232,0.015)] border-t border-[rgba(200,216,232,0.08)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,7rem)]">
      <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#00D4AA] mb-5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(0,212,170,0.2)] after:max-w-[80px]">
        09 · FAQ
      </div>
      <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.015em] text-[#F0EDE8] mb-12">
        Preguntas frecuentes.
      </h2>

      <div className="max-w-[760px]">
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-[rgba(200,216,232,0.08)]">
            <button
              className="w-full flex items-center justify-between py-6 cursor-pointer text-left bg-transparent border-none"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <span className="text-[16px] font-normal text-[#F0EDE8] leading-[1.4] flex-1 pr-6">{f.q}</span>
              <span className={`w-6 h-6 rounded-full border border-[rgba(200,216,232,0.2)] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIdx === i ? "border-[rgba(0,212,170,0.4)] rotate-45" : ""}`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#00D4AA" strokeWidth="2">
                  <line x1="6" y1="1" x2="6" y2="11" />
                  <line x1="1" y1="6" x2="11" y2="6" />
                </svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIdx === i ? "max-h-[300px] pb-6" : "max-h-0"}`}>
              <p className="text-[15px] font-light text-[#C8D8E8] leading-[1.75] opacity-75">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
