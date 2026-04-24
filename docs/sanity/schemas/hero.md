# Sanity Schema: `hero`

## Purpose

Document type for the hero section content. Reusable across pages.

---

## Schema Definition

```ts
// sanity/schemas/hero.ts
import { defineType, defineField } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'Small label above the headline (e.g., "Amazon & DTC Sellers → Retail Shelves")',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineAccent',
      title: 'Headline Accent (italic/red portion)',
      type: 'string',
      description: 'The italicized red part of the headline rendered on its own line',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Primary CTA Label',
      type: 'string',
      description: 'Button text (e.g., "Work With Me")',
    }),
    defineField({
      name: 'ctaPrimaryHref',
      title: 'Primary CTA URL',
      type: 'string',
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Secondary CTA Label',
      type: 'string',
      description: 'Link text (e.g., "See My Track Record →")',
    }),
    defineField({
      name: 'ctaSecondaryHref',
      title: 'Secondary CTA URL',
      type: 'string',
    }),
    defineField({
      name: 'floatingStatNumber',
      title: 'Floating Stat Number',
      type: 'string',
      description: 'e.g., "240+"',
    }),
    defineField({
      name: 'floatingStatLabel',
      title: 'Floating Stat Label',
      type: 'string',
      description: 'e.g., "Brands in Retail"',
    }),
    defineField({
      name: 'image',
      title: 'Owner Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'headline' },
  },
})
```

---

## Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `eyebrow` | string | No | Small caps label above H1 |
| `headline` | string | Yes | Main H1 text |
| `headlineAccent` | string | No | Italic red portion of H1 |
| `subheadline` | text | Yes | Paragraph below H1 |
| `ctaPrimary` | string | No | Primary button label |
| `ctaPrimaryHref` | string | No | Primary button URL |
| `ctaSecondary` | string | No | Secondary link label |
| `ctaSecondaryHref` | string | No | Secondary link URL |
| `floatingStatNumber` | string | No | e.g. "240+" |
| `floatingStatLabel` | string | No | e.g. "Brands in Retail" |
| `image` | image | No | Owner portrait photo with hotspot |
