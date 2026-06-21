import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(
          S.list()
            .title('Home Page Sections')
            .items([
              S.listItem()
                .title('Hero Section')
                .id('homeHero')
                .child(
                  S.document()
                    .schemaType('hero')
                    .documentId('homeHero')
                    .title('Hero Section')
                ),

              S.divider(),

              S.documentTypeListItem('credential').title('Credentials'),
              S.documentTypeListItem('testimonial').title('Testimonials'),
              S.documentTypeListItem('retailer').title('Retailers (Logo Strip)'),
              S.documentTypeListItem('metric').title('Metrics / Stats'),

              S.divider(),

              S.documentTypeListItem('benefit').title('Benefits'),
              S.documentTypeListItem('feature').title('What You Bring'),
              S.documentTypeListItem('howItWorksStep').title('How It Works'),

              S.divider(),

              S.listItem()
                .title('Call to Action')
                .id('homeCta')
                .child(
                  S.document()
                    .schemaType('cta')
                    .documentId('homeCta')
                    .title('Call to Action')
                ),

              S.documentTypeListItem('faq').title('FAQs'),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),

      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.listItem()
        .title('SEO')
        .id('seo')
        .child(
          S.document()
            .schemaType('seo')
            .documentId('seo')
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
              S.documentTypeListItem('blogTag').title('Tags'),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Legacy')
        .child(
          S.list()
            .title('Legacy')
            .items([
              S.listItem()
                .title('Home Page (old — reference only)')
                .id('homePage')
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                ),
            ])
        ),
    ])
