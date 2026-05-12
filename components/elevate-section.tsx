'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ElevateSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.25 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-label="Elevate Your Health"
      style={{
        backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/wKrkOj2PepL8HFc9ZBMvF-myYT3niheFRCEljOIFrvDCy8QBNYdE.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Light overlay for readability — reduced opacity to show clouds */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" aria-hidden="true" />

      {/* Subtle red top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#d52128] z-10" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Content */}
        <div
          className={`flex flex-col items-start text-left max-w-2xl transition-all duration-700 ease-out delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
            Our Promise
          </span>

          <h2
            className="text-black font-black text-balance leading-none mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.0 }}
          >
            Elevate<br />
            <span className="text-[#d52128]">Your Health</span>
          </h2>

          <p className="text-black text-lg leading-relaxed mb-10 max-w-xl">
            Just as a hot air balloon rises from the ground and soars into the sky, we lift you
            above the obstacles and frustrations of traditional urgent care — long waits, stressful
            atmosphere, inefficient and limited medical services, lack of communication, and hidden costs.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#d52128] hover:bg-[#b91b21] text-white font-bold px-8 py-4 rounded-sm transition-all duration-200 text-sm font-[family-name:var(--font-inter)]"
            >
              Book Your Visit
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="/services"
              className="text-black hover:text-[#d52128] font-semibold text-sm underline underline-offset-4 transition-colors duration-200 font-[family-name:var(--font-inter)]"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>


    </section>
  )
}
