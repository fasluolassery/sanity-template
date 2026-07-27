import { EditIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Posts Collection',
  type: 'document',
  icon: EditIcon,
  groups: [
    { name: 'content', title: 'Article Content', default: true },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Summary / Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Article Image',
      type: 'imageWithAlt',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'richText',
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'authorName',
      date: 'publishedAt',
      media: 'mainImage.asset',
    },
    prepare({ title, author, date, media }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'Draft'
      return {
        title: title || 'Untitled Post',
        subtitle: `By ${author || 'Anonymous'} • ${formattedDate}`,
        media,
      }
    },
  },
})
