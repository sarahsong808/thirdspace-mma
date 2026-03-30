'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/** @typedef {{ href: string, label: string }} NavItem */

/** @type {NavItem[]} */
const NAV_ITEMS = [
  { href: '#classes', label: 'Classes' },
  { href: '#coach', label: 'Coach' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

/**
 * Sticky responsive navigation bar.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Third Space MMA — Home"
          className="flex items-center"
        >
          {/* Logo image — place logo.png in /public/images/ */}
          <Image
            src="/images/logo.png"
            alt="Third Space MMA"
            width={56}
            height={56}
            className="w-[5.5rem] h-[5.5rem] object-contain"
            priority
            onError={(e) => { e.target.style.display = 'none' }}
          />
          {/* Text fallback — shows next to logo or alone if image missing */}
          <span className="-ml-2 flex flex-col leading-none">
            <span
              className="text-2xl font-black tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-bebas, Impact)', color: '#ffffff' }}
            >
              Third Space
            </span>
            <span
              className="text-xs font-bold tracking-[0.35em] uppercase"
              style={{ color: '#C8102E' }}
            >
              MMA
            </span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link text-sm font-semibold tracking-widest uppercase text-gray-300 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="#pricing"
          className="hidden md:inline-flex items-center px-6 py-2.5 text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-200 hover:scale-105 active:scale-100"
          style={{ background: '#C8102E', color: '#fff' }}
        >
          Start Training
        </a>

        {/* Hamburger (mobile) */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black/98 ${
          menuOpen ? 'max-h-screen py-6' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 pb-4" role="list">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleNavClick}
                className="text-lg font-bold tracking-widest uppercase text-gray-200 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#pricing"
              onClick={handleNavClick}
              className="inline-flex items-center px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-sm"
              style={{ background: '#C8102E', color: '#fff' }}
            >
              Start Training
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
