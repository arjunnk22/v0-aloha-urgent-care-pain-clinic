'use client'

import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Instagram,
} from 'lucide-react'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  reason: string
  message: string
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  reason: '',
  message: '',
}

const reasons = [
  'Urgent Care Visit',
  'Pain Management',
  'IV Therapy',
  'Lab Testing',
  'Wound Care',
  'Procedure',
  'Respiratory Treatment',
  'Weight Loss Program',
  'Advanced Medical Treatment',
  'Other',
]

export default function ContactPageClient() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('https://varakit.com/api/email/contact-forms', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          adminEmail: 'avatar0611@gmail.com',
          formData: form,
          userId: 'a0edf849-c0c9-4e91-9095-d51bb43b9d7a',
        }),
      })
      if (!res.ok) throw new Error('Submission failed. Please try again.')
      setStatus('success')
      setForm(initialForm)
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-white pt-36 pb-20 relative overflow-hidden border-b border-black/10">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 60%, #d52128 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
            Get In Touch
          </span>
          <h1
            className="text-black font-black text-balance max-w-2xl mb-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', lineHeight: 1.08 }}
          >
            Book Your Visit or{' '}
            <span className="text-[#d52128]">Ask Us Anything</span>
          </h1>
          <p className="text-black text-lg leading-relaxed max-w-xl">
            Walk-ins welcome — no appointment required. Or fill out the form below and
            our team will get back to you promptly.
          </p>

          {/* Quick contact pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="tel:+18083426305"
              className="flex items-center gap-2 bg-black/5 hover:bg-[#d52128] border border-black/10 hover:border-[#d52128] text-black hover:text-white text-sm px-5 py-2.5 rounded-sm transition-all duration-200 font-[family-name:var(--font-inter)]"
            >
              <Phone size={14} />
              (808) 342-6305
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574698695230"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/5 hover:bg-[#d52128] border border-black/10 hover:border-[#d52128] text-black hover:text-white text-sm px-5 py-2.5 rounded-sm transition-all duration-200 font-[family-name:var(--font-inter)]"
              aria-label="Facebook"
            >
              <Facebook size={14} />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/aloha.urgent.care/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/5 hover:bg-[#d52128] border border-black/10 hover:border-[#d52128] text-black hover:text-white text-sm px-5 py-2.5 rounded-sm transition-all duration-200 font-[family-name:var(--font-inter)]"
              aria-label="Instagram"
            >
              <Instagram size={14} />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Map + Info + Form */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">

            {/* Left column — Info + Map */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Contact details */}
              <div className="flex flex-col gap-6">
                <h2
                  className="text-black font-black"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.15 }}
                >
                  Find Us in <span className="text-[#d52128]">Waikiki</span>
                </h2>

                <a
                  href="tel:+18083426305"
                  className="flex items-center gap-4 group"
                  aria-label="Call Aloha Urgent Care"
                >
                  <div className="w-11 h-11 bg-[#d52128]/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-[#d52128] transition-colors">
                    <Phone size={17} className="text-[#d52128] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-black font-semibold text-sm">(808) 342-6305</p>
                    <p className="text-black text-xs font-[family-name:var(--font-inter)]">Call or text us anytime</p>
                  </div>
                </a>

                <a
                  href="mailto:gabriella+auc@essence-marketing.design"
                  className="flex items-center gap-4 group"
                  aria-label="Email Aloha Urgent Care"
                >
                  <div className="w-11 h-11 bg-[#d52128]/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-[#d52128] transition-colors">
                    <Mail size={17} className="text-[#d52128] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-black font-semibold text-sm">Send Us an Email</p>
                    <p className="text-black text-xs font-[family-name:var(--font-inter)]">We reply within a few hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#d52128]/10 rounded-sm flex items-center justify-center shrink-0">
                    <MapPin size={17} className="text-[#d52128]" />
                  </div>
                  <div>
                    <p className="text-black font-semibold text-sm">International Market Place, Level 2</p>
                    <p className="text-black text-xs font-[family-name:var(--font-inter)]">2330 Kalakaua Ave, Honolulu, HI 96815</p>
                    <a
                      href="https://maps.google.com/?q=International+Market+Place+2330+Kalakaua+Ave+Honolulu+HI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d52128] text-xs font-semibold mt-1 inline-block hover:underline font-[family-name:var(--font-inter)]"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#d52128]/10 rounded-sm flex items-center justify-center shrink-0">
                    <Clock size={17} className="text-[#d52128]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-black font-semibold text-sm">Hours of Operation</p>
                    <div className="flex justify-between gap-8">
                      <p className="text-black text-xs font-[family-name:var(--font-inter)]">Mon – Thurs, Sat</p>
                      <p className="text-black text-xs font-semibold font-[family-name:var(--font-inter)]">9:30 AM – 11:00 PM</p>
                    </div>
                    <div className="flex justify-between gap-8">
                      <p className="text-black text-xs font-[family-name:var(--font-inter)]">Friday</p>
                      <p className="text-black text-xs font-semibold font-[family-name:var(--font-inter)]">4:30 PM – 11:00 PM</p>
                    </div>
                    <div className="flex justify-between gap-8">
                      <p className="text-black text-xs font-[family-name:var(--font-inter)]">Sunday</p>
                      <p className="text-[#d52128] text-xs font-bold font-[family-name:var(--font-inter)]">Closed</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61574698695230"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aloha Urgent Care on Facebook"
                    className="w-10 h-10 border border-black/15 hover:border-[#d52128] hover:bg-[#d52128] rounded-sm flex items-center justify-center transition-all group"
                  >
                    <Facebook size={16} className="text-black/50 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/aloha.urgent.care/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aloha Urgent Care on Instagram"
                    className="w-10 h-10 border border-black/15 hover:border-[#d52128] hover:bg-[#d52128] rounded-sm flex items-center justify-center transition-all group"
                  >
                    <Instagram size={16} className="text-black/50 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-sm overflow-hidden border border-[#6ba6c5]/10 shadow-sm">
                <iframe
                  title="Aloha Urgent Care & Pain Clinic location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.178!2d-157.8296!3d21.2794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006df45f9ccef3%3A0xfe3fdbbac87d4b89!2sInternational%20Market%20Place!5e0!3m2!1sen!2sus!4v1716300000000!5m2!1sen!2sus"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Clinic photo */}
              <div className="rounded-sm overflow-hidden aspect-[16/9]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/LcVVoBucwlLhJnVfGErFO-wM3dazL62Arvyqv0aYpLEixdS6FJjU.jpg"
                  alt="Aloha Urgent Care & Pain Clinic storefront at International Market Place, Waikiki"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right column — Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#d52128] rounded-sm p-8 lg:p-12 sticky top-28">
                <div className="mb-8">
                  <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]">
                    Contact Form
                  </span>
                  <h2
                    className="text-[#fff8ed] font-black"
                    style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.15 }}
                  >
                    Book a Visit or Send a Message
                  </h2>
                  <p className="text-[#fff8ed]/45 text-sm mt-3 leading-relaxed font-[family-name:var(--font-inter)]">
                    Fill out the form below and our team will confirm your request within a few hours.
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                    <CheckCircle size={52} className="text-white" />
                    <h3 className="text-[#fff8ed] font-black text-2xl">Request Received!</h3>
                    <p className="text-[#fff8ed]/55 text-sm leading-relaxed max-w-sm font-[family-name:var(--font-inter)]">
                      Thank you for reaching out. Our team will confirm your appointment shortly.
                      Walk-ins are always welcome too.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-2 text-white/70 hover:text-white text-sm font-semibold hover:underline font-[family-name:var(--font-inter)]"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-[#fff8ed]/55 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]"
                          htmlFor="cp-firstName"
                        >
                          First Name <span className="text-[#d52128]">*</span>
                        </label>
                        <input
                          id="cp-firstName"
                          name="firstName"
                          type="text"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                          className="bg-[#fff8ed]/6 border border-[#fff8ed]/10 text-[#fff8ed] placeholder-[#fff8ed]/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-[#fff8ed]/55 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]"
                          htmlFor="cp-lastName"
                        >
                          Last Name <span className="text-[#d52128]">*</span>
                        </label>
                        <input
                          id="cp-lastName"
                          name="lastName"
                          type="text"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          className="bg-[#fff8ed]/6 border border-[#fff8ed]/10 text-[#fff8ed] placeholder-[#fff8ed]/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-[#fff8ed]/55 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]"
                          htmlFor="cp-email"
                        >
                          Email <span className="text-[#d52128]">*</span>
                        </label>
                        <input
                          id="cp-email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="bg-[#fff8ed]/6 border border-[#fff8ed]/10 text-[#fff8ed] placeholder-[#fff8ed]/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="text-[#fff8ed]/55 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]"
                          htmlFor="cp-phone"
                        >
                          Phone
                        </label>
                        <input
                          id="cp-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(808) 000-0000"
                          className="bg-[#fff8ed]/6 border border-[#fff8ed]/10 text-[#fff8ed] placeholder-[#fff8ed]/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-[#fff8ed]/55 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]"
                        htmlFor="cp-reason"
                      >
                        Reason for Visit <span className="text-[#d52128]">*</span>
                      </label>
                      <select
                        id="cp-reason"
                        name="reason"
                        required
                        value={form.reason}
                        onChange={handleChange}
                        className="bg-[#fff8ed]/6 border border-[#fff8ed]/10 text-[#fff8ed] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-[#6ba6c5] text-[#fff8ed]">
                          Select a service
                        </option>
                        {reasons.map((r) => (
                          <option key={r} value={r} className="bg-[#6ba6c5] text-[#fff8ed]">
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-[#fff8ed]/55 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]"
                        htmlFor="cp-message"
                      >
                        Additional Notes
                      </label>
                      <textarea
                        id="cp-message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your situation or any questions you have..."
                        className="bg-[#fff8ed]/6 border border-[#fff8ed]/10 text-[#fff8ed] placeholder-[#fff8ed]/25 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-[#d52128] text-sm font-[family-name:var(--font-inter)]">
                        <AlertCircle size={15} />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group flex items-center justify-center gap-3 bg-[#d52128] hover:bg-[#b91b21] disabled:opacity-60 disabled:cursor-not-allowed text-[#fff8ed] font-bold px-8 py-4 rounded-sm transition-colors duration-200 text-sm font-[family-name:var(--font-inter)] mt-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#fff8ed]/40 border-t-[#fff8ed] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-[#fff8ed]/25 text-xs text-center font-[family-name:var(--font-inter)]">
                      Walk-ins welcome. No appointment required.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-[#d52128] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#fff8ed]/60 text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-1">
              No appointment needed
            </p>
            <h2
              className="text-[#fff8ed] font-black"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', lineHeight: 1.2 }}
            >
              Walk In Today — We&apos;re Ready for You
            </h2>
          </div>
          <a
            href="tel:+18083426305"
            className="flex items-center gap-3 bg-[#fff8ed] hover:bg-[#fff8ed]/90 text-[#d52128] font-bold px-8 py-4 rounded-sm transition-colors duration-200 text-sm shrink-0 font-[family-name:var(--font-inter)]"
          >
            <Phone size={16} />
            (808) 342-6305
          </a>
        </div>
      </section>
    </main>
  )
}
