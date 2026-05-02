import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BlogPageClient from '@/components/blog/blog-page-client'

export const metadata: Metadata = {
  title: 'Health Blog | Aloha Urgent Care & Pain Clinic — Waikiki, Honolulu',
  description:
    'Physician-written health articles on urgent care, pain management, IV therapy, weight loss, and travel health — from the team at Aloha Urgent Care & Pain Clinic in Waikiki.',
  alternates: {
    canonical: 'https://alohaurgentcare.com/blog',
  },
  openGraph: {
    title: 'Health Blog | Aloha Urgent Care & Pain Clinic',
    description:
      'Physician-written health guides for locals and visitors in Waikiki, Honolulu.',
    url: 'https://alohaurgentcare.com/blog',
    siteName: 'Aloha Urgent Care & Pain Clinic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Blog | Aloha Urgent Care & Pain Clinic',
    description: 'Physician-written health guides for locals and visitors in Waikiki, Honolulu.',
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogPageClient />
      <Footer />
    </>
  )
}
