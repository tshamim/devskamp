'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Stack', href: '#stack' },
  { label: 'Process', href: '#process' },
  { label: 'Offices', href: '#presence' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-xl border-b border-navy-700/60 py-3'
          : 'bg-navy-950/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
        {/* Logo — white version via CSS filter */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/devskamp-logo.png"
            alt="Devskamp LLC"
            width={160}
            height={40}
            className="h-9 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-sky-300 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:hello@devskamp.com"
            className="text-white/70 hover:text-sky-300 text-sm transition-colors"
          >
            hello@devskamp.com
          </a>
          <button
            onClick={() => handleNavClick('#contact')}
            className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 font-heading"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-navy-800 border border-navy-700/60"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`w-4 h-0.5 bg-white/70 transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-4 h-0.5 bg-white/70 transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-4 h-0.5 bg-white/70 transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900 border-t border-navy-700/60 px-6 py-6">
          <ul className="space-y-1 mb-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left text-white/80 hover:text-sky-300 text-base py-2.5 font-medium transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNavClick('#contact')}
            className="w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3 rounded-lg transition-colors duration-200 font-heading text-sm"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  )
}
