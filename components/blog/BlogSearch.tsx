'use client'

import { useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import BlogGrid from './BlogGrid'
import type { BlogCategoryData, BlogPostSummary } from '@/sanity/types'

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'excerpt', weight: 0.3 },
    { name: 'categories', weight: 0.2, getFn: (post: BlogPostSummary) =>
        post.categories?.map((c) => c.title).join(' ') ?? '',
    },
    { name: 'tags', weight: 0.1 },
  ],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
}

interface Props {
  posts: BlogPostSummary[]
  categories: BlogCategoryData[]
}

export default function BlogSearch({ posts, categories }: Props) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const fuse = useMemo(() => new Fuse(posts, fuseOptions), [posts])

  const filtered = useMemo(() => {
    let results: BlogPostSummary[] = query
      ? fuse.search(query).map((r) => r.item)
      : posts

    if (activeCategory) {
      results = results.filter((p) =>
        p.categories?.some((c) => c.slug.current === activeCategory)
      )
    }

    return results
  }, [query, activeCategory, posts, fuse])

  const isFiltered = query.length > 0 || activeCategory !== null

  return (
    <>
      {/* ── Search + filter bar ── */}
      <div className="bg-[#1a1a1a] border-b border-[#333333] py-8 px-6 lg:px-12 sticky top-[72px] z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 items-start md:items-center">
          {/* Search input */}
          <div className="relative w-full md:max-w-sm">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dim-grey pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              aria-label="Search blog articles"
              className="w-full bg-brand-jet-black border border-[#444444] text-brand-alabaster font-barlow text-label pl-11 pr-10 py-2.5 focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dim-grey"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-dim-grey hover:text-brand-alabaster transition-colors text-lg leading-none"
              >
                ×
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`font-barlow font-semibold text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                !activeCategory
                  ? 'bg-brand-red border-brand-red text-white'
                  : 'border-[#444444] text-brand-dim-grey hover:border-brand-alabaster hover:text-brand-alabaster'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() =>
                  setActiveCategory(
                    cat.slug.current === activeCategory ? null : cat.slug.current
                  )
                }
                className={`font-barlow font-semibold text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                  activeCategory === cat.slug.current
                    ? 'bg-brand-red border-brand-red text-white'
                    : 'border-[#444444] text-brand-dim-grey hover:border-brand-alabaster hover:text-brand-alabaster'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Results ── */}
      <section
        className="bg-brand-jet-black py-16 px-6 lg:px-12 min-h-[60vh]"
        aria-label="Blog articles"
      >
        <div className="max-w-7xl mx-auto">
          {isFiltered && (
            <p className="font-barlow text-brand-dim-grey text-label mb-8">
              {filtered.length} article{filtered.length !== 1 ? 's' : ''} found
            </p>
          )}
          <BlogGrid posts={filtered} />
        </div>
      </section>
    </>
  )
}
