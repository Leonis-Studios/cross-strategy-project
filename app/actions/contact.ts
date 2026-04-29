"use server"

export interface ContactFormState {
  ok: boolean
  error?: string
}

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name    = (formData.get('name')    as string)?.trim()
  const email   = (formData.get('email')   as string)?.trim()
  const company = (formData.get('company') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !email || !message) {
    return { ok: false, error: 'Name, email, and message are required.' }
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  // TODO: wire Resend (or similar) to send email notification
  console.log('[contact form]', { name, email, company, message })

  return { ok: true }
}
