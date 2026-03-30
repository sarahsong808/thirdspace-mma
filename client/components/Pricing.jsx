/**
 * Pricing / membership plans section.
 */
export default function Pricing() {
  const plans = [
    {
      id: 'drop-in',
      name: 'Drop-In',
      price: '$30',
      per: 'per class',
      description: 'Try any single class with no commitment. Perfect for first-timers and curious beginners.',
      features: [
        'One class of your choice',
        'Jiu-Jitsu or Muay Thai',
        'No registration required',
        'All levels welcome',
      ],
      cta: 'Book a Class',
      href: '#contact',
      featured: false,
    },
    {
      id: 'trial',
      name: 'Week Trial',
      price: '$60',
      per: 'one week',
      description: 'A full week of unlimited classes to experience everything Third Space has to offer.',
      features: [
        'Unlimited classes for 7 days',
        'Jiu-Jitsu & Muay Thai',
        'Sunday open mat included',
        'No contract, no pressure',
      ],
      cta: 'Start My Trial Week',
      href: '#contact',
      featured: true,
      badge: 'Best Value',
    },
    {
      id: 'monthly',
      name: 'Monthly',
      price: '$200',
      per: 'per month',
      description: 'Full unlimited access to every class all month long. Train as often as you want.',
      features: [
        'Unlimited classes all month',
        'Jiu-Jitsu, Muay Thai & open mat',
        'Priority scheduling',
        'Community & fighter network',
        'Cancel anytime',
      ],
      cta: 'Join Monthly',
      href: '#contact',
      featured: false,
    },
  ]

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative py-28 section-padding"
      style={{ background: '#0e0e0e' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #C8102E 50%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: '#C8102E' }}>
            Membership
          </p>
          <h2
            id="pricing-heading"
            className="heading-display text-[clamp(2.5rem,6vw,5.5rem)] text-white mb-4"
          >
            Invest In Yourself
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Yes, there are cheaper gyms. But cheap gyms mean 30 people on the mat, no one watching
            your form, and no one who knows your name. Here you pay for something different:
            a coach who <strong className="text-gray-300">actually knows you</strong>, classes small
            enough that your progress gets seen, and an environment where you can
            genuinely <strong className="text-gray-300">grow</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map(({ id, name, price, per, description, features, cta, href, featured, badge }) => (
            <article
              key={id}
              aria-label={`${name} plan`}
              className={`relative flex flex-col rounded-sm border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                featured ? 'shadow-xl shadow-red-900/20' : ''
              }`}
              style={{
                background: featured ? '#141414' : '#111',
                borderColor: featured ? '#C8102E' : '#1e1e1e',
              }}
            >
              {/* Top accent bar */}
              {featured && (
                <div className="h-1 w-full" style={{ background: '#C8102E' }} />
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="mb-6">
                  {badge && (
                    <span
                      className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-3"
                      style={{ background: 'rgba(200,16,46,0.15)', color: '#C8102E' }}
                    >
                      {badge}
                    </span>
                  )}
                  <h3 className="heading-display text-3xl text-white mb-1">{name}</h3>
                  <div className="flex items-baseline gap-2 mt-3 mb-2">
                    <span
                      className="heading-display text-5xl"
                      style={{ color: featured ? '#C8102E' : '#fff' }}
                    >
                      {price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase">{per}</p>
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">{description}</p>

                {/* Divider */}
                <div className="border-t mb-6" style={{ borderColor: '#222' }} />

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8" role="list">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-gray-300" role="listitem">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        style={{ color: featured ? '#C8102E' : '#1A6B3A' }}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={href}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-100"
                  style={
                    featured
                      ? { background: '#C8102E', color: '#fff' }
                      : { background: 'transparent', color: '#fff', border: '1px solid #333' }
                  }
                >
                  {cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Free trial note */}
        <p className="text-center text-gray-600 text-xs mt-6 tracking-wide">
          Drop-in $30 · Trial week $60 · Monthly $200. Cancel anytime.
        </p>

        {/* Premium value callout */}
        <div
          className="mt-10 mx-auto max-w-2xl p-6 rounded-sm border flex flex-col sm:flex-row items-start gap-5"
          style={{ background: '#111', borderColor: '#1e1e1e' }}
        >
          <div
            className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center mt-0.5"
            style={{ background: 'rgba(200,16,46,0.12)' }}
            aria-hidden="true"
          >
            <svg className="w-5 h-5" fill="none" stroke="#C8102E" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-white text-sm font-semibold mb-1">Why this is worth it</p>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              A crowded gym with 30 people and one distracted instructor will cost you less per month
              — and give you exactly that in return. At Third Space, Arsalan knows your name, your
              weaknesses, your goals. He’ll correct your posture mid-round, adjust your game plan
              between sessions, and push you in the way that actually moves the needle. That level of
              care doesn’t come from scale. It comes from keeping it small on purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
