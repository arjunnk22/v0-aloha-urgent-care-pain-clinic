'use client'

import { useState, useRef, useEffect } from 'react'
import { Star, Search, ChevronDown, Quote } from 'lucide-react'

const allTestimonials = [
  {
    name: 'Makena L.',
    location: 'Honolulu, HI',
    type: 'Local',
    service: 'Urgent Care',
    rating: 5,
    text: 'Doctor saw me within 10 minutes, diagnosed my issue, ran labs, and had me out with a prescription in under an hour. Zero runaround. This is exactly what healthcare in Hawaii should look like.',
  },
  {
    name: 'James T.',
    location: 'Visiting — San Diego, CA',
    type: 'Visitor',
    service: 'Wound Care',
    rating: 5,
    text: 'Got a bad reef cut while surfing. Wound cleaned, stitched, and a tetanus shot all in one visit. Pricing was completely upfront. Incredible team — I felt taken care of the entire time.',
  },
  {
    name: 'Priya S.',
    location: 'Waikiki Resident',
    type: 'Local',
    service: 'IV Therapy',
    rating: 5,
    text: 'IV therapy for my migraines has been a game-changer. The physicians are genuinely knowledgeable and they actually listen. Two years strong and I keep coming back.',
  },
  {
    name: 'Derek H.',
    location: 'Visiting — Chicago, IL',
    type: 'Visitor',
    service: 'Urgent Care',
    rating: 5,
    text: 'Sprained my ankle hiking Diamond Head. X-rays, a brace, and discharge instructions all in one visit. Could not have asked for better care on vacation.',
  },
  {
    name: 'Tomoko N.',
    location: 'Visiting — Tokyo, Japan',
    type: 'International',
    service: 'Urgent Care',
    rating: 5,
    text: 'Staff spoke clearly and made sure I understood everything. Got medication the same visit. I felt safe and cared for far from home. Dr. Yang was exceptional.',
  },
  {
    name: 'Kevin & Rosa M.',
    location: 'Visiting — Seattle, WA',
    type: 'Visitor',
    service: 'Urgent Care',
    rating: 5,
    text: 'Our daughter got sick on day one of vacation. Seen, diagnosed, and medicated in 45 minutes. Back to the beach by afternoon. Eternally grateful for this clinic.',
  },
  {
    name: 'Leilani K.',
    location: 'Manoa, HI',
    type: 'Local',
    service: 'Urgent Care',
    rating: 5,
    text: 'No appointment, no long wait, and the doctor was thorough and kind. Prescription filled on-site. This is what healthcare should feel like — personal, fast, and honest.',
  },
  {
    name: 'Brian C.',
    location: 'Kaimuki, HI',
    type: 'Local',
    service: 'Weight Loss',
    rating: 5,
    text: 'Started the weight loss program here and have lost 18 lbs in 3 months. The physician checks in regularly. Finally a clinic that cares about outcomes, not just appointments.',
  },
  {
    name: 'Sarah W.',
    location: 'Visiting — Austin, TX',
    type: 'Visitor',
    service: 'Urgent Care',
    rating: 5,
    text: 'Came in with a bad sinus infection on a Saturday evening. Open, fast, and the doctor was wonderful. Had medicine in hand before noon. Highly recommend to anyone in Waikiki.',
  },
  {
    name: 'Jonah R.',
    location: 'Pearl City, HI',
    type: 'Local',
    service: 'Urgent Care',
    rating: 5,
    text: 'Avoided a $4,000 ER bill by coming here instead. Same quality of care in a fraction of the time. Transparent pricing made all the difference for my family.',
  },
  {
    name: 'Michelle H.',
    location: 'Visiting — Vancouver, BC',
    type: 'International',
    service: 'Lab Testing',
    rating: 5,
    text: 'Needed urgent lab work done while traveling. In and out in under 30 minutes with results sent directly to me. Professional, modern, and incredibly efficient.',
  },
  {
    name: 'Rafael D.',
    location: 'Visiting — Sao Paulo, Brazil',
    type: 'International',
    service: 'Urgent Care',
    rating: 5,
    text: 'As an international visitor I was nervous about healthcare. The team was patient, translated everything clearly, and treated me like a valued patient. Outstanding experience.',
  },
  {
    name: 'Noelani P.',
    location: 'Kapolei, HI',
    type: 'Local',
    service: 'Pain Management',
    rating: 5,
    text: 'Been managing my chronic back pain here for 6 months. Dr. Yang designed a real treatment plan — not just a prescription. My quality of life has genuinely improved.',
  },
  {
    name: 'Tyler B.',
    location: 'Visiting — Denver, CO',
    type: 'Visitor',
    service: 'IV Therapy',
    rating: 5,
    text: 'Got hit with food poisoning on my second day. IV drip had me feeling human again within an hour. The staff was kind and genuinely caring. Saved my entire trip.',
  },
  {
    name: 'Yuki T.',
    location: 'Visiting — Osaka, Japan',
    type: 'International',
    service: 'Urgent Care',
    rating: 5,
    text: 'The clinic was clean, modern, and the doctor was thorough. Everything was explained step by step. I cannot recommend this place enough for international visitors.',
  },
]

