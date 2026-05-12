import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { homePage, siteSettings, seo, aboutPage, blogCategory, blogTag, blogPost } from './sanity/schemas'
import { structure } from './sanity/structure'

export default defineConfig({
  name: 'crossstrat',
  title: 'CrossStrat',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: [homePage, siteSettings, seo, aboutPage, blogCategory, blogTag, blogPost],
  },
})
