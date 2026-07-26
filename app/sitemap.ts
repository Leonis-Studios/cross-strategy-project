import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { blogSitemapQuery } from '@/sanity/lib/queries'
import { SITE_URL } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  try {
    const posts = await client.fetch<{ slug: string; _updatedAt: string }[]>(blogSitemapQuery)
    const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
    return [...staticPages, ...blogPages]
  } catch {
    return staticPages
  }
}
