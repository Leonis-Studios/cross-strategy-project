import Image from 'next/image'
import AnimateIn from './AnimateIn'
import { urlFor } from '@/sanity/lib/image'
import type { PartnerData, PartnersSection } from '@/sanity/types'
import { FALLBACK_PARTNERS, FALLBACK_PARTNERS_SECTION } from '@/lib/fallbacks'

interface PartnersProps {
  partners?: PartnerData[]
  section?: PartnersSection
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

export default function Partners({ partners = FALLBACK_PARTNERS, section }: PartnersProps) {
  if (!partners.length) return null

  const eyebrow       = section?.partnersEyebrow       ?? FALLBACK_PARTNERS_SECTION.partnersEyebrow
  const headline       = section?.partnersHeadline       ?? FALLBACK_PARTNERS_SECTION.partnersHeadline
  const headlineAccent = section?.partnersHeadlineAccent ?? FALLBACK_PARTNERS_SECTION.partnersHeadlineAccent
  const subheadline     = section?.partnersSubheadline     ?? FALLBACK_PARTNERS_SECTION.partnersSubheadline

  return (
    <section
      id="partners"
      className="bg-brand-jet-black py-24 px-6 lg:px-12"
      aria-label="Client and channel partners"
    >
      <AnimateIn className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {eyebrow && (
            <p className="fade-up-item stagger-1 small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label">
              {eyebrow}
            </p>
          )}
          <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-6" aria-hidden="true" />
          <SplitHeadline
            headline={headline ?? ''}
            accent={headlineAccent}
            className="fade-up-item stagger-2 font-playfair text-display-sm md:text-display-md text-brand-alabaster leading-tight max-w-2xl mx-auto"
          />
          {subheadline && (
            <p className="fade-up-item stagger-3 font-barlow text-brand-silver text-body mt-6 max-w-xl mx-auto leading-relaxed">
              {subheadline}
            </p>
          )}
        </div>

        {/* Partner cards — auto-fit grid so any number of cards lays out cleanly */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,320px))] justify-center gap-6">
          {partners.map((partner, i) => {
            const stagger = ['stagger-2', 'stagger-3', 'stagger-4', 'stagger-5'][i % 4]
            const logoUrl = partner.logo
              ? urlFor(partner.logo).width(320).height(120).fit('max').auto('format').url()
              : null

            return (
              <article
                key={partner._id}
                className={`fade-up-item ${stagger} group relative flex flex-col bg-white border-t-4 border-t-brand-red shadow-box transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#ef2626]`}
              >
                {/* Tag header strip */}
                <div className="flex items-center justify-between px-6 pt-5">
                  <span className="font-barlow font-bold text-[10px] tracking-[0.2em] uppercase text-brand-dim-grey">
                    Partner
                  </span>
                  <span className="w-1.5 h-1.5 bg-brand-red" aria-hidden="true" />
                </div>

                <div className="flex flex-col items-center text-center px-7 pt-5 flex-1">
                  {/* Logo window, styled like a shelf-tag label */}
                  <div className="w-full min-h-16 flex items-center justify-center mb-5 bg-brand-alabaster/50 border border-dashed border-brand-dim-grey/40 px-4 py-4">
                    {logoUrl ? (
                      <Image
                        src={logoUrl}
                        alt={(partner.logo as { alt?: string })?.alt ?? partner.name}
                        width={160}
                        height={56}
                        className="max-h-12 w-auto object-contain"
                      />
                    ) : (
                      <span className="font-playfair text-subheadline text-brand-jet-black leading-snug">
                        {partner.name}
                      </span>
                    )}
                  </div>

                  {logoUrl && (
                    <h3 className="font-barlow font-bold text-brand-jet-black text-label tracking-wide mb-3">
                      {partner.name}
                    </h3>
                  )}

                  <p className="font-barlow text-brand-dim-grey text-label leading-relaxed mb-6">
                    {partner.blurb}
                  </p>
                </div>

                {/* Barcode flourish */}
                <div
                  className="h-3 mx-7 mb-5 opacity-60"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, #1a1a1a 0px, #1a1a1a 2px, transparent 2px, transparent 4px, #1a1a1a 4px, #1a1a1a 5px, transparent 5px, transparent 8px)',
                  }}
                  aria-hidden="true"
                />

                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-barlow font-bold text-brand-alabaster bg-brand-jet-black px-6 py-3 text-center group-hover:bg-brand-red transition-colors duration-200 text-label"
                >
                  {partner.buttonLabel || 'Visit Website'} →
                </a>
              </article>
            )
          })}
        </div>
      </AnimateIn>
    </section>
  )
}
