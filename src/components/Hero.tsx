"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = () => {
    if (email) setSuccess(true);
  };

  return (
    <section id="inicio" className="min-h-screen grid md:grid-cols-2 items-center gap-[clamp(2rem,5vw,5rem)] px-[clamp(1.5rem,6vw,5rem)] pt-[120px] pb-[80px] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,rgba(0,212,170,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_10%_80%,rgba(232,137,42,0.04)_0%,transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,216,232,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(200,216,232,0.04) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 animate-fadeUp">
        <div className="inline-flex items-center gap-[10px] text-[11px] font-medium tracking-[0.2em] uppercase text-[#00D4AA] mb-7 before:content-[''] before:block before:w-7 before:h-px before:bg-[#00D4AA]">
          Buenos Aires · Microcentro
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(40px,5.5vw,80px)] font-light leading-[1.02] tracking-[-0.025em] text-[#F0EDE8] mb-5">
          El hub de<br />
          <em className="italic text-[#00D4AA]">Blockchain e IA</em><br />
          que estabas<br />
          esperando.
        </h1>

        <p className="text-[16px] font-light text-[#C8D8E8] leading-[1.7] opacity-75 max-w-[480px] mb-10">
          El cowork que te hace producir más, conectar mejor y crecer con los que están construyendo el futuro.
        </p>

        {!success ? (
          <div className="flex gap-[10px] flex-wrap max-w-[480px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              autoComplete="email"
              className="flex-1 min-w-[200px] bg-[rgba(200,216,232,0.06)] border border-[rgba(200,216,232,0.2)] rounded-[10px] px-[18px] py-[14px] font-[family-name:var(--font-geist-sans)] text-[14px] text-[#F0EDE8] outline-none placeholder:text-[#C8D8E8] placeholder:opacity-50 transition-colors focus:border-[rgba(0,212,170,0.5)]"
            />
            <button
              onClick={submit}
              className="bg-[#E8892A] text-[#080f1e] font-semibold text-[14px] px-6 py-[14px] rounded-[10px] border-none cursor-pointer tracking-[0.04em] transition-all whitespace-nowrap hover:bg-[#d97e25] hover:-translate-y-px"
            >
              Quiero mi lugar →
            </button>
          </div>
        ) : (
          <div className="bg-[rgba(0,212,170,0.08)] border border-[rgba(0,212,170,0.25)] rounded-[10px] px-5 py-4 text-[#00D4AA] text-[14px] font-medium max-w-[480px]">
            ¡Estás dentro. Te contactamos pronto. 🤙
          </div>
        )}

        <p className="font-[family-name:var(--font-geist-mono)] text-[12px] text-[#C8D8E8] opacity-45 mt-[10px]">
          Sin spam. Solo te escribimos cuando abrimos las puertas.
        </p>
      </div>

      {/* Logo */}
      <div className="hidden sm:flex relative z-10 animate-fadeIn items-center justify-center">
        <div className="w-[min(clamp(200px,28vw,360px),100%)] aspect-square rounded-full border border-[rgba(200,216,232,0.35)] overflow-hidden flex items-center justify-center bg-[#080f1e]">
          <Image
            src="/hero.jpg"
            alt="Cariddi Cowork"
            width={360}
            height={360}
            className="w-[92%] h-[92%] object-contain rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
