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

export interface CredentialData {
  _id: string
  title: string
  description?: string
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

export interface HomePageData {
  hero?: HeroData
  testimonials?: TestimonialData[]
  credentials?: CredentialData[]
  benefits?: BenefitData[]
  features?: FeatureData[]
  howItWorksSteps?: HowItWorksStepData[]
  cta?: CtaData
  faqs?: FaqData[]
}

export interface SiteSettingsData {
  ownerName?: string
  ownerTitle?: string
  footerTagline?: string
}

export interface BlogTagData {
  _id: string
  title: string
  slug: { current: string }
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
  tags?: BlogTagData[]
  featured?: boolean
  readingTime?: number
}

export interface BlogPostData extends BlogPostSummary {
  body?: unknown[]
  seoTitle?: string
  seoDescription?: string
}
