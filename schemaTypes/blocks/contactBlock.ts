import { EnvelopeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const contactBlock = defineType({
  name: 'contactBlock',
  title: 'Contact Us Section Block',
  type: 'object',
  icon: EnvelopeIcon,
  fieldsets: [
    {
      name: 'header',
      title: '1. Section Header & Intro',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'contactInfo',
      title: '2. Direct Contact Info Channels',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'formBuilder',
      title: '3. Dynamic Form Fields Builder',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'formResponse',
      title: '4. Button & Submission Feedback',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    // --- 1. HEADER & INTRO ---
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Badge Text',
      type: 'string',
      fieldset: 'header',
      description: 'Optional tagline badge displayed above headline (e.g. "Get In Touch").',
    }),
    defineField({
      name: 'heading',
      title: 'Section Headline',
      type: 'string',
      fieldset: 'header',
      initialValue: "Let's Start a Conversation",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Paragraph Subtitle',
      type: 'text',
      fieldset: 'header',
      rows: 2,
      description: 'Optional introductory paragraph text.',
    }),

    // --- 2. DIRECT CONTACT INFO CHANNELS ---
    defineField({
      name: 'showContactInfo',
      title: 'Display Contact Info Channels Panel',
      type: 'boolean',
      fieldset: 'contactInfo',
      initialValue: true,
    }),
    defineField({
      name: 'email',
      title: 'Contact Email Address',
      type: 'string',
      fieldset: 'contactInfo',
      description: 'Direct support or sales email (e.g. hello@foundx.com).',
      hidden: ({ parent }) => !parent?.showContactInfo,
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone Number',
      type: 'string',
      fieldset: 'contactInfo',
      description: 'Direct phone number (e.g. +1 (555) 019-2834).',
      hidden: ({ parent }) => !parent?.showContactInfo,
    }),
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
      fieldset: 'contactInfo',
      rows: 2,
      description: 'Physical location or office address.',
      hidden: ({ parent }) => !parent?.showContactInfo,
    }),
    defineField({
      name: 'workingHours',
      title: 'Operating Hours',
      type: 'string',
      fieldset: 'contactInfo',
      description: 'Business hours (e.g. Mon - Fri: 9:00 AM - 6:00 PM EST).',
      hidden: ({ parent }) => !parent?.showContactInfo,
    }),
    defineField({
      name: 'mapUrl',
      title: 'Map Link / Coordinates URL',
      type: 'url',
      fieldset: 'contactInfo',
      description: 'Link to Google Maps or location directions.',
      hidden: ({ parent }) => !parent?.showContactInfo,
    }),

    // --- 3. UNIFIED DYNAMIC FORM FIELDS BUILDER ---
    defineField({
      name: 'formFields',
      title: 'Form Input Fields',
      type: 'array',
      fieldset: 'formBuilder',
      description:
        'Add, reorder, delete, or customize form inputs. Pre-populated with standard contact fields.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'contactFormField',
          title: 'Form Field Item',
          fields: [
            defineField({
              name: 'fieldName',
              title: 'Field Key / Identifier',
              type: 'string',
              description: 'Unique key identifier (e.g. "firstName", "email", "service").',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Field Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'placeholder',
              title: 'Input Placeholder Text',
              type: 'string',
            }),
            defineField({
              name: 'fieldType',
              title: 'Input Component Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Single Line Text', value: 'text' },
                  { title: 'Email Address', value: 'email' },
                  { title: 'Phone Number', value: 'phone' },
                  { title: 'Services Collection Dropdown', value: 'serviceSelect' },
                  { title: 'Standard Custom Dropdown', value: 'select' },
                  { title: 'Multi-line Textarea', value: 'textarea' },
                  { title: 'Checkbox Toggle', value: 'checkbox' },
                ],
              },
              initialValue: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'required',
              title: 'Is Required?',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              name: 'errorMessage',
              title: 'Validation Error Message',
              type: 'string',
              description: 'Custom message displayed when validation fails.',
            }),

            // --- Service Select Specific Fields ---
            defineField({
              name: 'serviceSelectionMode',
              title: 'Services Source Mode',
              type: 'string',
              description:
                'Populate dynamically from Services Collection, manual references, or custom options list.',
              options: {
                list: [
                  { title: 'All Services (Dynamic SSOT from Services Collection)', value: 'all' },
                  { title: 'Manual Selection from Services Collection', value: 'manual' },
                  { title: 'Custom Static Options', value: 'custom' },
                ],
                layout: 'radio',
              },
              initialValue: 'all',
              hidden: ({ parent }) => parent?.fieldType !== 'serviceSelect',
            }),
            defineField({
              name: 'selectedServices',
              title: 'Select Specific Services',
              type: 'array',
              of: [defineArrayMember({ type: 'reference', to: [{ type: 'service' }] })],
              hidden: ({ parent }) =>
                parent?.fieldType !== 'serviceSelect' || parent?.serviceSelectionMode !== 'manual',
            }),
            defineField({
              name: 'customServiceOptions',
              title: 'Custom Service Options',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
              hidden: ({ parent }) =>
                parent?.fieldType !== 'serviceSelect' || parent?.serviceSelectionMode !== 'custom',
            }),

            // --- Standard Select Specific Options ---
            defineField({
              name: 'options',
              title: 'Dropdown Options List',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
              hidden: ({ parent }) => parent?.fieldType !== 'select',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'fieldType',
              required: 'required',
            },
            prepare({ title, subtitle, required }) {
              return {
                title: title || 'Untitled Field',
                subtitle: `${subtitle || 'text'} ${required ? '(Required)' : '(Optional)'}`,
              }
            },
          },
        }),
      ],
      initialValue: [
        {
          _type: 'contactFormField',
          fieldName: 'firstName',
          label: 'First Name',
          placeholder: 'John',
          fieldType: 'text',
          required: true,
          errorMessage: 'Please enter your first name.',
        },
        {
          _type: 'contactFormField',
          fieldName: 'lastName',
          label: 'Last Name',
          placeholder: 'Doe',
          fieldType: 'text',
          required: true,
          errorMessage: 'Please enter your last name.',
        },
        {
          _type: 'contactFormField',
          fieldName: 'email',
          label: 'Email Address',
          placeholder: 'john@example.com',
          fieldType: 'email',
          required: true,
          errorMessage: 'Please enter a valid email address.',
        },
        {
          _type: 'contactFormField',
          fieldName: 'phone',
          label: 'Phone Number',
          placeholder: '+1 (555) 000-0000',
          fieldType: 'phone',
          required: false,
          errorMessage: 'Please enter a valid phone number.',
        },
        {
          _type: 'contactFormField',
          fieldName: 'service',
          label: 'Select Service',
          placeholder: 'Choose a service...',
          fieldType: 'serviceSelect',
          required: true,
          errorMessage: 'Please select a service.',
          serviceSelectionMode: 'all',
        },
        {
          _type: 'contactFormField',
          fieldName: 'message',
          label: 'Message',
          placeholder: 'Tell us about your project...',
          fieldType: 'textarea',
          required: true,
          errorMessage: 'Please enter your message.',
        },
      ],
    }),

    // --- 4. BUTTON & SUBMISSION FEEDBACK ---
    defineField({
      name: 'submitButtonLabel',
      title: 'Submit Button Label',
      type: 'string',
      fieldset: 'formResponse',
      initialValue: 'Send Message',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'successTitle',
      title: 'Success Response Title',
      type: 'string',
      fieldset: 'formResponse',
      initialValue: 'Message Sent!',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Response Message',
      type: 'text',
      fieldset: 'formResponse',
      rows: 2,
      initialValue:
        'Thank you for reaching out! Our team has received your inquiry and will respond within 24 hours.',
    }),
    defineField({
      name: 'formErrorMessage',
      title: 'Submission Error Banner Text',
      type: 'string',
      fieldset: 'formResponse',
      description: 'Banner text shown if network API submission fails.',
      initialValue: 'Failed to send message. Please check your connection and try again.',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Contact Us: ${title || 'Untitled'}`,
        subtitle: subtitle ? `Badge: ${subtitle}` : 'Dynamic Form Section',
      }
    },
  },
})
