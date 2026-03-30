/**
 * Gym mission/ethos section.
 */
export default function Mission() {
  const pillars = [
    {
      icon: '⚔️',
      title: 'Forge the Athlete',
      body: 'Discipline is cultivated every session — through real technique, real conditioning, and real results. Whether you\'re stepping on the mat for the first time or preparing for competition, we train what actually works.',
    },
    {
      icon: '🧠',
      title: 'Develop the Mind',
      body: 'Confidence is not given — it is earned through effort. Combat sports demand patience, problem-solving, and composure under pressure. You leave every session sharper than you arrived.',
    },
    {
      icon: '🌳',
      title: 'Become Your Best Self',
      body: 'Limitations are not permanent — they are broken, rep by rep. This is where you become someone harder to stop: on the mat and off it. Walk in as you are. Walk out further than before.',
    },
  ]

  const differentiators = [
    {
      stat: '≤ 10',
      label: 'Students Per Class',
      detail: 'Unlike overcrowded gyms where you vanish in a room of 20–30 people, every class is capped at 10 — ensuring individual attention, precise technical coaching, and real relationships between coach and student.',
    },
    {
      stat: '1:1',
      label: 'Coaching That Cares',
      detail: 'You are not just another body in the room. Arsalan knows where you are, where you\'re going, and exactly what you need — you are seen, corrected, and developed every session.',
    },
    {
      stat: '100%',
      label: 'Clean, Focused Space',
      detail: 'No chaos. No guesswork. No wasted time. A clean, professional environment where every session has purpose, structure, and direction — just consistent, deliberate progress.',
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
            Our Philosophy
          </p>
          <h2
            id="mission-heading"
            className="heading-display text-[clamp(2.5rem,6vw,5.5rem)] text-white mb-6"
          >
            This Is{' '}
            {/* Green used here only — red eyebrow is above, never side-by-side */}
            <span style={{ color: '#1A5C33' }}>Third Space.</span>
          </h2>
          <div className="space-y-3 mb-8 max-w-2xl">
            <p className="text-lg font-light" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Your first space is your home —{' '}
              <span className="text-gray-400">comfort, recovery, and grounding.</span>
            </p>
            <p className="text-lg font-light" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Your second space is your work —{' '}
              <span className="text-gray-400">where you produce, perform, and provide.</span>
            </p>
            <p className="text-xl text-white font-semibold">
              Your third space is where you are forged.
            </p>
          </div>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mb-6">
            A space you choose intentionally — not out of obligation, but out of a desire to grow,
            to evolve, and to become someone you&apos;re proud of.
          </p>
          <div className="max-w-2xl border-l-2 pl-5" style={{ borderColor: '#1A5C33' }}>
            <p className="text-xl text-white font-light leading-relaxed">
              We believe martial arts is more than training —{' '}
              <span className="font-semibold" style={{ color: '#1A5C33' }}>
                it is a vehicle for transformation.
              </span>
            </p>
          </div>
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
        <div className="grid md:grid-cols-3 gap-6 mb-16" role="list">
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

        {/* Closing goals statement */}
        <div
          className="max-w-2xl p-8 border rounded-sm"
          style={{ background: '#111', borderColor: '#1e1e1e' }}
        >
          <p className="text-gray-500 text-sm font-light leading-relaxed mb-4 uppercase tracking-widest">
            Whether your goal is to —
          </p>
          <ul className="space-y-2 mb-6">
            {['Get in the best shape of your life', 'Learn real self-defense', 'Test yourself in competition'].map((goal) => (
              <li key={goal} className="flex items-center gap-3 text-white font-medium text-base">
                <span style={{ color: '#C8102E', fontWeight: 700 }}>—</span>
                {goal}
              </li>
            ))}
          </ul>
          <p className="text-lg text-white font-semibold leading-snug">
            This is where you sharpen your body, your mind, and your character.
          </p>
        </div>
      </div>
    </section>
  )
}
