'use client'

import { useState } from 'react'

/**
 * @typedef {{ q: string, a: string }} FAQItem
 */

/** @type {FAQItem[]} */
const FAQS = [
  {
    q: 'Do I need any experience to start?',
    a: 'None at all. Most students start with zero martial arts background. Coach Arsalan is experienced at bringing complete beginners up to speed — you will not be thrown in over your head on day one.',
  },
  {
    q: 'What should I bring to my first class?',
    a: 'Athletic clothes (shorts and a t-shirt), water, and a willingness to learn. That\'s it. No gear is required to get started — Arsalan will let you know what to pick up once you\'ve decided to commit.',
  },
  {
    q: 'Is it safe for beginners?',
    a: 'Yes. Classes are intentionally capped at 10 students so Arsalan can monitor every person on the mat. Technique is taught progressively — you build safely before you spar. Safety and form always come first.',
  },
  {
    q: 'What is the minimum age?',
    a: 'Classes are designed for adults 16 and up. If you have a younger student interested, reach out directly and we can discuss what\'s appropriate.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most students notice real improvements in coordination, fitness, and confidence within the first few weeks. With consistent training you will feel the difference faster than you expect.',
  },
  {
    q: 'Can I try before committing to a membership?',
    a: 'Yes. Drop-in classes are $30 with no commitment. There is also a trial week for $60 that gives you unlimited access for 7 days with no pressure and no contract.',
  },
  {
    q: 'Where are you located? Do you serve Granada Hills, Northridge, or Sylmar?',
    a: 'We are located at 14675 Rinaldi St #G, San Fernando, CA 91340 — just minutes from Granada Hills, Northridge, Sylmar, Mission Hills, and Chatsworth. If you are anywhere in the San Fernando Valley, we are your gym.',
  },
]

/**
 * FAQ accordion section.
 */
export default function FAQ() {
  const [open, setOpen] = useState(/** @type {number|null} */ (null))

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-28 section-padding"
      style={{ background: '#0a0a0a' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)' }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Common Questions
          </p>
          <h2
            id="faq-heading"
            className="heading-display text-[clamp(2rem,5vw,4rem)] text-white"
          >
            Before You Show Up
          </h2>
        </div>

        <dl className="space-y-2">
          {FAQS.map(({ q, a }, i) => (
            <div
              key={i}
              className="border rounded-sm overflow-hidden transition-colors duration-200"
              style={{ borderColor: open === i ? '#333' : '#1e1e1e', background: '#111' }}
            >
              <dt>
                <button
                  type="button"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="text-white text-sm font-semibold leading-snug">{q}</span>
                  <span
                    className="shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-200"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                hidden={open !== i}
                className="px-6 pb-5"
              >
                <p className="text-gray-400 text-sm font-light leading-relaxed">{a}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
