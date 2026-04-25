# Crossover Strategies — Project Reference

## Overview

Personal consulting website for **[Owner Name]**, a retail placement consultant who helps Amazon-native and direct-to-consumer (DTC) brands secure shelf space at major U.S. retailers. The site's purpose is to sell the owner's expertise directly — not the company as an entity.

**Core value proposition:** [Owner Name] bridges the gap between the Amazon seller world and traditional retail buyer relationships. He has personally placed 240+ brands in 1,200+ store doors, generating $180M+ in retail revenue for his clients.

---

## Owner Persona

- **Name:** [Owner Name] ← fill in
- **Role:** Retail Placement Consultant
- **Specialization:** Getting Amazon and DTC brands onto shelves at Walmart, Target, Whole Foods, Costco, Kroger, CVS, Sprouts, Nordstrom, and other major chains
- **Audience:** Amazon sellers and DTC founders ready to expand into brick-and-mortar retail
- **Tone:** Direct, expert, personal — "I" not "we", credibility through track record

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (inline `@theme` in globals.css) |
| Fonts | Playfair Display (headings), Barlow (body/UI) |
| CMS | Sanity — planned, not yet installed |
| Hosting | TBD |
| Analytics | TBD |

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `brand-jet-black` | `#1a1a1a` | Primary dark background, dark section bg |
| `brand-dim-grey` | `#706f6f` | Secondary bg, dividers, muted UI elements |
| `brand-silver` | `#b5afaf` | Body text on dark bg, secondary text |
| `brand-alabaster` | `#dbdbdb` | Light section background, primary text on dark |
| `brand-red` | `#ef2626` | Accent color — CTAs, headlines, stat numbers |

**Contrast pairs (WCAG 2.1 AA):**
- `jet-black` + `alabaster` → 13.74:1 ✓
- `jet-black` + `silver` → 8.02:1 ✓
- `jet-black` + `red` → 4.58:1 ✓ (accent only)
- `alabaster` + `jet-black` → 13.74:1 ✓

---

## Typography

| Token | Size | Usage |
|---|---|---|
| `text-display-3xl` | 130px | H1 hero (desktop) |
| `text-display-2xl` | 100px | H1 hero (tablet) |
| `text-display-lg` | 68px | H1 hero (mobile) |
| `text-metric` | 52px | Large stat numbers |
| `text-stat` | 36px | Floating stat card |
| `text-subheadline` | 25px | Body copy / subheadlines |
| `text-body` | 22px | Standard body text |
| `text-label` | 18px | Labels, captions, small UI text |
| `text-quote-mark` | 64px | Decorative quotation marks |

**Font weights available:** 400, 500, 600, 700 (Barlow); variable (Playfair Display)

---

## Content Strategy

- **Hero:** First-person — "I get your brand on retail shelves." The owner is the offer.
- **Social proof:** Testimonials reference working *with the person*, not "the team"
- **Stats:** All metrics attributed to owner's career track record
- **CTAs:** "Work With Me" and "See My Track Record" — direct, personal
- **Marquee:** Retailers where the owner has placed client brands

---

## Standard for Every New Component / Page

Every new section component and page **must** include all of the following — no exceptions:

### 1. Sanity Schema
- Create `sanity/schemas/<name>.ts` with `defineType` / `defineField`
- Export from `sanity/schemas/index.ts`
- Add to `sanity.config.ts` schema types array
- If the content belongs to a page, add a reference field in `sanity/schemas/page.ts`
- Add to `sanity/lib/queries.ts` (GROQ query)
- Add TypeScript interface to `sanity/types.ts`

### 2. Fallback Data
- Add `FALLBACK_<NAME>` export in `lib/fallbacks.ts`
- Component accepts optional prop with type, defaults to fallback
- Page (`app/page.tsx`) extracts from Sanity data with `?? FALLBACK_*` pattern

### 3. SEO (Search Engine Optimization)
- Section uses semantic HTML (`<section>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, etc.)
- `aria-label` on `<section>` describes the section purpose
- Headings are unique and descriptive — not generic ("Our Services" → bad)

### 4. AEO (Answer Engine Optimization)
- H2/H3 headings phrased as direct answers to real search queries
  - Good: `"How retail placement consulting works"`
  - Bad: `"The Process"`
- Body copy structured so any heading + 2–4 sentences can be lifted as a standalone answer
- Stats and specific claims included — AI engines cite verifiable data

### 5. GEO (Generative Engine Optimization)
- Add appropriate JSON-LD schema to `app/page.tsx` (or the relevant page):
  - Process sections → `HowTo` schema
  - Benefit/feature lists → `ItemList` schema
  - Service descriptions → `Service` schema (embed in existing `serviceSchema` in layout)
  - Q&A content → `FAQPage` / `Question` schema
- Associate [Owner Name] entity with specific retailers, outcomes, and credentials in body copy

### 6. Animation
- Wrap section inner container in `<AnimateIn>`
- Section header items: `fade-up-item stagger-1`, `stagger-2`
- Cards/list items: `fade-up-item stagger-2` through `stagger-5` (cycle if > 4 items)

---

## Planned Features

- [ ] **Sanity CMS** — manage hero copy, testimonials, metrics, retailers dynamically (see `docs/sanity/`)
- [ ] **About page** — owner bio, career story, methodology
- [ ] **Services page** — consulting packages, process breakdown
- [ ] **Case studies** — individual brand success stories
- [ ] **Contact / booking** — Calendly integration or custom form
- [ ] **Blog / Insights** — content for SEO and AEO (see `docs/seo/`)
- [ ] **JSON-LD structured data** — Person, Service, FAQPage schemas
- [ ] **Sitemap** — `app/sitemap.ts` dynamic generation
- [ ] **Analytics** — Google Analytics 4 or Plausible

---

## Key Files

| File | Purpose |
|---|---|
| `app/globals.css` | Color tokens, font sizes, animations |
| `app/layout.tsx` | Root metadata, font loading |
| `app/page.tsx` | Home page composition |
| `components/Hero.tsx` | Hero section |
| `components/SocialProof.tsx` | Retailers, testimonials, metrics |
| `docs/sanity/` | Sanity CMS schema documentation |
| `docs/seo/` | SEO, AEO, GEO strategy documentation |

---

## Placeholders to Fill In

Search for `[Owner Name]` across the project and replace with the actual name before launch.
