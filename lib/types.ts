import type { PortableTextBlock } from '@portabletext/types'

/**
 * Shared Sanity TypeScript Definitions for Frontend Components
 */

export type PortableTextContent = PortableTextBlock[] | PortableTextBlock

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
  eyebrow?: string
  heading: string
  description?: string
  ctas?: SanityCTA[]
}

export interface FAQItemData {
  _key: string
  question: string
  answer: PortableTextContent
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
  heading?: string
  body: PortableTextContent
}

export interface StatItemData {
  _key: string
  value: string
  label: string
  description?: string
}

export interface StatsBlockData {
  _key: string
  _type: 'statsBlock'
  eyebrow?: string
  heading?: string
  description?: string
  stats: StatItemData[]
}

export interface LogoItemData {
  _key: string
  companyName: string
  logo: SanityImage
  link?: string
}

export interface LogoCloudBlockData {
  _key: string
  _type: 'logoCloudBlock'
  eyebrow?: string
  heading?: string
  description?: string
  logos: LogoItemData[]
}

export interface TestimonialItemData {
  _key: string
  quote: string
  authorName: string
  authorRole?: string
  avatar?: SanityImage
  rating?: number
}

export interface TestimonialsBlockData {
  _key: string
  _type: 'testimonialsBlock'
  eyebrow?: string
  heading?: string
  description?: string
  testimonials: TestimonialItemData[]
}

export interface TeamMemberData {
  _key: string
  name: string
  role?: string
  photo?: SanityImage
  bio?: string
  socialLinks?: Array<{ _key: string; platform: string; url: string }>
}

export interface TeamGridBlockData {
  _key: string
  _type: 'teamGridBlock'
  eyebrow?: string
  heading?: string
  description?: string
  displayMode: 'grid' | 'singleGroupImage'
  groupPhoto?: ResponsiveImageData
  members?: TeamMemberData[]
}

export interface ValuePropItemData {
  _key: string
  title?: string
  description?: string
  icon?: string
  image?: SanityImage
}

export interface WhyChooseUsBlockData {
  _key: string
  _type: 'whyChooseUsBlock'
  eyebrow?: string
  heading?: string
  description?: string
  ctas?: SanityCTA[]
  items: ValuePropItemData[]
}

export interface ContactServiceOption {
  _id: string
  title: string
  slug: string
}

export interface ContactFormFieldData {
  _key: string
  fieldName: string
  label: string
  placeholder?: string
  fieldType: 'text' | 'email' | 'phone' | 'serviceSelect' | 'select' | 'textarea' | 'checkbox'
  required?: boolean
  errorMessage?: string
  serviceSelectionMode?: 'all' | 'manual' | 'custom'
  serviceOptions?: ContactServiceOption[] | string[]
  options?: string[]
}

export interface ContactBlockData {
  _key: string
  _type: 'contactBlock'
  eyebrow?: string
  heading: string
  description?: string
  showContactInfo?: boolean
  email?: string
  phone?: string
  address?: string
  workingHours?: string
  mapUrl?: string
  formFields?: ContactFormFieldData[]
  submitButtonLabel?: string
  successTitle?: string
  successMessage?: string
  formErrorMessage?: string
}

export type PageBlock =
  | HeroBlockData
  | ServicesGridBlockData
  | CTABlockData
  | FAQBlockData
  | RichTextBlockData
  | StatsBlockData
  | LogoCloudBlockData
  | TestimonialsBlockData
  | TeamGridBlockData
  | WhyChooseUsBlockData
  | ContactBlockData

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
  body?: PortableTextContent
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
  body?: PortableTextContent
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

export interface SanityLeadStatus {
  _id?: string
  title: string
  slug: string
  order: number
  color: string
  description?: string
  isDefault?: boolean
  isActive?: boolean
}

export interface ThemeSettingsData {
  primaryColor: string
  secondaryColor: string
  accentColor: string
  primaryButtonBg: string
  primaryButtonTxt: string
  primaryButtonHover: string
  secondaryButtonBg: string
  secondaryButtonTxt: string
  secondaryButtonHover: string
  headingTxt: string
  txtColor: string
  pillBg: string
  pillBorder: string
  pillTxtColor: string
}
