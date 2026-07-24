import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Services Collection',
  type: 'document',
  groups: [
    { name: 'content', title: 'Service Details', default: true },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Lucide Icon Key',
      type: 'string',
      group: 'content',
      description: 'Name of the Lucide React icon (e.g. "Layout", "Code", "Layers", "Sparkles").',
    }),
    defineField({
      name: 'tagline',
      title: 'Short Summary Tagline',
      type: 'text',
      rows: 2,
      group: 'content',
      description: 'Brief description displayed on the homepage services grid cards.',
      validation: (Rule) => Rule.required().max(180),
    }),
    defineField({
      name: 'coverImage',
      title: 'Service Cover / Thumbnail Image',
      type: 'imageWithAlt',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Detailed Service Description',
      type: 'richText',
      group: 'content',
    }),
    defineField({
      name: 'featured',
      title: 'Highlight as Featured Service',
      type: 'boolean',
      group: 'content',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'coverImage.asset',
    },
  },
})
