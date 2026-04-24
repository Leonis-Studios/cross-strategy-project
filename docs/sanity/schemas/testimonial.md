# Sanity Schema: `testimonial`

## Purpose

Individual client testimonial. Referenced by `page` documents and rendered in the social proof section.

---

## Schema Definition

```ts
// sanity/schemas/testimonial.ts
import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorTitle',
      title: 'Author Title',
      type: 'string',
      description: 'e.g., "Founder, Bloom Organics"',
    }),
    defineField({
      name: 'authorCompany',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'authorPhoto',
      title: 'Author Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this testimonial prominently on the home page',
      initialValue: false,
    }),
    defineField({
      name: 'retailer',
      title: 'Retailer Mentioned',
      type: 'string',
      description: 'Which retailer this placement was at (for filtering)',
    }),
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'authorTitle' },
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [{ field: 'featured', direction: 'desc' }],
    },
  ],
})
```

---

## Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `quote` | text | Yes | The testimonial body |
| `authorName` | string | Yes | Client's name |
| `authorTitle` | string | No | Job title + company |
| `authorCompany` | string | No | Company name (for filtering/display) |
| `authorPhoto` | image | No | Optional headshot |
| `featured` | boolean | No | Pinned to home page display |
| `retailer` | string | No | Retailer associated with this placement |

---

## Current Testimonials to Seed

```json
[
  {
    "quote": "Working with [Owner Name] was like having an insider at every major retail buyer's desk. He got us into 400 Whole Foods locations in under 8 months.",
    "authorName": "Sarah M.",
    "authorTitle": "Founder, Bloom Organics",
    "featured": true,
    "retailer": "Whole Foods"
  },
  {
    "quote": "He knew exactly what Target's buyers needed to hear. We went from Amazon-only to national retail in under a year.",
    "authorName": "James R.",
    "authorTitle": "CEO, NovaNutrition",
    "featured": true,
    "retailer": "Target"
  },
  {
    "quote": "His dual fluency — Amazon seller strategy and retail buyer psychology — is something you simply can't find anywhere else.",
    "authorName": "Dana K.",
    "authorTitle": "CMO, PureLeaf Wellness",
    "featured": true
  }
]
```
