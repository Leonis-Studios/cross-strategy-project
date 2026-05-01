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

export interface BenefitData {
  _id: string
  title: string
  description: string
  displayOrder?: number
}

export interface FeatureData {
  _id: string
  title: string
  description: string
  displayOrder?: number
}

export interface HowItWorksStepData {
  _id: string
  stepNumber: number
  title: string
  description: string
}

export interface CtaData {
  eyebrow?: string
  headline: string
  headlineAccent?: string
  subheadline?: string
  ctaPrimary?: string
  ctaPrimaryHref?: string
  ctaSecondary?: string
  ctaSecondaryHref?: string
}

export interface FaqData {
  _id: string
  question: string
  answer: string
  displayOrder?: number
}

export interface AboutPageData {
  ownerName?: string
  ownerTitle?: string
  bio?: string
  photo?: SanityImage
  statsHighlight?: { value: string; label: string }[]
  standoutQuote?: string
}

export interface PageData {
  hero?: HeroData
  testimonials?: TestimonialData[]
  metrics?: MetricData[]
  retailers?: RetailerData[]
  benefits?: BenefitData[]
  features?: FeatureData[]
  howItWorksSteps?: HowItWorksStepData[]
  cta?: CtaData
  faqs?: FaqData[]
}

export interface BlogCategoryData {
  _id: string
  title: string
  slug: { current: string }
  description?: string
}

export interface BlogPostSummary {
  _id: string
  title: string
  slug: { current: string }
  publishedAt?: string
  excerpt?: string
  coverImage?: SanityImage
  categories?: BlogCategoryData[]
  tags?: string[]
  featured?: boolean
  readingTime?: number
}

export interface BlogPostData extends BlogPostSummary {
  body?: unknown[]
  seoTitle?: string
  seoDescription?: string
}
