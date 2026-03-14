import Link from 'next/link';
import { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: "FAQ - Novasoft AI | Your Questions Answered",
  description: "Frequently asked questions about Novasoft AI. Learn about pricing, setup, integrations, voice AI, and how our AI automation works for small businesses.",
  keywords: ["ai automation agency faq", "ai chatbot faq", "ai assistant questions", "business automation faq", "voice ai faq"],
  alternates: {
    canonical: 'https://novasoftai.com/faq/',
  },
  openGraph: {
    title: "FAQ - Novasoft AI | Your Questions Answered",
    description: "Frequently asked questions about Novasoft AI. Learn about pricing, setup, integrations, voice AI, and how our AI automation works for small businesses.",
    url: 'https://novasoftai.com/faq/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "FAQ - Novasoft AI",
    description: "Get answers to common questions about AI automation, pricing, setup, and more.",
  },
};

const generalFAQs = [
  {
    question: "What is Novasoft AI?",
    answer: "Novasoft AI is an autonomous AI assistant built for small businesses. Unlike basic chatbots that only answer questions, Novasoft AI takes real action. It can book appointments, update your CRM, send emails, follow up with leads, and handle customer communication around the clock. Think of it as a digital employee that never sleeps."
  },
  {
    question: "How does Novasoft AI work?",
    answer: "Novasoft AI connects to the tools you already use (CRM, email, calendar, etc.) and autonomously completes tasks on your behalf. You tell it what to do in plain English, and it executes. It can navigate websites, fill out forms, send messages, and manage your entire customer communication pipeline without human intervention."
  },
  {
    question: "Who is Novasoft AI built for?",
    answer: "Novasoft AI is designed for small business owners and teams who spend too much time on repetitive tasks like lead follow-up, appointment scheduling, customer support, and data entry. It works especially well for service businesses like HVAC, dental offices, law firms, real estate agents, roofing companies, and more."
  },
  {
    question: "Is this just another chatbot?",
    answer: "No. Most chatbots answer questions and stop there. Novasoft AI actually does the work. If a lead comes in at 2am, it responds, qualifies them, checks your calendar, books an appointment, and sends a confirmation. It does not just tell someone to call back during business hours."
  },
  {
    question: "Do I need technical skills to use Novasoft AI?",
    answer: "Not at all. If you can send a text message, you can use Novasoft AI. There is no coding, no complex setup, and no technical knowledge required. Our team handles the entire configuration during onboarding, and you interact with the AI using plain everyday language."
  },
];

const pricingFAQs = [
  {
    question: "How much does Novasoft AI cost?",
    answer: "Pricing depends on your business size, the number of tools you need connected, and your volume of customer interactions. We offer plans starting at a few hundred dollars per month. Book a free consultation and we will build a custom quote based on exactly what you need."
  },
  {
    question: "What is included in the price?",
    answer: "Every plan includes full AI setup and configuration, integration with your existing tools, 24/7 autonomous operation, ongoing optimization, and dedicated support. There are no hidden fees. You get a fully working AI assistant, not a DIY toolkit."
  },
  {
    question: "Are there setup fees?",
    answer: "There is a one-time onboarding fee that covers building your custom AI workflows, connecting your tools, training the AI on your business, and testing everything before launch. This ensures your AI works perfectly from day one."
  },
  {
    question: "What are your payment terms?",
    answer: "We offer monthly and annual billing. Annual plans include a discount. All plans are billed in advance, and you can cancel anytime with 30 days notice. No long-term contracts required."
  },
  {
    question: "Is there a free trial or demo?",
    answer: "We offer a free live demo where you can see Novasoft AI working in real time on tasks relevant to your business. This is not a generic sales pitch. We show you exactly how AI would handle your specific workflows. Book a call and see it for yourself."
  },
];

const technicalFAQs = [
  {
    question: "What technology does Novasoft AI use?",
    answer: "Novasoft AI is built on cutting-edge large language models combined with proprietary browser automation and task execution technology. This means it does not just generate text. It can actually navigate software, click buttons, fill forms, and complete tasks across hundreds of platforms."
  },
  {
    question: "Can it integrate with my CRM?",
    answer: "Yes. Novasoft AI integrates with all major CRM platforms including Salesforce, HubSpot, Zoho, GoHighLevel, and many others. It can log calls, update contact records, move deals through your pipeline, and keep everything in sync without manual data entry."
  },
  {
    question: "What other tools does it connect to?",
    answer: "Novasoft AI connects to 500+ tools including Google Workspace, Microsoft 365, Calendly, Slack, QuickBooks, Mailchimp, and more. If the tool has a login screen or an API, there is a strong chance we can connect to it."
  },
  {
    question: "What languages does it support?",
    answer: "Novasoft AI supports English, Spanish, French, German, Portuguese, and dozens of other languages. It can detect the language a customer uses and respond in the same language automatically, making it ideal for businesses with diverse customer bases."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption for all data in transit and at rest. Your business data is never shared with third parties or used to train other models. We follow strict data handling protocols and can sign custom data processing agreements for businesses that require them."
  },
];

