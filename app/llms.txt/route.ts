import { stegaClean } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { blogFeedQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import type { SiteSettingsData } from '@/sanity/types'
import { SITE_URL } from '@/lib/site'

export const revalidate = 3600

interface FeedPost {
  title: string
  slug: string
  excerpt?: string
}

export async function GET() {
  const settings: SiteSettingsData = stegaClean((await client.fetch(siteSettingsQuery)) ?? {})
  const ownerName = settings.ownerName ?? '[Owner Name]'
  const tagline =
    settings.footerTagline ??
    'Retail placement consulting for Amazon and DTC brands seeking shelf space at major US retailers.'

  let posts: FeedPost[] = []
  try {
    posts = stegaClean((await client.fetch<FeedPost[]>(blogFeedQuery)) ?? [])
  } catch {
    posts = []
  }

  const lines = [
    `# ${ownerName}`,
    '',
    `> ${tagline}`,
    '',
    '## Pages',
    `- [Home](${SITE_URL}/): Retail placement consulting for Amazon and DTC brands seeking shelf space at major US retailers.`,
    `- [About](${SITE_URL}/about): About ${ownerName}.`,
    `- [Blog](${SITE_URL}/blog): Retail insights, tactics, and frameworks.`,
    '',
    '## Blog Posts',
    ...posts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug})${p.excerpt ? `: ${p.excerpt}` : ''}`),
  ]

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
