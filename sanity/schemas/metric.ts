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
      description: 'e.g., "240+", "$180M+", "1,200+"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., "Brands Placed", "Retail Revenue Generated"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Extended Description',
      type: 'text',
      rows: 2,
      description: 'Optional tooltip or supporting copy',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = displayed first',
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
