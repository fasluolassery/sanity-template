import { templateConfig } from './template.config'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  templateConfig.fallbackProjectId

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  templateConfig.defaultDataset

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  process.env.SANITY_STUDIO_API_VERSION ||
  templateConfig.defaultApiVersion

export const studioTitle = process.env.SANITY_STUDIO_TITLE || templateConfig.defaultStudioTitle
