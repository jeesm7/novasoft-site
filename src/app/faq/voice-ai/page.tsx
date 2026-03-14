import Link from 'next/link';
import { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: "Everything You Need to Know About AI Voice Agents | Novasoft AI",
  description: "Complete guide to AI voice agents for business. Learn how voice AI works, how realistic it sounds, languages supported, and how it handles phone calls autonomously.",
  keywords: ["ai voice agent", "ai phone agent", "voice ai for business", "ai receptionist", "automated phone calls ai", "ai voice assistant business"],
  alternates: {
    canonical: 'https://novasoftai.com/faq/voice-ai/',
  },
  openGraph: {
    title: "Everything You Need to Know About AI Voice Agents | Novasoft AI",
    description: "Complete guide to AI voice agents. How voice AI works, how realistic it sounds, and how it handles phone calls for your business.",
    url: 'https://novasoftai.com/faq/voice-ai/',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Voice Agents Explained",
    description: "Everything you need to know about AI-powered phone agents for business.",
  },
};

const voiceFAQs = [
  {
    question: "How realistic does the AI voice actually sound?",
    answer: "Modern AI voice technology has made massive leaps in the last two years. Novasoft AI uses the latest voice synthesis models that produce speech with natural intonation, rhythm, and emotion. In blind tests, most listeners cannot reliably distinguish between our AI voice and a real human. It sounds like a professional, friendly receptionist."
  },
  {
    question: "Can the AI handle unexpected questions or off-script conversations?",
    answer: "Yes. Unlike older IVR systems that follow rigid scripts, our voice AI understands natural language and can handle open-ended conversations. If a caller goes off-topic, the AI adapts. It can answer follow-up questions, clarify information, and navigate complex multi-turn dialogues just like a trained human agent would."
  },
  {
    question: "What happens when the AI cannot resolve a caller's issue?",
    answer: "The AI is configured with clear escalation rules. If it encounters a situation it cannot handle, it will acknowledge the caller's needs, explain that it will connect them with a team member, and either transfer the call in real time or schedule a callback. No caller is left hanging."
  },
  {
    question: "Does the voice AI work for inbound and outbound calls?",
    answer: "Both. For inbound calls, the AI acts as your virtual receptionist, answering every call immediately, qualifying leads, booking appointments, and providing information. For outbound calls, it can handle follow-ups, appointment reminders, lead qualification, and surveys. You define the rules and the AI executes."
  },
  {
    question: "Can I choose the voice and personality?",
    answer: "Absolutely. You can select from a range of natural-sounding voices and customize the personality to match your brand. Want a warm, friendly tone for a dental office? A confident, professional tone for a law firm? We configure the voice and communication style to fit your business perfectly."
  },
  {
    question: "How does the AI handle hold times and call transfers?",
    answer: "There are no hold times. The AI answers every call instantly, even during peak hours. If a call needs to be transferred to a human team member, the AI provides the caller with context about why they are being transferred and passes all relevant information to the human agent so the caller does not have to repeat themselves."
  },
  {
    question: "Is voice AI HIPAA compliant for healthcare?",
    answer: "We offer HIPAA-compliant configurations for healthcare businesses. This includes encrypted call data, secure storage, proper consent management, and business associate agreements. If your business handles protected health information, we configure the system to meet all regulatory requirements."
  },
  {
    question: "How much does voice AI cost compared to text-only?",
    answer: "Voice AI typically costs more than text-only automation because it involves real-time voice processing and telephony infrastructure. However, the ROI is often higher because phone leads tend to convert at much higher rates. We provide transparent pricing during your consultation based on your expected call volume."
  },
];

function VoiceFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": voiceFAQs.map(faq => ({
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