const categories = ['All', 'Local', 'Visitor', 'International']
const serviceFilters = ['All Services', 'Urgent Care', 'IV Therapy', 'Wound Care', 'Lab Testing', 'Weight Loss', 'Pain Management']

const stats = [
  { value: '4.9', label: 'Average Rating', sub: 'Across all platforms' },
  { value: '500+', label: 'Patients Served', sub: 'Locals & visitors' },
  { value: '30+', label: 'Countries', sub: 'International visitors' },
  { value: '100%', label: 'Recommend Us', sub: 'Based on reviews' },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-[#d52128] fill-[#d52128]" aria-hidden="true" />
      ))}
    </div>
  )
}

function TestimonialCard({
  name,
  location,
  type,
  service,
  rating,
  text,
  featured = false,
}: (typeof allTestimonials)[0] & { featured?: boolean }) {
  return (
    <article
      className={`flex flex-col gap-5 border rounded-sm p-7 transition-all duration-300 hover:border-[#d52128]/40 group ${
        featured
          ? 'bg-[#d52128] border-[#d52128]'
          : 'bg-white border-black/10 hover:shadow-md'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <StarRow count={rating} />
        <Quote
          size={20}
          className={`shrink-0 ${featured ? 'text-white/30' : 'text-[#d52128]/20'}`}
          aria-hidden="true"
        />
      </div>
      <p
        className={`text-sm leading-relaxed flex-1 ${
          featured ? 'text-white' : 'text-black'
        }`}
      >
        &ldquo;{text}&rdquo;
      </p>
      <div
        className={`flex items-end justify-between gap-3 pt-4 border-t ${
          featured ? 'border-white/20' : 'border-black/10'
        }`}
      >
        <div>
          <p className={`font-bold text-sm ${featured ? 'text-white' : 'text-black'}`}>
            {name}
          </p>
          <p
            className={`text-xs mt-0.5 font-[family-name:var(--font-inter)] ${
              featured ? 'text-white/70' : 'text-black/60'
            }`}
          >
            {location}
          </p>
        </div>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-sm font-[family-name:var(--font-inter)] shrink-0 ${
            featured
              ? 'bg-white/15 text-white'
              : 'bg-[#d52128]/10 text-[#d52128]'
          }`}
        >
          {service}
        </span>
      </div>
    </article>
  )
}

