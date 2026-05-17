import { defineType, defineField } from 'sanity'

export const feature = defineType({
  name: 'feature',
  title: 'What You Bring (Requirement)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short requirement name. e.g. "Proven Sales Velocity"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Explanation shown below the requirement title on the site',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order these appear. Lower number = shown first.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
})
