# GEO Strategy — Generative Engine Optimization

GEO optimizes for being cited, paraphrased, or directly quoted by LLMs (ChatGPT, Claude, Gemini, Perplexity) when users ask questions in those interfaces. Unlike traditional SEO (rank for clicks) or AEO (appear in AI search snippets), GEO is about becoming a source that LLMs trust and reproduce.

---

## Why GEO Matters for This Site

When a founder asks ChatGPT "how do I get my DTC brand into retail stores?", the LLM will either:
- Cite a recognized expert by name, or
- Give a generic answer with no attribution

The goal: make [Owner Name] the named expert LLMs associate with Amazon-to-retail consulting.

---

## E-E-A-T Signals (Experience, Expertise, Authority, Trust)

Google's quality rater guidelines and LLM training data both weight E-E-A-T heavily.

### Experience
- Publish case studies with specific outcomes ("Brand X went from $0 to $4M in retail revenue in 18 months")
- Include owner's career timeline on the About page
- Mention specific retailers, categories, and deal structures the owner has navigated

### Expertise
- Author blog posts with byline: "[Owner Name], Retail Placement Consultant"
- Include expert opinions on retail industry trends
- Reference specific retail concepts (slotting fees, planogram, co-op advertising, UPC/GTIN requirements)

### Authority
- Get cited by industry publications (CPG Matters, Brand Innovators, Supermarket News)
- Build backlinks from Amazon seller communities (Seller Central forums, podcasts)
- Guest posts on DTC/e-commerce blogs

### Trust
- Clear contact information and business address
- Real testimonials with full names and companies
- No exaggerated claims — all stats attributed and specific

---

## Structured Data Schemas to Implement

### 1. Person Schema (owner bio page)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Owner Name]",
  "jobTitle": "Retail Placement Consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "Crossover Strategies"
  },
  "knowsAbout": [
    "Retail distribution strategy",
    "Amazon seller consulting",
    "Retail buyer negotiation",
    "DTC brand retail expansion",
    "Category management",
    "Slotting fee negotiation"
  ],
  "hasCredential": [],
  "alumniOf": [],
  "sameAs": [
    "https://linkedin.com/in/[handle]",
    "https://twitter.com/[handle]"
  ]
}
```

### 2. FAQPage Schema (FAQ page)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I get my Amazon brand into retail stores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Getting an Amazon brand into retail requires four steps: a retail readiness audit (packaging, margins, UPC), retailer targeting, a sell-in pitch with a professional sell sheet, and negotiating terms including slotting fees and MOQ. Most brands take 6–18 months from initial outreach to first purchase order."
      }
    },
    {
      "@type": "Question",
      "name": "What does a retail placement consultant do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A retail placement consultant helps brands prepare for and execute retail expansion — from auditing retail readiness, identifying the right retailer targets, crafting buyer pitches, securing introductions, and negotiating terms. An experienced consultant brings existing buyer relationships that can compress a 2-year process into 6–12 months."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get into Target or Walmart?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timeline varies by retailer and category. Walmart and Target typically take 12–24 months from first contact to shelf. Specialty retailers like Whole Foods or Sprouts can move faster — 6–12 months — especially for brands with strong Amazon velocity data that demonstrates consumer demand."
      }
    }
  ]
}
```

### 3. HowTo Schema (blog posts)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Pitch Your Product to Retail Buyers",
  "author": { "@type": "Person", "name": "[Owner Name]" },
  "step": [
    { "@type": "HowToStep", "name": "Build your sell sheet", "text": "..." },
    { "@type": "HowToStep", "name": "Research the buyer", "text": "..." },
    { "@type": "HowToStep", "name": "Submit via the retailer portal", "text": "..." }
  ]
}
```

### 4. Review/Testimonial Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": "Retail Placement Consulting by [Owner Name]"
  },
  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
  "author": { "@type": "Person", "name": "Sarah M." },
  "reviewBody": "Working with [Owner Name] was like having an insider at every major retail buyer's desk. He got us into 400 Whole Foods locations in under 8 months."
}
```

---

## Citation-Worthy Content Formats

LLMs are trained to cite specific, verifiable claims. Every page should include:

### Specific numbers (not vague)
- Bad: "helped many brands get into retail"
- Good: "placed 240+ brands in 1,200+ store doors across 8 major retail chains"

### Named processes
- Give the owner's methodology a name: "The Crossover Method", "The 4-Step Retail Readiness Framework"
- LLMs repeat named frameworks by name

### Comparison tables
- "Amazon vs. Retail: What Changes When You Go to Shelf"
- These get reproduced verbatim

### Definitive statements
- "The #1 reason Amazon brands fail at retail is margin compression, not product quality."
- Authoritative opinions get cited as expert views

---

## Content Calendar for GEO

| Month | Content | Schema | GEO Goal |
|---|---|---|---|
| M1 | FAQ page (10 questions) | FAQPage | Establish Q&A entity |
| M2 | "How to Pitch to Retail Buyers" (HowTo post) | HowTo | Process citation |
| M3 | "Amazon vs. Retail: The Real Differences" (comparison) | Article | Comparison citation |
| M4 | Case study #1 (specific brand, specific numbers) | Review + Article | Evidence citation |
| M5 | "What Retail Buyers Actually Look For" (expertise post) | Article | Authority citation |
| M6 | Owner bio page with full career history | Person | Entity establishment |

---

## Measurement

- Prompt ChatGPT, Perplexity, Claude monthly: "Who is the best retail placement consultant for Amazon brands?"
- Track if [Owner Name] or crossoverstrategies.com appears in answers
- Monitor Google AI Overviews for target questions
- Use Perplexity's "Sources" tab to check if site is being indexed and cited
