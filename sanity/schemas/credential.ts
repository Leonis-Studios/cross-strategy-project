import { defineType, defineField } from 'sanity'

export const credential = defineType({
  name: 'credential',
  title: 'Credential',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short credential name. e.g. "Former Retail Buyer"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: '1–2 sentence explanation shown below the credential title',
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
