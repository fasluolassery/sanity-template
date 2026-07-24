import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './desk/structure'
import { projectId, dataset, studioTitle } from './env'

// Define singleton document types to disable creation & deletion actions
const singletonTypes = new Set(['siteSettings', 'navigation', 'footer'])

export default defineConfig({
  name: 'default',
  title: studioTitle,

  projectId,
  dataset,

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: '2024-03-01' }),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from "Create new document" menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For Singleton documents, remove option to unpublish/delete
    actions: (input, context) => {
      return singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : input
    },
  },
})
