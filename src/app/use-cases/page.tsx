import Link from 'next/link';
import { Metadata } from 'next';
import { niches, getAllIndustries, getNichesByIndustry } from '@/data/niches';

export const metadata: Metadata = {
  title: "Use Cases - Novasoft AI | AI That Actually Works For Your Industry",
  description: "See how businesses across 50+ industries use Novasoft AI to actually DO their work. Not suggestions. Real task execution. Browse industry-specific solutions.",
  alternates: {
    canonical: 'https://novasoftai.com/use-cases/',
  },
  openGraph: {
    title: "Use Cases - Novasoft AI | AI That Actually Works For Your Industry",
    description: "See how businesses across 50+ industries use Novasoft AI to actually DO their work. Not suggestions. Real task execution.",
    url: 'https://novasoftai.com/use-cases/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Use Cases - Novasoft AI",
    description: "See how businesses across 50+ industries use Novasoft AI to actually DO their work.",
  },
};

export default function UseCasesPage() {
  const industries = getAllIndustries();
  
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
      <section className="usecases-hero" style={{ padding: '140px 80px 100px' }}>
        <div style={{ maxWidth: '900px' }}>
          <p style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            marginBottom: '16px'
          }}>
            USE CASES
          </p>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '24px'
          }}>
            Pre-trained for your industry.<br/>
            <span style={{ color: 'var(--accent)' }}>Ready to work day one.</span>
          </h1>
          <p style={{
            fontSize: '20px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '700px'
          }}>
            Novasoft AI already knows your industry workflows, your common tasks, 
            and your pain points. Pick your niche and watch it get to work immediately.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="usecases-section" style={{ padding: '0 80px 80px' }}>
        <div className="usecases-stats" style={{ 
          display: 'flex', 
          gap: '64px',
          padding: '32px 0',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)'
        }}>
          {[
            { value: `${niches.length}+`, label: 'Industry specializations' },
            { value: '10M+', label: 'Tasks executed' },
            { value: '2,000+', label: 'Businesses automated' },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ 
                fontSize: '32px', 
                fontWeight: 700, 
                color: 'var(--accent)',
                marginBottom: '4px'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Prop */}
      <section className="usecases-section" style={{ padding: '40px 80px 80px' }}>
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px'
        }}
        className="usecases-value-grid">
          {[
            { icon: '🔗', title: 'Knows Your Tools', desc: 'Already familiar with industry-standard software. Just tell it your stack.' },
            { icon: '⚡', title: 'Industry Workflows', desc: 'Pre-configured for common tasks in your field. No training needed.' },
            { icon: '🎯', title: 'Specific Language', desc: 'Speaks your industry jargon. Understands context immediately.' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '32px',
              background: 'var(--surface-elevated)',
              borderRadius: '16px',
              border: '1px solid var(--border)'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Sections */}
      <section className="usecases-section-lg" style={{ padding: '80px 80px 160px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {industries.slice(0, 10).map((industry) => {
            const industryNiches = getNichesByIndustry(industry).slice(0, 8);
            return (
              <div key={industry} style={{ marginBottom: '80px' }}>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '24px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border)'
                }}>
                  {industry}
                </h2>
                <div className="usecases-niche-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '16px'
                }}>
                  {industryNiches.map((niche) => (
                    <Link
                      key={niche.slug}
                      href={`/${niche.slug}`}
                      style={{
                        padding: '24px',
                        borderRadius: '14px',
                        background: 'var(--surface-elevated)',
                        border: '1px solid var(--border)',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        transition: 'border-color 0.2s'
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between' 
                      }}>
                        <h3 style={{ 
                          fontSize: '16px', 
                          fontWeight: 600, 
                          color: 'var(--text)'
                        }}>
                          {niche.name}
                        </h3>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--text-muted)" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <p style={{
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        lineHeight: 1.5,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}>
                        {niche.useCases[0]}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="usecases-cta" style={{ padding: '160px 80px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: '24px'
          }}>
            Don&apos;t see your industry?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            Novasoft AI adapts to any business. Tell us what you do and 
            watch it learn your workflows in minutes.
          </p>
          <div className="usecases-cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 36px',
              background: 'var(--accent)',
              color: '#000',
              fontWeight: 600,
              fontSize: '16px',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 0 40px rgba(34, 197, 94, 0.25)'
            }}>
              Get a Custom Demo
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
                padding: '18px 36px',
                background: 'transparent',
                color: 'var(--text)',
                fontWeight: 500,
                fontSize: '16px',
                borderRadius: '12px',
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
      </section>
    </div>
  );
}
