import { client } from '@/sanity/lib/client'
import { homePageQuery } from '@/sanity/lib/queries'
import type { PageData } from '@/sanity/types'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Benefits from '@/components/Benefits'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import JsonLd from '@/components/JsonLd'
import {
  FALLBACK_HERO,
  FALLBACK_METRICS,
  FALLBACK_RETAILERS,
  FALLBACK_TESTIMONIALS,
  FALLBACK_BENEFITS,
  FALLBACK_FEATURES,
  FALLBACK_HOW_IT_WORKS_STEPS,
} from '@/lib/fallbacks'

export default async function Home() {
  const data: PageData = (await client.fetch(homePageQuery)) ?? {}

  const hero              = data.hero                    ?? FALLBACK_HERO
  const metrics           = data.metrics?.length             ? data.metrics           : FALLBACK_METRICS
  const retailers         = data.retailers?.length           ? data.retailers         : FALLBACK_RETAILERS
  const testimonials      = data.testimonials?.length        ? data.testimonials      : FALLBACK_TESTIMONIALS
  const benefits          = data.benefits?.length            ? data.benefits          : FALLBACK_BENEFITS
  const features          = data.features?.length            ? data.features          : FALLBACK_FEATURES
  const howItWorksSteps   = data.howItWorksSteps?.length     ? data.howItWorksSteps   : FALLBACK_HOW_IT_WORKS_STEPS

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does a retail placement consultant do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A retail placement consultant helps consumer brands get their products on shelves at major retailers such as Walmart, Target, Whole Foods, and Costco. Services include buyer introductions, pitch deck development, pricing and margin analysis, and managing the purchase-order process from first pitch through first re-order.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to get a product into a major retailer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Natural grocery chains like Whole Foods and Sprouts can move in 60–120 days for regional placement. National mass-market retailers like Walmart and Target typically require 6–18 months from first buyer contact to store shelf due to longer buying cycles, planogram resets, and compliance requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can an Amazon or DTC brand get into retail stores?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Amazon and DTC brands are increasingly attractive to retail buyers because they arrive with proven consumer demand, established reviews, and velocity data. A retail placement consultant can translate that online traction into a compelling retail pitch and connect the brand with the right buyers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What retailers has [Owner Name] placed brands in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '[Owner Name] has placed 240+ brands across Walmart, Target, Whole Foods, Costco, Kroger, CVS, Walgreens, Sprouts, and more than 1,200 total retail doors generating over $180M in retail revenue.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does retail placement consulting cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fees vary based on scope, target retailers, and engagement model. Common structures include a project retainer, a monthly advisory fee, or a success fee tied to purchase orders. Book a strategy call to discuss the right model for your brand.',
        },
      },
    ],
  }

  const howItWorksSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How retail placement consulting works',
    description:
      'The 4-step process for getting your Amazon or DTC brand onto retail shelves at Walmart, Target, Whole Foods, and 1,200+ other stores.',
    step: howItWorksSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  }

  const benefitsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Benefits of working with [Owner Name]',
    itemListElement: benefits.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.title,
      description: b.description,
    })),
  }

  return (
    <main>
      <JsonLd schema={faqSchema} />
      <JsonLd schema={howItWorksSchema} />
      <JsonLd schema={benefitsSchema} />
      <Hero data={hero} metrics={metrics} />
      <SocialProof
        retailers={retailers}
        testimonials={testimonials}
        metrics={metrics}
      />
      <Benefits benefits={benefits} />
      <Features features={features} />
      <HowItWorks steps={howItWorksSteps} />
    </main>
  )
}