export default function TestimonialsPageClient() {
  const [search, setSearch] = useState('')
  const [activeType, setActiveType] = useState('All')
  const [activeService, setActiveService] = useState('All Services')
  const [serviceOpen, setServiceOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiceOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const filtered = allTestimonials.filter((t) => {
    const matchType = activeType === 'All' || t.type === activeType
    const matchService = activeService === 'All Services' || t.service === activeService
    const matchSearch =
      search.trim() === '' ||
      t.text.toLowerCase().includes(search.toLowerCase()) ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.location.toLowerCase().includes(search.toLowerCase())
    return matchType && matchService && matchSearch
  })

  const featured = allTestimonials[2]
  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-white pt-36 pb-20 relative overflow-hidden border-b border-black/10">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(213,33,40,0.05) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
            Patient Stories
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h1
              className="text-black font-black text-balance max-w-2xl"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.08 }}
            >
              Real Patients,{' '}
              <span className="text-[#d52128]">Real Results</span>
            </h1>
            <p className="text-black text-base max-w-sm lg:text-right leading-relaxed font-[family-name:var(--font-inter)]">
              Locals, visitors, and international travelers who trusted us with their health when it mattered most.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="text-[#d52128] font-black"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1 }}
              >
                {s.value}
              </p>
              <p className="text-black font-semibold text-sm mt-1">{s.label}</p>
              <p className="text-black text-xs mt-0.5 font-[family-name:var(--font-inter)]">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured quote */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-[#d52128] rounded-sm p-10 lg:p-14 relative overflow-hidden">
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-10"
            style={{ background: 'radial-gradient(ellipse at right center, white 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <Quote size={48} className="text-white/20 mb-6" aria-hidden="true" />
          <blockquote className="text-white font-black text-balance max-w-3xl mb-8"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.35 }}>
            &ldquo;{featured.text}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-white font-bold">{featured.name}</p>
              <p className="text-white/70 text-sm font-[family-name:var(--font-inter)]">{featured.location} &mdash; {featured.service}</p>
            </div>
            <div className="ml-2">
              <StarRow count={featured.rating} />
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Search bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-y border-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/30 pointer-events-none" aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisibleCount(9) }}
              placeholder="Search reviews..."
              className="w-full bg-black/5 border border-black/10 text-black placeholder-black/40 text-sm pl-9 pr-4 py-2.5 rounded-sm focus:outline-none focus:border-[#d52128]/50 font-[family-name:var(--font-inter)]"
              aria-label="Search testimonials"
            />
          </div>

          {/* Type filters */}
          <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Filter by patient type">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveType(cat); setVisibleCount(9) }}
                className={`text-xs font-semibold px-4 py-2.5 rounded-sm transition-all font-[family-name:var(--font-inter)] whitespace-nowrap ${
                  activeType === cat
                    ? 'bg-[#d52128] text-white'
                    : 'bg-black/5 text-black/60 hover:text-black border border-black/10 hover:border-black/20'
                }`}
                aria-pressed={activeType === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex items-center gap-2 bg-black/5 border border-black/10 hover:border-black/25 text-black/60 hover:text-black text-xs font-semibold px-4 py-2.5 rounded-sm transition-all font-[family-name:var(--font-inter)] whitespace-nowrap"
              aria-haspopup="listbox"
              aria-expanded={serviceOpen}
            >
              {activeService}
              <ChevronDown size={13} className={`transition-transform ${serviceOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {serviceOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-black/10 rounded-sm shadow-2xl z-50 overflow-hidden" role="listbox">
                {serviceFilters.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setActiveService(s); setServiceOpen(false); setVisibleCount(9) }}
                    className={`w-full text-left text-xs px-4 py-3 transition-colors font-[family-name:var(--font-inter)] ${
                      activeService === s
                        ? 'bg-[#d52128]/10 text-[#d52128] font-semibold'
                        : 'text-black/60 hover:bg-black/5 hover:text-black'
                    }`}
                    role="option"
                    aria-selected={activeService === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results count */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-2">
        <p className="text-black/40 text-xs font-[family-name:var(--font-inter)] uppercase tracking-widest">
          {filtered.length} {filtered.length === 1 ? 'review' : 'reviews'} found
        </p>
      </div>

      {/* Cards grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-black/40 text-lg font-semibold mb-3">No reviews found</p>
            <p className="text-black/30 text-sm font-[family-name:var(--font-inter)] mb-8">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => { setSearch(''); setActiveType('All'); setActiveService('All Services'); setVisibleCount(9) }}
              className="bg-[#d52128] text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#b91b21] transition-colors font-[family-name:var(--font-inter)]"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((t, i) => (
                <TestimonialCard key={`${t.name}-${i}`} {...t} featured={i === 0 && activeType === 'All' && activeService === 'All Services' && search === ''} />
              ))}
            </div>

            {hasMore && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setVisibleCount((c) => c + 6)}
                  className="group inline-flex items-center gap-2 bg-black/5 hover:bg-black/10 border border-black/10 hover:border-black/20 text-black/70 hover:text-black text-sm font-semibold px-8 py-3.5 rounded-sm transition-all font-[family-name:var(--font-inter)]"
                >
                  Load More Reviews
                  <ChevronDown size={15} className="group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
                </button>
                <p className="text-black/30 text-xs mt-3 font-[family-name:var(--font-inter)]">
                  Showing {visible.length} of {filtered.length}
                </p>
              </div>
            )}
          </>
        )}
      </section>

      {/* CTA strip */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-black rounded-sm px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <p className="text-[#d52128] text-xs font-bold uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]">
              Join Our Patients
            </p>
            <h2
              className="text-white font-black text-balance"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.15 }}
            >
              Ready to Experience the <span className="text-[#d52128]">Difference</span>?
            </h2>
            <p className="text-white/60 text-sm mt-3 font-[family-name:var(--font-inter)]">
              Walk in or book your visit — no referrals, no long waits, no confusion.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="/#contact"
              className="bg-[#d52128] hover:bg-[#b91b21] text-white font-bold text-sm px-8 py-4 rounded-sm transition-colors font-[family-name:var(--font-inter)] whitespace-nowrap"
            >
              Book Your Visit
            </a>
            <a
              href="/services"
              className="bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm px-8 py-4 rounded-sm transition-all font-[family-name:var(--font-inter)] whitespace-nowrap"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
