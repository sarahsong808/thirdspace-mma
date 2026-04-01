/**
 * Discipline / classes section.
 */
export default function Classes() {
  const disciplines = [
    {
      id: 'muay-thai',
      label: 'Muay Thai',
      tagline: 'The Art of Eight Limbs',
      description:
        'Punches, elbows, knees, and kicks — Muay Thai is the most complete striking art in the world. Our classes build technique, timing, and devastating power from the ground up.',
      details: ['Stand-up striking', 'Clinch work', 'Pad holding technique', 'Sparring (levels-based)'],
      color: '#1A6B3A',
      bg: 'rgba(26,107,58,0.08)',
    },
    {
      id: 'jiu-jitsu',
      label: 'Jiu-Jitsu',
      tagline: 'Ground Mastery',
      description:
        'The backbone of MMA grappling. BJJ teaches you to control, submit, and dominate from every position — standing and on the mat.',
      details: ['Takedowns & guard work', 'Position control', 'Submission chains', 'Drilling & live rolling'],
      badge: 'No-Gi',
      color: '#1A6B3A',
      bg: 'rgba(26,107,58,0.08)',
    },
    {
      id: 'mma',
      label: 'MMA',
      tagline: 'The Complete Fighter',
      description:
        'Where all the arts converge. MMA classes blend striking and grappling into a unified game plan — taught by a professional fighter who competes at the highest level.',

      details: ['Striking to grappling transitions', 'MMA-specific ground & pound', 'Fight IQ development', 'Competition prep available'],
      color: '#1A6B3A',
      bg: 'rgba(26,107,58,0.08)',
    },
    {
      id: 'womens',
      label: "Women's Classes",
      tagline: 'Power, Confidence & Community',
      description:
        'Held once a week in a welcoming, women-only environment. Designed to build real self-defense skills, elite fitness, and unshakeable confidence — regardless of prior experience.',
      details: ['Self-defense fundamentals', 'Muay Thai striking basics', 'BJJ & grappling', 'Empowering community'],
      color: '#1A6B3A',
      bg: 'rgba(26,107,58,0.08)',
    },
  ]

  return (
    <section
      id="classes"
      aria-labelledby="classes-heading"
      className="relative py-16 sm:py-28 section-padding"
      style={{ background: '#0a0a0a' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 50%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
            What We Train
          </p>
          <h2
            id="classes-heading"
            className="heading-display text-[clamp(2.5rem,6vw,5.5rem)] text-white"
          >
            Our Disciplines
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {disciplines.map(({ id, label, tagline, description, details, color, bg, badge }) => (
            <article
              key={id}
              id={id}
              className="relative p-8 rounded-sm border group cursor-default overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: '#111', borderColor: '#1e1e1e' }}
            >
              {/* Hover color fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: bg }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="heading-display text-3xl mb-1"
                      style={{ color }}
                    >
                      {label}
                    </h3>
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-500">
                      {tagline}
                    </p>
                  </div>
                  {badge && (
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm shrink-0 ml-4"
                      style={{ background: 'rgba(26,107,58,0.15)', color: '#1A6B3A', border: '1px solid rgba(26,107,58,0.3)' }}
                    >
                      {badge}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 font-light leading-relaxed mb-6 text-sm">
                  {description}
                </p>

                <ul className="space-y-2" role="list">
                  {details.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
