'use client'

import { useEffect, useRef, useState } from 'react'
import HeroCanvas from '@/components/HeroCanvas'

/**
 * Full-screen cinematic hero section with animated canvas background.
 */
export default function Hero() {
  const taglineRef  = useRef(null)
  const sectionRef  = useRef(null)
  // Shared mouse position ref — passed down to HeroCanvas so it can react
  const mousePosRef = useRef({ x: -9999, y: -9999, active: false })
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false })

  // Stagger-in animation on mount
  useEffect(() => {
    const els = taglineRef.current?.querySelectorAll('[data-animate]')
    if (!els) return
    els.forEach((el, i) => {
      el.style.transitionDelay = `${i * 120}ms`
      el.classList.add('opacity-100', 'translate-y-0')
    })
  }, [])

  // Custom cursor tracking for the whole hero zone
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onMove = (e) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mousePosRef.current = { x, y, active: true }
      setCursor({ x, y, visible: true })
    }
    const onLeave = () => {
      mousePosRef.current = { x: -9999, y: -9999, active: false }
      setCursor((c) => ({ ...c, visible: false }))
    }

    section.addEventListener('mousemove',  onMove,  { passive: true })
    section.addEventListener('mouseleave', onLeave, { passive: true })
    return () => {
      section.removeEventListener('mousemove',  onMove)
      section.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Third Space MMA — Elite combat sports gym in San Fernando"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ cursor: cursor.visible ? 'none' : 'auto' }}
    >
      {/* Deep dark base */}
      <div className="absolute inset-0 z-0" style={{ background: '#080808' }} role="presentation" />

      {/* Animated particle network canvas — pointer-events-none so hover works on section */}
      <HeroCanvas className="z-[1] pointer-events-none" mousePosRef={mousePosRef} />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(8,8,8,0.85) 100%)',
        }}
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[3] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 z-[3] opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* ── Custom red cursor dot ───────────────────────────────────── */}
      {cursor.visible && (
        <div
          aria-hidden="true"
          className="absolute z-[20] pointer-events-none"
          style={{
            left: cursor.x,
            top:  cursor.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Outer diffuse ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: 48,
              height: 48,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(200,16,46,0.18) 0%, rgba(200,16,46,0) 70%)',
              boxShadow: '0 0 24px 8px rgba(200,16,46,0.15)',
            }}
          />
          {/* Inner solid dot */}
          <div
            className="rounded-full"
            style={{
              width: 8,
              height: 8,
              background: '#C8102E',
              boxShadow: '0 0 10px 3px rgba(200,16,46,0.7)',
            }}
          />
        </div>
      )}

      {/* ── Hero content ────────────────────────────────────────────── */}
      <div
        ref={taglineRef}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Eyebrow — hidden on mobile */}
        <p
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 hidden sm:inline-block mb-6 text-xs font-bold tracking-[0.4em] uppercase px-4 py-1.5 border rounded-sm"
          style={{ color: '#C8102E', borderColor: 'rgba(200,16,46,0.5)' }}
        >
          San Fernando, CA · San Fernando Valley
        </p>

        {/* Main headline */}
        <h1
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 heading-display text-[clamp(2.8rem,10vw,9rem)] text-white leading-none mb-4"
        >
          Where You Become{' '}
          <span style={{ color: '#C8102E' }}>Your Best Self.</span>
        </h1>

        <h2
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 heading-display text-[clamp(1.6rem,5vw,5rem)] leading-none mb-8"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          Train like a fighter
        </h2>

        {/* Sub-copy */}
        <p
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Muay Thai · Jiu-Jitsu · MMA
          <br />
          Train under pro MMA fighter <strong className="text-white font-semibold">Arsalan Mayel</strong> — 14+ years experience.
        </p>

        {/* Trust builders */}
        <div
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-sm" style={{ background: 'rgba(200,16,46,0.12)', color: '#C8102E', border: '1px solid rgba(200,16,46,0.25)' }}>
            🔥 Small groups — max 10 students
          </span>
          <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-sm" style={{ background: 'rgba(255,255,255,0.05)', color: '#aaa', border: '1px solid rgba(255,255,255,0.1)' }}>
            ⚠️ Limited spots per class
          </span>
        </div>

        {/* CTAs */}
        <div
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 flex flex-col items-center justify-center gap-3"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-100 shadow-lg shadow-red-900/30"
              style={{ background: '#C8102E', color: '#fff' }}
            >
              Book Your First Class
            </a>
            <a
              href="#classes"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest uppercase rounded-sm border transition-all duration-200 hover:bg-white/10 hover:border-white"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
            >
              Explore Classes
            </a>
          </div>
          <p className="text-gray-500 text-xs tracking-widest">
            $30 first class &nbsp;·&nbsp; all levels welcome
          </p>
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile to avoid overlap */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
