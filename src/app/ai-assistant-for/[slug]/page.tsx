import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getNicheBySlug, getAllSlugs, niches } from '@/data/niches';
import { BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup';

// Generate static params for all niches
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Disable fallback for unknown slugs
export const dynamicParams = false;

// Generate metadata for each niche page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const niche = getNicheBySlug(slug);
  
  if (!niche) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `AI Assistant for ${niche.name} | Novasoft AI`,
    description: `Your ${niche.name} AI assistant that ACTUALLY does stuff. ${niche.benefits[0]} ${niche.benefits[1]} Try free today.`,
    keywords: [...niche.keywords, 'AI assistant', 'automation', niche.industry],
    alternates: {
      canonical: `https://novasoftai.com/ai-assistant-for/${slug}/`,
    },
    openGraph: {
      title: `AI Assistant for ${niche.name} | Novasoft AI`,
      description: `Your ${niche.name} AI assistant that ACTUALLY does stuff. ${niche.benefits[0]}`,
      type: 'website',
      url: `https://novasoftai.com/ai-assistant-for/${slug}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `AI Assistant for ${niche.name}`,
      description: `Your ${niche.name} AI assistant that ACTUALLY does stuff.`,
    },
  };
}

export default async function NichePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const niche = getNicheBySlug(slug);
  
  if (!niche) {
    notFound();
  }

  // Get related niches from same industry
  const relatedNiches = niches
    .filter(n => n.industry === niche.industry && n.slug !== niche.slug)
    .slice(0, 6);

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
      
      {/* ============================================
          HERO - Niche-Specific with Chat Preview
          ============================================ */}
      <section style={{ 
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '80px',
        padding: '120px 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '80%',
          height: '150%',
          background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        
        {/* Left Column - Typography */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
            fontSize: '14px',
            color: 'var(--text-muted)'
          }}>
            <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/use-cases" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>AI Assistant For</Link>
            <span>/</span>
            <span style={{ color: 'var(--text)' }}>{niche.name}</span>
          </div>
          
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '32px',
            padding: '8px 16px 8px 10px',
            background: 'var(--accent-dim)',
            borderRadius: '100px',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.02em'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 8px var(--accent)'
            }} />
            BUILT FOR {niche.industry.toUpperCase()}
          </div>
          
          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            fontFamily: 'var(--font-display)'
          }}>
            <span style={{ display: 'block', color: 'var(--text)' }}>AI Assistant for</span>
            <span style={{ 
              display: 'block',
              background: 'linear-gradient(135deg, var(--accent) 0%, #16a34a 50%, #15803d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>{niche.name}</span>
          </h1>
          
          {/* Subhead */}
          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '480px',
            marginBottom: '40px'
          }}>
            Stop drowning in busywork. Your AI assistant handles {niche.useCases[0].toLowerCase()}, {niche.useCases[1].toLowerCase()}, and more. 24/7. Automatically.
          </p>
          
          {/* CTA Group */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
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
              transition: 'transform 0.2s',
              boxShadow: '0 0 40px rgba(34, 197, 94, 0.25)'
            }}>
              Start Free Trial
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/features" style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '18px 32px',
              background: 'transparent',
              color: 'var(--text)',
              fontWeight: 500,
              fontSize: '15px',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              textDecoration: 'none'
            }}>
              See How It Works
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '32px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border)'
          }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)' }}>24/7</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Always on</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'var(--border)' }} />
            <div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)' }}>2min</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Avg response</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'var(--border)' }} />
            <div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)' }}>500+</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Tools integrated</div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Chat Preview */}
        <div style={{ position: 'relative' }}>
          <div style={{
            background: 'var(--surface-elevated)',
            borderRadius: '24px',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)',
            transform: 'rotate(2deg)',
            maxWidth: '440px',
            marginLeft: 'auto'
          }}>
            {/* Chat Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--accent) 0%, #16a34a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '15px' }}>Your {niche.name} AI</div>
                <div style={{ fontSize: '12px', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
                  Working autonomously
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* User */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{
                  background: 'var(--accent)',
                  color: '#000',
                  padding: '14px 18px',
                  borderRadius: '18px 18px 4px 18px',
                  fontSize: '14px',
                  fontWeight: 500,
                  maxWidth: '85%'
                }}>
                  {niche.useCases[0]}
                </div>
              </div>
              
              {/* AI Response */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  padding: '16px 20px',
                  borderRadius: '18px 18px 18px 4px',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  maxWidth: '90%'
                }}>
                  <p style={{ margin: '0 0 12px 0', color: 'var(--accent)' }}>✓ Done! Here&apos;s what I did:</p>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
                    • {niche.benefits[0]}<br/>
                    • {niche.benefits[1]}
                  </div>
                  <p style={{ margin: '12px 0 0 0', color: 'var(--accent)' }}>Anything else you need?</p>
                </div>
              </div>
              
              {/* User */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{
                  background: 'var(--accent)',
                  color: '#000',
                  padding: '14px 18px',
                  borderRadius: '18px 18px 4px 18px',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  Perfect, thanks!
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div style={{
            position: 'absolute',
            top: '-40px',
            right: '40px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }} />
        </div>
      </section>

      {/* ============================================
          PAIN POINTS - What they're dealing with
          ============================================ */}
      <section style={{ 
        padding: '120px 80px',
        background: 'linear-gradient(180deg, var(--surface) 0%, transparent 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              SOUND FAMILIAR?
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '16px'
            }}>
              {niche.name} professionals deal with this every day
            </h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '16px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {niche.painPoints.map((pain, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.15)'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {pain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SOLUTION - How Novasoft helps
          ============================================ */}
      <section style={{ padding: '120px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              THE SOLUTION
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '16px'
            }}>
              Here&apos;s how Novasoft AI helps
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Your AI assistant handles the busywork so you can focus on what matters
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '16px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {niche.benefits.map((benefit, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '24px',
                borderRadius: '16px',
                background: 'var(--accent-dim)',
                border: '1px solid rgba(34, 197, 94, 0.2)'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text)', lineHeight: 1.5, margin: 0 }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          USE CASES - Specific Tasks
          ============================================ */}
      <section style={{ padding: '120px 80px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              WHAT IT DOES
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '16px'
            }}>
              Specific tasks your AI handles
            </h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px' 
          }}>
            {niche.useCases.map((useCase, index) => (
              <div key={index} style={{
                padding: '32px',
                borderRadius: '16px',
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--accent-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent)' }}>{index + 1}</span>
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text)', lineHeight: 1.5, margin: 0 }}>
                  {useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          COMPARISON - Other AI vs Novasoft
          ============================================ */}
      <section style={{ padding: '120px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            marginBottom: '16px'
          }}>
            THIS IS DIFFERENT
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: '64px'
          }}>
            Other AI talks. <span style={{ color: 'var(--accent)' }}>Ours does.</span>
          </h2>
          
          {/* Comparison */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{
              padding: '40px',
              borderRadius: '20px',
              background: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.2)'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#ef4444', marginBottom: '24px' }}>
                ❌ OTHER AI ASSISTANTS
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                {[
                  `"Here's how to handle ${niche.useCases[0].toLowerCase()}"`,
                  '"I can help you draft that message"',
                  '"Let me explain the process"',
                  '"I recommend you do X, Y, Z..."',
                ].map((item, i) => (
                  <li key={i} style={{ 
                    fontSize: '15px', 
                    color: 'var(--text-muted)', 
                    marginBottom: '12px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{
              padding: '40px',
              borderRadius: '20px',
              background: 'var(--accent-dim)',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--accent)', marginBottom: '24px' }}>
                ✓ NOVASOFT AI
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                {[
                  `"Done. ${niche.benefits[0]}"`,
                  '"Message sent. Here\'s what I wrote."',
                  '"Task completed. Moving to the next one."',
                  '"All handled. Here\'s the summary."',
                ].map((item, i) => (
                  <li key={i} style={{ 
                    fontSize: '15px', 
                    color: 'var(--text)', 
                    marginBottom: '12px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIAL
          ============================================ */}
      <section style={{ padding: '120px 80px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <blockquote style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 500,
            lineHeight: 1.4,
            color: 'var(--text)',
            marginBottom: '40px',
            fontStyle: 'normal'
          }}>
            &ldquo;Novasoft AI changed how we run our {niche.name.toLowerCase()} business. 
            We respond to every lead instantly now and our conversion rate has doubled.&rdquo;
          </blockquote>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent) 0%, #16a34a 100%)'
            }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '16px' }}>Happy {niche.name} Professional</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{niche.industry} Industry</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          RELATED INDUSTRIES
          ============================================ */}
      {relatedNiches.length > 0 && (
        <section style={{ padding: '120px 80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '8px'
              }}>
                More {niche.industry} solutions
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px'
            }}>
              {relatedNiches.map((related) => (
                <Link 
                  key={related.slug}
                  href={`/ai-assistant-for/${related.slug}`}
                  style={{
                    padding: '20px 24px',
                    background: 'var(--surface-elevated)',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)' }}>
                    {related.name}
                  </span>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--text-muted)" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section style={{ padding: '120px 80px', background: 'var(--surface)' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          background: 'linear-gradient(135deg, var(--surface-elevated) 0%, var(--surface) 100%)',
          borderRadius: '32px',
          border: '1px solid var(--border)',
          padding: '80px 60px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative gradient */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '60%',
            height: '200%',
            background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.08) 0%, transparent 60%)',
            pointerEvents: 'none'
          }} />
          
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '24px'
            }}>
              Ready to transform your {niche.name.toLowerCase()} business?
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '40px'
            }}>
              Join thousands of {niche.name.toLowerCase()} professionals already using Novasoft AI. 
              Start your free trial today.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
                Start Free Trial
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/pricing" style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '18px 32px',
                background: 'transparent',
                color: 'var(--text)',
                fontWeight: 500,
                fontSize: '15px',
                textDecoration: 'none'
              }}>
                View Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `AI Assistant for ${niche.name}`,
            "description": `Your ${niche.name} AI assistant that ACTUALLY does stuff. ${niche.benefits[0]}`,
            "brand": {
              "@type": "Brand",
              "name": "Novasoft AI"
            },
            "category": niche.industry,
            "url": `https://novasoftai.com/ai-assistant-for/${niche.slug}/`,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://novasoftai.com/' },
        { name: 'Use Cases', url: 'https://novasoftai.com/use-cases/' },
        { name: niche.name, url: `https://novasoftai.com/ai-assistant-for/${niche.slug}/` },
      ]} />
      <FAQSchema items={[
        {
          question: `What can an AI assistant do for ${niche.name}?`,
          answer: `Novasoft AI can ${niche.useCases.map(u => u.toLowerCase()).join(', ')}. It works autonomously 24/7, handling tasks that would normally require manual effort.`,
        },
        {
          question: `How does Novasoft AI help ${niche.name} businesses?`,
          answer: niche.benefits.join(' '),
        },
        {
          question: `Is Novasoft AI suitable for ${niche.industry} businesses?`,
          answer: `Yes. Novasoft AI is pre-trained for ${niche.industry} workflows and understands ${niche.name}-specific tasks. It connects to your existing tools and starts working from day one.`,
        },
        {
          question: `What are common challenges for ${niche.name} that AI can solve?`,
          answer: niche.painPoints.join(' '),
        },
      ]} />
    </div>
  );
}
