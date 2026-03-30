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
      aria-label="Third Space MMA — Elite combat sports gym in North Hollywood"
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
        {/* Eyebrow */}
        <p
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 inline-block mb-6 text-xs font-bold tracking-[0.4em] uppercase px-4 py-1.5 border rounded-sm"
          style={{ color: '#C8102E', borderColor: 'rgba(200,16,46,0.5)' }}
        >
          North Hollywood, CA · San Fernando Valley
        </p>

        {/* Main headline */}
        <h1
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 heading-display text-[clamp(3.5rem,12vw,9rem)] text-white leading-none mb-4"
        >
          Train Like a{' '}
          <span style={{ color: '#C8102E' }}>Fighter.</span>
        </h1>

        <h2
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 heading-display text-[clamp(2rem,6vw,5rem)] leading-none mb-8"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          Think Like a Champion.
        </h2>

        {/* Sub-copy */}
        <p
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Muay Thai · Jiu-Jitsu · MMA
          <br />
          Coached by pro MMA fighter <strong className="text-white font-semibold">Arsalan Mayel</strong> — all skill levels welcome.
        </p>

        {/* CTAs */}
        <div
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-100 shadow-lg shadow-red-900/30"
            style={{ background: '#C8102E', color: '#fff' }}
          >
            Start Your Free Trial
          </a>
          <a
            href="#classes"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest uppercase rounded-sm border transition-all duration-200 hover:bg-white/10 hover:border-white"
            style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
          >
            Explore Classes
          </a>
        </div>

        {/* Social proof strip */}
        <div
          data-animate
          className="opacity-0 translate-y-6 transition-all duration-700 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-16 text-gray-500 text-xs font-semibold tracking-widest uppercase"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-11H11v6l5.25 3.15.75-1.23-4.5-2.67V9z" />
            </svg>
            14+ Years Experience
          </span>
          <span className="text-gray-700 hidden sm:inline">·</span>
          <span>Max 10 Per Class</span>
          <span className="text-gray-700 hidden sm:inline">·</span>
          <span>All Levels Welcome</span>
          <span className="text-gray-700 hidden sm:inline">·</span>
          <span>Women&apos;s Classes</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
