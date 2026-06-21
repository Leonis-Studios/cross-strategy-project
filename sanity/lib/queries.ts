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
      "tags": tags[]-> { _id, title, slug },
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
    "tags": tags[]-> { _id, title, slug },
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
  {
    "hero": select(
      defined(*[_type == "hero" && _id == "homeHero"][0]) => *[_type == "hero" && _id == "homeHero"][0] {
        eyebrow, headline, headlineAccent, subheadline,
        ctaPrimary, ctaPrimaryHref, ctaSecondary, ctaSecondaryHref,
        floatingStatNumber, floatingStatLabel, image
      },
      *[_type == "homePage"][0].hero
    ),
    "credentials": select(
      count(*[_type == "credential"]) > 0 => *[_type == "credential"] | order(displayOrder asc) {
        "_id": _id, title, description
      },
      *[_type == "homePage"][0].credentials[] { "_id": _key, title, description }
    ),
    "testimonials": select(
      count(*[_type == "testimonial"]) > 0 => *[_type == "testimonial"] | order(_createdAt asc) {
        "_id": _id, quote, authorName, authorTitle
      },
      *[_type == "homePage"][0].testimonials[] { "_id": _key, quote, authorName, authorTitle }
    ),
    "benefits": select(
      count(*[_type == "benefit"]) > 0 => *[_type == "benefit"] | order(displayOrder asc) {
        "_id": _id, title, description
      },
      *[_type == "homePage"][0].benefits[] { "_id": _key, title, description }
    ),
    "features": select(
      count(*[_type == "feature"]) > 0 => *[_type == "feature"] | order(displayOrder asc) {
        "_id": _id, title, description
      },
      *[_type == "homePage"][0].features[] { "_id": _key, title, description }
    ),
    "howItWorksSteps": select(
      count(*[_type == "howItWorksStep"]) > 0 => *[_type == "howItWorksStep"] | order(stepNumber asc) {
        "_id": _id, stepNumber, title, description
      },
      *[_type == "homePage"][0].howItWorksSteps[] { "_id": _key, stepNumber, title, description }
    ),
    "cta": select(
      defined(*[_type == "cta" && _id == "homeCta"][0]) => *[_type == "cta" && _id == "homeCta"][0] {
        eyebrow, headline, headlineAccent, subheadline,
        ctaPrimary, ctaPrimaryHref, ctaSecondary, ctaSecondaryHref
      },
      *[_type == "homePage"][0].cta
    ),
    "faqs": select(
      count(*[_type == "faq"]) > 0 => *[_type == "faq"] | order(displayOrder asc) {
        "_id": _id, question, answer
      },
      *[_type == "homePage"][0].faqs[] { "_id": _key, question, answer }
    )
  }
`
