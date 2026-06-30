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
    logoText,
    calendarUrl,
    footerTagline
  }
`

// homePageQuery: prefers the unified homePage document.
// Falls back to standalone section documents for legacy compatibility.
export const homePageQuery = groq`
  {
    "hero": select(
      defined(*[_type == "homePage"][0].hero.headline) => *[_type == "homePage"][0].hero {
        eyebrow, headline, headlineAccent, subheadline, bioText,
        rightPanelHeadline, rightPanelSubheadline,
        trustSignals[] { text },
        ctaPrivacyNote,
        ctaPrimary, ctaPrimaryHref, ctaSecondary, ctaSecondaryHref,
        floatingStatNumber, floatingStatLabel, image
      },
      *[_type == "hero" && _id == "homeHero"][0] {
        eyebrow, headline, headlineAccent, subheadline,
        ctaPrimary, ctaPrimaryHref, ctaSecondary, ctaSecondaryHref,
        floatingStatNumber, floatingStatLabel, image
      }
    ),
    "socialProof": *[_type == "homePage"][0] {
      credentialsHeadline,
      testimonialsHeadline
    },
    "credentials": select(
      count(*[_type == "homePage"][0].credentials) > 0 => *[_type == "homePage"][0].credentials[] {
        "_id": _key, title, description
      },
      *[_type == "credential"] | order(displayOrder asc) {
        "_id": _id, title, description
      }
    ),
    "testimonials": select(
      count(*[_type == "homePage"][0].testimonials) > 0 => *[_type == "homePage"][0].testimonials[] {
        "_id": _key, quote, authorName, authorTitle
      },
      *[_type == "testimonial"] | order(_createdAt asc) {
        "_id": _id, quote, authorName, authorTitle
      }
    ),
    "benefitsSection": *[_type == "homePage"][0] {
      benefitsEyebrow, benefitsHeadline, benefitsHeadlineAccent
    },
    "benefits": select(
      count(*[_type == "homePage"][0].benefits) > 0 => *[_type == "homePage"][0].benefits[] {
        "_id": _key, title, description
      },
      *[_type == "benefit"] | order(displayOrder asc) {
        "_id": _id, title, description
      }
    ),
    "featuresSection": *[_type == "homePage"][0] {
      featuresEyebrow, featuresHeadline, featuresHeadlineAccent, featuresSubheadline
    },
    "features": select(
      count(*[_type == "homePage"][0].features) > 0 => *[_type == "homePage"][0].features[] {
        "_id": _key, title, description
      },
      *[_type == "feature"] | order(displayOrder asc) {
        "_id": _id, title, description
      }
    ),
    "howItWorksSection": *[_type == "homePage"][0] {
      howItWorksEyebrow, howItWorksHeadline, howItWorksHeadlineAccent, howItWorksSubheadline
    },
    "howItWorksSteps": select(
      count(*[_type == "homePage"][0].howItWorksSteps) > 0 => *[_type == "homePage"][0].howItWorksSteps[] | order(stepNumber asc) {
        "_id": _key, stepNumber, title, description
      },
      *[_type == "howItWorksStep"] | order(stepNumber asc) {
        "_id": _id, stepNumber, title, description
      }
    ),
    "cta": select(
      defined(*[_type == "homePage"][0].cta.headline) => *[_type == "homePage"][0].cta {
        eyebrow, headline, headlineAccent, subheadline,
        ctaPrimary, ctaPrimaryHref, ctaSecondary, ctaSecondaryHref
      },
      *[_type == "cta" && _id == "homeCta"][0] {
        eyebrow, headline, headlineAccent, subheadline,
        ctaPrimary, ctaPrimaryHref, ctaSecondary, ctaSecondaryHref
      }
    ),
    "faqSection": *[_type == "homePage"][0] {
      faqEyebrow, faqHeadline, faqHeadlineAccent
    },
    "faqs": select(
      count(*[_type == "homePage"][0].faqs) > 0 => *[_type == "homePage"][0].faqs[] {
        "_id": _key, question, answer
      },
      *[_type == "faq"] | order(displayOrder asc) {
        "_id": _id, question, answer
      }
    ),
    "contactSection": *[_type == "homePage"][0] {
      contactEyebrow, contactHeadline, contactHeadlineAccent,
      contactSubheadline, contactSuccessMessage
    }
  }
`
