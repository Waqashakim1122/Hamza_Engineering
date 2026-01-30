// app/customers/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getCustomerBySlug, getAllCustomers } from '@/data/customersData';
import Link from 'next/link';
import '@/styles/pages/OurCustomers/customer-detail.css';

// Generate static params for all customers
export async function generateStaticParams() {
  const customers = getAllCustomers();
  return customers.map((customer) => ({
    slug: customer.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const customer = getCustomerBySlug(slug);
  
  if (!customer) {
    return {
      title: 'Customer Not Found',
    };
  }

  return {
    title: `${customer.name} - Our Customer | HAMZA ENGINEERING`,
    description: `Learn about our partnership with ${customer.name} and the solutions we provided for their ${customer.industry} needs.`,
  };
}

export default async function CustomerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const customer = getCustomerBySlug(slug);

  if (!customer) {
    notFound();
  }

  return (
    <>
    
      
      {/* Breadcrumb */}
      <div className="customer-breadcrumb">
        <div className="customer-breadcrumb-container">
          <Link href="/">Home</Link>
          <span className="customer-breadcrumb-separator">/</span>
          <Link href="/about">About</Link>
          <span className="customer-breadcrumb-separator">/</span>
          <span className="customer-breadcrumb-current">{customer.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="customer-detail-container">
        
        {/* Company Header */}
        <div className="customer-header">
          <div className="customer-header-box">
            <div className="customer-header-content">
              {/* Logo */}
              <div className="customer-logo-box">
                <img 
                  src={customer.logo}
                  alt={customer.name}
                  className="customer-logo"
                />
              </div>

              {/* Info */}
              <div className="customer-info">
                <h1 className="customer-title">
                  {customer.name}
                </h1>
                <p className="customer-description">
                  {customer.companyDescription}
                </p>
                <div className="customer-tags">
                  <span className="customer-tag">
                    {customer.industry}
                  </span>
                  <span className="customer-tag">
                    {customer.location}
                  </span>
                  <span className="customer-tag-primary" style={{ background: customer.color }}>
                    Partner since {customer.partnership.startYear}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="customer-content-grid">
          
          {/* Left Column - Main Content */}
          <div className="customer-main-content">
            {/* Projects Section */}
            <div className="customer-projects">
              <h2 className="customer-section-title">
                Project Highlights
              </h2>

              {customer.projectDetails.map((project, index) => (
                <div 
                  key={index}
                  className="customer-project-card"
                  style={{ borderLeft: `3px solid ${customer.color}` }}
                >
                  <h3 className="customer-project-title">
                    {project.title}
                  </h3>
                  <p className="customer-project-description">
                    {project.description}
                  </p>
                  {(project.quantity || project.timeline) && (
                    <div className="customer-project-meta">
                      {project.quantity && (
                        <div>
                          <strong>Scope:</strong> {project.quantity}
                        </div>
                      )}
                      {project.timeline && (
                        <div>
                          <strong>Timeline:</strong> {project.timeline}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="customer-testimonial" style={{ borderLeft: `4px solid ${customer.color}` }}>
              <div className="customer-testimonial-quote">
                "{customer.testimonial.quote}"
              </div>
              <div className="customer-testimonial-author">
                <div 
                  className="customer-testimonial-avatar"
                  style={{ background: customer.color }}
                >
                  {customer.testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="customer-testimonial-name">
                    {customer.testimonial.author}
                  </div>
                  <div className="customer-testimonial-position">
                    {customer.testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="customer-sidebar">
            {/* Services */}
            <div className="customer-sidebar-box">
              <h3 className="customer-sidebar-title">
                Services Provided
              </h3>
              <ul className="customer-sidebar-list">
                {customer.servicesProvided.map((service, index) => (
                  <li 
                    key={index}
                    className={`customer-sidebar-item ${index < customer.servicesProvided.length - 1 ? 'customer-sidebar-item-border' : ''}`}
                  >
                    <span className="customer-sidebar-bullet" style={{ color: customer.color }}>
                      •
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="customer-sidebar-box">
              <h3 className="customer-sidebar-title">
                Key Results
              </h3>
              <ul className="customer-sidebar-list">
                {customer.results.slice(0, 4).map((result, index) => (
                  <li 
                    key={index}
                    className={`customer-result-item ${index < 3 ? 'customer-sidebar-item-border' : ''}`}
                  >
                    <span 
                      className="customer-result-dot"
                      style={{ background: customer.color }}
                    ></span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="customer-cta-buttons">
              <a
                href={customer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="customer-cta-primary"
                style={{ background: customer.color }}
              >
                Visit {customer.name} Website →
              </a>
              <Link
                href="/about#our-customers"
                className="customer-cta-secondary"
              >
                ← Back to All Customers
              </Link>
            </div>
          </div>
        </div>

        {/* Full Width Results Section */}
        {customer.results.length > 4 && (
          <div className="customer-additional-results">
            <h3 className="customer-additional-title">
              Additional Impact
            </h3>
            <div className="customer-results-grid">
              {customer.results.slice(4).map((result, index) => (
                <div 
                  key={index}
                  className="customer-result-card"
                >
                  <span 
                    className="customer-result-card-dot"
                    style={{ background: customer.color }}
                  ></span>
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}