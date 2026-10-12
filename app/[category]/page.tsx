import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContentLayout from '@/components/ContentLayout'
import JsonLd from '@/components/JsonLd'
import { catalogs, siteUrl } from '@/lib/content'
import { presentation, entryLabels } from '@/lib/presentation'
import OfferingIcon from '@/components/OfferingIcon'

export const dynamicParams = false
export function generateStaticParams() { return Object.keys(catalogs).map(category => ({ category })) }
export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const c = catalogs[params.category]; if (!c) return {}
  const title = `${c.title} | Devskamp`
  return { title, description: c.intro, alternates: { canonical: `/${params.category}` }, openGraph: { title, description: c.intro, url: `/${params.category}` }, twitter: { card: 'summary', title, description: c.intro } }
}
export default function Catalog({ params }: { params: { category: string } }) {
  const c = catalogs[params.category]; if (!c) notFound()
  const theme = presentation[params.category]
  return <ContentLayout title={c.title} eyebrow={params.category} summary={c.intro} category={params.category}>
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: c.title, url: `${siteUrl}/${params.category}`, mainEntity: { '@type': 'ItemList', itemListElement: c.entries.map((e, i) => ({ '@type': 'ListItem', position: i + 1, name: e.title, url: `${siteUrl}/${params.category}/${e.slug}` })) } }} />
    <section id="catalog" className="scroll-mt-28">
      {theme && <div className="flex flex-wrap justify-between items-end gap-6 mb-10"><div><p className="offering-kicker">Explore the possibilities</p><h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">{theme.heading}</h2><p className="text-slate-400 mt-3 max-w-xl">{theme.note}</p></div><span className="offering-count">{String(c.entries.length).padStart(2, '0')} <span>{params.category === 'products' ? 'solutions' : params.category === 'services' ? 'capabilities' : 'sectors'}</span></span></div>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{c.entries.map((e, i) => <Link key={e.slug} href={`/${params.category}/${e.slug}`} className={theme ? 'offering-card group' : 'group rounded-2xl bg-navy-800 border border-navy-700/60 p-7 card-glow'}>
        {theme ? <div className="flex items-start justify-between gap-4"><span className="offering-icon"><OfferingIcon name={entryLabels[e.slug]?.glyph ?? 'workflow'} className="w-6 h-6" /></span><span className="offering-card-index">/{String(i + 1).padStart(2, '0')}</span></div> : null}
        <p className={theme ? 'offering-card-label' : 'text-xs text-sky-400 uppercase tracking-widest'}>{entryLabels[e.slug]?.label ?? e.eyebrow}</p>
        <h2 className="font-heading text-2xl font-bold mt-3 group-hover:text-white">{e.title}</h2><p className="text-slate-400 leading-relaxed text-sm mt-4">{e.summary}</p>
        {theme && <div className="offering-tags">{(e.sections.find(section => section.items)?.items?.slice(0, 2) ?? ['Workflow planning', 'System integration']).map(tag => <span key={tag}>{tag}</span>)}</div>}
        <span className={theme ? 'offering-card-link' : 'block text-sky-300 text-sm mt-6'}>Explore {params.category === 'resources' ? 'guide' : 'solution'} <span className="offering-arrow" aria-hidden="true">↗</span></span>
      </Link>)}</div>
    </section>
    <aside className={theme ? 'offering-cta mt-16' : 'mt-16 rounded-2xl border border-navy-700/60 p-8 flex flex-wrap justify-between items-center gap-6'}><div><p className="offering-kicker">Let’s build the next step</p><h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Your workflow.<br />A clearer way forward.</h2><p className="text-slate-400 mt-4 max-w-lg">Tell us what needs to work better. We’ll help define the right solution and a practical delivery plan.</p></div><Link href="/contact" className={theme ? 'offering-button' : 'bg-sky-500 text-white rounded-lg px-6 py-3 font-semibold'}>Discuss your project <span aria-hidden="true">↗</span></Link></aside>
  </ContentLayout>
}
