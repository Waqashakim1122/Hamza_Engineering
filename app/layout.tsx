import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/layout/LoadingScreen';
import FloatingContactBar from '@/components/layout/FloatingContactBar';

// Global styles
import '@/styles/variables.css';
import '@/styles/base.css';

// Layout styles
import '@/styles/layout/layout.css';
import '@/styles/layout/header.css';
import '@/styles/layout/navbar.css';
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

// Page styles - Products
import '@/styles/pages/products/product-detail.css';
import '@/styles/pages/products/products-hero.css';
import '@/styles/pages/products/main-categories.css';
import '@/styles/pages/products/category-types.css';

// Page styles - Industries
import '@/styles/pages/Industries/IndustriesHero.css';
import '@/styles/pages/Industries/IndustryDetail.css';

// Page styles - Contact
import '@/styles/pages/contact/contact.css';
import '@/styles/pages/contact/contact-form.css';
import '@/styles/pages/contact/contact-info.css';

// Component styles
import '@/styles/components/buttons.css';
import '@/styles/components/cards.css';

export const metadata: Metadata = {
  title: 'Hamza Engineering | Paint & Chemical Machinery',
  description: 'Excellence in Industrial Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1e5a8e" />
        <meta name="theme-color" content="#1e5a8e" />
      </head>
      <body>
        <LoadingScreen />
        <Header />
        <main className="page-transition">{children}</main>
        <FloatingContactBar />
        <Footer />
      </body>
    </html>
  );
}
