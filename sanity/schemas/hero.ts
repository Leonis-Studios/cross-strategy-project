import { defineType, defineField } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
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
      validation: (Rule) => Rule.required(),
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
      rows: 3,
      description: 'Supporting text below the headline. e.g. "[Owner Name] — retail placement consultant. 240+ brands placed across Walmart, Target, Whole Foods, Costco, and 1,200+ store doors."',
      validation: (Rule) => Rule.required(),
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
    defineField({
      name: 'ctaSecondaryHref',
      title: 'Secondary Link URL',
      type: 'string',
    }),
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
        defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'headline' },
  },
})
