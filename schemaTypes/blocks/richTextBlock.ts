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
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
    prepare({ title }) {
      return {
        title: `Rich Text Block: ${title || 'Untitled Section'}`,
        subtitle: 'Editorial Body Section',
      }
    },
  },
})
