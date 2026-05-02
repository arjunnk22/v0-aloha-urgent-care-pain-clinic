import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactPageClient from '@/components/contact-page/contact-page-client'

export const metadata: Metadata = {
  title: 'Contact Us | Aloha Urgent Care & Pain Clinic — Waikiki, Honolulu',
  description:
    'Contact Aloha Urgent Care & Pain Clinic in Waikiki. Book a visit, ask a question, or find us at International Market Place, Level 2. Walk-ins welcome — no appointment needed.',
  alternates: {
    canonical: 'https://alohaurgentcare.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Aloha Urgent Care & Pain Clinic',
    description:
      'Reach out to our physician-led urgent care clinic in Waikiki. Walk-ins welcome at International Market Place, Level 2, Honolulu.',
    url: 'https://alohaurgentcare.com/contact',
    siteName: 'Aloha Urgent Care & Pain Clinic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Aloha Urgent Care & Pain Clinic',
    description:
      'Reach out to our physician-led urgent care clinic in Waikiki. Walk-ins welcome.',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageClient />
      <Footer />
    </>
  )
}
