import { defineField, defineType } from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Page / Service / Post', value: 'internal' },
          { title: 'External Web URL', value: 'external' },
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internalLink',
      title: 'Internal Document Target',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'service' }, { type: 'post' }],
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External Web URL',
      type: 'url',
      description: 'Must include https:// or http://',
      hidden: ({ parent }) => parent?.linkType !== 'external',
      validation: (Rule) =>
        Rule.custom((url, context) => {
          const parent = context.parent as { linkType?: string }
          if (parent?.linkType === 'external' && !url) {
            return 'External URL is required when link type is External Web URL'
          }
          return true
        }),
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in new tab / window',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
