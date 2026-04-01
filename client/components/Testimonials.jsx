'use client'

import Script from 'next/script'

/**
 * @typedef {{ id: string, name: string, role: string, rating: number, text: string, videoId?: string, platform: 'google'|'yelp'|'instagram' }} Testimonial
 */

/** @type {Testimonial[]} */
const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Christian Hawatmeh',
    role: 'Student',
    rating: 5,
    text: "He's genuinely the best coach I've ever worked with. The progress I've made in such a short time has been incredible, and the confidence I've built through his training has changed me as a person. I'm grateful for the man I'm becoming because of his guidance and support. Highly recommend you come train with him he's the best. You won't be disappointed 👊",
    platform: 'google',
  },
  {
    id: 't2',
    name: 'Josiah Collins',
    role: 'Student',
    rating: 5,
    text: "I have trained with Coach Arslan for some years now. He is the best martial arts coach that I have trained with hands down. He is incredibly knowledgeable and practical in his teaching methods. He takes the time to break down fundamentals and make sure everyone is performing the techniques correctly.",
    platform: 'google',
  },
  {
    id: 't3',
    name: 'Joel Oros',
    role: 'Student',
    rating: 5,
    text: "Coach Arsalon truly has it all — patience, deep knowledge, and genuine humility. In the time I've worked with him, he's corrected so many aspects of my form, movement, and balance. His attention to detail and ability to explain things clearly have made a huge difference in my progress. The best in the game hands down!! 🙌🏼",
    platform: 'google',
  },
  {
    id: 't4',
    name: 'Henry Lopez',
    role: 'Student',
    rating: 5,
    text: "Whether you are curious about starting your fitness/martial arts journey or you are a seasoned fighter there is no better coach than Arsalan. Experience in spades across MMA, grappling, and striking — if you're looking to get work in, this is the spot! 👊🏻",
    platform: 'google',
  },
  {
    id: 't5',
    name: 'Cesar Robles',
    role: 'Student',
    rating: 5,
    text: "5/5 and definitely recommend. Regardless of if you're starting your first class or a seasoned fighter, coach Arselan teaches technique at a pace that you can pick up and apply right away. My striking improved significantly in a short period of time under him and I look forward to getting work in his class. Come check it out.",
    platform: 'google',
  },
  {
    id: 't6',
    name: 'Brendan Nabong',
    role: 'Student',
    rating: 5,
    text: "This is the place to learn Muay Thai! Not only is the instruction very clear but the coach is a very knowledgeable, patient and amazing person all around! The other students there are very welcoming and friendly! Facilities are clean and it's just great vibes!",
    platform: 'google',
  },
]

/** @type {{ [key: string]: string }} */
const PLATFORM_COLORS = {
  google: '#4285F4',
  yelp: '#FF1A1A',
  instagram: '#E1306C',
}

/**
 * Video IDs for YouTube testimonials/promo reels.
 * Replace with actual YouTube video IDs.
 * @type {string[]}
 */
const INSTAGRAM_REEL = 'https://www.instagram.com/reel/DOeMTZaj8gv/'

/** @param {{ rating: number }} props */
function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill={i < rating ? '#C8102E' : '#333'}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

/**
 * Testimonials + video reviews section.
 */
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-16 sm:py-28 section-padding"
      style={{ background: '#0a0a0a' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Student Reviews
          </p>
          <h2
            id="testimonials-heading"
            className="heading-display text-[clamp(2.5rem,6vw,5.5rem)] text-white mb-4"
          >
            Real People. Real Results.
          </h2>
          <div className="flex items-center justify-center gap-3 flex-wrap text-sm text-gray-500 mt-2">
            <span className="flex items-center gap-1">
              <span style={{ color: '#4285F4', fontWeight: 700 }}>Google</span> · 5.0 ★
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <span style={{ color: '#FF1A1A', fontWeight: 700 }}>Yelp</span> · 5.0 ★
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <span style={{ color: '#E1306C', fontWeight: 700 }}>Instagram</span>
            </span>
          </div>
        </div>

        {/* Instagram reel — right under heading */}
        <div className="flex justify-center mb-16">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={INSTAGRAM_REEL}
            data-instgrm-version="14"
            style={{
              background: '#111',
              border: '1px solid #222',
              borderRadius: '4px',
              maxWidth: '400px',
              width: '100%',
              minWidth: '326px',
            }}
          />
          <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
        </div>

        {/* Written reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ id, name, role, rating, text, platform }) => (
            <article
              key={id}
              className="p-6 border rounded-sm flex flex-col gap-4 hover:border-gray-700 transition-colors duration-200"
              style={{ background: '#111', borderColor: '#1e1e1e' }}
              aria-label={`Review by ${name}`}
            >
              <Stars rating={rating} />
              <blockquote className="text-gray-300 text-sm font-light leading-relaxed flex-1">
                &ldquo;{text}&rdquo;
              </blockquote>
              <footer className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-semibold">{name}</p>
                  <p className="text-gray-600 text-xs">{role}</p>
                </div>
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm"
                  style={{
                    background: `${PLATFORM_COLORS[platform]}15`,
                    color: PLATFORM_COLORS[platform],
                    border: `1px solid ${PLATFORM_COLORS[platform]}30`,
                  }}
                >
                  {platform}
                </span>
              </footer>
            </article>
          ))}
        </div>

        {/* Review links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <a
            href="https://share.google/FPege2Cdmi9GagwsS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase border rounded-sm hover:bg-white/5 transition-colors"
            style={{ borderColor: '#333', color: '#4285F4' }}
          >
            Leave a Google Review
          </a>
          <a
            href="https://www.yelp.com/biz/third-space-mma-san-fernando"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase border rounded-sm hover:bg-white/5 transition-colors"
            style={{ borderColor: '#333', color: '#FF1A1A' }}
          >
            Review on Yelp
          </a>
        </div>
      </div>
    </section>
  )
}
