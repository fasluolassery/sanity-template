import { DropIcon } from '@sanity/icons'
import { StringRule, defineField, defineType } from 'sanity'

// Color regex validation helper for Hex format (#RGB or #RRGGBB)
const hexColorRule = (Rule: StringRule) =>
  Rule.regex(/^#([0-9A-Fa-f]{3}){1,2}$/, {
    name: 'hex color',
    invert: false,
  }).error('Must be a valid hex color code (e.g. #6366F1 or #FFF)')

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
      type: 'string',
      fieldset: 'palette',
      description: 'Main brand identity color used for primary elements & highlights.',
      initialValue: '#6366F1',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'string',
      fieldset: 'palette',
      description: 'Supporting brand color used for secondary surfaces & containers.',
      initialValue: '#0F172A',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      fieldset: 'palette',
      description: 'Highlight accent color used for tags, badges, and attention points.',
      initialValue: '#F59E0B',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),

    // --- 2. BUTTON STATES & COLORS ---
    defineField({
      name: 'primaryButtonBg',
      title: 'Primary Button Background',
      type: 'string',
      fieldset: 'buttons',
      initialValue: '#6366F1',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),
    defineField({
      name: 'primaryButtonTxt',
      title: 'Primary Button Text Color',
      type: 'string',
      fieldset: 'buttons',
      initialValue: '#FFFFFF',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),
    defineField({
      name: 'primaryButtonHover',
      title: 'Primary Button Hover Background',
      type: 'string',
      fieldset: 'buttons',
      initialValue: '#4F46E5',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),
    defineField({
      name: 'secondaryButtonBg',
      title: 'Secondary Button Background',
      type: 'string',
      fieldset: 'buttons',
      initialValue: '#F1F5F9',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),
    defineField({
      name: 'secondaryButtonTxt',
      title: 'Secondary Button Text Color',
      type: 'string',
      fieldset: 'buttons',
      initialValue: '#0F172A',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),
    defineField({
      name: 'secondaryButtonHover',
      title: 'Secondary Button Hover Background',
      type: 'string',
      fieldset: 'buttons',
      initialValue: '#E2E8F0',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),

    // --- 3. NEUTRAL TEXT COLORS ---
    defineField({
      name: 'headingTxt',
      title: 'Heading Text Color',
      type: 'string',
      fieldset: 'neutral',
      description: 'Color used for section headings, titles, and card headers.',
      initialValue: '#0F172A',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),
    defineField({
      name: 'txtColor',
      title: 'Body Text Color',
      type: 'string',
      fieldset: 'neutral',
      description: 'Default body text color for paragraphs and subtitles.',
      initialValue: '#334155',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),

    // --- 4. PILL & BADGE STYLING ---
    defineField({
      name: 'pillBg',
      title: 'Pill Background Color',
      type: 'string',
      fieldset: 'pill',
      description: 'Background color for small pill badges & tags.',
      initialValue: '#EEF2FF',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),
    defineField({
      name: 'pillBorder',
      title: 'Pill Border Color',
      type: 'string',
      fieldset: 'pill',
      description: 'Border outline color for pill badges.',
      initialValue: '#C7D2FE',
      validation: (Rule) => hexColorRule(Rule).required(),
    }),
    defineField({
      name: 'pillTxtColor',
      title: 'Pill Text Color',
      type: 'string',
      fieldset: 'pill',
      description: 'Text color for pill badges.',
      initialValue: '#4338CA',
      validation: (Rule) => hexColorRule(Rule).required(),
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
