import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'ownerName',
      title: 'Owner Name',
      type: 'string',
      description: 'Your full name — used throughout the site wherever your name appears',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'ownerTitle',
      title: 'Owner Title / Role',
      type: 'string',
      description: 'Your role shown on the site. e.g. "Retail Placement Consultant"',
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'text',
      rows: 2,
      description: 'Short tagline shown at the bottom of every page',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'Email address used on the contact form and in the footer',
    }),
  ],
})