export default function VoiceAIPage() {
  return (
    <>
      <VoiceFAQSchema />
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
              <span style={{ color: 'var(--text-secondary)' }}>Voice AI</span>
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
              VOICE AI GUIDE
            </p>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: '24px'
            }}>
              Everything you need to know about <span style={{ color: 'var(--accent)' }}>AI voice agents</span>
            </h1>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
            }}>
              AI voice technology has reached a tipping point. Calls that used to require a human can now be handled by AI that sounds natural, responds intelligently, and never misses a beat.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="section-padding" style={{ padding: '0 80px 80px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <article style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '16px', letterSpacing: '-0.01em' }}>
                What is an AI voice agent?
              </h2>
              <p style={{ marginBottom: '24px' }}>
                An AI voice agent is software that can have real-time phone conversations with callers. It listens, understands context, and responds naturally using synthesized speech that sounds like a real person. Unlike old-school phone trees that force callers to press buttons, voice AI has a real conversation.
              </p>
              <p style={{ marginBottom: '24px' }}>
                For businesses, this means every phone call gets answered immediately. No voicemail. No hold music. No missed opportunities. The AI can answer questions, qualify leads, book appointments, take messages, and transfer calls to the right person when needed.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                How voice AI technology works
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Behind every AI voice call, three technologies work together in real time:
              </p>
              <div style={{
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '32px',
                marginBottom: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}>
                {[
                  {
                    title: 'Speech Recognition (STT)',
                    desc: 'Converts the caller\'s spoken words into text in real time. Modern models handle accents, background noise, and natural speech patterns with over 95% accuracy.',
                  },
                  {
                    title: 'Language Understanding (LLM)',
                    desc: 'The AI brain that processes the text, understands intent, pulls relevant information, and generates an appropriate response. This is what makes conversations feel natural rather than scripted.',
                  },
                  {
                    title: 'Voice Synthesis (TTS)',
                    desc: 'Converts the AI\'s text response back into natural-sounding speech. Today\'s models produce voices with proper emotion, pacing, and intonation that are nearly indistinguishable from real humans.',
                  },
                ].map((tech, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{
                      flexShrink: 0,
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'var(--accent-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'var(--accent)',
                    }}>
                      {i + 1}
                    </span>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{tech.title}</div>
                      <div style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{tech.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ marginBottom: '24px' }}>
                All three steps happen in milliseconds, creating a seamless conversational experience. The latency is low enough that conversations flow naturally without awkward pauses.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                What voice AI can do for your business
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Voice AI is not limited to answering basic questions. Here is what it can handle:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><strong style={{ color: 'var(--text)' }}>Inbound call answering.</strong> Pick up every call instantly, 24/7. No more missed calls during lunch, after hours, or on weekends.</li>
                <li><strong style={{ color: 'var(--text)' }}>Lead qualification.</strong> Ask the right questions, assess fit, and route high-value leads to your team immediately.</li>
                <li><strong style={{ color: 'var(--text)' }}>Appointment scheduling.</strong> Check real-time calendar availability and book appointments during the call.</li>
                <li><strong style={{ color: 'var(--text)' }}>Outbound follow-ups.</strong> Call leads who filled out a form, remind patients of upcoming appointments, or re-engage cold prospects.</li>
                <li><strong style={{ color: 'var(--text)' }}>Customer support.</strong> Answer common questions about hours, pricing, services, and policies without involving your team.</li>
                <li><strong style={{ color: 'var(--text)' }}>After-hours coverage.</strong> Provide full-service phone support outside business hours so you never lose a lead to voicemail.</li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                Industries that benefit most from voice AI
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Any business that relies on phone calls benefits from voice AI, but some industries see outsized results:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><strong style={{ color: 'var(--text)' }}>Healthcare.</strong> Dental offices, chiropractors, and medical practices use voice AI to handle appointment bookings, insurance questions, and after-hours calls.</li>
                <li><strong style={{ color: 'var(--text)' }}>Home services.</strong> HVAC, plumbing, roofing, and electrical companies never miss an emergency call again. The AI qualifies urgency and dispatches accordingly.</li>
                <li><strong style={{ color: 'var(--text)' }}>Legal.</strong> Law firms use voice AI to screen potential clients, gather case details, and schedule consultations around the clock.</li>
                <li><strong style={{ color: 'var(--text)' }}>Real estate.</strong> Agents capture every lead call, qualify buyer interest, and schedule showings without being tied to their phone.</li>
              </ul>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                The human touch question
              </h2>
              <p style={{ marginBottom: '24px' }}>
                The most common concern we hear is "will my customers be annoyed talking to a robot?" The honest answer: most callers do not even realize they are talking to AI. The voice sounds natural, the responses are contextual, and the experience is often better than a human receptionist who might be distracted, having a bad day, or unfamiliar with a specific question.
              </p>
              <p style={{ marginBottom: '24px' }}>
                That said, voice AI is not meant to replace humans entirely. It handles the routine calls (which make up 70 to 80 percent of total volume) so your team can focus on the complex, high-value conversations that truly need a human touch. It is about putting human time where it matters most.
              </p>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.01em' }}>
                Getting started with voice AI
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Setting up voice AI follows the same process as our standard onboarding. We start with a discovery call to understand your call flows, common questions, and business rules. Then we configure the voice agent, train it on your specific scenarios, and test extensively before going live.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Most voice AI setups are live within 7 to 14 days. You can start with inbound-only and add outbound capabilities later. The system scales with your needs, handling 5 simultaneous calls just as easily as 500.
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
              Voice AI questions answered
            </h2>
            <FAQAccordion items={voiceFAQs} />
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
                Hear it for yourself
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '32px',
                maxWidth: '450px',
                margin: '0 auto 32px',
              }}>
                Book a demo and we will show you a live voice AI conversation. No recordings, no tricks. Real-time AI, real conversation.
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
                  Hear a Live Demo
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
