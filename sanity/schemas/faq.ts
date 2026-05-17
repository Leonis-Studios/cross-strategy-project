import { defineType, defineField } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'The question as it appears on the site',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      description: 'Full answer shown when the question is expanded',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order. Lower number = shown first.',
    }),
  ],
  preview: {
    select: { title: 'question', subtitle: 'displayOrder' },
    prepare({ title, subtitle }: Record<string, string>) {
      return { title, subtitle: subtitle ? `#${subtitle}` : undefined }
    },
  },
})
