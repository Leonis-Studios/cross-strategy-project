import { defineType, defineField } from 'sanity'

export const benefit = defineType({
  name: 'benefit',
  title: 'Benefit',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short benefit name. e.g. "Direct Buyer Access"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Explanation shown below the benefit title on the site',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order benefits appear. Lower number = shown first.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
})
