'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ElevateSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const balloonRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (balloonRef.current) {
              balloonRef.current.style.transition = 'opacity 1s ease, transform 1s ease'
              balloonRef.current.style.opacity = '1'
              balloonRef.current.style.transform = 'translateY(0px)'
            }
            if (contentRef.current) {
              contentRef.current.style.transition = 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s'
              contentRef.current.style.opacity = '1'
              contentRef.current.style.transform = 'translateY(0px)'
            }
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
      {/* Cream overlay for readability */}
      <div className="absolute inset-0 bg-[#fff8ed]/90 pointer-events-none" aria-hidden="true" />

      {/* Subtle red top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#d52128] z-10" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Balloon */}
        <div
          ref={balloonRef}
          className="shrink-0 w-48 lg:w-72 xl:w-80"
          style={{
            opacity: 0,
            transform: 'translateY(40px)',
            animation: 'none',
          }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/F91CcJU9toaa1iV82D7dH-MscWNGIt4RPhR754PLoxdPaZ4Bqgg6.png"
            alt="Hot air balloon — symbol of elevating your health"
            className="w-full h-auto drop-shadow-xl"
            style={{ animation: 'balloonDrift 9s ease-in-out infinite' }}
          />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="flex flex-col items-start text-left max-w-2xl"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
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

      <style>{`
        @keyframes balloonDrift {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-40px) rotate(2deg); }
        }
      `}</style>
    </section>
  )
}
