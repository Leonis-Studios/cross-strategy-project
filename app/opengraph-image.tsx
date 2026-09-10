import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { client } from '@/sanity/lib/client'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import type { SiteSettingsData } from '@/sanity/types'

export const alt = 'Retail Placement Consultant — Amazon & DTC to Shelf'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Drop-in logo mark: add public/logo.png (square, transparent background works
// best) and it replaces the red accent bar above — no code changes needed.
// Until then this card renders text-only.
async function loadLogoDataUrl(): Promise<string | null> {
  try {
    const data = await readFile(join(process.cwd(), 'public/logo.png'))
    return `data:image/png;base64,${data.toString('base64')}`
  } catch {
    return null
  }
}

export default async function OpengraphImage() {
  const [settings, logoSrc]: [SiteSettingsData, string | null] = await Promise.all([
    client.fetch(siteSettingsQuery).catch(() => null),
    loadLogoDataUrl(),
  ]).then(([s, l]) => [s ?? {}, l])
  const ownerName = settings.ownerName ?? 'CrossStrat'
  const tagline = settings.ownerTitle ?? 'Retail Placement Consultant'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#1a1a1a',
          padding: '80px 90px',
        }}
      >
        {logoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element -- next/image doesn't work inside ImageResponse
          <img src={logoSrc} height={64} style={{ display: 'flex' }} alt="" />
        ) : (
          <div style={{ display: 'flex', width: 120, height: 8, background: '#ef2626' }} />
        )}
        <div
          style={{
            display: 'flex',
            marginTop: 44,
            fontSize: 86,
            color: '#dbdbdb',
            letterSpacing: '-0.02em',
          }}
        >
          {ownerName}
        </div>
        <div style={{ display: 'flex', marginTop: 20, fontSize: 40, color: '#ef2626' }}>
          {tagline}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 40,
            fontSize: 30,
            color: '#b5afaf',
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Getting Amazon and DTC brands onto shelves at Walmart, Target, Whole Foods, and 1,200+
          retail doors.
        </div>
      </div>
    ),
    size,
  )
}
