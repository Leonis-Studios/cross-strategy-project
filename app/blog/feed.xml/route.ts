import { client } from '@/sanity/lib/client'
import { blogFeedQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import type { SiteSettingsData } from '@/sanity/types'
import { SITE_URL } from '@/lib/site'

interface FeedPost {
  title: string
  slug: string
  excerpt?: string
  publishedAt?: string
  _updatedAt?: string
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const settings: SiteSettingsData = (await client.fetch(siteSettingsQuery)) ?? {}
  const ownerName = settings.ownerName ?? 'CrossStrat'

  let posts: FeedPost[] = []
  try {
    posts = (await client.fetch<FeedPost[]>(blogFeedQuery)) ?? []
  } catch {
    posts = []
  }

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`
      const pubDate = post.publishedAt ? new Date(post.publishedAt).toUTCString() : undefined
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      ${post.excerpt ? `<description>${escapeXml(post.excerpt)}</description>` : ''}
      ${pubDate ? `<pubDate>${pubDate}</pubDate>` : ''}
    </item>`
    })
    .join('')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Retail Insights — ${escapeXml(ownerName)}</title>
    <link>${SITE_URL}/blog</link>
    <description>Tactics, frameworks, and firsthand insights on getting consumer brands into major retail chains.</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
