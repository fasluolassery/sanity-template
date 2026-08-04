import { groq } from 'next-sanity'
import {
  seoFragment,
  pageBuilderFragment,
  imageWithAltFragment,
  linkFragment,
  ctaFragment,
  faqBlockFragment,
  themeSettingsFragment,
} from './fragments'

/**
 * Fetch Home Page document (matches slug 'home' or '/')
 */
export const HOME_PAGE_QUERY = groq`
  *[_type == "page" && (slug.current == "home" || slug.current == "/")][0] {
    _id,
    title,
    "slug": slug.current,
    seo {
      ${seoFragment}
    },
    ${pageBuilderFragment}
  }
`

/**
 * Fetch generic Page by slug
 */
export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    seo {
      ${seoFragment}
    },
    ${pageBuilderFragment}
  }
`

/**
 * Fetch all Services
 */
export const ALL_SERVICES_QUERY = groq`
  *[_type == "service"] | order(featured desc, title asc) {
    _id,
    title,
    "slug": slug.current,
    icon,
    tagline,
    featured,
    coverImage {
      ${imageWithAltFragment}
    }
  }
`

/**
 * Fetch Single Service by slug
 */
export const SERVICE_BY_SLUG_QUERY = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    icon,
    tagline,
    body,
    faqs {
      ${faqBlockFragment}
    },
    featured,
    coverImage {
      ${imageWithAltFragment}
    },
    seo {
      ${seoFragment}
    }
  }
`

/**
 * Fetch all Blog Posts
 */
export const ALL_POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    authorName,
    excerpt,
    mainImage {
      ${imageWithAltFragment}
    }
  }
`

/**
 * Fetch Single Blog Post by slug
 */
export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    authorName,
    excerpt,
    body,
    mainImage {
      ${imageWithAltFragment}
    },
    seo {
      ${seoFragment}
    }
  }
`

/**
 * Fetch Singleton: Global Site Settings
 */
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    siteUrl,
    siteDescription,
    "faviconUrl": favicon.asset->url,
    defaultOgImage {
      ${imageWithAltFragment}
    },
    disallowedPaths,
    socialLinks[] {
      _key,
      platform,
      url
    }
  }
`

/**
 * Fetch Singleton: Header Navigation
 */
export const NAVIGATION_QUERY = groq`
  *[_type == "navigation"][0] {
    brandName,
    logo {
      ${imageWithAltFragment}
    },
    items[] {
      _key,
      label,
      link {
        ${linkFragment}
      },
      children[] {
        _key,
        label,
        description,
        link {
          ${linkFragment}
        }
      }
    },
    actionButtons[] {
      _key,
      ${ctaFragment}
    }
  }
`

/**
 * Fetch Singleton: Footer
 */
export const FOOTER_QUERY = groq`
  *[_type == "footer"][0] {
    tagline,
    copyright,
    columns[] {
      _key,
      columnTitle,
      links[] {
        _key,
        label,
        link {
          ${linkFragment}
        }
      }
    },
    legalLinks[] {
      _key,
      label,
      link {
        ${linkFragment}
      }
    }
  }
`

/**
 * Fetch all indexable documents for dynamic sitemap.xml generation
 * Excludes pages where seo.noIndex == true
 */
export const SITEMAP_QUERY = groq`
  *[_type in ["page", "service", "post"] && (seo.noIndex != true)] {
    _type,
    "slug": slug.current,
    "_updatedAt": _updatedAt
  }
`

/**
 * Fetch global crawling rules for dynamic robots.txt generation
 */
export const ROBOTS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    siteUrl,
    disallowedPaths
  }
`

/**
 * Fetch all CRM Lead Statuses ordered by order ascending
 */
export const ALL_LEAD_STATUSES_QUERY = groq`
  *[_type == "leadStatus"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    order,
    color,
    description,
    isDefault,
    isActive
  }
`

/**
 * Fetch active CRM Lead Statuses ordered by order ascending
 */
export const ACTIVE_LEAD_STATUSES_QUERY = groq`
  *[_type == "leadStatus" && isActive != false] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    order,
    color,
    description,
    isDefault,
    isActive
  }
`

/**
 * Fetch Singleton: Theme & Brand Styling Settings
 */
export const THEME_SETTINGS_QUERY = groq`
  *[_type == "themeSettings"][0] {
    ${themeSettingsFragment}
  }
`
