/**
 * Centralized GROQ Query Fragments (DRY Principle)
 * Reusable projection fragments for Sanity objects, images, links, and blocks.
 */

export const imageWithAltFragment = `
  asset-> {
    _id,
    url,
    metadata {
      dimensions {
        width,
        height,
        aspectRatio
      },
      lqip
    }
  },
  alt,
  caption
`

export const linkFragment = `
  linkType,
  externalUrl,
  openInNewTab,
  internalLink-> {
    _type,
    "slug": slug.current,
    title
  }
`

export const ctaFragment = `
  label,
  variant,
  link {
    ${linkFragment}
  }
`

export const seoFragment = `
  metaTitle,
  metaDescription,
  openGraphImage {
    ${imageWithAltFragment}
  },
  canonicalUrl,
  noIndex,
  noFollow
`

export const heroBlockFragment = `
  _type == "heroBlock" => {
    _type,
    badge,
    heading,
    subheading,
    layoutAlignment,
    image {
      ${imageWithAltFragment}
    },
    ctas[] {
      ${ctaFragment}
    }
  }
`

export const servicesGridBlockFragment = `
  _type == "servicesGridBlock" => {
    _type,
    eyebrow,
    heading,
    description,
    selectionMode,
    "services": select(
      selectionMode == "manual" => selectedServices[]-> {
        _id,
        title,
        "slug": slug.current,
        icon,
        tagline,
        featured,
        coverImage {
          ${imageWithAltFragment}
        }
      },
      selectionMode == "all" => *[_type == "service"] | order(title asc) {
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
    )
  }
`

export const ctaBlockFragment = `
  _type == "ctaBlock" => {
    _type,
    title,
    description,
    backgroundTheme,
    ctas[] {
      ${ctaFragment}
    }
  }
`

export const faqBlockFragment = `
  _type == "faqBlock" => {
    _type,
    eyebrow,
    heading,
    description,
    faqs[] {
      _key,
      question,
      answer
    }
  }
`

export const richTextBlockFragment = `
  _type == "richTextBlock" => {
    _type,
    sectionTitle,
    containerWidth,
    body
  }
`

export const pageBuilderFragment = `
  pageBuilder[] {
    _key,
    _type,
    ${heroBlockFragment},
    ${servicesGridBlockFragment},
    ${ctaBlockFragment},
    ${faqBlockFragment},
    ${richTextBlockFragment}
  }
`
