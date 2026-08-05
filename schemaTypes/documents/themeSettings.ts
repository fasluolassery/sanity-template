import { DropIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const themeSettings = defineType({
  name: 'themeSettings',
  title: 'Theme & Brand Styling Settings',
  type: 'document',
  icon: DropIcon,
  fieldsets: [
    {
      name: 'palette',
      title: '1. Core Color Palette',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'buttons',
      title: '2. Button States & Colors',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'neutral',
      title: '3. Neutral Text Colors',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'pill',
      title: '4. Pill & Badge Styling',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    // --- 1. CORE COLOR PALETTE ---
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'simplerColor',
      fieldset: 'palette',
      description: 'Main brand identity color used for primary elements & highlights.',
      initialValue: { label: '#6366F1', value: '#6366F1' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'simplerColor',
      fieldset: 'palette',
      description: 'Supporting brand color used for secondary surfaces & containers.',
      initialValue: { label: '#0F172A', value: '#0F172A' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'simplerColor',
      fieldset: 'palette',
      description: 'Highlight accent color used for tags, badges, and attention points.',
      initialValue: { label: '#F59E0B', value: '#F59E0B' },
      validation: (Rule) => Rule.required(),
    }),

    // --- 2. BUTTON STATES & COLORS ---
    defineField({
      name: 'primaryButtonBg',
      title: 'Primary Button Background',
      type: 'simplerColor',
      fieldset: 'buttons',
      initialValue: { label: '#6366F1', value: '#6366F1' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryButtonTxt',
      title: 'Primary Button Text Color',
      type: 'simplerColor',
      fieldset: 'buttons',
      initialValue: { label: '#FFFFFF', value: '#FFFFFF' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryButtonHover',
      title: 'Primary Button Hover Background',
      type: 'simplerColor',
      fieldset: 'buttons',
      initialValue: { label: '#4F46E5', value: '#4F46E5' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryButtonBg',
      title: 'Secondary Button Background',
      type: 'simplerColor',
      fieldset: 'buttons',
      initialValue: { label: '#F1F5F9', value: '#F1F5F9' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryButtonTxt',
      title: 'Secondary Button Text Color',
      type: 'simplerColor',
      fieldset: 'buttons',
      initialValue: { label: '#0F172A', value: '#0F172A' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryButtonHover',
      title: 'Secondary Button Hover Background',
      type: 'simplerColor',
      fieldset: 'buttons',
      initialValue: { label: '#E2E8F0', value: '#E2E8F0' },
      validation: (Rule) => Rule.required(),
    }),

    // --- 3. NEUTRAL TEXT COLORS ---
    defineField({
      name: 'headingTxt',
      title: 'Heading Text Color',
      type: 'simplerColor',
      fieldset: 'neutral',
      description: 'Color used for section headings, titles, and card headers.',
      initialValue: { label: '#0F172A', value: '#0F172A' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'txtColor',
      title: 'Body Text Color',
      type: 'simplerColor',
      fieldset: 'neutral',
      description: 'Default body text color for paragraphs and subtitles.',
      initialValue: { label: '#334155', value: '#334155' },
      validation: (Rule) => Rule.required(),
    }),

    // --- 4. PILL & BADGE STYLING ---
    defineField({
      name: 'pillBg',
      title: 'Pill Background Color',
      type: 'simplerColor',
      fieldset: 'pill',
      description: 'Background color for small pill badges & tags.',
      initialValue: { label: '#EEF2FF', value: '#EEF2FF' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pillBorder',
      title: 'Pill Border Color',
      type: 'simplerColor',
      fieldset: 'pill',
      description: 'Border outline color for pill badges.',
      initialValue: { label: '#C7D2FE', value: '#C7D2FE' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pillTxtColor',
      title: 'Pill Text Color',
      type: 'simplerColor',
      fieldset: 'pill',
      description: 'Text color for pill badges.',
      initialValue: { label: '#4338CA', value: '#4338CA' },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Theme Settings',
        subtitle: 'Global color palette, buttons, text & pill badge styles',
      }
    },
  },
})
