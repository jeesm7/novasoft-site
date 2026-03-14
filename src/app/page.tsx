import Link from 'next/link';

// Curated diverse high-ticket industries
const featuredIndustries = [
  { slug: 'real-estate-agents', name: 'Real Estate Agents', industry: 'Real Estate' },
  { slug: 'property-management', name: 'Property Management', industry: 'Real Estate' },
  { slug: 'solar-installers', name: 'Solar Installers', industry: 'Home Services' },
  { slug: 'hvac', name: 'HVAC Companies', industry: 'Home Services' },
  { slug: 'roofing-companies', name: 'Roofing Companies', industry: 'Home Services' },
  { slug: 'dental-offices', name: 'Dental Offices', industry: 'Healthcare' },
  { slug: 'law-firms', name: 'Law Firms', industry: 'Legal' },
  { slug: 'chiropractors', name: 'Chiropractors', industry: 'Healthcare' },
  { slug: 'plumbing', name: 'Plumbing Companies', industry: 'Home Services' },
  { slug: 'personal-injury-lawyers', name: 'Personal Injury Lawyers', industry: 'Legal' },
];

export default function Home() {
  const featuredNiches = featuredIndustries;
  
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
          HERO - Asymmetric Split Layout
          Left: Bold typography stack
          Right: Floating chat preview
          ============================================ */}
      <section className="hero-grid" style={{ 
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
            NOT A CHATBOT. AN AUTONOMOUS AI.
          </div>
          
          {/* Headline - Dramatic Scale */}
          <h1 style={{
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            marginBottom: '32px',
            fontFamily: 'var(--font-display)'
          }}>
            <span style={{ display: 'block', color: 'var(--text)' }}>AI that actually</span>
            <span style={{ 
              display: 'block',
              background: 'linear-gradient(135deg, var(--accent) 0%, #16a34a 50%, #15803d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>does the work.</span>
          </h1>
          
          {/* Subhead - Refined contrast */}
          <p style={{
            fontSize: '20px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '480px',
            marginBottom: '48px'
          }}>
            Tell it to book appointments. It opens your calendar and books them. 
            Tell it to update your CRM. It logs in and updates it. 
            This AI doesn&apos;t just respond. It takes action.
          </p>
          
          {/* CTA Group */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '64px', flexWrap: 'wrap' }}>
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
              See It In Action
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
          
          {/* Social Proof - Horizontal line */}
          <div className="hero-stats" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '32px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)'
          }}>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text)' }}>10M+</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Tasks completed</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'var(--border)' }} />
            <div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text)' }}>500+</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Tools it can use</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'var(--border)' }} />
            <div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text)' }}>24/7</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Autonomous work</div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Chat Preview */}
        <div className="hero-chat-preview" style={{ position: 'relative' }}>
          {/* Floating chat window */}
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
                <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '15px' }}>Novasoft AI</div>
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
                  Connect to my HubSpot and follow up with all leads from this week
                </div>
              </div>
              
              {/* AI */}
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
                  <p style={{ margin: '0 0 12px 0', color: 'var(--accent)' }}>🔗 Connecting to HubSpot...</p>
                  <p style={{ margin: '0 0 12px 0' }}>Done. Found 47 leads from this week:</p>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
                    • Sent 23 pricing follow-ups<br/>
                    • Scheduled 15 demo calls<br/>
                    • Re-engaged 9 cold leads
                  </div>
                  <p style={{ margin: '12px 0 0 0', color: 'var(--accent)' }}>8 already replied. Booking calls now →</p>
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
                  Perfect. Also check my inbox for urgent stuff
                </div>
              </div>
              
              {/* AI */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  padding: '16px 20px',
                  borderRadius: '18px 18px 18px 4px',
                  fontSize: '14px'
                }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> Found 3 urgent emails. Drafted responses and flagged for your review.
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
          THE DIFFERENCE - Why this isn't a chatbot
          ============================================ */}
      <section className="section-padding" style={{ 
        padding: '120px 80px',
        background: 'linear-gradient(180deg, var(--surface) 0%, transparent 100%)'
      }}>
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
            marginBottom: '24px',
            maxWidth: '800px',
            margin: '0 auto 24px'
          }}>
            Other AI assistants answer questions.<br/>
            This one <span style={{ color: 'var(--accent)' }}>does the work</span>.
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 64px'
          }}>
            Novasoft AI doesn&apos;t just talk. It opens websites, fills out forms, 
            navigates apps, sends emails, books appointments, and completes tasks. 
            Autonomously. While you sleep.
          </p>
          
          {/* Comparison */}
          <div className="comparison-grid" style={{ 
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
                  '"I can help you draft that email"',
                  '"Here\'s how to update your CRM"',
                  '"I recommend scheduling a call"',
                  '"Let me explain the process"',
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
                  '"Email sent. Here\'s what I wrote."',
                  '"CRM updated. Added notes to all 47 contacts."',
                  '"Call scheduled. Sent calendar invite."',
                  '"Done. Moving to the next task."',
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
          CAPABILITIES - The real superpowers
          ============================================ */}
      <section className="section-padding-lg" style={{ 
        padding: '160px 80px',
        background: 'var(--surface)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Section Header - Left aligned, not centered */}
          <div className="section-header" style={{ maxWidth: '600px', marginBottom: '120px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              CAPABILITIES
            </p>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '24px'
            }}>
              The most advanced AI assistant ever built
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)'
            }}>
              Not hype. Real capabilities that change how work gets done.
            </p>
          </div>
          
          {/* Feature List - Large format, alternating */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
            {[
              { num: '01', title: 'Browser Control', desc: 'Tell it to do something online and watch it happen. It navigates websites, fills forms, clicks buttons, and completes tasks in your browser. Like having a human at the keyboard, but faster.', highlight: 'Autonomous browsing' },
              { num: '02', title: 'Self-Connecting Tools', desc: 'Say "connect to my Salesforce" and it figures out how. No API setup. No integrations to configure. Just tell it what tools you use and it handles the rest.', highlight: '500+ tools' },
              { num: '03', title: 'True Task Execution', desc: 'This isn\'t "let me help you with that." This is "done." Send emails, update spreadsheets, create documents, book meetings. Actually completed, not just suggested.', highlight: 'Real work' },
              { num: '04', title: '24/7 Autonomous Operation', desc: 'Works while you sleep. Responds to leads at 3am. Follows up on Monday morning before you wake up. Never needs a break, never misses a deadline.', highlight: 'Always working' },
            ].map((feature, i) => (
              <div key={feature.num} className="feature-row" style={{
                display: 'grid',
                gridTemplateColumns: '100px 1fr 200px',
                gap: '60px',
                padding: '48px 0',
                background: 'var(--surface)',
                alignItems: 'center'
              }}>
                <span className="feature-num" style={{ 
                  fontSize: '14px', 
                  fontWeight: 600, 
                  color: 'var(--text-muted)',
                  fontFamily: 'monospace'
                }}>
                  {feature.num}
                </span>
                <div>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '8px'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    maxWidth: '500px'
                  }}>
                    {feature.desc}
                  </p>
                </div>
                <div className="feature-highlight" style={{
                  padding: '12px 20px',
                  background: 'var(--accent-dim)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  textAlign: 'center'
                }}>
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          USE CASES - What it actually does
          ============================================ */}
      <section className="section-padding-lg" style={{ padding: '160px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              REAL EXAMPLES
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '16px'
            }}>
              Things you can actually say to it
            </h2>
          </div>
          
          <div className="use-cases-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '20px' 
          }}>
            {[
              { task: '"Follow up with everyone who opened my email but didn\'t reply"', result: 'Checks your email analytics, identifies non-responders, sends personalized follow-ups' },
              { task: '"Find me 50 HVAC companies in Texas and add them to my spreadsheet"', result: 'Searches the web, extracts company info, populates your Google Sheet' },
              { task: '"Reschedule all my Friday meetings to next week"', result: 'Opens your calendar, contacts each attendee, confirms new times' },
              { task: '"Check if any customers complained on social media today"', result: 'Monitors mentions, flags negative sentiment, drafts response suggestions' },
              { task: '"Create an invoice for the Johnson project and send it"', result: 'Generates invoice, attaches to email, sends to client' },
              { task: '"Book a flight to Miami for under $400 next Thursday"', result: 'Searches airlines, finds options, presents best deals for booking' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '32px',
                borderRadius: '16px',
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '16px',
                  lineHeight: 1.4
                }}>
                  {item.task}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border)'
                }}>
                  {item.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          INDUSTRIES - Compact, Dense Grid
          Shows breadth without being boring
          ============================================ */}
      <section className="section-padding-lg" style={{ padding: '160px 80px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="industries-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr',
            gap: '80px',
            alignItems: 'start'
          }}>
            {/* Left - Sticky header */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                marginBottom: '16px'
              }}>
                INDUSTRIES
              </p>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                marginBottom: '24px'
              }}>
                Pre-trained for your industry
              </h2>
              <p style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '32px'
              }}>
                Already knows your workflows, your tools, your pain points. Starts working day one.
              </p>
              <Link href="/use-cases" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '15px',
                fontWeight: 600,
                color: 'var(--accent)',
                textDecoration: 'none'
              }}>
                View all industries
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            {/* Right - Industry grid */}
            <div className="industries-list" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px'
            }}>
              {featuredNiches.map((niche) => (
                <Link 
                  key={niche.slug}
                  href={`/${niche.slug}`}
                  style={{
                    padding: '24px 28px',
                    background: 'var(--surface-elevated)',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'border-color 0.2s, background 0.2s'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>
                      {niche.name}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      {niche.industry}
                    </div>
                  </div>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--text-muted)" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIAL - Single, Impactful Quote
          ============================================ */}
      <section className="section-padding-lg quote-section" style={{ 
        padding: '160px 80px'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          {/* Large quote */}
          <blockquote style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 500,
            lineHeight: 1.4,
            color: 'var(--text)',
            marginBottom: '48px',
            fontStyle: 'normal'
          }}>
            &ldquo;I told it to handle my lead follow-up. Two hours later, I had 12 appointments booked. 
            It didn&apos;t just help me. It did the entire job while I was on another call.&rdquo;
          </blockquote>
          
          {/* Attribution */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
            }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '16px' }}>Marcus Chen</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Founder, Chen Solar Solutions</div>
            </div>
          </div>
          
          {/* Book a Call CTA after testimonial */}
          <div style={{ marginTop: '48px' }}>
            <a
              href="https://cal.com/jess-mason/intro-call?overlayCalendar=true"
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
                textDecoration: 'none'
              }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Call
            </a>
          </div>

          {/* Company logos row */}
          <div style={{ 
            marginTop: '48px',
            paddingTop: '48px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '64px',
            opacity: 0.4
          }}>
            {['Trusted by 2,000+ businesses who wanted AI that actually works'].map((text) => (
              <span key={text} style={{ fontSize: '14px', color: 'var(--text)', letterSpacing: '0.05em' }}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA - Simple, Bold
          ============================================ */}
      <section className="section-padding-lg" style={{ padding: '160px 80px', background: 'var(--surface)' }}>
        <div className="cta-box" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          background: 'linear-gradient(135deg, var(--surface-elevated) 0%, var(--surface) 100%)',
          borderRadius: '32px',
          border: '1px solid var(--border)',
          padding: '100px 80px',
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
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '24px'
            }}>
              Ready to stop doing work that a machine can do?
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '48px'
            }}>
              This is genuinely different from every AI tool you&apos;ve tried. 
              See it work. Then decide.
            </p>
            <div className="cta-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '20px 36px',
                background: 'var(--accent)',
                color: '#000',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.25)'
              }}>
                Get a Demo
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
                  padding: '20px 36px',
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
        </div>
      </section>

    </div>
  );
}
