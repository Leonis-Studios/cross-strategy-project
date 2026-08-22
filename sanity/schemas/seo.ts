import { defineType, defineField } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      description: 'Shown in browser tab and search results (50–60 chars recommended). Leave blank to use the page title.',
      validation: (Rule) => Rule.max(60).warning('Keep under 60 characters'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Shown in search result snippets (120–160 chars recommended). Leave blank to use page content.',
      validation: (Rule) => Rule.max(160).warning('Keep under 160 characters'),
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      description: 'Social share image (1200×630px recommended). Leave blank to use the page\'s main image.',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the social share image for screen readers.',
        }),
      ],
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical URL Override',
      type: 'url',
      description: 'Only set this if this page should point search engines to a different URL. Leave blank in normal cases.',
      validation: (Rule) => Rule.uri({ allowRelative: true, scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'noindex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      description: 'Turn on to prevent this page from appearing in Google/Bing search results. Rarely needed.',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
})
