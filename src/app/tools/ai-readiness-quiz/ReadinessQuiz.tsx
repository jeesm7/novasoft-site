'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Question {
  id: string;
  question: string;
  options: { label: string; value: number }[];
}

const questions: Question[] = [
  {
    id: 'industry',
    question: 'What industry is your business in?',
    options: [
      { label: 'Home services (HVAC, plumbing, roofing, solar)', value: 5 },
      { label: 'Healthcare (dental, chiropractic, medical)', value: 5 },
      { label: 'Real estate or property management', value: 5 },
      { label: 'Legal (law firms, personal injury)', value: 4 },
      { label: 'Retail or ecommerce', value: 3 },
      { label: 'Other professional services', value: 3 },
    ],
  },
  {
    id: 'team_size',
    question: 'How many people are on your team?',
    options: [
      { label: 'Just me (solo founder)', value: 5 },
      { label: '2 to 5 people', value: 5 },
      { label: '6 to 20 people', value: 4 },
      { label: '21 to 50 people', value: 3 },
      { label: '50+ people', value: 2 },
    ],
  },
  {
    id: 'lead_volume',
    question: 'How many leads or customer inquiries do you get per month?',
    options: [
      { label: 'Less than 50', value: 2 },
      { label: '50 to 200', value: 4 },
      { label: '200 to 500', value: 5 },
      { label: '500 to 1,000', value: 5 },
      { label: 'More than 1,000', value: 5 },
    ],
  },
  {
    id: 'current_tools',
    question: 'What tools do you currently use for customer communication?',
    options: [
      { label: 'Phone and email only', value: 5 },
      { label: 'Basic CRM (spreadsheets, simple tools)', value: 4 },
      { label: 'Full CRM (HubSpot, Salesforce, etc.)', value: 3 },
      { label: 'Some automation already in place', value: 2 },
      { label: 'We have a dedicated support team with advanced tools', value: 1 },
    ],
  },
  {
    id: 'pain_point',
    question: 'What is your biggest pain point right now?',
    options: [
      { label: 'Missing leads because we respond too slowly', value: 5 },
      { label: 'Too much time spent on repetitive tasks', value: 5 },
      { label: 'Inconsistent customer follow-up', value: 4 },
      { label: 'Staff is overwhelmed and burning out', value: 4 },
      { label: 'Need to scale but cannot afford more hires', value: 5 },
      { label: 'Nothing major, just exploring options', value: 1 },
    ],
  },
  {
    id: 'budget',
    question: 'What is your monthly budget for tools and automation?',
    options: [
      { label: 'Under $100/month', value: 2 },
      { label: '$100 to $500/month', value: 4 },
      { label: '$500 to $2,000/month', value: 5 },
      { label: '$2,000 to $5,000/month', value: 5 },
      { label: 'Over $5,000/month', value: 5 },
    ],
  },
];

function getResult(score: number) {
  if (score >= 25) {
    return {
      level: 'High',
      color: '#22c55e',
      title: 'Your business is a perfect fit for AI automation',
      description: 'Based on your answers, you are in an ideal position to benefit from AI. Your industry, lead volume, and current tools all point to significant ROI from automation. Businesses like yours typically see 3x to 10x returns in the first few months.',
      recommendations: [
        'Start with AI-powered call handling and lead response',
        'Automate your follow-up sequences for faster conversions',
        'Add 24/7 availability to capture after-hours leads',
        'Integrate AI with your existing CRM for seamless workflows',
      ],
    };
  }
  if (score >= 18) {
    return {
      level: 'Medium-High',
      color: '#22c55e',
      title: 'Your business has strong potential for AI automation',
      description: 'Your situation shows real opportunity. A few specific automations could save you significant time and help you capture more leads. The key is starting with the highest-impact area first.',
      recommendations: [
        'Identify your most time-consuming repetitive task and automate it first',
        'Set up AI lead response to reduce your average reply time',
        'Build automated follow-up sequences for prospects',
        'Consider a free consultation to pinpoint the biggest opportunity',
      ],
    };
  }
  if (score >= 12) {
    return {
      level: 'Medium',
      color: '#3b82f6',
      title: 'AI could help, but targeted implementation is key',
      description: 'You have some areas where AI could add value, but a broad rollout might not be the right move yet. A targeted approach focusing on one or two pain points will deliver the best results.',
      recommendations: [
        'Start with one specific automation (like after-hours lead capture)',
        'Test AI in a low-risk area before expanding',
        'Focus on reducing response time to leads',
        'Book a call to discuss which area has the most impact for you',
      ],
    };
  }
  return {
    level: 'Early Stage',
    color: '#f59e0b',
    title: 'You might benefit from building a foundation first',
    description: 'AI automation works best when you have consistent lead flow and established processes. You might want to focus on building those foundations first, then layer in AI to scale what is working.',
    recommendations: [
      'Focus on generating consistent lead volume first',
      'Set up basic CRM and customer tracking',
      'Document your current processes before automating them',
      'Revisit AI automation once you have predictable inbound leads',
    ],
  };
}

