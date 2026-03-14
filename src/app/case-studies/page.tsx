import Link from 'next/link';
import { Metadata } from 'next';
import { caseStudies } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies | Real AI Automation Results for Real Businesses',
  description:
    'See how businesses use Novasoft AI to automate cold calling, tenant communication, lead follow-up, and more. Real results, real numbers, real clients.',
  alternates: {
    canonical: 'https://novasoftai.com/case-studies/',
  },
  openGraph: {
    title: 'Case Studies | Real AI Automation Results',
    description:
      'See how businesses use Novasoft AI to automate cold calling, tenant communication, lead follow-up, and more.',
    url: 'https://novasoftai.com/case-studies/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Novasoft AI',
    description:
      'Real AI automation results for real businesses. See the numbers.',
  },
};

export default function CaseStudiesPage() {
  return (
    <div
      style={
        {
          '--accent': '#22c55e',
          '--accent-dim': 'rgba(34, 197, 94, 0.15)',
          '--surface': '#0c0c0e',
          '--surface-elevated': '#141416',
          '--border': 'rgba(255,255,255,0.08)',
          '--text': '#fafafa',
          '--text-secondary': 'rgba(255,255,255,0.6)',
          '--text-muted': 'rgba(255,255,255,0.4)',
        } as React.CSSProperties
      }
    >
      {/* Hero */}
      <section
        className="section-padding"
        style={{
          padding: '140px 80px 100px',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}
          >
            CASE STUDIES
          </p>
          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: '24px',
            }}
          >
            Real results.
            <br />
            <span style={{ color: 'var(--accent)' }}>Real businesses.</span>
          </h1>
          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '700px',
            }}
          >
            We don&apos;t do hypothetical. Every case study below is based on
            real client work with real outcomes. See exactly how AI automation
            transforms operations, saves time, and drives revenue.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section
        className="section-padding-lg"
        style={{ padding: '40px 80px 160px' }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="case-study-card"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '60px',
                padding: '48px 56px',
                background: 'var(--surface-elevated)',
                borderRadius: '24px',
                border: '1px solid var(--border)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, transform 0.2s',
                alignItems: 'center',
              }}
            >
              {/* Left: Content */}
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 14px',
                    background: 'var(--accent-dim)',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginBottom: '20px',
                  }}
                >
                  {cs.industry}
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    marginBottom: '16px',
                  }}
                >
                  {cs.title}
                </h2>

                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    marginBottom: '24px',
                    maxWidth: '480px',
                  }}
                >
                  {cs.problem.paragraphs[0].slice(0, 160)}...
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--accent)',
                  }}
                >
                  Read the full case study
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Right: Key Metrics */}
              <div>
                {/* Hero Metric */}
                <div
                  style={{
                    background: 'var(--surface)',
                    borderRadius: '16px',
                    border: '1px solid var(--border)',
                    padding: '32px',
                    textAlign: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(3rem, 5vw, 4rem)',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      lineHeight: 1,
                      marginBottom: '8px',
                    }}
                  >
                    {cs.heroMetric}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}
                  >
                    {cs.heroMetricLabel}
                  </div>
                </div>

                {/* Secondary Metrics Row */}
                <div
                  className="case-study-metrics"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                  }}
                >
                  {cs.secondaryMetrics.map((metric, j) => (
                    <div
                      key={j}
                      style={{
                        background: 'var(--surface)',
                        borderRadius: '12px',
                        border: '1px solid var(--border)',
                        padding: '16px',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: 'var(--text)',
                          marginBottom: '4px',
                        }}
                      >
                        {metric.value}
                      </div>
                      <div
                        style={{
                          fontSize: '11px',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding-lg"
        style={{ padding: '160px 80px', background: 'var(--surface)' }}
      >
        <div
          className="cta-box"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'var(--surface-elevated)',
            borderRadius: '32px',
            border: '1px solid var(--border)',
            padding: '80px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              height: '200%',
              background:
                'radial-gradient(ellipse, rgba(34, 197, 94, 0.08) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--text)',
                marginBottom: '16px',
              }}
            >
              Want results like these?
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                marginBottom: '40px',
                maxWidth: '500px',
                margin: '0 auto 40px',
              }}
            >
              Tell us what you need automated. We will show you exactly how AI
              can work for your business.
            </p>
            <div
              className="cta-buttons"
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/contact"
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
                Get a Free Consultation
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
                  fontSize: '16px',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                }}
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
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
