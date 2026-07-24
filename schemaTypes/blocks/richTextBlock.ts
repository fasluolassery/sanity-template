import { defineField, defineType } from 'sanity'

export const richTextBlock = defineType({
  name: 'richTextBlock',
  title: 'Editorial Rich Text Section Block',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Optional Section Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Formatted Content Body',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'containerWidth',
      title: 'Container Max Width',
      type: 'string',
      options: {
        list: [
          { title: 'Narrow Reading Column (650px)', value: 'narrow' },
          { title: 'Medium Container (900px)', value: 'medium' },
          { title: 'Full Grid Container (1200px)', value: 'full' },
        ],
      },
      initialValue: 'medium',
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      width: 'containerWidth',
    },
    prepare({ title, width }) {
      return {
        title: `Rich Text Block: ${title || 'Untitled Section'}`,
        subtitle: `Container width: ${width || 'medium'}`,
      }
    },
  },
})
