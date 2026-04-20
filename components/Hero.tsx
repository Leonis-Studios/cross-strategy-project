"use client";

import { useEffect, useRef } from "react";

const MARQUEE_TEXT =
  "Walmart · Target · Whole Foods · Costco · Nordstrom · Kroger · CVS · Walgreens · Sprouts · Meijer · ";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add("is-visible"));
  }, []);

  return (
    <section
      className="bg-brand-jet-black min-h-[90vh] flex items-center"
      aria-label="Hero"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16">
        {/* Main grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center"
        >
          {/* RIGHT COLUMN — image, appears first on mobile */}
          <div className="order-first md:order-last">
            <div className="relative">
              {/* Image placeholder */}
              <div
                className="aspect-[4/5] w-full bg-brand-blue-slate border border-brand-silver flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-barlow text-brand-silver text-label font-medium">
                  Brand Photography
                </span>
              </div>

              {/* Floating stat card */}
              <div
                className="absolute bottom-6 left-0 -translate-x-0 md:-translate-x-8 z-10 bg-brand-white border-l-4 border-brand-coral-glow shadow-box p-5"
                aria-label="240+ Brands in Retail"
              >
                <p className="font-playfair text-stat text-brand-coral-glow font-bold leading-none">
                  240+
                </p>
                <p className="font-barlow font-medium text-brand-jet-black text-label mt-1">
                  Brands in Retail
                </p>
              </div>
            </div>
          </div>

          {/* LEFT COLUMN — text */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <span className="fade-up-item stagger-1 small-caps font-barlow font-semibold text-brand-coral-glow tracking-widest text-label">
              Amazon Sellers → Retail Shelves
            </span>

            {/* Headline */}
            <h1 className="fade-up-item stagger-2 font-playfair text-display-lg md:text-display-2xl lg:text-display-3xl leading-[0.95] text-brand-silver ">
              The bridge from
              <br />
              Amazon to
              <br />
              <em className="italic text-brand-coral-glow">
                brick &amp; mortar.
              </em>
            </h1>

            {/* Subheadline */}
            <p className="fade-up-item stagger-3 font-barlow text-subheadline text-brand-silver max-w-120 leading-relaxed">
              Crossover Strategies helps Amazon-native brands secure placement
              in the nation&apos;s top retail chains — from strategy to shelf.
            </p>

            {/* CTAs */}
            <div className="fade-up-item stagger-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button
                className="w-full sm:w-auto bg-brand-coral-glow text-white font-barlow font-semibold px-8 py-4 rounded-none hover:opacity-90 transition-colors duration-200"
                type="button"
              >
                Book a Strategy Call
              </button>
              <a
                href="#how-it-works"
                className="font-barlow font-medium text-brand-coral-glow hover:underline transition-all duration-200"
              >
                See How It Works →
              </a>
            </div>

            {/* Trust signals */}
            <div className="fade-up-item stagger-5 flex flex-wrap items-center gap-3 font-barlow font-semibold text-brand-silver text-label">
              <span>240+ Brands Placed</span>
              <span
                className="w-1 h-1 rounded-full bg-brand-silver inline-block"
                aria-hidden="true"
              />
              <span>$180M+ Revenue Generated</span>
              <span
                className="w-1 h-1 rounded-full bg-brand-silver inline-block"
                aria-hidden="true"
              />
              <span>1,200+ Store Doors</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-brand-silver my-10" aria-hidden="true" />

        {/* Marquee strip */}
        <div className="bg-brand-sand py-4 overflow-hidden -mx-6 lg:-mx-12 px-0">
          <div
            className="flex whitespace-nowrap animate-marquee"
            aria-label="Retail partners"
          >
            <span className="flex-shrink-0 font-barlow font-medium text-brand-silver small-caps tracking-widest text-label px-8">
              {MARQUEE_TEXT}
            </span>
            <span
              className="flex-shrink-0 font-barlow font-medium text-brand-silver small-caps tracking-widest text-label px-8"
              aria-hidden="true"
            >
              {MARQUEE_TEXT}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
