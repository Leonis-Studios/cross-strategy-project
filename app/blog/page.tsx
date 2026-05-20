import type { Metadata } from 'next'
import { sanityFetch } from '@/sanity/lib/live'
import { blogListQuery } from '@/sanity/lib/queries'
import { FALLBACK_BLOG_POSTS, FALLBACK_BLOG_CATEGORIES } from '@/lib/fallbacks'
import type { BlogCategoryData, BlogPostSummary } from '@/sanity/types'
import BlogSearch from '@/components/blog/BlogSearch'
import JsonLd from '@/components/JsonLd'
import AnimateIn from '@/components/AnimateIn'

const SITE_URL = 'https://example.com' // TODO: replace with live domain

export const metadata: Metadata = {
  title: 'Retail Insights Blog | [Owner Name] — Retail Placement Consultant',
  description:
    'Tactics, frameworks, and firsthand insights on getting Amazon and DTC brands onto shelves at Walmart, Target, Whole Foods, and beyond. Written by someone who has done it 240+ times.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/blog`,
    title: 'Retail Insights Blog | [Owner Name]',
    description:
      'Tactics and frameworks on getting your brand into Walmart, Target, Whole Foods, and beyond — written by a retail placement consultant who has placed 240+ brands.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retail Insights Blog | [Owner Name]',
    description:
      'Firsthand insights on getting Amazon and DTC brands onto retail shelves — 240+ placements, $180M+ in retail revenue.',
  },
}

export default async function BlogPage() {
  let posts: BlogPostSummary[] = FALLBACK_BLOG_POSTS
  let categories: BlogCategoryData[] = FALLBACK_BLOG_CATEGORIES

  try {
    const { data: rawData } = await sanityFetch({ query: blogListQuery })
    const data = rawData as { posts: BlogPostSummary[]; categories: BlogCategoryData[] } | null
    if (data?.posts?.length) posts = data.posts
    if (data?.categories?.length) categories = data.categories
  } catch {
    // use fallbacks
  }

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Retail Insights — [Owner Name]',
    description:
      'Tactics, frameworks, and firsthand insights on getting consumer brands into major retail chains.',
    url: `${SITE_URL}/blog`,
    author: {
      '@type': 'Person',
      name: '[Owner Name]',
      url: SITE_URL,
      jobTitle: 'Retail Placement Consultant',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CrossStrat',
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
        aria-label="Retail Insights Blog"
      >
        <AnimateIn className="max-w-7xl mx-auto">
          <p className="font-barlow font-bold text-brand-dim-grey tracking-widest text-xs uppercase mb-4 fade-up-item stagger-1">
            Retail Insights
          </p>
          <h1 className="font-playfair text-display-lg md:text-display-xl leading-none mb-5 fade-up-item stagger-2">
            <span className="text-brand-red">The</span>
            <span className="text-brand-alabaster"> Blog</span>
          </h1>
          <p className="font-barlow text-brand-silver text-body max-w-2xl leading-relaxed fade-up-item stagger-3">
            Tactics, frameworks, and firsthand insights on getting consumer brands into major retail
            chains — written by someone who has done it 240+ times.
          </p>
        </AnimateIn>
      </section>

      {/* ── Search + grid ── */}
      <BlogSearch posts={posts} categories={categories} />
    </main>
  )
}
