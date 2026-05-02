type Tone = 'dark' | 'light'

const COLOR: Record<Tone, string> = {
  dark: '#1a1a1a',
  light: '#dbdbdb',
}

interface Props {
  from?: Tone
  fromLeft?: Tone
  fromRight?: Tone
  to?: Tone
}

export default function SectionDivider({ from = 'dark', fromLeft, fromRight, to = 'dark' }: Props) {
  const isSplit = fromLeft !== undefined && fromRight !== undefined

  return (
    <div
      className="section-divider"
      style={!isSplit ? { background: `linear-gradient(to bottom, ${COLOR[from]}, ${COLOR[to]})` } : undefined}
      aria-hidden="true"
    >
      {isSplit && (
        <>
          <div style={{ position: 'absolute', inset: 0, right: '50%', background: `linear-gradient(to bottom, ${COLOR[fromLeft!]}, ${COLOR[to]})` }} />
          <div style={{ position: 'absolute', inset: 0, left: '50%', background: `linear-gradient(to bottom, ${COLOR[fromRight!]}, ${COLOR[to]})` }} />
        </>
      )}
      <div className="section-divider__accent" />
    </div>
  )
}
