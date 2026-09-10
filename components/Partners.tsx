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

export default function Partners({ partners = FALLBACK_PARTNERS, section = FALLBACK_PARTNERS_SECTION }: PartnersProps) {
  if (!partners.length) return null

  return (
    <section
      id="partners"
      className="bg-brand-jet-black py-24 px-6 lg:px-12"
      aria-label="Client and channel partners"
    >
      <AnimateIn className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {section.partnersEyebrow && (
            <p className="fade-up-item stagger-1 small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label">
              {section.partnersEyebrow}
            </p>
          )}
          <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-6" aria-hidden="true" />
          <SplitHeadline
            headline={section.partnersHeadline ?? ''}
            accent={section.partnersHeadlineAccent}
            className="fade-up-item stagger-2 font-playfair text-display-sm md:text-display-md text-brand-alabaster leading-tight max-w-2xl mx-auto"
          />
          {section.partnersSubheadline && (
            <p className="fade-up-item stagger-3 font-barlow text-brand-silver text-body mt-6 max-w-xl mx-auto leading-relaxed">
              {section.partnersSubheadline}
            </p>
          )}
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, i) => {
            const stagger = ['stagger-2', 'stagger-3', 'stagger-4', 'stagger-5'][i % 4]
            const logoUrl = partner.logo
              ? urlFor(partner.logo).width(320).height(120).fit('max').auto('format').url()
              : null

            return (
              <article
                key={partner._id}
                className={`fade-up-item ${stagger} group flex flex-col items-center text-center bg-white border-t-2 border-t-brand-red p-8 shadow-box transition-all duration-200 hover:-translate-y-1`}
              >
                <div className="h-14 flex items-center justify-center mb-6">
                  {logoUrl ? (
                    <Image
                      src={logoUrl}
                      alt={(partner.logo as { alt?: string })?.alt ?? partner.name}
                      width={160}
                      height={56}
                      className="max-h-14 w-auto object-contain"
                    />
                  ) : (
                    <span className="font-playfair text-subheadline text-brand-jet-black">
                      {partner.name}
                    </span>
                  )}
                </div>

                {logoUrl && (
                  <h3 className="font-barlow font-bold text-brand-jet-black text-label tracking-wide mb-3">
                    {partner.name}
                  </h3>
                )}

                <p className="font-barlow text-brand-dim-grey text-label leading-relaxed mb-8">
                  {partner.blurb}
                </p>

                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto font-barlow font-bold text-brand-alabaster bg-brand-jet-black px-6 py-3 group-hover:bg-brand-red transition-colors duration-200 text-label"
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
