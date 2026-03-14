import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact - Novasoft AI | Get Started Today",
  description: "Ready to transform your business? Get in touch with our team or start your free trial today.",
  alternates: {
    canonical: 'https://novasoftai.com/contact/',
  },
  openGraph: {
    title: "Contact - Novasoft AI | Get Started Today",
    description: "Ready to transform your business? Get in touch with our team or start your free trial today.",
    url: 'https://novasoftai.com/contact/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Novasoft AI",
    description: "Ready to transform your business? Get in touch or start your free trial today.",
  },
};

const CAL_LINK = 'https://cal.com/jess-mason/intro-call?overlayCalendar=true';

export default function ContactPage() {
  return (
    <div style={{ 
      '--accent': '#22c55e',
      '--accent-dim': 'rgba(34, 197, 94, 0.15)',
      '--surface': '#0c0c0e',
      '--surface-elevated': '#141416',
      '--border': 'rgba(255,255,255,0.08)',
      '--text': '#fafafa',
      '--text-secondary': 'rgba(255,255,255,0.6)',
      '--text-muted': 'rgba(255,255,255,0.4)',
    } as React.CSSProperties}>
      
      <section style={{ padding: '140px 80px 160px' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '120px',
          alignItems: 'start'
        }}>
          {/* Left - Info */}
          <div>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              GET STARTED
            </p>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '24px'
            }}>
              Let&apos;s talk about your business
            </h1>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px'
            }}>
              Fill out the form and we&apos;ll get back to you within 24 hours. 
              Or schedule a call directly.
            </p>
            
            {/* Book a Call CTA */}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 28px',
                background: 'transparent',
                color: 'var(--accent)',
                fontWeight: 600,
                fontSize: '15px',
                borderRadius: '10px',
                border: '1px solid var(--accent)',
                textDecoration: 'none',
                marginBottom: '48px'
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Call
            </a>
            
            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--accent-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '2px' }}>Email</div>
                  <div style={{ fontSize: '16px', color: 'var(--text)' }}>hello@novasoftai.com</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--accent-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '2px' }}>Response time</div>
                  <div style={{ fontSize: '16px', color: 'var(--text)' }}>Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
