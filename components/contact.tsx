'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

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
  'Minor Procedure',
  'Respiratory Treatment',
  'Weight Loss Program',
  'Advanced Medical Treatment',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 flex flex-col">
            <span className="inline-block text-[#d52128] text-xs font-bold uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
              Get In Touch
            </span>
            <h2 className="text-black font-black text-balance mb-6" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}>
              Book Your Visit<br />
              <span className="text-[#d52128]">Today</span>
            </h2>
            <p className="text-black/65 text-sm leading-relaxed mb-10">
              Ready to get care? Fill out the form and our team will confirm your appointment.
              Walk-ins also welcome — no appointment required. We serve locals, visitors,
              families, and patients of all ages.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="tel:+18083426305"
                className="flex items-center gap-4 group"
                aria-label="Call Aloha Urgent Care"
              >
                <div className="w-11 h-11 bg-[#d52128]/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-[#d52128] transition-colors">
                  <Phone size={17} className="text-[#d52128] group-hover:text-[#fff8ed] transition-colors" />
                </div>
                <div>
                  <p className="text-black font-semibold text-sm">(808) 342-6305</p>
                  <p className="text-black/60 text-xs font-[family-name:var(--font-inter)]">Call us anytime</p>
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
                  <p className="text-black font-semibold text-sm">Send us an email</p>
                  <p className="text-black/60 text-xs font-[family-name:var(--font-inter)]">We reply within a few hours</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#d52128]/10 rounded-sm flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-[#d52128]" />
                </div>
                <div>
                  <p className="text-black font-semibold text-sm">International Market Place, Level 2</p>
                  <p className="text-black/60 text-xs font-[family-name:var(--font-inter)]">Waikiki, Honolulu, HI</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#d52128]/10 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={17} className="text-[#d52128]" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-black font-semibold text-sm">Hours of Operation</p>
                  <p className="text-black/60 text-xs font-[family-name:var(--font-inter)]">Mon – Thurs, Sat: 9:30 AM – 11:00 PM</p>
                  <p className="text-black/60 text-xs font-[family-name:var(--font-inter)]">Fri: 4:30 PM – 11:00 PM</p>
                  <p className="text-[#d52128] text-xs font-semibold font-[family-name:var(--font-inter)]">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#6ba6c5] rounded-sm p-8 lg:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <CheckCircle size={48} className="text-[#d52128]" />
                  <h3 className="text-[#fff8ed] font-black text-xl">Request Received!</h3>
                  <p className="text-[#fff8ed]/60 text-sm leading-relaxed max-w-sm font-[family-name:var(--font-inter)]">
                    Thank you for reaching out. Our team will confirm your appointment shortly.
                    Walk-ins are always welcome too.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-[#d52128] text-sm font-semibold hover:underline font-[family-name:var(--font-inter)]"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#fff8ed]/70 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]" htmlFor="firstName">
                        First Name <span className="text-[#d52128]">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className="bg-[#fff8ed]/8 border border-[#fff8ed]/12 text-[#fff8ed] placeholder-[#fff8ed]/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#fff8ed]/70 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]" htmlFor="lastName">
                        Last Name <span className="text-[#d52128]">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className="bg-[#fff8ed]/8 border border-[#fff8ed]/12 text-[#fff8ed] placeholder-[#fff8ed]/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#fff8ed]/70 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]" htmlFor="email">
                        Email <span className="text-[#d52128]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-[#fff8ed]/8 border border-[#fff8ed]/12 text-[#fff8ed] placeholder-[#fff8ed]/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#fff8ed]/70 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(808) 000-0000"
                        className="bg-[#fff8ed]/8 border border-[#fff8ed]/12 text-[#fff8ed] placeholder-[#fff8ed]/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#fff8ed]/70 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]" htmlFor="reason">
                      Reason for Visit <span className="text-[#d52128]">*</span>
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      value={form.reason}
                      onChange={handleChange}
                      className="bg-[#fff8ed]/8 border border-[#fff8ed]/12 text-[#fff8ed] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-[#6ba6c5] text-[#fff8ed]">Select a service</option>
                      {reasons.map((r) => (
                        <option key={r} value={r} className="bg-[#6ba6c5] text-[#fff8ed]">{r}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#fff8ed]/70 text-xs font-semibold uppercase tracking-widest font-[family-name:var(--font-inter)]" htmlFor="message">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your situation..."
                      className="bg-[#fff8ed]/8 border border-[#fff8ed]/12 text-[#fff8ed] placeholder-[#fff8ed]/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d52128] transition-colors resize-none"
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
                    className="group flex items-center justify-center gap-3 bg-[#d52128] hover:bg-[#b91b21] disabled:opacity-60 disabled:cursor-not-allowed text-[#fff8ed] font-bold px-8 py-4 rounded-sm transition-colors duration-200 text-sm font-[family-name:var(--font-inter)] mt-1"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#fff8ed]/40 border-t-[#fff8ed] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Book My Visit
                        <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[#fff8ed]/30 text-xs text-center font-[family-name:var(--font-inter)]">
                    Walk-ins also welcome. No appointment required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
