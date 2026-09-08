import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { getYouTubeId } from '@/lib/youtube'
import YouTubeEmbed from './YouTubeEmbed'
import type { MosaicItemData } from '@/sanity/types'

interface Props {
  items: MosaicItemData[]
  eyebrow?: string
  headline?: string
  headlineAccent?: string
}

export default function MediaMosaic({
  items,
  eyebrow = 'Behind The Scenes',
  headline = 'See it in',
  headlineAccent = 'action',
}: Props) {
  if (items.length === 0) return null

  // Fills a dangling last row (like the blog grid) instead of leaving empty cells.
  const rem2 = items.length % 2
  const rem4 = items.length % 4
  const lastColSpanBase = rem2 === 1 ? 'col-span-2' : ''
  const lastColSpanMd = { 0: '', 1: 'md:col-span-4', 2: 'md:col-span-3', 3: 'md:col-span-2' }[rem4]

  return (
    <section className="bg-brand-jet-black py-24 px-6 lg:px-12 border-t border-brand-silver/15" aria-label="Media gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="small-caps font-barlow font-bold text-brand-dim-grey tracking-widest text-label">
            {eyebrow}
          </p>
          <div className="w-12 h-0.5 bg-brand-red mx-auto mt-3 mb-6" aria-hidden="true" />
          <h2 className="font-playfair text-display-sm md:text-display-md text-brand-alabaster leading-tight max-w-2xl mx-auto">
            {headline} <em className="italic text-brand-red">{headlineAccent}</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-px bg-brand-dim-grey/20">
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            const spanClass = isLast ? `${lastColSpanBase} ${lastColSpanMd}`.trim() : ''
            const youtubeId = item.mediaType === 'youtube' ? getYouTubeId(item.youtubeUrl) : null
            return (
              <div
                key={item._id}
                className={`group relative overflow-hidden bg-brand-jet-black ${spanClass}`}
              >
                {youtubeId ? (
                  <YouTubeEmbed videoId={youtubeId} title={item.caption ?? 'YouTube video'} />
                ) : item.image ? (
                  <Image
                    src={urlFor(item.image).width(800).height(800).fit('crop').auto('format').url()}
                    alt={item.image.alt ?? item.caption ?? ''}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : null}

                {item.caption && (
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-jet-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="font-barlow text-brand-alabaster text-xs p-3">{item.caption}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
