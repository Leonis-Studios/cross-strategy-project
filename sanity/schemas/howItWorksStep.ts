import { defineType, defineField } from 'sanity'

export const howItWorksStep = defineType({
  name: 'howItWorksStep',
  title: 'How It Works Step',
  type: 'document',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Step Number',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'stepNumber' },
    prepare(selection: Record<string, string>) {
      return { title: selection.title, subtitle: `Step ${selection.subtitle}` }
    },
  },
})
