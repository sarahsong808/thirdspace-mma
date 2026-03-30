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

            {/* Floating stat card — hidden on small screens to prevent horizontal overflow */}
            <div
              className="hidden sm:block absolute -bottom-6 -right-6 px-6 py-4 rounded-sm shadow-xl"
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
                Arsalan Mayel is the head coach and founder of Third Space MMA, bringing over 14 years of experience across Boxing, Muay Thai, Jiu-Jitsu, Wrestling and Mixed Martial Arts.
              </p>
              <p>
                A professional fighter and brown belt in Jiu-Jitsu. Arsalan has competed in over 100 matches across striking and grappling martial arts, such as Boxing, Muay Thai, Jiu Jitsu, and MMA.  His journey has taken him across the world, training and fighting in Thailand, Europe, and the United States, developing a well-rounded, high-level understanding of combat sports.
              </p>
              <p>
                Beyond his experience, Arsalan is known for his ability to connect with people. His coaching style is personable, attentive, and detail-oriented, creating an environment where students feel supported while still being pushed to grow.
              </p>
              <p>
                He takes pride in working with complete beginners just as much as experienced athletes, breaking down complex techniques into simple, clear steps that anyone can understand and apply. Whether someone is stepping on the mats for the first time or preparing for competition, his goal is to meet them where they are and help them level up.
              </p>
              <p>
                As a coach, he has cornered and developed fighters across multiple disciplines, helping students build not only technical skill, but also confidence, discipline, and mental toughness.
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
              {['Muay Thai', 'Jiu-Jitsu', 'MMA Strategy', 'Fight Preparation', 'All Levels'].map((tag) => (
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
