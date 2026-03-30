import './globals.css'

export const metadata = {
  metadataBase: new URL('https://thirdspacemma.com'),
  title: {
    default: 'Third Space MMA | Muay Thai, Jiu-Jitsu & MMA in San Fernando, CA',
    template: '%s | Third Space MMA',
  },
  description:
    'Train with professional MMA fighter and coach Arsalan Mayel in San Fernando, CA (SFV). Jiu-Jitsu classes Mon & Wed 7:30pm, Muay Thai Tue & Thu 7:30pm, Sunday open mat 1pm. Drop-in $30, trial week $60, monthly $200.',
  keywords: [
    'MMA gym San Fernando CA',
    'Jiu Jitsu San Fernando Valley',
    'Muay Thai classes SFV',
    'martial arts San Fernando CA',
    'MMA classes near me',
    'BJJ classes San Fernando',
    'Muay Thai San Fernando',
    'Arsalan Mayel coach',
    'Third Space MMA',
    'fight gym San Fernando Valley',
    '14675 Rinaldi St gym',
  ],
  authors: [{ name: 'Arsalan Mayel', url: 'https://thirdspacemma.com' }],
  creator: 'Third Space MMA',
  publisher: 'Third Space MMA',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: 'https://thirdspacemma.com' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thirdspacemma.com',
    siteName: 'Third Space MMA',
    title: 'Third Space MMA | San Fernando\'s Elite Combat Sports Gym',
    description:
      'Train with pro MMA fighter Arsalan Mayel. Muay Thai, Jiu-Jitsu & MMA in San Fernando, CA. All levels welcome.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Third Space MMA — San Fernando Combat Sports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Third Space MMA | San Fernando',
    description: 'Train with pro MMA fighter Arsalan Mayel. All levels welcome.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

/**
 * Root layout — wraps every page.
 * @param {{ children: React.ReactNode }} props
 */
export default function RootLayout({ children }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Third Space MMA',
    description:
      'Professional MMA gym in San Fernando, CA offering Muay Thai, Jiu-Jitsu and MMA classes for all skill levels.',
    url: 'https://thirdspacemma.com',
    telephone: '+1-818-471-8867',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '14675 Rinaldi St #G',
      addressLocality: 'San Fernando',
      addressRegion: 'CA',
      postalCode: '91340',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.2897,
      longitude: -118.4390,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday'], opens: '19:30', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday'], opens: '19:30', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '13:00', closes: '15:00' },
    ],
    sameAs: [
      'https://www.instagram.com/thirdspacemma/',
      'https://www.yelp.com/biz/third-space-mma-san-fernando',
    ],
    priceRange: '$$',
    image: 'https://thirdspacemma.com/og-image.jpg',
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
