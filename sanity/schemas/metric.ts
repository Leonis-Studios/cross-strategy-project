import { defineType, defineField } from 'sanity'

export const metric = defineType({
  name: 'metric',
  title: 'Metric',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Number / Value',
      type: 'string',
      description: 'The big stat shown on the site. e.g. "240+", "$180M+", "1,200+"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Short label below the number. e.g. "Brands Placed", "Retail Revenue Generated"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Supporting Detail',
      type: 'text',
      rows: 2,
      description: 'Optional extra context shown as a tooltip or below the stat',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the left-to-right order. Lower number = shown first.',
    }),
  ],
  preview: {
    select: { title: 'number', subtitle: 'label' },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
  ],
})
