# SEO and ChatGPT search implementation notes

Research date: October 12, 2026. This is an internal implementation note, not a visitor-facing resource.

## Source-backed findings

Google's [AI Search guidance](https://developers.google.com/search/docs/appearance/ai-features) identifies crawlability, indexability, textual content, internal links, and matching structured data as relevant foundations. Its [generative AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) emphasizes useful, original content over special markup, content-length formulas, keyword variants, or `llms.txt`. OpenAI's [crawler documentation](https://developers.openai.com/api/docs/bots) distinguishes search discovery through `OAI-SearchBot` from foundation-model training through `GPTBot`.

## Changes made

- Desktop dropdowns and mobile disclosure groups link to all public catalog pages.
- Detail pages include audience fit, workflow comparisons, implementation examples, integration decisions, and specific FAQs where useful.
- Dev product metadata includes descriptive software categories, rather than relying on unfamiliar product names alone.
- Tables use semantic headers; page contents links point to real sections.
- Guides include visible organization attribution and an update date, matched in Article schema.
- Organization references, breadcrumbs, collection lists, Service/Article/WebPage data, and FAQ data describe visible public content. No unverified offer, rating, certification, or product availability schema was added.
- Public robots rules allow `OAI-SearchBot`; training policy remains as before.
- Internal documents have no public page, download endpoint, sitemap entry, or content-index reference.

## Remaining evidence needed from the owner

Product screenshots and verified module lists; deployment and integration documentation; approved pricing or quote policy; permission to publish any customer reference; measured results if case studies are added; correct legal entity and public contact details.

## How to evaluate after deployment

Verify representative URLs in Search Console and inspect the HTML, canonical, and crawl access. Monitor indexed pages, relevant queries, qualified project inquiries, product demo requests, and referrals from AI-search experiences when available. Use the reporting surfaces available to the account rather than assuming a specific Search Console report has rolled out universally. No ranking or AI-citation guarantee is implied.

## Validation completed

The production build and TypeScript check passed. HTTP checks passed for 38 public pages and their linked destinations, canonical URLs, descriptions, visible FAQ/schema consistency, and search crawler rules. All 15 former template download URLs, the former document library, and direct internal file paths returned 404. Checked public browser bundles for internal template content. All 15 editable internal templates remain on disk.

Browser checks passed for desktop dropdown opening, keyboard activation, Escape dismissal with focus restoration, product navigation, and mobile submenu expansion and selection. The preview was tested at desktop and mobile widths, then restored to its normal dimensions. The development server remains running on port 3000 for the owner.
