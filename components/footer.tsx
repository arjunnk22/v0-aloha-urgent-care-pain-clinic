import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const services = [
  'Urgent Care Visits',
  'Lab Testing',
  'Minor Procedures',
  'Pain Management',
  'IV Therapy',
  'Wound Care',
  'Respiratory Treatments',
  'On-Site Medications',
  'Weight Loss Programs',
  'Advanced Treatments',
]

const quickLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" aria-label="Aloha Urgent Care Home" className="flex items-center gap-2 mb-5">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aloha%20Urgent%20Care%20Social%20Logos-QMARwRjkpaGnxYjPhnAa8kg4lF55YA.png"
                alt=""
                aria-hidden="true"
                className="w-14 h-auto shrink-0"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/kDkGSIGVaDqgM66OUvpuw-Kgy6eBKlvfHemyaiYAuT7yhOPpmNF8.png"
                alt="Aloha Urgent Care & Pain Clinic"
                width={150}
                height={48}
                className="h-11 w-auto object-contain"
              />
            </a>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-black text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-inter)]">
                Elevate Your Health
              </span>
            </div>
            <p className="text-black text-sm leading-relaxed mb-6">
              A modern, direct-pay medical clinic in Waikiki — fast, transparent, and
              physician-led care for locals, visitors, and families of all ages.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61574698695230"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aloha Urgent Care on Facebook"
                className="w-9 h-9 border border-black/15 hover:border-[#d52128] hover:bg-[#d52128]/10 rounded-sm flex items-center justify-center transition-all"
              >
                <Facebook size={16} className="text-black/60 hover:text-black" />
              </a>
              <a
                href="https://www.instagram.com/aloha.urgent.care/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aloha Urgent Care on Instagram"
                className="w-9 h-9 border border-black/15 hover:border-[#d52128] hover:bg-[#d52128]/10 rounded-sm flex items-center justify-center transition-all"
              >
                <Instagram size={16} className="text-black/60 hover:text-black" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-black font-bold text-xs uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-black hover:text-[#d52128] text-sm transition-colors font-[family-name:var(--font-inter)]"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-xs uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-black hover:text-[#d52128] text-sm transition-colors font-[family-name:var(--font-inter)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-xs uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
              Contact & Hours
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+18083426305"
                className="flex items-start gap-3 group"
                aria-label="Call us"
              >
                <Phone size={15} className="text-[#d52128] mt-0.5 shrink-0" />
                <span className="text-black group-hover:text-[#d52128] text-sm transition-colors font-[family-name:var(--font-inter)]">
                  (808) 342-6305
                </span>
              </a>
              <a
                href="mailto:gabriella+auc@essence-marketing.design"
                className="flex items-start gap-3 group"
                aria-label="Email us"
              >
                <Mail size={15} className="text-[#d52128] mt-0.5 shrink-0" />
                <span className="text-black group-hover:text-[#d52128] text-sm transition-colors font-[family-name:var(--font-inter)]">
                  Email Us
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#d52128] mt-0.5 shrink-0" />
                <span className="text-black text-sm font-[family-name:var(--font-inter)]">
                  International Market Place, Level 2<br />
                  Waikiki, Honolulu, HI
                </span>
              </div>
              <div className="mt-2 bg-black/5 rounded-sm p-4 border border-black/10">
                <p className="text-black font-semibold text-xs mb-3 font-[family-name:var(--font-inter)]">
                  Open Hours
                </p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between gap-4">
                    <p className="text-black text-xs font-[family-name:var(--font-inter)]">Mon – Thurs, Sat</p>
                    <p className="text-black text-xs font-semibold font-[family-name:var(--font-inter)]">9:30 AM – 11:00 PM</p>
                  </div>
                  <div className="flex justify-between gap-4">
                    <p className="text-black text-xs font-[family-name:var(--font-inter)]">Friday</p>
                    <p className="text-black text-xs font-semibold font-[family-name:var(--font-inter)]">4:30 PM – 11:00 PM</p>
                  </div>
                  <div className="flex justify-between gap-4">
                    <p className="text-black text-xs font-[family-name:var(--font-inter)]">Sunday</p>
                    <p className="text-[#d52128] text-xs font-bold font-[family-name:var(--font-inter)]">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-black text-xs font-[family-name:var(--font-inter)]">
            &copy; {year} <span className="text-[#d52128] font-[family-name:var(--font-quicksand)] font-bold">Aloha Urgent Care &amp; Pain Clinic</span>. All rights reserved.
          </p>
          <p className="text-black/60 text-xs font-[family-name:var(--font-inter)]">
            Designed &amp; developed by{' '}
            <a
              href="https://varakit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#d52128] transition-colors"
            >
              varakit.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
