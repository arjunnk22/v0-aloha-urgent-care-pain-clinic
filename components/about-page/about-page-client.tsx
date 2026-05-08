'use client'

import { ArrowRight, GraduationCap, MapPin, Stethoscope, Users, Phone } from 'lucide-react'

const education = [
  {
    degree: 'B.S. Chemistry & Pre-Medicine',
    school: 'Johns Hopkins University',
    location: 'Baltimore, Maryland',
    detail: 'World-renowned research university',
  },
  {
    degree: 'Doctor of Medicine (M.D.)',
    school: 'Wake Forest University School of Medicine',
    location: 'Winston-Salem, North Carolina',
    detail: 'Medical degree',
  },
  {
    degree: 'Internal Medicine Residency',
    school: 'University of Washington',
    location: 'Seattle, Washington',
    detail: 'Residency training & clinical practice',
  },
]

const values = [
  {
    title: 'Personalized Care',
    desc: 'Dr. Yang spends real time with every patient — discussing, diagnosing, and truly understanding your condition before treatment.',
  },
  {
    title: 'Affordable & Transparent',
    desc: 'Professional care at prices that make sense. No surprise billing, no insurance gatekeeping. You know the cost before treatment begins.',
  },
  {
    title: 'Everything in One Visit',
    desc: 'Lab testing, procedures, medications, and follow-up plans — handled on-site without referrals or multiple appointments.',
  },
  {
    title: 'Bilingual Team',
    desc: 'All staff are fluent in English and Korean, ensuring every patient feels understood and comfortable throughout their visit.',
  },
]

