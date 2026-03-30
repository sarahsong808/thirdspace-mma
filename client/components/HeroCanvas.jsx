'use client'

import { useEffect, useRef } from 'react'

/**
 * Animated canvas background for the hero section.
 *
 * Features:
 * - Particle network with drifting nodes + connection lines
 * - ~12% accent nodes glow red and pulse
 * - Diagonal speed-line sweep
 * - Mouse-following red radial glow (spotlight effect) via mousePosRef prop
 * - Particles near the mouse are lit up and gently repelled
 *
 * @param {{ className?: string, mousePosRef?: React.RefObject<{x:number,y:number,active:boolean}> }} props
 */
export default function HeroCanvas({ className = '', mousePosRef }) {
  const canvasRef = useRef(null)
  // Use the external ref if provided, otherwise keep an internal fallback
  const internalMouseRef = useRef({ x: -9999, y: -9999, active: false })
  const smoothMouseRef   = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animId
    let width = 0
    let height = 0

    /** @typedef {{
     *   x: number, y: number,
     *   ox: number, oy: number,
     *   vx: number, vy: number,
     *   radius: number, alpha: number,
     *   isAccent: boolean,
     *   pulsePhase: number, pulseSpeed: number
     * }} Particle */

    /** @type {Particle[]} */
    let particles = []

    const PARTICLE_COUNT    = 90
    const CONNECTION_DIST   = 160
    const MOUSE_GLOW_RADIUS = 220   // px — how far the red spotlight reaches
    const MOUSE_REPEL_DIST  = 100   // px — particles within this are pushed away
    const REPEL_STRENGTH    = 1.8
    const ACCENT_RATIO      = 0.12

    /** @returns {Particle} */
    function createParticle() {
      const isAccent = Math.random() < ACCENT_RATIO
      const x = Math.random() * width
      const y = Math.random() * height
      return {
        x, y,
        ox: x, oy: y,   // origin (unused currently, reserved for future snap-back)
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius:     isAccent ? Math.random() * 2 + 1.5 : Math.random() * 1.5 + 0.5,
        alpha:      isAccent ? 0.9 : Math.random() * 0.4 + 0.15,
        isAccent,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      }
    }

    function init() {
      width  = canvas.width  = window.innerWidth
      height = canvas.height = window.innerHeight
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle)
    }

    // ── LERP factor — smaller = smoother / lazier glow follow ──────────
    const LERP = 0.08

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // Read from external ref if provided, otherwise internal
      const m  = (mousePosRef && mousePosRef.current) ? mousePosRef.current : internalMouseRef.current
      const sm = smoothMouseRef.current
      if (m.active) {
        sm.x += (m.x - sm.x) * LERP
        sm.y += (m.y - sm.y) * LERP
      }

      // ── 1. Mouse spotlight glow ─────────────────────────────────────
      if (m.active && sm.x > 0) {
        const spotGrad = ctx.createRadialGradient(
          sm.x, sm.y, 0,
          sm.x, sm.y, MOUSE_GLOW_RADIUS
        )
        spotGrad.addColorStop(0,    'rgba(200, 16, 46, 0.22)')
        spotGrad.addColorStop(0.35, 'rgba(200, 16, 46, 0.10)')
        spotGrad.addColorStop(0.7,  'rgba(200, 16, 46, 0.03)')
        spotGrad.addColorStop(1,    'rgba(200, 16, 46, 0)')
        ctx.beginPath()
        ctx.arc(sm.x, sm.y, MOUSE_GLOW_RADIUS, 0, Math.PI * 2)
        ctx.fillStyle = spotGrad
        ctx.fill()

        // Inner hot-core ring
        const coreGrad = ctx.createRadialGradient(sm.x, sm.y, 0, sm.x, sm.y, 40)
        coreGrad.addColorStop(0,   'rgba(255, 60, 80, 0.35)')
        coreGrad.addColorStop(0.5, 'rgba(200, 16, 46, 0.12)')
        coreGrad.addColorStop(1,   'rgba(200, 16, 46, 0)')
        ctx.beginPath()
        ctx.arc(sm.x, sm.y, 40, 0, Math.PI * 2)
        ctx.fillStyle = coreGrad
        ctx.fill()
      }

      // ── 2. Particles ────────────────────────────────────────────────
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse repulsion
        if (m.active) {
          const dx   = p.x - sm.x
          const dy   = p.y - sm.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_REPEL_DIST && dist > 0) {
            const force = (1 - dist / MOUSE_REPEL_DIST) * REPEL_STRENGTH
            p.vx += (dx / dist) * force * 0.1
            p.vy += (dy / dist) * force * 0.1
          }
        }

        // Cap speed so repelled particles don't fly off screen
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 2.5) {
          p.vx = (p.vx / speed) * 2.5
          p.vy = (p.vy / speed) * 2.5
        }
        // Gentle drag — always drifts back to base speed
        p.vx *= 0.995
        p.vy *= 0.995

        p.x += p.vx
        p.y += p.vy

        // Wrap at edges
        if (p.x < -10)        p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10)        p.y = height + 10
        if (p.y > height + 10) p.y = -10

        p.pulsePhase += p.pulseSpeed
        const pulse = Math.sin(p.pulsePhase) * 0.5 + 0.5

        // Distance to mouse — used to boost nearby particles
        const mdx       = p.x - sm.x
        const mdy       = p.y - sm.y
        const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy)
        const mouseHeat = m.active
          ? Math.max(0, 1 - mouseDist / MOUSE_GLOW_RADIUS)
          : 0

        // ── Connections ──────────────────────────────────────────────
        for (let j = i + 1; j < particles.length; j++) {
          const q   = particles[j]
          const dx  = p.x - q.x
          const dy  = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const proximity = 1 - dist / CONNECTION_DIST
            const isHot     = p.isAccent || q.isAccent || mouseHeat > 0.2

            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)

            if (isHot) {
              const lineHeat = Math.max(mouseHeat, p.isAccent || q.isAccent ? 0.4 : 0)
              ctx.strokeStyle = `rgba(200, 16, 46, ${proximity * (0.25 + lineHeat * 0.5)})`
              ctx.lineWidth   = proximity * (0.8 + lineHeat * 0.8)
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${proximity * 0.07})`
              ctx.lineWidth   = proximity * 0.5
            }
            ctx.stroke()
          }
        }

        // ── Node ─────────────────────────────────────────────────────
        ctx.beginPath()
        if (p.isAccent || mouseHeat > 0.3) {
          const nodeR  = p.radius * (1 + pulse * 0.4 + mouseHeat * 1.2)
          const glow   = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, nodeR * 5)
          const rAlpha = Math.min(1, 0.8 + pulse * 0.2 + mouseHeat * 0.8)
          glow.addColorStop(0,   `rgba(200, 16, 46, ${rAlpha})`)
          glow.addColorStop(0.3, `rgba(200, 16, 46, ${rAlpha * 0.35})`)
          glow.addColorStop(1,   'rgba(200, 16, 46, 0)')
          ctx.arc(p.x, p.y, nodeR, 0, Math.PI * 2)
          ctx.fillStyle = glow
        } else {
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha + mouseHeat * 0.3})`
        }
        ctx.fill()
      }

      // ── 3. Diagonal speed-line sweep ────────────────────────────────
      drawSpeedLines()

      animId = requestAnimationFrame(draw)
    }

    let sweepOffset = 0
    function drawSpeedLines() {
      sweepOffset = (sweepOffset + 0.3) % (width + height)
      const lineCount = 6
      ctx.save()
      ctx.globalAlpha = 0.025
      for (let i = 0; i < lineCount; i++) {
        const base = (sweepOffset + (i * (width + height)) / lineCount) % (width + height)
        const x0   = base - height
        const x1   = base
        const grad = ctx.createLinearGradient(x0, 0, x1, height)
        grad.addColorStop(0,   'rgba(200,16,46,0)')
        grad.addColorStop(0.4, 'rgba(200,16,46,0.9)')
        grad.addColorStop(0.6, 'rgba(200,16,46,0.9)')
        grad.addColorStop(1,   'rgba(200,16,46,0)')
        ctx.strokeStyle = grad
        ctx.lineWidth   = 1
        ctx.beginPath()
        ctx.moveTo(x0, 0)
        ctx.lineTo(x1, height)
        ctx.stroke()
      }
      ctx.restore()
    }

    // ── Event handlers ────────────────────────────────────────────────
    function handleResize() {
      init()
    }

    init()
    draw()

    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [mousePosRef])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  )
}
