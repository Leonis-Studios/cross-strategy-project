import AnimateIn from './AnimateIn'
import type { BenefitData } from '@/sanity/types'
import { FALLBACK_BENEFITS } from '@/lib/fallbacks'

const STAGGER = ['stagger-2', 'stagger-3', 'stagger-4', 'stagger-5'] as const

interface BenefitsProps {
  benefits?: BenefitData[]
}

export default function Benefits({ benefits = FALLBACK_BENEFITS }: BenefitsProps) {
  return (
    <section
      id="benefits"
      className="bg-brand-jet-black py-24 px-6 lg:px-12"
      aria-label="Benefits of working with me"
    >
      <AnimateIn className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="fade-up-item stagger-1 small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label">
            Why Work With Me
          </p>
          <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-6" aria-hidden="true" />
          <h2 className="fade-up-item stagger-2 font-playfair text-display-sm md:text-display-md text-brand-alabaster leading-tight max-w-2xl mx-auto">
            What you get when you{' '}
            <em className="italic text-brand-red">work with me</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <div
              key={b._id}
              className={`fade-up-item ${STAGGER[i % 4]} group relative bg-brand-jet-black border border-brand-alabaster/20 shadow-[5px_5px_0px_#ef2626ff] p-8 hover:border-brand-red transition-colors duration-300`}
            >
              {/* Tag punch hole */}
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-brand-jet-black border border-brand-alabaster/20 group-hover:border-brand-red transition-colors duration-300"
                aria-hidden="true"
              />

              {/* SKU badge */}
              <div className="inline-block bg-brand-red px-3 py-1 mb-6">
                <span className="font-barlow font-bold text-brand-jet-black text-label tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="font-barlow font-bold text-brand-alabaster text-subheadline mb-4">
                {b.title}
              </h3>

              {/* Perforation line */}
              <div className="border-t border-dashed border-brand-alabaster/15 mb-4" aria-hidden="true" />

              <p className="font-barlow text-brand-silver text-label leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  )
}
