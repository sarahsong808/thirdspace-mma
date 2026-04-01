'use client'

import { useState, useEffect } from 'react'

/**
 * Floating CTA — mobile only, appears only after scrolling past the hero.
 */
export default function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-6 right-4 z-50 lg:hidden">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase rounded-sm shadow-lg shadow-black/50 transition-all hover:brightness-110 active:scale-95"
        style={{ background: '#C8102E', color: '#fff' }}
        aria-label="Book your first class"
      >
        Start Training
      </a>
    </div>
  )
}
