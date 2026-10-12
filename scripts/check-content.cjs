const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const base = process.env.CONTENT_CHECK_URL || 'http://localhost:3000'
async function run() {
 const sitemapResponse = await fetch(`${base}/sitemap.xml`)
 assert.equal(sitemapResponse.status, 200)
 const sitemap = await sitemapResponse.text()
 const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]))
 assert.equal(urls.length, 38, 'Only public marketing pages must be in the sitemap')
 assert.ok(!sitemap.includes('document-templates') && !sitemap.includes('/internal/') && !sitemap.includes('/docs/'))
 const canonicalUrls = new Set()
 const localLinks = new Set()
 const publicScripts = new Set()
 for (const url of urls) {
  const response = await fetch(`${base}${url.pathname}`)
  assert.equal(response.status, 200, url.pathname)
  const html = await response.text()
  assert.ok(!html.includes('/resources/document-templates') && !html.includes('/api/templates/') && !html.includes('Editable working template | Version 1.0'), `${url.pathname}: internal documents must not leak`)
  for (const script of html.matchAll(/<script[^>]*src="(\/_next\/[^"?]+)(?:\?[^" ]*)?"/g)) publicScripts.add(script[1])
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${url.pathname}: one primary heading`)
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)
  assert.ok(canonical, `${url.pathname}: canonical required`)
  assert.equal(canonical[1].replace(/\/$/, ''), url.href.replace(/\/$/, ''))
  assert.ok(!canonicalUrls.has(canonical[1]), 'Canonical must be unique')
  canonicalUrls.add(canonical[1])
  assert.match(html, /<meta name="description" content="[^"]+"/)
  for (const schema of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) {
   const parsed = JSON.parse(schema[1])
   for (const node of parsed['@graph'] ?? []) {
    if (node['@type'] === 'FAQPage') for (const question of node.mainEntity) assert.ok(html.includes(question.name.replace(/&/g, '&amp;').replace(/'/g, '&#x27;').replace(/"/g, '&quot;')), `${url.pathname}: FAQ schema must match visible content`)
   }
  }
  if (url.pathname.split('/').length === 3) {
   assert.match(html, /On this page/)
   assert.match(html, /Who is this for\?/)
   if (/^\/(products|services|resources)\//.test(url.pathname)) assert.ok(html.includes('<table'), `${url.pathname}: workflow or decision comparison table`)
  }
  for (const link of html.matchAll(/href="(\/(?!\/)[^"]*)"/g)) {
   const target = new URL(link[1].replace(/&amp;/g, '&'), base)
   if (!target.pathname.startsWith('/_next/')) localLinks.add(target.pathname)
  }
 }
 for (const route of localLinks) assert.equal((await fetch(`${base}${route}`)).status, 200, `Broken internal link: ${route}`)
 for (const script of publicScripts) {
  const body = await (await fetch(`${base}${script}`)).text()
  assert.ok(!body.includes('Editable working template | Version 1.0') && !body.includes('NDA, MSA & IP Agreement Preparation Checklist') && !body.includes('/api/templates/'), `Internal templates in client bundle: ${script}`)
 }
 const templateDirectory = path.join(__dirname, '..', 'docs', 'company-templates')
 const templates = fs.existsSync(templateDirectory)
  ? fs.readdirSync(templateDirectory).filter(name => name.endsWith('.md') && name !== 'README.md')
  : ['agreement-review-checklist', 'change-request', 'discovery-brief', 'employee-onboarding', 'estimate-budget', 'incident-postmortem', 'invoice', 'project-handover', 'project-proposal', 'qa-uat-plan', 'security-access-register', 'software-requirements', 'statement-of-work', 'support-service-plan', 'weekly-status'].map(slug => `${slug}.md`)
 assert.equal(templates.length, 15)
 for (const filename of templates) {
  const slug = filename.slice(0, -3)
  const response = await fetch(`${base}/api/templates/${slug}`)
  assert.equal(response.status, 404, `Internal download must be inaccessible: ${slug}`)
  if (fs.existsSync(templateDirectory)) assert.ok(fs.readFileSync(path.join(templateDirectory, filename), 'utf8').includes('# Devskamp'))
 }
 for (const route of ['/resources/document-templates', '/docs/company-templates/project-proposal.md', '/docs/devskamp-company-document-toolkit.zip', '/internal/templates.ts']) assert.equal((await fetch(`${base}${route}`)).status, 404, `Private document URL: ${route}`)
 const llms = await (await fetch(`${base}/llms.txt`)).text()
 assert.ok(!llms.includes('document-templates') && !llms.includes('/internal/') && !llms.includes('/docs/'))
 assert.equal((await fetch(`${base}/products/not-a-real-product`)).status, 404)
 assert.equal((await fetch(`${base}/not-a-real-category`)).status, 404)
 const robots = await (await fetch(`${base}/robots.txt`)).text()
 assert.match(robots, /Sitemap: https:\/\/devskamp.com\/sitemap.xml/)
 assert.match(robots, /User-Agent: OAI-SearchBot/i)
 console.log(`Passed: ${urls.length} public pages, ${localLinks.size} internal destinations, 15 blocked download routes, metadata, matching FAQ JSON-LD, and unknown-route 404s. Internal files checked when present.`)
}
run().catch(error => { console.error(error); process.exitCode = 1 })
