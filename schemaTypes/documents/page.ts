import { DocumentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    { name: 'content', title: 'Page Content & Layout', default: true },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().error('Page title is required.'),
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
      validation: (Rule) => Rule.required().error('URL Slug is required.'),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder Sections',
      description: 'Add, reorder, or customize dynamic content blocks for this page.',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({ type: 'heroBlock' }),
        defineArrayMember({ type: 'servicesGridBlock' }),
        defineArrayMember({ type: 'ctaBlock' }),
        defineArrayMember({ type: 'faqBlock' }),
        defineArrayMember({ type: 'richTextBlock' }),
        defineArrayMember({ type: 'statsBlock' }),
        defineArrayMember({ type: 'logoCloudBlock' }),
        defineArrayMember({ type: 'testimonialsBlock' }),
        defineArrayMember({ type: 'teamGridBlock' }),
        defineArrayMember({ type: 'whyChooseUsBlock' }),
        defineArrayMember({ type: 'contactBlock' }),
      ],
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
      slug: 'slug.current',
    },
    prepare({ title, slug }) {
      return {
        title: title || 'Untitled Page',
        subtitle: slug === '/' ? 'Home Page (/)' : `/${slug || ''}`,
      }
    },
  },
})
