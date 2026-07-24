import { defineField, defineType } from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'Call to Action Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
      validation: (Rule) => Rule.required().error('Button label is required.'),
    }),
    defineField({
      name: 'link',
      title: 'Link Destination',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Visual Variant Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary Filled', value: 'primary' },
          { title: 'Secondary Accent', value: 'secondary' },
          { title: 'Outline Bordered', value: 'outline' },
          { title: 'Text Hyperlink', value: 'text' },
        ],
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      variant: 'variant',
    },
    prepare({ title, variant }) {
      return {
        title: title || 'Untitled CTA',
        subtitle: `Style: ${variant || 'primary'}`,
      }
    },
  },
})
