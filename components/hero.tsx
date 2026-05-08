'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, MapPin, Clock, ShieldCheck, Users, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/cA4uONRZXrwCOsHviQQtJ-7q5CaLYi3FhIW5kpAxLdJ6NyFTBgEW.jpg',
    alt: 'Waikiki beach and Diamond Head, Honolulu Hawaii',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/JiUt34tfQ1Fnlt5VX3lzS-gonBYVuiBwpEknfBqGRsfIXlzxS0vc.jpg',
    alt: 'Aloha Urgent Care & Pain Clinic entrance at International Market Place',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/V4BHj1603wdYL4th3nQRe-Mbt2fzOlthFNKNCkCHbKnktovXQYie.jpg',
    alt: 'Aloha Urgent Care welcoming clinic interior',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/YoOGcmuxlVY3u6vJRP2NP-jI34t3YoVKIk3mqN78f7X8jFQqeZCK.jpg',
    alt: 'Dr. Yang and staff member at the front desk',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/yM8UZ8rCpCrw6L2YjUQcg-8AqCrsvAuWbqyXQQDLy38n89BVxngw.jpg',
    alt: 'Dr. Yang with a happy young family patient',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/WBCG4XEldEPHquzmrOLSJ-aG8Ty3RwbMIUWIdUkHz6zOQ56rVlD6.jpg',
    alt: 'International Market Place entrance, Waikiki',
  },
]

const stats = [
  { value: 'Physician-Led', label: 'Every Visit' },
  { value: 'Comprehensive', label: 'Care' },
  { value: 'One Visit', label: 'Full Care' },
  { value: 'Transparent', label: 'Pricing' },
]

const INTERVAL = 4500

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      const children = Array.from(contentRef.current.children) as HTMLElement[]
      children.forEach((el, i) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(22px)'
        setTimeout(() => {
          el.style.transition = 'opacity 0.75s ease, transform 0.75s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, 150 + i * 120)
      })
    }
  }, [])

  const goTo = (idx: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 350)
  }

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((current + 1) % slides.length)
    }, INTERVAL)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [current])

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      aria-label="Hero section"
    >
      {/* Red top bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#d52128] z-20" aria-hidden="true" />

      {/* TOP — Text content */}
      <div className="bg-white pt-24 pb-8 px-6 md:px-14 lg:px-20">
        <div ref={contentRef} className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">

          {/* Heading block */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-black/5 border border-black/15 rounded-sm px-4 py-2 mb-5">
              <MapPin size={13} className="text-[#d52128]" />
              <span className="text-black text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]">
                International Market Place, Level 2 — Waikiki, HI
              </span>
            </div>
            <h1
              className="text-[#d52128] font-black text-balance leading-none mb-4 font-[family-name:var(--font-quicksand)]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', lineHeight: 1.08 }}
            >
              Aloha Urgent Care &amp; Pain Clinic
            </h1>
            <p
              className="text-black font-semibold text-balance"
              style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', lineHeight: 1.5 }}
            >
              Healthcare Made Simple, Thorough &amp; Accessible
            </p>
          </div>

          {/* Right block — CTAs + trust signals */}
          <div className="flex flex-col gap-5 lg:min-w-[300px]">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#d52128] hover:bg-[#b91b21] text-[#fff8ed] font-bold px-7 py-3.5 rounded-sm transition-all duration-200 text-sm font-[family-name:var(--font-inter)]"
              >
                Book Your Visit
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-black/20 hover:border-black/50 bg-transparent hover:bg-black/5 text-black hover:text-black font-semibold px-7 py-3.5 rounded-sm transition-all duration-200 text-sm font-[family-name:var(--font-inter)]"
              >
                View Services
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <div className="flex items-center gap-2 text-black text-xs font-[family-name:var(--font-inter)]">
                <Clock size={13} className="text-[#d52128] shrink-0" />
                <span>Open 6 Days — Until 11 PM</span>
              </div>
              <div className="flex items-center gap-2 text-black text-xs font-[family-name:var(--font-inter)]">
                <ShieldCheck size={13} className="text-[#d52128] shrink-0" />
                <span>Board-Certified Physicians</span>
              </div>
              <div className="flex items-center gap-2 text-black text-xs font-[family-name:var(--font-inter)]">
                <Users size={13} className="text-[#d52128] shrink-0" />
                <span>All Ages Welcome</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-white px-6 md:px-14 lg:px-20 pb-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-black/4 border border-black/10 px-4 py-3 rounded-sm"
            >
              <p className="text-[#d52128] font-black text-sm leading-tight">{s.value}</p>
              <p className="text-black text-xs mt-0.5 uppercase tracking-widest font-[family-name:var(--font-inter)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM — Slideshow banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">

        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? (animating ? 0 : 1) : 0 }}
            aria-hidden={i !== current}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Prev / Next */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all duration-200"
        >
          <ChevronLeft size={18} className="text-[#6ba6c5]" />
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all duration-200"
        >
          <ChevronRight size={18} className="text-[#6ba6c5]" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? '22px' : '7px',
                height: '7px',
                background: i === current ? '#d52128' : 'rgba(255,248,237,0.75)',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
