import type { Metadata } from 'next'
import { Playfair_Display, Barlow } from 'next/font/google'
import './globals.css'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import JsonLd from '@/components/JsonLd'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SanityLive, sanityFetch } from '@/sanity/lib/live'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import type { SiteSettingsData } from '@/sanity/types'

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const SITE_URL = 'https://example.com'  // TODO: replace with live domain
const OG_IMAGE = `${SITE_URL}/og-image.png`  // TODO: add 1200×630 og-image.png to /public

export const metadata: Metadata = {
  title: {
    default: '[Owner Name] — Retail Placement Consultant | Amazon & DTC to Shelf',
    template: '%s | [Owner Name]',
  },
  description:
    'I help Amazon and DTC sellers get their products on shelves at Walmart, Target, Whole Foods, and 1,200+ retail doors. Book a strategy call.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: '[Owner Name] — Retail Placement Consultant',
    title: '[Owner Name] — Retail Placement Consultant | Amazon & DTC to Shelf',
    description:
      'I help Amazon and DTC sellers get their products on shelves at Walmart, Target, Whole Foods, and 1,200+ retail doors. Book a strategy call.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: '[Owner Name] — Retail Placement Consultant',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Owner Name] — Retail Placement Consultant | Amazon & DTC to Shelf',
    description:
      'I help Amazon and DTC sellers get their products on shelves at Walmart, Target, Whole Foods, and 1,200+ retail doors.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '[Owner Name]',
  jobTitle: 'Retail Placement Consultant',
  description:
    '[Owner Name] is a retail placement consultant who has helped 240+ Amazon and DTC brands secure shelf space at Walmart, Target, Whole Foods, Costco, and 1,200+ retail doors, generating over $180M in retail revenue.',
  url: SITE_URL,
  sameAs: [],  // TODO: add LinkedIn URL, etc.
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: '[Owner Name] — Retail Placement Consulting',
  description:
    'Retail placement consulting for Amazon and DTC brands seeking shelf space at major US retailers including Walmart, Target, Whole Foods, Costco, Kroger, CVS, Walgreens, and Sprouts.',
  url: SITE_URL,
  provider: {
    '@type': 'Person',
    name: '[Owner Name]',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'Retail Placement Consulting',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Retail Placement Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Retail Buyer Introductions',
          description:
            'Direct introductions to buyers at Walmart, Target, Whole Foods, Costco, and other major retailers.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Retail Pitch Deck Development',
          description: 'Category analysis, margin modeling, and buyer-ready pitch materials.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Purchase Order Management',
          description:
            'End-to-end support from first buyer meeting through first re-order.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3',
    bestRating: '5',
    worstRating: '1',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isEnabled } = await draftMode()
  const { data: settingsRaw } = await sanityFetch({ query: siteSettingsQuery })
  const settings = (settingsRaw as SiteSettingsData | null) ?? {}
  const logoText = settings.logoText ?? settings.ownerName ?? '[Owner Name]'

  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd schema={personSchema} />
        <JsonLd schema={serviceSchema} />
        <Navbar logoText={logoText} />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        {isEnabled && <VisualEditing />}
        <SanityLive />
      </body>
    </html>
  )
}
