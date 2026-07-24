import { defineField, defineType } from 'sanity'

export const responsiveImage = defineType({
  name: 'responsiveImage',
  title: 'Responsive Image (Device Adaptable)',
  type: 'object',
  fields: [
    defineField({
      name: 'desktop',
      title: 'Desktop Image (Default)',
      type: 'imageWithAlt',
      description:
        'Primary image asset used for desktop displays (16:9 widescreen recommended). Also acts as fallback for tablet/mobile if un-set.',
      validation: (Rule) => Rule.required().error('Desktop image is required.'),
    }),
    defineField({
      name: 'tablet',
      title: 'Tablet Image (Optional Override)',
      type: 'imageWithAlt',
      description:
        'Optional image crop/artwork optimized for tablet screens (4:3 aspect ratio recommended).',
    }),
    defineField({
      name: 'mobile',
      title: 'Mobile Image (Optional Override)',
      type: 'imageWithAlt',
      description:
        'Optional image crop/artwork optimized for mobile portrait screens (1:1 or 4:5 aspect ratio recommended).',
    }),
  ],
  preview: {
    select: {
      media: 'desktop.asset',
      alt: 'desktop.alt',
      hasTablet: 'tablet.asset',
      hasMobile: 'mobile.asset',
    },
    prepare({ media, alt, hasTablet, hasMobile }) {
      const overrides = []
      if (hasTablet) overrides.push('Tablet')
      if (hasMobile) overrides.push('Mobile')

      const overrideText =
        overrides.length > 0
          ? `Overrides: ${overrides.join(', ')}`
          : 'Single image (Desktop default)'

      return {
        media,
        title: alt || 'Responsive Image Set',
        subtitle: overrideText,
      }
    },
  },
})
