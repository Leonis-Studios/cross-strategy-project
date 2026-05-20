import { defineType, defineField } from 'sanity'

export const blogTag = defineType({
  name: 'blogTag',
  title: 'Blog Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Tag label shown at the bottom of article pages. Use specific, searchable terms. e.g. "Walmart", "Pitch Deck", "Margins"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated from the title. Click "Generate" after setting the title.',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
})
