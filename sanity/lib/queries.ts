import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "page" && slug.current == "home"][0] {
    hero-> {
      eyebrow,
      headline,
      headlineAccent,
      subheadline,
      ctaPrimary,
      ctaPrimaryHref,
      ctaSecondary,
      ctaSecondaryHref,
      floatingStatNumber,
      floatingStatLabel,
      image { ..., alt }
    },
    testimonials[]-> {
      _id,
      quote,
      authorName,
      authorTitle
    },
    metrics[]-> | order(displayOrder asc) {
      _id,
      number,
      label
    },
    retailers[]->[active == true] | order(displayOrder asc) {
      _id,
      name,
      logo { ..., alt }
    }
  }
`
