'use client';

import { useState, useEffect } from 'react';

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactItems = [
    {
      id: 'phone',
      href: 'tel:+923001234567',
      label: 'Call Us',
      color: '#25d366', // Vibrant green
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    },
    {
      id: 'whatsapp',
      href: 'https://wa.me/923001234567',
      label: 'WhatsApp',
      color: '#25d366',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      )
    },
    {
      id: 'email',
      href: 'mailto:info@hamzaengineering.com',
      label: 'Email Us',
      color: '#ea4335', // Bright red
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    },
    {
      id: 'contact',
      href: '/contact',
      label: 'Contact Form',
      color: '#2563eb', // Bright blue
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    },
    {
      id: 'scroll-top',
      label: 'Scroll to Top',
      color: '#8b5cf6', // Vibrant purple
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 19V5m-7 7l7-7 7 7"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Floating Contact Bar - Clean Design */}
      <div className="floating-contact">
        {contactItems.map((item) => {
          if (item.id === 'scroll-top' && !showScrollTop) return null;
          
          const buttonContent = (
            <>
              <div className="floating-contact__icon">
                {item.icon}
              </div>
              <div className={`floating-contact__tooltip ${activeTooltip === item.id ? 'floating-contact__tooltip--visible' : ''}`}>
                {item.label}
              </div>
            </>
          );

          if (item.id === 'scroll-top') {
            return (
              <button
                key={item.id}
                className={`floating-contact__btn floating-contact__btn--${item.id}`}
                aria-label={item.label}
                style={{ '--btn-color': item.color } as React.CSSProperties}
                onClick={scrollToTop}
                onMouseEnter={() => setActiveTooltip(item.id)}
                onMouseLeave={() => setActiveTooltip(null)}
                onFocus={() => setActiveTooltip(item.id)}
                onBlur={() => setActiveTooltip(null)}
              >
                {buttonContent}
              </button>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              target={item.id === 'whatsapp' ? '_blank' : '_self'}
              rel={item.id === 'whatsapp' ? 'noopener noreferrer' : ''}
              className={`floating-contact__btn floating-contact__btn--${item.id}`}
              aria-label={item.label}
              style={{ '--btn-color': item.color } as React.CSSProperties}
              onMouseEnter={() => setActiveTooltip(item.id)}
              onMouseLeave={() => setActiveTooltip(null)}
              onFocus={() => setActiveTooltip(item.id)}
              onBlur={() => setActiveTooltip(null)}
            >
              {buttonContent}
            </a>
          );
        })}
      </div>
    </>
  );
}