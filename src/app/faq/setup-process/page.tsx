import Link from 'next/link';
import { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: "How AI Automation Setup Works | Novasoft AI Onboarding Guide",
  description: "Step-by-step guide to getting started with AI automation. Learn about the onboarding process, timeline, integrations, and what to expect when setting up Novasoft AI.",
  keywords: ["ai automation setup", "ai onboarding process", "how to set up ai chatbot", "ai implementation timeline", "business automation setup"],
  alternates: {
    canonical: 'https://novasoftai.com/faq/setup-process/',
  },
  openGraph: {
    title: "How AI Automation Setup Works | Novasoft AI",
    description: "Step-by-step guide to getting started with AI automation. Learn about onboarding, timeline, and what to expect.",
    url: 'https://novasoftai.com/faq/setup-process/',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "How AI Automation Setup Works",
    description: "Step-by-step guide to setting up AI automation for your business.",
  },
};

const setupFAQs = [
  {
    question: "How long does the entire setup take?",
    answer: "Most businesses are live within 5 to 10 business days from the initial strategy call. This includes discovery, configuration, testing, and launch. More complex setups with many integrations or custom workflows may take 2 to 3 weeks. We always give you a clear timeline before starting."
  },
  {
    question: "Do I need to provide any technical information?",
    answer: "Just your login credentials for the tools you want connected (CRM, calendar, email, etc.) and information about how your business operates. You do not need to know anything about APIs, databases, or code. We handle all the technical work."
  },
  {
    question: "What if I use tools you have not worked with before?",
    answer: "We have integrated with hundreds of different platforms, but if yours is new to us, our team will research it and build the connection. If a tool has a web interface or an API, we can almost certainly connect to it. We will let you know upfront if there are any limitations."
  },
  {
    question: "Can I make changes after launch?",
    answer: "Absolutely. Your AI is never set in stone. You can request workflow changes, add new integrations, adjust response styles, and update business rules at any time. Our support team handles these updates for you, and many adjustments are included in your plan."
  },
  {
    question: "What happens if something goes wrong during setup?",
    answer: "We test everything extensively before launch. Every workflow is tested with real scenarios, and we run a soft launch period where the AI handles real interactions with human oversight. If anything needs adjustment, we fix it before going fully live. You are never left with a broken system."
  },
  {
    question: "Do I need to train my team on the new system?",
    answer: "We provide a walkthrough session for you and your team as part of onboarding. The AI handles most tasks autonomously, so there is very little your team needs to learn. We also provide documentation and ongoing support if any questions come up later."
  },
];

function SetupFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": setupFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function SetupProcessPage() {
  const steps = [
    {
      num: '01',
      title: 'Discovery Call',
      duration: 'Day 1',
      description: 'We start with a 30-minute strategy session to understand your business inside and out. What tools do you use? Where are you losing time? What tasks do you wish someone else could handle? This call gives us everything we need to build your custom AI setup.',
    },
    {
      num: '02',
      title: 'Workflow Mapping',
      duration: 'Days 2-3',
      description: 'Our team maps out every workflow the AI will handle. Lead follow-up sequences, appointment booking logic, customer response templates, escalation rules. We document everything and share the plan with you for approval before we start building.',
    },
    {
      num: '03',
      title: 'Build and Configure',
      duration: 'Days 3-7',
      description: 'This is where the magic happens. We connect your tools, configure AI workflows, train the AI on your brand voice and business rules, and set up all automations. Your CRM, calendar, email, and any other tools are integrated and tested.',
    },
    {
      num: '04',
      title: 'Testing Phase',
      duration: 'Days 7-9',
      description: 'We run every workflow through real-world scenarios. Incoming leads, customer questions, appointment requests, edge cases. We test until everything works flawlessly. You review the results and request any adjustments.',
    },
    {
      num: '05',
      title: 'Soft Launch',
      duration: 'Day 9-10',
      description: 'The AI goes live with human oversight. Real customers interact with your AI while our team monitors every conversation. Any issues are caught and fixed immediately. This phase ensures a smooth transition with zero risk to your business.',
    },
    {
      num: '06',
      title: 'Full Launch and Optimization',
      duration: 'Day 10+',
      description: 'Your AI is fully operational and running autonomously 24/7. But we do not just walk away. We monitor performance, optimize responses based on real data, and continuously improve your setup. Regular check-ins keep everything running at peak performance.',
    },
  ];

  return (
    <>
      <SetupFAQSchema />
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

        {/* Breadcrumb */}
        <section style={{ padding: '120px 80px 0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <Link href="/faq" style={{ color: 'var(--accent)', textDecoration: 'none' }}>FAQ</Link>
              <span>/</span>
              <span style={{ color: 'var(--text-secondary)' }}>Setup Process</span>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="section-padding" style={{ padding: '40px 80px 80px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              ONBOARDING GUIDE
            </p>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: '24px'
            }}>
              How AI automation setup <span style={{ color: 'var(--accent)' }}>works</span>
            </h1>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
            }}>
              From your first call to a fully operational AI assistant in under two weeks. Here is exactly what the process looks like, step by step.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="section-padding" style={{ padding: '0 80px 80px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <article style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '16px', letterSpacing: '-0.01em' }}>
                Why proper setup matters
              </h2>
              <p style={{ marginBottom: '24px' }}>
                The difference between AI that works and AI that frustrates everyone comes down to setup. A poorly configured chatbot gives generic responses, misses context, and drives customers away. A properly configured AI assistant feels like a knowledgeable team member who understands your business, your customers, and your workflows.
              </p>
              <p style={{ marginBottom: '24px' }}>
                That is why we invest significant time upfront in understanding your business before writing a single line of configuration. The result is an AI that sounds like your brand, follows your rules, and delivers real results from day one.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                The 6-step onboarding process
              </h2>
              <p style={{ marginBottom: '32px' }}>
                We have refined our setup process over hundreds of implementations. Every step is designed to minimize disruption to your business while maximizing the quality of your AI assistant.
              </p>

            </article>

            {/* Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              {steps.map((step) => (
                <div key={step.num} style={{
                  background: 'var(--surface-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '32px',
                  display: 'flex',
                  gap: '24px',
                }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'var(--accent-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      fontFamily: 'monospace',
                    }}>
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                        {step.title}
                      </h3>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        background: 'var(--accent-dim)',
                        padding: '4px 10px',
                        borderRadius: '100px',
                      }}>
                        {step.duration}
                      </span>
                    </div>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <article style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                What you need to prepare
              </h2>
              <p style={{ marginBottom: '16px' }}>
                We handle all the technical work, but there are a few things that help the process go smoothly:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><strong style={{ color: 'var(--text)' }}>Login credentials</strong> for the tools you want integrated (CRM, calendar, email platform, etc.)</li>
                <li><strong style={{ color: 'var(--text)' }}>Examples of how you communicate</strong> with customers (email templates, scripts, common responses)</li>
                <li><strong style={{ color: 'var(--text)' }}>Your business rules</strong> like pricing, availability, service areas, and escalation procedures</li>
                <li><strong style={{ color: 'var(--text)' }}>30 minutes for the discovery call</strong> and another 30 minutes for the launch review</li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                After launch: continuous improvement
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Setup is not the finish line. It is the starting line. Once your AI is live, we actively monitor how it performs with real customers. We track metrics like response accuracy, booking rates, customer satisfaction, and conversion rates. Then we use that data to make your AI smarter every week.
              </p>
              <p style={{ marginBottom: '24px' }}>
                You also get regular performance reports so you can see exactly what your AI is doing and the impact it is having on your business. If you want changes or new workflows added, our team handles it. You focus on running your business while we make sure your AI keeps getting better.
              </p>

            </article>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="section-padding" style={{ padding: '0 80px 80px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: '32px',
              letterSpacing: '-0.01em',
            }}>
              Setup questions answered
            </h2>
            <FAQAccordion items={setupFAQs} />
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ padding: '0 80px 160px' }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'var(--surface-elevated)',
            borderRadius: '24px',
            border: '1px solid var(--border)',
            padding: '64px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: '60%',
              height: '200%',
              background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.06) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{
                fontSize: '28px',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '16px',
                lineHeight: 1.2,
              }}>
                Ready to get started?
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '32px',
                maxWidth: '450px',
                margin: '0 auto 32px',
              }}>
                Your AI assistant could be live in under two weeks. Let us show you how the process works for your business.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                  boxShadow: '0 0 40px rgba(34, 197, 94, 0.25)',
                }}>
                  Start Onboarding
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
                    textDecoration: 'none',
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
    </>
  );
}
