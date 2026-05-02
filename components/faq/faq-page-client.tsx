'use client'

import { useState, useMemo, useRef } from 'react'
import { Search, X, Plus, Minus, Phone, ChevronRight } from 'lucide-react'
import { faqs, faqCategories } from '@/lib/faq-data'

export default function FaqPageClient() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [openId, setOpenId] = useState<string | null>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchesCategory = activeCategory === 'All' || f.category === activeCategory
      const q = query.toLowerCase().trim()
      const matchesSearch =
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [query, activeCategory])

  const grouped = useMemo(() => {
    const map: Record<string, typeof filtered> = {}
    filtered.forEach((f) => {
      if (!map[f.category]) map[f.category] = []
      map[f.category].push(f)
    })
    return map
  }, [filtered])

  const groupKeys = Object.keys(grouped)

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  const reset = () => {
    setQuery('')
    setActiveCategory('All')
    setOpenId(null)
  }

  return (
    <div className="bg-[#fff8ed] min-h-screen">

      {/* Hero */}
      <section className="bg-[#6ba6c5] pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, #d52128 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
            Help Center
          </span>
          <h1 className="text-[#fff8ed] text-4xl lg:text-6xl font-black leading-tight text-balance mb-6">
            Frequently Asked{' '}
            <span className="text-[#d52128]">Questions</span>
          </h1>
          <p className="text-[#fff8ed]/50 text-base leading-relaxed max-w-xl mx-auto mb-10 font-[family-name:var(--font-inter)]">
            Everything you need to know about our clinic, services, pricing, and how we can help. Can&apos;t find your answer? Give us a call.
          </p>

          {/* Hero Search */}
          <div className="relative max-w-lg mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fff8ed]/40 pointer-events-none" />
            <input
              ref={searchRef}
              type="search"
              placeholder="Search questions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-[#fff8ed]/8 border border-[#fff8ed]/15 rounded-sm text-[#fff8ed] placeholder:text-[#fff8ed]/35 focus:outline-none focus:border-[#d52128] focus:bg-[#fff8ed]/10 text-sm font-[family-name:var(--font-inter)] transition-all"
              aria-label="Search frequently asked questions"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#fff8ed]/40 hover:text-[#fff8ed] transition-colors"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Bar */}
      <div className="sticky top-20 z-40 bg-[#fff8ed] border-b border-[#e8d9c8] shadow-sm shadow-[#6ba6c5]/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-3">
          <div
            className="flex items-center gap-1.5 overflow-x-auto scrollbar-none"
            role="tablist"
            aria-label="Filter by category"
          >
            {faqCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-sm text-xs font-semibold transition-all font-[family-name:var(--font-inter)] whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#d52128] text-[#fff8ed]'
                    : 'text-[#5a5a6e] hover:text-[#6ba6c5] hover:bg-[#e8d9c8]/60'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className={`ml-1.5 text-[10px] font-bold ${activeCategory === cat ? 'text-[#fff8ed]/60' : 'text-[#5a5a6e]/50'}`}>
                    {faqs.filter((f) => f.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Accordion Area */}
          <div className="flex-1 min-w-0">

            {/* Result count */}
            {(query || activeCategory !== 'All') && (
              <div className="flex items-center justify-between mb-8">
                <p className="text-[#5a5a6e] text-sm font-[family-name:var(--font-inter)]">
                  <span className="text-[#6ba6c5] font-bold">{filtered.length}</span> result{filtered.length !== 1 ? 's' : ''}
                  {activeCategory !== 'All' && (
                    <> in <span className="text-[#d52128] font-bold">{activeCategory}</span></>
                  )}
                  {query && (
                    <> matching <span className="text-[#d52128] font-bold">&ldquo;{query}&rdquo;</span></>
                  )}
                </p>
                <button
                  onClick={reset}
                  className="text-xs font-semibold text-[#5a5a6e] hover:text-[#d52128] font-[family-name:var(--font-inter)] transition-colors flex items-center gap-1"
                >
                  <X size={12} />
                  Clear
                </button>
              </div>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 rounded-full bg-[#e8d9c8] flex items-center justify-center mb-6">
                  <Search size={22} className="text-[#5a5a6e]" />
                </div>
                <h2 className="text-[#6ba6c5] text-lg font-bold mb-2">No questions found</h2>
                <p className="text-[#5a5a6e] text-sm font-[family-name:var(--font-inter)] mb-6 max-w-xs">
                  Try a different search term or browse another category.
                </p>
                <button
                  onClick={reset}
                  className="bg-[#d52128] text-[#fff8ed] px-6 py-2.5 rounded-sm text-sm font-semibold font-[family-name:var(--font-inter)] hover:bg-[#b91b21] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Grouped accordions */}
            {groupKeys.length > 0 && (
              <div className="flex flex-col gap-12">
                {groupKeys.map((cat) => (
                  <section key={cat} aria-labelledby={`cat-${cat}`}>
                    {/* Category heading — only show in "All" view or when there is 1+ category */}
                    {(activeCategory === 'All' || groupKeys.length > 1) && (
                      <div className="flex items-center gap-4 mb-6">
                        <h2
                          id={`cat-${cat}`}
                          className="text-[#6ba6c5] text-xs font-black uppercase tracking-widest font-[family-name:var(--font-inter)] shrink-0"
                        >
                          {cat}
                        </h2>
                        <div className="h-px flex-1 bg-[#e8d9c8]" aria-hidden="true" />
                        <span className="text-[#5a5a6e]/60 text-xs font-[family-name:var(--font-inter)] shrink-0">
                          {grouped[cat].length} question{grouped[cat].length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col divide-y divide-[#e8d9c8] border border-[#e8d9c8] rounded-sm overflow-hidden bg-white">
                      {grouped[cat].map((faq, idx) => {
                        const isOpen = openId === faq.id
                        return (
                          <div key={faq.id}>
                            <button
                              onClick={() => toggle(faq.id)}
                              aria-expanded={isOpen}
                              aria-controls={`answer-${faq.id}`}
                              className={`w-full flex items-start gap-4 px-6 py-5 text-left transition-colors group ${
                                isOpen ? 'bg-[#6ba6c5]' : 'hover:bg-[#fff8ed]/60'
                              }`}
                            >
                              <span
                                className={`shrink-0 text-xs font-black font-[family-name:var(--font-inter)] w-5 mt-0.5 ${
                                  isOpen ? 'text-[#d52128]' : 'text-[#d52128]/40'
                                }`}
                                aria-hidden="true"
                              >
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              <span
                                className={`flex-1 text-sm font-semibold leading-snug transition-colors ${
                                  isOpen ? 'text-[#fff8ed]' : 'text-[#6ba6c5] group-hover:text-[#6ba6c5]'
                                }`}
                              >
                                {faq.question}
                              </span>
                              <span
                                className={`shrink-0 w-6 h-6 rounded-sm flex items-center justify-center transition-all mt-0.5 ${
                                  isOpen
                                    ? 'bg-[#d52128] text-[#fff8ed]'
                                    : 'bg-[#e8d9c8] text-[#5a5a6e] group-hover:bg-[#d52128]/10 group-hover:text-[#d52128]'
                                }`}
                                aria-hidden="true"
                              >
                                {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                              </span>
                            </button>

                            <div
                              id={`answer-${faq.id}`}
                              role="region"
                              aria-labelledby={`question-${faq.id}`}
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                              }`}
                            >
                              <div className="px-6 pb-6 pt-4 bg-[#fff8ed]/60 border-t border-[#e8d9c8]">
                                <p className="text-[#5a5a6e] text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 space-y-6 lg:pt-0">

            {/* Still have questions */}
            <div className="bg-[#6ba6c5] rounded-sm p-7 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-[#d52128]/15 rounded-full -translate-y-8 translate-x-8 blur-2xl"
                aria-hidden="true"
              />
              <span className="text-[#d52128] text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-inter)] block mb-3">
                Still have questions?
              </span>
              <h3 className="text-[#fff8ed] font-black text-lg leading-snug mb-3 text-balance">
                Talk to our team directly
              </h3>
              <p className="text-[#fff8ed]/45 text-sm leading-relaxed mb-6 font-[family-name:var(--font-inter)]">
                Our front desk is available during operating hours. Give us a call or book a visit and we&apos;ll answer any questions in person.
              </p>
              <a
                href="tel:+18083426305"
                className="flex items-center justify-center gap-2 bg-[#d52128] hover:bg-[#b91b21] text-[#fff8ed] text-sm font-bold py-3 px-6 rounded-sm transition-colors font-[family-name:var(--font-inter)] mb-3"
              >
                <Phone size={14} />
                (808) 342-6305
              </a>
              <a
                href="/#contact"
                className="flex items-center justify-center gap-2 border border-[#fff8ed]/15 hover:border-[#fff8ed]/30 text-[#fff8ed]/70 hover:text-[#fff8ed] text-sm font-semibold py-3 px-6 rounded-sm transition-all font-[family-name:var(--font-inter)]"
              >
                Book a Visit
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Quick category jump */}
            <div className="bg-white border border-[#e8d9c8] rounded-sm p-6">
              <h3 className="text-[#6ba6c5] font-black text-xs uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
                Browse by Category
              </h3>
              <nav className="flex flex-col gap-1" aria-label="FAQ categories">
                {faqCategories.filter((c) => c !== 'All').map((cat) => {
                  const count = faqs.filter((f) => f.category === cat).length
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between w-full text-left px-3 py-2.5 rounded-sm text-sm transition-all font-[family-name:var(--font-inter)] ${
                        activeCategory === cat
                          ? 'bg-[#d52128]/8 text-[#d52128] font-semibold'
                          : 'text-[#5a5a6e] hover:text-[#6ba6c5] hover:bg-[#fff8ed]'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-xs font-bold ${
                          activeCategory === cat ? 'text-[#d52128]/60' : 'text-[#5a5a6e]/40'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Hours reminder */}
            <div className="bg-white border border-[#e8d9c8] rounded-sm p-6">
              <h3 className="text-[#6ba6c5] font-black text-xs uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
                Hours of Operation
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#5a5a6e] text-xs font-[family-name:var(--font-inter)]">Mon – Thurs, Sat</span>
                  <span className="text-[#6ba6c5] text-xs font-semibold font-[family-name:var(--font-inter)]">9:30 AM – 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#5a5a6e] text-xs font-[family-name:var(--font-inter)]">Friday</span>
                  <span className="text-[#6ba6c5] text-xs font-semibold font-[family-name:var(--font-inter)]">4:30 PM – 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#5a5a6e] text-xs font-[family-name:var(--font-inter)]">Sunday</span>
                  <span className="text-[#d52128] text-xs font-bold font-[family-name:var(--font-inter)]">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[#e8d9c8]">
                <p className="text-[#5a5a6e] text-xs font-[family-name:var(--font-inter)] leading-relaxed">
                  International Market Place, Level 2<br />
                  Waikiki, Honolulu, HI
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
