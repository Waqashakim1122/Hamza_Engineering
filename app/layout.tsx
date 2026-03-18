import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContactBar from '@/components/layout/FloatingContactBar';

// Global styles
import '@/styles/variables.css';
import '@/styles/base.css';

// Layout styles
import '@/styles/layout/layout.css';
import '@/styles/layout/header.css';
import '@/styles/layout/footer.css';
import '@/styles/layout/floating-contact.css';
import '@/styles/layout/loading-screen.css';

// Page styles - Home
import '@/styles/pages/home/hero.css';
import '@/styles/pages/home/services.css';
import '@/styles/pages/home/industries.css';
import '@/styles/pages/home/cta-contact.css';

// Page styles - About
import '@/styles/pages/about/AboutHero.css';
import '@/styles/pages/about/CompanyProfile.css';
import '@/styles/pages/about/OurCustomers.css';
import '@/styles/pages/about/capabilities.css';
import '@/styles/pages/about/certifications.css';

// Product styles
import '@/styles/pages/products/product-detail.css';
import '@/styles/pages/products/products-hero.css';
import '@/styles/pages/products/main-categories.css';
import '@/styles/pages/products/category-types.css';

// Industries styles
import '@/styles/pages/Industries/IndustriesHero.css';
import '@/styles/pages/Industries/IndustryDetail.css';

// Contact styles
import '@/styles/pages/contact/contact.css';
import '@/styles/pages/contact/contact-form.css';
import '@/styles/pages/contact/contact-info.css';

///our customers styles
import '@/styles/pages/OurCustomers/customer-detail.css'; 

// Component styles
import '@/styles/components/buttons.css';
import '@/styles/components/cards.css';

export const metadata: Metadata = {
  title: 'Hamza Engineering | Paint & Chemical Machinery',
  description: 'Hamza Engineering manufactures industrial paint & chemical machinery — resin plants, bead mills, dispersers, mixers and polymer processing plants for manufacturers in Pakistan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.hamzaeng.com/#organization",
          "name": "Hamza Engineering",
          "url": "https://www.hamzaeng.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.hamzaeng.com/images/logo.png"
          },
          "description": "Hamza Engineering manufactures industrial paint & chemical machinery — resin plants, bead mills, dispersers, mixers and polymer processing plants for manufacturers in Pakistan.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "PK",
            "addressRegion": "Punjab"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+92-300-1234567",
            "contactType": "sales",
            "availableLanguage": ["English", "Urdu"]
          },
          "sameAs": [
            "https://www.linkedin.com/company/hamzaengineering",
            "https://www.facebook.com/hamzaengineering"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.hamzaeng.com/#website",
          "url": "https://www.hamzaeng.com",
          "name": "Hamza Engineering",
          "description": "Industrial Paint & Chemical Machinery Manufacturer in Pakistan",
          "publisher": {
            "@id": "https://www.hamzaeng.com/#organization"
          }
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://www.hamzaeng.com/#localbusiness",
          "name": "Hamza Engineering",
          "image": "https://www.hamzaeng.com/images/logo.png",
          "url": "https://www.hamzaeng.com",
          "telephone": "+92-300-1234567",
          "email": "info@hamzaengineering.com",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "PK",
            "addressRegion": "Punjab"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "31.5204",
            "longitude": "74.3587"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Industrial Machinery Products",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Resin Plants",
                  "description": "Complete resin synthesis and processing systems with oil heating"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Bead Mills",
                  "description": "High-efficiency grinding and dispersion equipment"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Polymer Processing Plants",
                  "description": "Advanced polymer manufacturing systems"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "High Speed Dispersers",
                  "description": "High-speed mixing and dispersing machines"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Industrial Mixers",
                  "description": "Heavy-duty mixing equipment for industrial applications"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Vessels & Mixing Tanks",
                  "description": "Storage and movable tank solutions"
                }
              }
            ]
          }
        }
      ]
    })
  }}
/>
  {/* Favicon */}
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="msapplication-TileColor" content="#1e5a8e" />
  <meta name="theme-color" content="#1e5a8e" />

  {/* Canonical */}
  <link rel="canonical" href="https://www.hamzaeng.com/" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.hamzaeng.com/" />
  <meta property="og:title" content="Hamza Engineering | Paint & Chemical Machinery" />
  <meta property="og:description" content="Hamza Engineering manufactures industrial paint & chemical machinery — resin plants, bead mills, dispersers, mixers and polymer processing plants for manufacturers in Pakistan." />
  <meta property="og:image" content="https://www.hamzaeng.com/images/logo.png" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.hamzaeng.com/" />
  <meta name="twitter:title" content="Hamza Engineering | Paint & Chemical Machinery" />
  <meta name="twitter:description" content="Hamza Engineering manufactures industrial paint & chemical machinery — resin plants, bead mills, dispersers, mixers and polymer processing plants for manufacturers in Pakistan." />
  <meta name="twitter:image" content="https://www.hamzaeng.com/images/logo.png" />
</head>
      <body>
        <Header />
        <main 
          className="main-content page-transition"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </main>
        <FloatingContactBar />
        <Footer />
      </body>
    </html>
  );
}
