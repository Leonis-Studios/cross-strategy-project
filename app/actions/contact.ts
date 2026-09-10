"use server"

import { Resend } from 'resend'
import { client } from '@/sanity/lib/client'
import { contactEmailQuery } from '@/sanity/lib/queries'

export interface ContactFormState {
  ok: boolean
  error?: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name          = (formData.get('name')          as string)?.trim()
  const email         = (formData.get('email')         as string)?.trim()
  const company       = (formData.get('company')       as string)?.trim()
  const brandUrl      = (formData.get('brandUrl')      as string)?.trim()
  const annualRevenue = (formData.get('annualRevenue') as string)?.trim()
  const message       = (formData.get('message')       as string)?.trim()

  // Honeypot: real users never see this field, bots fill it in.
  if ((formData.get('website') as string)?.trim()) {
    return { ok: true }
  }

  if (!name || !email || !annualRevenue || !message) {
    return { ok: false, error: 'Name, email, annual revenue, and message are required.' }
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('[contact form] RESEND_API_KEY is not set')
    return { ok: false, error: 'Failed to send message. Please try again.' }
  }

  // Recipient is editable in Sanity (Site Settings → Contact Email); env is the fallback.
  const recipient =
    (await client.fetch<string | null>(contactEmailQuery).catch(() => null)) ||
    process.env.RESEND_TO_EMAIL

  if (!recipient) {
    console.error('[contact form] no recipient: set Site Settings → Contact Email or RESEND_TO_EMAIL')
    return { ok: false, error: 'Failed to send message. Please try again.' }
  }

  const { error } = await resend.emails.send({
    // swap 'from' to a verified domain address once the domain is verified in Resend
    from: process.env.RESEND_FROM_EMAIL || 'CrossStrat <onboarding@resend.dev>',
    to: recipient,
    replyTo: email,
    subject: `New lead: ${name}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${company ? escapeHtml(company) : '—'}</p>
      <p><strong>Brand URL:</strong> ${brandUrl ? escapeHtml(brandUrl) : '—'}</p>
      <p><strong>Annual Revenue:</strong> ${escapeHtml(annualRevenue)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
    `,
  })

  if (error) {
    console.error('[contact form] Resend error', error)
    return { ok: false, error: 'Failed to send message. Please try again.' }
  }

  return { ok: true }
}
