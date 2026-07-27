/**
 * Shared Sanity TypeScript Definitions for Frontend Components
 */

export interface SanityImage {
  asset?: {
    _id: string
    url: string
    metadata?: {
      dimensions?: {
        width: number
        height: number
        aspectRatio: number
      }
      lqip?: string
    }
  }
  alt: string
  caption?: string
}

export interface ResponsiveImageData {
  desktop: SanityImage
  tablet?: SanityImage
  mobile?: SanityImage
}

export interface SanityLink {
  linkType: 'internal' | 'external'
  externalUrl?: string
  openInNewTab?: boolean
  internalLink?: {
    _type: string
    slug: string
    title: string
  }
}

export interface SanityCTA {
  label: string
  variant: 'primary' | 'secondary' | 'outline' | 'text'
  link: SanityLink
}

export interface SanitySEO {
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  twitterCardType?: 'summary_large_image' | 'summary'
  jsonLdType?: 'WebPage' | 'Article' | 'Service' | 'Organization' | 'FAQPage'
  openGraphImage?: SanityImage
  canonicalUrl?: string
  noIndex?: boolean
  noFollow?: boolean
}

export interface HeroBlockData {
  _key: string
  _type: 'heroBlock'
  badge?: string
  heading: string
  subheading?: string
  image?: ResponsiveImageData
  ctas?: SanityCTA[]
}

export interface ServiceItemData {
  _id: string
  title: string
  slug: string
  icon?: string
  tagline: string
  featured?: boolean
  coverImage?: SanityImage
}

export interface ServicesGridBlockData {
  _key: string
  _type: 'servicesGridBlock'
  eyebrow?: string
  heading: string
  description?: string
  selectionMode: 'all' | 'manual'
  services: ServiceItemData[]
}

export interface CTABlockData {
  _key: string
  _type: 'ctaBlock'
  title: string
  description?: string
  ctas?: SanityCTA[]
}

export interface FAQItemData {
  _key: string
  question: string
  answer: any // Portable Text array
}

export interface FAQBlockData {
  _key: string
  _type: 'faqBlock'
  eyebrow?: string
  heading?: string
  description?: string
  faqs: FAQItemData[]
}

export interface RichTextBlockData {
  _key: string
  _type: 'richTextBlock'
  sectionTitle?: string
  body: any // Portable Text array
}

export type PageBlock =
  HeroBlockData | ServicesGridBlockData | CTABlockData | FAQBlockData | RichTextBlockData

export interface PageData {
  _id: string
  title: string
  slug: string
  seo?: SanitySEO
  pageBuilder: PageBlock[]
}

export interface ServiceDetailData {
  _id: string
  title: string
  slug: string
  icon?: string
  tagline: string
  body?: any
  faqs?: FAQBlockData
  featured?: boolean
  coverImage?: SanityImage
  seo?: SanitySEO
}

export interface PostData {
  _id: string
  title: string
  slug: string
  publishedAt: string
  authorName?: string
  excerpt?: string
  body?: any
  mainImage?: SanityImage
  seo?: SanitySEO
}

export interface SiteSettingsData {
  siteTitle: string
  siteUrl?: string
  siteDescription?: string
  faviconUrl?: string
  defaultOgImage?: SanityImage
  disallowedPaths?: string[]
  socialLinks?: Array<{ _key: string; platform: string; url: string }>
}

export interface SitemapItemData {
  _type: 'page' | 'service' | 'post'
  slug: string
  _updatedAt: string
}

export interface NavigationData {
  brandName: string
  logo?: SanityImage
  items: Array<{
    _key: string
    label: string
    link: SanityLink
    children?: Array<{
      _key: string
      label: string
      description?: string
      link: SanityLink
    }>
  }>
  actionButtons?: SanityCTA[]
}

export interface FooterData {
  tagline?: string
  copyright?: string
  columns?: Array<{
    _key: string
    columnTitle: string
    links: Array<{ _key: string; label: string; link: SanityLink }>
  }>
  legalLinks?: Array<{ _key: string; label: string; link: SanityLink }>
}