export default function ReadinessQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = questions.length;
  const progress = showResults ? 100 : (currentStep / totalQuestions) * 100;

  const handleSelect = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < totalQuestions - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const maxScore = totalQuestions * 5;
  const result = getResult(totalScore);
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

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
      <section className="section-padding" style={{ padding: '140px 80px 60px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/tools" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            marginBottom: '24px',
          }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Tools
          </Link>
          <p style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#3b82f6',
            letterSpacing: '0.1em',
            marginBottom: '16px'
          }}>
            FREE ASSESSMENT
          </p>
          <h1 style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: '20px'
          }}>
            AI Readiness Quiz
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
          }}>
            Answer 6 quick questions to find out if your business is ready for AI automation. Takes less than 2 minutes.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="section-padding" style={{ padding: '40px 80px 160px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          
          {/* Progress bar */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {showResults ? 'Complete' : `Question ${currentStep + 1} of ${totalQuestions}`}
              </span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {Math.round(progress)}%
              </span>
            </div>
            <div style={{
              height: '4px',
              borderRadius: '4px',
              background: 'var(--border)',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${progress}%`,
                borderRadius: '4px',
                background: 'linear-gradient(90deg, #3b82f6, #22c55e)',
                transition: 'width 0.4s ease',
              }} />
            </div>
          </div>

          {!showResults ? (
            /* Question Card */
            <div style={{
              background: 'var(--surface-elevated)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              padding: '48px',
            }}>
              <div style={{ marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                Question {currentStep + 1}
              </div>
              <h2 style={{
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: '32px',
                lineHeight: 1.4,
              }}>
                {questions[currentStep].question}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {questions[currentStep].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(questions[currentStep].id, option.value)}
                    style={{
                      padding: '18px 24px',
                      background: answers[questions[currentStep].id] === option.value
                        ? 'rgba(34, 197, 94, 0.12)'
                        : 'var(--surface)',
                      border: answers[questions[currentStep].id] === option.value
                        ? '1px solid rgba(34, 197, 94, 0.4)'
                        : '1px solid var(--border)',
                      borderRadius: '12px',
                      color: 'var(--text)',
                      fontSize: '15px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  style={{
                    marginTop: '24px',
                    padding: '10px 20px',
                    background: 'transparent',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Back
                </button>
              )}
            </div>
          ) : (
            /* Results */
            <>
              {/* Score Card */}
              <div style={{
                background: 'var(--surface-elevated)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                padding: '48px',
                textAlign: 'center',
                marginBottom: '24px',
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  background: `conic-gradient(${result.color} ${scorePercent * 3.6}deg, var(--border) 0deg)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    background: 'var(--surface-elevated)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}>
                    <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text)' }}>{scorePercent}%</div>
                  </div>
                </div>

                <div style={{
                  display: 'inline-flex',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  background: `${result.color}20`,
                  color: result.color,
                  fontSize: '13px',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}>
                  AI Readiness: {result.level}
                </div>

                <h2 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '16px',
                  lineHeight: 1.3,
                }}>
                  {result.title}
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '520px',
                  margin: '0 auto',
                }}>
                  {result.description}
                </p>
              </div>

              {/* Recommendations */}
              <div style={{
                background: 'var(--surface-elevated)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                padding: '40px 48px',
                marginBottom: '24px',
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', marginBottom: '24px' }}>
                  Our Recommendations
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {result.recommendations.map((rec, i) => (
                    <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        background: `${result.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: result.color }}>{i + 1}</span>
                      </div>
                      <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {rec}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{
                background: 'linear-gradient(135deg, var(--surface-elevated) 0%, var(--surface) 100%)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                padding: '48px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '24px',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-30%',
                  width: '60%',
                  height: '200%',
                  background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.1) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '12px',
                  }}>
                    Want to discuss your results?
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    marginBottom: '28px',
                    maxWidth: '420px',
                    margin: '0 auto 28px',
                  }}>
                    Book a free call with our team. We will walk through your score and create a custom AI strategy for your business.
                  </p>
                  <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                      Book a Free Call
                    </a>
                    <button
                      onClick={restart}
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
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      Retake Quiz
                    </button>
                  </div>
                </div>
              </div>

              {/* SEO Content */}
              <div style={{ marginTop: '80px', maxWidth: '700px', margin: '80px auto 0' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text)', marginBottom: '16px' }}>
                  Is Your Business Ready for AI? Here is What to Know
                </h2>
                <div style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <p style={{ marginBottom: '16px' }}>
                    AI readiness is not about being a tech company. It is about having repetitive processes, consistent lead flow, and a willingness to let technology handle the routine work so your team can focus on high-value activities.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    The best candidates for AI automation are businesses that receive regular inbound inquiries (phone calls, form submissions, emails) and spend significant time on tasks like appointment scheduling, follow-up messages, and data entry.
                  </p>
                  <p>
                    Industries like <strong style={{ color: 'var(--text)' }}>home services, healthcare, real estate, and legal</strong> are especially well-positioned because they have high call volumes, time-sensitive leads, and processes that follow predictable patterns. If that sounds like your business, AI can likely save you thousands of dollars per month.
                  </p>
                </div>
              </div>
            </>
          )}

        </div>
      </section>
    </div>
  );
}
