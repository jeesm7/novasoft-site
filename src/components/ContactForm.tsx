'use client';

import { useState, FormEvent } from 'react';

const CAL_LINK = 'https://cal.com/jess-mason/intro-call?overlayCalendar=true';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Something went wrong');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  if (status === 'success') {
    return (
      <div style={{
        padding: '48px',
        background: 'var(--surface-elevated)',
        borderRadius: '24px',
        border: '1px solid var(--border)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'var(--accent-dim)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px'
        }}>
          <svg width="32" height="32" fill="var(--accent)" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>
          Message Sent!
        </h3>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 24px',
            background: 'transparent',
            color: 'var(--accent)',
            fontWeight: 600,
            fontSize: '15px',
            borderRadius: '10px',
            border: '1px solid var(--accent)',
            textDecoration: 'none'
          }}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Or Book a Call Now
        </a>
      </div>
    );
  }

  return (
    <div style={{
      padding: '48px',
      background: 'var(--surface-elevated)',
      borderRadius: '24px',
      border: '1px solid var(--border)'
    }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>
              First name
            </label>
            <input 
              type="text"
              name="firstName"
              required
              disabled={status === 'loading'}
              style={{
                width: '100%',
                padding: '14px 16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                color: 'var(--text)',
                fontSize: '15px',
                outline: 'none'
              }}
              placeholder="John"
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>
              Last name
            </label>
            <input 
              type="text"
              name="lastName"
              required
              disabled={status === 'loading'}
              style={{
                width: '100%',
                padding: '14px 16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                color: 'var(--text)',
                fontSize: '15px',
                outline: 'none'
              }}
              placeholder="Doe"
            />
          </div>
        </div>
        
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>
            Email
          </label>
          <input 
            type="email"
            name="email"
            required
            disabled={status === 'loading'}
            style={{
              width: '100%',
              padding: '14px 16px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              color: 'var(--text)',
              fontSize: '15px',
              outline: 'none'
            }}
            placeholder="john@company.com"
          />
        </div>
        
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>
            Company
          </label>
          <input 
            type="text"
            name="company"
            disabled={status === 'loading'}
            style={{
              width: '100%',
              padding: '14px 16px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              color: 'var(--text)',
              fontSize: '15px',
              outline: 'none'
            }}
            placeholder="Your company"
          />
        </div>
        
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>
            Message
          </label>
          <textarea 
            name="message"
            rows={4}
            required
            disabled={status === 'loading'}
            style={{
              width: '100%',
              padding: '14px 16px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              color: 'var(--text)',
              fontSize: '15px',
              outline: 'none',
              resize: 'vertical'
            }}
            placeholder="Tell us about your business and what you're looking to automate..."
          />
        </div>

        {status === 'error' && (
          <div style={{
            padding: '12px 16px',
            background: 'rgba(239, 68, 68, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#ef4444',
            fontSize: '14px'
          }}>
            {errorMessage}
          </div>
        )}
        
        <button 
          type="submit"
          disabled={status === 'loading'}
          style={{
            width: '100%',
            padding: '16px',
            background: status === 'loading' ? 'var(--text-muted)' : 'var(--accent)',
            color: '#000',
            fontWeight: 600,
            fontSize: '16px',
            borderRadius: '12px',
            border: 'none',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            boxShadow: status === 'loading' ? 'none' : '0 0 30px rgba(34, 197, 94, 0.2)'
          }}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>
          By submitting, you agree to our privacy policy.
        </p>
      </form>
    </div>
  );
}
