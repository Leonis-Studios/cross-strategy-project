import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorTitle',
      title: 'Author Title',
      type: 'string',
      description: 'e.g., "Founder, Bloom Organics"',
    }),
    defineField({
      name: 'authorCompany',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'authorPhoto',
      title: 'Author Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this testimonial prominently on the home page',
      initialValue: false,
    }),
    defineField({
      name: 'retailer',
      title: 'Retailer Mentioned',
      type: 'string',
      description: 'Which retailer this placement was at (for filtering)',
    }),
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'authorTitle' },
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [{ field: 'featured', direction: 'desc' }],
    },
  ],
})
