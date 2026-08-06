import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
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

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-px bg-brand-dim-grey/20 [grid-auto-flow:dense]">
          {items.map((item, i) => {
            const isLarge = i % 5 === 0
            const spanClass = isLarge ? 'col-span-2 row-span-2' : ''
            return (
              <div
                key={item._id}
                className={`group relative overflow-hidden bg-brand-jet-black ${spanClass}`}
              >
                {item.mediaType === 'video' && item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
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
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-jet-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
