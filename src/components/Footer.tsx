import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#080f1e] px-[clamp(1.5rem,6vw,5rem)] py-10 border-t border-[rgba(200,216,232,0.08)] flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full overflow-hidden bg-[rgba(0,212,170,0.08)] border border-[rgba(0,212,170,0.15)] flex items-center justify-center">
          <Image src="/logo.png" alt="Logo" width={25} height={25} className="object-cover" />
        </div>
        <span className="font-[family-name:var(--font-playfair)] text-[15px] tracking-[0.06em] text-[#F0EDE8] opacity-70">
          CARIDDI <span className="text-[#00D4AA]">COWORK</span>
        </span>
      </div>

      <div className="flex items-center gap-8">
        <a href="mailto:hola@cariddi.ar" className="text-[12px] text-[#C8D8E8] opacity-45 no-underline transition-opacity hover:opacity-90">
          hola@cariddi.ar
        </a>
        <a href="https://x.com/cariddicowork" target="_blank" rel="noopener" className="text-[12px] text-[#C8D8E8] opacity-45 no-underline transition-opacity hover:opacity-90">
          @cariddicowork
        </a>
        <span className="font-[family-name:var(--font-geist-mono)] text-[11px] text-[#00D4AA] opacity-50">
          Buenos Aires · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
