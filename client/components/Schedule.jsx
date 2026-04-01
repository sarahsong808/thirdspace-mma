/**
 * @typedef {{ day: string, time: string, class: string, instructor: string, level: string }} ClassEntry
 */

/** @type {ClassEntry[]} */
const SCHEDULE = [
  { day: 'Monday',    time: '7:30 PM', class: 'Jiu-Jitsu (No-Gi)',        instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Tuesday',   time: '7:30 PM', class: 'Muay Thai',                  instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Wednesday', time: '7:30 PM', class: 'Jiu-Jitsu (No-Gi)',        instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Thursday',  time: '7:30 PM', class: 'Muay Thai',                  instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Sunday',    time: '12:00 PM', class: "Women's Free Self Defense",  instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Sunday',    time: '1:00 PM',  class: 'MMA',                          instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Sunday',    time: '2:00 PM',  class: 'Open Mat Sparring',            instructor: 'Arsalan Mayel', level: 'All Levels' },
]

/**
 * Weekly class schedule section.
 */
export default function Schedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="relative py-16 sm:py-28 section-padding"
      style={{ background: '#0a0a0a' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)' }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Class Schedule
          </p>
          <h2
            id="schedule-heading"
            className="heading-display text-[clamp(2.5rem,6vw,5.5rem)] text-white"
          >
            Train with High Quality Instruction, Every Time
          </h2>
          <p className="text-gray-500 text-sm mt-4 tracking-wide">
            Schedule subject to change — follow us on Instagram for real-time updates.
          </p>
        </div>

        {/* Schedule rows */}
        <div className="space-y-3">
          {SCHEDULE.map((entry, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border rounded-sm gap-4 hover:border-gray-600 transition-colors duration-200"
              style={{ background: '#111', borderColor: '#1e1e1e' }}
            >
              <div className="flex items-center gap-6">
                {/* Day */}
                <span className="text-xs font-bold tracking-widest uppercase w-24 shrink-0 text-gray-400">
                  {entry.day}
                </span>
                {/* Time */}
                <span className="text-sm font-bold w-20 shrink-0 tabular-nums text-gray-400">
                  {entry.time}
                </span>
                {/* Class name */}
                <p className="font-semibold text-white text-sm">{entry.class}</p>
              </div>
              <span
                className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-sm shrink-0 self-start sm:self-auto"
                style={{ background: '#1a1a1a', color: '#777', border: '1px solid #2a2a2a' }}
              >
                {entry.level}
              </span>
            </div>
          ))}
        </div>

        {/* First class note */}
        <div
          className="mt-10 flex items-start gap-4 p-5 border rounded-sm"
          style={{ background: '#111', borderColor: '#1e1e1e' }}
        >
          <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="#C8102E" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            <span className="text-white font-semibold">First class?</span> Wear athletic clothes and bring water.
            No gear needed — just show up. Drop-ins are $30 with no commitment.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-sm transition-all hover:brightness-110 hover:scale-105"
            style={{ background: '#C8102E', color: '#fff' }}
          >
            Get Unlimited Access
          </a>
        </div>
      </div>
    </section>
  )
}
