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

export const responsiveImageFragment = `
  desktop {
    ${imageWithAltFragment}
  },
  tablet {
    ${imageWithAltFragment}
  },
  mobile {
    ${imageWithAltFragment}
  }
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
  keywords,
  twitterCardType,
  jsonLdType,
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
    image {
      ${responsiveImageFragment}
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
    body
  }
`

export const statsBlockFragment = `
  _type == "statsBlock" => {
    _type,
    eyebrow,
    heading,
    description,
    stats[] {
      _key,
      value,
      label,
      description
    }
  }
`

export const logoCloudBlockFragment = `
  _type == "logoCloudBlock" => {
    _type,
    heading,
    logos[] {
      _key,
      companyName,
      logo {
        ${imageWithAltFragment}
      },
      link
    }
  }
`

export const testimonialsBlockFragment = `
  _type == "testimonialsBlock" => {
    _type,
    eyebrow,
    heading,
    description,
    testimonials[] {
      _key,
      quote,
      authorName,
      authorRole,
      avatar {
        ${imageWithAltFragment}
      },
      rating
    }
  }
`

export const teamGridBlockFragment = `
  _type == "teamGridBlock" => {
    _type,
    eyebrow,
    heading,
    description,
    displayMode,
    groupPhoto {
      ${responsiveImageFragment}
    },
    members[] {
      _key,
      name,
      role,
      photo {
        ${imageWithAltFragment}
      },
      bio,
      socialLinks[] {
        _key,
        platform,
        url
      }
    }
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
    ${richTextBlockFragment},
    ${statsBlockFragment},
    ${logoCloudBlockFragment},
    ${testimonialsBlockFragment},
    ${teamGridBlockFragment}
  }
`
