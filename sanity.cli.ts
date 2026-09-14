import { defineCliConfig } from 'sanity/cli'
import { projectId, dataset } from './env'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  vite: (config: any) => ({
    ...config,
    envPrefix: ['SANITY_STUDIO_', 'NEXT_PUBLIC_'],
  }),
})
