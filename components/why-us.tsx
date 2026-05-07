'use client'

import { useState } from 'react'
import {
  UserCheck,
  Clock,
  DollarSign,
  CheckCircle,
  MapPin,
  Ambulance,
  Globe,
  Baby,
  ShieldPlus,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react'

const reasons = [
  {
    icon: UserCheck,
    title: 'Physician-Led, Every Time',
    angle: 'Care led by doctors, not rushed through a system.',
    description:
      'All care is provided exclusively by licensed physicians (MDs). Thorough evaluations with direct physician involvement from intake to discharge — not delegated to mid-level providers.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/M70yiwgiACMv1sTYMnkxV-goynmEo9c708xb6ymDB1bURmIzKUmJ.jpg',
  },
  {
    icon: Clock,
    title: 'Extended Hours, Open Late',
    angle: 'Care when you actually need it.',
    description:
      'We operate later than most clinics in Waikiki — open Mon–Thurs and Sat from 9:30 AM to 11 PM, and Fri from 4:30 PM to 11 PM. Closed Sundays. Ideal for after-hours and last-minute urgent medical needs.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/V4BHj1603wdYL4th3nQRe-Mbt2fzOlthFNKNCkCHbKnktovXQYie.jpg',
  },
  {
    icon: DollarSign,
    title: 'Transparent, Upfront Pricing',
    angle: 'No surprise billing. No hidden fees.',
    description:
      'Know what you pay before treatment begins. No surprise billing, no hidden fees, no prior authorizations — straightforward, honest healthcare pricing.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/rvnekfkOcUt6Qm9WbHOvQ-YLN5T9XaRFhq2w2TkOwxG9xNaelLvI.jpg',
  },
  {
    icon: CheckCircle,
    title: 'Everything in One Visit',
    angle: 'Everything handled in one visit.',
    description:
      'Physician consultation, diagnostic testing, procedures, pain management, IV fluids, and on-site oral and injection medications — all completed in a single visit so you can get back to your vacation or life in Hawaii.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/GF9Ekd6TNOV80mHgqlXEj-bf9ZEWox6aSD7k51m7KD9E10AfcMoj.jpg',
  },
  {
    icon: MapPin,
    title: 'Prime Waikiki Location',
    angle: 'Care, right where you need it.',
    description:
      'Located inside International Market Place (Level 2) — high foot traffic, walking distance from major hotels, and immediate accessibility for walk-ins.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/WBCG4XEldEPHquzmrOLSJ-aG8Ty3RwbMIUWIdUkHz6zOQ56rVlD6.jpg',
  },

  {
    icon: Ambulance,
    title: 'A Better Alternative to the ER',
    angle: 'Skip the wait. Get the care you need.',
    description:
      'Shorter wait times, a calm and private environment, no overcrowding, and focused attentive care — without the ER price tag or chaos.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/JiUt34tfQ1Fnlt5VX3lzS-gonBYVuiBwpEknfBqGRsfIXlzxS0vc.jpg',
  },
  {
    icon: Globe,
    title: 'Accessible for International Visitors',
    angle: 'Easy, reliable care for visitors alike.',
    description:
      'Familiar, straightforward care for visitors unfamiliar with local systems. Clear communication and full assistance through check-in, consultation, and checkout.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/cA4uONRZXrwCOsHviQQtJ-7q5CaLYi3FhIW5kpAxLdJ6NyFTBgEW.jpg',
  },
  {
    icon: Baby,
    title: 'Family-Friendly & All-Ages Care',
    angle: 'Care for every stage of life.',
    description:
      'Care for children, adults, and elderly patients. Tailored treatment in a comfortable, welcoming environment — for every stage of life.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/yM8UZ8rCpCrw6L2YjUQcg-8AqCrsvAuWbqyXQQDLy38n89BVxngw.jpg',
  },
  {
    icon: ShieldPlus,
    title: 'Personalized, Unrestricted Care',
    angle: 'Care designed around you.',
    description:
      'Without insurance restrictions, providers focus fully on you. More time per patient, treatment decisions based on need — not coverage limitations.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/xSlUYrux5D9tDpH38CDkL-IXD9HDiqvl6Bjz3tUZoAWgsntrqCCO.jpg',
  },
  {
    icon: HeartHandshake,
    title: 'Ongoing Follow-Up Support',
    angle: 'Care that does not stop when you leave.',
    description:
      'Care that extends beyond the initial visit — follow-up consultations via phone, text, or virtual, prescription coordination, and continued support for recovery.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/YoOGcmuxlVY3u6vJRP2NP-jI34t3YoVKIk3mqN78f7X8jFQqeZCK.jpg',
  },
]

export default function WhyUs() {
  const [active, setActive] = useState(0)
  const current = reasons[active]
  const Icon = current.icon

  return (
    <section id="why-us" className="bg-[#6ba6c5] py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 70% at 100% 0%, rgba(213,33,40,0.09) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
            Why Choose Us
          </span>
          <h2
            className="text-black font-black text-balance"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            The Aloha Difference —
            <br />
            <span className="text-[#d52128]">Care Without Compromise</span>
          </h2>
          <p className="mt-5 text-black/60 text-base leading-relaxed">
            We built Aloha Urgent Care to eliminate everything frustrating about healthcare —
            the waits, the runarounds, the confusion, the referrals.
          </p>
        </div>

        {/* Interactive Panel */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-0 border border-[#fff8ed]/8 rounded-sm overflow-hidden">
          {/* Tab List */}
          <nav
            className="flex flex-col overflow-y-auto max-h-[540px] border-r border-[#fff8ed]/8 divide-y divide-[#fff8ed]/6"
            aria-label="Aloha Difference features"
          >
            {reasons.map((r, i) => {
              const TabIcon = r.icon
              const isActive = i === active
              return (
                <button
                  key={r.title}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-3 px-6 py-4 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d52128] ${
                    isActive
                      ? 'bg-[#d52128] text-[#fff8ed]'
                      : 'bg-transparent text-[#0d2d3a]/60 hover:bg-[#0d2d3a]/4 hover:text-[#0d2d3a]'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <TabIcon size={16} className={`shrink-0 ${isActive ? 'text-[#fff8ed]' : 'text-[#d52128]'}`} />
                  <span className="text-sm font-semibold leading-snug font-[family-name:var(--font-inter)]">
                    {r.title}
                  </span>
                  {isActive && (
                    <ArrowRight size={14} className="ml-auto shrink-0 text-[#fff8ed]/70" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Detail Panel */}
          <div className="relative flex flex-col">
            {/* Image */}
            <div className="relative h-56 lg:h-72 overflow-hidden bg-[#0a1a35]">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-opacity duration-300"
                style={{
                  objectPosition: current.title === 'Family-Friendly & All-Ages Care' ? 'center 20%' : 'center center',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, transparent 50%, #6ba6c5 100%)',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-8 lg:p-10 flex-1 bg-[#6ba6c5]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#d52128]/10 border border-[#d52128]/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#d52128]" />
                </div>
                <h3 className="text-[#0d2d3a] font-black text-xl leading-tight">
                  {current.title}
                </h3>
              </div>

              <p className="text-[#0d2d3a]/65 text-base leading-relaxed">
                {current.description}
              </p>

              <p className="text-[#d52128] text-sm font-bold italic font-[family-name:var(--font-inter)] mt-1">
                &ldquo;{current.angle}&rdquo;
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-[#d52128] hover:bg-[#b91b21] text-[#fff8ed] font-bold px-6 py-3 rounded-sm transition-all duration-200 text-sm font-[family-name:var(--font-inter)] mt-auto w-fit"
              >
                Book Now
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 border-t border-[#fff8ed]/10 pt-12 relative">
          <div className="absolute -top-16 right-0 w-24 opacity-10 pointer-events-none select-none" aria-hidden="true">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/F91CcJU9toaa1iV82D7dH-MscWNGIt4RPhR754PLoxdPaZ4Bqgg6.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-[#0d2d3a]/35 text-xs uppercase tracking-[0.3em] font-[family-name:var(--font-inter)] mb-10">
            Elevate Your Health
          </p>
        <div className="grid sm:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
          {[
            { num: '6', unit: 'Days a Week', label: 'Open Mon–Thurs, Fri & Sat — closed Sundays' },
            { num: '1', unit: 'Visit', label: 'Complete care start to finish' },
          ].map((item) => (
            <div key={item.unit}>
              <p
                className="text-[#d52128] font-black"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1 }}
              >
                {item.num}
                <span className="text-[#0d2d3a]/50 font-semibold text-lg ml-1">{item.unit}</span>
              </p>
              <p className="text-[#0d2d3a]/50 text-sm mt-2 font-[family-name:var(--font-inter)]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
