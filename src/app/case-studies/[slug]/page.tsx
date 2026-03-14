import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
  caseStudies,
} from '@/data/case-studies';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  return {
    title: cs.seoTitle,
    description: cs.metaDescription,
    alternates: {
      canonical: `https://novasoftai.com/case-studies/${cs.slug}/`,
    },
    openGraph: {
      title: cs.seoTitle,
      description: cs.metaDescription,
      url: `https://novasoftai.com/case-studies/${cs.slug}/`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: cs.seoTitle,
      description: cs.metaDescription,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const relatedStudies = cs.relatedSlugs
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter(Boolean);

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
      {/* =====================
          HERO SECTION
          ===================== */}
      <section
        className="section-padding"
        style={{
          padding: '140px 80px 80px',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '32px',
              fontSize: '14px',
            }}
          >
            <Link
              href="/case-studies"
              style={{
                color: 'var(--accent)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Case Studies
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span style={{ color: 'var(--text-muted)' }}>{cs.industry}</span>
          </div>

          {/* Industry Badge */}
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
              marginBottom: '24px',
            }}
          >
            {cs.industry} &middot; {cs.location}
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: '48px',
              maxWidth: '900px',
            }}
          >
            {cs.title}
          </h1>

          {/* Hero Metric + Secondary Metrics */}
          <div
            className="case-study-hero-metrics"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '24px',
            }}
          >
            {/* Primary Metric */}
            <div
              style={{
                background: 'var(--surface-elevated)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                padding: '48px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(4rem, 8vw, 6rem)',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                {cs.heroMetric}
              </div>
              <div
                style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                }}
              >
                {cs.heroMetricLabel}
              </div>
            </div>

            {/* Secondary Metrics Grid */}
            <div
              className="case-study-secondary-metrics"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}
            >
              {cs.secondaryMetrics.map((metric, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--surface-elevated)',
                    borderRadius: '16px',
                    border: '1px solid var(--border)',
                    padding: '32px 24px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      color: 'var(--text)',
                      lineHeight: 1,
                      marginBottom: '8px',
                    }}
                  >
                    {metric.value}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}

              {/* Results stats in remaining cells */}
              {cs.results.stats.slice(0, 3).map((stat, i) => (
                <div
                  key={`stat-${i}`}
                  style={{
                    background: 'var(--surface-elevated)',
                    borderRadius: '16px',
                    border: '1px solid var(--border)',
                    padding: '32px 24px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      color: 'var(--text)',
                      lineHeight: 1,
                      marginBottom: '8px',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          THE PROBLEM
          ===================== */}
      <section
        className="section-padding-lg"
        style={{ padding: '120px 80px', background: 'var(--surface)' }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="case-study-split"
        >
          {/* Left: Section Label */}
          <div>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#ef4444',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              THE PROBLEM
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
              }}
            >
              {cs.problem.headline}
            </h2>
          </div>

          {/* Right: Content */}
          <div>
            {cs.problem.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                }}
              >
                {p}
              </p>
            ))}

            {/* Pain Points */}
            <div
              style={{
                marginTop: '32px',
                padding: '28px 32px',
                background: 'rgba(239, 68, 68, 0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(239, 68, 68, 0.15)',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#ef4444',
                  marginBottom: '16px',
                }}
              >
                KEY PAIN POINTS
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                {cs.problem.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      marginBottom: '10px',
                    }}
                  >
                    <span style={{ color: '#ef4444', flexShrink: 0 }}>
                      ✕
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          THE SOLUTION
          ===================== */}
      <section
        className="section-padding-lg"
        style={{ padding: '120px 80px' }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="case-study-split"
        >
          {/* Left: Section Label */}
          <div>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              THE SOLUTION
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
              }}
            >
              {cs.solution.headline}
            </h2>
          </div>

          {/* Right: Content */}
          <div>
            {cs.solution.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                }}
              >
                {p}
              </p>
            ))}

            {/* Solution Features */}
            <div
              style={{
                marginTop: '32px',
                padding: '28px 32px',
                background: 'var(--accent-dim)',
                borderRadius: '16px',
                border: '1px solid rgba(34, 197, 94, 0.2)',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  marginBottom: '16px',
                }}
              >
                WHAT WE BUILT
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                {cs.solution.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '15px',
                      color: 'var(--text)',
                      marginBottom: '10px',
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="var(--accent)"
                      viewBox="0 0 20 20"
                      style={{ flexShrink: 0, marginTop: '2px' }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          THE RESULTS
          ===================== */}
      <section
        className="section-padding-lg"
        style={{ padding: '120px 80px', background: 'var(--surface)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr',
              gap: '80px',
              alignItems: 'start',
              marginBottom: '64px',
            }}
            className="case-study-split"
          >
            {/* Left: Section Label */}
            <div>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                THE RESULTS
              </p>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                }}
              >
                {cs.results.headline}
              </h2>
            </div>

            {/* Right: Content */}
            <div>
              {cs.results.paragraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    marginBottom: '20px',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Results Stats Grid */}
          <div
            className="case-study-results-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
          >
            {cs.results.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--surface-elevated)',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  padding: '36px 24px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          TECH STACK
          ===================== */}
      <section
        className="section-padding-lg"
        style={{ padding: '120px 80px' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              TECHNOLOGY
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--text)',
              }}
            >
              Tech stack used
            </h2>
          </div>

          <div
            className="case-study-tech-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
            }}
          >
            {cs.techStack.map((tech, i) => (
              <div
                key={i}
                style={{
                  padding: '32px',
                  background: 'var(--surface-elevated)',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'var(--accent-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="var(--accent)"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--text)',
                    }}
                  >
                    {tech.name}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    paddingLeft: '52px',
                  }}
                >
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          TESTIMONIAL
          ===================== */}
      <section
        className="section-padding-lg quote-section"
        style={{ padding: '120px 80px', background: 'var(--surface)' }}
      >
        <div
          style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
        >
          <blockquote
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 500,
              lineHeight: 1.4,
              color: 'var(--text)',
              marginBottom: '40px',
              fontStyle: 'normal',
            }}
          >
            &ldquo;{cs.testimonial.quote}&rdquo;
          </blockquote>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background:
                  'linear-gradient(135deg, var(--accent) 0%, #16a34a 100%)',
              }}
            />
            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  fontWeight: 600,
                  color: 'var(--text)',
                  fontSize: '15px',
                }}
              >
                {cs.testimonial.author}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                }}
              >
                {cs.testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          RELATED CASE STUDIES
          ===================== */}
      {relatedStudies.length > 0 && (
        <section
          className="section-padding-lg"
          style={{ padding: '120px 80px' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '48px' }}>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                MORE CASE STUDIES
              </p>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: 'var(--text)',
                }}
              >
                See more results
              </h2>
            </div>

            <div
              className="case-study-related-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px',
              }}
            >
              {relatedStudies.map((related) =>
                related ? (
                  <Link
                    key={related.slug}
                    href={`/case-studies/${related.slug}`}
                    style={{
                      padding: '36px',
                      background: 'var(--surface-elevated)',
                      borderRadius: '20px',
                      border: '1px solid var(--border)',
                      textDecoration: 'none',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        background: 'var(--accent-dim)',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        marginBottom: '16px',
                      }}
                    >
                      {related.industry}
                    </div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: 'var(--text)',
                        lineHeight: 1.3,
                        marginBottom: '12px',
                      }}
                    >
                      {related.title}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: '16px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '28px',
                          fontWeight: 700,
                          color: 'var(--accent)',
                        }}
                      >
                        {related.heroMetric}
                      </div>
                      <div
                        style={{
                          fontSize: '13px',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {related.heroMetricLabel}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--accent)',
                      }}
                    >
                      Read case study
                      <svg
                        width="14"
                        height="14"
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
                  </Link>
                ) : null,
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================
          CTA
          ===================== */}
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
              Want results like these for your business?
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
              Book a free consultation. We will map out exactly how AI
              automation can work for your specific use case.
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
