import { ArrowRight } from 'lucide-react'

const columns = [
  {
    heading: 'Traditional Clinics',
    subheading: 'Compete on',
    items: [
      'Insurance network coverage',
      'Volume-based patient flow',
      'Referral-heavy systems',
      'Long wait times',
      'Unclear billing',
    ],
    muted: true,
  },
  {
    heading: 'Emergency Rooms',
    subheading: 'Known for',
    items: [
      'Extremely long wait times',
      'Overcrowded environments',
      'High, unpredictable costs',
      'Impersonal, rushed care',
      'Not built for non-emergencies',
    ],
    muted: true,
  },
  {
    heading: 'Aloha Urgent Care',
    subheading: 'We compete on',
    items: [
      'Speed — immediate access to care',
      'Convenience — central location + extended hours',
      'Clarity — transparent pricing, simple process',
      'Experience — personalized, unrushed care',
      'Capability — full-service, one-visit care',
    ],
    muted: false,
    highlight: true,
  },
]

export default function Positioning() {
  return (
    <section className="bg-[#fff8ed] py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
            Our Positioning
          </span>
          <h2 className="text-[#6ba6c5] font-black text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
            Not Standard Urgent Care.
            <br />
            <span className="text-[#d52128]">Healthcare, Redefined.</span>
          </h2>
          <p className="mt-5 text-[#5a5a6e] text-base leading-relaxed">
            We are not competing on insurance. We are competing on experience, speed,
            accessibility, and quality of care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <div
              key={col.heading}
              className={`rounded-sm p-8 border flex flex-col gap-6 ${
                col.highlight
                  ? 'bg-[#6ba6c5] border-[#d52128]/40 relative overflow-hidden'
                  : 'bg-[#fff8ed] border-[#6ba6c5]/10'
              }`}
            >
              {col.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-[#d52128]"
                  aria-hidden="true"
                />
              )}
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 font-[family-name:var(--font-inter)] ${col.highlight ? 'text-[#d52128]' : 'text-[#6ba6c5]/40'}`}>
                  {col.subheading}
                </p>
                <h3 className={`font-black text-xl ${col.highlight ? 'text-[#fff8ed]' : 'text-[#6ba6c5]/50'}`}>
                  {col.heading}
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item} className={`flex items-start gap-3 text-sm leading-relaxed ${col.highlight ? 'text-[#fff8ed]/75' : 'text-[#6ba6c5]/35 line-through decoration-[#6ba6c5]/20'}`}>
                    {col.highlight && (
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#d52128]" aria-hidden="true" />
                    )}
                    {item}
                  </li>
                ))}
              </ul>
              {col.highlight && (
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-[#d52128] hover:bg-[#b91b21] text-[#fff8ed] font-bold px-6 py-3 rounded-sm transition-all duration-200 text-sm font-[family-name:var(--font-inter)] mt-auto w-fit"
                >
                  Book Now
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 bg-[#6ba6c5] rounded-sm p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-[#fff8ed] font-black text-xl lg:text-2xl text-balance leading-tight">
              This is not just urgent care.<br />
              <span className="text-[#d52128]">This is healthcare made simple, thorough, and accessible.</span>
            </p>
          </div>
          <a
            href="#contact"
            className="group shrink-0 inline-flex items-center gap-3 bg-[#d52128] hover:bg-[#b91b21] text-[#fff8ed] font-bold px-8 py-4 rounded-sm transition-all duration-200 text-sm font-[family-name:var(--font-inter)]"
          >
            Get Care Today
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
