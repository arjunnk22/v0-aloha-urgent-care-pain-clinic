'use client'

import { useState, useRef } from 'react'
import {
  Stethoscope,
  FlaskConical,
  Scissors,
  Zap,
  Droplets,
  Wind,
  Heart,
  Pill,
  TrendingDown,
  ArrowUpRight,
  CheckCircle,
  Phone,
  ChevronRight,
  Clock,
  X,
} from 'lucide-react'

const categories = ['All Services', 'Acute Care', 'Lab & Diagnostics', 'Procedures', 'Wellness']

const services = [
  {
    icon: Stethoscope,
    title: 'Urgent Care Visits',
    category: 'Acute Care',
    tag: 'Same-Day Care',
    description:
      'Physician-led same-day care for illnesses, injuries, infections, and non-emergency conditions. Diagnosis and treatment completed in one visit — no referrals, no runaround.',
    details: [
      'Full physician evaluation by an MD',
      'On-site diagnosis and treatment',
      'Illness, infection, and injury care',
      'Prescription issued on-site when needed',
      'No prior authorization required',
    ],
    ideal: 'Flu, ear infections, UTIs, rashes, fevers, minor injuries, and more.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/M70yiwgiACMv1sTYMnkxV-goynmEo9c708xb6ymDB1bURmIzKUmJ.jpg',
  },
  {
    icon: FlaskConical,
    title: 'Lab Testing',
    category: 'Lab & Diagnostics',
    tag: 'On-Site Results',
    description:
      'On-site blood panels, urinalysis, strep, flu, COVID, STI screening, and more. Fast results without sending you elsewhere — everything processed right here.',
    details: [
      'CBC, metabolic panels, lipid panels',
      'Rapid strep, flu A/B, and COVID tests',
      'STI and STD screening',
      'Urinalysis and urine cultures',
      'Results reviewed with physician same visit',
    ],
    ideal: 'Routine screenings, illness diagnosis, pre-travel testing, and STI panels.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/GF9Ekd6TNOV80mHgqlXEj-bf9ZEWox6aSD7k51m7KD9E10AfcMoj.jpg',
  },
  {
    icon: Scissors,
    title: 'Minor Procedures',
    category: 'Procedures',
    tag: 'In-Clinic',
    description:
      'Laceration repair including cosmetically sensitive areas, abscess drainage, foreign body removal, ear and eye irrigation, and splinting — all handled in clinic.',
    details: [
      'Laceration repair (including face, neck, hands)',
      'Abscess incision and drainage',
      'Foreign body removal (ear, eye, skin)',
      'Ear and eye irrigation',
      'Splinting for fractures and sprains',
    ],
    ideal: 'Cuts, skin infections, embedded objects, eye or ear irritants, and minor fractures.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/xSlUYrux5D9tDpH38CDkL-IXD9HDiqvl6Bjz3tUZoAWgsntrqCCO.jpg',
  },
  {
    icon: Zap,
    title: 'Pain Management',
    category: 'Acute Care',
    tag: 'Acute & Chronic',
    description:
      'Targeted anti-inflammatory injections and comprehensive pain evaluation for both acute and chronic conditions. Tailored to your needs, not a generic protocol.',
    details: [
      'Acute pain evaluation and treatment',
      'Chronic pain assessment',
      'Anti-inflammatory and corticosteroid injections',
      'Muscle and joint pain management',
      'Medication and follow-up coordination',
    ],
    ideal: 'Back pain, joint pain, sports injuries, and persistent inflammation.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/NgcVaoD1svKYAcbP4qmyI-NiOtFah3GwuU2yRsKVKHjLpWgeglA0.jpg',
  },
  {
    icon: Droplets,
    title: 'IV Therapy',
    category: 'Wellness',
    tag: 'Physician-Led',
    description:
      'Hydration, electrolyte therapy, vitamin infusions, and migraine relief — administered by medical professionals. Feel better before you leave.',
    details: [
      'IV hydration for dehydration and illness',
      'Electrolyte and nutrient replenishment',
      'Migraine and headache IV protocol',
      'Hangover recovery and fatigue relief',
      'Vitamin C and B-complex infusions',
    ],
    ideal: 'Dehydration, migraines, jet lag, hangovers, illness recovery, and fatigue.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/V4BHj1603wdYL4th3nQRe-Mbt2fzOlthFNKNCkCHbKnktovXQYie.jpg',
  },
  {
    icon: Wind,
    title: 'Respiratory Treatments',
    category: 'Acute Care',
    tag: 'Immediate Relief',
    description:
      'Nebulizer and inhalation treatments to improve oxygen absorption, reduce airway inflammation, and manage asthma and bronchitis on the spot.',
    details: [
      'Nebulizer therapy for asthma attacks',
      'Bronchodilator inhalation treatment',
      'Airway inflammation management',
      'Oxygen saturation monitoring',
      'Bronchitis and COPD symptom care',
    ],
    ideal: 'Asthma flare-ups, bronchitis, shortness of breath, and respiratory infections.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/YoOGcmuxlVY3u6vJRP2NP-jI34t3YoVKIk3mqN78f7X8jFQqeZCK.jpg',
  },
  {
    icon: Heart,
    title: 'Wound Care',
    category: 'Procedures',
    tag: 'Advanced Repair',
    description:
      'Expert wound assessment, irrigation, closure, and follow-up care — including repair of cosmetically sensitive areas like the face, neck, and hands.',
    details: [
      'Wound irrigation and debridement',
      'Primary and secondary wound closure',
      'Cosmetically sensitive repair (face, hands)',
      'Infection prevention and wound dressing',
      'Follow-up wound reassessment available',
    ],
    ideal: 'Lacerations, abrasions, surgical wounds, bites, and post-procedure wound care.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/rvnekfkOcUt6Qm9WbHOvQ-YLN5T9XaRFhq2w2TkOwxG9xNaelLvI.jpg',
  },
  {
    icon: Pill,
    title: 'On-Site Medications',
    category: 'Acute Care',
    tag: 'No Wait',
    description:
      'Prescriptions filled on-site whenever possible. No extra pharmacy stop, no delays — treatment starts before you leave our clinic.',
    details: [
      'Common antibiotics dispensed on-site',
      'Anti-nausea and pain medications',
      'Allergy and anti-inflammatory drugs',
      'Travel health medications',
      'Prescription written and filled same visit',
    ],
    ideal: 'Any patient who needs medication immediately after diagnosis and treatment.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/yM8UZ8rCpCrw6L2YjUQcg-8AqCrsvAuWbqyXQQDLy38n89BVxngw.jpg',
  },
  {
    icon: TrendingDown,
    title: 'Weight Loss Programs',
    category: 'Wellness',
    tag: 'GLP-1 / Nutrition',
    description:
      'GLP-1 medication-based weight loss programs combined with guided nutritional approaches — medically supervised for lasting, measurable results.',
    details: [
      'GLP-1 receptor agonist prescriptions (e.g. Semaglutide)',
      'Body composition and baseline assessment',
      'Personalized nutrition guidance',
      'Ongoing medical supervision and monitoring',
      'Follow-up consultations included',
    ],
    ideal: 'Adults seeking medically supervised weight management and long-term results.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/cA4uONRZXrwCOsHviQQtJ-7q5CaLYi3FhIW5kpAxLdJ6NyFTBgEW.jpg',
  },
]

