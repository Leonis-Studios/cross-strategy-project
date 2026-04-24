# AEO Strategy — Answer Engine Optimization

AEO targets AI-powered search surfaces: Google's AI Overviews, Perplexity, ChatGPT Search, Bing Copilot, and SGE (Search Generative Experience). These engines pull direct answers from pages — the goal is to be the source they cite.

---

## Core Principle

**AI search engines reward pages that answer a specific question completely, concisely, and authoritatively in a single section.** Structure every content block so a single heading + 2–5 sentences could be lifted and read aloud as a perfect answer.

---

## Target Questions (AI search queries)

### High-priority (map to FAQ page sections)

| Question | Intent |
|---|---|
| "How do I get my Amazon brand into retail stores?" | Process query |
| "What does a retail placement consultant do?" | Definition query |
| "How much does it cost to get into Walmart?" | Cost query |
| "What do retail buyers look for in new brands?" | Expertise query |
| "How long does it take to get into Target?" | Timeline query |
| "Can an Amazon brand get into Whole Foods?" | Feasibility query |
| "What is the difference between Amazon and retail distribution?" | Comparison query |
| "How do you pitch a product to a retail buyer?" | Process query |

---

## Page Structure for AEO

### FAQ Page (`/faq`)

Each FAQ entry must be:
1. **Heading** — the exact question (H2 or H3)
2. **Answer paragraph** — 2–4 sentences, self-contained, no jargon
3. **Supporting list or stat** — optional but boosts citation likelihood

**Example structure:**

```
## How do I get my Amazon brand into retail stores?

Most Amazon brands that successfully enter retail follow a 4-step process:
audit their packaging and margins for retail requirements, identify the right
retail category and buyer contacts, craft a retailer-specific sell-in pitch,
and negotiate terms including co-op fees and MOQ. [Owner Name] has guided
240+ brands through this process, placing them in stores like Walmart, Target,
and Whole Foods.

1. Retail readiness audit (packaging, UPC, margins)
2. Retailer targeting (category fit, buyer contact research)
3. Sell-in pitch development (sell sheet, pricing, slotting)
4. Negotiation and onboarding
```

---

## Heading Structure for Featured Snippets

Use exact question phrasing in H2/H3 tags. Google and AI engines extract headings as answer labels.

**Good:**
```html
<h2>What does a retail placement consultant do?</h2>
```

**Bad:**
```html
<h2>Our Services</h2>
```

---

## Content Formats AI Engines Prefer

| Format | Why it works |
|---|---|
| Numbered steps | Easily extracted as a how-to |
| Definition paragraphs | Direct answer to "what is X" |
| Stat + context sentences | Cited as evidence |
| Before/after comparisons | Answers "what changes" queries |
| Short Q&A pairs | Maps directly to conversational queries |

---

## Entity Reinforcement

AI engines build a knowledge graph. Repeatedly associating [Owner Name] with specific entities increases citation likelihood:

- **Entity:** [Owner Name]
- **Role:** Retail Placement Consultant
- **Skills:** retail buyer relationships, Amazon-to-retail strategy, DTC distribution
- **Results:** 240+ brands, $180M+ revenue, 1,200+ store doors
- **Retailers:** Walmart, Target, Whole Foods, Costco, Kroger, CVS, Sprouts

Every page should mention at least 3 of these entity associations naturally in body copy.

---

## Implementation Plan

### Phase 1 — FAQ Page
- Create `/faq` with 10–15 structured Q&A entries
- Add `FAQPage` JSON-LD schema (see GEO strategy)
- Target: 3 months to ranking

### Phase 2 — How-To Content
- Blog posts with `HowTo` schema
- "How to pitch your product to Target buyers" etc.
- Target: 6 months to AIO (AI Overview) inclusion

### Phase 3 — Case Studies
- Individual brand success stories with specific numbers
- AI engines love citing specific, verifiable claims
- Format: problem → process → result

---

## Measurement

- Track "AI Overview" impressions in Google Search Console
- Monitor Perplexity citations (search `site:crossoverstrategies.com` on Perplexity)
- Track featured snippet ownership for target questions
