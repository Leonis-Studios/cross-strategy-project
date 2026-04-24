# Sanity CMS — Setup & Schema Overview

## Installation

```bash
npm install next-sanity sanity @sanity/image-url
```

Then initialize a Sanity project:

```bash
npx sanity@latest init --env
```

This creates a `.env.local` with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<your-token>
```

Create `sanity.config.ts` at the project root:

```ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'crossstrat',
  title: 'Crossover Strategies',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
```

---

## Schema Index

| Schema | File | Purpose |
|---|---|---|
| `page` | `schemas/page.md` | Page documents (home, about, services) |
| `hero` | `schemas/hero.md` | Hero section block |
| `testimonial` | `schemas/testimonial.md` | Client testimonial |
| `metric` | `schemas/metric.md` | Stat/metric numbers |
| `retailer` | `schemas/retailer.md` | Retailer name + logo |
| `seo` | `schemas/seo.md` | SEO metadata per page |

---

## File Structure (once implemented)

```
sanity/
├── schemas/
│   ├── index.ts          ← exports all schema types
│   ├── page.ts
│   ├── hero.ts
│   ├── testimonial.ts
│   ├── metric.ts
│   ├── retailer.ts
│   └── seo.ts
├── lib/
│   ├── client.ts         ← Sanity client config
│   └── image.ts          ← @sanity/image-url builder
```

---

## Next.js Integration Pattern

Fetch data server-side in page components:

```ts
// app/page.tsx
import { sanityClient } from '@/sanity/lib/client'

const query = `*[_type == "page" && slug.current == "home"][0]{
  hero->,
  testimonials[]->,
  metrics[]->
}`

export default async function HomePage() {
  const data = await sanityClient.fetch(query)
  return <Hero data={data.hero} />
}
```

Use `next-sanity` for ISR/revalidation and live preview support.
