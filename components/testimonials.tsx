'use client'

import { Star } from 'lucide-react'
import { useRef, useEffect } from 'react'

const row1 = [
  {
    name: 'Makena L.',
    location: 'Honolulu, HI',
    rating: 5,
    text: 'Doctor saw me within 10 minutes, diagnosed my issue, ran labs, and had me out with a prescription in under an hour. Zero runaround.',
  },
  {
    name: 'James T.',
    location: 'Visiting — San Diego, CA',
    rating: 5,
    text: 'Got a bad reef cut while surfing. Wound cleaned, stitched, and a tetanus shot all in one visit. Pricing was completely upfront. Incredible team.',
  },
  {
    name: 'Priya S.',
    location: 'Waikiki Resident',
    rating: 5,
    text: 'IV therapy for my migraines has been a game-changer. The physicians are genuinely knowledgeable and they actually listen. Two years strong.',
  },
  {
    name: 'Derek H.',
    location: 'Visiting — Chicago, IL',
    rating: 5,
    text: 'Sprained my ankle hiking Diamond Head. X-rays, a brace, and discharge instructions all in one visit. Could not have asked for better care.',
  },
  {
    name: 'Tomoko N.',
    location: 'Visiting — Tokyo, Japan',
    rating: 5,
    text: 'Staff spoke clearly and made sure I understood everything. Got medication the same visit. I felt safe and cared for far from home.',
  },
]

const row2 = [
  {
    name: 'Kevin & Rosa M.',
    location: 'Visiting — Seattle, WA',
    rating: 5,
    text: 'Our daughter got sick on day one of vacation. Seen, diagnosed, and medicated in 45 minutes. Back to the beach by afternoon. Grateful.',
  },
  {
    name: 'Leilani K.',
    location: 'Manoa, HI',
    rating: 5,
    text: 'No appointment, no long wait, and the doctor was thorough and kind. Prescription filled on-site. This is what healthcare should feel like.',
  },
  {
    name: 'Brian C.',
    location: 'Kaimuki, HI',
    rating: 5,
    text: 'Started the weight loss program here and have lost 18 lbs in 3 months. The physician checks in regularly. Finally a clinic that actually cares.',
  },
  {
    name: 'Sarah W.',
    location: 'Visiting — Austin, TX',
    rating: 5,
    text: 'Came in with a bad sinus infection on a Sunday. Open, fast, and the doctor was wonderful. Had medicine in hand before noon. Highly recommend.',
  },
  {
    name: 'Jonah R.',
    location: 'Pearl City, HI',
    rating: 5,
    text: 'Avoided a $4,000 ER bill by coming here instead. Same quality of care in a fraction of the time. Transparent pricing made all the difference.',
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={11} className="text-[#d52128] fill-[#d52128]" aria-hidden="true" />
      ))}
    </div>
  )
}

function Card({ name, location, rating, text }: { name: string; location: string; rating: number; text: string }) {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[360px] bg-white/4 border border-[#fff8ed]/8 rounded-sm px-7 py-6 flex flex-col gap-4 mx-3">
      <StarRow count={rating} />
      <p className="text-[#fff8ed]/80 text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
      <div className="border-t border-[#fff8ed]/8 pt-4">
        <p className="text-[#fff8ed] font-bold text-sm">{name}</p>
        <p className="text-[#fff8ed]/40 text-xs mt-0.5 font-[family-name:var(--font-inter)]">{location}</p>
      </div>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const posRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const speed = reverse ? -0.45 : 0.45
    const halfWidth = track.scrollWidth / 2

    const animate = () => {
      posRef.current -= speed
      if (!reverse && posRef.current <= -halfWidth) posRef.current = 0
      if (reverse && posRef.current >= 0) posRef.current = -halfWidth
      track.style.transform = `translateX(${posRef.current}px)`
      animRef.current = requestAnimationFrame(animate)
    }

    if (reverse) posRef.current = -halfWidth

    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [reverse])

  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden w-full">
      <div ref={trackRef} className="flex will-change-transform">
        {doubled.map((t, i) => (
          <Card key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/6vIyJrEplp5FMRMFZqXz3-jL3DdTVU5cIAdmIU66agy5Vm0sBbZ3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Deep teal overlay — keeps turtle visible but text fully readable */}
      <div className="absolute inset-0 bg-[#6ba6c5]/80 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 100% 0%, rgba(213,33,40,0.06) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
              Patient Stories
            </span>
            <h2
              className="text-white font-black text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
            >
              Real Patients,{' '}
              <span className="text-[#d52128]">Real Results</span>
            </h2>
          </div>
          <p className="text-[#0d2d3a]/55 text-sm max-w-xs font-[family-name:var(--font-inter)] lg:text-right leading-relaxed">
            Locals and visitors from across the world who trusted us when it mattered most.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-5 overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(107,166,197,0.80), transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgba(107,166,197,0.80), transparent)' }}
          aria-hidden="true"
        />

        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-14 text-center">
        <p className="text-[#0d2d3a]/40 text-xs uppercase tracking-widest font-[family-name:var(--font-inter)]">
          Trusted by locals and visitors from over 30 countries
        </p>
      </div>
    </section>
  )
}
