const items = [
  'Sinus / Ear / Throat / Eye Infections',
  'Pneumonia',
  'Flu / COVID / Strep / RSV',
  'Urinary Tract Infections',
  'Kidney Infections & Stones',
  'Food Poisoning (Gastroenteritis)',
  'Wound & Skin Infections',
  'Insect Bites & Sunburn',
  'Food & Sun Allergy Rash',
  'STI & Prostate Infections',
  'Sea Urchin & Jellyfish Injuries',
  'Ingrown Toenails',
  'Gout',
  'Chest Pain',
  'Clots in Legs',
  'Low Back Pain / Sciatica',
  'Arthritis',
]

export default function Ticker() {
  const repeated = [...items, ...items]

  return (
    <div className="bg-[#d52128] py-3.5 overflow-hidden" aria-hidden="true">
      <div className="flex animate-ticker whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-8 text-[#fff8ed] text-sm font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]"
          >
            {item}
            <span className="text-[#fff8ed]/50 text-lg leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
