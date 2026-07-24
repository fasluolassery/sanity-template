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
    defineField({
      name: 'backgroundTheme',
      title: 'Background Style Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Brand Primary Gradient', value: 'brand' },
          { title: 'Dark Premium', value: 'dark' },
          { title: 'Clean Light / White', value: 'light' },
        ],
      },
      initialValue: 'brand',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      theme: 'backgroundTheme',
    },
    prepare({ title, theme }) {
      return {
        title: `CTA Banner: ${title || 'Untitled'}`,
        subtitle: `Theme: ${theme || 'brand'}`,
      }
    },
  },
})
