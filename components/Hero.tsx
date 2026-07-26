import type { CredentialData, HeroData } from "@/sanity/types";
import { FALLBACK_HERO } from "@/lib/fallbacks";

interface HeroProps {
  data: HeroData
  credentials: CredentialData[]
}

export default function Hero({ data, credentials }: HeroProps) {
  const displayCredentials =
    credentials.length > 0
      ? credentials.slice(0, 3)
      : [
          { _id: "c1", title: "Former Retail Buyer", description: "Operated inside national chain buying organizations" },
          { _id: "c2", title: "National Network", description: "Direct buyer relationships at 50+ retail chains" },
          { _id: "c3", title: "End-to-End Partner", description: "First pitch through first re-order" },
        ];

  const eyebrow            = data.eyebrow            ?? FALLBACK_HERO.eyebrow
  const headline           = data.headline           ?? FALLBACK_HERO.headline
  const headlineAccent     = data.headlineAccent     ?? FALLBACK_HERO.headlineAccent
  const subheadline        = data.subheadline        ?? FALLBACK_HERO.subheadline
  const bioText            = data.bioText            ?? FALLBACK_HERO.bioText
  const rightPanelHeadline = data.rightPanelHeadline ?? FALLBACK_HERO.rightPanelHeadline
  const rightPanelSub      = data.rightPanelSubheadline ?? FALLBACK_HERO.rightPanelSubheadline
  const trustSignals       = data.trustSignals?.length ? data.trustSignals : FALLBACK_HERO.trustSignals ?? []
  const ctaPrimary         = data.ctaPrimary         ?? FALLBACK_HERO.ctaPrimary ?? "Book My Free Strategy Call →"
  const ctaPrimaryHref     = data.ctaPrimaryHref     ?? FALLBACK_HERO.ctaPrimaryHref ?? "/#contact"
  const ctaPrivacyNote     = data.ctaPrivacyNote     ?? FALLBACK_HERO.ctaPrivacyNote

  return (
    <div className="hero-outer-shadow overflow-hidden">
      <section
        aria-label="Start your retail placement journey"
        className="relative overflow-hidden min-h-screen is-visible"
      >
        {/* Desktop diagonal background — left (light) */}
        <div
          className="hidden lg:block absolute inset-0 bg-brand-alabaster"
          style={{ clipPath: "polygon(0 0, 55% 0, calc(55% - 120px) 100%, 0 100%)" }}
          aria-hidden="true"
        />
        {/* Desktop diagonal background — right (dark) */}
        <div
          className="hidden lg:block absolute inset-0 bg-brand-jet-black"
          style={{ clipPath: "polygon(55% 0, 100% 0, 100% 100%, calc(55% - 120px) 100%)" }}
          aria-hidden="true"
        />

        {/* Subtle blue tint along diagonal split */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(82deg, transparent 46%, rgba(70, 120, 210, 0.09) 50%, rgba(70, 120, 210, 0.09) 52%, transparent 56%)'
          }}
          aria-hidden="true"
        />

        {/* Two-panel content grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">

          {/* LEFT PANEL — owner-focused (light theme) */}
          <div className="relative flex flex-col justify-center overflow-hidden px-6 lg:px-16 py-12 lg:py-20 bg-brand-alabaster lg:bg-transparent">
            {/* Accent bar */}
            <div
              className="hero-sweep absolute top-0 left-0 right-0 h-1 bg-brand-red"
              aria-hidden="true"
            />

            {/* Sliding content wrapper */}
            <div className="hero-slide-left flex flex-col">
              {/* Eyebrow */}
              <span className="fade-up-item stagger-1 small-caps font-barlow font-bold text-brand-red tracking-widest text-label uppercase mb-3">
                {eyebrow}
              </span>

              {/* Name heading */}
              <h1 className="fade-up-item stagger-2 font-playfair text-display-sm lg:text-display-lg leading-[0.9] text-brand-jet-black mb-4">
                {headline}
                <br />
                <em className="block italic text-brand-red mt-2">{headlineAccent}</em>
              </h1>

              {/* Credentials subtitle */}
              <p className="fade-up-item stagger-3 font-barlow text-body text-brand-dim-grey mb-6">
                {subheadline}
              </p>

              {/* Divider */}
              <div
                className="fade-up-item stagger-3 h-px w-16 bg-brand-red mb-6"
                aria-hidden="true"
              />

              {/* Bio */}
              {bioText && (
                <p className="fade-up-item stagger-4 font-barlow text-label text-brand-dim-grey leading-relaxed max-w-sm mb-10">
                  {bioText}
                </p>
              )}

              {/* Credential cards */}
              <div
                className="flex gap-4"
                role="list"
                aria-label="Consultant credentials"
              >
                {displayCredentials.map((c, i) => (
                  <div
                    key={c._id}
                    role="listitem"
                    className={`fade-up-item stagger-${i + 5} stat-card-lift flex-1 min-w-0 bg-white shadow-box p-4 lg:p-5 border border-brand-alabaster`}
                  >
                    <p className="font-barlow font-bold text-xs text-brand-red uppercase tracking-wide leading-tight">
                      {c.title}
                    </p>
                    {c.description && (
                      <p className="font-barlow text-xs text-brand-dim-grey mt-2 leading-tight">
                        {c.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — CTA (dark theme) */}
          <div className="relative flex flex-col justify-center overflow-hidden px-6 lg:px-16 py-12 lg:py-28 bg-brand-jet-black lg:bg-transparent">
            {/* Accent bar */}
            <div
              className="hero-sweep absolute top-0 left-0 right-0 h-1 bg-brand-red"
              aria-hidden="true"
            />

            {/* Sliding content wrapper */}
            <div className="hero-slide-right flex flex-col max-w-md mx-auto">
              {/* Headline */}
              <h2 className="fade-up-item stagger-2 font-playfair text-display-sm lg:text-display-lg leading-[0.95] text-brand-alabaster mb-5">
                {rightPanelHeadline}
              </h2>

              {/* Subheading */}
              {rightPanelSub && (
                <p className="fade-up-item stagger-3 font-barlow text-body text-brand-silver mb-8 leading-relaxed">
                  {rightPanelSub}
                </p>
              )}

              {/* Trust signals */}
              {trustSignals.length > 0 && (
                <ul
                  className="fade-up-item stagger-4 flex flex-col gap-3 mb-10"
                  aria-label="What to expect"
                >
                  {trustSignals.map((signal) => (
                    <li
                      key={signal.text}
                      className="flex items-center gap-3 font-barlow text-label text-brand-silver"
                    >
                      <span className="text-brand-red font-bold leading-none">✓</span>
                      {signal.text}
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA button */}
              <a
                href={ctaPrimaryHref}
                className="fade-up-item stagger-5 block w-full bg-brand-red text-brand-alabaster font-barlow font-bold py-4 px-6 text-body text-center hover:opacity-90 transition-opacity duration-200 shadow-[4px_4px_0px_rgba(0,0,0,0.5)] mb-4"
              >
                {ctaPrimary}
              </a>

              {ctaPrivacyNote && (
                <p className="fade-up-item stagger-5 font-barlow text-xs text-brand-dim-grey text-center">
                  {ctaPrivacyNote}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
