/**
 * Coach bio section — Arsalan Mayel.
 */
export default function Coach() {
  const stats = [
    { value: '14+', label: 'Years Experience' },
    { value: 'PRO', label: 'MMA Fighter' },
    { value: '3', label: 'Disciplines' },
    { value: '∞', label: 'Levels Coached' },
  ]

  return (
    <section
      id="coach"
      aria-labelledby="coach-heading"
      className="relative py-28 section-padding overflow-hidden"
      style={{ background: '#0e0e0e' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #C8102E 50%, transparent)' }}
      />

      {/* Background accent */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(ellipse at right, #C8102E 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Coach photo */}
          <div className="relative order-2 lg:order-1">
            <div
              className="aspect-[3/4] rounded-sm overflow-hidden relative"
              style={{ background: '#141414', border: '1px solid #222' }}
            >
              <img
                src="/images/coach-arsalan.jpg"
                alt="Coach Arsalan Mayel — professional MMA fighter and champion"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(200,16,46,0.2), transparent)' }}
              />
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute -bottom-6 -right-6 px-6 py-4 rounded-sm shadow-xl"
              style={{ background: '#C8102E' }}
            >
              <p className="heading-display text-4xl text-white leading-none">14+</p>
              <p className="text-xs font-bold tracking-widest uppercase text-red-200 mt-1">Years in MMA</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: '#C8102E' }}>
              Head Coach
            </p>
            <h2
              id="coach-heading"
              className="heading-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-2"
            >
              Arsalan Mayel
            </h2>
            {/* Title in white — red eyebrow is above, no green/red proximity */}
            <p className="heading-display text-2xl mb-8 text-gray-400">
              Professional MMA Fighter &amp; Coach
            </p>

            <div className="space-y-4 text-gray-400 font-light leading-relaxed text-[15px] mb-10">
              <p>
                Arsalan Mayel brings over 14 years of competitive martial arts experience to every
                class he teaches. As an active professional MMA fighter, he doesn&apos;t just coach
                the sport — he lives it.
              </p>
              <p>
                Classes are intentionally capped at 10 students because Arsalan believes coaching
                is personal. He watches every rep, corrects every position, and knows exactly where
                each student is in their journey. Unlike volume gyms where you blend into
                the crowd, here your growth is his responsibility — and he takes that seriously.
              </p>
              <p>
                Whether you&apos;re a complete beginner stepping on the mat for the first time or a
                competitive fighter preparing for your next bout, Arsalan meets you where you are and
                builds you into something sharper. The door is open to all skill levels. The standard
                is always high.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10" role="list" aria-label="Coach credentials">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="text-center p-4 border rounded-sm"
                  style={{ borderColor: '#222', background: '#141414' }}
                >
                  <p className="heading-display text-3xl mb-1" style={{ color: '#C8102E' }}>{value}</p>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-2">
              {['Muay Thai', 'Brazilian Jiu-Jitsu', 'MMA Strategy', 'Fight Preparation', 'All Levels'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-sm"
                  style={{ background: '#1a1a1a', color: '#aaa', border: '1px solid #2a2a2a' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
