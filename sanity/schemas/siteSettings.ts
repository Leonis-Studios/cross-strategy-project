import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'ownerName',
      title: 'Owner / Business Name',
      type: 'string',
      description: 'Your full name — used throughout the site wherever your name appears.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'logoText',
      title: 'Navbar Logo Text',
      type: 'string',
      description: 'Text shown in the top-left of the navigation bar. e.g. "CrossStrat" or your name.',
    }),
    defineField({
      name: 'ownerTitle',
      title: 'Your Title / Role',
      type: 'string',
      description: 'Your role shown on the site. e.g. "Retail Placement Consultant"',
    }),
    defineField({
      name: 'calendarUrl',
      title: 'Booking / Calendar Link',
      type: 'string',
      description: 'The URL visitors go to when they click "Book a Call". e.g. your Calendly link.',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'Email address used on the contact form and in the footer.',
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'text',
      rows: 2,
      description: 'Short tagline shown at the bottom of every page.',
    }),
  ],
})
