import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FaqPageClient from '@/components/faq/faq-page-client'

export const metadata: Metadata = {
  title: 'FAQ | Aloha Urgent Care & Pain Clinic — Waikiki, Honolulu',
  description:
    'Answers to the most common questions about Aloha Urgent Care & Pain Clinic — including services, hours, pricing, IV therapy, weight loss programs, and visiting our Waikiki location.',
  alternates: {
    canonical: 'https://alohaurgentcare.com/faq',
  },
  openGraph: {
    title: 'FAQ | Aloha Urgent Care & Pain Clinic',
    description:
      'Frequently asked questions about our physician-led urgent care clinic in Waikiki, Honolulu.',
    url: 'https://alohaurgentcare.com/faq',
    siteName: 'Aloha Urgent Care & Pain Clinic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Aloha Urgent Care & Pain Clinic',
    description:
      'Frequently asked questions about our physician-led urgent care clinic in Waikiki, Honolulu.',
  },
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <FaqPageClient />
      <Footer />
    </>
  )
}
