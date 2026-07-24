import { defineArrayMember, defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO & Social Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description:
        'Title used for search engine indexing and browser tabs. Recommended length: 50-60 characters.',
      validation: (Rule) =>
        Rule.max(70).warning(
          'Titles longer than 70 characters may be truncated by search engines.'
        ),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description:
        'Brief summary of the page for search result snippets. Recommended length: 120-160 characters.',
      validation: (Rule) =>
        Rule.max(160).warning('Descriptions longer than 160 characters may be truncated.'),
    }),
    defineField({
      name: 'keywords',
      title: 'Search Keywords / Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        layout: 'tags',
      },
      description: 'Comma-separated keywords for metadata tags and internal search indexing.',
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Social Share Image (Open Graph)',
      type: 'image',
      description:
        'Image displayed when sharing this page on social platforms like Twitter, LinkedIn, and Facebook (1200x630 recommended).',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'twitterCardType',
      title: 'Twitter / X Card Display Type',
      type: 'string',
      options: {
        list: [
          { title: 'Large Image Banner (summary_large_image)', value: 'summary_large_image' },
          { title: 'Compact Thumbnail (summary)', value: 'summary' },
        ],
      },
      initialValue: 'summary_large_image',
    }),
    defineField({
      name: 'jsonLdType',
      title: 'Structured Data Schema Type (JSON-LD)',
      type: 'string',
      description: 'Schema.org classification for Google Rich Snippets.',
      options: {
        list: [
          { title: 'WebPage (Standard Landing Page)', value: 'WebPage' },
          { title: 'Article (Blog Post / News)', value: 'Article' },
          { title: 'Service (Service Offering Page)', value: 'Service' },
          { title: 'Organization (Company / About Us)', value: 'Organization' },
          { title: 'FAQPage (Questions & Answers)', value: 'FAQPage' },
        ],
      },
      initialValue: 'WebPage',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Optional overriding canonical URL for search engines.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines (noindex)',
      type: 'boolean',
      description: 'Enable to prevent search engine bots from indexing this page.',
      initialValue: false,
    }),
    defineField({
      name: 'noFollow',
      title: 'Do Not Follow Links (nofollow)',
      type: 'boolean',
      description: 'Enable to instruct search engine bots not to follow links on this page.',
      initialValue: false,
    }),
  ],
})
