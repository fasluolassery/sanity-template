import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'
import { schemaTypes } from './schemaTypes'
import { structure } from './desk/structure'
import { projectId, dataset, studioTitle, apiVersion } from './env'
import { templateConfig } from './template.config'

const singletonTypes = new Set(templateConfig.singletonDocumentTypes)

export default defineConfig({
  name: 'default',
  title: studioTitle,

  projectId,
  dataset,

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    simplerColorInput(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from "Create new document" menu
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For Singleton documents, remove option to unpublish/delete
    actions: (input, context) => {
      return singletonTypes.has(context.schemaType)
        ? input.filter(
            ({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action)
          )
        : input
    },
  },
})
