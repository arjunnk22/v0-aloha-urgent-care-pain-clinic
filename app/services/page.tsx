import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServicesPageClient from '@/components/services-page/services-page-client'

export const metadata: Metadata = {
  title: 'Services | Aloha Urgent Care & Pain Clinic — Waikiki, Honolulu',
  description:
    'Explore all services at Aloha Urgent Care & Pain Clinic — urgent care visits, lab testing, minor procedures, pain management, IV therapy, wound care, respiratory treatments, on-site medications, and weight loss programs. Physician-led, one visit.',
  alternates: {
    canonical: 'https://alohaurgentcare.com/services',
  },
  openGraph: {
    title: 'Services | Aloha Urgent Care & Pain Clinic',
    description:
      'Physician-led urgent care, procedures, IV therapy, pain management, and weight loss programs in Waikiki, Honolulu. Everything handled in one visit.',
    url: 'https://alohaurgentcare.com/services',
    siteName: 'Aloha Urgent Care & Pain Clinic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Aloha Urgent Care & Pain Clinic',
    description:
      'All 9 services available in a single physician-led visit at our Waikiki clinic.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesPageClient />
      <Footer />
    </>
  )
}
