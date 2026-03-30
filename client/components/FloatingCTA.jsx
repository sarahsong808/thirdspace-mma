'use client'

/**
 * Floating "Claim Free Class" button — visible on mobile only.
 * Floating CTA button — visible on mobile only.
 */
export default function FloatingCTA() {
  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 lg:hidden"
      aria-hidden="false"
    >
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm shadow-lg shadow-black/50 transition-all hover:brightness-110 active:scale-95"
        style={{ background: '#C8102E', color: '#fff' }}
        aria-label="Book your first class"
      >
        Book First Class
      </a>
    </div>
  )
}
