import { type SchemaTypeDefinition } from 'sanity'

// Objects (Primitives)
import { seo } from './objects/seo'
import { link } from './objects/link'
import { cta } from './objects/cta'
import { imageWithAlt } from './objects/imageWithAlt'
import { responsiveImage } from './objects/responsiveImage'
import { richText } from './objects/richText'

// Blocks (Page Builder Sections)
import { heroBlock } from './blocks/heroBlock'
import { servicesGridBlock } from './blocks/servicesGridBlock'
import { ctaBlock } from './blocks/ctaBlock'
import { faqBlock } from './blocks/faqBlock'
import { richTextBlock } from './blocks/richTextBlock'

// Documents
import { page } from './documents/page'
import { service } from './documents/service'
import { post } from './documents/post'
import { siteSettings } from './documents/siteSettings'
import { navigation } from './documents/navigation'
import { footer } from './documents/footer'

export const schemaTypes: SchemaTypeDefinition[] = [
  // Primitive Objects
  seo,
  link,
  cta,
  imageWithAlt,
  responsiveImage,
  richText,

  // Section Blocks
  heroBlock,
  servicesGridBlock,
  ctaBlock,
  faqBlock,
  richTextBlock,

  // Documents
  page,
  service,
  post,
  siteSettings,
  navigation,
  footer,
]
