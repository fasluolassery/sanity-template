import { ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const heroBlock = defineType({
  name: 'heroBlock',
  title: 'Hero Section Block',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'badge',
      title: 'Eyebrow Badge Text',
      type: 'string',
      description:
        'Small tag or badge displayed above the main heading (e.g., "✨ Introducing New Feature").',
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
      title: 'Responsive Hero Visual Media',
      type: 'responsiveImage',
      description: 'Device-adaptable image set supporting Desktop, Tablet, and Mobile layouts.',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'badge',
      media: 'image.desktop.asset',
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
