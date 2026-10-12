'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { NavGroup } from '@/lib/navigation'

export default function NavigationClient({ groups }: { groups: NavGroup[] }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [hoverGroup, setHoverGroup] = useState<string | null>(null)
  const activeGroup = hoverGroup ?? openGroup
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const close = () => { setOpenGroup(null); setHoverGroup(null); setMobileOpen(false) }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onOutside = (event: PointerEvent) => { if (!navRef.current?.contains(event.target as Node)) close() }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('pointerdown', onOutside)
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('pointerdown', onOutside) }
  }, [])
  useEffect(() => { close() }, [pathname])

  return <nav ref={navRef} aria-label="Main navigation"
    onKeyDown={event => {
      if (event.key === 'Escape') {
        const trigger = mobileOpen ? 'mobile-menu-toggle' : `nav-toggle-${activeGroup}`
        close()
        document.getElementById(trigger)?.focus()
      }
    }}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) close() }}
    onMouseLeave={() => setHoverGroup(null)}
    className={`fixed top-0 inset-x-0 z-50 border-b transition-colors ${scrolled || activeGroup || mobileOpen ? 'bg-navy-950 border-navy-700/80' : 'bg-navy-950/90 backdrop-blur-xl border-transparent'}`}>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-6">
      <Link href="/" onClick={close} className="shrink-0"><Image src="/devskamp-logo.png" alt="Devskamp LLC home" width={160} height={40} priority className="h-9 w-auto brightness-0 invert" /></Link>
      <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
        {groups.map(group => <li key={group.key} onMouseEnter={() => setHoverGroup(group.key)}>
          <div className="flex items-center gap-1">
            <Link href={group.href} onClick={close} aria-current={pathname.startsWith(group.href) ? 'page' : undefined} className={`text-sm font-medium transition-colors py-2 ${activeGroup === group.key || pathname.startsWith(group.href) ? 'text-sky-300' : 'text-white/80 hover:text-sky-300'}`}>{group.label}</Link>
            <button id={`nav-toggle-${group.key}`} type="button" aria-label={`Toggle ${group.label.toLowerCase()} dropdown`} aria-expanded={activeGroup === group.key} aria-controls={`nav-panel-${group.key}`} onClick={() => { setHoverGroup(null); setOpenGroup(openGroup === group.key ? null : group.key) }} className="p-2 text-slate-400 hover:text-sky-300">
              <svg aria-hidden="true" viewBox="0 0 12 8" className={`w-3 h-2 transition-transform ${activeGroup === group.key ? 'rotate-180' : ''}`}><path d="m1 1 5 5 5-5" stroke="currentColor" fill="none" strokeWidth="1.5" /></svg>
            </button>
          </div>
          <div id={`nav-panel-${group.key}`} className={`${activeGroup === group.key ? 'hidden lg:block' : 'hidden'} absolute inset-x-0 top-full max-h-[calc(100dvh-80px)] overflow-y-auto border-y border-navy-700 bg-navy-950 shadow-2xl`}>
            <div className="max-w-7xl mx-auto px-12 py-8 grid grid-cols-[240px_1fr] gap-10">
              <div className="border-r border-navy-700/70 pr-8"><p className="text-sky-400 text-xs font-semibold uppercase tracking-widest">Explore {group.label}</p><h2 className="text-2xl font-heading font-bold mt-4">Find your next step.</h2><p className="text-slate-400 text-sm leading-6 mt-4">{group.intro}</p><Link onClick={close} href={group.href} className="inline-block text-sky-300 text-sm font-semibold mt-5">{group.key === 'company' ? 'Meet Devskamp' : `View all ${group.label.toLowerCase()}`} →</Link></div>
              <ul className="grid grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-2">{group.items.map(item => <li key={item.href}><Link href={item.href} onClick={close} className="block rounded-lg px-4 py-3 hover:bg-navy-800 focus-visible:bg-navy-800 group"><span className="font-semibold text-sm text-white group-hover:text-sky-300">{item.title}</span><span className="block text-xs text-slate-400 leading-5 mt-1">{item.description}</span></Link></li>)}</ul>
            </div>
          </div>
        </li>)}
      </ul>
      <Link href="/contact" onMouseEnter={() => { setHoverGroup(null); setOpenGroup(null) }} onClick={close} className="hidden lg:block bg-sky-500 hover:bg-sky-400 rounded-lg px-5 py-2.5 text-sm font-semibold shrink-0">Get a Quote</Link>
      <button id="mobile-menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen(!mobileOpen); setOpenGroup(null); setHoverGroup(null) }} className="lg:hidden rounded-lg border border-navy-700 bg-navy-800 p-2 text-white"><svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">{mobileOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}</svg></button>
    </div>
    <div id="mobile-navigation" className={`${mobileOpen ? 'block' : 'hidden'} lg:hidden max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-navy-700 bg-navy-950 px-6 py-4`}>
      {groups.map(group => <div key={group.key} className="border-b border-navy-700/70 py-1">
        <button type="button" aria-expanded={openGroup === group.key} aria-controls={`mobile-${group.key}`} onClick={() => setOpenGroup(openGroup === group.key ? null : group.key)} className="flex w-full justify-between items-center text-left py-4 font-semibold"><span>{group.label}</span><span className="text-sky-300" aria-hidden="true">{openGroup === group.key ? '−' : '+'}</span></button>
        <ul id={`mobile-${group.key}`} className={`${openGroup === group.key ? 'block' : 'hidden'} pb-4 space-y-1`}><li><Link href={group.href} onClick={close} className="block py-2 text-sky-300 text-sm">{group.key === 'company' ? 'About Devskamp' : `All ${group.label.toLowerCase()}`} →</Link></li>{group.items.map(item => <li key={item.href}><Link href={item.href} onClick={close} className="block py-2 pl-3 text-slate-300 text-sm hover:text-sky-300">{item.title}</Link></li>)}</ul>
      </div>)}
      <Link href="/contact" onClick={close} className="block text-center bg-sky-500 rounded-lg py-3 font-semibold my-5">Discuss your project</Link>
    </div>
  </nav>
}
