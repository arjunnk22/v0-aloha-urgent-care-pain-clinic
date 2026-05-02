'use client'

import { useState } from 'react'
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
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Urgent Care Visits',
    description:
      'Physician-led same-day care for illnesses, injuries, infections, and non-emergency conditions — diagnosis and treatment in one visit. Free, complete follow-up consultations to address any additional questions or concerns so that you achieve full recovery.',
    tag: 'Same-Day Care',
  },
  {
    icon: FlaskConical,
    title: 'Diagnostic Testing',
    description:
      'On-site blood panels such as complete blood cell count, kidney/liver function, electrolytes, cholesterol, A1c, cardiac enzymes, D-dimer, lactic acid and more. COVID, flu, RSV, strep, and STI screening. EKG and ultrasound imaging.',
    tag: 'On-Site Results',
  },
  {
    icon: Scissors,
    title: 'Minor Procedures',
    description:
      'Laceration repair including cosmetically sensitive areas, abscess drainage, foreign body removal, ear and eye irrigation, and splinting after injuries in all types of activities such as swimming, surfing, hiking and biking — all handled in clinic.',
    tag: 'In-Clinic',
  },
  {
    icon: Zap,
    title: 'Pain Management',
    description:
      'Targeted trigger point injections with steroids and other anti-inflammatory agents — comprehensive pain evaluation for both acute and chronic conditions. Tailored to your needs, not a generic protocol.',
    tag: 'Acute & Chronic',
  },
  {
    icon: Droplets,
    title: 'IV Therapy',
    description:
      'Hydration, electrolyte therapy, vitamin infusions, and migraine relief — administered by medical professionals. IV access is quick and you take your time to receive all the medications and fluids that you need to feel better.',
    tag: 'Physician-Led',
  },
  {
    icon: Wind,
    title: 'Respiratory Treatments',
    description:
      'Nebulizer and oxygen treatments to open up the airways and improve oxygen absorption. Breathe easier when you have asthma, croup, or pneumonia.',
    tag: 'Immediate Relief',
  },
  {
    icon: Heart,
    title: 'Wound Care',
    description:
      'Expert wound assessment and treatment for accidental injuries in the outdoors of Hawaii — sea urchin, coral rocks, jellyfish as well as inside your hotel room. Irrigation, suture placement, wound care instructions and supplies, and follow-up care.',
    tag: 'Advanced Repair',
  },
  {
    icon: Pill,
    title: 'On-Site Medications',
    description:
      'Prescriptions filled on-site whenever possible. Antibiotic and other injections for faster, more convenient treatment than IV. No extra pharmacy stop, no delays — treatment starts before you leave our clinic.',
    tag: 'No Wait',
  },
  {
    icon: TrendingDown,
    title: 'Weight Loss Programs',
    description:
      'GLP-1 and GIP medication-based weight loss strategies combined with keto and other nutritional guidance — medically supervised for lasting, measurable results. Special discount on GLP-1 medication if you do not have insurance.',
    tag: 'GLP-1 / Nutrition',
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i)

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/Cjza4h8VuphLKcjn0e9cm-LYkujlfeYy36wSa3LpayWIf2zueSRQ.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Blue tinted overlay — keeps ocean visible, dark text for readability */}
      <div className="absolute inset-0 bg-[#6ba6c5]/88 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
              Our Services
            </span>
            <h2
              className="text-[#0d2d3a] font-black text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
            >
              Everything Handled
              <br />
              <span className="text-[#d52128]">In One Visit</span>
            </h2>
          </div>
          <p className="text-[#0d2d3a]/60 text-base leading-relaxed max-w-md lg:text-right">
            Comprehensive care — diagnosis, treatment, procedures, diagnostic testing, and
            prescriptions all under one roof, all in a single visit.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#0d2d3a]/10">
          {services.map((service, i) => {
            const Icon = service.icon
            const isOpen = activeIndex === i
            return (
              <div key={service.title}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full group py-6 lg:py-7 flex items-center gap-6 lg:gap-10 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <span
                    className="shrink-0 font-black tabular-nums text-[#0d2d3a]/20 group-hover:text-[#d52128]/40 transition-colors duration-300 select-none"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: 1, width: '2.5rem' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div
                    className={`shrink-0 w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#d52128]' : 'bg-[#0d2d3a]/8 group-hover:bg-[#d52128]/20'
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-[#d52128]'
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <span
                    className={`flex-1 font-bold transition-colors duration-300 ${
                      isOpen ? 'text-[#0d2d3a]' : 'text-[#0d2d3a]/70 group-hover:text-[#0d2d3a]'
                    }`}
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                  >
                    {service.title}
                  </span>

                  {/* Tag — hidden on mobile */}
                  <span className="hidden md:block shrink-0 text-xs font-semibold text-[#0d2d3a]/40 group-hover:text-[#d52128]/70 transition-colors duration-300 font-[family-name:var(--font-inter)] uppercase tracking-widest">
                    {service.tag}
                  </span>

                  {/* Arrow */}
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                        ? 'border-[#d52128] bg-[#d52128] rotate-0'
                        : 'border-[#0d2d3a]/20 group-hover:border-[#d52128]/50 rotate-0'
                    }`}
                  >
                    <ArrowUpRight
                      size={14}
                      className={`transition-all duration-300 ${
                          isOpen
                          ? 'text-white rotate-90'
                          : 'text-[#0d2d3a]/40 group-hover:text-[#d52128]'
                      }`}
                    />
                  </div>
                </button>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-7 pl-[calc(2.5rem+2.5rem+1.5rem)] lg:pl-[calc(2.5rem+2.5rem+2.5rem)] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <p className="text-[#0d2d3a]/65 text-sm leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="shrink-0 inline-flex items-center gap-2 text-[#d52128] text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-inter)] hover:gap-3 transition-all"
                    >
                      Book Now
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 pt-10 border-t border-[#0d2d3a]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[#0d2d3a]/50 text-sm font-[family-name:var(--font-inter)]">
            All 9 services available in a single visit — comprehensive care, start to finish.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-[#d52128] text-white text-sm font-bold px-6 py-3 hover:bg-[#d52128]/90 transition-colors font-[family-name:var(--font-inter)]"
          >
            Book Your Visit
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
