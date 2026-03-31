'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const photos = [
  { src: '/images/IMG_1181.png',   alt: 'Training at Third Space MMA' },
  { src: '/images/IMG_0522.jpeg',  alt: 'Kick technique coaching' },
  { src: '/images/IMG_0597.jpeg',  alt: 'Training session' },
  { src: '/images/IMG_1175.jpeg',  alt: 'Training at Third Space MMA' },
  { src: '/images/IMG_1256.jpeg',  alt: 'Training at Third Space MMA' },
  { src: '/images/IMG_0605.jpeg',  alt: 'Training at Third Space MMA' },
  { src: '/images/38BC5A8C-27E9-4C1F-B326-6275C271BB7D.jpeg', alt: 'Training at Third Space MMA' },
  { src: '/images/IMG_0604.jpeg',  alt: 'Training at Third Space MMA' },
  { src: '/images/DB6E35DD-37EB-418D-BD43-1559C54756C6.jpeg', alt: 'Training at Third Space MMA' },
  { src: '/images/IMG_1137.png',   alt: 'Training at Third Space MMA' },
  { src: '/images/IMG_1184.png',   alt: 'Training at Third Space MMA' },
  { src: '/images/IMG_1188.png',   alt: 'Training at Third Space MMA' },
]

/**
 * Compact horizontal scroll carousel with lightbox.
 */
export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const trackRef = useRef(null)

  const close  = useCallback(() => setActiveIndex(null), [])
  const prev   = useCallback(() => setActiveIndex(i => (i - 1 + photos.length) % photos.length), [])
  const next   = useCallback(() => setActiveIndex(i => (i + 1) % photos.length), [])

  useEffect(() => {
    if (activeIndex === null) return
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape')     close()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [activeIndex, prev, next, close])

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeIndex])

  const scrollTrack = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative py-16 section-padding"
      style={{ background: '#080808' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 50%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header row with arrows */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Inside Third Space
            </p>
            <h2
              id="gallery-heading"
              className="heading-display text-[clamp(1.8rem,4vw,3.5rem)] text-white leading-none"
            >
              See Us Train
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollTrack(-1)}
              className="w-10 h-10 rounded-sm border flex items-center justify-center text-white text-xl opacity-50 hover:opacity-100 transition-opacity"
              style={{ borderColor: '#333' }}
              aria-label="Scroll left"
            >‹</button>
            <button
              onClick={() => scrollTrack(1)}
              className="w-10 h-10 rounded-sm border flex items-center justify-center text-white text-xl opacity-50 hover:opacity-100 transition-opacity"
              style={{ borderColor: '#333' }}
              aria-label="Scroll right"
            >›</button>
          </div>
        </div>

        {/* Scroll track */}
        <div
          ref={trackRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setActiveIndex(i)}
              className="relative shrink-0 w-60 h-72 rounded-sm overflow-hidden snap-start group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              aria-label={`View photo ${i + 1}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="240px"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(200,16,46,0.15)' }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.95)' }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button onClick={close} className="absolute top-4 right-5 text-white text-3xl opacity-60 hover:opacity-100 z-10" aria-label="Close">✕</button>
          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-3 sm:left-6 text-white text-4xl opacity-60 hover:opacity-100 z-10 p-2" aria-label="Previous">‹</button>
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              width={1200}
              height={1200}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-sm"
              priority
            />
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-gray-400 tracking-widest">
              {activeIndex + 1} / {photos.length}
            </p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-3 sm:right-6 text-white text-4xl opacity-60 hover:opacity-100 z-10 p-2" aria-label="Next">›</button>
        </div>
      )}
    </section>
  )
}
