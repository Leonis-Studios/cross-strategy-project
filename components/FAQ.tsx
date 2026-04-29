import AnimateIn from './AnimateIn'
import type { FaqData } from '@/sanity/types'
import { FALLBACK_FAQS } from '@/lib/fallbacks'

interface FAQProps {
  faqs?: FaqData[]
}

export default function FAQ({ faqs = FALLBACK_FAQS }: FAQProps) {
  const count = faqs.length

  const gridClass =
    count <= 2
      ? 'grid-cols-1 max-w-2xl mx-auto'
      : count <= 4
        ? 'grid-cols-1 md:grid-cols-2'
        : 'grid-cols-1 md:grid-cols-2'

  const cardPadding = count >= 5 ? 'p-6' : 'p-8'

  return (
    <section
      id="faq"
      className="bg-brand-jet-black py-24 px-6 lg:px-12"
      aria-label="Frequently asked questions about retail placement consulting"
    >
      <AnimateIn className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="fade-up-item stagger-1 small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label">
            Common Questions
          </p>
          <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-6" aria-hidden="true" />
          <h2 className="fade-up-item stagger-2 font-playfair text-display-sm md:text-display-md text-brand-alabaster leading-tight max-w-2xl mx-auto">
            Everything you need to{' '}
            <em className="italic text-brand-red">know before we talk</em>
          </h2>
          {count > 0 && (
            <p className="fade-up-item stagger-3 font-barlow text-brand-silver text-body mt-6 max-w-xl mx-auto leading-relaxed">
              {count} question{count !== 1 ? 's' : ''} answered. Don&apos;t see yours?{' '}
              <a href="#contact" className="text-brand-red hover:underline">
                Book a call.
              </a>
            </p>
          )}
        </div>

        {/* FAQ grid */}
        <div className={`grid ${gridClass} gap-5`}>
          {faqs.map((item, i) => {
            const stagger = ['stagger-2', 'stagger-3', 'stagger-4', 'stagger-5'][i % 4]
            return (
              <article
                key={item._id}
                className={`fade-up-item ${stagger} bg-[#222222] border border-brand-dim-grey shadow-[var(--shadow-box)] ${cardPadding}`}
                itemScope
                itemType="https://schema.org/Question"
              >
                {/* Q label */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="shrink-0 w-8 h-8 bg-brand-red flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="font-barlow font-bold text-white text-xs leading-none">Q</span>
                  </div>
                  <h3
                    className="font-barlow font-bold text-brand-alabaster text-subheadline leading-snug"
                    itemProp="name"
                  >
                    {item.question}
                  </h3>
                </div>

                <div className="w-full h-px bg-brand-dim-grey/40 mb-4" aria-hidden="true" />

                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p
                    className="font-barlow text-brand-silver text-label leading-relaxed"
                    itemProp="text"
                  >
                    {item.answer}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </AnimateIn>
    </section>
  )
}
