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
      type: 'color',
      fieldset: 'palette',
      description: 'Main brand identity color used for primary elements & highlights.',
      initialValue: { hex: '#6366F1' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'color',
      fieldset: 'palette',
      description: 'Supporting brand color used for secondary surfaces & containers.',
      initialValue: { hex: '#0F172A' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'color',
      fieldset: 'palette',
      description: 'Highlight accent color used for tags, badges, and attention points.',
      initialValue: { hex: '#F59E0B' },
      validation: (Rule) => Rule.required(),
    }),

    // --- 2. BUTTON STATES & COLORS ---
    defineField({
      name: 'primaryButtonBg',
      title: 'Primary Button Background',
      type: 'color',
      fieldset: 'buttons',
      initialValue: { hex: '#6366F1' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryButtonTxt',
      title: 'Primary Button Text Color',
      type: 'color',
      fieldset: 'buttons',
      initialValue: { hex: '#FFFFFF' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryButtonHover',
      title: 'Primary Button Hover Background',
      type: 'color',
      fieldset: 'buttons',
      initialValue: { hex: '#4F46E5' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryButtonBg',
      title: 'Secondary Button Background',
      type: 'color',
      fieldset: 'buttons',
      initialValue: { hex: '#F1F5F9' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryButtonTxt',
      title: 'Secondary Button Text Color',
      type: 'color',
      fieldset: 'buttons',
      initialValue: { hex: '#0F172A' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryButtonHover',
      title: 'Secondary Button Hover Background',
      type: 'color',
      fieldset: 'buttons',
      initialValue: { hex: '#E2E8F0' },
      validation: (Rule) => Rule.required(),
    }),

    // --- 3. NEUTRAL TEXT COLORS ---
    defineField({
      name: 'headingTxt',
      title: 'Heading Text Color',
      type: 'color',
      fieldset: 'neutral',
      description: 'Color used for section headings, titles, and card headers.',
      initialValue: { hex: '#0F172A' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'txtColor',
      title: 'Body Text Color',
      type: 'color',
      fieldset: 'neutral',
      description: 'Default body text color for paragraphs and subtitles.',
      initialValue: { hex: '#334155' },
      validation: (Rule) => Rule.required(),
    }),

    // --- 4. PILL & BADGE STYLING ---
    defineField({
      name: 'pillBg',
      title: 'Pill Background Color',
      type: 'color',
      fieldset: 'pill',
      description: 'Background color for small pill badges & tags.',
      initialValue: { hex: '#EEF2FF' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pillBorder',
      title: 'Pill Border Color',
      type: 'color',
      fieldset: 'pill',
      description: 'Border outline color for pill badges.',
      initialValue: { hex: '#C7D2FE' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pillTxtColor',
      title: 'Pill Text Color',
      type: 'color',
      fieldset: 'pill',
      description: 'Text color for pill badges.',
      initialValue: { hex: '#4338CA' },
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
