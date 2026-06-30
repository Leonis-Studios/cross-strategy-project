import type { CredentialData, SocialProofSection, TestimonialData } from '@/sanity/types'

interface SocialProofProps {
  credentials: CredentialData[]
  testimonials: TestimonialData[]
  section: SocialProofSection
}

export default function SocialProof({ credentials, testimonials, section }: SocialProofProps) {
  return (
    <div id="track-record">
      <section className="bg-brand-alabaster py-24 px-6 lg:px-12" aria-label="Social proof">
        <div className="max-w-7xl mx-auto">

          {/* Part A: Credentials */}
          <div className="text-center">
            <p className="small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label">
              {section.credentialsHeadline}
            </p>
            <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-16" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {credentials.map((c) => (
              <div
                key={c._id}
                className="bg-brand-jet-black border border-brand-dim-grey p-6 flex flex-col gap-3 shadow-box hover:border-brand-silver transition-all duration-200"
              >
                <span className="font-barlow font-semibold text-brand-alabaster text-label">
                  {c.title}
                </span>
                {c.description && (
                  <p className="font-barlow text-xs text-brand-silver leading-relaxed">
                    {c.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Part B: Testimonials */}
          <div className="mt-20">
            <p className="small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label text-center mb-10">
              {section.testimonialsHeadline}
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
    </div>
  )
}
