import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Global SEO',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Global Website Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteUrl',
      title: 'Canonical Website Domain URL',
      type: 'url',
      description:
        'Primary domain URL used for canonical links and sitemap generation (e.g. https://yourdomain.com).',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon Asset',
      type: 'image',
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default Social Share Image (Open Graph)',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'disallowedPaths',
      title: 'Search Bot Disallowed Paths (robots.txt)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description:
        'Paths search engine crawlers should ignore (e.g. "/studio", "/api/", "/admin/").',
      initialValue: ['/studio', '/api/'],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Platform Profiles',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialPlatform',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform Name',
              type: 'string',
              description: 'e.g. Twitter/X, LinkedIn, GitHub, Instagram',
            }),
            defineField({
              name: 'url',
              title: 'Profile URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Site Settings',
        subtitle: 'Domain URL, default SEO & crawling rules',
      }
    },
  },
})
