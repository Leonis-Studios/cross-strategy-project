import AnimateIn from './AnimateIn'
import type { HowItWorksStepData } from '@/sanity/types'
import { FALLBACK_HOW_IT_WORKS_STEPS } from '@/lib/fallbacks'

const STAGGER = ['stagger-2', 'stagger-3', 'stagger-4', 'stagger-5'] as const

interface HowItWorksProps {
  steps?: HowItWorksStepData[]
}

export default function HowItWorks({ steps = FALLBACK_HOW_IT_WORKS_STEPS }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className="bg-brand-jet-black py-24 px-6 lg:px-12"
      aria-label="How retail placement consulting works"
    >
      <AnimateIn className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="fade-up-item stagger-1 small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label">
            The Process
          </p>
          <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-6" aria-hidden="true" />
          <h2 className="fade-up-item stagger-2 font-playfair text-display-sm md:text-display-md text-brand-alabaster leading-tight max-w-3xl mx-auto">
            How retail placement{' '}
            <em className="italic text-brand-red">consulting works</em>
          </h2>
          <p className="fade-up-item stagger-3 font-barlow text-brand-silver text-body mt-6 max-w-xl mx-auto leading-relaxed">
            From brand audit to purchase order — a proven 4-step process that has placed
            240+ brands across America&apos;s top retail chains.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step._id}
              className={`fade-up-item ${STAGGER[i % 4]} flex flex-col bg-[#222222] border border-brand-dim-grey p-6 shadow-[var(--shadow-box)]`}
            >
              <div
                className="w-12 h-12 bg-brand-red flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="font-barlow font-bold text-white text-label leading-none">
                  {String(step.stepNumber).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-barlow font-bold text-brand-alabaster text-subheadline min-h-[4rem] leading-snug">
                {step.title}
              </h3>
              <div className="w-full h-px bg-brand-dim-grey/40 my-4" aria-hidden="true" />
              <p className="font-barlow text-brand-silver text-label leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  )
}
