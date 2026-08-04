import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { defineLocations, presentationTool } from 'sanity/presentation'
import {
  homePage, siteSettings, seo, aboutPage, blogCategory, blogTag, blogPost, mosaicItem,
  hero, cta, testimonial, metric, benefit, feature, howItWorksStep, faq, credential, retailer,
} from './sanity/schemas'
import { structure } from './sanity/structure'

const homeLocation = { locations: [{ title: 'Home', href: '/' }] }

export default defineConfig({
  name: 'crossstrat',
  title: 'CrossStrat',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  plugins: [
    structureTool({ structure }),
    visionTool(),
    presentationTool({
      resolve: {
        locations: {
          homePage: defineLocations({
            select: { title: 'hero.headline' },
            resolve: () => homeLocation,
          }),
          hero: defineLocations({
            select: { title: 'headline' },
            resolve: () => homeLocation,
          }),
          cta: defineLocations({
            select: { title: 'headline' },
            resolve: () => homeLocation,
          }),
          testimonial: defineLocations({
            select: { title: 'authorName' },
            resolve: () => homeLocation,
          }),
          credential: defineLocations({
            select: { title: 'title' },
            resolve: () => homeLocation,
          }),
          benefit: defineLocations({
            select: { title: 'title' },
            resolve: () => homeLocation,
          }),
          feature: defineLocations({
            select: { title: 'title' },
            resolve: () => homeLocation,
          }),
          howItWorksStep: defineLocations({
            select: { title: 'title' },
            resolve: () => homeLocation,
          }),
          faq: defineLocations({
            select: { title: 'question' },
            resolve: () => homeLocation,
          }),
          retailer: defineLocations({
            select: { title: 'name' },
            resolve: () => homeLocation,
          }),
          metric: defineLocations({
            select: { title: 'number' },
            resolve: () => homeLocation,
          }),
        },
      },
      previewUrl: {
        draftMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],
  schema: {
    types: [
      homePage, siteSettings, seo, aboutPage, blogCategory, blogTag, blogPost, mosaicItem,
      hero, cta, testimonial, metric, benefit, feature, howItWorksStep, faq, credential, retailer,
    ],
  },
})
