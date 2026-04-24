"use client";

import { Fragment, useEffect, useRef } from "react";
import type { HeroData, MetricData } from "@/sanity/types";

const MARQUEE_TEXT =
  "Walmart · Target · Whole Foods · Costco · Nordstrom · Kroger · CVS · Walgreens · Sprouts · Meijer · ";

interface HeroProps {
  data: HeroData | null;
  metrics: MetricData[];
}

export default function Hero({ data, metrics }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add("is-visible"));
  }, []);

  const floatNumber = data?.floatingStatNumber ?? "240+";
  const floatLabel = data?.floatingStatLabel ?? "Brands in Retail";

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
                className="aspect-4/5 w-full bg-brand-dim-grey border border-brand-silver flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-barlow text-brand-silver text-label font-medium">
                  Owner Photography
                </span>
              </div>

              {/* Floating stat card */}
              <div
                className="absolute bottom-6 left-0 translate-x-0 md:-translate-x-8 z-10 bg-brand-alabaster border-l-4 border-brand-red shadow-box p-5"
                aria-label={`${floatNumber} ${floatLabel}`}
              >
                <p className="font-playfair text-stat text-brand-red font-bold leading-none">
                  {floatNumber}
                </p>
                <p className="font-barlow font-semibold text-brand-jet-black text-label mt-1">
                  {floatLabel}
                </p>
              </div>
            </div>
          </div>

          {/* LEFT COLUMN — text */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <span className="fade-up-item stagger-1 small-caps font-barlow font-bold text-brand-red tracking-widest text-label">
              {data?.eyebrow ?? "Amazon & DTC Sellers → Retail Shelves"}
            </span>

            {/* Headline */}
            <h1 className="fade-up-item stagger-2 font-playfair text-display-lg md:text-display-2xl lg:text-display-3xl leading-[0.95] text-brand-alabaster">
              {data?.headline ?? "I get your brand on"}
              {(data?.headlineAccent ?? "retail shelves.") && (
                <>
                  <br />
                  <em className="italic text-brand-red">
                    {data?.headlineAccent ?? "retail shelves."}
                  </em>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="fade-up-item stagger-3 font-barlow text-subheadline text-brand-silver max-w-120 leading-relaxed">
              {data?.subheadline ?? (
                <>
                  I&apos;m{" "}
                  <strong className="text-brand-alabaster font-semibold">
                    [Owner Name]
                  </strong>
                  , a retail placement consultant who has helped 240+ Amazon and
                  DTC brands secure shelf space at America&apos;s top retailers
                  — from first pitch to purchase order.
                </>
              )}
            </p>

            {/* CTAs */}
            <div className="fade-up-item stagger-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <a
                href={data?.ctaPrimaryHref ?? "#"}
                className="w-full sm:w-auto bg-brand-red text-brand-alabaster font-barlow font-bold px-8 py-4 rounded-none hover:opacity-90 transition-colors duration-200 text-center"
              >
                {data?.ctaPrimary ?? "Work With Me"}
              </a>
              <a
                href={data?.ctaSecondaryHref ?? "#track-record"}
                className="font-barlow font-semibold text-brand-red hover:underline transition-all duration-200"
              >
                {data?.ctaSecondary ?? "See My Track Record →"}
              </a>
            </div>

            {/* Trust signals — reuse global metrics */}
            {metrics.length > 0 && (
              <div className="fade-up-item stagger-5 flex flex-wrap items-center gap-3 font-barlow font-semibold text-brand-silver text-label">
                {metrics.map((m, i) => (
                  <Fragment key={m._id}>
                    {i > 0 && (
                      <span
                        className="w-1 h-1 rounded-full bg-brand-silver inline-block"
                        aria-hidden="true"
                      />
                    )}
                    <span>
                      {m.number} {m.label}
                    </span>
                  </Fragment>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-brand-dim-grey my-10" aria-hidden="true" />

        {/* Marquee strip */}
        <div className="bg-brand-dim-grey py-4 overflow-hidden -mx-6 lg:-mx-12 px-0">
          <div
            className="flex whitespace-nowrap animate-marquee"
            aria-label="Retailers where I've placed brands"
          >
            <span className="shrink-0 font-barlow font-semibold text-brand-alabaster small-caps tracking-widest text-label px-8">
              {MARQUEE_TEXT}
            </span>
            <span
              className="shrink-0 font-barlow font-semibold text-brand-alabaster small-caps tracking-widest text-label px-8"
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
