import type { RetailerData, TestimonialData, MetricData } from '@/sanity/types'

interface SocialProofProps {
  retailers: RetailerData[]
  testimonials: TestimonialData[]
  metrics: MetricData[]
}

export default function SocialProof({ retailers, testimonials, metrics }: SocialProofProps) {
  return (
    <div id="track-record">
      {/* Part A + B — alabaster background */}
      <section className="bg-brand-alabaster py-24 px-6 lg:px-12" aria-label="Social proof">
        <div className="max-w-7xl mx-auto">

          {/* Part A: Retailer Logo Grid */}
          <div className="text-center">
            <p className="small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label">
              Retailers Where I&apos;ve Placed Brands
            </p>
            <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-16" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {retailers.map((r) => (
              <div
                key={r._id}
                className="bg-brand-jet-black border border-brand-dim-grey p-6 flex flex-col items-center gap-3 shadow-box hover:bg-brand-dim-grey hover:border-brand-silver transition-all duration-200"
              >
                <div className="w-8 h-8 bg-brand-dim-grey" aria-hidden="true" />
                <span className="font-barlow font-semibold text-brand-alabaster text-label text-center">
                  {r.name}
                </span>
              </div>
            ))}
          </div>

          {/* Part B: Testimonials */}
          <div className="mt-20">
            <p className="small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label text-center mb-10">
              What My Clients Say
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <article
                  key={t._id}
                  className="bg-brand-alabaster border-t-2 border-t-brand-red border border-brand-silver p-8 shadow-box transition-all duration-200 hover:-translate-y-1"
                >
                  <p
                    className="font-playfair text-quote-mark text-brand-red leading-none mb-2"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </p>
                  <blockquote className="font-playfair italic text-subheadline text-brand-jet-black leading-relaxed">
                    {t.quote}
                  </blockquote>
                  <cite className="not-italic mt-6 block">
                    <span className="block font-barlow font-bold text-brand-jet-black text-label">
                      {t.authorName}
                    </span>
                    {t.authorTitle && (
                      <span className="block font-barlow text-brand-dim-grey text-label">
                        {t.authorTitle}
                      </span>
                    )}
                  </cite>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Part C: Metrics Banner */}
      <section
        className="bg-brand-jet-black py-16 px-6 lg:px-12"
        aria-label="Key metrics"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-dim-grey/30">
            {metrics.map((m) => (
              <div
                key={m._id}
                className="flex flex-col items-center text-center px-8 py-10 md:py-0"
              >
                <span className="font-playfair text-metric text-brand-red font-bold leading-none">
                  {m.number}
                </span>
                <span className="font-barlow text-label text-brand-alabaster uppercase tracking-widest mt-3 font-semibold">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
