# Sitemap Plan

## URL Structure

All URLs are canonical, lowercase, no trailing slash.

| URL | Priority | Change Freq | Page Type |
|---|---|---|---|
| `/` | 1.0 | weekly | Home (hero + social proof) |
| `/about` | 0.8 | monthly | Owner bio, career, methodology |
| `/services` | 0.9 | monthly | Consulting packages, process |
| `/case-studies` | 0.8 | monthly | Brand placement success stories |
| `/case-studies/[slug]` | 0.7 | yearly | Individual case study |
| `/faq` | 0.7 | monthly | FAQ for AEO/featured snippets |
| `/blog` | 0.6 | daily | Blog index |
| `/blog/[slug]` | 0.7 | yearly | Individual blog post |
| `/contact` | 0.7 | monthly | Booking / contact |

---

## Implementation: `app/sitemap.ts`

```ts
import { MetadataRoute } from 'next'
// import { sanityClient } from '@/sanity/lib/client' // uncomment when Sanity is live

const BASE_URL = 'https://crossoverstrategies.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic routes from Sanity (uncomment when live)
  // const caseStudies = await sanityClient.fetch(`*[_type == "caseStudy"]{ slug, _updatedAt }`)
  // const dynamicCaseStudies = caseStudies.map((cs) => ({
  //   url: `${BASE_URL}/case-studies/${cs.slug.current}`,
  //   lastModified: new Date(cs._updatedAt),
  //   changeFrequency: 'yearly' as const,
  //   priority: 0.7,
  // }))

  // const posts = await sanityClient.fetch(`*[_type == "post"]{ slug, _updatedAt }`)
  // const dynamicPosts = posts.map((p) => ({
  //   url: `${BASE_URL}/blog/${p.slug.current}`,
  //   lastModified: new Date(p._updatedAt),
  //   changeFrequency: 'yearly' as const,
  //   priority: 0.7,
  // }))

  return [
    ...staticRoutes,
    // ...dynamicCaseStudies,
    // ...dynamicPosts,
  ]
}
```

---

## Implementation: `app/robots.ts`

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
    ],
    sitemap: 'https://crossoverstrategies.com/sitemap.xml',
    host: 'https://crossoverstrategies.com',
  }
}
```

---

## Google Search Console Setup

1. Verify site ownership via DNS TXT record or HTML file
2. Submit `https://crossoverstrategies.com/sitemap.xml`
3. Monitor: Coverage → Indexed pages, Performance → Impressions/clicks
4. Set up email alerts for crawl errors

---

## Sitemap for Blog / News (future)

When blog content exists, add a news sitemap for Google News eligibility:

```ts
// app/news-sitemap.ts (only if applying to Google News)
export default async function newsSitemap() {
  const recentPosts = await sanityClient.fetch(
    `*[_type == "post" && dateTime(_createdAt) > dateTime(now()) - 60*60*24*2][0...50]`
  )
  return recentPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug.current}`,
    title: post.title,
    publishedAt: post._createdAt,
    language: 'en',
  }))
}
```

---

## Verification Checklist

- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] No pages returning 404 in sitemap
- [ ] Sanity Studio excluded from sitemap and robots
- [ ] All canonical URLs match sitemap URLs exactly
- [ ] Submitted to Google Search Console
- [ ] Submitted to Bing Webmaster Tools
