import { defineType, defineField } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'reference',
      to: [{ type: 'seo' }],
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'reference',
      to: [{ type: 'hero' }],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'credential' }] }],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'benefit' }] }],
    }),
    defineField({
      name: 'features',
      title: 'Features (What You Bring)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'feature' }] }],
    }),
    defineField({
      name: 'howItWorksSteps',
      title: 'How It Works Steps',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'howItWorksStep' }] }],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action Section',
      type: 'reference',
      to: [{ type: 'cta' }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
    }),
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare({ title, slug }: Record<string, string>) {
      return { title, subtitle: `/${slug}` }
    },
  },
})
