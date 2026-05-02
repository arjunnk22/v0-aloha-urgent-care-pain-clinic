'use client'

import { useState, useMemo } from 'react'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import { articles, categories } from '@/lib/blog-data'
import ArticleCard from './article-card'

export default function BlogPageClient() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = activeCategory === 'All' || a.category === activeCategory
      const q = query.toLowerCase().trim()
      const matchesSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [query, activeCategory])

  const featured = filtered.find((a) => a.featured)
  const rest = filtered.filter((a) => !a.featured)
  const sidebarPicks = articles.filter((a) => !a.featured).slice(0, 4)

  return (
    <div className="bg-[#fff8ed] min-h-screen">
      {/* Page Hero */}
      <section className="bg-[#6ba6c5] pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden">
        {/* Background image — very subtle */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
          style={{
            backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/cA4uONRZXrwCOsHviQQtJ-7q5CaLYi3FhIW5kpAxLdJ6NyFTBgEW.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            opacity: 0.08,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
                Health Resources
              </span>
              <h1 className="text-[#0d2d3a] text-4xl lg:text-6xl font-black leading-tight text-balance">
                The Aloha<br />
                <span className="text-[#d52128]">Health Blog</span>
              </h1>
            </div>
            <p className="text-[#0d2d3a]/55 text-base leading-relaxed max-w-md font-[family-name:var(--font-inter)]">
              Physician-written guides on urgent care, pain management, preventive health, and everything in between — designed for locals and visitors alike.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Search + Filter Bar */}
      <div className="sticky top-20 z-40 bg-[#fff8ed] border-b border-[#e8d9c8] shadow-sm shadow-[#6ba6c5]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5a5a6e]" />
            <input
              type="search"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#e8d9c8] rounded-sm text-sm text-[#6ba6c5] placeholder:text-[#5a5a6e]/60 focus:outline-none focus:border-[#d52128] focus:ring-1 focus:ring-[#d52128]/20 font-[family-name:var(--font-inter)] transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a5a6e] hover:text-[#6ba6c5]"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-[#e8d9c8]" aria-hidden="true" />

          {/* Categories */}
          <div className="flex items-center gap-1 overflow-x-auto pb-0.5 sm:pb-0 scrollbar-none" role="tablist" aria-label="Filter by category">
            <SlidersHorizontal size={14} className="text-[#5a5a6e] shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-3.5 py-1.5 rounded-sm text-xs font-semibold transition-all font-[family-name:var(--font-inter)] whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#d52128] text-[#fff8ed]'
                    : 'text-[#5a5a6e] hover:text-[#6ba6c5] hover:bg-[#e8d9c8]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-16 h-16 rounded-full bg-[#e8d9c8] flex items-center justify-center mb-6">
              <Search size={24} className="text-[#5a5a6e]" />
            </div>
            <h2 className="text-[#6ba6c5] text-xl font-bold mb-2">No articles found</h2>
            <p className="text-[#5a5a6e] text-sm font-[family-name:var(--font-inter)] mb-6">
              Try a different search term or select another category.
            </p>
            <button
              onClick={() => { setQuery(''); setActiveCategory('All') }}
              className="bg-[#d52128] text-[#fff8ed] px-6 py-2.5 rounded-sm text-sm font-semibold font-[family-name:var(--font-inter)] hover:bg-[#b91b21] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article Area */}
            <div className="flex-1 min-w-0">
              {/* Result count */}
              <p className="text-[#5a5a6e] text-xs font-[family-name:var(--font-inter)] mb-6">
                Showing <span className="text-[#6ba6c5] font-bold">{filtered.length}</span> article{filtered.length !== 1 ? 's' : ''}
                {activeCategory !== 'All' && (
                  <> in <span className="text-[#d52128] font-bold">{activeCategory}</span></>
                )}
                {query && (
                  <> matching <span className="text-[#d52128] font-bold">&ldquo;{query}&rdquo;</span></>
                )}
              </p>

              {/* Featured article */}
              {featured && (
                <div className="grid grid-cols-1 mb-8">
                  <ArticleCard article={featured} variant="featured" />
                </div>
              )}

              {/* Rest of articles */}
              {rest.length > 0 && (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {rest.map((article) => (
                    <ArticleCard key={article.slug} article={article} variant="standard" />
                  ))}
                </div>
              )}

              {/* No featured but has results */}
              {!featured && rest.length > 0 && (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {rest.map((article) => (
                    <ArticleCard key={article.slug} article={article} variant="standard" />
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0 space-y-8">
              {/* Latest reads */}
              <div className="bg-white border border-[#e8d9c8] rounded-sm p-6">
                <h2 className="text-[#6ba6c5] font-black text-sm uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
                  Latest Reads
                </h2>
                <div>
                  {sidebarPicks.map((article) => (
                    <ArticleCard key={article.slug} article={article} variant="compact" />
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-[#6ba6c5] rounded-sm p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d52128]/15 rounded-full -translate-y-8 translate-x-8 blur-2xl" aria-hidden="true" />
                <span className="text-[#d52128] text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-inter)] block mb-3">
                  Ready to be seen?
                </span>
                <h3 className="text-[#fff8ed] font-black text-xl leading-tight mb-3 text-balance">
                  Skip the wait. Walk in today.
                </h3>
                <p className="text-[#fff8ed]/50 text-sm leading-relaxed mb-6 font-[family-name:var(--font-inter)]">
                  Physician-led care at International Market Place, Level 2, Waikiki.
                </p>
                <a
                  href="/#contact"
                  className="block bg-[#d52128] hover:bg-[#b91b21] text-[#fff8ed] text-sm font-bold py-3 px-6 rounded-sm text-center transition-colors font-[family-name:var(--font-inter)]"
                >
                  Book Now
                </a>
                <div className="mt-4 pt-4 border-t border-[#fff8ed]/10 flex flex-col gap-1">
                  <p className="text-[#fff8ed]/30 text-xs font-[family-name:var(--font-inter)]">Mon–Thurs, Sat: 9:30 AM – 11:00 PM</p>
                  <p className="text-[#fff8ed]/30 text-xs font-[family-name:var(--font-inter)]">Fri: 4:30 PM – 11:00 PM &nbsp;·&nbsp; Sun: Closed</p>
                </div>
              </div>

              {/* Categories cloud */}
              <div className="bg-white border border-[#e8d9c8] rounded-sm p-6">
                <h2 className="text-[#6ba6c5] font-black text-sm uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
                  Browse by Topic
                </h2>
                <div className="flex flex-wrap gap-2">
                  {categories.filter((c) => c !== 'All').map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                      className={`px-3 py-1.5 rounded-sm text-xs font-semibold border transition-all font-[family-name:var(--font-inter)] ${
                        activeCategory === cat
                          ? 'bg-[#d52128] text-[#fff8ed] border-[#d52128]'
                          : 'border-[#e8d9c8] text-[#5a5a6e] hover:border-[#d52128] hover:text-[#d52128]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  )
}
