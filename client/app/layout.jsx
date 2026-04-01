import './globals.css'

export const metadata = {
  metadataBase: new URL('https://thirdspacemma.com'),
  title: {
    default: 'Third Space MMA | Muay Thai, Jiu-Jitsu & MMA | Granada Hills, Northridge, Sylmar, San Fernando Valley',
    template: '%s | Third Space MMA',
  },
  description:
    'Top-rated MMA gym serving Granada Hills, Northridge, Sylmar, San Fernando & the entire San Fernando Valley. Train Muay Thai, Jiu-Jitsu & MMA with pro fighter Arsalan Mayel. All levels welcome. Drop-in $30 — no contract, no commitment.',
  keywords: [
    'MMA gym San Fernando CA',
    'MMA near me',
    'MMA gym near me',
    'martial arts near me',
    'Jiu Jitsu San Fernando Valley',
    'Muay Thai classes SFV',
    'martial arts San Fernando CA',
    'MMA classes near me',
    'BJJ classes San Fernando',
    'Muay Thai San Fernando',
    'MMA Granada Hills',
    'Muay Thai Granada Hills',
    'Jiu Jitsu Granada Hills',
    'martial arts Granada Hills',
    'MMA Northridge',
    'Muay Thai Northridge',
    'BJJ Northridge',
    'martial arts Northridge CA',
    'MMA Sylmar',
    'Muay Thai Sylmar',
    'Jiu Jitsu Sylmar',
    'fight gym Sylmar',
    'MMA gym Chatsworth',
    'MMA gym Reseda',
    'fight gym San Fernando Valley',
    'Arsalan Mayel coach',
    'Third Space MMA',
    '14675 Rinaldi St gym',
    'boxing near me San Fernando Valley',
    'wrestling classes SFV',
    'kickboxing near me SFV',
    'self defense classes San Fernando Valley',
    'womens self defense SFV',
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
    title: 'Third Space MMA | #1 MMA Gym in Granada Hills, Northridge & San Fernando Valley',
    description:
      'Train Muay Thai, Jiu-Jitsu & MMA with pro fighter Arsalan Mayel. Serving Granada Hills, Northridge, Sylmar & all of SFV. First class $30 — all levels welcome.',
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
      'Top-rated MMA gym serving Granada Hills, Northridge, Sylmar, San Fernando and the entire San Fernando Valley. Muay Thai, Jiu-Jitsu, Boxing, Wrestling, Kickboxing and MMA classes for all skill levels.',
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
    areaServed: [
      { '@type': 'City', name: 'San Fernando', containedInPlace: { '@type': 'State', name: 'California' } },
      { '@type': 'Neighborhood', name: 'Granada Hills', containedInPlace: { '@type': 'City', name: 'Los Angeles' } },
      { '@type': 'Neighborhood', name: 'Northridge', containedInPlace: { '@type': 'City', name: 'Los Angeles' } },
      { '@type': 'Neighborhood', name: 'Sylmar', containedInPlace: { '@type': 'City', name: 'Los Angeles' } },
      { '@type': 'Neighborhood', name: 'Mission Hills', containedInPlace: { '@type': 'City', name: 'Los Angeles' } },
      { '@type': 'Neighborhood', name: 'Chatsworth', containedInPlace: { '@type': 'City', name: 'Los Angeles' } },
      { '@type': 'AdministrativeArea', name: 'San Fernando Valley' },
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday'], opens: '19:30', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday'], opens: '19:30', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '12:00', closes: '15:00' },
    ],
    hasMap: 'https://maps.google.com/?q=14675+Rinaldi+St+%23G+San+Fernando+CA+91340',
    sameAs: [
      'https://www.instagram.com/thirdspacemma/',
      'https://www.yelp.com/biz/third-space-mma-san-fernando',
    ],
    priceRange: '$$',
    image: 'https://thirdspacemma.com/og-image.jpg',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Third Space MMA located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Third Space MMA is located at 14675 Rinaldi St #G, San Fernando, CA 91340 — conveniently serving Granada Hills, Northridge, Sylmar, Mission Hills, and the entire San Fernando Valley.',
        },
      },
      {
        '@type': 'Question',
        name: 'What MMA classes are available near Granada Hills and Northridge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Third Space MMA offers Muay Thai, Jiu-Jitsu (No-Gi), MMA, Boxing, Wrestling, Kickboxing, and Women\'s Self Defense classes. The gym is minutes from Granada Hills, Northridge, and Sylmar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need experience to join?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No experience needed. All classes are all-levels and beginners are welcome. Your first drop-in class is $30 with no commitment required.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Drop-in classes are $30. A trial week of unlimited classes is $60. Monthly unlimited membership is $200 with no contract.',
        },
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
