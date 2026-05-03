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

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    ownerName,
    ownerTitle,
    footerTagline
  }
`

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    hero,
    "credentials": credentials[] {
      "_id": _key,
      title,
      description
    },
    "testimonials": testimonials[] {
      "_id": _key,
      quote,
      authorName,
      authorTitle
    },
    "benefits": benefits[] {
      "_id": _key,
      title,
      description
    },
    "features": features[] {
      "_id": _key,
      title,
      description
    },
    "howItWorksSteps": howItWorksSteps[] {
      "_id": _key,
      stepNumber,
      title,
      description
    },
    cta,
    "faqs": faqs[] {
      "_id": _key,
      question,
      answer
    }
  }
`
