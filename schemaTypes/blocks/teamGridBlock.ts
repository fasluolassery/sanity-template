import { defineArrayMember, defineField, defineType } from 'sanity'

export const teamGridBlock = defineType({
  name: 'teamGridBlock',
  title: 'Team & Leadership Grid Block',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Badge Text',
      type: 'string',
      description: 'Optional tag line (e.g. "OUR LEADERSHIP").',
    }),
    defineField({
      name: 'heading',
      title: 'Section Headline',
      type: 'string',
      description: 'Optional section heading (e.g. "Meet the Minds Behind the Magic").',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'displayMode',
      title: 'Team Display Layout Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Individual Member Cards Grid', value: 'grid' },
          { title: 'Single Team Group Photo', value: 'singleGroupImage' },
        ],
        layout: 'radio',
      },
      initialValue: 'grid',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'groupPhoto',
      title: 'Full Team Group Photo',
      type: 'responsiveImage',
      description:
        'Single group photo displayed when display mode is set to "Single Team Group Photo".',
      hidden: ({ parent }) => parent?.displayMode !== 'singleGroupImage',
    }),
    defineField({
      name: 'members',
      title: 'Team Members List',
      type: 'array',
      hidden: ({ parent }) => parent?.displayMode === 'singleGroupImage',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'teamMember',
          title: 'Team Member',
          fields: [
            defineField({
              name: 'name',
              title: 'Full Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Job Title / Role',
              type: 'string',
              description: 'e.g. "Co-Founder & CEO", "Lead Architect"',
            }),
            defineField({
              name: 'photo',
              title: 'Headshot Photo',
              type: 'imageWithAlt',
            }),
            defineField({
              name: 'bio',
              title: 'Short Bio',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'socialLinks',
              title: 'Social Media Profiles',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'memberSocial',
                  fields: [
                    defineField({
                      name: 'platform',
                      title: 'Platform Name',
                      type: 'string',
                      description: 'e.g. LinkedIn, Twitter/X, GitHub',
                    }),
                    defineField({
                      name: 'url',
                      title: 'Profile URL',
                      type: 'url',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
              media: 'photo.asset',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Unnamed Member',
                subtitle: subtitle || 'Team Member',
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
      mode: 'displayMode',
      members: 'members',
    },
    prepare({ title, mode, members }) {
      const count = Array.isArray(members) ? members.length : 0
      const modeLabel =
        mode === 'singleGroupImage' ? 'Group Photo' : `${count} member${count === 1 ? '' : 's'}`
      return {
        title: `Team: ${title || 'Untitled Section'}`,
        subtitle: `Layout: ${modeLabel}`,
      }
    },
  },
})
