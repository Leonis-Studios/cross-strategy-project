import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // ─── HOME PAGE ────────────────────────────────────────────────────────
      S.listItem()
        .title('🏠  Home Page')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
            .title('Home Page — All Sections')
        ),

      S.divider(),

      // ─── OTHER PAGES ─────────────────────────────────────────────────────
      S.listItem()
        .title('👤  About Page')
        .id('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
            .title('About Page')
        ),

      S.divider(),

      // ─── GLOBAL SETTINGS ─────────────────────────────────────────────────
      S.listItem()
        .title('⚙️  Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings — Name, Booking Link, Contact Info')
        ),

      S.divider(),

      // ─── BLOG ─────────────────────────────────────────────────────────────
      S.listItem()
        .title('📝  Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.documentTypeListItem('blogPost').title('📄  Blog Posts'),
              S.documentTypeListItem('blogCategory').title('🏷️  Categories'),
              S.documentTypeListItem('blogTag').title('🔖  Tags'),
            ])
        ),

      S.divider(),

      // ─── ADVANCED ─────────────────────────────────────────────────────────
      // Standalone section documents — kept for reference and migration.
      // Active content is managed through Home Page above.
      S.listItem()
        .title('🗄️  Advanced — Raw Section Records')
        .child(
          S.list()
            .title('Advanced — Raw Section Records')
            .items([
              S.listItem()
                .title('Hero (standalone document)')
                .id('homeHero')
                .child(
                  S.document()
                    .schemaType('hero')
                    .documentId('homeHero')
                    .title('Hero Section (standalone)')
                ),

              S.divider(),

              S.documentTypeListItem('credential').title('Credentials'),
              S.documentTypeListItem('testimonial').title('Testimonials'),
              S.documentTypeListItem('retailer').title('Retailers (Logo Strip)'),
              S.documentTypeListItem('metric').title('Metrics / Stats'),

              S.divider(),

              S.documentTypeListItem('benefit').title('Benefits'),
              S.documentTypeListItem('feature').title('What You Bring'),
              S.documentTypeListItem('howItWorksStep').title('How It Works Steps'),

              S.divider(),

              S.listItem()
                .title('Call to Action (standalone document)')
                .id('homeCta')
                .child(
                  S.document()
                    .schemaType('cta')
                    .documentId('homeCta')
                    .title('Call to Action (standalone)')
                ),

              S.documentTypeListItem('faq').title('FAQs'),

              S.divider(),

              S.listItem()
                .title('SEO')
                .id('seo')
                .child(
                  S.document()
                    .schemaType('seo')
                    .documentId('seo')
                    .title('SEO')
                ),
            ])
        ),
    ])
