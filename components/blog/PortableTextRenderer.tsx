'use client'

import Image from 'next/image'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-barlow text-brand-silver text-body leading-relaxed mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-playfair text-display-sm text-brand-alabaster leading-tight mt-14 mb-5 pt-6 border-t border-[#333333]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-playfair text-stat text-brand-alabaster leading-tight mt-10 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-barlow font-bold text-subheadline text-brand-alabaster mt-8 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-red pl-6 my-10">
        <p className="font-playfair italic text-brand-alabaster text-subheadline leading-relaxed">
          {children}
        </p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 mb-8 font-barlow text-brand-silver text-body">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 mb-8 font-barlow text-brand-silver text-body">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-4 leading-relaxed">
        <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" aria-hidden="true" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children, index }) => (
      <li className="flex gap-4 leading-relaxed">
        <span className="font-barlow font-bold text-brand-red shrink-0 tabular-nums">
          {(index ?? 0) + 1}.
        </span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-brand-alabaster">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-[#2a2a2a] text-brand-red px-1.5 py-0.5 font-mono text-sm rounded">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const isExternal = value?.href?.startsWith('http')
      return (
        <a
          href={value?.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-brand-red underline underline-offset-2 hover:text-brand-alabaster transition-colors"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).width(1200).auto('format').url()
      return (
        <figure className="my-12 -mx-4 md:-mx-8 lg:-mx-16">
          <div className="relative aspect-video">
            <Image
              src={imageUrl}
              alt={value.alt ?? ''}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="font-barlow text-brand-dim-grey text-xs text-center mt-3 px-4">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

interface Props {
  value: unknown[]
}

export default function PortableTextRenderer({ value }: Props) {
  return <PortableText value={value as Parameters<typeof PortableText>[0]['value']} components={components} />
}
