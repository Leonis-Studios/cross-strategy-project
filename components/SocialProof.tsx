const retailers = [
  'Walmart',
  'Target',
  'Whole Foods',
  'Costco',
  'Nordstrom',
  'Kroger',
  'CVS',
  'Sprouts',
]

const testimonials = [
  {
    quote:
      'Crossover took us from zero retail presence to 400 Whole Foods locations in under 8 months. The strategy was airtight.',
    name: 'Sarah M.',
    title: 'Founder, Bloom Organics',
  },
  {
    quote:
      'We had the product. They had the relationships. Within a year we were on shelves at Target and Costco.',
    name: 'James R.',
    title: 'CEO, NovaNutrition',
  },
  {
    quote:
      'The team understands both the Amazon world and the retail buyer mindset. That bridge is incredibly rare.',
    name: 'Dana K.',
    title: 'CMO, PureLeaf Wellness',
  },
]

const metrics = [
  { number: '240+', label: 'Brands Placed' },
  { number: '$180M+', label: 'Retail Revenue Generated' },
  { number: '1,200+', label: 'Store Doors Opened' },
]

export default function SocialProof() {
  return (
    <div>
      {/* Part A + B — white background */}
      <section className="bg-brand-white py-24 px-6 lg:px-12" aria-label="Social proof">
        <div className="max-w-7xl mx-auto">

          {/* Part A: Retailer Logo Grid */}
          <div className="text-center">
            <p className="small-caps font-barlow font-semibold text-brand-blue-slate tracking-widest text-label">
              Retail Partners &amp; Placements
            </p>
            <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-16" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {retailers.map((name) => (
              <div
                key={name}
                className="bg-brand-jet-black border border-brand-silver p-6 flex flex-col items-center gap-3 shadow-box hover:bg-brand-blue-slate hover:border-brand-cognac transition-all duration-200"
              >
                <div className="w-8 h-8 bg-brand-blue-slate" aria-hidden="true" />
                <span className="font-barlow font-semibold text-brand-white text-label text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Part B: Testimonials */}
          <div className="mt-20">
            <p className="small-caps font-barlow font-semibold text-brand-blue-slate tracking-widest text-label text-center mb-10">
              What Our Clients Say
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="bg-brand-white border-t-2 border-t-brand-coral-glow border border-brand-silver p-8 shadow-box transition-all duration-200 hover:-translate-y-1"
                >
                  <p
                    className="font-playfair text-quote-mark text-brand-coral-glow leading-none mb-2"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </p>
                  <blockquote className="font-playfair italic text-subheadline text-brand-jet-black leading-relaxed">
                    {t.quote}
                  </blockquote>
                  <cite className="not-italic mt-6 block">
                    <span className="block font-barlow font-semibold text-brand-jet-black text-label">
                      {t.name}
                    </span>
                    <span className="block font-barlow text-brand-muted text-label">
                      {t.title}
                    </span>
                  </cite>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Part C: Metrics Banner */}
      <section
        className="bg-brand-brown py-16 px-6 lg:px-12"
        aria-label="Key metrics"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-greige/30">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center text-center px-8 py-10 md:py-0"
              >
                <span className="font-playfair text-metric text-brand-coral-glow font-bold leading-none">
                  {m.number}
                </span>
                <span className="font-barlow text-label text-white uppercase tracking-widest mt-3 font-semibold">
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
