import BlogCard from './BlogCard'
import type { BlogPostSummary } from '@/sanity/types'

interface Props {
  posts: BlogPostSummary[]
}

export default function BlogGrid({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="w-12 h-px bg-brand-dim-grey mx-auto mb-6" aria-hidden="true" />
        <p className="font-playfair text-brand-dim-grey text-display-sm">No articles found.</p>
        <p className="font-barlow text-brand-silver text-label mt-3">
          Try a different search term or browse all categories.
        </p>
      </div>
    )
  }

  if (posts.length === 1) {
    return <BlogCard post={posts[0]} featured />
  }

  const [lead, ...rest] = posts

  const gridCols =
    rest.length === 1
      ? 'grid-cols-1 max-w-xl'
      : rest.length === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className="space-y-6 lg:space-y-8">
      <BlogCard post={lead} featured />
      <div className={`grid gap-6 ${gridCols}`}>
        {rest.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}
