"use client";

import { useEffect, useRef } from "react";
import type { HeroData, MetricData } from "@/sanity/types";

interface HeroProps {
  data: HeroData | null;
  metrics: MetricData[];
}

export default function Hero({ data, metrics }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add("is-visible"));
  }, []);

  const displayMetrics =
    metrics.length > 0
      ? metrics.slice(0, 3)
      : [
          { _id: "m1", number: "240+", label: "Brands Placed" },
          { _id: "m2", number: "$180M+", label: "Retail Revenue" },
          { _id: "m3", number: "1,200+", label: "Store Doors" },
        ];

  return (
    <div className="hero-outer-shadow">
      <section
        ref={sectionRef}
        aria-label="Start your retail placement journey"
        className="relative overflow-hidden lg:min-h-[90vh]"
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
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:min-h-[90vh]">

          {/* LEFT PANEL — owner-focused (light theme) */}
          <div className="relative flex flex-col justify-center overflow-hidden px-6 lg:px-16 py-12 lg:py-28 bg-brand-alabaster lg:bg-transparent">
            {/* Accent bar */}
            <div
              className="hero-sweep absolute top-0 left-0 right-0 h-1 bg-brand-red"
              aria-hidden="true"
            />

            {/* Sliding content wrapper */}
            <div className="hero-slide-left flex flex-col">
              {/* Eyebrow */}
              <span className="fade-up-item stagger-1 small-caps font-barlow font-bold text-brand-red tracking-widest text-label uppercase mb-3">
                Retail Placement Consultant
              </span>

              {/* Name heading */}
              <h1 className="fade-up-item stagger-2 font-playfair text-display-sm lg:text-display-xl leading-[0.9] text-brand-jet-black mb-4">
                {data?.headline ?? "[Owner Name]"}
              </h1>

              {/* Credentials subtitle */}
              <p className="fade-up-item stagger-3 font-barlow text-body text-brand-dim-grey mb-6">
                {data?.subheadline ??
                  "240+ brands placed · $180M+ in retail revenue · 1,200+ store doors opened"}
              </p>

              {/* Divider */}
              <div
                className="fade-up-item stagger-3 h-px w-16 bg-brand-red mb-6"
                aria-hidden="true"
              />

              {/* Bio */}
              <p className="fade-up-item stagger-4 font-barlow text-label text-brand-dim-grey leading-relaxed max-w-sm mb-10">
                I help Amazon-native and DTC brands earn shelf space at Walmart,
                Target, Whole Foods, Costco, and every major U.S. retailer in
                between — from first pitch to purchase order.
              </p>

              {/* Stat cards */}
              <div
                className="flex gap-4"
                role="list"
                aria-label="Career highlights"
              >
                {displayMetrics.map((m, i) => (
                  <div
                    key={m._id}
                    role="listitem"
                    className={`fade-up-item stagger-${i + 5} stat-card-lift flex-1 bg-white shadow-box p-3 lg:p-4 border border-brand-alabaster`}
                  >
                    <p className="font-playfair font-bold text-stat text-brand-red leading-none">
                      {m.number}
                    </p>
                    <p className="font-barlow text-xs text-brand-dim-grey mt-2 leading-tight">
                      {m.label}
                    </p>
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
                Get your brand on
                <br />
                <em className="italic text-brand-red">retail shelves.</em>
              </h2>

              {/* Subheading */}
              <p className="fade-up-item stagger-3 font-barlow text-body text-brand-silver mb-8 leading-relaxed">
                Book a free strategy call. I&apos;ll map the right retail
                targets for your brand and show you exactly what it takes to
                land purchase orders.
              </p>

              {/* Trust signals */}
              <ul
                className="fade-up-item stagger-4 flex flex-col gap-3 mb-10"
                aria-label="What to expect"
              >
                {[
                  "No pitch — just an honest assessment",
                  "No pressure — cancel anytime",
                  "Response within 24 hours",
                ].map((signal) => (
                  <li
                    key={signal}
                    className="flex items-center gap-3 font-barlow text-label text-brand-silver"
                  >
                    <span className="text-brand-red font-bold leading-none">✓</span>
                    {signal}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href="mailto:contact@crossstrat.com"
                className="fade-up-item stagger-5 block w-full bg-brand-red text-brand-alabaster font-barlow font-bold py-4 px-6 text-body text-center hover:opacity-90 transition-opacity duration-200 shadow-[4px_4px_0px_rgba(0,0,0,0.5)] mb-4"
              >
                Book My Free Strategy Call →
              </a>

              <p className="fade-up-item stagger-5 font-barlow text-xs text-brand-dim-grey text-center">
                Your information is never shared or sold.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
