import { defineType, defineField } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'ownerName',
      title: 'Owner Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ownerTitle',
      title: 'Owner Title / Tagline',
      type: 'string',
      description: 'e.g. "Retail Placement Consultant"',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'photo',
      title: 'Owner Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'statsHighlight',
      title: 'Stats Highlight',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
    }),
    defineField({
      name: 'standoutQuote',
      title: 'Standout Quote',
      type: 'text',
      rows: 3,
      description: 'Optional pull quote displayed between bio and contact form.',
    }),
  ],
  preview: {
    select: { title: 'ownerName', subtitle: 'ownerTitle' },
  },
})
