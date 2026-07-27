import { CommentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const testimonialsBlock = defineType({
  name: 'testimonialsBlock',
  title: 'Client Testimonials Block',
  type: 'object',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Badge Text',
      type: 'string',
      description: 'Optional small tag line (e.g. "WHAT OUR CLIENTS SAY").',
    }),
    defineField({
      name: 'heading',
      title: 'Section Headline',
      type: 'string',
      description: 'Optional section heading (e.g. "Loved by Industry Leaders Worldwide").',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'testimonials',
      title: 'Client Reviews',
      type: 'array',
      validation: (Rule) =>
        Rule.required().min(1).error('At least one testimonial review is required.'),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'testimonialItem',
          title: 'Review Item',
          fields: [
            defineField({
              name: 'quote',
              title: 'Review Quote / Testimonial Body',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'authorName',
              title: 'Author Full Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'authorRole',
              title: 'Author Job Title & Company',
              type: 'string',
              description: 'e.g. "CTO at TechCorp", "Founder & CEO"',
            }),
            defineField({
              name: 'avatar',
              title: 'Author Headshot Photo',
              type: 'imageWithAlt',
            }),
            defineField({
              name: 'rating',
              title: 'Star Rating (1 to 5)',
              type: 'number',
              options: {
                list: [
                  { title: '⭐⭐⭐⭐⭐ (5 Stars)', value: 5 },
                  { title: '⭐⭐⭐⭐ (4 Stars)', value: 4 },
                  { title: '⭐⭐⭐ (3 Stars)', value: 3 },
                ],
              },
              initialValue: 5,
            }),
          ],
          preview: {
            select: {
              title: 'authorName',
              subtitle: 'authorRole',
              media: 'avatar.asset',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Anonymous Review',
                subtitle: subtitle || 'Client Review',
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
      testimonials: 'testimonials',
    },
    prepare({ title, testimonials }) {
      const count = Array.isArray(testimonials) ? testimonials.length : 0
      return {
        title: `Testimonials: ${title || 'Untitled Section'}`,
        subtitle: `${count} review${count === 1 ? '' : 's'}`,
      }
    },
  },
})
