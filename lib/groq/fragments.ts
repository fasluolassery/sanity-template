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
    eyebrow,
    heading,
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
    heading,
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
    eyebrow,
    heading,
    description,
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

export const whyChooseUsBlockFragment = `
  _type == "whyChooseUsBlock" => {
    _type,
    eyebrow,
    heading,
    description,
    ctas[] {
      ${ctaFragment}
    },
    items[] {
      _key,
      title,
      description,
      icon,
      image {
        ${imageWithAltFragment}
      }
    }
  }
`

export const contactBlockFragment = `
  _type == "contactBlock" => {
    _type,
    eyebrow,
    heading,
    description,
    showContactInfo,
    email,
    phone,
    address,
    workingHours,
    mapUrl,
    formFields[] {
      _key,
      fieldName,
      label,
      placeholder,
      fieldType,
      required,
      errorMessage,
      serviceSelectionMode,
      "serviceOptions": select(
        fieldType == "serviceSelect" && serviceSelectionMode == "all" => *[_type == "service"] | order(title asc) {
          _id,
          title,
          "slug": slug.current
        },
        fieldType == "serviceSelect" && serviceSelectionMode == "manual" => selectedServices[]-> {
          _id,
          title,
          "slug": slug.current
        },
        fieldType == "serviceSelect" && serviceSelectionMode == "custom" => customServiceOptions
      ),
      options
    },
    submitButtonLabel,
    successTitle,
    successMessage,
    formErrorMessage
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
    ${teamGridBlockFragment},
    ${whyChooseUsBlockFragment},
    ${contactBlockFragment}
  }
`

export const themeSettingsFragment = `
  "primaryColor": coalesce(primaryColor.value, primaryColor.hex, primaryColor),
  "secondaryColor": coalesce(secondaryColor.value, secondaryColor.hex, secondaryColor),
  "accentColor": coalesce(accentColor.value, accentColor.hex, accentColor),
  "primaryButtonBg": coalesce(primaryButtonBg.value, primaryButtonBg.hex, primaryButtonBg),
  "primaryButtonTxt": coalesce(primaryButtonTxt.value, primaryButtonTxt.hex, primaryButtonTxt),
  "primaryButtonHover": coalesce(primaryButtonHover.value, primaryButtonHover.hex, primaryButtonHover),
  "secondaryButtonBg": coalesce(secondaryButtonBg.value, secondaryButtonBg.hex, secondaryButtonBg),
  "secondaryButtonTxt": coalesce(secondaryButtonTxt.value, secondaryButtonTxt.hex, secondaryButtonTxt),
  "secondaryButtonHover": coalesce(secondaryButtonHover.value, secondaryButtonHover.hex, secondaryButtonHover),
  "headingTxt": coalesce(headingTxt.value, headingTxt.hex, headingTxt),
  "txtColor": coalesce(txtColor.value, txtColor.hex, txtColor),
  "pillBg": coalesce(pillBg.value, pillBg.hex, pillBg),
  "pillBorder": coalesce(pillBorder.value, pillBorder.hex, pillBorder),
  "pillTxtColor": coalesce(pillTxtColor.value, pillTxtColor.hex, pillTxtColor)
`
