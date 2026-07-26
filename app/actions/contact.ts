"use server"

import { Resend } from 'resend'

export interface ContactFormState {
  ok: boolean
  error?: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

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

  if (!name || !email || !annualRevenue || !message) {
    return { ok: false, error: 'Name, email, annual revenue, and message are required.' }
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  const { error } = await resend.emails.send({
    // swap 'from' to a verified domain address once crossstrat.com is verified in Resend
    from: 'CrossStrat <onboarding@resend.dev>',
    to: 'contact@crossstrat.com',
    replyTo: email,
    subject: `New lead: ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || '—'}</p>
      <p><strong>Brand URL:</strong> ${brandUrl || '—'}</p>
      <p><strong>Annual Revenue:</strong> ${annualRevenue}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  })

  if (error) {
    console.error('[contact form] Resend error', error)
    return { ok: false, error: 'Failed to send message. Please try again.' }
  }

  return { ok: true }
}
