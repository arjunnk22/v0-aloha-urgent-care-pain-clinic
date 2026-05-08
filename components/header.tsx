'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/8'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-3 shrink-0" aria-label="Aloha Urgent Care Home">
          {/* Hand-heart logo icon */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/F91CcJU9toaa1iV82D7dH-MscWNGIt4RPhR754PLoxdPaZ4Bqgg6.png"
            alt=""
            aria-hidden="true"
            width={36}
            height={36}
            className="h-9 w-auto object-contain shrink-0"
            priority
          />
          {/* Main wordmark logo */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/kDkGSIGVaDqgM66OUvpuw-Kgy6eBKlvfHemyaiYAuT7yhOPpmNF8.png"
            alt="Aloha Urgent Care & Pain Clinic Logo"
            width={200}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-black hover:text-[#d52128] text-sm font-medium font-[family-name:var(--font-inter)] tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18083426305"
            className="flex items-center gap-2 text-black hover:text-[#d52128] text-sm font-[family-name:var(--font-inter)] transition-colors"
            aria-label="Call us"
          >
            <Phone size={15} />
            <span>(808) 342-6305</span>
          </a>
          <a
            href="/#contact"
            className="bg-[#d52128] hover:bg-[#b91b21] text-white text-sm font-semibold px-6 py-2.5 rounded-sm transition-colors duration-200 font-[family-name:var(--font-inter)]"
          >
            Book Now
          </a>
        </div>

        <button
          className="lg:hidden text-black p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fadeIn">
          <nav className="flex flex-col px-6 py-6 gap-5" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-black hover:text-[#d52128] text-base font-medium font-[family-name:var(--font-inter)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="tel:+18083426305"
                className="flex items-center gap-2 text-black text-sm font-[family-name:var(--font-inter)]"
              >
                <Phone size={15} />
                (808) 342-6305
              </a>
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-[#d52128] text-white text-sm font-semibold px-6 py-3 rounded-sm text-center font-[family-name:var(--font-inter)]"
              >
                Book Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
