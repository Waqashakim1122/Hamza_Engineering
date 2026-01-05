// components/contact/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    // Simulate sending (replace with real backend later)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <div className="contact-form">
      <div className="contact-form__header">
        <h2 className="contact-form__title">Send us a Message</h2>
        <p className="contact-form__subtitle">Fill out the form below and we'll get back to you shortly.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form__body">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />
        </div>

        {/* Phone & Company Row */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 300 1234567"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company" className="form-label">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-input"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company"
            />
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Your Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            rows={6}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="contact-submit" disabled={status === 'Sending...'}>
          {status === 'Sending...' ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </>
          )}
        </button>

        {/* Status Message */}
        {status === 'success' && (
          <div className="form-status form-status--success">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Message sent successfully! We'll contact you soon.
          </div>
        )}
      </form>
    </div>
  );
}