import AnimateIn from './AnimateIn'
import type { HowItWorksSection, HowItWorksStepData } from '@/sanity/types'
import { FALLBACK_HOW_IT_WORKS_STEPS } from '@/lib/fallbacks'

const STAGGER = ['stagger-2', 'stagger-3', 'stagger-4', 'stagger-5'] as const

interface HowItWorksProps {
  steps?: HowItWorksStepData[]
  section: HowItWorksSection
}

function SplitHeadline({ headline, accent, className }: { headline: string; accent?: string; className: string }) {
  if (!accent || !headline.includes(accent)) {
    return <h2 className={className}>{headline}</h2>
  }
  const before = headline.slice(0, headline.lastIndexOf(accent)).trimEnd()
  return (
    <h2 className={className}>
      {before}{' '}
      <em className="italic text-brand-red">{accent}</em>
    </h2>
  )
}

export default function HowItWorks({ steps = FALLBACK_HOW_IT_WORKS_STEPS, section }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className="bg-brand-alabaster py-24 px-6 lg:px-12"
      aria-label="How retail placement consulting works"
    >
      <AnimateIn className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="fade-up-item stagger-1 small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label">
            {section.howItWorksEyebrow}
          </p>
          <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-6" aria-hidden="true" />
          <SplitHeadline
            headline={section.howItWorksHeadline ?? ''}
            accent={section.howItWorksHeadlineAccent}
            className="fade-up-item stagger-2 font-playfair text-display-sm md:text-display-md text-brand-jet-black leading-tight max-w-3xl mx-auto"
          />
          {section.howItWorksSubheadline && (
            <p className="fade-up-item stagger-3 font-barlow text-brand-dim-grey text-body mt-6 max-w-xl mx-auto leading-relaxed">
              {section.howItWorksSubheadline}
            </p>
          )}
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step._id}
              className={`fade-up-item ${STAGGER[i % 4]} flex flex-col bg-white border border-brand-alabaster p-6 shadow-[var(--shadow-box)]`}
            >
              <div
                className="w-12 h-12 bg-brand-red flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="font-barlow font-bold text-white text-label leading-none">
                  {String(step.stepNumber).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-barlow font-bold text-brand-jet-black text-subheadline min-h-[4rem] leading-snug">
                {step.title}
              </h3>
              <div className="w-full h-px bg-brand-alabaster my-4" aria-hidden="true" />
              <p className="font-barlow text-brand-dim-grey text-label leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  )
}
