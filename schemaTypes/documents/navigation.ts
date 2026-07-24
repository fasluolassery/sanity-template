import { defineArrayMember, defineField, defineType } from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Header Navigation Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Brand Title / Logo Text',
      type: 'string',
      initialValue: 'Brand Name',
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo Graphic',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'items',
      title: 'Navigation Menu Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'navItem',
          title: 'Menu Item',
          fields: [
            defineField({
              name: 'label',
              title: 'Nav Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Target Link',
              type: 'link',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'children',
              title: 'Dropdown Sub-items (Optional)',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'subNavItem',
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
                      title: 'Link Target',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'description',
                      type: 'string',
                      title: 'Short Hover Description',
                    }),
                  ],
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'label',
              children: 'children',
            },
            prepare({ title, children }) {
              const subCount = children ? children.length : 0
              return {
                title: title || 'Untitled Item',
                subtitle: subCount > 0 ? `Dropdown with ${subCount} links` : 'Single Link',
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'actionButtons',
      title: 'Header Action CTA Buttons',
      type: 'array',
      of: [defineArrayMember({ type: 'cta' })],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Navigation Menu',
        subtitle: 'Navigation links & top header action buttons',
      }
    },
  },
})
