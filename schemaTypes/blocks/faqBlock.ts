import { HelpCircleIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const faqBlock = defineType({
  name: 'faqBlock',
  title: 'FAQ Accordion Section Block',
  type: 'object',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Section Tag / Eyebrow',
      type: 'string',
      description: 'Optional small tagline displayed above headline.',
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Optional section heading (e.g. "Frequently Asked Questions").',
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
      validation: (Rule) => Rule.min(1).warning('Recommended to add at least 1 FAQ item.'),
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
