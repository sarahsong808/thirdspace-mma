'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Custom 🥊 cursor that activates after the user scrolls past the hero section.
 * Hides itself (and restores native cursor) when hero is back in view.
 */
export default function GloveCursor() {
  const [pos, setPos]       = useState({ x: -200, y: -200 })
  const [active, setActive] = useState(false)
  const heroVisible         = useRef(true)

  // Watch hero visibility
  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisible.current = entry.isIntersecting
        if (entry.isIntersecting) {
          setActive(false)
          document.body.style.cursor = ''
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Track mouse
  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!heroVisible.current) {
        setActive(true)
        document.body.style.cursor = 'none'
      }
    }
    const onLeave = () => {
      setActive(false)
      document.body.style.cursor = ''
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      document.body.style.cursor = ''
    }
  }, [])

  if (!active) return null

  return (
    <div
      aria-hidden="true"
      className="fixed z-[999] pointer-events-none select-none"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-12%, -80%)',
        fontSize: '30px',
        lineHeight: 1,
        filter: 'drop-shadow(0 0 6px rgba(200,16,46,0.55))',
      }}
    >
      🥊
    </div>
  )
}
