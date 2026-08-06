import { defineType, defineField, defineArrayMember } from 'sanity'

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
    defineField({
      name: 'mosaicEyebrow',
      title: 'Media Section — Small Label',
      type: 'string',
      description: 'Tiny label above the media gallery heading on the blog page. e.g. "Behind The Scenes"',
    }),
    defineField({
      name: 'mosaicHeadline',
      title: 'Media Section — Heading',
      type: 'string',
      description: 'Main heading over the media gallery. e.g. "See it in"',
    }),
    defineField({
      name: 'mosaicHeadlineAccent',
      title: 'Media Section — Heading Italic Part',
      type: 'string',
      description: 'The words in the heading that appear in italic. e.g. "action"',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      description: 'Links to your social/professional profiles (e.g. LinkedIn). Used in site structured data.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              description: 'e.g. "LinkedIn", "Instagram"',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: 'platform', subtitle: 'url' } },
        }),
      ],
    }),
  ],
})
