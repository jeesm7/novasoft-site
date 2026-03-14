import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Free AI Tools & Calculators for Business",
  description: "Free interactive AI tools to help you evaluate automation for your business. Calculate ROI, assess AI readiness, and compare costs of hiring vs AI assistants.",
  alternates: {
    canonical: 'https://novasoftai.com/tools/',
  },
  openGraph: {
    title: "Free AI Tools & Calculators for Business | Novasoft AI",
    description: "Free interactive AI tools to help you evaluate automation for your business. Calculate ROI, assess AI readiness, and compare costs.",
    url: 'https://novasoftai.com/tools/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free AI Tools & Calculators | Novasoft AI",
    description: "Calculate your AI ROI, assess readiness, and compare hiring vs AI costs. Free tools for business owners.",
  },
};

const tools = [
  {
    slug: 'ai-roi-calculator',
    title: 'AI ROI Calculator',
    description: 'Calculate how much time and money your business can save by automating customer calls and follow-ups with AI. Get a personalized ROI breakdown in seconds.',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#22c55e',
    keywords: 'AI ROI, automation savings, cost reduction',
  },
  {
    slug: 'ai-readiness-quiz',
    title: 'AI Readiness Assessment',
    description: 'Answer 6 quick questions about your business to find out if you are ready for AI automation. Get a personalized score and actionable recommendations.',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    color: '#3b82f6',
    keywords: 'AI readiness, business assessment, automation potential',
  },
  {
    slug: 'hiring-vs-ai',
    title: 'Hiring vs AI Cost Comparison',
    description: 'Compare the real cost of hiring a full-time employee, a virtual assistant, or an AI assistant. See a side-by-side breakdown with annual projections.',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: '#a855f7',
    keywords: 'Hiring costs, AI vs employee, virtual assistant comparison',
  },
];

export default function ToolsPage() {
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
      
      {/* Hero */}
      <section className="section-padding" style={{ padding: '140px 80px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            marginBottom: '16px'
          }}>
            FREE TOOLS
          </p>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: '24px'
          }}>
            AI Tools & Calculators <br />
            <span style={{ color: 'var(--accent)' }}>for Your Business</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Use these free tools to evaluate whether AI automation is right for your business. No signup required.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding" style={{ padding: '40px 80px 160px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="tools-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px' 
          }}>
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                style={{
                  padding: '40px',
                  borderRadius: '20px',
                  background: 'var(--surface-elevated)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                }}
                className="card-hover"
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: `${tool.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: tool.color,
                }}>
                  {tool.icon}
                </div>
                <div>
                  <h2 style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}>
                    {tool.title}
                  </h2>
                  <p style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '20px'
                  }}>
                    {tool.description}
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: tool.color,
                  marginTop: 'auto',
                }}>
                  Try it free
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-lg" style={{ padding: '80px 80px 160px' }}>
        <div className="cta-box" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          background: 'linear-gradient(135deg, var(--surface-elevated) 0%, var(--surface) 100%)',
          borderRadius: '32px',
          border: '1px solid var(--border)',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '60%',
            height: '200%',
            background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.08) 0%, transparent 60%)',
            pointerEvents: 'none'
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '20px'
            }}>
              Want a custom analysis for your business?
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '40px',
              maxWidth: '500px',
              margin: '0 auto 40px'
            }}>
              Our team will evaluate your current operations and show you exactly how AI can help.
            </p>
            <div className="cta-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '18px 32px',
                background: 'var(--accent)',
                color: '#000',
                fontWeight: 600,
                fontSize: '15px',
                borderRadius: '10px',
                textDecoration: 'none',
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.25)'
              }}>
                Get a Free Consultation
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://cal.com/jess-mason/intro-call?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '18px 32px',
                  background: 'transparent',
                  color: 'var(--text)',
                  fontWeight: 500,
                  fontSize: '15px',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                  textDecoration: 'none'
                }}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