const steps = [
  { num: '01', title: 'Walk In', desc: 'No appointment needed. Walk in, check in at the front desk, and be seen quickly.' },
  { num: '02', title: 'Physician Evaluation', desc: 'A licensed MD conducts a thorough evaluation — not a rushed template visit.' },
  { num: '03', title: 'Diagnosis & Treatment', desc: 'Labs, procedures, injections, or medications handled on-site in a single visit.' },
  { num: '04', title: 'Prescriptions Filled', desc: 'We fill common prescriptions on-site. No extra pharmacy trip required.' },
  { num: '05', title: 'Follow-Up Support', desc: 'Phone, text, or virtual follow-up available. Your care doesn\'t stop when you leave.' },
]

export default function ServicesPageClient() {
  const [activeCategory, setActiveCategory] = useState('All Services')
  const [activeService, setActiveService] = useState<number | null>(null)
  const detailRef = useRef<HTMLDivElement>(null)

  const filtered = services.filter(
    (s) => activeCategory === 'All Services' || s.category === activeCategory
  )

  const openService = (originalIndex: number) => {
    setActiveService(originalIndex)
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const selected = activeService !== null ? services[activeService] : null
  const SelectedIcon = selected?.icon

  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-[#6ba6c5] relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 0% 100%, rgba(213,33,40,0.10) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
              Our Services
            </span>
            <h1
              className="text-[#fff8ed] font-black text-balance leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              Everything You Need —{' '}
              <span className="text-[#d52128]">One Visit.</span>
            </h1>
            <p className="text-[#fff8ed]/60 text-lg leading-relaxed max-w-xl">
              Physician-led urgent care, advanced procedures, lab testing, wellness programs,
              and on-site medications. No referrals. No runaround. No repeat trips.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#services-list"
                className="inline-flex items-center gap-2.5 bg-[#d52128] hover:bg-[#b91b21] text-[#fff8ed] font-bold px-7 py-3.5 transition-colors text-sm font-[family-name:var(--font-inter)]"
              >
                View All Services
                <ArrowUpRight size={15} />
              </a>
              <a
                href="tel:+18083426305"
                className="inline-flex items-center gap-2.5 border border-[#fff8ed]/20 hover:border-[#fff8ed]/50 text-[#fff8ed]/70 hover:text-[#fff8ed] px-7 py-3.5 transition-all text-sm font-[family-name:var(--font-inter)]"
              >
                <Phone size={14} />
                (808) 342-6305
              </a>
            </div>
          </div>
        </div>

        {/* Stat Bar */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#fff8ed]/8 border border-[#fff8ed]/8">
            {[
              { num: '9', label: 'Services Under One Roof' },
              { num: 'MD', label: 'Physician-Led Every Visit' },
              { num: '$0', label: 'Referral or Authorization Fees' },
              { num: '1', label: 'Visit to Complete Your Care' },
            ].map((s) => (
              <div key={s.label} className="bg-[#6ba6c5] px-8 py-6 text-center">
                <p className="text-[#d52128] font-black text-3xl leading-none">{s.num}</p>
                <p className="text-[#fff8ed]/40 text-xs mt-2 font-[family-name:var(--font-inter)] leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div id="services-list" className="sticky top-20 z-30 bg-[#6ba6c5] border-b border-[#fff8ed]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all font-[family-name:var(--font-inter)] ${
                  activeCategory === cat
                    ? 'bg-[#d52128] text-[#fff8ed]'
                    : 'text-[#fff8ed]/40 hover:text-[#fff8ed] hover:bg-[#fff8ed]/6'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto shrink-0 text-[#fff8ed]/25 text-xs font-[family-name:var(--font-inter)] pr-2">
              {filtered.length} service{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Services List */}
      <section className="bg-[#6ba6c5] py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="divide-y divide-[#fff8ed]/8 border border-[#fff8ed]/8">
            {filtered.map((service) => {
              const originalIndex = services.findIndex((s) => s.title === service.title)
              const Icon = service.icon
              const isActive = activeService === originalIndex
              return (
                <button
                  key={service.title}
                  onClick={() => openService(originalIndex)}
                  className={`group w-full flex items-center gap-6 lg:gap-10 px-6 lg:px-8 py-6 lg:py-7 text-left transition-all duration-200 ${
                    isActive ? 'bg-[#d52128]/10' : 'hover:bg-[#fff8ed]/3'
                  }`}
                  aria-expanded={isActive}
                >
                  <div
                    className={`shrink-0 w-12 h-12 flex items-center justify-center transition-all duration-200 ${
                      isActive ? 'bg-[#d52128]' : 'bg-[#fff8ed]/6 group-hover:bg-[#d52128]/20'
                    }`}
                  >
                    <Icon size={20} className={isActive ? 'text-white' : 'text-[#d52128]'} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-base lg:text-lg transition-colors duration-200 ${isActive ? 'text-[#fff8ed]' : 'text-[#fff8ed]/70 group-hover:text-[#fff8ed]'}`}>
                      {service.title}
                    </p>
                    <p className="text-[#fff8ed]/35 text-sm mt-0.5 font-[family-name:var(--font-inter)] truncate">
                      {service.description.slice(0, 80)}...
                    </p>
                  </div>
                  <span className={`hidden md:block shrink-0 text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-inter)] transition-colors duration-200 ${isActive ? 'text-[#d52128]' : 'text-[#fff8ed]/20 group-hover:text-[#d52128]/60'}`}>
                    {service.tag}
                  </span>
                  <div className={`shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-200 ${isActive ? 'border-[#d52128] bg-[#d52128]' : 'border-[#fff8ed]/15 group-hover:border-[#d52128]/40'}`}>
                    <ChevronRight size={14} className={`transition-all duration-200 ${isActive ? 'text-white rotate-90' : 'text-[#fff8ed]/30 group-hover:text-[#d52128]'}`} />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Panel */}
      {selected && SelectedIcon && (
        <section
          ref={detailRef}
          className="bg-white py-16 lg:py-20 scroll-mt-32"
          aria-live="polite"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">
              {/* Left: Detail */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#d52128] flex items-center justify-center shrink-0">
                      <SelectedIcon size={24} className="text-white" />
                    </div>
                    <div>
                      <span className="text-[#d52128] text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-inter)]">
                        {selected.category}
                      </span>
                      <h2 className="text-black font-black text-2xl lg:text-3xl leading-tight">
                        {selected.title}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveService(null)}
                    className="shrink-0 w-9 h-9 border border-[#6ba6c5]/15 hover:border-[#d52128] hover:bg-[#d52128]/5 flex items-center justify-center transition-all"
                    aria-label="Close detail panel"
                  >
                    <X size={16} className="text-[#6ba6c5]/50" />
                  </button>
                </div>

                {/* Image */}
                <div className="relative w-full h-64 lg:h-80 overflow-hidden mb-8 bg-[#6ba6c5]">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#d52128]"
                    aria-hidden="true"
                  />
                </div>

                <p className="text-black/65 text-base leading-relaxed mb-8">
                  {selected.description}
                </p>

                {/* What's Included */}
                <div className="mb-8">
                  <h3 className="text-black font-bold text-sm uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
                    What&apos;s Included
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {selected.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-[#d52128] mt-0.5 shrink-0" />
                        <span className="text-black/65 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="bg-[#6ba6c5]/4 border-l-4 border-[#d52128] px-6 py-4">
                  <p className="text-[#6ba6c5] font-bold text-xs uppercase tracking-widest mb-1 font-[family-name:var(--font-inter)]">
                    Ideal For
                  </p>
                  <p className="text-[#6ba6c5]/65 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                    {selected.ideal}
                  </p>
                </div>
              </div>

              {/* Right: CTA Sidebar */}
              <div className="flex flex-col gap-6">
                {/* Book Card */}
                <div className="bg-[#6ba6c5] p-8 flex flex-col gap-5">
                  <h3 className="text-[#fff8ed] font-black text-xl leading-tight">
                    Ready to be seen?
                  </h3>
                  <p className="text-[#fff8ed]/55 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                    Walk in or call ahead. Our physician team is ready to help — same day, no referral needed.
                  </p>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#d52128] hover:bg-[#b91b21] text-[#fff8ed] font-bold px-6 py-3.5 transition-colors text-sm font-[family-name:var(--font-inter)]"
                  >
                    Book Now
                    <ArrowUpRight size={15} />
                  </a>
                  <a
                    href="tel:+18083426305"
                    className="inline-flex items-center justify-center gap-2.5 border border-[#fff8ed]/20 hover:border-[#fff8ed]/50 text-[#fff8ed]/70 hover:text-[#fff8ed] px-6 py-3.5 transition-all text-sm font-[family-name:var(--font-inter)]"
                  >
                    <Phone size={14} />
                    (808) 342-6305
                  </a>
                </div>

                {/* Hours Card */}
                <div className="border border-[#6ba6c5]/10 p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={15} className="text-[#d52128]" />
                    <h4 className="text-[#6ba6c5] font-bold text-sm uppercase tracking-widest font-[family-name:var(--font-inter)]">
                      Hours
                    </h4>
                  </div>
                  <div className="flex flex-col gap-2 text-sm font-[family-name:var(--font-inter)]">
                    <div className="flex justify-between">
                      <span className="text-[#6ba6c5]/50">Mon – Thurs, Sat</span>
                      <span className="text-[#6ba6c5] font-semibold">9:30 AM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6ba6c5]/50">Friday</span>
                      <span className="text-[#6ba6c5] font-semibold">4:30 PM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6ba6c5]/50">Sunday</span>
                      <span className="text-[#d52128] font-bold">Closed</span>
                    </div>
                  </div>
                </div>

                {/* All Services Nav */}
                <div className="border border-[#6ba6c5]/10 p-6">
                  <h4 className="text-[#6ba6c5] font-bold text-xs uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
                    All Services
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {services.map((s, i) => {
                      const SIcon = s.icon
                      return (
                        <li key={s.title}>
                          <button
                            onClick={() => openService(i)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm transition-all font-[family-name:var(--font-inter)] ${
                              activeService === i
                                ? 'bg-[#d52128] text-[#fff8ed]'
                                : 'text-[#6ba6c5]/60 hover:text-[#6ba6c5] hover:bg-[#6ba6c5]/5'
                            }`}
                          >
                            <SIcon size={13} className={activeService === i ? 'text-[#fff8ed]' : 'text-[#d52128]'} />
                            {s.title}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="bg-[#fff8ed] py-20 lg:py-28 border-t border-[#6ba6c5]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
              What to Expect
            </span>
            <h2
              className="text-[#6ba6c5] font-black text-balance"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}
            >
              From Walk-In to{' '}
              <span className="text-[#d52128]">Feeling Better</span>
            </h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-10 right-10 h-px bg-[#6ba6c5]/10" aria-hidden="true" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#6ba6c5]/8 border border-[#6ba6c5]/8">
              {steps.map((step) => (
                <div key={step.num} className="bg-[#fff8ed] p-8 flex flex-col gap-4">
                  <span className="text-[#d52128] font-black text-3xl leading-none">{step.num}</span>
                  <h3 className="text-[#6ba6c5] font-bold text-base">{step.title}</h3>
                  <p className="text-[#6ba6c5]/55 text-sm leading-relaxed font-[family-name:var(--font-inter)]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#d52128] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[#fff8ed] font-black text-2xl lg:text-3xl leading-tight text-balance">
              Not sure which service you need?
            </h2>
            <p className="text-[#fff8ed]/70 text-base mt-2 font-[family-name:var(--font-inter)]">
              Walk in and our physician will assess you. We handle it from there.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2.5 bg-[#fff8ed] hover:bg-white text-[#d52128] font-bold px-7 py-3.5 transition-colors text-sm font-[family-name:var(--font-inter)]"
            >
              Book Now
              <ArrowUpRight size={15} />
            </a>
            <a
              href="tel:+18083426305"
              className="inline-flex items-center gap-2.5 border border-[#fff8ed]/40 hover:border-[#fff8ed] text-[#fff8ed] px-7 py-3.5 transition-all text-sm font-[family-name:var(--font-inter)]"
            >
              <Phone size={14} />
              Call Us
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
