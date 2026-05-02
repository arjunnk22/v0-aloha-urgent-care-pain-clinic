import type { Metadata } from 'next'
import { Noto_Sans, Inter, Quicksand } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sans',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Aloha Urgent Care & Pain Clinic | Physician-Led Urgent Care in Waikiki, Honolulu',
  description:
    'Fast, physician-led urgent care in Waikiki, Honolulu. No long waits, transparent pricing, and comprehensive care including lab testing, IV therapy, pain management, and minor procedures — all in one visit.',
  keywords:
    'urgent care honolulu, waikiki urgent care, physician urgent care hawaii, walk-in clinic honolulu, pain clinic hawaii, IV therapy waikiki, urgent care no wait',
  metadataBase: new URL('https://alohaurgentcare.com'),
  alternates: {
    canonical: 'https://alohaurgentcare.com',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Aloha Urgent Care & Pain Clinic | Physician-Led Urgent Care in Waikiki',
    description:
      'Fast, physician-led urgent care in Waikiki, Honolulu. No long waits, transparent pricing, and comprehensive care all in one visit.',
    url: 'https://alohaurgentcare.com',
    siteName: 'Aloha Urgent Care & Pain Clinic',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/kDkGSIGVaDqgM66OUvpuw-Kgy6eBKlvfHemyaiYAuT7yhOPpmNF8.png',
        width: 1200,
        height: 630,
        alt: 'Aloha Urgent Care & Pain Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aloha Urgent Care & Pain Clinic | Physician-Led Urgent Care in Waikiki',
    description:
      'Fast, physician-led urgent care in Waikiki, Honolulu. No long waits, transparent pricing.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/kDkGSIGVaDqgM66OUvpuw-Kgy6eBKlvfHemyaiYAuT7yhOPpmNF8.png',
    ],
  },
  icons: {
    icon: 'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-uploads/uploads/favicon/varakit-favicon.png',
    apple:
      'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-uploads/uploads/favicon/varakit-favicon.png',
  },
    generator: 'v0.app'
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Aloha Urgent Care & Pain Clinic',
  description:
    'Physician-led urgent care in Waikiki, Honolulu — fast, transparent, comprehensive care in one visit.',
  url: 'https://alohaurgentcare.com',
  telephone: '+18083426305',
  email: 'gabriella+auc@essence-marketing.design',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Honolulu',
    addressRegion: 'HI',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '21.2793',
    longitude: '-157.8294',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
      opens: '09:30',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '16:30',
      closes: '23:00',
    },
  ],
  medicalSpecialty: ['Urgent Care', 'Pain Management', 'Primary Care'],
  sameAs: [
    'https://www.facebook.com/profile.php?id=61574698695230',
    'https://www.instagram.com/aloha.urgent.care/',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#6ba6c5" />
        <link
          rel="icon"
          href="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-uploads/uploads/favicon/varakit-favicon.png"
        />
        <link rel="canonical" href="https://alohaurgentcare.com" />
        <meta name="robots" content="index, follow" />
        <title>Aloha Urgent Care &amp; Pain Clinic | Physician-Led Urgent Care in Waikiki</title>
        <meta
          name="description"
          content="Fast, physician-led urgent care in Waikiki, Honolulu. No long waits, transparent pricing, and comprehensive care including lab testing, IV therapy, pain management, and minor procedures — all in one visit."
        />
        <meta property="og:title" content="Aloha Urgent Care & Pain Clinic | Physician-Led Urgent Care in Waikiki" />
        <meta
          property="og:description"
          content="Fast, physician-led urgent care in Waikiki, Honolulu. No long waits, transparent pricing, and comprehensive care all in one visit."
        />
        <meta property="og:url" content="https://alohaurgentcare.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/kDkGSIGVaDqgM66OUvpuw-Kgy6eBKlvfHemyaiYAuT7yhOPpmNF8.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aloha Urgent Care & Pain Clinic | Physician-Led Urgent Care in Waikiki" />
        <meta
          name="twitter:description"
          content="Fast, physician-led urgent care in Waikiki, Honolulu. No long waits, transparent pricing."
        />
        <meta
          name="twitter:image"
          content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/kDkGSIGVaDqgM66OUvpuw-Kgy6eBKlvfHemyaiYAuT7yhOPpmNF8.png"
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${notoSans.variable} ${inter.variable} ${quicksand.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
