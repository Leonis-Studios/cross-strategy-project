import AnimateIn from './AnimateIn'
import type { CtaData } from '@/sanity/types'
import { FALLBACK_CTA } from '@/lib/fallbacks'

interface CallToActionProps {
  data?: CtaData
}

export default function CallToAction({ data = FALLBACK_CTA }: CallToActionProps) {
  return (
    <section
      id="cta"
      className="bg-brand-jet-black py-24 px-6 lg:px-12"
      aria-label="Book a retail placement strategy call"
    >
      <AnimateIn className="max-w-4xl mx-auto text-center">
        {data.eyebrow && (
          <p className="fade-up-item stagger-1 small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label">
            {data.eyebrow}
          </p>
        )}
        <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-6" aria-hidden="true" />

        <h2 className="fade-up-item stagger-2 font-playfair text-display-sm md:text-display-md text-brand-alabaster leading-tight">
          {data.headline}
          {data.headlineAccent && (
            <>
              {' '}
              <em className="italic text-brand-red">{data.headlineAccent}</em>
            </>
          )}
        </h2>

        {data.subheadline && (
          <p className="fade-up-item stagger-3 font-barlow text-brand-silver text-body mt-6 max-w-2xl mx-auto leading-relaxed">
            {data.subheadline}
          </p>
        )}

        <div className="fade-up-item stagger-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10">
          {data.ctaPrimary && (
            <a
              href={data.ctaPrimaryHref ?? '#'}
              className="w-full sm:w-auto bg-brand-red text-brand-alabaster font-barlow font-bold px-10 py-4 hover:opacity-90 transition-opacity duration-200 text-center shadow-box"
            >
              {data.ctaPrimary}
            </a>
          )}
          {data.ctaSecondary && (
            <a
              href={data.ctaSecondaryHref ?? '#'}
              className="font-barlow font-semibold text-brand-red hover:underline transition-all duration-200"
            >
              {data.ctaSecondary}
            </a>
          )}
        </div>
      </AnimateIn>
    </section>
  )
}
