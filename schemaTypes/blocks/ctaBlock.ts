import { RocketIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'Call-to-Action Banner Block',
  type: 'object',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Badge Text',
      type: 'string',
      description: 'Optional small tagline displayed above headline.',
    }),
    defineField({
      name: 'heading',
      title: 'Banner Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Paragraph Text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ctas',
      title: 'Action Buttons',
      type: 'array',
      of: [defineArrayMember({ type: 'cta' })],
      validation: (Rule) => Rule.max(3).warning('Recommended maximum 2-3 buttons.'),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
    },
    prepare({ title, subtitle }) {
      return {
        title: `CTA Banner: ${title || 'Untitled'}`,
        subtitle: subtitle ? `Badge: ${subtitle}` : 'CTA Banner Section',
      }
    },
  },
})
