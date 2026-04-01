/**
 * Site footer.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    Train: [
      { label: 'Muay Thai', href: '#muay-thai' },
      { label: 'Jiu-Jitsu', href: '#jiu-jitsu' },
      { label: 'MMA', href: '#mma' },
      { label: "Women's Classes", href: '#womens' },
    ],
    Gym: [
      { label: 'Coach', href: '#coach' },
      { label: 'Mission', href: '#mission' },
      { label: 'Schedule', href: '#schedule' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Reviews', href: '#testimonials' },
    ],
    Connect: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Instagram', href: 'https://www.instagram.com/thirdspacemma/', external: true },
      { label: 'Yelp', href: 'https://www.yelp.com/biz/third-space-mma-san-fernando', external: true },
      { label: 'Google', href: 'https://g.page/r/third-space-mma', external: true },
    ],
  }

  return (
    <footer
      role="contentinfo"
      className="relative pt-20 pb-10 section-padding"
      style={{ background: '#060606', borderTop: '1px solid #161616' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-0">
              <img
                src="/images/logo.png"
                alt="Third Space MMA"
                className="w-20 h-20 object-contain"
              />
              <div>
                <p
                  className="text-2xl font-black tracking-widest uppercase leading-none"
                  style={{ fontFamily: 'var(--font-bebas, Impact)', color: '#ffffff' }}
                >
                  Third Space
                </p>
                <p
                  className="text-xs font-bold tracking-[0.4em] uppercase mt-0.5"
                  style={{ color: '#C8102E' }}
                >
                  MMA
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
              San Fernando Valley’s premier combat sports gym. Jiu-Jitsu &amp; Muay Thai — all levels welcome.
            </p>
            <p className="text-gray-700 text-xs">14675 Rinaldi St #G · San Fernando, CA 91340</p>            <p className="text-gray-700 text-xs mt-2">
              Serving Granada Hills · Northridge · Sylmar · Mission Hills · Chatsworth
            </p>          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="text-xs font-bold tracking-[0.35em] uppercase text-gray-500 mb-5">
                {heading}
              </h3>
              <ul className="space-y-3" role="list">
                {items.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t mb-8" style={{ borderColor: '#161616' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-700 text-xs">
          <p>
            &copy; {currentYear} Third Space MMA — San Fernando, CA. All rights reserved.
          </p>
          <p>
            Built for{' '}
            <a
              href="https://thirdspacemma.com"
              className="hover:text-gray-500 transition-colors"
            >
              thirdspacemma.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
