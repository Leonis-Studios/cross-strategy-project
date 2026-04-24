# Sanity Schema: `seo`

## Purpose

Reusable SEO metadata document. Referenced by `page` documents. Drives Next.js `generateMetadata()`, Open Graph tags, and JSON-LD structured data injection.

---

## Schema Definition

```ts
// sanity/schemas/seo.ts
import { defineType, defineField } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'document',
  fields: [
    defineField({
      name: 'pageLabel',
      title: 'Page Label',
      type: 'string',
      description: 'Internal label only (e.g., "Home SEO")',
    }),
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      description: 'Recommended: 50–60 characters',
      validation: (Rule) => Rule.max(60).warning('Keep under 60 characters'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 120–160 characters',
      validation: (Rule) => Rule.max(160).warning('Keep under 160 characters'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Recommended: 1200×630px',
      options: { hotspot: true },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Override only if needed. Leave blank to use page URL.',
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Exclude this page from search engine indexing',
      initialValue: false,
    }),
    defineField({
      name: 'structuredData',
      title: 'JSON-LD Structured Data',
      type: 'text',
      description: 'Raw JSON-LD block (e.g., Person, Service, FAQPage schema). Injected into <head>.',
      rows: 10,
    }),
  ],
  preview: {
    select: { title: 'pageLabel', subtitle: 'title' },
  },
})
```

---

## Fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `pageLabel` | string | No | Studio-only internal label |
| `title` | string | No | `<title>` and OG title — max 60 chars |
| `description` | text | No | Meta description — max 160 chars |
| `ogImage` | image | No | Social share preview image |
| `canonicalUrl` | url | No | Explicit canonical override |
| `noIndex` | boolean | No | Adds `noindex` robots directive |
| `structuredData` | text | No | Raw JSON-LD injected in `<script type="application/ld+json">` |

---

## Next.js Integration

```ts
// app/[slug]/page.tsx
import { generateMetadata } from '@/lib/seo'

export async function generateMetadata({ params }) {
  const page = await sanityClient.fetch(pageQuery, { slug: params.slug })
  return {
    title: page.seo?.title,
    description: page.seo?.description,
    openGraph: {
      title: page.seo?.title,
      description: page.seo?.description,
      images: [{ url: urlFor(page.seo?.ogImage).width(1200).height(630).url() }],
    },
    robots: page.seo?.noIndex ? 'noindex' : 'index, follow',
  }
}
```

Inject `structuredData` in layout:

```tsx
{page.seo?.structuredData && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: page.seo.structuredData }}
  />
)}
```

---

## Home Page JSON-LD to Seed

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "[Owner Name]",
      "jobTitle": "Retail Placement Consultant",
      "description": "Retail placement consultant helping Amazon and DTC brands secure shelf space at major U.S. retailers.",
      "url": "https://crossoverstrategies.com"
    },
    {
      "@type": "Service",
      "name": "Retail Placement Consulting",
      "provider": { "@type": "Person", "name": "[Owner Name]" },
      "description": "Strategic consulting to help Amazon and DTC sellers gain placement in Walmart, Target, Whole Foods, and other major retail chains.",
      "areaServed": "US"
    }
  ]
}
```
