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
      name: 'formFields',
      title: '3. Core Form Fields & Error Messages',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'customFields',
      title: '4. Additional Custom Form Fields',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'formResponse',
      title: '5. Button & Submission Feedback',
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

    // --- 3. CORE FORM FIELDS & PER-FIELD ERROR MESSAGES ---
    // 3.1 First Name Field
    defineField({
      name: 'firstNameField',
      title: 'First Name Input Config',
      type: 'object',
      fieldset: 'formFields',
      fields: [
        defineField({
          name: 'label',
          title: 'Field Label',
          type: 'string',
          initialValue: 'First Name',
        }),
        defineField({
          name: 'placeholder',
          title: 'Input Placeholder',
          type: 'string',
          initialValue: 'John',
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
          description: 'Error message shown when validation fails.',
          initialValue: 'Please enter your first name.',
        }),
      ],
    }),

    // 3.2 Last Name Field
    defineField({
      name: 'lastNameField',
      title: 'Last Name Input Config',
      type: 'object',
      fieldset: 'formFields',
      fields: [
        defineField({
          name: 'label',
          title: 'Field Label',
          type: 'string',
          initialValue: 'Last Name',
        }),
        defineField({
          name: 'placeholder',
          title: 'Input Placeholder',
          type: 'string',
          initialValue: 'Doe',
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
          description: 'Error message shown when validation fails.',
          initialValue: 'Please enter your last name.',
        }),
      ],
    }),

    // 3.3 Email Field
    defineField({
      name: 'emailField',
      title: 'Email Address Input Config',
      type: 'object',
      fieldset: 'formFields',
      fields: [
        defineField({
          name: 'label',
          title: 'Field Label',
          type: 'string',
          initialValue: 'Email Address',
        }),
        defineField({
          name: 'placeholder',
          title: 'Input Placeholder',
          type: 'string',
          initialValue: 'john@example.com',
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
          description: 'Error message shown when validation fails.',
          initialValue: 'Please enter a valid email address.',
        }),
      ],
    }),

    // 3.4 Phone Field
    defineField({
      name: 'phoneField',
      title: 'Phone Number Input Config',
      type: 'object',
      fieldset: 'formFields',
      fields: [
        defineField({
          name: 'label',
          title: 'Field Label',
          type: 'string',
          initialValue: 'Phone Number',
        }),
        defineField({
          name: 'placeholder',
          title: 'Input Placeholder',
          type: 'string',
          initialValue: '+1 (555) 000-0000',
        }),
        defineField({
          name: 'required',
          title: 'Is Required?',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'errorMessage',
          title: 'Validation Error Message',
          type: 'string',
          description: 'Error message shown when validation fails.',
          initialValue: 'Please enter a valid phone number.',
        }),
      ],
    }),

    // 3.5 Service Select Field (Connected to Services Collection)
    defineField({
      name: 'serviceField',
      title: 'Service Select Dropdown Config',
      type: 'object',
      fieldset: 'formFields',
      fields: [
        defineField({
          name: 'label',
          title: 'Field Label',
          type: 'string',
          initialValue: 'Select Service',
        }),
        defineField({
          name: 'placeholder',
          title: 'Dropdown Placeholder Text',
          type: 'string',
          initialValue: 'Choose a service...',
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
          initialValue: 'Please select a service.',
        }),
        defineField({
          name: 'serviceSelectionMode',
          title: 'Services Source Mode',
          type: 'string',
          description:
            'Choose how dropdown options are populated: automatically from Services collection, manual reference picker, or custom text list.',
          options: {
            list: [
              { title: 'All Services (Dynamic SSOT from Services Collection)', value: 'all' },
              { title: 'Manual Selection from Services Collection', value: 'manual' },
              { title: 'Custom Static Text Options', value: 'custom' },
            ],
            layout: 'radio',
          },
          initialValue: 'all',
        }),
        defineField({
          name: 'selectedServices',
          title: 'Select Specific Services',
          type: 'array',
          of: [defineArrayMember({ type: 'reference', to: [{ type: 'service' }] })],
          description: 'Select services from the Services Collection to show in dropdown.',
          hidden: ({ parent }) => parent?.serviceSelectionMode !== 'manual',
        }),
        defineField({
          name: 'customOptions',
          title: 'Custom Service Options List',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
          description: 'Custom text option strings (e.g. "General Inquiry", "Billing").',
          hidden: ({ parent }) => parent?.serviceSelectionMode !== 'custom',
        }),
      ],
    }),

    // 3.6 Additional Message Field
    defineField({
      name: 'messageField',
      title: 'Message Textarea Config',
      type: 'object',
      fieldset: 'formFields',
      fields: [
        defineField({
          name: 'label',
          title: 'Field Label',
          type: 'string',
          initialValue: 'Message',
        }),
        defineField({
          name: 'placeholder',
          title: 'Input Placeholder',
          type: 'string',
          initialValue: 'Tell us about your project...',
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
          description: 'Error message shown when validation fails.',
          initialValue: 'Please enter your message.',
        }),
      ],
    }),

    // --- 4. ADDITIONAL CUSTOM FORM FIELDS BUILDER ---
    defineField({
      name: 'additionalCustomFields',
      title: 'Extra Custom Inputs List',
      type: 'array',
      fieldset: 'customFields',
      description: 'Add extra custom form inputs beyond the standard core fields.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'contactFormField',
          title: 'Custom Form Input',
          fields: [
            defineField({
              name: 'fieldName',
              title: 'Field Key / ID',
              type: 'string',
              description: 'Unique key identifier (e.g. "companyName", "budget").',
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
              title: 'Input Placeholder',
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
                  { title: 'Dropdown Select', value: 'select' },
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
              initialValue: false,
            }),
            defineField({
              name: 'errorMessage',
              title: 'Validation Error Message',
              type: 'string',
            }),
            defineField({
              name: 'options',
              title: 'Dropdown Options List',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
              hidden: ({ parent }) => parent?.fieldType !== 'select',
            }),
          ],
        }),
      ],
    }),

    // --- 5. BUTTON & SUBMISSION FEEDBACK ---
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
        subtitle: subtitle ? `Badge: ${subtitle}` : 'Contact Section & Form',
      }
    },
  },
})
