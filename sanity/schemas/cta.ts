import { defineType, defineField } from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Small Label Above Headline',
      type: 'string',
      description: 'Short intro above the headline. e.g. "Ready to get on shelves?"',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main heading text. e.g. "Let\'s get your brand into"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineAccent',
      title: 'Highlighted Portion of Headline',
      type: 'string',
      description: 'Red italic part that completes the headline. e.g. "retail."',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 2,
      description: 'Supporting text below the headline. e.g. "Book a free 30-minute strategy call. We\'ll audit your brand for retail readiness — no pitch, no pressure."',
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Main Button Text',
      type: 'string',
      description: 'e.g. "Book a Strategy Call"',
    }),
    defineField({
      name: 'ctaPrimaryHref',
      title: 'Main Button Link',
      type: 'string',
      description: 'Where the button goes. e.g. "#contact"',
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Secondary Link Text',
      type: 'string',
      description: 'e.g. "View the Process →"',
    }),
    defineField({
      name: 'ctaSecondaryHref',
      title: 'Secondary Link URL',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'headline' },
  },
})
