/**
 * Gym mission/ethos section.
 */
export default function Mission() {
  const pillars = [
    {
      icon: '⚔️',
      title: 'Forge the Athlete',
      body: 'Every class is built around real technique, real conditioning, and real results — whether you\'re stepping into a cage or stepping onto the mat for the first time.',
    },
    {
      icon: '🧠',
      title: 'Develop the Mind',
      body: 'Combat sports demand mental discipline. We train the whole person — patience, problem-solving, composure under pressure. You leave every session sharper than you arrived.',
    },
    {
      icon: '🌳',
      title: 'Become Your Best Self',
      body: 'Third Space is the place between home and work where real growth happens. You walk in as you are. You walk out a stronger, more focused, more capable version of yourself — every time.',
    },
  ]

  const differentiators = [
    {
      stat: '≤ 10',
      label: 'Students Per Class',
      detail: 'Most gyms pack 30+ people onto the mats and hope for the best. Here, every class is capped at 10 — so you get real corrections, real attention, and real progress.',
    },
    {
      stat: '1:1',
      label: 'Coaching That Cares',
      detail: 'Arsalan is invested in your growth personally. He knows where you are, where you\'re going, and exactly what you need to get there. You\'re not invisible here.',
    },
    {
      stat: '100%',
      label: 'Clean, Focused Space',
      detail: 'No clutter, no chaos. A clean mat, a focused room, and an environment that respects the craft — because the space you train in reflects the standard you train to.',
    },
  ]

  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="relative py-28 section-padding overflow-hidden"
      style={{ background: '#0e0e0e' }}
    >
      {/* Accent line */}
      {/* Green divider line — Mission section is "green zone", red is absent here */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #1A5C33 50%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          {/* Eyebrow in white/dim here — green heading below, no red in this section */}
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Our Ethos
          </p>
          <h2
            id="mission-heading"
            className="heading-display text-[clamp(2.5rem,6vw,5.5rem)] text-white mb-6"
          >
            This Is{' '}
            {/* Green used here only — red eyebrow is above, never side-by-side */}
            <span style={{ color: '#1A5C33' }}>Third Space.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed font-light max-w-2xl">
            Not just a gym. A crucible. Third Space is the place between home and work where you
            become a stronger, sharper, more capable version of yourself. Small classes. Attentive
            coaching. A clean space built for serious training — and every skill level is welcome.
          </p>
        </div>

        {/* Differentiator strip */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {differentiators.map(({ stat, label, detail }) => (
            <div
              key={label}
              className="flex gap-5 p-6 border rounded-sm"
              style={{ background: '#111', borderColor: '#1e1e1e' }}
            >
              <div className="shrink-0">
                <p className="heading-display text-3xl leading-none" style={{ color: '#1A5C33' }}>{stat}</p>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">{label}</p>
                <p className="text-gray-500 text-xs font-light leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-6" role="list">
          {pillars.map(({ icon, title, body }) => (
            <article
              key={title}
              role="listitem"
              className="relative p-8 rounded-sm border group hover:border-red-700 transition-colors duration-300"
              style={{ background: '#141414', borderColor: '#222' }}
            >
              <div
                className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(200,16,46,0.06) 0%, transparent 60%)' }}
              />
              <span className="text-4xl mb-5 block" role="img" aria-label={title}>{icon}</span>
              <h3 className="heading-display text-2xl text-white mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
