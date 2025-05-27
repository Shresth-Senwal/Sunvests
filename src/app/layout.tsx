import './globals.css';
import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Configure Inter font with optimized loading
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata: Metadata = {
  title: {
    default: 'SUNVEST CONSULTANCY LLP | Solar Power, IT Services & Investment Solutions',
    template: '%s | SUNVEST CONSULTANCY LLP',
  },
  description: 'Leading conglomerate offering solar power solutions, IT services, and investment advisory. Expert solar installations, AI/ML development, and wealth management services in Dehradun, Uttarakhand.',
  keywords: [
    'solar power installation',
    'IT services',
    'investment advisory',
    'artificial intelligence',
    'machine learning',
    'portfolio management',
    'Dehradun',
    'Uttarakhand',
    'renewable energy',
    'financial planning',
    'sunvest consultancy',
    'software engineering',
    'data engineering',
    'cloud devops',
    'mutual funds',
    'insurance planning',
    'tax planning',
    'estate planning',
  ],
  authors: [{ name: 'SUNVEST CONSULTANCY LLP' }],
  creator: 'SUNVEST CONSULTANCY LLP',
  publisher: 'SUNVEST CONSULTANCY LLP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.sunvests.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sunvests.com',
    title: 'SUNVEST CONSULTANCY LLP | Solar Power, IT Services & Investment Solutions',
    description: 'Leading conglomerate offering solar power solutions, IT services, and investment advisory. Expert solar installations, AI/ML development, and wealth management services.',
    siteName: 'SUNVEST CONSULTANCY LLP',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SUNVEST CONSULTANCY LLP - Solar Power, IT Services & Investment Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUNVEST CONSULTANCY LLP | Solar Power, IT Services & Investment Solutions',
    description: 'Leading conglomerate offering solar power solutions, IT services, and investment advisory.',
    images: ['/images/og-image.jpg'],
    creator: '@sunvestconsultancy',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3b82f6' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'business',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Additional SEO meta tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SUNVEST CONSULTANCY LLP',
              alternateName: ['SUNVEST', 'Sunvest Consultancy'],
              url: 'https://www.sunvests.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.sunvests.com/logo.svg',
                width: 200,
                height: 60
              },
              description: 'Leading conglomerate offering solar power solutions, IT services, and investment advisory.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'H. No. 89, Vasant Vihar, Phase II',
                addressLocality: 'Dehradun',
                addressRegion: 'Uttarakhand',
                postalCode: '248001',
                addressCountry: 'IN',
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+91-94120-79608',
                  contactType: 'customer service',
                  email: 'info@sunvests.com',
                  areaServed: 'IN',
                  availableLanguage: ['English', 'Hindi'],
                }
              ],
              sameAs: [
                'https://www.linkedin.com/company/sunvest-consultancy',
              ],
              founder: {
                '@type': 'Person',
                name: 'Chandrakant Mishra',
                jobTitle: 'Chairman',
              },
              areaServed: ['IN', 'India'],
              serviceType: ['Solar Power Installation', 'IT Services', 'Investment Advisory'],
              knowsAbout: [
                'Solar Energy Solutions',
                'Software Engineering', 
                'Artificial Intelligence',
                'Financial Planning',
                'Investment Advisory',
                'Portfolio Management',
                'Data Engineering',
                'Cloud Computing'
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'IT Services',
                      description: 'Comprehensive technology solutions including AI, software engineering, and cloud services'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Solar Power Solutions',
                      description: 'Complete solar energy solutions from consultation to installation and maintenance'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Investment & Financial Services',
                      description: 'Professional financial planning and investment advisory services'
                    }
                  }
                ]
              }
            }),
          }}
        />
        
        {/* Local Business Schema for better local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'SUNVEST CONSULTANCY LLP',
              image: 'https://www.sunvests.com/logo.svg',
              telephone: '+91-94120-79608',
              email: 'info@sunvests.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'H. No. 89, Vasant Vihar, Phase II',
                addressLocality: 'Dehradun',
                addressRegion: 'Uttarakhand',
                postalCode: '248001',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 30.3165,
                longitude: 78.0322,
              },
              url: 'https://www.sunvests.com',
              priceRange: '$$',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        <main id="main-content" role="main">
          {children}
        </main>
        
        {/* Service Worker Registration with error handling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
