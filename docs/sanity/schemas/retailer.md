# Sanity Schema: `retailer`

## Purpose

Represents a retail chain where the owner has placed client brands. Used in the retailer grid and marquee.

---

## Schema Definition

```ts
// sanity/schemas/retailer.ts
import { defineType, defineField } from 'sanity'

export const retailer = defineType({
  name: 'retailer',
  title: 'Retailer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Retailer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: false },
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
      ],
    }),
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Premium (top grid position)', value: 'premium' },
          { title: 'Standard', value: 'standard' },
        ],
        layout: 'radio',
      },
      initialValue: 'standard',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Show this retailer on the site',
      initialValue: true,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'tier', media: 'logo' },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
  ],
})
```

---

## Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `name` | string | Yes | Retailer display name |
| `logo` | image | No | SVG or PNG logo file |
| `tier` | string (enum) | No | `premium` or `standard` |
| `active` | boolean | No | Toggle visibility without deleting |
| `displayOrder` | number | No | Grid position |

---

## Current Retailers to Seed

```json
[
  { "name": "Walmart", "tier": "premium", "displayOrder": 1, "active": true },
  { "name": "Target", "tier": "premium", "displayOrder": 2, "active": true },
  { "name": "Whole Foods", "tier": "premium", "displayOrder": 3, "active": true },
  { "name": "Costco", "tier": "premium", "displayOrder": 4, "active": true },
  { "name": "Nordstrom", "tier": "standard", "displayOrder": 5, "active": true },
  { "name": "Kroger", "tier": "standard", "displayOrder": 6, "active": true },
  { "name": "CVS", "tier": "standard", "displayOrder": 7, "active": true },
  { "name": "Sprouts", "tier": "standard", "displayOrder": 8, "active": true }
]
```
