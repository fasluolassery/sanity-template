import { defineArrayMember, defineField, defineType } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Footer Company Blurb',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'columns',
      title: 'Footer Link Columns',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'footerColumn',
          fields: [
            defineField({
              name: 'columnTitle',
              title: 'Column Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'links',
              title: 'Column Links',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'footerLink',
                  fields: [
                    defineField({
                      name: 'label',
                      type: 'string',
                      title: 'Label',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'link',
                      type: 'link',
                      title: 'Target Link',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Notice',
      type: 'string',
      initialValue: '© 2026 Brand Name. All rights reserved.',
    }),
    defineField({
      name: 'legalLinks',
      title: 'Footer Legal Links (Privacy, Terms, Cookies)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'legalLink',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              type: 'link',
              title: 'Target Link',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Configuration',
        subtitle: 'Footer columns, copyright, and legal links',
      }
    },
  },
})
