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
      description: 'Your full name as it appears on the About page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ownerTitle',
      title: 'Your Title / Role',
      type: 'string',
      description: 'e.g. "Retail Placement Consultant"',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 8,
      description: 'Your biography shown on the About page. Use two blank lines to create paragraph breaks.',
    }),
    defineField({
      name: 'photo',
      title: 'Owner Photo',
      type: 'image',
      description: 'Your professional photo shown on the About page',
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
      title: 'Highlight Stats',
      type: 'array',
      description: 'Key numbers shown prominently on the About page. e.g. "240+ Brands Placed"',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'The number or stat. e.g. "240+", "$180M+"',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Short label below the number. e.g. "Brands Placed"',
            }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
    }),
    defineField({
      name: 'standoutQuote',
      title: 'Featured Quote',
      type: 'text',
      rows: 3,
      description: 'A memorable quote from you, shown between your bio and the contact form',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: { title: 'ownerName', subtitle: 'ownerTitle' },
  },
})
