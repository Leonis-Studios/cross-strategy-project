import type { SanityImageSource } from '@sanity/image-url'

export type SanityImage = SanityImageSource & { alt?: string }

export interface HeroData {
  eyebrow?: string
  headline: string
  headlineAccent?: string
  subheadline: string
  ctaPrimary?: string
  ctaPrimaryHref?: string
  ctaSecondary?: string
  ctaSecondaryHref?: string
  floatingStatNumber?: string
  floatingStatLabel?: string
  image?: SanityImage
}

export interface TestimonialData {
  _id: string
  quote: string
  authorName: string
  authorTitle?: string
}

export interface MetricData {
  _id: string
  number: string
  label: string
}

export interface RetailerData {
  _id: string
  name: string
  logo?: SanityImage
}

export interface PageData {
  hero?: HeroData
  testimonials?: TestimonialData[]
  metrics?: MetricData[]
  retailers?: RetailerData[]
}
