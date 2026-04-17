"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#espacio", label: "El espacio" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#planes", label: "Planes" },
  { href: "#eventos", label: "Eventos" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(1.5rem,5vw,4rem)] h-[68px] bg-[rgba(8,15,30,0.92)] backdrop-blur-[18px] border-b border-[rgba(200,216,232,0.08)]">
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-[38px] h-[38px] rounded-full bg-[#080f1e] border border-[rgba(200,216,232,0.45)] overflow-hidden flex-shrink-0 flex items-center justify-center">
            <Image src="/logo.png" alt="Cariddi Cowork Logo" width={34} height={34} className="rounded-full object-contain" />
          </div>
          <span className="font-[family-name:var(--font-playfair)] text-[17px] font-normal tracking-[0.08em] text-[#F0EDE8]">
            CARIDDI <span className="text-[#00D4AA]">COWORK</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[13px] tracking-[0.06em] text-[#C8D8E8] opacity-75 no-underline transition-opacity hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#waitlist" className="text-[13px] font-semibold text-[#080f1e] bg-[#00D4AA] px-5 py-2 rounded-[8px] tracking-[0.04em] transition-colors hover:bg-[#00bfa0]">
              Unirme →
            </a>
          </li>
        </ul>

        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer p-2 bg-transparent border-none"
          aria-label="Menú"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-[22px] h-[1.5px] bg-[#F0EDE8] rounded-sm transition-transform duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#F0EDE8] rounded-sm transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#F0EDE8] rounded-sm transition-transform duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="fixed top-[68px] left-0 right-0 z-40 bg-[rgba(8,15,30,0.98)] backdrop-blur-[20px] border-b border-[rgba(200,216,232,0.1)] px-[clamp(1.5rem,5vw,4rem)] py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[15px] text-[#C8D8E8] opacity-80 pb-2 border-b border-[rgba(200,216,232,0.06)] no-underline">
              {l.label}
            </a>
          ))}
          <a href="#waitlist" onClick={() => setOpen(false)} className="text-[15px] text-[#00D4AA] font-semibold no-underline">
            Unirme al waitlist →
          </a>
        </div>
      )}
    </>
  );
}
