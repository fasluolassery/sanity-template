import { defineArrayMember, defineField, defineType } from 'sanity'

export const servicesGridBlock = defineType({
  name: 'servicesGridBlock',
  title: 'Services Grid Section Block',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Section Tag / Eyebrow',
      type: 'string',
      description: 'Optional small tagline displayed above headline.',
    }),
    defineField({
      name: 'heading',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Services section title is required.'),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'selectionMode',
      title: 'Service Display Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Show All Active Services Automatically', value: 'all' },
          { title: 'Select Specific Services Manually', value: 'manual' },
        ],
        layout: 'radio',
      },
      initialValue: 'all',
    }),
    defineField({
      name: 'selectedServices',
      title: 'Selected Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'service' }],
        }),
      ],
      hidden: ({ parent }) => parent?.selectionMode !== 'manual',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      mode: 'selectionMode',
    },
    prepare({ title, mode }) {
      return {
        title: `Services Grid: ${title || 'Untitled'}`,
        subtitle: `Mode: ${mode === 'manual' ? 'Manual Selection' : 'All Active Services'}`,
      }
    },
  },
})
