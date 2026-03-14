import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Features - Novasoft AI | The AI That Actually Does Things",
  description: "Browser control. Autonomous task execution. Self-connecting tools. See why Novasoft AI is the most advanced AI assistant ever built.",
  alternates: {
    canonical: 'https://novasoftai.com/features/',
  },
  openGraph: {
    title: "Features - Novasoft AI | The AI That Actually Does Things",
    description: "Browser control. Autonomous task execution. Self-connecting tools. See why Novasoft AI is the most advanced AI assistant ever built.",
    url: 'https://novasoftai.com/features/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Features - Novasoft AI",
    description: "Browser control. Autonomous task execution. Self-connecting tools.",
  },
};

export default function FeaturesPage() {
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
      <section className="features-hero" style={{ 
        padding: '140px 80px 100px',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '900px' }}>
          <p style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            marginBottom: '16px'
          }}>
            THE TECHNOLOGY
          </p>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '24px'
          }}>
            Not another chatbot.<br/>
            <span style={{ color: 'var(--accent)' }}>A digital worker.</span>
          </h1>
          <p style={{
            fontSize: '20px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '700px'
          }}>
            Most AI &quot;assistants&quot; just answer questions and make suggestions. 
            Novasoft AI opens apps, clicks buttons, fills forms, sends messages, and 
            completes tasks. Autonomously. This is the technology that makes it possible.
          </p>
        </div>
      </section>

      {/* Core Capability #1 - Browser Control */}
      <section className="features-section" style={{ padding: '80px 80px 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="features-two-col" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'var(--accent-dim)',
                borderRadius: '100px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--accent)',
                marginBottom: '24px'
              }}>
                CORE CAPABILITY
              </div>
              <h2 className="features-h2" style={{
                fontSize: '42px',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '20px',
                lineHeight: 1.1
              }}>
                Full Browser Control
              </h2>
              <p style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px'
              }}>
                Novasoft AI can see your screen and control your browser like a human would. 
                It navigates websites, reads content, clicks buttons, fills forms, and 
                completes multi-step processes across any website.
              </p>
              <p style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px'
              }}>
                No APIs required. No integrations to set up. If you can do it in a browser, 
                Novasoft AI can do it too.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Navigate any website autonomously',
                  'Fill out forms and submit applications',
                  'Extract data from web pages',
                  'Complete multi-step online processes',
                  'Work across tabs and windows',
                ].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    color: 'var(--text)',
                    marginBottom: '12px'
                  }}>
                    <svg width="18" height="18" fill="var(--accent)" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Demo visual */}
            <div style={{
              background: 'var(--surface-elevated)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              padding: '24px',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '20px'
              }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
              </div>
              <div style={{
                background: 'var(--surface)',
                borderRadius: '12px',
                padding: '20px',
                fontFamily: 'monospace',
                fontSize: '13px',
                lineHeight: 1.8,
                color: 'var(--text-secondary)'
              }}>
                <div style={{ color: 'var(--accent)' }}>→ Navigating to hubspot.com...</div>
                <div style={{ color: 'var(--text-muted)' }}>→ Logging in with saved credentials</div>
                <div style={{ color: 'var(--text-muted)' }}>→ Opening Contacts → All contacts</div>
                <div style={{ color: 'var(--text-muted)' }}>→ Filtering: Created this week</div>
                <div style={{ color: 'var(--text-muted)' }}>→ Found 47 new contacts</div>
                <div style={{ color: 'var(--text-muted)' }}>→ Opening first contact: John Smith</div>
                <div style={{ color: 'var(--text-muted)' }}>→ Adding follow-up note...</div>
                <div style={{ color: 'var(--accent)' }}>✓ 47/47 contacts updated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capability #2 - Self-Connecting Tools */}
      <section className="features-section-lg" style={{ padding: '120px 80px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="features-two-col" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            {/* Demo visual - Left side this time */}
            <div style={{
              background: 'var(--surface-elevated)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              padding: '32px'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>You say:</div>
                <div style={{
                  background: 'var(--accent)',
                  color: '#000',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  fontSize: '15px',
                  fontWeight: 500
                }}>
                  &quot;Connect to my Notion and find all tasks due this week&quot;
                </div>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>Novasoft AI:</div>
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  padding: '20px',
                  borderRadius: '16px',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'var(--text)'
                }}>
                  <div style={{ color: 'var(--accent)', marginBottom: '12px' }}>🔗 Connecting to Notion...</div>
                  <div style={{ marginBottom: '12px' }}>Found 3 workspaces. Using &quot;Work&quot; (most recent).</div>
                  <div style={{ marginBottom: '12px' }}>Scanning databases for tasks...</div>
                  <div style={{ color: 'var(--accent)' }}>✓ Found 12 tasks due this week:</div>
                  <ul style={{ margin: '8px 0 0 16px', padding: 0, color: 'var(--text-muted)' }}>
                    <li>Q4 Report Draft (Due: Tomorrow)</li>
                    <li>Client proposal review (Due: Wed)</li>
                    <li>Team sync prep (Due: Thu)</li>
                    <li style={{ color: 'var(--text-muted)' }}>...and 9 more</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'var(--accent-dim)',
                borderRadius: '100px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--accent)',
                marginBottom: '24px'
              }}>
                CORE CAPABILITY
              </div>
              <h2 className="features-h2" style={{
                fontSize: '42px',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '20px',
                lineHeight: 1.1
              }}>
                Self-Connecting to Any Tool
              </h2>
              <p style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px'
              }}>
                Just tell it what tools you use. Novasoft AI figures out how to connect, 
                authenticates securely, and starts working. No complex setup. No developer required.
              </p>
              <p style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px'
              }}>
                CRM, email, calendar, project management, spreadsheets, databases. 
                If it has a login, Novasoft AI can use it.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {['Salesforce', 'HubSpot', 'Google Workspace', 'Notion', 'Slack', 'Calendly', 'QuickBooks', 'Mailchimp', '+ 500 more'].map((tool, i) => (
                  <span key={i} style={{
                    padding: '8px 14px',
                    background: 'var(--surface-elevated)',
                    borderRadius: '8px',
                    fontSize: '13px',
                    color: tool.includes('+') ? 'var(--accent)' : 'var(--text-muted)',
                    border: '1px solid var(--border)'
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capability #3 - True Task Execution */}
      <section className="features-section-lg" style={{ padding: '120px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="features-two-col" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'var(--accent-dim)',
                borderRadius: '100px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--accent)',
                marginBottom: '24px'
              }}>
                CORE CAPABILITY
              </div>
              <h2 className="features-h2" style={{
                fontSize: '42px',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '20px',
                lineHeight: 1.1
              }}>
                True Task Execution
              </h2>
              <p style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px'
              }}>
                Other AI tools give you suggestions. Novasoft AI gives you results. 
                It doesn&apos;t tell you &quot;here&apos;s how to send that email.&quot; It sends the email.
              </p>
              <p style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px'
              }}>
                Every task is verified. Every action is logged. You stay in control 
                while the work gets done.
              </p>
              
              {/* Before/After comparison */}
              <div className="features-before-after" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{
                  padding: '20px',
                  background: 'rgba(239, 68, 68, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(239, 68, 68, 0.2)'
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#ef4444', marginBottom: '12px' }}>
                    OTHER AI
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    &quot;To update your CRM, you should log into Salesforce, navigate to contacts, and...&quot;
                  </div>
                </div>
                <div style={{
                  padding: '20px',
                  background: 'var(--accent-dim)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 197, 94, 0.3)'
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent)', marginBottom: '12px' }}>
                    NOVASOFT AI
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--text)', lineHeight: 1.5 }}>
                    &quot;Done. Updated 47 contacts in Salesforce. Added notes and set follow-up reminders.&quot;
                  </div>
                </div>
              </div>
            </div>
            
            {/* Task list visual */}
            <div style={{
              background: 'var(--surface-elevated)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              padding: '32px'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '20px' }}>
                Task Execution Log
              </div>
              {[
                { task: 'Send follow-up emails to 23 leads', status: 'done', time: '2m ago' },
                { task: 'Update CRM with call notes', status: 'done', time: '5m ago' },
                { task: 'Schedule 4 demo calls', status: 'done', time: '12m ago' },
                { task: 'Create invoice for Project Alpha', status: 'done', time: '18m ago' },
                { task: 'Research competitor pricing', status: 'working', time: 'now' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                  borderBottom: i < 4 ? '1px solid var(--border)' : 'none'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {item.status === 'done' ? (
                      <svg width="20" height="20" fill="var(--accent)" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: '2px solid var(--accent)',
                        borderTopColor: 'transparent',
                        animation: 'spin 1s linear infinite'
                      }} />
                    )}
                    <span style={{ fontSize: '14px', color: 'var(--text)' }}>{item.task}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="features-section-lg" style={{ 
        padding: '160px 80px',
        background: 'var(--surface)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '600px', marginBottom: '80px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              FULL FEATURE SET
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--text)',
              marginBottom: '16px'
            }}>
              Everything it can do
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              This isn&apos;t a list of promises. These are things Novasoft AI does every day for thousands of businesses.
            </p>
          </div>

          <div className="features-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { title: 'Email Management', desc: 'Reads, responds, drafts, sends. Handles your inbox like a skilled assistant.' },
              { title: 'Calendar Control', desc: 'Books meetings, sends invites, manages rescheduling. Syncs across all your calendars.' },
              { title: 'CRM Updates', desc: 'Logs calls, updates contacts, adds notes. Keeps your data clean without you lifting a finger.' },
              { title: 'Lead Response', desc: 'Responds to inquiries in seconds, 24/7. Qualifies leads before they even reach you.' },
              { title: 'Data Entry', desc: 'Extracts data, fills spreadsheets, updates databases. Zero typos, infinite patience.' },
              { title: 'Document Creation', desc: 'Creates reports, proposals, invoices. Formatted perfectly every time.' },
              { title: 'Web Research', desc: 'Finds information, compiles reports, monitors competitors. Hours of research in minutes.' },
              { title: 'Social Monitoring', desc: 'Tracks mentions, flags issues, drafts responses. Your brand reputation on autopilot.' },
              { title: 'Workflow Automation', desc: 'Chains tasks together. When X happens, do Y. Complex sequences handled automatically.' },
            ].map((feature, i) => (
              <div key={i} style={{
                padding: '32px',
                background: 'var(--surface-elevated)',
                borderRadius: '16px',
                border: '1px solid var(--border)'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="features-section-lg" style={{ 
        padding: '160px 80px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '500px', marginBottom: '80px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              HOW IT WORKS
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--text)',
              marginBottom: '16px'
            }}>
              Up and running in minutes
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              No developers. No IT department. No complex setup.
            </p>
          </div>

          <div className="features-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
            {[
              { num: '1', title: 'Tell It About Your Business', desc: 'What do you do? What tools do you use? How do you want it to sound? Five minutes of conversation and it understands your world.' },
              { num: '2', title: 'Connect Your Channels', desc: 'WhatsApp, Telegram, email, SMS. Pick where you want to communicate. It works through the apps you already use.' },
              { num: '3', title: 'Watch It Work', desc: 'Give it a task. Watch it execute. See the results. Then give it more. The more you use it, the better it gets.' },
            ].map((step) => (
              <div key={step.num}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'var(--accent-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--accent)' }}>{step.num}</span>
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '12px'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="features-cta-section" style={{ padding: '160px 80px', background: 'var(--surface)' }}>
        <div className="features-cta-box" style={{ 
          maxWidth: '900px', 
          margin: '0 auto',
          background: 'var(--surface-elevated)',
          borderRadius: '32px',
          border: '1px solid var(--border)',
          padding: '80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '200%',
            background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.08) 0%, transparent 60%)',
            pointerEvents: 'none'
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--text)',
              marginBottom: '16px'
            }}>
              Seeing is believing
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              marginBottom: '40px'
            }}>
              Watch Novasoft AI complete a real task for your business. Then decide.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
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
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.25)'
              }}>
                Get a Live Demo
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
