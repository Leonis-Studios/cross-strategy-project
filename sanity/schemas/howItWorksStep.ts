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
      description: 'Controls the order of this step. Step 1 appears first.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
      description: 'Short step name. e.g. "Retail Readiness Audit"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'What happens in this step, shown below the title',
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
