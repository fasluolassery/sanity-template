import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const leadStatus = defineType({
  name: 'leadStatus',
  title: 'CRM Lead Status',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Status Display Name',
      type: 'string',
      description:
        'Human-readable title for the pipeline stage (e.g. "New Lead", "Contacted", "Proposal Sent").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Status Slug',
      type: 'slug',
      description:
        'Unique lowercased identifier used in CRM Backend (e.g. "new", "contacted", "proposal_sent").',
      options: {
        source: 'title',
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Pipeline Order Index',
      type: 'number',
      description: 'Numeric sorting position for Kanban board columns (e.g., 10, 20, 30).',
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'color',
      title: 'Badge Color (Hex Code)',
      type: 'string',
      description: 'Hex color code for UI badges (e.g. "#3B82F6", "#10B981", "#EF4444").',
      initialValue: '#3B82F6',
      validation: (Rule) =>
        Rule.required().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, {
          name: 'hex color',
          invert: false,
        }),
    }),
    defineField({
      name: 'description',
      title: 'Stage Description',
      type: 'text',
      rows: 2,
      description: 'Internal documentation explaining when a lead transitions to this stage.',
    }),
    defineField({
      name: 'isDefault',
      title: 'Default Initial Stage',
      type: 'boolean',
      description:
        'If enabled, newly submitted public leads automatically start in this pipeline stage.',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active Pipeline Stage',
      type: 'boolean',
      description: 'Whether this status stage is enabled in the active CRM pipeline.',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Pipeline Order (Ascending)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      order: 'order',
      isActive: 'isActive',
      isDefault: 'isDefault',
    },
    prepare({ title, slug, order, isActive, isDefault }) {
      const defaultTag = isDefault ? ' [DEFAULT]' : ''
      const inactiveTag = isActive === false ? ' [INACTIVE]' : ''
      return {
        title: `${title}${defaultTag}${inactiveTag}`,
        subtitle: `Slug: ${slug} | Order: ${order}`,
      }
    },
  },
})
