import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import TestimonialsPageClient from '@/components/testimonials-page/testimonials-page-client'

export const metadata: Metadata = {
  title: 'Patient Testimonials | Aloha Urgent Care & Pain Clinic — Waikiki, Honolulu',
  description:
    'Read real patient reviews from locals, visitors, and international travelers who trusted Aloha Urgent Care & Pain Clinic for urgent care, IV therapy, wound care, and more in Waikiki.',
  alternates: {
    canonical: 'https://alohaurgentcare.com/testimonials',
  },
  openGraph: {
    title: 'Patient Testimonials | Aloha Urgent Care & Pain Clinic',
    description:
      'Real stories from patients who experienced fast, physician-led care at our Waikiki clinic.',
    url: 'https://alohaurgentcare.com/testimonials',
    siteName: 'Aloha Urgent Care & Pain Clinic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Testimonials | Aloha Urgent Care & Pain Clinic',
    description:
      'Real stories from patients who experienced fast, physician-led care at our Waikiki clinic.',
  },
}

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <TestimonialsPageClient />
      <Footer />
    </>
  )
}
