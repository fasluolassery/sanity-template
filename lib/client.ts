import { createClient, type QueryParams, type FilteredResponseQueryOptions } from 'next-sanity'
import { projectId, dataset, apiVersion } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

export type NextFetchOptions = FilteredResponseQueryOptions & {
  [key: string]: unknown
}

/**
 * Typed fetch wrapper for Next.js Server Components with caching control
 */
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60, // Default ISR revalidation: 60 seconds
  tags = [],
}: {
  query: string
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}): Promise<QueryResponse> {
  const options: Record<string, unknown> = {
    next: {
      revalidate,
      tags,
    },
  }
  return client.fetch<QueryResponse>(query, params, options as FilteredResponseQueryOptions)
}
