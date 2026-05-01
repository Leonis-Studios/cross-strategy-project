import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import type { BlogPostSummary } from '@/sanity/types'

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface Props {
  post: BlogPostSummary
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: Props) {
  const imageUrl = post.coverImage
    ? urlFor(post.coverImage)
        .width(featured ? 1200 : 800)
        .height(featured ? 630 : 450)
        .fit('crop')
        .auto('format')
        .url()
    : null

  return (
    <article
      className={`group flex flex-col bg-[#1f1f1f] border border-brand-dim-grey hover:border-brand-red transition-colors duration-300 ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      {/* Cover image */}
      <div
        className={`relative overflow-hidden bg-[#2a2a2a] shrink-0 ${
          featured ? 'aspect-video lg:aspect-auto lg:w-[55%]' : 'aspect-video'
        }`}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={(post.coverImage as { alt?: string })?.alt ?? post.title}
            fill
            sizes={
              featured
                ? '(max-width: 1024px) 100vw, 55vw'
                : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            }
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-px bg-brand-dim-grey" />
          </div>
        )}
        {post.featured && !featured && (
          <div className="absolute top-4 left-4 bg-brand-red px-3 py-1 font-barlow font-bold text-white text-xs tracking-widest uppercase">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 p-6 ${featured ? 'lg:p-10 lg:justify-center' : ''}`}>
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
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

        {/* Red rule */}
        <div className="w-8 h-0.5 bg-brand-red mb-4" aria-hidden="true" />

        {/* Title */}
        <h2
          className={`font-playfair text-brand-alabaster leading-tight mb-4 transition-colors duration-200 group-hover:text-brand-red ${
            featured ? 'text-stat md:text-display-sm' : 'text-subheadline'
          }`}
        >
          <Link href={`/blog/${post.slug.current}`} className="hover:no-underline">
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p
            className={`font-barlow text-brand-silver leading-relaxed mb-6 ${
              featured ? 'text-body line-clamp-3' : 'text-label line-clamp-2'
            }`}
          >
            {post.excerpt}
          </p>
        )}

        {/* Meta row */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#333333]">
          {post.readingTime && (
            <span className="font-barlow text-brand-dim-grey text-xs tracking-wide">
              {post.readingTime} min read
            </span>
          )}
          {post.publishedAt && (
            <span className="font-barlow text-brand-dim-grey text-xs tracking-wide">
              {formatDate(post.publishedAt)}
            </span>
          )}
          <Link
            href={`/blog/${post.slug.current}`}
            className="ml-auto font-barlow font-semibold text-brand-red text-xs tracking-widest uppercase hover:text-brand-alabaster transition-colors"
            aria-label={`Read article: ${post.title}`}
          >
            Read Article →
          </Link>
        </div>
      </div>
    </article>
  )
}
