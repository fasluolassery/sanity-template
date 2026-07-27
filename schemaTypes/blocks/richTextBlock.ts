import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const richTextBlock = defineType({
  name: 'richTextBlock',
  title: 'Editorial Rich Text Section Block',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Optional Section Headline',
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
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Rich Text Block: ${title || 'Untitled Section'}`,
        subtitle: 'Editorial Body Section',
      }
    },
  },
})
