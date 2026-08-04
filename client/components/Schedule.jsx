/**
 * @typedef {{ day: string, time: string, class: string, instructor: string, level: string }} ClassEntry
 */

/** @type {ClassEntry[]} */
const SCHEDULE = [
  { day: 'Monday',    time: '7:30 PM - 9:00 PM',  class: 'Jiu Jitsu', instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Monday',    time: '9:00 PM - 10:00 PM', class: 'MMA',       instructor: 'Arsalan Mayel', level: 'Fundamentals' },
  { day: 'Tuesday',   time: '6:00 PM - 7:00 PM',  class: 'Jiu Jitsu', instructor: 'Arsalan Mayel', level: 'Fundamentals' },
  { day: 'Tuesday',   time: '7:00 PM - 8:30 PM',  class: 'Muay Thai', instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Tuesday',   time: '8:30 PM - 10:00 PM', class: 'MMA',       instructor: 'Arsalan Mayel', level: 'Advanced' },
  { day: 'Wednesday', time: '6:30 PM - 7:30 PM',  class: 'Muay Thai', instructor: 'Arsalan Mayel', level: 'Fundamentals' },
  { day: 'Wednesday', time: '7:30 PM - 9:00 PM',  class: 'Jiu Jitsu', instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Wednesday', time: '9:00 PM - 10:00 PM', class: 'MMA',       instructor: 'Arsalan Mayel', level: 'Fundamentals' },
  { day: 'Thursday',  time: '6:00 PM - 7:00 PM',  class: 'Jiu Jitsu', instructor: 'Arsalan Mayel', level: 'Fundamentals' },
  { day: 'Thursday',  time: '7:00 PM - 8:30 PM',  class: 'Muay Thai', instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Thursday',  time: '8:30 PM - 10:00 PM', class: 'MMA',       instructor: 'Arsalan Mayel', level: 'Advanced' },
  { day: 'Friday',    time: '6:30 PM - 7:30 PM',  class: 'Muay Thai', instructor: 'Arsalan Mayel', level: 'Fundamentals' },
  { day: 'Friday',    time: '7:30 PM - 9:00 PM',  class: 'MMA',       instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Saturday',  time: '8:00 AM - 9:00 AM',  class: 'Muay Thai', instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Saturday',  time: '9:00 AM - 10:00 AM', class: 'Open Mat',  instructor: 'Arsalan Mayel', level: 'Open Mat' },
  { day: 'Sunday',    time: '12:00 PM - 1:00 PM', class: "Women's Muay Thai", instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Sunday',    time: '1:00 PM - 2:00 PM',  class: 'Wrestling', instructor: 'Arsalan Mayel', level: 'All Levels' },
  { day: 'Sunday',    time: '2:00 PM - 4:00 PM',  class: 'Open Mat',  instructor: 'Arsalan Mayel', level: 'Open Mat' },
]

const DAY_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const SCHEDULE_BY_DAY = DAY_ORDER.map((day) => ({
  day,
  classes: SCHEDULE.filter((entry) => entry.day === day),
})).filter((group) => group.classes.length > 0)

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

        {/* Schedule grouped by day with one day label per row */}
        <div className="border rounded-sm overflow-hidden" style={{ background: '#111', borderColor: '#1e1e1e' }}>
          <div
            className="hidden md:grid md:grid-cols-[150px_1fr] px-5 py-3 border-b text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ borderColor: '#1e1e1e', background: '#0f0f0f', color: '#666' }}
          >
            <span>Day</span>
            <span>Classes</span>
          </div>

          <div className="divide-y" style={{ borderColor: '#1e1e1e' }}>
            {SCHEDULE_BY_DAY.map((group) => (
              <div
                key={group.day}
                className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-0"
              >
                <div
                  className="px-5 py-4 md:py-5 border-b md:border-b-0 md:border-r"
                  style={{ borderColor: '#1e1e1e', background: '#101010' }}
                >
                  <h3 className="text-sm font-bold tracking-widest uppercase text-gray-300">{group.day}</h3>
                </div>

                <ul className="px-4 py-2 sm:px-5 sm:py-3" role="list">
                  {group.classes.map((entry) => (
                    <li
                      key={`${entry.day}-${entry.time}-${entry.class}`}
                      className="py-2"
                    >
                      <div
                        className="rounded-sm border px-3 py-3 sm:px-4 sm:py-3.5"
                        style={{ borderColor: '#212121', background: '#121212' }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2.5">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5 min-w-0">
                            <span className="text-sm font-bold md:min-w-44 tabular-nums text-gray-300">{entry.time}</span>
                            <p className="font-semibold text-white text-sm sm:text-[15px] leading-snug">{entry.class}</p>
                          </div>
                          <span
                            className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-sm shrink-0 self-start"
                            style={{ background: '#1a1a1a', color: '#8a8a8a', border: '1px solid #2a2a2a' }}
                          >
                            {entry.level}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
            No gear needed; just show up 10 minutes early.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#pricing"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center gap-2 px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-sm transition-all hover:brightness-110 hover:scale-105"
            style={{ background: '#C8102E', color: '#fff' }}
          >
            Get Unlimited Access
          </a>
        </div>
      </div>
    </section>
  )
}
