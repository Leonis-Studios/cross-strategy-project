import { defineType, defineField, defineArrayMember } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'H1 on the article page, blog grid card, and browser tab. Aim for 50–70 chars. e.g. "How to Get Your Product Into Walmart: The Complete Playbook"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL path for this post: yourdomain.com/blog/your-slug. Click "Generate" to auto-fill from the title. Hyphens, no spaces, lowercase. e.g. how-to-get-product-into-walmart',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'Date shown in the article header. Controls sort order — newest first in the blog listing. Pre-date for scheduled content.',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown in listings and search results (recommended: 120–160 chars)',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers and search engines',
        }),
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Broad topic shown in red above the article title and used to find related posts. Assign 1–2. Create new ones in the "Blog Category" document type.',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'blogCategory' }] })],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description: 'Fine-grained labels shown at the bottom of the article page. Assign 3–5. Create new ones in the "Blog Tag" document type.',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'blogTag' }] })],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
      description: 'Featured posts appear first and are displayed more prominently in the listing',
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      description: 'Shown as "X min read" in the article header. Estimate ~200 words/min and round up. A 1,200-word post ≈ 5 min.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      description: 'Full article content. Use H2 for major sections, H3 for sub-sections — do not add H1 (the title above is already H1). Inline images need Alt Text.',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Describe the image for screen readers and Google Images. Be specific: "Walmart buyer meeting" not "meeting"',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional text shown below the image. Use for attribution or context the image alone does not convey.',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Overrides post title for search engines (recommended: 50–60 chars)',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Meta description for search engines (recommended: 150–160 chars)',
    }),
  ],
  orderings: [
    {
      title: 'Published Date, Newest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'coverImage',
    },
  },
})
