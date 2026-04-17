"use client";

import { useState } from "react";

export default function CTAWaitlist() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = () => {
    if (email) setSuccess(true);
  };

  return (
    <section id="waitlist" className="bg-[#0b1525] text-center px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,10vw,9rem)] border-t border-[rgba(200,216,232,0.08)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,212,170,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <div className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#00D4AA] mb-6">
          Waitlist abierta
        </div>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(36px,5vw,64px)] font-light leading-[1.08] tracking-[-0.02em] text-[#F0EDE8] mb-5">
          Sé de los primeros en<br />
          <em className="italic text-[#00D4AA]">construir desde adentro.</em>
        </h2>
        <p className="text-[16px] font-light text-[#C8D8E8] opacity-70 mb-10 leading-[1.7] max-w-[480px] mx-auto">
          Los primeros 50 miembros del waitlist acceden a precio fundador y beneficios exclusivos.
        </p>

        <div className="max-w-[480px] mx-auto">
          {!success ? (
            <div className="flex gap-[10px] flex-wrap justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                autoComplete="email"
                className="flex-1 min-w-[200px] bg-[rgba(200,216,232,0.06)] border border-[rgba(200,216,232,0.2)] rounded-[10px] px-[18px] py-[14px] font-[family-name:var(--font-geist-sans)] text-[14px] text-[#F0EDE8] outline-none placeholder:text-[#C8D8E8] placeholder:opacity-50 focus:border-[rgba(0,212,170,0.5)] transition-colors"
              />
              <button
                onClick={submit}
                className="bg-[#E8892A] text-[#080f1e] font-semibold text-[14px] px-6 py-[14px] rounded-[10px] border-none cursor-pointer tracking-[0.04em] transition-all whitespace-nowrap hover:bg-[#d97e25] hover:-translate-y-px"
              >
                Anotarme →
              </button>
            </div>
          ) : (
            <div className="bg-[rgba(0,212,170,0.08)] border border-[rgba(0,212,170,0.25)] rounded-[10px] px-5 py-4 text-[#00D4AA] text-[14px] font-medium">
              ¡Estás dentro. Te contactamos pronto. 🤙
            </div>
          )}
          <p className="font-[family-name:var(--font-geist-mono)] text-[12px] text-[#C8D8E8] opacity-40 mt-10">
            Sin spam · Solo te escribimos cuando abrimos las puertas · Podés salirte cuando quieras
          </p>
        </div>
      </div>
    </section>
  );
}
