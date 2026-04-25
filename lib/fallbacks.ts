import type { BenefitData, FeatureData, HeroData, HowItWorksStepData, MetricData, RetailerData, TestimonialData } from '@/sanity/types'

export const FALLBACK_HERO: HeroData = {
  eyebrow: 'Amazon & DTC Sellers → Retail Shelves',
  headline: 'I get your brand on',
  headlineAccent: 'retail shelves.',
  subheadline:
    '[Owner Name] — retail placement consultant. 240+ brands placed across Walmart, Target, Whole Foods, Costco, and 1,200+ store doors.',
  ctaPrimary: 'Work With Me',
  ctaPrimaryHref: '#contact',
  ctaSecondary: 'See My Track Record →',
  ctaSecondaryHref: '#track-record',
  floatingStatNumber: '240+',
  floatingStatLabel: 'Brands in Retail',
}

export const FALLBACK_METRICS: MetricData[] = [
  { _id: 'fallback-metric-1', number: '240+',   label: 'Brands Placed' },
  { _id: 'fallback-metric-2', number: '$180M+',  label: 'Retail Revenue Generated' },
  { _id: 'fallback-metric-3', number: '1,200+',  label: 'Store Doors Opened' },
]

export const FALLBACK_RETAILERS: RetailerData[] = [
  { _id: 'fallback-retailer-1', name: 'Walmart' },
  { _id: 'fallback-retailer-2', name: 'Target' },
  { _id: 'fallback-retailer-3', name: 'Whole Foods' },
  { _id: 'fallback-retailer-4', name: 'Costco' },
  { _id: 'fallback-retailer-5', name: 'Kroger' },
  { _id: 'fallback-retailer-6', name: 'CVS' },
  { _id: 'fallback-retailer-7', name: 'Walgreens' },
  { _id: 'fallback-retailer-8', name: 'Sprouts' },
]

export const FALLBACK_BENEFITS: BenefitData[] = [
  {
    _id: 'fallback-benefit-1',
    title: 'Direct Buyer Access',
    description:
      'Skip the cold outreach. I have active relationships with buyers at Walmart, Target, Whole Foods, Costco, and 1,200+ retail doors — built over a decade of placements.',
    displayOrder: 1,
  },
  {
    _id: 'fallback-benefit-2',
    title: 'Buyer-Ready Pitch Materials',
    description:
      'Category analysis, margin modeling, and retailer-specific decks that speak a buyer’s language — so you walk into every meeting positioned to win.',
    displayOrder: 2,
  },
  {
    _id: 'fallback-benefit-3',
    title: 'End-to-End PO Support',
    description:
      'From first buyer meeting through first re-order. I stay in the process so nothing falls through the cracks between handshake and shelf.',
    displayOrder: 3,
  },
  {
    _id: 'fallback-benefit-4',
    title: 'Proven Track Record',
    description:
      '240+ brands placed, $180M+ in retail revenue generated. You get a partner who has done this at scale — not someone figuring it out alongside you.',
    displayOrder: 4,
  },
]

export const FALLBACK_FEATURES: FeatureData[] = [
  {
    _id: 'fallback-feature-1',
    title: 'Proven Sales Velocity',
    description:
      'You have real numbers — DTC revenue, Amazon rank, regional retail data. Buyers want proof of consumer demand before they commit shelf space.',
    displayOrder: 1,
  },
  {
    _id: 'fallback-feature-2',
    title: 'Retail-Ready Margins',
    description:
      'Your COGS supports a 40–55% retail margin after slotting, freight, and chargebacks. If the math doesn’t work, the deal won’t either.',
    displayOrder: 2,
  },
  {
    _id: 'fallback-feature-3',
    title: 'Production Capacity to Scale',
    description:
      'A regional Whole Foods rollout is 50 doors. Walmart is 4,000+. You can fulfill a purchase order without blowing lead times or quality.',
    displayOrder: 3,
  },
  {
    _id: 'fallback-feature-4',
    title: 'A Brand Story That Sticks',
    description:
      'Buyers hear hundreds of pitches. Yours needs a hook — a clear category, a differentiated claim, and a consumer who can’t get it anywhere else.',
    displayOrder: 4,
  },
  {
    _id: 'fallback-feature-5',
    title: 'Commitment to the Process',
    description:
      'Retail takes time. Buyers go dark. Planogram resets happen twice a year. You’re in this for the long game, not a single purchase order.',
    displayOrder: 5,
  },
  {
    _id: 'fallback-feature-6',
    title: 'Willingness to Adapt',
    description:
      'Pack size, price point, labeling — retailers will ask for changes. Brands that win are the ones willing to meet buyers where they are.',
    displayOrder: 6,
  },
]

export const FALLBACK_HOW_IT_WORKS_STEPS: HowItWorksStepData[] = [
  {
    _id: 'fallback-step-1',
    stepNumber: 1,
    title: 'Retail Readiness Audit',
    description:
      'We evaluate your brand across margins, packaging, velocity data, and production capacity — the criteria buyers weigh before they commit shelf space.',
  },
  {
    _id: 'fallback-step-2',
    stepNumber: 2,
    title: 'Strategy & Pitch Development',
    description:
      'Category-specific positioning, margin modeling, and a buyer-ready sell sheet — everything you need to walk into a meeting already speaking a buyer’s language.',
  },
  {
    _id: 'fallback-step-3',
    stepNumber: 3,
    title: 'Direct Buyer Introductions',
    description:
      'I make the calls. You walk into meetings with buyers at Walmart, Target, Whole Foods, and 1,200+ doors already positioned to win — not cold.',
  },
  {
    _id: 'fallback-step-4',
    stepNumber: 4,
    title: 'From Purchase Order to Shelf',
    description:
      'I stay in the process from first buyer meeting through your first re-order — so nothing falls through the cracks between handshake and shelf.',
  },
]

export const FALLBACK_TESTIMONIALS: TestimonialData[] = [
  {
    _id: 'fallback-testimonial-1',
    quote:
      'We had tried every broker and distributor pitch deck out there. Within 90 days of working with [Owner Name] we had purchase orders from three regional Whole Foods divisions. The buyer relationships alone were worth every penny.',
    authorName: 'Sarah K.',
    authorTitle: 'Co-Founder, organic snack brand',
  },
  {
    _id: 'fallback-testimonial-2',
    quote:
      "We'd been selling on Amazon for four years and couldn't crack a single major retailer on our own. [Owner Name] got us into 480 Walmart doors in our first retail season. The process was methodical and the results were real.",
    authorName: 'Marcus T.',
    authorTitle: 'CEO, DTC supplement brand',
  },
  {
    _id: 'fallback-testimonial-3',
    quote:
      'I was skeptical of retail consultants after a bad experience. [Owner Name] was different — specific targets, realistic timelines, and she stayed in the deal through the first re-order. We are now in Target nationwide.',
    authorName: 'Priya M.',
    authorTitle: 'Founder, personal care brand',
  },
]