const processFAQs = [
  {
    question: "How long does setup take?",
    answer: "Most businesses are fully up and running within 5 to 10 business days. This includes connecting your tools, configuring AI workflows, training the AI on your business specifics, and thorough testing. Complex setups with many integrations may take a bit longer."
  },
  {
    question: "What does the onboarding process look like?",
    answer: "Onboarding starts with a strategy call where we map out your workflows and identify the best automation opportunities. Then our team builds and configures everything. We run testing with your real tools, make adjustments, and launch when you are 100% satisfied."
  },
  {
    question: "Do I own the system?",
    answer: "You own your data and all the content the AI creates for your business. The AI platform itself is provided as a service (SaaS). This means we handle all updates, maintenance, and improvements so you always have the latest technology without lifting a finger."
  },
  {
    question: "Can I customize how the AI responds?",
    answer: "Yes. During onboarding, we train the AI on your brand voice, preferred responses, business rules, and specific workflows. You can set rules like 'always offer a discount to returning customers' or 'escalate to a human if the question involves legal advice.' The AI follows your playbook."
  },
  {
    question: "What kind of support do you offer?",
    answer: "Every plan includes dedicated support via email and chat. We also do regular check-ins to review AI performance, optimize workflows, and implement new automations as your business grows. You are never left to figure things out on your own."
  },
];

const voiceFAQs = [
  {
    question: "How realistic is the AI voice?",
    answer: "Extremely realistic. Novasoft AI uses the latest voice synthesis technology that sounds natural with proper intonation, pacing, and emotion. Most callers cannot tell they are speaking with an AI. It is not the robotic voice you remember from old phone menus."
  },
  {
    question: "Can the AI voice handle accents and dialects?",
    answer: "Yes. The voice AI is trained on diverse speech patterns and can understand a wide range of accents, dialects, and speaking styles. It adapts to how each caller speaks and responds clearly regardless of accent. It also supports multiple languages for multilingual callers."
  },
  {
    question: "What happens when the AI encounters a question it cannot answer?",
    answer: "The AI is designed to handle edge cases gracefully. If it encounters a question outside its training, it will acknowledge the question, provide what information it can, and offer to connect the caller with a human team member. It never makes up answers or guesses."
  },
  {
    question: "Can the voice AI make outbound calls?",
    answer: "Yes. Novasoft AI can make outbound calls for follow-ups, appointment reminders, lead qualification, and more. You set the rules for when and who to call, and the AI handles the rest. It is like having a full-time caller who never takes a break."
  },
  {
    question: "How does voice AI handle multiple calls at once?",
    answer: "Unlike a human receptionist, the AI can handle unlimited simultaneous calls. There is no hold music, no busy signals, and no missed calls. Every caller gets an immediate, personalized response whether you get 5 calls or 500 calls at the same time."
  },
];

const allFAQs = [...generalFAQs, ...pricingFAQs, ...technicalFAQs, ...processFAQs, ...voiceFAQs];

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFAQs.map(faq => ({
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

export default function FAQPage() {
  const topicPages = [
    {
      href: '/faq/pricing',
      title: 'AI Automation Pricing',
      description: 'Detailed breakdown of costs, plans, and what you get for your investment.',
      icon: '💰',
    },
    {
      href: '/faq/setup-process',
      title: 'Setup and Onboarding',
      description: 'Step-by-step walkthrough of how we get your AI assistant running.',
      icon: '⚙️',
    },
    {
      href: '/faq/voice-ai',
      title: 'Voice AI Explained',
      description: 'Everything you need to know about AI-powered phone agents.',
      icon: '🎙️',
    },
  ];

  return (
    <>
      <FAQSchema />
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
        <section className="section-padding" style={{ padding: '140px 80px 80px' }}>
          <div style={{ maxWidth: '700px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              FAQ
            </p>
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: '24px'
            }}>
              Frequently asked <span style={{ color: 'var(--accent)' }}>questions</span>
            </h1>
            <p style={{
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)'
            }}>
              Everything you need to know about Novasoft AI, from pricing and setup to voice AI and integrations.
            </p>
          </div>
        </section>

        {/* Topic Deep-Dive Cards */}
        <section className="section-padding" style={{ padding: '0 80px 80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="faq-topics-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}>
              {topicPages.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  style={{
                    padding: '32px',
                    borderRadius: '16px',
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <span style={{ fontSize: '32px' }}>{topic.icon}</span>
                  <div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: '8px',
                    }}>
                      {topic.title}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5,
                    }}>
                      {topic.description}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: 'auto',
                  }}>
                    Read more
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="section-padding" style={{ padding: '80px 80px 160px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>

            <FAQAccordion category="GENERAL" items={generalFAQs} />
            <FAQAccordion category="PRICING" items={pricingFAQs} />
            <FAQAccordion category="TECHNICAL" items={technicalFAQs} />
            <FAQAccordion category="PROCESS & ONBOARDING" items={processFAQs} />
            <FAQAccordion category="VOICE AI" items={voiceFAQs} />

          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ padding: '0 80px 160px' }}>
          <div style={{
            maxWidth: '900px',
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
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '16px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}>
                Still have questions?
              </h2>
              <p style={{
                fontSize: '17px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '32px',
                maxWidth: '500px',
                margin: '0 auto 32px',
              }}>
                Book a free consultation and we will walk you through everything. No pressure, no commitment.
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
