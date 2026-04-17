const items = [
  "DeFi", "ZK Proofs", "RWA", "Inteligencia Artificial", "Gaming On-Chain",
  "Hackathones", "Builders en serio", "Web3", "Buenos Aires",
  "DeFi", "ZK Proofs", "RWA", "Inteligencia Artificial", "Gaming On-Chain",
  "Hackathones", "Builders en serio", "Web3", "Buenos Aires",
];

export default function Ticker() {
  return (
    <div className="bg-[#00D4AA] py-3 overflow-hidden whitespace-nowrap" aria-hidden="true">
      <div className="ticker-inner inline-flex">
        {items.map((item, i) => (
          <span key={i} className="font-[family-name:var(--font-geist-mono)] text-[12px] font-medium text-[#080f1e] tracking-[0.1em] px-10">
            {item} ·
          </span>
        ))}
      </div>
    </div>
  );
}
