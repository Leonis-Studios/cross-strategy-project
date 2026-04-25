import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { hero, testimonial, metric, retailer, seo, page, benefit, feature, howItWorksStep } from './sanity/schemas'

export default defineConfig({
  name: 'crossstrat',
  title: 'CrossStrat',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [page, hero, testimonial, metric, retailer, seo, benefit, feature, howItWorksStep],
  },
})
