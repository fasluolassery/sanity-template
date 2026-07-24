# 🚀 Sanity CMS & Data Access Layer for Next.js

Welcome to the Sanity Studio & Centralized Content Architecture! This repository manages all schema definitions, studio desk singletons, Portable Text objects, and pre-built GROQ query functions for your Next.js application.

---

## 🛠️ Project Setup & Local Studio Execution

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local` inside your Next.js root:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
   ```

3. **Run Sanity Studio Locally**:
   ```bash
   npm run dev
   ```
   Access the Studio at `http://localhost:3333` (or embedded inside Next.js at `/studio`).

---

## 🔌 Frontend Integration Guide (for Next.js Teammate)

### 1. Fetching Home Page Data in Next.js Server Components

```tsx
import { sanityFetch } from '@/sanity/lib/client'
import { HOME_PAGE_QUERY, NAVIGATION_QUERY, FOOTER_QUERY } from '@/sanity/lib/groq/queries'
import type { PageData, NavigationData, FooterData } from '@/sanity/lib/types'

export default async function HomePage() {
  const pageData = await sanityFetch<PageData>({
    query: HOME_PAGE_QUERY,
    tags: ['page', 'home'],
  })

  const navigation = await sanityFetch<NavigationData>({
    query: NAVIGATION_QUERY,
    tags: ['navigation'],
  })

  const footer = await sanityFetch<FooterData>({
    query: FOOTER_QUERY,
    tags: ['footer'],
  })

  return (
    <main>
      <Header data={navigation} />
      <PageBuilder blocks={pageData.pageBuilder} />
      <Footer data={footer} />
    </main>
  )
}
```

---

### 2. Rendering Page Builder Blocks Dynamically

In `components/PageBuilder.tsx`:

```tsx
import { HeroBlock } from '@/components/sections/HeroBlock'
import { ServicesGridBlock } from '@/components/sections/ServicesGridBlock'
import { CTABlock } from '@/components/sections/CTABlock'
import { FAQBlock } from '@/components/sections/FAQBlock'
import { RichTextBlock } from '@/components/sections/RichTextBlock'
import type { PageBlock } from '@/sanity/lib/types'

const blockComponents: Record<string, React.ComponentType<any>> = {
  heroBlock: HeroBlock,
  servicesGridBlock: ServicesGridBlock,
  ctaBlock: CTABlock,
  faqBlock: FAQBlock,
  richTextBlock: RichTextBlock,
}

export function PageBuilder({ blocks }: { blocks: PageBlock[] }) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block) => {
        const Component = blockComponents[block._type]
        if (!Component) {
          console.warn(`Missing React component for block type: ${block._type}`)
          return null
        }
        return <Component key={block._key} block={block} />
      })}
    </>
  )
}
```

---

### 3. Rendering Rich Text / Portable Text Content

```tsx
import { PortableText } from '@portabletext/react'

export function RichTextRenderer({ value }: { value: any }) {
  return (
    <div className="prose prose-lg dark:prose-invert">
      <PortableText value={value} />
    </div>
  )
}
```

---

## 🎨 Schema Architecture & Conventions

- **Objects (`schemaTypes/objects/`)**: Atomic field definitions (`seo`, `link`, `cta`, `imageWithAlt`, `richText`).
- **Blocks (`schemaTypes/blocks/`)**: Dynamic section modules (`heroBlock`, `servicesGridBlock`, `ctaBlock`, `faqBlock`, `richTextBlock`).
- **Documents (`schemaTypes/documents/`)**: Standard collections (`page`, `service`, `post`) & Singletons (`siteSettings`, `navigation`, `footer`).
- **Singletons**: Restricted in Studio Desk (`desk/structure.ts`) so content managers cannot delete or duplicate Global Settings, Header, or Footer documents.
