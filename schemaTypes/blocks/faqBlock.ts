import { defineArrayMember, defineField, defineType } from 'sanity'

export const faqBlock = defineType({
  name: 'faqBlock',
  title: 'FAQ Accordion Section Block',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Section Tag',
      type: 'string',
      initialValue: 'FAQ',
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Frequently Asked Questions',
    }),
    defineField({
      name: 'description',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'faqs',
      title: 'Questions & Answers',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'richText',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      items: 'faqs',
    },
    prepare({ title, items }) {
      const count = items ? items.length : 0
      return {
        title: `FAQ Block: ${title || 'Untitled'}`,
        subtitle: `${count} question(s)`,
      }
    },
  },
})
