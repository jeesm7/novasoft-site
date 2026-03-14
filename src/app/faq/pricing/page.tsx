import Link from 'next/link';
import { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: "How Much Does AI Automation Cost? | Novasoft AI Pricing FAQ",
  description: "Transparent breakdown of AI automation pricing for small businesses. Learn what affects cost, what's included, and how to get the best ROI from your AI investment.",
  keywords: ["ai automation cost", "ai chatbot pricing", "ai assistant cost", "business automation pricing", "how much does ai automation cost"],
  alternates: {
    canonical: 'https://novasoftai.com/faq/pricing/',
  },
  openGraph: {
    title: "How Much Does AI Automation Cost? | Novasoft AI",
    description: "Transparent breakdown of AI automation pricing for small businesses. Learn what affects cost, what's included, and how to get the best ROI.",
    url: 'https://novasoftai.com/faq/pricing/',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Much Does AI Automation Cost?",
    description: "Transparent AI automation pricing for small businesses.",
  },
};

const pricingFAQs = [
  {
    question: "What is the typical monthly cost for AI automation?",
    answer: "Most small businesses invest between $500 and $2,000 per month depending on the complexity of their workflows, number of integrations, and volume of customer interactions. This replaces the cost of hiring additional staff, which would run $3,000 to $5,000+ per month for even a part-time employee."
  },
  {
    question: "Is there a one-time setup fee?",
    answer: "Yes. The onboarding fee covers building your custom AI workflows, connecting your tools, training the AI on your business, and comprehensive testing. This is a one-time investment that ensures your AI works flawlessly from day one. The fee varies based on the complexity of your setup."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. We offer month-to-month plans with no long-term commitment required. If you choose annual billing, you get a discount, but monthly plans give you full flexibility. We require 30 days notice for cancellation."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "We stand behind our product. If your AI assistant is not delivering measurable results within the first 30 days of launch, we will work with you to fix it at no extra cost. Our goal is your success, not just a sale."
  },
  {
    question: "Are there any hidden fees?",
    answer: "None. Your monthly plan covers AI operation, tool integrations, support, and regular optimization. The only additional costs would be if you request major new workflow additions beyond your original scope, and we always discuss pricing before starting any extra work."
  },
  {
    question: "What is the ROI I can expect?",
    answer: "Most of our clients see a return within the first month. A single AI-booked appointment or recovered lead can pay for the entire monthly cost. Businesses that rely on lead follow-up typically see 3 to 10 times their investment in new revenue within the first 90 days."
  },
];

function PricingFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pricingFAQs.map(faq => ({
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

export default function PricingFAQPage() {
  return (
    <>
      <PricingFAQSchema />
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
              <span style={{ color: 'var(--text-secondary)' }}>Pricing</span>
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
              PRICING GUIDE
            </p>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: '24px'
            }}>
              How much does AI automation <span style={{ color: 'var(--accent)' }}>actually cost?</span>
            </h1>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
            }}>
              The honest answer to the most common question we hear from business owners exploring AI for the first time.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="section-padding" style={{ padding: '0 80px 80px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <article style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                The real cost of not automating
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Before we talk about what AI automation costs, consider what you are already paying. Every missed call, slow response, or forgotten follow-up is costing you real money. Studies show that responding to a lead within 5 minutes makes you 21 times more likely to close the deal. Most businesses take hours or even days.
              </p>
              <p style={{ marginBottom: '24px' }}>
                A full-time receptionist costs $35,000 to $45,000 per year. A sales development rep runs $50,000 to $70,000. These people work 8 hours a day, 5 days a week, and they need breaks, vacations, and benefits. AI works 24/7/365 for a fraction of that cost.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                What determines your price
              </h2>
              <p style={{ marginBottom: '16px' }}>
                AI automation pricing is not one-size-fits-all. Several factors influence the cost:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><strong style={{ color: 'var(--text)' }}>Number of integrations.</strong> Connecting to 2 tools costs less than connecting to 10. Each integration requires configuration and testing.</li>
                <li><strong style={{ color: 'var(--text)' }}>Complexity of workflows.</strong> Simple appointment booking is different from a multi-step lead qualification pipeline with branching logic.</li>
                <li><strong style={{ color: 'var(--text)' }}>Volume of interactions.</strong> A business handling 100 customer conversations per month has different needs than one handling 5,000.</li>
                <li><strong style={{ color: 'var(--text)' }}>Voice AI requirements.</strong> Adding phone-based AI agents increases the scope and cost compared to text-only automation.</li>
                <li><strong style={{ color: 'var(--text)' }}>Custom training.</strong> The more specialized your business, the more training the AI needs to represent your brand accurately.</li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                What you get for your investment
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Every Novasoft AI plan includes:
              </p>
              <div style={{
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '32px',
                marginBottom: '24px',
              }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Custom AI setup and configuration tailored to your business',
                    'Integration with your existing tools (CRM, calendar, email, etc.)',
                    '24/7 autonomous operation with no downtime',
                    'Ongoing AI optimization based on real performance data',
                    'Dedicated support team for questions and adjustments',
                    'Regular performance reports showing ROI metrics',
                    'All platform updates and improvements included',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                Comparing AI to hiring
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Think about what you would pay a human employee to do the same tasks. A dedicated customer service rep costs at minimum $3,000 per month and works limited hours. AI automation starts at a fraction of that cost and works around the clock. It never calls in sick. It never has a bad day. It handles 50 conversations as easily as 5.
              </p>
              <p style={{ marginBottom: '24px' }}>
                The math is straightforward. If your AI books just 2 to 3 extra appointments per month that convert to paying customers, it pays for itself. Most businesses see far more than that.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                How to get started
              </h2>
              <p style={{ marginBottom: '24px' }}>
                The best way to understand your exact pricing is to book a free consultation. We will look at your current workflows, identify the biggest opportunities for automation, and give you a clear, transparent quote with no surprises. There is zero pressure and zero obligation.
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
              Common pricing questions
            </h2>
            <FAQAccordion items={pricingFAQs} />
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
                Get your custom pricing
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '32px',
                maxWidth: '450px',
                margin: '0 auto 32px',
              }}>
                Every business is different. Book a free call and get a transparent quote tailored to your exact needs.
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
                  Get a Quote
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
