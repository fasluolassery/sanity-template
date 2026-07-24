import { defineField, defineType } from 'sanity'

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Image with Accessible Alt Text',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text (Alt Text)',
      type: 'string',
      description: 'Crucial for SEO and screen readers. Describe the image content concisely.',
      validation: (Rule) => Rule.required().error('Alt text is required for accessibility & SEO.'),
    }),
    defineField({
      name: 'caption',
      title: 'Image Caption',
      type: 'string',
      description: 'Optional descriptive caption displayed beneath the image.',
    }),
  ],
  preview: {
    select: {
      media: 'asset',
      title: 'alt',
      subtitle: 'caption',
    },
    prepare({ media, title, subtitle }) {
      return {
        media,
        title: title || 'Image asset',
        subtitle: subtitle || 'No caption provided',
      }
    },
  },
})
