export default function Coach() {
  const coaches = [
    {
      name: 'Arsalan Mayel',
      role: 'Head Coach',
      image: '/images/coach-arsalan.jpg',
      imageAlt: 'Coach Arsalan Mayel - professional MMA fighter and champion',
      bullets: [
        '14+ Years of Martial Arts Experience - Training since 2012',
        '100+ Competitions across striking and grappling',
        'MMA Champion',
        'California State Champion',
        'Professional Muay Thai Fighter',
        'Brazilian Jiu-Jitsu Brown Belt',
        '10+ Years of Coaching Experience',
        'International Training & Competition Experience - Thailand, Europe & USA',
        'Coaches Beginners to Competitive Athletes',
        'Technical, Detail-Oriented & Personable Coaching Style',
      ],
      stats: [
        { value: '14+', label: 'Years Experience' },
        { value: 'PRO', label: 'Muay Thai Fighter' },
        { value: '3', label: 'Disciplines' },
        { value: '∞', label: 'Levels Coached' },
      ],
      tags: ['Muay Thai', 'Jiu-Jitsu', 'MMA Strategy', 'Fight Preparation', 'All Levels'],
    },
    {
      name: 'Alex Pyle',
      role: 'Coach',
      image: '/images/coach-alex-pyle.jpg',
      imageAlt: 'Coach Alex Pyle with a fighter stance in front of an MMA cage',
      paragraphs: [
        'Alex Pyle brings over 10 years of experience in Muay Thai, Brazilian Jiu-Jitsu, Wrestling, and Mixed Martial Arts. Originally from Ames, Iowa, his martial arts journey has taken him around the world in pursuit of high-level training and competition.',
        'He has competed professionally in Muay Thai in Thailand and is an MMA champion, giving him well-rounded experience across striking, grappling, and mixed martial arts. As a coach, Alex blends technical instruction with an energetic, positive approach that makes training both effective and enjoyable.',
      ],
      stats: [
        { value: '10+', label: 'Years Experience' },
        { value: 'PRO', label: 'Muay Thai in Thailand' },
        { value: 'MMA', label: 'Champion' },
        { value: '4', label: 'Core Disciplines' },
      ],
      tags: ['Muay Thai', 'Brazilian Jiu-Jitsu', 'Wrestling', 'MMA Coaching', 'All Levels'],
    },
  ]

  return (
    <section
      id="coach"
      aria-labelledby="coach-heading"
      className="relative py-16 sm:py-28 section-padding overflow-hidden"
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

      <div className="max-w-7xl mx-auto space-y-16">
        {coaches.map((coach, index) => (
          <div key={coach.name} className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`relative ${index % 2 === 1 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
              <div
                className="aspect-[3/4] rounded-sm overflow-hidden relative"
                style={{ background: '#141414', border: '1px solid #222' }}
              >
                <img
                  src={coach.image}
                  alt={coach.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = '/images/coach-arsalan.jpg'
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(200,16,46,0.2), transparent)' }}
                />
              </div>

              {index === 0 && (
                <div
                  className="hidden sm:block absolute -bottom-6 -right-6 px-6 py-4 rounded-sm shadow-xl"
                  style={{ background: '#C8102E' }}
                >
                  <p className="heading-display text-4xl text-white leading-none">14+</p>
                  <p className="text-xs font-bold tracking-widest uppercase text-red-200 mt-1">Years in MMA</p>
                </div>
              )}
            </div>

            <div className={index % 2 === 1 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
              <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: '#C8102E' }}>
                {coach.role}
              </p>
              <h2
                id={index === 0 ? 'coach-heading' : undefined}
                className="heading-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-2"
              >
                {coach.name}
              </h2>

              {coach.bullets ? (
                <ul className="space-y-4 text-gray-400 font-light leading-relaxed text-[15px] mb-10">
                  {coach.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-4 text-gray-400 font-light leading-relaxed text-[15px] mb-10">
                  {coach.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10" role="list" aria-label={`${coach.name} credentials`}>
                {coach.stats.map(({ value, label }) => (
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

              <div className="flex flex-wrap gap-2">
                {coach.tags.map((tag) => (
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
        ))}
      </div>
    </section>
  )
}
