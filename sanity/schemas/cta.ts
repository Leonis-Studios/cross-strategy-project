import { defineType, defineField } from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'Small label above the headline',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineAccent',
      title: 'Headline Accent (italic/red portion)',
      type: 'string',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Primary CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaPrimaryHref',
      title: 'Primary CTA URL',
      type: 'string',
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Secondary CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaSecondaryHref',
      title: 'Secondary CTA URL',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'headline' },
  },
})
