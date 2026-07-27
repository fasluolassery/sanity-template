import { defineArrayMember, defineField, defineType } from 'sanity'

export const whyChooseUsBlock = defineType({
  name: 'whyChooseUsBlock',
  title: 'Why Choose Us / Value Proposition Block',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Badge Text',
      type: 'string',
      description: 'Optional small tag line (e.g. "WHY CHOOSE US").',
    }),
    defineField({
      name: 'heading',
      title: 'Section Headline',
      type: 'string',
      description: 'Optional section title (e.g. "Engineered for Modern Enterprise Growth").',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ctas',
      title: 'Call to Action Buttons',
      type: 'array',
      of: [defineArrayMember({ type: 'cta' })],
      description: 'Optional section action buttons.',
    }),
    defineField({
      name: 'items',
      title: 'Value Proposition Items / Feature Graphics',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).error('At least one item is required.'),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'valuePropItem',
          title: 'Value Prop / Feature Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Item Title',
              type: 'string',
              description: 'Optional title (e.g. "99.99% Uptime Guarantee").',
            }),
            defineField({
              name: 'description',
              title: 'Item Description',
              type: 'text',
              rows: 2,
              description: 'Optional detail snippet.',
            }),
            defineField({
              name: 'icon',
              title: 'Lucide Icon Key',
              type: 'string',
              description: 'Optional Lucide icon key (e.g. "Zap", "ShieldCheck", "Clock").',
            }),
            defineField({
              name: 'image',
              title: 'Item Graphic / Illustration',
              type: 'imageWithAlt',
              description: 'Optional feature graphic, illustration, or photo.',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image.asset',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Item',
                subtitle: subtitle || 'Value Proposition Item',
                media,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      items: 'items',
    },
    prepare({ title, items }) {
      const count = Array.isArray(items) ? items.length : 0
      return {
        title: `Why Choose Us: ${title || 'Untitled Section'}`,
        subtitle: `${count} item${count === 1 ? '' : 's'}`,
      }
    },
  },
})
