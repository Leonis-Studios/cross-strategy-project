import type { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/live'
import { client } from '@/sanity/lib/client'
import { blogListQuery, mosaicQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import { FALLBACK_BLOG_POSTS, FALLBACK_BLOG_CATEGORIES } from '@/lib/fallbacks'
import type { BlogCategoryData, BlogPostSummary, MosaicItemData, SiteSettingsData } from '@/sanity/types'
import BlogSearch from '@/components/blog/BlogSearch'
import MediaMosaic from '@/components/blog/MediaMosaic'
import JsonLd from '@/components/JsonLd'
import AnimateIn from '@/components/AnimateIn'
import { SITE_URL } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  const settings: SiteSettingsData = (await client.fetch(siteSettingsQuery)) ?? {}
  const ownerName = settings.ownerName ?? 'CrossStrat'

  const description =
    'Tactics, frameworks, and firsthand insights on getting Amazon and DTC brands onto shelves at Walmart, Target, Whole Foods, and beyond. Written by someone who has done it 240+ times.'

  return {
    title: `Retail Insights Content | ${ownerName} — Retail Placement Consultant`,
    description,
    alternates: {
      canonical: '/blog',
      types: { 'application/rss+xml': `${SITE_URL}/blog/feed.xml` },
    },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}/blog`,
      title: `Retail Insights Content | ${ownerName}`,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Retail Insights Content | ${ownerName}`,
      description,
    },
  }
}

export default async function BlogPage() {
  let posts: BlogPostSummary[] = FALLBACK_BLOG_POSTS
  let categories: BlogCategoryData[] = FALLBACK_BLOG_CATEGORIES
  let mosaicItems: MosaicItemData[] = []

  const settings: SiteSettingsData = (await client.fetch(siteSettingsQuery)) ?? {}
  const ownerName = settings.ownerName ?? '[Owner Name]'

  try {
    const { data: rawData } = await sanityFetch({ query: blogListQuery })
    const data = rawData as { posts: BlogPostSummary[]; categories: BlogCategoryData[] } | null
    if (data?.posts?.length) posts = data.posts
    if (data?.categories?.length) categories = data.categories
  } catch {
    // use fallbacks
  }

  try {
    const { data: rawMosaic } = await sanityFetch({ query: mosaicQuery })
    mosaicItems = (rawMosaic as MosaicItemData[] | null) ?? []
  } catch {
    // no mosaic items
  }

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `Retail Insights — ${ownerName}`,
    description:
      'Tactics, frameworks, and firsthand insights on getting consumer brands into major retail chains.',
    url: `${SITE_URL}/blog`,
    author: {
      '@type': 'Person',
      name: ownerName,
      url: SITE_URL,
      jobTitle: settings.ownerTitle ?? 'Retail Placement Consultant',
    },
    publisher: {
      '@type': 'Organization',
      name: settings.logoText ?? settings.ownerName ?? 'CrossStrat',
      url: SITE_URL,
    },
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Retail Insights Articles',
    url: `${SITE_URL}/blog`,
    numberOfItems: posts.length,
    itemListElement: posts.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/blog/${post.slug.current}`,
      name: post.title,
    })),
  }

  return (
    <main>
      <JsonLd schema={blogSchema} />
      <JsonLd schema={itemListSchema} />

      {/* ── Blog header ── */}
      <section
        className="bg-brand-jet-black pt-32 pb-16 px-6 lg:px-12 border-b border-brand-silver/15"
        aria-label="Retail Insights Content"
      >
        <AnimateIn className="max-w-7xl mx-auto">
          <p className="font-barlow font-bold text-brand-dim-grey tracking-widest text-xs uppercase mb-4 fade-up-item stagger-1">
            Retail Insights
          </p>
          <h1 className="font-playfair text-display-lg md:text-display-xl leading-none mb-5 fade-up-item stagger-2">
            <span className="text-brand-red">The</span>
            <span className="text-brand-alabaster"> Content</span>
          </h1>
          <p className="font-barlow text-brand-silver text-body max-w-2xl leading-relaxed fade-up-item stagger-3">
            Tactics, frameworks, and firsthand insights on getting consumer brands into major retail
            chains — written by someone who has done it 240+ times.
          </p>
        </AnimateIn>
      </section>

      {/* ── Search + grid ── */}
      <BlogSearch posts={posts} categories={categories} />

      {/* ── Media mosaic ── */}
      <MediaMosaic
        items={mosaicItems}
        eyebrow={settings.mosaicEyebrow}
        headline={settings.mosaicHeadline}
        headlineAccent={settings.mosaicHeadlineAccent}
      />
    </main>
  )
}
