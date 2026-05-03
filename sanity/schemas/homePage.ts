import { defineType, defineField, defineArrayMember } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'socialProof', title: 'Social Proof' },
    { name: 'benefits', title: 'Benefits' },
    { name: 'features', title: 'Features' },
    { name: 'howItWorks', title: 'How It Works' },
    { name: 'cta', title: 'Call To Action' },
    { name: 'faq', title: 'FAQ' },
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
        defineField({
          name: 'headline',
          title: 'Headline (Owner Name)',
          type: 'string',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'headlineAccent',
          title: 'Headline Accent (italic/red portion)',
          type: 'string',
        }),
        defineField({
          name: 'subheadline',
          title: 'Subheadline (stats tagline)',
          type: 'text',
          rows: 2,
          validation: (r) => r.required(),
        }),
        defineField({ name: 'ctaPrimary', title: 'Primary CTA Label', type: 'string' }),
        defineField({ name: 'ctaPrimaryHref', title: 'Primary CTA URL', type: 'string' }),
        defineField({ name: 'ctaSecondary', title: 'Secondary CTA Label', type: 'string' }),
        defineField({ name: 'ctaSecondaryHref', title: 'Secondary CTA URL', type: 'string' }),
        defineField({
          name: 'floatingStatNumber',
          title: 'Stat Number (e.g. "240+")',
          type: 'string',
        }),
        defineField({
          name: 'floatingStatLabel',
          title: 'Stat Label (e.g. "Brands in Retail")',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'credentials',
      title: 'Credentials',
      description: 'Trust signals shown in the hero and social proof section',
      type: 'array',
      group: 'socialProof',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Credential Title',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
    }),

    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      group: 'socialProof',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 4,
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'authorName',
              title: 'Author Name',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'authorTitle',
              title: 'Author Title / Company',
              type: 'string',
            }),
          ],
          preview: { select: { title: 'authorName', subtitle: 'quote' } },
        }),
      ],
    }),

    defineField({
      name: 'benefits',
      title: 'Benefits',
      description: 'What clients get when working with you',
      type: 'array',
      group: 'benefits',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Benefit Title',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
    }),

    defineField({
      name: 'features',
      title: 'Features',
      description: 'What successful brands bring to the table',
      type: 'array',
      group: 'features',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
    }),

    defineField({
      name: 'howItWorksSteps',
      title: 'How It Works Steps',
      type: 'array',
      group: 'howItWorks',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'stepNumber',
              title: 'Step Number',
              type: 'number',
              validation: (r) => r.required().min(1),
            }),
            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'stepNumber' },
            prepare({ title, subtitle }) {
              return { title, subtitle: `Step ${subtitle}` }
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'cta',
      title: 'Call To Action Section',
      type: 'object',
      group: 'cta',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'headlineAccent',
          title: 'Headline Accent (italic/red portion)',
          type: 'string',
        }),
        defineField({ name: 'subheadline', title: 'Subheadline', type: 'text', rows: 2 }),
        defineField({ name: 'ctaPrimary', title: 'Primary Button Label', type: 'string' }),
        defineField({ name: 'ctaPrimaryHref', title: 'Primary Button URL', type: 'string' }),
        defineField({ name: 'ctaSecondary', title: 'Secondary Link Label', type: 'string' }),
        defineField({ name: 'ctaSecondaryHref', title: 'Secondary Link URL', type: 'string' }),
      ],
    }),

    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'faq',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: 'question', subtitle: 'answer' } },
        }),
      ],
    }),
  ],
})
