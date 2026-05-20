import { sanityFetch } from '@/sanity/lib/live'
import { homePageQuery } from '@/sanity/lib/queries'
import type { HomePageData } from '@/sanity/types'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Benefits from '@/components/Benefits'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CallToAction from '@/components/CallToAction'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import SectionDivider from '@/components/SectionDivider'
import {
  FALLBACK_HERO,
  FALLBACK_CREDENTIALS,
  FALLBACK_TESTIMONIALS,
  FALLBACK_BENEFITS,
  FALLBACK_FEATURES,
  FALLBACK_HOW_IT_WORKS_STEPS,
  FALLBACK_CTA,
  FALLBACK_FAQS,
} from '@/lib/fallbacks'

export default async function Home() {
  const { data: rawData } = await sanityFetch({ query: homePageQuery })
  const data: HomePageData = (rawData as HomePageData | null) ?? {}

  const hero            = data.hero                    ?? FALLBACK_HERO
  const credentials     = data.credentials?.length     ? data.credentials     : FALLBACK_CREDENTIALS
  const testimonials    = data.testimonials?.length    ? data.testimonials    : FALLBACK_TESTIMONIALS
  const benefits        = data.benefits?.length        ? data.benefits        : FALLBACK_BENEFITS
  const features        = data.features?.length        ? data.features        : FALLBACK_FEATURES
  const howItWorksSteps = data.howItWorksSteps?.length ? data.howItWorksSteps : FALLBACK_HOW_IT_WORKS_STEPS
  const cta             = data.cta                     ?? FALLBACK_CTA
  const faqs            = data.faqs?.length            ? data.faqs            : FALLBACK_FAQS

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  const ctaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Retail Placement Consulting',
    provider: {
      '@type': 'Person',
      name: '[Owner Name]',
    },
    description:
      'End-to-end retail placement consulting for Amazon and DTC brands — from buyer introductions to purchase order. 240+ brands placed across Walmart, Target, Whole Foods, and 1,200+ store doors.',
    offers: {
      '@type': 'Offer',
      url: cta.ctaPrimaryHref ?? '#contact',
      description: cta.ctaPrimary ?? 'Book a Strategy Call',
    },
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
      <JsonLd schema={ctaSchema} />
      <JsonLd schema={howItWorksSchema} />
      <JsonLd schema={benefitsSchema} />
      <Hero data={hero} credentials={credentials} />
      <SocialProof
        credentials={credentials}
        testimonials={testimonials}
      />
      <SectionDivider from="light" to="dark" />
      <Benefits benefits={benefits} />
      <SectionDivider from="dark" to="light" />
      <Features features={features} />
      <SectionDivider from="light" to="dark" />
      <HowItWorks steps={howItWorksSteps} />
      <SectionDivider from="dark" to="light" />
      <CallToAction data={cta} />
      <SectionDivider from="light" to="dark" />
      <FAQ faqs={faqs} />
      <SectionDivider from="dark" to="dark" />
      <ContactForm />
    </main>
  )
}
