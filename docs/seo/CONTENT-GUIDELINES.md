# Content Guidelines — Writing for AEO/GEO

For whoever writes content in Sanity Studio (blog posts, FAQ entries, page copy). This is editorial guidance, not enforced by code.

---

## The Answer-Capsule Pattern

AI answer engines (Google AI Overviews, Perplexity, ChatGPT Search, Bing Copilot) extract short, self-contained answers to lift and cite. Lead every major section — and every FAQ answer — with a **40–60 word direct answer** to a question-shaped heading, before adding supporting detail.

**Before (buried answer):**
> Retail placement is a complex process involving many stakeholders. There are a lot of factors that go into how a brand gets from an initial pitch to actually landing on a shelf. Buyers evaluate margins, packaging, velocity, and more before ever agreeing to a meeting...

**After (answer-capsule first):**
> Getting a brand into retail requires four steps: a retail readiness audit (packaging, margins, UPC), retailer targeting, a sell-in pitch, and negotiating terms including slotting fees and MOQ. Most brands take 6–18 months from first outreach to purchase order.
>
> Here's what each step actually involves...

This matches the existing live FAQ answers on the home page (`homePage.faqs`) — keep new entries in that same style: direct answer first, specifics second.

---

## Target Question Bank

Use these as heading/FAQ prompts when adding new content (pulled from `docs/seo/aeo-strategy.md` — treat that file as the canonical source, don't re-derive from scratch):

- How do I get my Amazon brand into retail stores?
- What does a retail placement consultant do?
- How much does it cost to get into Walmart?
- What do retail buyers look for in new brands?
- How long does it take to get into Target?
- Can an Amazon brand get into Whole Foods?
- What is the difference between Amazon and retail distribution?
- How do you pitch a product to a retail buyer?

Use the exact question phrasing as an H2/H3 — search and AI engines extract headings as answer labels. `## How do I get my Amazon brand into retail stores?` beats `## Our Process`.

---

## Structured Content Checklist (Blog Posts)

- **H2** for major sections, **H3** for sub-sections. Never add an H1 in the body — the post title is already the H1.
- One clear takeaway per section — don't make the reader infer the point.
- Prefer **numbered lists** for processes/steps, **tables** for comparisons — both get reproduced verbatim by AI engines.
- Use specific numbers, not vague claims: "placed 240+ brands in 1,200+ store doors" beats "helped many brands."
- Keep FAQ answers self-contained — a reader (or AI engine) should get the full answer without needing the rest of the page.

---

## Alt Text

Every image field on this site (cover images, inline body images, hero photo) has an Alt Text field. Fill it in — it's used for accessibility and image search, and search engines weight it directly.

Be specific: **"Walmart buyer meeting"**, not **"meeting"**. Describe what's actually in the photo, not just the general topic.
