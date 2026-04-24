# Sanity Schema: `metric`

## Purpose

A single stat/metric displayed in the metrics banner and trust signals. Allows the owner to update numbers without a code deploy.

---

## Schema Definition

```ts
// sanity/schemas/metric.ts
import { defineType, defineField } from 'sanity'

export const metric = defineType({
  name: 'metric',
  title: 'Metric',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Number / Value',
      type: 'string',
      description: 'e.g., "240+", "$180M+", "1,200+"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., "Brands Placed", "Retail Revenue Generated"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Extended Description',
      type: 'text',
      rows: 2,
      description: 'Optional tooltip or supporting copy',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = displayed first',
    }),
  ],
  preview: {
    select: { title: 'number', subtitle: 'label' },
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
| `number` | string | Yes | The formatted number (e.g., "240+") |
| `label` | string | Yes | Short descriptor |
| `description` | text | No | Extended copy for tooltips |
| `displayOrder` | number | No | Controls sort order |

---

## Current Metrics to Seed

```json
[
  { "number": "240+", "label": "Brands Placed", "displayOrder": 1 },
  { "number": "$180M+", "label": "Retail Revenue Generated", "displayOrder": 2 },
  { "number": "1,200+", "label": "Store Doors Opened", "displayOrder": 3 }
]
```
