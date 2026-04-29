"use client"

import { useActionState } from 'react'
import { sendContactMessage, type ContactFormState } from '@/app/actions/contact'
import AnimateIn from './AnimateIn'

const INITIAL_STATE: ContactFormState = { ok: false }

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, INITIAL_STATE)

  return (
    <section
      id="contact"
      className="bg-brand-jet-black py-24 px-6 lg:px-12 border-t border-brand-dim-grey"
      aria-label="Contact form"
    >
      <AnimateIn className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="fade-up-item stagger-1 small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label">
            Get In Touch
          </p>
          <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-6" aria-hidden="true" />
          <h2 className="fade-up-item stagger-2 font-playfair text-display-sm md:text-display-md text-brand-alabaster leading-tight">
            Ready to get your brand{' '}
            <em className="italic text-brand-red">on shelves?</em>
          </h2>
          <p className="fade-up-item stagger-3 font-barlow text-brand-silver text-body mt-6 max-w-xl mx-auto leading-relaxed">
            Send a message and we&apos;ll follow up within one business day.
          </p>
        </div>

        {state.ok ? (
          <div className="fade-up-item stagger-2 bg-[#222222] border border-brand-dim-grey p-10 text-center">
            <div className="w-10 h-0.5 bg-brand-red mx-auto mb-6" aria-hidden="true" />
            <p className="font-playfair text-brand-alabaster text-display-sm">
              Message received.
            </p>
            <p className="font-barlow text-brand-silver text-body mt-4 leading-relaxed">
              We&apos;ll be in touch within one business day.
            </p>
          </div>
        ) : (
          <form action={action} noValidate className="fade-up-item stagger-2 space-y-5">
            {state.error && (
              <p
                role="alert"
                className="font-barlow text-brand-red text-label bg-brand-red/10 border border-brand-red/30 px-4 py-3"
              >
                {state.error}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="font-barlow font-semibold text-brand-silver text-label tracking-wide"
                >
                  Name <span className="text-brand-red" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="bg-[#1a1a1a] border border-brand-dim-grey text-brand-alabaster font-barlow text-body px-4 py-3 placeholder:text-brand-dim-grey focus:outline-none focus:border-brand-red transition-colors duration-200"
                  placeholder="Jane Smith"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="font-barlow font-semibold text-brand-silver text-label tracking-wide"
                >
                  Email <span className="text-brand-red" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="bg-[#1a1a1a] border border-brand-dim-grey text-brand-alabaster font-barlow text-body px-4 py-3 placeholder:text-brand-dim-grey focus:outline-none focus:border-brand-red transition-colors duration-200"
                  placeholder="jane@yourbrand.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-company"
                className="font-barlow font-semibold text-brand-silver text-label tracking-wide"
              >
                Brand / Company{' '}
                <span className="text-brand-dim-grey font-normal">(optional)</span>
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                className="bg-[#1a1a1a] border border-brand-dim-grey text-brand-alabaster font-barlow text-body px-4 py-3 placeholder:text-brand-dim-grey focus:outline-none focus:border-brand-red transition-colors duration-200"
                placeholder="Your Brand Co."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="font-barlow font-semibold text-brand-silver text-label tracking-wide"
              >
                Message <span className="text-brand-red" aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="bg-[#1a1a1a] border border-brand-dim-grey text-brand-alabaster font-barlow text-body px-4 py-3 placeholder:text-brand-dim-grey focus:outline-none focus:border-brand-red transition-colors duration-200 resize-none"
                placeholder="Tell us about your brand — current channels, target retailers, timeline..."
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full md:w-auto font-barlow font-bold text-brand-alabaster bg-brand-red px-8 py-4 hover:opacity-90 transition-opacity duration-200 text-label disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {pending ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </AnimateIn>
    </section>
  )
}
