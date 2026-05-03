import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { blogPostQuery, blogRelatedQuery, blogSitemapQuery } from '@/sanity/lib/queries'
import type { BlogPostData, BlogPostSummary } from '@/sanity/types'
import { FALLBACK_BLOG_POSTS } from '@/lib/fallbacks'
import PortableTextRenderer from '@/components/blog/PortableTextRenderer'
import BlogCard from '@/components/blog/BlogCard'
import JsonLd from '@/components/JsonLd'
import AnimateIn from '@/components/AnimateIn'

export const revalidate = 3600

const SITE_URL = 'https://example.com' // TODO: replace with live domain

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  try {
    const posts = await client.fetch<{ slug: string }[]>(blogSitemapQuery)
    return posts.map((p) => ({ slug: p.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  try {
    const post = await client.fetch<BlogPostData>(blogPostQuery, { slug })
    if (!post) return { title: 'Article Not Found' }

    const title = post.seoTitle ?? post.title
    const description = post.seoDescription ?? post.excerpt ?? ''
    const ogImage = post.coverImage
      ? urlFor(post.coverImage).width(1200).height(630).fit('crop').auto('format').url()
      : undefined

    return {
      title: `${title} | CrossStrat`,
      description,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        type: 'article',
        url: `${SITE_URL}/blog/${slug}`,
        title,
        description,
        publishedTime: post.publishedAt,
        authors: ['[Owner Name]'],
        ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630, alt: title }] } : {}),
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        ...(ogImage ? { images: [ogImage] } : {}),
      },
    }
  } catch {
    return { title: 'Article Not Found' }
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  let post = await client.fetch<BlogPostData>(blogPostQuery, { slug }).catch(() => null)
  if (!post) {
    const fallback = FALLBACK_BLOG_POSTS.find((p) => p.slug.current === slug)
    if (!fallback) notFound()
    post = { ...fallback, body: [] }
  }

  const categoryIds = post.categories?.map((c) => c._id) ?? []
  const related = await client
    .fetch<BlogPostSummary[]>(blogRelatedQuery, { slug, categoryIds })
    .catch(() => [])

  const coverUrl = post.coverImage
    ? urlFor(post.coverImage).width(1400).height(700).fit('crop').auto('format').url()
    : null

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
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
    ...(coverUrl ? { image: coverUrl } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${slug}` },
    ],
  }

  return (
    <main>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />

      {/* ── Article header ── */}
      <header className="bg-brand-jet-black pt-28 pb-16 px-6 lg:px-12 border-b border-[#333333]">
        <AnimateIn className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-barlow text-brand-dim-grey text-xs tracking-wide mb-10 fade-up-item stagger-1"
          >
            <Link href="/" className="hover:text-brand-alabaster transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-brand-alabaster transition-colors">
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-brand-silver truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 fade-up-item stagger-1">
              {post.categories.map((cat) => (
                <span
                  key={cat._id}
                  className="font-barlow font-semibold text-brand-red text-xs tracking-widest uppercase"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <div className="w-12 h-0.5 bg-brand-red mb-6 fade-up-item stagger-1" aria-hidden="true" />

          {/* Title */}
          <h1 className="font-playfair text-display-sm md:text-display-md text-brand-alabaster leading-tight mb-6 fade-up-item stagger-2">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="font-barlow text-brand-silver text-body md:text-subheadline leading-relaxed mb-8 fade-up-item stagger-3">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 font-barlow text-brand-dim-grey text-label fade-up-item stagger-4">
            <span className="text-brand-silver font-semibold">[Owner Name]</span>
            {post.publishedAt && (
              <>
                <span aria-hidden="true" className="text-[#444444]">·</span>
                <span>{formatDate(post.publishedAt)}</span>
              </>
            )}
            {post.readingTime && (
              <>
                <span aria-hidden="true" className="text-[#444444]">·</span>
                <span>{post.readingTime} min read</span>
              </>
            )}
          </div>
        </AnimateIn>
      </header>

      {/* ── Cover image ── */}
      {coverUrl && (
        <div className="relative w-full aspect-[2/1] bg-[#1a1a1a]">
          <Image
            src={coverUrl}
            alt={(post.coverImage as { alt?: string })?.alt ?? post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* ── Article body ── */}
      <article
        className="bg-brand-jet-black px-6 lg:px-12 py-16"
        aria-label={`Article: ${post.title}`}
      >
        <div className="max-w-3xl mx-auto">
          {post.body && post.body.length > 0 ? (
            <PortableTextRenderer value={post.body} />
          ) : (
            <p className="font-barlow text-brand-dim-grey text-body text-center py-16">
              Article content coming soon.
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#333333]">
              <p className="font-barlow font-semibold text-brand-dim-grey text-xs tracking-widest uppercase mb-4">
                Topics
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-barlow text-brand-silver text-xs tracking-wide border border-[#444444] px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section
          className="bg-[#111111] px-6 lg:px-12 py-20 border-t border-[#333333]"
          aria-label="Related articles"
        >
          <div className="max-w-7xl mx-auto">
            <AnimateIn>
              <div className="fade-up-item stagger-1 mb-10">
                <p className="small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label mb-3">
                  Keep Reading
                </p>
                <div className="w-8 h-0.5 bg-brand-red" aria-hidden="true" />
              </div>
              <div
                className={`grid gap-6 fade-up-item stagger-2 ${
                  related.length === 1
                    ? 'grid-cols-1 max-w-xl'
                    : related.length === 2
                      ? 'grid-cols-1 md:grid-cols-2'
                      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {related.map((rp) => (
                  <BlogCard key={rp._id} post={rp} />
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── Inline CTA ── */}
      <section
        className="bg-brand-jet-black px-6 lg:px-12 py-20 border-t border-[#333333]"
        aria-label="Work with [Owner Name]"
      >
        <AnimateIn className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-brand-red mx-auto mb-6 fade-up-item stagger-1" aria-hidden="true" />
          <h2 className="font-playfair text-display-sm md:text-display-md text-brand-alabaster leading-tight mb-4 fade-up-item stagger-2">
            Ready to get on shelves?
          </h2>
          <p className="font-barlow text-brand-silver text-body leading-relaxed max-w-xl mx-auto mb-8 fade-up-item stagger-3">
            Book a free 30-minute strategy call. We&rsquo;ll audit your brand for retail readiness and
            map out the right retailer targets for your category.
          </p>
          <div className="fade-up-item stagger-4">
            <Link
              href="/#contact"
              className="inline-block bg-brand-red font-barlow font-bold text-white text-label tracking-widest uppercase px-10 py-4 hover:bg-brand-alabaster hover:text-brand-jet-black transition-colors"
            >
              Book a Strategy Call
            </Link>
          </div>
        </AnimateIn>
      </section>
    </main>
  )
}
