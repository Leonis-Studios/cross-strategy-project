import { defineType, defineField, defineArrayMember } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'socialProof', title: 'Social Proof' },
    { name: 'benefits', title: 'Benefits' },
    { name: 'features', title: 'What You Bring' },
    { name: 'howItWorks', title: 'How It Works' },
    { name: 'cta', title: 'Call To Action' },
    { name: 'faq', title: 'FAQ' },
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Small Label Above Headline',
          type: 'string',
          description: 'Short line above the main heading. e.g. "Amazon & DTC Sellers → Retail Shelves"',
        }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          description: 'Main heading text. e.g. "I get your brand on"',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'headlineAccent',
          title: 'Highlighted Portion of Headline',
          type: 'string',
          description: 'The red italic word(s) that complete the headline, shown on its own line. e.g. "retail shelves."',
        }),
        defineField({
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text',
          rows: 2,
          description: 'Supporting text below the headline. e.g. "[Owner Name] — retail placement consultant. 240+ brands placed across Walmart, Target, Whole Foods, Costco, and 1,200+ store doors."',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'ctaPrimary',
          title: 'Main Button Text',
          type: 'string',
          description: 'e.g. "Work With Me"',
        }),
        defineField({
          name: 'ctaPrimaryHref',
          title: 'Main Button Link',
          type: 'string',
          description: 'Where the button goes. e.g. "#contact"',
        }),
        defineField({
          name: 'ctaSecondary',
          title: 'Secondary Link Text',
          type: 'string',
          description: 'e.g. "See My Track Record →"',
        }),
        defineField({ name: 'ctaSecondaryHref', title: 'Secondary Link URL', type: 'string' }),
        defineField({
          name: 'floatingStatNumber',
          title: 'Badge Number',
          type: 'string',
          description: 'Big number on the floating badge. e.g. "240+"',
        }),
        defineField({
          name: 'floatingStatLabel',
          title: 'Badge Label',
          type: 'string',
          description: 'Label under the badge number. e.g. "Brands in Retail"',
        }),
        defineField({
          name: 'image',
          title: 'Owner Photo',
          type: 'image',
          description: 'Your professional photo shown on the right side of the page',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'credentials',
      title: 'Credentials',
      description: 'Trust signals shown near the top of the page — short proof points about your background and network',
      type: 'array',
      group: 'socialProof',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Credential Title',
              type: 'string',
              description: 'Short credential name. e.g. "Former Retail Buyer"',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              description: '1–2 sentence explanation shown below the credential title',
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
    }),

    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      description: 'Client reviews shown on the home page. Each needs a quote and the client\'s name.',
      type: 'array',
      group: 'socialProof',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 4,
              description: 'The testimonial in the client\'s own words. e.g. "Within 90 days we had purchase orders from three Whole Foods divisions."',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'authorName',
              title: 'Author Name',
              type: 'string',
              description: 'Client\'s name as shown on site. e.g. "Sarah K."',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'authorTitle',
              title: 'Author Title / Company',
              type: 'string',
              description: 'Their role and brand type. e.g. "Co-Founder, organic snack brand"',
            }),
          ],
          preview: { select: { title: 'authorName', subtitle: 'quote' } },
        }),
      ],
    }),

    defineField({
      name: 'benefits',
      title: 'Benefits',
      description: 'What clients get when working with you — shown in the "Why work with me" section',
      type: 'array',
      group: 'benefits',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Benefit Title',
              type: 'string',
              description: 'Short benefit name. e.g. "Direct Buyer Access"',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              description: 'Explanation shown below the benefit title on the site',
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
    }),

    defineField({
      name: 'features',
      title: 'What You Bring (Requirements)',
      description: 'What a brand needs to qualify — shown in the "What you bring" section',
      type: 'array',
      group: 'features',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Requirement Title',
              type: 'string',
              description: 'Short requirement name. e.g. "Proven Sales Velocity"',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              description: 'Explanation shown below the title on the site',
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
    }),

    defineField({
      name: 'howItWorksSteps',
      title: 'How It Works Steps',
      description: 'The steps shown in the "How it works" section, in order',
      type: 'array',
      group: 'howItWorks',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'stepNumber',
              title: 'Step Number',
              type: 'number',
              description: 'Controls the order. Step 1 appears first.',
              validation: (r) => r.required().min(1),
            }),
            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
              description: 'Short step name. e.g. "Retail Readiness Audit"',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              description: 'What happens in this step, shown below the title',
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'stepNumber' },
            prepare({ title, subtitle }) {
              return { title, subtitle: `Step ${subtitle}` }
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'cta',
      title: 'Call To Action Section',
      type: 'object',
      group: 'cta',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Small Label Above Headline',
          type: 'string',
          description: 'Short intro above the headline. e.g. "Ready to get on shelves?"',
        }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          description: 'Main heading text. e.g. "Let\'s get your brand into"',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'headlineAccent',
          title: 'Highlighted Portion of Headline',
          type: 'string',
          description: 'Red italic part that completes the headline. e.g. "retail."',
        }),
        defineField({
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text',
          rows: 2,
          description: 'Supporting text below the headline. e.g. "Book a free 30-minute strategy call."',
        }),
        defineField({
          name: 'ctaPrimary',
          title: 'Main Button Text',
          type: 'string',
          description: 'e.g. "Book a Strategy Call"',
        }),
        defineField({
          name: 'ctaPrimaryHref',
          title: 'Main Button Link',
          type: 'string',
          description: 'Where the button goes. e.g. "#contact"',
        }),
        defineField({
          name: 'ctaSecondary',
          title: 'Secondary Link Text',
          type: 'string',
          description: 'e.g. "View the Process →"',
        }),
        defineField({ name: 'ctaSecondaryHref', title: 'Secondary Link URL', type: 'string' }),
      ],
    }),

    defineField({
      name: 'faqs',
      title: 'FAQs',
      description: 'Frequently asked questions shown at the bottom of the page',
      type: 'array',
      group: 'faq',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              description: 'The question as it appears on the site',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
              description: 'Full answer shown when the question is expanded',
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: 'question', subtitle: 'answer' } },
        }),
      ],
    }),
  ],
})
