# Devskamp content and search maintenance

## Current content

38 public pages: the homepage, four section hubs, eight products, nine services, eight industries, six guides, About, and Contact. Content lives in `lib/content.ts`, with detailed workflow examples, comparison tables, and buying questions in `lib/detailed-content.ts`. `lib/navigation.ts` derives the public menu from the catalog so links stay consistent.

The owner requested the Dev product naming convention. Features and example implementations are initial positioning and planning content. Confirm actual modules, integrations, deployment models, release status, and pricing before adding stronger availability claims. Examples are illustrative, not customer case studies. No customer outcomes or certifications were invented.

Product, service, and industry hub/detail pages share themed heroes and illustrated workflow cards. Teal identifies products, indigo identifies services, and amber identifies industries. Presentation settings live in `lib/presentation.ts`. Hero visuals are explicitly labeled workflow concepts; they are not screenshots or demonstrations of released product features. SVG icons and CSS graphics keep the design lightweight and responsive.

## Internal documents

Documents are for Devskamp staff only. The template source is `internal/templates.ts`. Editable copies remain in `docs/company-templates` and the toolkit archive remains in `docs/devskamp-company-document-toolkit.zip`. Run `node scripts/export-templates.cjs` to refresh the Markdown copies.

There is no public document library or download endpoint. `/resources/document-templates` and `/api/templates/*` must return 404. The site has no import of the internal template module. Homepage, footer, sitemap, related links, and `llms.txt` contain no document links. Keep internal files out of `public/` and never mount the workspace as a public static directory. Repository access should follow the company's internal access policy.

## Research and rationale

Official sources reviewed October 12, 2026:

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): Crawlable pages, meaningful internal links, textual content, and structured data that matches visible text remain relevant to AI Search. Eligibility does not guarantee inclusion.
- [Google: Optimizing for generative AI Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): Prioritize useful content and clear technical structure. There is no special AI schema, ideal word count, or need to create pages for every query variation. Google ignores `llms.txt` for ranking.
- [OpenAI: crawler documentation](https://developers.openai.com/api/docs/bots): `OAI-SearchBot` supports ChatGPT search discovery, while `GPTBot` relates to training; the controls are independent. Allowing search crawling does not promise citations. Hosting and firewall rules must permit legitimate search crawler requests.

Implementation choices based on this research: expand existing pages rather than producing near-duplicate keyword pages; explain workflow fit, integration decisions, examples, and scope limitations; provide crawlable dropdown links and in-page navigation; keep metadata and schema aligned with actual page content. `llms.txt` is retained only as a convenient public source map, not as a claimed ranking mechanism.

An explicit `OAI-SearchBot` robots group allows public marketing pages and excludes APIs, internal, and docs paths. The existing training-crawler policy is not changed. Robots exclusions do not provide access control: internal documents are kept out of the public application entirely.

## Reference-site review

Reviewed WaveInno's homepage, product index, services, industries, and blog index during the initial content pass:
- https://waveinno.com/
- https://waveinno.com/products
- https://waveinno.com/services
- https://waveinno.com/industries
- https://waveinno.com/blog

Its product/service/industry/resource grouping informed the information architecture. Devskamp content was written independently. No WaveInno brand, result, statistic, or certification was transferred.

## Before publication

1. Confirm the canonical domain in `lib/content.ts` is correct.
2. Confirm product features, status, supported integrations, deployment, and pricing with the owner.
3. Review existing homepage claims about counts, retention, savings, staffing, compliance, and response times; these predate this content work and were not independently validated.
4. Add approved privacy, terms, and cookie policies reflecting actual operations.
5. Confirm production SMTP and contact recipients. Verification does not submit real inquiries.
6. Review the dependency audit: the existing Next.js 14 and Nodemailer dependencies have reported security issues requiring separately validated upgrades.
7. Publish through the existing Next.js hosting workflow, submit the sitemap, and verify crawl access and indexing in Search Console.
8. Add owner-reviewed product screenshots, real feature evidence, and permitted customer case studies when available. These are more useful than fabricated claims or keyword repetition.

## Verification commands

`npm run build` checks production compilation and types. With the site running, `node scripts/check-content.cjs` checks public pages, metadata, visible FAQ/schema consistency, internal links, the search crawler rule, and inaccessible document URLs while confirming internal files remain available to staff.
