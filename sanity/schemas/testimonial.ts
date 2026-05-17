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
      description: 'The testimonial in the client\'s own words',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      description: 'Client\'s name as shown on site. e.g. "Sarah K."',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorTitle',
      title: 'Author Title',
      type: 'string',
      description: 'Their role and brand type. e.g. "Co-Founder, organic snack brand"',
    }),
    defineField({
      name: 'authorCompany',
      title: 'Company',
      type: 'string',
      description: 'Company name — only needed if not already included in the title field above',
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
      description: 'Turn on to show this testimonial in the main section on the home page',
      initialValue: false,
    }),
    defineField({
      name: 'retailer',
      title: 'Retailer Mentioned',
      type: 'string',
      description: 'Which retailer this client got placed in. e.g. "Walmart". Used for filtering.',
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
