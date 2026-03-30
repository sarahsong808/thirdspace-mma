'use client'

import { useState } from 'react'

/**
 * Contact / lead capture form.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [status, setStatus] = useState(/** @type {'idle'|'loading'|'success'|'error'} */ ('idle'))

  /** @param {React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>} e */
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  /** @param {React.FormEvent} e */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', interest: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const interests = [
    'Muay Thai',
    'Jiu-Jitsu',
    'MMA',
    "Women's Class",
    'Thailand Fighters Retreat',
    'Not Sure Yet',
  ]

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-28 section-padding"
      style={{ background: '#0e0e0e' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #C8102E 50%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: '#C8102E' }}>
            Get In Touch
          </p>
          <h2
            id="contact-heading"
            className="heading-display text-[clamp(2.5rem,5vw,5rem)] text-white leading-none mb-6"
          >
            Ready to Start?
          </h2>
          <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-md">
            Send us a message and we&apos;ll get you set up for your first class.
            Drop-ins are $30. No experience necessary. All levels welcome.
          </p>

          {/* Contact details */}
          <address className="not-italic space-y-4" aria-label="Contact information">
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                style={{ background: 'rgba(200,16,46,0.12)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="#C8102E" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Location</p>
                <p className="text-gray-500 text-sm">14675 Rinaldi St #G</p>
                <p className="text-gray-500 text-sm">San Fernando, CA 91340</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                style={{ background: 'rgba(200,16,46,0.12)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="#C8102E" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Email</p>
                <a href="mailto:afghantornado@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                  afghantornado@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                style={{ background: 'rgba(200,16,46,0.12)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="#C8102E" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Phone</p>
                <a href="tel:+18184718867" className="text-gray-400 text-sm hover:text-white transition-colors">
                  (818) 471-8867
                </a>
              </div>
            </div>
          </address>

          {/* Google Maps */}
          <div className="mt-10 rounded-sm overflow-hidden border" style={{ borderColor: '#1e1e1e' }}>
            <iframe
              title="Third Space MMA location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.3!2d-118.4390!3d34.2897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s14675+Rinaldi+St+%23G%2C+San+Fernando%2C+CA+91340!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="200"
              style={{ border: 0, display: 'block', filter: 'grayscale(1) invert(0.9) contrast(0.85)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Social */}
          <div className="flex items-center gap-4 mt-10">
            <a
              href="https://www.instagram.com/thirdspacemma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Third Space MMA on Instagram"
              className="w-10 h-10 rounded-sm border flex items-center justify-center hover:border-pink-500 hover:text-pink-500 text-gray-500 transition-colors"
              style={{ borderColor: '#2a2a2a' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.yelp.com/biz/third-space-mma-san-fernando"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Third Space MMA on Yelp"
              className="w-10 h-10 rounded-sm border flex items-center justify-center hover:border-red-500 hover:text-red-500 text-gray-500 transition-colors"
              style={{ borderColor: '#2a2a2a' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.16 12.594l-4.995 1.67c-.56.187-.94-.416-.61-.906l2.774-4.217c.317-.482.967-.324 1.167.225l.948 2.764a.857.857 0 01-.284.464zM12.16 9.747l.89-5.184c.1-.575.77-.773 1.157-.32l2.085 2.449c.34.399.101.982-.406 1.041l-3.025.36c-.498.06-.77-.816-.7-.346zm-2.096.405l-3.025-.36c-.507-.059-.746-.642-.406-1.041l2.085-2.449c.387-.453 1.057-.254 1.157.32l.89 5.184c.069.47-.203 1.406-.701.346zm-4.49 5.537l2.774 4.217c.33.49-.05 1.093-.61.906l-4.995-1.67a.857.857 0 01-.284-.464l.948-2.764c.2-.549.85-.707 1.167-.225zm9.473 4.78c-.1.575-.77.773-1.157.32L11.805 18.34c-.34-.399-.101-.982.406-1.041l3.025-.36c.498-.06.77.816.7.346l-.899 3.24z" />
              </svg>
            </a>
            <a
              href="https://share.google/hl1NMC5ufpLoFQrKQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Third Space MMA on Google"
              className="w-10 h-10 rounded-sm border flex items-center justify-center hover:border-blue-400 hover:text-blue-400 text-gray-500 transition-colors"
              style={{ borderColor: '#2a2a2a' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Form */}
        <div
          className="p-8 rounded-sm border"
          style={{ background: '#111', borderColor: '#1e1e1e' }}
        >
          {status === 'success' ? (
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(26,107,58,0.15)', border: '2px solid #1A6B3A' }}
              >
                <svg className="w-8 h-8" fill="none" stroke="#1A6B3A" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="heading-display text-3xl text-white mb-3">Message Sent!</h3>
              <p className="text-gray-400 font-light">
                We&apos;ll be in touch within 24 hours to get you scheduled.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <h3 className="heading-display text-2xl text-white mb-6">Book Your First Class</h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Full Name <span aria-hidden="true" style={{ color: '#C8102E' }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm bg-transparent border text-white text-sm placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                    style={{ borderColor: '#2a2a2a' }}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Email <span aria-hidden="true" style={{ color: '#C8102E' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm bg-transparent border text-white text-sm placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                    style={{ borderColor: '#2a2a2a' }}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Phone <span style={{ color: '#C8102E' }}>*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm bg-transparent border text-white text-sm placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                    style={{ borderColor: '#2a2a2a' }}
                    placeholder="(818) 000-0000"
                  />
                </div>

                {/* Interest */}
                <div>
                  <label htmlFor="interest" className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm bg-transparent border text-sm focus:outline-none focus:border-red-600 transition-colors appearance-none"
                    style={{ borderColor: '#2a2a2a', background: '#111', color: form.interest ? '#fff' : '#555' }}
                  >
                    <option value="" disabled>Select a discipline</option>
                    {interests.map((i) => (
                      <option key={i} value={i} style={{ background: '#111', color: '#fff' }}>{i}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm bg-transparent border text-white text-sm placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
                    style={{ borderColor: '#2a2a2a' }}
                    placeholder="Any questions, experience level, goals..."
                  />
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-red-400 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-200 hover:brightness-110 hover:scale-[1.01] active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: '#C8102E', color: '#fff' }}
                >
                  {status === 'loading' ? 'Sending…' : 'Book My First Class'}
                </button>

                <p className="text-gray-600 text-xs text-center">
                  No spam. No contracts. Unsubscribe anytime.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
