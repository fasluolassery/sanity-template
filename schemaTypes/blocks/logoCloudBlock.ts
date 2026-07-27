import { defineArrayMember, defineField, defineType } from 'sanity'

export const logoCloudBlock = defineType({
  name: 'logoCloudBlock',
  title: 'Client & Partner Logo Cloud Block',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Badge Text',
      type: 'string',
      description: 'Optional small tagline displayed above headline.',
    }),
    defineField({
      name: 'heading',
      title: 'Section Headline',
      type: 'string',
      description: 'Optional heading (e.g. "Trusted by industry leaders worldwide").',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'logos',
      title: 'Brand Logos',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).error('At least one logo item is required.'),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'logoItem',
          title: 'Brand Logo Item',
          fields: [
            defineField({
              name: 'companyName',
              title: 'Company Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Company Logo Graphic',
              type: 'imageWithAlt',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Optional External URL',
              type: 'url',
              description: 'Optional link to company website.',
            }),
          ],
          preview: {
            select: {
              title: 'companyName',
              media: 'logo.asset',
            },
            prepare({ title, media }) {
              return {
                title: title || 'Untitled Logo',
                subtitle: 'Client Brand Logo',
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
      logos: 'logos',
    },
    prepare({ title, logos }) {
      const count = Array.isArray(logos) ? logos.length : 0
      return {
        title: `Logo Cloud: ${title || 'Untitled Section'}`,
        subtitle: `${count} brand logo${count === 1 ? '' : 's'}`,
      }
    },
  },
})
