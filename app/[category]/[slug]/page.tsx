import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { catalogs, siteUrl } from '@/lib/content'
import ContentLayout from '@/components/ContentLayout'
import JsonLd from '@/components/JsonLd'

export const dynamicParams = false
export function generateStaticParams() { return Object.entries(catalogs).flatMap(([category, c]) => c.entries.map(e => ({ category, slug: e.slug }))) }
function getEntry(category: string, slug: string) { return catalogs[category]?.entries.find(e => e.slug === slug) }
const pageTitle = (title: string) => `${title.replace(/\s*\|\s*Devskamp$/, '')} | Devskamp`

export function generateMetadata({ params }: { params: { category: string; slug: string } }): Metadata {
  const e = getEntry(params.category, params.slug)
  if (!e) return {}
  const path = `/${params.category}/${e.slug}`
  const title = pageTitle(e.seoTitle ?? e.title)
  return { title, description: e.summary, alternates: { canonical: path }, openGraph: { title, description: e.summary, url: path, type: params.category === 'resources' ? 'article' : 'website' }, twitter: { card: 'summary', title, description: e.summary } }
}

export default function Detail({ params }: { params: { category: string; slug: string } }) {
  const e = getEntry(params.category, params.slug)
  if (!e) notFound()
  const url = `${siteUrl}/${params.category}/${e.slug}`
  const organization = { '@id': `${siteUrl}/#organization` }
  const primary = params.category === 'services'
    ? { '@type': 'Service', serviceType: e.title, provider: organization }
    : params.category === 'resources'
      ? { '@type': 'Article', headline: e.title, author: { '@type': 'Organization', name: 'Devskamp LLC', url: `${siteUrl}/about` }, publisher: organization, dateModified: '2026-10-12', mainEntityOfPage: url }
      : { '@type': 'WebPage', about: { '@type': 'Thing', name: e.title } }
  const productLabel = params.category === 'products' ? e.seoTitle?.split(' | ')[1] : undefined

  return <ContentLayout title={e.title} eyebrow={productLabel ?? e.eyebrow} summary={e.summary} category={params.category} slug={e.slug}>
    <JsonLd data={{ '@context': 'https://schema.org', '@graph': [
      { ...primary, '@id': `${url}#page`, name: e.title, description: e.summary, url },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: params.category, item: `${siteUrl}/${params.category}` }, { '@type': 'ListItem', position: 3, name: e.title, item: url }] },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: e.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ] }} />
    <nav aria-label="Breadcrumb" className="text-sm text-slate-400 flex flex-wrap gap-2">
      <Link href="/" className="hover:text-sky-300">Home</Link><span aria-hidden="true">/</span>
      <Link href={`/${params.category}`} className="text-sky-300 capitalize">{params.category}</Link><span aria-hidden="true">/</span><span aria-current="page">{e.title}</span>
    </nav>
    {params.category === 'resources' && <p className="text-slate-400 text-sm mt-4">By <Link href="/about" className="text-sky-300">Devskamp</Link> · Updated <time dateTime="2026-10-12">October 12, 2026</time></p>}
    <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-12 mt-10">
      <article className="min-w-0 space-y-12">
        <section className="rounded-2xl bg-sky-500/[0.06] border border-sky-500/25 p-6 md:p-8" aria-labelledby="fit-heading">
          <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">At a glance</p>
          <h2 id="fit-heading" className="font-heading text-2xl font-bold">Who is this for?</h2>
          <p className="text-slate-300 leading-7 mt-4">{e.bestFor}</p>
          {params.category === 'products' && <p className="text-slate-400 text-sm leading-6 mt-4">Confirm module availability, integrations, deployment, and pricing in a product demo. The examples below help define your requirements.</p>}
        </section>
        {e.sections.map((section, index) => <section key={section.title} id={`section-${index + 1}`} className="detail-section scroll-mt-28">
          <p className="detail-section-number" aria-hidden="true">{String(index + 1).padStart(2, '0')} / EXPLORE</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">{section.title}</h2>
          <p className="text-slate-300 leading-8">{section.text}</p>
          {section.items && <ul className="mt-5 grid sm:grid-cols-2 gap-3">{section.items.map(item => <li key={item} className="border border-navy-700/60 rounded-lg p-4 text-slate-300 text-sm"><span className="text-sky-400 mr-2" aria-hidden="true">✓</span>{item}</li>)}</ul>}
          {section.table && <div className="overflow-x-auto mt-6 rounded-xl border border-navy-700/70" role="region" aria-label={`${section.title} comparison table`} tabIndex={0}>
            <table className="w-full min-w-[540px] text-left text-sm leading-6">
              <caption className="sr-only">{section.title}</caption>
              <thead className="detail-table-head bg-navy-800 text-white"><tr>{section.table.columns.map(column => <th key={column} scope="col" className="p-4 font-semibold">{column}</th>)}</tr></thead>
              <tbody>{section.table.rows.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-navy-700/60">{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row" className="p-4 align-top text-sky-200 font-medium">{cell}</th> : <td key={cellIndex} className="p-4 align-top text-slate-300">{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>}
        </section>)}
        <section id="faq" className="scroll-mt-28">
          <h2 className="font-heading font-bold text-3xl mb-6">Frequently asked questions</h2>
          <div className="space-y-3">{e.faqs.map(f => <details key={f.q} className="rounded-xl bg-navy-800 border border-navy-700/60 p-5"><summary className="font-semibold cursor-pointer text-white">{f.q}</summary><p className="text-slate-300 leading-7 mt-4">{f.a}</p></details>)}</div>
        </section>
      </article>
      <aside>
        <div className="lg:sticky lg:top-28 space-y-6">
          <nav aria-label="On this page" className="border border-navy-700/70 rounded-xl p-5">
            <p className="text-xs uppercase tracking-widest text-sky-400 mb-4">On this page</p>
            <ul className="space-y-3 text-sm text-slate-300"><li><a href="#fit-heading" className="hover:text-sky-300">Who is this for?</a></li>{e.sections.map((section, index) => <li key={section.title}><a href={`#section-${index + 1}`} className="hover:text-sky-300">{section.title}</a></li>)}<li><a href="#faq" className="hover:text-sky-300">Frequently asked questions</a></li></ul>
          </nav>
          <div className="rounded-2xl border border-sky-500/30 bg-navy-800 p-6">
            <p className="text-xs text-sky-400 uppercase tracking-widest">Let’s plan the next step</p><h2 className="font-heading text-2xl font-bold mt-4">{params.category === 'products' ? 'Request a product demo' : 'Talk to Devskamp'}</h2>
            <p className="text-sm leading-6 text-slate-400 mt-4">Share your workflow, users, and systems. Get a conversation grounded in your requirements.</p><Link className="block text-center bg-sky-500 rounded-lg px-5 py-3 mt-6 font-semibold" href="/contact">{params.category === 'products' ? 'Request a demo' : 'Discuss your project'}</Link>
            <Link href="/resources/software-project-discovery" className="block text-sm text-sky-300 mt-5">Prepare for discovery →</Link>
          </div>
        </div>
      </aside>
    </div>
    <section className="mt-16 pt-10 border-t border-navy-700/60"><h2 className="font-heading text-2xl font-bold mb-6">Continue exploring</h2><div className="grid md:grid-cols-3 gap-4">{e.related.map(path => {
      const [, category, slug] = path.split('/'); const related = getEntry(category, slug)
      return related ? <Link key={path} className="border border-navy-700/60 rounded-xl p-5 text-sky-300 hover:bg-navy-800" href={path}>{related.title} →</Link> : null
    })}</div></section>
  </ContentLayout>
}