export default function AboutPageClient() {
  return (
    <main className="bg-white">

      {/* ── Hero ── */}
      <section className="bg-white pt-36 pb-20 relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #d52128 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        {/* Balloon — decorative */}
        <div
          className="absolute right-8 lg:right-24 top-24 w-36 lg:w-56 opacity-20 pointer-events-none select-none"
          style={{ animation: 'balloonRise 10s ease-in-out infinite' }}
          aria-hidden="true"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/F91CcJU9toaa1iV82D7dH-MscWNGIt4RPhR754PLoxdPaZ4Bqgg6.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <style>{`
          @keyframes balloonRise {
            0%, 100% { transform: translateY(0px) rotate(-2deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
            Our Story
          </span>
          <h1
            className="text-black font-black text-balance max-w-3xl mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', lineHeight: 1.08 }}
          >
            Physician-Led Care Built for{' '}
            <span className="text-[#d52128]">Hawaii</span>
          </h1>
          <p className="text-black text-lg leading-relaxed max-w-2xl mb-8">
            Founded by Dr. Sung S. Yang, <span className="text-[#d52128] font-[family-name:var(--font-quicksand)] font-bold">Aloha Urgent Care &amp; Pain Clinic</span> was created with a single
            mission — to deliver fast, personalized, and accessible healthcare for Hawaii residents
            and visitors without the delays, confusion, or hidden costs of traditional medicine.
          </p>
          <p className="text-black text-xs uppercase tracking-[0.35em] font-[family-name:var(--font-inter)]">
            &mdash; Elevate Your Health
          </p>
        </div>
      </section>

      {/* ── Dr. Yang Bio ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-[#6ba6c5]/5 border border-[#6ba6c5]/10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/pz8VM2uqddHw9MatddfV2-iR3siXYGCfywV88LdKhFIq7V88lskm.jpg"
                  alt="Dr. Sung S. Yang — Founder, Aloha Urgent Care & Pain Clinic"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Credential badge */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-[#d52128] rounded-sm p-5 shadow-2xl max-w-[200px]">
                <p className="text-[#fff8ed] font-black text-sm leading-tight">Dr. Sung S. Yang</p>
                <p className="text-[#fff8ed]/75 text-xs mt-1 font-[family-name:var(--font-inter)]">M.D., Internal Medicine</p>
                <p className="text-[#fff8ed]/55 text-xs mt-0.5 font-[family-name:var(--font-inter)]">Founder & Lead Physician</p>
              </div>
            </div>

            {/* Bio copy */}
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 text-[#d52128] text-xs font-bold uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
                <Stethoscope size={14} />
                Meet the Doctor
              </span>
              <h2
                className="text-black font-black text-balance mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1 }}
              >
                About Dr. Sung S. Yang
              </h2>
              <p className="text-black text-base leading-relaxed mb-5">
                Raised in New Jersey, Dr. Sung S. Yang moved to Hawaii in 2010 to open his practice
                in Waikiki — with a mission to personalize and improve healthcare in the state of Hawaii.
                He takes pride in providing affordable and professional care for Hawaii residents and
                visitors alike.
              </p>
              <p className="text-black text-base leading-relaxed mb-5">
                Dr. Yang will spend time with you to discuss, diagnose, and truly understand your
                condition so that it can be properly treated. This level of personalized care is why
                patients keep coming back. It is a level of medical attention that everybody deserves:
                professional, affordable, and genuinely personal.
              </p>
              <p className="text-black text-base leading-relaxed mb-10">
                Educated in chemistry and medicine at the world-renowned Johns Hopkins University,
                he earned his medical degree at Wake Forest University School of Medicine and
                completed his internal medicine residency training at the University of Washington.
              </p>

              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 bg-[#d52128] hover:bg-[#b91b21] text-white font-bold px-8 py-4 rounded-sm transition-all duration-200 text-sm font-[family-name:var(--font-inter)]"
              >
                Book with Dr. Yang
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Education & Credentials ── */}
      <section className="bg-white py-24 lg:py-28 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap size={18} className="text-[#d52128]" />
            <span className="text-[#d52128] text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-inter)]">
              Education & Training
            </span>
          </div>
          <h2
            className="text-black font-black text-balance mb-14 max-w-xl"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', lineHeight: 1.12 }}
          >
            World-Class <span className="text-[#d52128]">Medical Education</span>
          </h2>

          <div className="relative flex flex-col gap-0">
            {/* vertical line */}
            <div className="absolute left-5 top-5 bottom-5 w-px bg-black/10 hidden sm:block" aria-hidden="true" />

            {education.map((item, i) => (
              <div key={i} className="relative flex gap-8 pb-12 last:pb-0">
                {/* Step dot */}
                <div className="shrink-0 relative z-10 hidden sm:flex">
                  <div className="w-10 h-10 rounded-full bg-[#d52128] flex items-center justify-center">
                    <span className="text-white font-black text-sm">{i + 1}</span>
                  </div>
                </div>
                <div className="bg-white border border-black/10 rounded-sm p-7 flex-1 hover:border-[#d52128]/30 transition-colors shadow-sm">
                  <p className="text-[#d52128] text-xs font-bold uppercase tracking-wider mb-2 font-[family-name:var(--font-inter)]">
                    {item.detail}
                  </p>
                  <h3 className="text-black font-bold text-lg mb-1">{item.degree}</h3>
                  <p className="text-black font-semibold text-sm">{item.school}</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <MapPin size={12} className="text-black/40" />
                    <p className="text-black text-xs font-[family-name:var(--font-inter)]">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Staff Section ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Staff copy */}
            <div>
              <span className="inline-flex items-center gap-2 text-[#d52128] text-xs font-bold uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
                <Users size={14} />
                Our Team
              </span>
              <h2
                className="text-black font-black text-balance mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1 }}
              >
                A Team That Genuinely Cares
              </h2>
              <p className="text-black text-base leading-relaxed mb-5">
                Our back office staff includes an exceptionally well-trained group of medical
                assistants who are trained to care for and treat patients of all ages. Our goal is
                to make your visit as comfortable as possible and give you the very best care and
                treatment — not only while you are with us, but after you leave our office as well.
              </p>
              <p className="text-black text-base leading-relaxed mb-10">
                If you have any questions about scheduling your appointment, medication refills,
                referrals to a specialist, or any other issues — contact us right away. All of our
                staff are fluent in <strong className="text-black">English and Korean</strong> and
                ready to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+18083426305"
                  className="group inline-flex items-center gap-2 bg-[#d52128] hover:bg-[#b91b21] text-white font-bold px-8 py-4 rounded-sm transition-all duration-200 text-sm font-[family-name:var(--font-inter)]"
                >
                  <Phone size={15} />
                  (808) 342-6305
                </a>
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2 bg-transparent border-2 border-black hover:bg-black text-black hover:text-white font-bold px-8 py-4 rounded-sm transition-all duration-200 text-sm font-[family-name:var(--font-inter)]"
                >
                  Book an Appointment
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Team photo placeholder */}
            <div className="flex flex-col gap-5">
              <div className="aspect-[16/10] rounded-sm overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/JEmUGD8fZuAlIb7AK8Kc0-2P8fy56tfOX8xxLCdk0C7mYKpw0oU9.jpg"
                  alt="Dr. Yang and staff at the Aloha Urgent Care & Pain Clinic front desk"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/LcVVoBucwlLhJnVfGErFO-wM3dazL62Arvyqv0aYpLEixdS6FJjU.jpg"
                    alt="Aloha Urgent Care & Pain Clinic storefront at International Market Place"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/IXISUnd3SFTBPxXSpmfTX-F5qtLcJbzHlcuuMJCIDSFScg7roCwr.jpg"
                    alt="Aloha Urgent Care treatment room with examination table and medical supplies"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values strip ── */}
      <section className="bg-white py-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
              What We Stand For
            </span>
            <h2
              className="text-black font-black text-balance"
              style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', lineHeight: 1.12 }}
            >
              Our <span className="text-[#d52128]">Core Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white border border-black/10 rounded-sm p-7 hover:border-[#d52128]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="text-[#d52128] font-black text-4xl mb-4 leading-none font-[family-name:var(--font-inter)]">
                  0{i + 1}
                </div>
                <h3 className="text-black font-bold text-base mb-3">{v.title}</h3>
                <p className="text-black text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-white font-black text-2xl lg:text-3xl text-balance">
              Ready to Experience the <span className="text-[#d52128]">Difference</span>?
            </h2>
            <p className="text-white/75 mt-2 text-sm font-[family-name:var(--font-inter)]">
              Walk in or book ahead — physician-led care available now in Waikiki.
            </p>
          </div>
          <a
            href="/#contact"
            className="shrink-0 group inline-flex items-center gap-2 bg-[#d52128] hover:bg-[#b91b21] text-white font-bold px-10 py-4 rounded-sm transition-all duration-200 text-sm font-[family-name:var(--font-inter)]"
          >
            Book Now
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </main>
  )
}
