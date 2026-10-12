# devskamp

Next.js marketing site for Devskamp LLC.

## Local development

Run `npm install`, then `npm run dev`. Build with `npm run build` and serve the production build with `npm start`.

## Content

- Product, service, industry, and resource entries: `lib/content.ts`
- Offering-page colors, icons, and workflow illustrations: `lib/presentation.ts`, `components/OfferingVisual.tsx`, and `components/OfferingIcon.tsx`
- Shared content-page layouts: `app/[category]` and `components/ContentLayout.tsx`
- Internal document sources (never imported by public pages): `internal/templates.ts`
- Exported company documents: `docs/company-templates`
- Content ownership and publication checklist: `docs/content-maintenance.md`

Run `node scripts/export-templates.cjs` to refresh the internal document copies. Documents have no public pages or download endpoints. With the site running locally, run `node scripts/check-content.cjs` to check page responses, canonical URLs, internal links, JSON-LD, and that internal documents are inaccessible over HTTP.

Internal template sources, document copies, toolkit archives, and preview screenshots are local-only and excluded from Git. The export command requires the internal source to be supplied separately through an approved private channel. Public-site checks work without those files.

Contact email delivery requires the existing SMTP environment configuration. Keep credentials and filled client documents out of this repository.
