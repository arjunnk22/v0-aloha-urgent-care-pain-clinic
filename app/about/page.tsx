import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AboutPageClient from '@/components/about-page/about-page-client'

export const metadata: Metadata = {
  title: 'About Us | Aloha Urgent Care & Pain Clinic — Dr. Sung S. Yang',
  description:
    'Meet Dr. Sung S. Yang and the team behind Aloha Urgent Care & Pain Clinic in Waikiki. Physician-led urgent care with a mission to deliver personalized, affordable, and accessible healthcare in Hawaii.',
  alternates: {
    canonical: 'https://alohaurgentcare.com/about',
  },
  openGraph: {
    title: 'About Us | Aloha Urgent Care & Pain Clinic',
    description:
      'Meet Dr. Sung S. Yang — Johns Hopkins & Wake Forest educated physician practicing in Waikiki, Hawaii since 2010.',
    url: 'https://alohaurgentcare.com/about',
    siteName: 'Aloha Urgent Care & Pain Clinic',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Aloha Urgent Care & Pain Clinic',
    description:
      'Meet Dr. Sung S. Yang — physician-led urgent care in Waikiki, Hawaii since 2010.',
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutPageClient />
      <Footer />
    </>
  )
}
