import { defineArrayMember, defineField, defineType } from 'sanity'

export const heroBlock = defineType({
  name: 'heroBlock',
  title: 'Hero Section Block',
  type: 'object',
  fields: [
    defineField({
      name: 'badge',
      title: 'Eyebrow Badge Text',
      type: 'string',
      description: 'Small tag or badge displayed above the main heading (e.g., "✨ Introducing Vis Pro").',
    }),
    defineField({
      name: 'heading',
      title: 'Main Headline',
      type: 'string',
      validation: (Rule) => Rule.required().error('Hero headline is required.'),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctas',
      title: 'Call to Action Buttons',
      type: 'array',
      of: [defineArrayMember({ type: 'cta' })],
      validation: (Rule) => Rule.max(3).warning('Recommended maximum 2-3 buttons in Hero.'),
    }),
    defineField({
      name: 'image',
      title: 'Hero Visual Media',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'layoutAlignment',
      title: 'Content Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left Aligned (Split Layout)', value: 'left' },
          { title: 'Center Aligned (Stacked Layout)', value: 'center' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'badge',
      media: 'image.asset',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `Hero: ${title || 'Untitled'}`,
        subtitle: subtitle ? `Badge: ${subtitle}` : 'Hero Section',
        media,
      }
    },
  },
})
