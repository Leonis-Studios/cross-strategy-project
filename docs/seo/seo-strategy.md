# SEO Strategy — Traditional Search Engine Optimization

## Target Keywords

### Primary (high-intent, low competition)
- `retail placement consultant`
- `Amazon to retail consultant`
- `DTC to retail distribution consultant`
- `how to get my product into retail stores`
- `Amazon seller retail expansion`

### Secondary (broader reach)
- `retail buyer pitch consultant`
- `get product into Walmart Target Whole Foods`
- `Amazon brand retail distribution strategy`
- `brick and mortar distribution consultant`
- `retail shelf placement expert`

### Long-tail (blog/content targets)
- `how to pitch your product to retail buyers`
- `Amazon FBA brand getting into Target Walmart`
- `what retail buyers look for in new products`
- `DTC brand retail expansion strategy 2025`

---

## Metadata Structure (Next.js App Router)

### Per-page metadata via `generateMetadata()`

```ts
// app/layout.tsx — site-wide defaults
export const metadata: Metadata = {
  metadataBase: new URL('https://crossoverstrategies.com'),
  title: {
    default: '[Owner Name] — Retail Placement Consultant',
    template: '%s | [Owner Name]',
  },
  description: 'I help Amazon and DTC sellers get their products on shelves at Walmart, Target, Whole Foods, and 1,200+ retail doors.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Crossover Strategies',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@[owner-twitter-handle]',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}
```

---

## Sitemap Implementation

### `app/sitemap.ts`

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://crossoverstrategies.com'
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // Add blog posts dynamically when content exists
  ]
}
```

### Priority Matrix

| Page | Priority | Change Frequency | Notes |
|---|---|---|---|
| `/` | 1.0 | weekly | Main conversion page |
| `/services` | 0.9 | monthly | Key SEO target |
| `/about` | 0.8 | monthly | E-E-A-T signals |
| `/blog/*` | 0.7 | weekly | Content for long-tail |
| `/contact` | 0.7 | monthly | Conversion endpoint |

---

## Robots.txt

### `app/robots.ts`

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/studio/' },
    sitemap: 'https://crossoverstrategies.com/sitemap.xml',
  }
}
```

---

## JSON-LD Structured Data

### Person Schema (owner)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Owner Name]",
  "jobTitle": "Retail Placement Consultant",
  "description": "Expert retail placement consultant with 240+ brands placed in 1,200+ retail doors across Walmart, Target, Whole Foods, Costco, and more.",
  "url": "https://crossoverstrategies.com",
  "sameAs": [
    "https://linkedin.com/in/[owner-linkedin]",
    "https://twitter.com/[owner-twitter]"
  ],
  "knowsAbout": [
    "Retail placement strategy",
    "Amazon seller consulting",
    "DTC brand retail expansion",
    "Retail buyer relationships",
    "Category management"
  ]
}
```

### Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Retail Placement Consulting",
  "provider": {
    "@type": "Person",
    "name": "[Owner Name]"
  },
  "serviceType": "Business Consulting",
  "description": "Strategic consulting to help Amazon and DTC sellers gain placement in Walmart, Target, Whole Foods, Costco, and major retail chains.",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD"
  }
}
```

---

## Core Web Vitals Targets

| Metric | Target | Current Status |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | TBD |
| INP (Interaction to Next Paint) | < 200ms | TBD |
| CLS (Cumulative Layout Shift) | < 0.1 | TBD |

**Key actions:**
- Use `next/image` with explicit `width`/`height` for owner photo (eliminates CLS)
- Preload hero fonts (Playfair, Barlow) with `display: swap`
- Use `priority` prop on hero image
- Defer non-critical JS

---

## Open Graph Assets

- **Default OG image:** 1200×630px — owner photo + name + tagline
- **Twitter Card:** `summary_large_image`
- Each page should have a unique OG image where possible
