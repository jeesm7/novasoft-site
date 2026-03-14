import Link from 'next/link';
import { Metadata } from 'next';
import { getAllIndustries } from '@/data/industries';

export const metadata: Metadata = {
  title: 'AI Automation by Industry | Novasoft AI',
  description: 'Explore how Novasoft AI builds custom AI automation for real estate, property management, solar energy, construction, dental practices, and logistics companies. Industry-specific solutions that deliver real results.',
  keywords: ['AI automation by industry', 'industry AI solutions', 'AI for business', 'AI automation agency', 'custom AI solutions'],
  alternates: {
    canonical: 'https://novasoftai.com/industries/',
  },
  openGraph: {
    title: 'AI Automation by Industry | Novasoft AI',
    description: 'Custom AI automation solutions built for your specific industry. Real estate, property management, solar, construction, dental, and logistics.',
    url: 'https://novasoftai.com/industries/',
    type: 'website',
  },
};

const industryIcons: Record<string, string> = {
  'real-estate': '🏠',
  'property-management': '🏢',
  'solar-energy': '☀️',
  'construction': '🏗️',
  'dental': '🦷',
  'logistics': '🚚',
};

export default function IndustriesPage() {
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

      {/* =====================
          HERO
          ===================== */}
      <section className="section-padding" style={{
        padding: '140px 80px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-15%',
          width: '70%',
          height: '130%',
          background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '28px',
            padding: '8px 16px 8px 10px',
            background: 'var(--accent-dim)',
            borderRadius: '100px',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.02em',
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 8px var(--accent)',
            }} />
            INDUSTRY SOLUTIONS
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '24px',
            maxWidth: '800px',
          }}>
            AI automation built for{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, #16a34a 50%, #15803d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              your industry
            </span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: '20px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            marginBottom: '48px',
          }}>
            Every industry has unique workflows, pain points, and opportunities for automation.
            We build custom AI solutions that understand your business inside and out.
          </p>
        </div>
      </section>

      {/* =====================
          INDUSTRY CARDS
          ===================== */}
      <section className="section-padding-lg" style={{ padding: '0 80px 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }} className="case-study-tech-grid">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                style={{
                  padding: '48px',
                  background: 'var(--surface-elevated)',
                  borderRadius: '24px',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, transform 0.2s',
                  display: 'block',
                }}
              >
                {/* Icon and Label */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '24px',
                }}>
                  <div style={{
                    fontSize: '40px',
                    lineHeight: 1,
                  }}>
                    {industryIcons[industry.slug] || '⚡'}
                  </div>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="var(--text-muted)" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>

                {/* Title */}
                <h2 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '12px',
                  lineHeight: 1.2,
                }}>
                  {industry.headline}
                </h2>

                {/* Description */}
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  marginBottom: '28px',
                }}>
                  {industry.subheadline}
                </p>

                {/* Key Results Preview */}
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  paddingTop: '24px',
                  borderTop: '1px solid var(--border)',
                  flexWrap: 'wrap',
                }}>
                  {industry.results.slice(0, 2).map((result, i) => (
                    <div key={i}>
                      <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--accent)' }}>
                        {result.metric}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', maxWidth: '140px' }}>
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          WHY CHOOSE NOVASOFT
          ===================== */}
      <section className="section-padding-lg" style={{ padding: '120px 80px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}>
              WHY NOVASOFT AI
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '16px',
              maxWidth: '700px',
              margin: '0 auto 16px',
            }}>
              Not generic AI. Custom-built for your business.
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              We do not sell you a chatbot and call it a day. We study your workflows,
              build custom AI agents, and integrate them into your existing tools.
            </p>
          </div>

          <div className="case-study-results-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {[
              {
                title: 'Industry Expertise',
                description: 'We have built AI systems for dozens of businesses across real estate, property management, solar, construction, dental, and logistics. We know the pain points because we have solved them before.',
              },
              {
                title: 'Custom, Not Template',
                description: 'Every AI system we build is custom to your business. Your scripts, your workflows, your integrations. No two clients get the same solution because no two businesses are identical.',
              },
              {
                title: 'Full Integration',
                description: 'We connect to your CRM, calendar, phone system, and industry-specific software. The AI works inside your existing tools, not alongside them.',
              },
              {
                title: 'Live in Days',
                description: 'Most clients go live within 1-2 weeks. We handle setup, testing, and optimization. You just tell us how your business works.',
              },
              {
                title: 'Real Voice AI',
                description: 'Our voice agents sound natural and handle real conversations. They follow scripts, manage objections, and build rapport. Not the robotic IVR your customers hate.',
              },
              {
                title: 'Measurable ROI',
                description: 'Every client gets a dashboard showing calls handled, appointments booked, leads qualified, and revenue attributed to AI. You see the ROI in real numbers.',
              },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '36px',
                background: 'var(--surface-elevated)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '12px',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          CTA
          ===================== */}
      <section className="section-padding-lg" style={{ padding: '160px 80px' }}>
        <div className="cta-box" style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'var(--surface-elevated)',
          borderRadius: '32px',
          border: '1px solid var(--border)',
          padding: '80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '200%',
            background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--text)',
              marginBottom: '16px',
            }}>
              Not sure which solution fits your business?
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              marginBottom: '40px',
              maxWidth: '500px',
              margin: '0 auto 40px',
            }}>
              Book a free consultation and we will map out your AI automation strategy. No pressure, no sales pitch. Just a real plan.
            </p>
            <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://cal.com/jess-mason/intro-call?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '18px 32px',
                  background: 'var(--accent)',
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '16px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 0 40px rgba(34, 197, 94, 0.25)',
                }}
              >
                Book a Free Consultation
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '18px 32px',
                background: 'transparent',
                color: 'var(--text)',
                fontWeight: 500,
                fontSize: '16px',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                textDecoration: 'none',
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
