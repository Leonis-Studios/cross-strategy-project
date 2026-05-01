import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.documentTypeListItem('page').title('Page Documents'),
              S.documentTypeListItem('aboutPage').title('About Page'),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.documentTypeListItem('blogPost').title('Blog Posts'),
              S.documentTypeListItem('blogCategory').title('Categories'),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Social Proof')
        .child(
          S.list()
            .title('Social Proof')
            .items([
              S.documentTypeListItem('testimonial').title('Testimonials'),
              S.documentTypeListItem('metric').title('Metrics'),
              S.documentTypeListItem('retailer').title('Retailers'),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Site Config')
        .child(
          S.list()
            .title('Site Config')
            .items([
              S.documentTypeListItem('hero').title('Hero Sections'),
              S.documentTypeListItem('cta').title('CTAs'),
              S.documentTypeListItem('benefit').title('Benefits'),
              S.documentTypeListItem('feature').title('Features'),
              S.documentTypeListItem('howItWorksStep').title('How It Works Steps'),
              S.documentTypeListItem('faq').title('FAQs'),
              S.documentTypeListItem('seo').title('SEO Objects'),
            ])
        ),
    ])
