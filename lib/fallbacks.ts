import type { HeroData, MetricData, RetailerData, TestimonialData } from '@/sanity/types'

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
