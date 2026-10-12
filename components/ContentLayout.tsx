import Link from 'next/link'
import Navbar from './Navbar'
import SiteFooter from './SiteFooter'
import OfferingVisual from './OfferingVisual'
import { presentation } from '@/lib/presentation'
import type { CSSProperties } from 'react'
export default function ContentLayout({ title, eyebrow, summary, children, category, slug }: { title: string; eyebrow: string; summary: string; children: React.ReactNode; category?: string; slug?: string }) {
 const theme = category ? presentation[category] : undefined
 return <><Navbar /><main id="main-content" className={theme ? 'offering-page pt-20' : 'pt-32'} style={theme ? { '--page-accent': theme.accent, '--page-accent-soft': theme.soft } as CSSProperties : undefined}>
   <header className={theme ? 'offering-hero px-6 md:px-16 py-12 md:py-20 border-b border-navy-700/60' : 'px-6 md:px-16 py-12 md:py-20 grid-pattern border-b border-navy-700/60'}>
    <div className="max-w-7xl mx-auto"><div className="flex gap-2 text-sm text-slate-400"><Link href="/" className="hover:text-sky-300">Home</Link><span aria-hidden="true">/</span><span className="capitalize">{category ?? eyebrow}</span></div>
     <div className={theme ? 'grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center mt-9' : ''}><div>
      <p className={theme ? 'offering-eyebrow' : 'mt-8 text-sky-400 text-xs font-semibold tracking-widest uppercase'}>{eyebrow}</p>
      <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.06] tracking-tight max-w-4xl mt-5">{title}</h1><p className="text-lg text-slate-300 max-w-3xl mt-6 leading-relaxed">{summary}</p>
      {theme && <div className="flex flex-wrap items-center gap-4 mt-8"><Link href="/contact" className="offering-button">{category === 'products' ? 'Request a demo' : 'Discuss your project'} <span aria-hidden="true">↗</span></Link><a href={slug ? '#fit-heading' : '#catalog'} className="text-sm font-semibold text-slate-300 hover:text-white">{slug ? 'Explore the details' : `Explore ${category}`} <span aria-hidden="true">↓</span></a></div>}
     </div>{theme && category && <OfferingVisual category={category} slug={slug} title={slug ? title : undefined} />}</div>
    </div>
   </header><div className="max-w-7xl mx-auto px-6 md:px-16 py-16">{children}</div></main><SiteFooter /></>
}
