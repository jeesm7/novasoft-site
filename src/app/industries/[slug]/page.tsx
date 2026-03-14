import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getIndustryBySlug, getAllIndustrySlugs, getAllIndustries } from '@/data/industries';
import { FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';
import FAQAccordion from '@/components/FAQAccordion';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: {
      canonical: `https://novasoftai.com/industries/${industry.slug}/`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://novasoftai.com/industries/${industry.slug}/`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const allIndustries = getAllIndustries();
  const otherIndustries = allIndustries.filter((i) => i.slug !== slug);

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

      {/* Schema Markup */}
      <FAQSchema items={industry.faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://novasoftai.com' },
        { name: 'Industries', url: 'https://novasoftai.com/industries' },
        { name: industry.name, url: `https://novasoftai.com/industries/${industry.slug}` },
      ]} />

      {/* =====================
          HERO SECTION
          ===================== */}
      <section className="section-padding" style={{
        padding: '140px 80px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background gradient */}
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
          {/* Breadcrumb */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
            fontSize: '14px',
          }}>
            <Link href="/industries" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
              Industries
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span style={{ color: 'var(--text-muted)' }}>{industry.name}</span>
          </div>

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
            {industry.heroEyebrow}
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '24px',
            maxWidth: '900px',
          }}>
            {industry.headline}
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: '20px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            marginBottom: '48px',
          }}>
            {industry.subheadline}
          </p>

          {/* CTA Group */}
          <div className="cta-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}>
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
                fontSize: '15px',
                borderRadius: '10px',
                textDecoration: 'none',
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.25)',
              }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Free Consultation
            </a>
            <Link href="/contact" style={{
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
              textDecoration: 'none',
            }}>
              See How It Works
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Results Preview */}
          <div className="hero-stats" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
          }}>
            {industry.results.map((result, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                {i > 0 && (
                  <div className="stat-divider" style={{ width: '1px', height: '40px', background: 'var(--border)' }} />
                )}
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--accent)' }}>{result.metric}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', maxWidth: '160px' }}>{result.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          INTRO / WHY THIS MATTERS
          ===================== */}
      <section className="section-padding-lg" style={{ padding: '120px 80px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="case-study-split">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '80px',
            alignItems: 'start',
          }}>
            {/* Left */}
            <div>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}>
                THE CHALLENGE
              </p>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
              }}>
                {industry.introHeadline}
              </h2>
            </div>

            {/* Right */}
            <div>
              {industry.introText.map((paragraph, i) => (
                <p key={i} style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          PAIN POINTS
          ===================== */}
      <section className="section-padding-lg" style={{ padding: '120px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: '#ef4444',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}>
              PAIN POINTS
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              maxWidth: '600px',
            }}>
              Problems that cost you money every single day
            </h2>
          </div>

          <div className="case-study-tech-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}>
            {industry.painPoints.map((pain, i) => (
              <div key={i} style={{
                padding: '36px',
                background: 'rgba(239, 68, 68, 0.04)',
                borderRadius: '20px',
                border: '1px solid rgba(239, 68, 68, 0.12)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{ color: '#ef4444', fontSize: '16px', fontWeight: 700 }}>✕</span>
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    lineHeight: 1.3,
                  }}>
                    {pain.title}
                  </h3>
                </div>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  paddingLeft: '48px',
                }}>
                  {pain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          SOLUTION WALKTHROUGH
          ===================== */}
      <section className="section-padding-lg" style={{ padding: '120px 80px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '80px',
            alignItems: 'start',
            marginBottom: '64px',
          }} className="case-study-split">
            <div>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}>
                THE SOLUTION
              </p>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
              }}>
                {industry.solutionHeadline}
              </h2>
            </div>
            <div>
              <p style={{
                fontSize: '17px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
              }}>
                {industry.solutionIntro}
              </p>
            </div>
          </div>

          {/* Solution Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            background: 'var(--border)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}>
            {industry.solutions.map((solution, i) => (
              <div key={i} className="feature-row" style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '32px',
                padding: '40px 48px',
                background: 'var(--surface-elevated)',
                alignItems: 'start',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'var(--accent-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', fontFamily: 'monospace' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '10px',
                  }}>
                    {solution.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    maxWidth: '700px',
                  }}>
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          WHY AUTOMATION (extra content for SEO)
          ===================== */}
      <section className="section-padding-lg" style={{ padding: '120px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '80px',
            alignItems: 'start',
          }} className="case-study-split">
            <div>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}>
                WHY NOW
              </p>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
              }}>
                {industry.whyAutomationHeadline}
              </h2>
            </div>
            <div>
              {industry.whyAutomationText.map((paragraph, i) => (
                <p key={i} style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          HOW IT WORKS
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
              HOW IT WORKS
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '16px',
            }}>
              Up and running in days, not months
            </h2>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Our team handles the entire setup. You just tell us how your business works and we build the AI around it.
            </p>
          </div>

          <div className="case-study-results-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}>
            {industry.howItWorksSteps.map((step, i) => (
              <div key={i} style={{
                padding: '36px 28px',
                background: 'var(--surface-elevated)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                position: 'relative',
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  opacity: 0.2,
                  lineHeight: 1,
                  marginBottom: '20px',
                  fontFamily: 'monospace',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '10px',
                  lineHeight: 1.3,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          RESULTS / PROOF
          ===================== */}
      <section className="section-padding-lg" style={{ padding: '120px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '80px',
            alignItems: 'start',
            marginBottom: '64px',
          }} className="case-study-split">
            <div>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}>
                REAL RESULTS
              </p>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
              }}>
                {industry.resultsHeadline}
              </h2>
            </div>
            <div>
              <p style={{
                fontSize: '17px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
              }}>
                {industry.resultsIntro}
              </p>
            </div>
          </div>

          {/* Results Grid */}
          <div className="case-study-results-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '80px',
          }}>
            {industry.results.map((result, i) => (
              <div key={i} style={{
                background: 'var(--surface-elevated)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                padding: '36px 24px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}>
                  {result.metric}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                }}>
                  {result.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="quote-section" style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <blockquote style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 500,
              lineHeight: 1.5,
              color: 'var(--text)',
              marginBottom: '40px',
              fontStyle: 'normal',
            }}>
              &ldquo;{industry.proofQuote}&rdquo;
            </blockquote>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent) 0%, #16a34a 100%)',
              }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '15px' }}>
                  {industry.proofAuthor}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {industry.proofRole}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          TECH STACK
          ===================== */}
      <section className="section-padding-lg" style={{ padding: '120px 80px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}>
              TECHNOLOGY
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--text)',
            }}>
              Tech stack we use for {industry.name.toLowerCase()}
            </h2>
          </div>

          <div className="case-study-tech-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}>
            {industry.techStack.map((tech, i) => (
              <div key={i} style={{
                padding: '32px',
                background: 'var(--surface-elevated)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'var(--accent-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--text)',
                  }}>
                    {tech.name}
                  </h3>
                </div>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  paddingLeft: '52px',
                }}>
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          FAQ
          ===================== */}
      <section className="section-padding-lg" style={{ padding: '120px 80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}>
              FAQ
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '16px',
            }}>
              Common questions about AI for {industry.name.toLowerCase()}
            </h2>
          </div>

          <FAQAccordion items={industry.faqs} />
        </div>
      </section>

      {/* =====================
          OTHER INDUSTRIES
          ===================== */}
      <section className="section-padding-lg" style={{ padding: '80px 80px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}>
              MORE INDUSTRIES
            </p>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--text)',
            }}>
              Explore AI automation for other industries
            </h2>
          </div>

          <div className="industries-list" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
          }}>
            {otherIndustries.map((other) => (
              <Link
                key={other.slug}
                href={`/industries/${other.slug}`}
                style={{
                  padding: '24px 28px',
                  background: 'var(--surface-elevated)',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
              >
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>
                    {other.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    AI Automation
                  </div>
                </div>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--text-muted)" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
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
              Ready to automate your {industry.name.toLowerCase()} business?
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              marginBottom: '40px',
              maxWidth: '500px',
              margin: '0 auto 40px',
            }}>
              Book a free consultation. We will map out exactly how AI automation can work for your specific operation.
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
