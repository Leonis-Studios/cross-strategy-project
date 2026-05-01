import { groq } from 'next-sanity'

export const blogListQuery = groq`
  {
    "posts": *[_type == "blogPost"] | order(featured desc, publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      coverImage { ..., alt },
      "categories": categories[]-> { _id, title, slug },
      tags,
      featured,
      readingTime
    },
    "categories": *[_type == "blogCategory"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }
  }
`

export const blogPostQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    coverImage { ..., alt },
    "categories": categories[]-> { _id, title, slug },
    tags,
    featured,
    readingTime,
    body,
    seoTitle,
    seoDescription
  }
`

export const blogRelatedQuery = groq`
  *[_type == "blogPost" && slug.current != $slug && count(categories[_ref in $categoryIds]) > 0] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    coverImage { ..., alt },
    "categories": categories[]-> { _id, title, slug },
    readingTime
  }
`

export const blogSitemapQuery = groq`
  *[_type == "blogPost"] {
    "slug": slug.current,
    _updatedAt
  }
`

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    ownerName,
    ownerTitle,
    bio,
    photo { ..., alt },
    statsHighlight[] { value, label },
    standoutQuote
  }
`

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
    },
    benefits[]-> | order(displayOrder asc) {
      _id,
      title,
      description
    },
    features[]-> | order(displayOrder asc) {
      _id,
      title,
      description
    },
    howItWorksSteps[]-> | order(stepNumber asc) {
      _id,
      stepNumber,
      title,
      description
    },
    cta-> {
      eyebrow,
      headline,
      headlineAccent,
      subheadline,
      ctaPrimary,
      ctaPrimaryHref,
      ctaSecondary,
      ctaSecondaryHref
    },
    faqs[]-> | order(displayOrder asc) {
      _id,
      question,
      answer
    }
  }
`
