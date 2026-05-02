import Image from 'next/image'
import { ArrowUpRight, Clock, Calendar } from 'lucide-react'
import type { Article } from '@/lib/blog-data'

interface ArticleCardProps {
  article: Article
  variant?: 'featured' | 'standard' | 'compact'
}

export default function ArticleCard({ article, variant = 'standard' }: ArticleCardProps) {
  if (variant === 'featured') {
    return (
      <article className="group relative overflow-hidden rounded-sm bg-[#6ba6c5] cursor-pointer col-span-full lg:col-span-2">
        <div className="relative h-[420px] lg:h-[500px] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6ba6c5] via-[#6ba6c5]/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#d52128] text-[#fff8ed] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest font-[family-name:var(--font-inter)]">
              {article.category}
            </span>
            <span className="text-[#fff8ed]/50 text-xs font-[family-name:var(--font-inter)] flex items-center gap-1.5">
              <Clock size={12} />
              {article.readTime}
            </span>
          </div>
          <h2 className="text-[#fff8ed] text-2xl lg:text-3xl font-bold leading-tight mb-3 text-balance group-hover:text-[#fff8ed]/90 transition-colors">
            {article.title}
          </h2>
          <p className="text-[#fff8ed]/60 text-sm leading-relaxed mb-5 max-w-xl line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#fff8ed]/40 text-xs font-[family-name:var(--font-inter)]">
              <Calendar size={12} />
              <span>{article.date}</span>
            </div>
            <span className="flex items-center gap-1.5 text-[#d52128] text-sm font-semibold font-[family-name:var(--font-inter)] group-hover:gap-2.5 transition-all">
              Read Article <ArrowUpRight size={15} />
            </span>
          </div>
        </div>
      </article>
    )
  }

  if (variant === 'compact') {
    return (
      <article className="group flex gap-4 items-start cursor-pointer py-4 border-b border-[#6ba6c5]/8 last:border-0">
        <div className="relative w-20 h-20 rounded-sm overflow-hidden shrink-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[#d52128] text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-inter)]">
            {article.category}
          </span>
          <h3 className="text-[#6ba6c5] text-sm font-bold leading-snug mt-1 mb-1.5 line-clamp-2 group-hover:text-[#d52128] transition-colors">
            {article.title}
          </h3>
          <span className="text-[#5a5a6e] text-xs font-[family-name:var(--font-inter)] flex items-center gap-1">
            <Clock size={11} />
            {article.readTime}
          </span>
        </div>
      </article>
    )
  }

  return (
    <article className="group cursor-pointer bg-white rounded-sm overflow-hidden border border-[#e8d9c8] hover:border-[#d52128]/30 hover:shadow-lg hover:shadow-[#d52128]/8 transition-all duration-300">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-600 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6ba6c5]/40 to-transparent" />
        <span className="absolute top-4 left-4 bg-[#d52128] text-[#fff8ed] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest font-[family-name:var(--font-inter)]">
          {article.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-[#6ba6c5] font-bold text-base leading-snug mb-2 text-balance group-hover:text-[#d52128] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-[#5a5a6e] text-sm leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-[#e8d9c8]">
          <div className="flex items-center gap-3 text-[#5a5a6e] text-xs font-[family-name:var(--font-inter)]">
            <span className="flex items-center gap-1"><Clock size={11} />{article.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-[#e8d9c8]" aria-hidden="true" />
            <span className="flex items-center gap-1"><Calendar size={11} />{article.date}</span>
          </div>
          <ArrowUpRight
            size={16}
            className="text-[#d52128] opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </article>
  )
}
