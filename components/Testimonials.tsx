import type { SocialProofSection, TestimonialData } from '@/sanity/types'

interface TestimonialsProps {
  testimonials: TestimonialData[]
  section: SocialProofSection
}

export default function Testimonials({ testimonials, section }: TestimonialsProps) {
  return (
    <section className="bg-brand-alabaster py-24 px-6 lg:px-12" aria-label="Client testimonials">
      <div className="max-w-7xl mx-auto">
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
    </section>
  )
}
