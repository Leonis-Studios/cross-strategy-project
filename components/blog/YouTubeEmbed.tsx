'use client'

import { useState } from 'react'
import Image from 'next/image'
import { getYouTubeEmbedUrl, getYouTubeThumbnail } from '@/lib/youtube'

interface Props {
  videoId: string
  title: string
}

export default function YouTubeEmbed({ videoId, title }: Props) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={getYouTubeEmbedUrl(videoId)}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="absolute inset-0 w-full h-full group/play"
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={getYouTubeThumbnail(videoId)}
        alt={title}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover/play:bg-black/30">
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-red/90 group-hover/play:bg-brand-red transition-colors">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white translate-x-0.5" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}
