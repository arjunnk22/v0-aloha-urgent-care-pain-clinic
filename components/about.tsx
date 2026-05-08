import { ArrowRight } from 'lucide-react'


export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-video rounded-sm overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/3YquzOthuOw?autoplay=1&mute=1&loop=1&playlist=3YquzOthuOw&controls=1&rel=0&modestbranding=1"
                title="Aloha Urgent Care & Pain Clinic — Waikiki"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 bg-[#d52128] rounded-sm p-6 max-w-[220px] shadow-xl"
              aria-hidden="true"
            >
              <p className="text-[#fff8ed] font-black text-xl leading-tight">
                International<br />Market Place
              </p>
              <p className="text-[#fff8ed]/80 font-semibold text-sm mt-2">Level 2, Waikiki, HI</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
              Our Mission
            </span>
            <h2 className="text-black font-black text-balance mb-6" style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', lineHeight: 1.1 }}>
              Fast, Efficient &amp; Accessible —
              <span className="text-[#d52128]"> For Everyone</span>
            </h2>
            <p className="text-black text-base leading-relaxed mb-4">
              <span className="text-[#d52128] font-[family-name:var(--font-quicksand)] font-bold">Aloha Urgent Care &amp; Pain Clinic</span> was built with one goal: deliver fast, physician-led
              care where everything is handled in a single visit. We operate outside the traditional
              healthcare model — positioned as a modern, efficient, high-quality alternative designed
              for convenience, speed, and personalized care.
            </p>
            <p className="text-black text-base leading-relaxed mb-8">
              Whether you&apos;re a local family, an international visitor to Waikiki, a working professional
              with no time to spare, or an elderly patient needing attentive care — we eliminate
              everything frustrating about healthcare: the waits, the runarounds, and the confusion.
            </p>

            {/* Elevate Your Health pull quote */}
            <div className="flex items-center gap-5 bg-[#d52128] rounded-sm px-6 py-5 mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/F91CcJU9toaa1iV82D7dH-MscWNGIt4RPhR754PLoxdPaZ4Bqgg6.png"
                alt=""
                aria-hidden="true"
                className="w-12 h-auto shrink-0 opacity-90"
                style={{ animation: 'balloonFloat 6s ease-in-out infinite' }}
              />
              <div>
                <p className="text-white font-black text-lg leading-tight tracking-tight">
                  &ldquo;Elevate Your Health&rdquo;
                </p>
                <p className="text-white/60 text-xs mt-1 font-[family-name:var(--font-inter)] uppercase tracking-widest">
                  Our Promise to You
                </p>
              </div>
            </div>

            <style>{`
              @keyframes balloonFloat {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-6px); }
              }
            `}</style>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#d52128] hover:bg-[#b91b21] text-white font-bold px-8 py-4 rounded-sm transition-all duration-200 text-sm font-[family-name:var(--font-inter)]"
            >
              Get Care Today
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
