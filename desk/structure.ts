import { StructureResolver } from 'sanity/structure'
import { CogIcon, MenuIcon, BlockElementIcon, DocumentsIcon, CaseIcon, ComposeIcon } from '@sanity/icons'

// Define document types that should act as singletons
const singletonTypes = new Set(['siteSettings', 'navigation', 'footer'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content Studio')
    .items([
      // Singletons Section
      S.listItem()
        .title('Global Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Header Navigation')
        .icon(MenuIcon)
        .child(
          S.document()
            .schemaType('navigation')
            .documentId('navigation')
        ),
      S.listItem()
        .title('Footer Configuration')
        .icon(BlockElementIcon)
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
        ),

      S.divider(),

      // Collections Section
      S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .child(S.documentTypeList('page').title('All Pages')),
      S.listItem()
        .title('Services Collection')
        .icon(CaseIcon)
        .child(S.documentTypeList('service').title('All Services')),
      S.listItem()
        .title('Blog Posts')
        .icon(ComposeIcon)
        .child(S.documentTypeList('post').title('All Blog Posts')),

      // Filter out singletons from generic list
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() || '') && !['page', 'service', 'post'].includes(listItem.getId() || '')
      ),
    ])
