# Sanity Schema: `page`

## Purpose

Top-level document type for each page on the site. References an SEO document and composes sections from other schema types.

---

## Schema Definition

```ts
// sanity/schemas/page.ts
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
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'metric' }] }],
    }),
    defineField({
      name: 'retailers',
      title: 'Retailers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'retailer' }] }],
    }),
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare({ title, slug }) {
      return { title, subtitle: `/${slug}` }
    },
  },
})
```

---

## Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | Yes | Internal label in Sanity Studio |
| `slug` | slug | Yes | URL path (e.g., `home`, `about`) |
| `seo` | reference → seo | No | SEO metadata for this page |
| `hero` | reference → hero | No | Hero section content |
| `testimonials` | array of reference → testimonial | No | Ordered list of testimonials |
| `metrics` | array of reference → metric | No | Stats displayed in metrics banner |
| `retailers` | array of reference → retailer | No | Retailer grid entries |

---

## Pages to Create in Studio

| Title | Slug | Notes |
|---|---|---|
| Home | `home` | Main landing page |
| About | `about` | Owner bio and story |
| Services | `services` | Consulting packages |
| Contact | `contact` | Booking / contact form |
