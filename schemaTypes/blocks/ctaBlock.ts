import { defineArrayMember, defineField, defineType } from 'sanity'

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'Call-to-Action Banner Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
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
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `CTA Banner: ${title || 'Untitled'}`,
        subtitle: 'CTA Banner Section',
      }
    },
  },
})
