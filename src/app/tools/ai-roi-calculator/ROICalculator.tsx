'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ROICalculator() {
  const [callsPerMonth, setCallsPerMonth] = useState<number>(500);
  const [costPerCall, setCostPerCall] = useState<number>(15);
  const [hoursFollowUp, setHoursFollowUp] = useState<number>(20);
  const [calculated, setCalculated] = useState(false);

  // AI assumptions
  const aiCostPerCall = 1.50;
  const aiFollowUpReduction = 0.80; // 80% reduction
  const hourlyRate = 35; // average labor cost

  const currentMonthlyCost = callsPerMonth * costPerCall;
  const currentFollowUpCost = hoursFollowUp * hourlyRate;
  const currentTotal = currentMonthlyCost + currentFollowUpCost;

  const aiMonthlyCost = callsPerMonth * aiCostPerCall;
  const aiFollowUpHours = hoursFollowUp * (1 - aiFollowUpReduction);
  const aiFollowUpCost = aiFollowUpHours * hourlyRate;
  const aiTotal = aiMonthlyCost + aiFollowUpCost;

  const monthlySavings = currentTotal - aiTotal;
  const annualSavings = monthlySavings * 12;
  const timeSavedMonthly = hoursFollowUp * aiFollowUpReduction;
  const roiPercentage = currentTotal > 0 ? ((monthlySavings / currentTotal) * 100) : 0;

  const formatCurrency = (n: number) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

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
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
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
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            marginBottom: '16px'
          }}>
            FREE CALCULATOR
          </p>
          <h1 style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: '20px'
          }}>
            AI ROI Calculator
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '560px',
            margin: '0 auto'
          }}>
            Enter your current numbers to see how much time and money AI automation could save your business every month.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding" style={{ padding: '40px 80px 80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Input Card */}
          <div style={{
            background: 'var(--surface-elevated)',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            padding: '48px',
            marginBottom: '32px',
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--text)',
              marginBottom: '32px'
            }}>
              Your Current Numbers
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
              className="calc-inputs"
            >
              {/* Calls per month */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  marginBottom: '10px',
                }}>
                  Customer calls / month
                </label>
                <input
                  type="number"
                  value={callsPerMonth}
                  onChange={(e) => { setCallsPerMonth(Number(e.target.value)); setCalculated(false); }}
                  min={0}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    color: 'var(--text)',
                    fontSize: '18px',
                    fontWeight: 600,
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px', display: 'block' }}>
                  Inbound + outbound calls
                </span>
              </div>

              {/* Cost per call */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  marginBottom: '10px',
                }}>
                  Current cost per call ($)
                </label>
                <input
                  type="number"
                  value={costPerCall}
                  onChange={(e) => { setCostPerCall(Number(e.target.value)); setCalculated(false); }}
                  min={0}
                  step={0.5}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    color: 'var(--text)',
                    fontSize: '18px',
                    fontWeight: 600,
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px', display: 'block' }}>
                  Staff time + overhead per call
                </span>
              </div>

              {/* Hours follow-up */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  marginBottom: '10px',
                }}>
                  Hours on follow-up / month
                </label>
                <input
                  type="number"
                  value={hoursFollowUp}
                  onChange={(e) => { setHoursFollowUp(Number(e.target.value)); setCalculated(false); }}
                  min={0}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    color: 'var(--text)',
                    fontSize: '18px',
                    fontWeight: 600,
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px', display: 'block' }}>
                  Manual follow-up and scheduling
                </span>
              </div>
            </div>

            <button
              onClick={() => setCalculated(true)}
              style={{
                marginTop: '32px',
                width: '100%',
                padding: '18px',
                background: 'var(--accent)',
                color: '#000',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.2)',
              }}
            >
              Calculate My ROI
            </button>
          </div>

          {/* Results */}
          {calculated && (
            <>
              {/* Savings Highlights */}
              <div className="calc-results-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                marginBottom: '32px',
              }}>
                <div style={{
                  background: 'var(--accent-dim)',
                  borderRadius: '16px',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  padding: '32px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 500, marginBottom: '8px' }}>
                    Monthly Savings
                  </div>
                  <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>
                    {formatCurrency(monthlySavings)}
                  </div>
                </div>
                <div style={{
                  background: 'var(--accent-dim)',
                  borderRadius: '16px',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  padding: '32px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 500, marginBottom: '8px' }}>
                    Annual Savings
                  </div>
                  <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>
                    {formatCurrency(annualSavings)}
                  </div>
                </div>
                <div style={{
                  background: 'var(--accent-dim)',
                  borderRadius: '16px',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  padding: '32px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 500, marginBottom: '8px' }}>
                    ROI
                  </div>
                  <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>
                    {roiPercentage.toFixed(0)}%
                  </div>
                </div>
              </div>

              {/* Time saved */}
              <div style={{
                background: 'var(--surface-elevated)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                padding: '24px 32px',
                marginBottom: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
                  You would save <strong style={{ color: 'var(--accent)' }}>{timeSavedMonthly.toFixed(0)} hours/month</strong> on follow-up tasks alone
                </span>
              </div>

              {/* Comparison Table */}
              <div style={{
                background: 'var(--surface-elevated)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                marginBottom: '32px',
              }}>
                <div style={{
                  padding: '24px 32px',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
                    Cost Breakdown: Current vs AI-Powered
                  </h3>
                </div>
                
                <div style={{ padding: '0' }}>
                  {/* Header row */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    padding: '16px 32px',
                    borderBottom: '1px solid var(--border)',
                    background: 'rgba(255,255,255,0.02)',
                  }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Metric</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'right' }}>Current</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'right' }}>With AI</div>
                  </div>
                  
                  {/* Rows */}
                  {[
                    { label: 'Call handling cost', current: formatCurrency(currentMonthlyCost), ai: formatCurrency(aiMonthlyCost) },
                    { label: 'Follow-up cost', current: formatCurrency(currentFollowUpCost), ai: formatCurrency(aiFollowUpCost) },
                    { label: 'Follow-up hours', current: `${hoursFollowUp}h/mo`, ai: `${aiFollowUpHours.toFixed(0)}h/mo` },
                    { label: 'Availability', current: 'Business hours', ai: '24/7/365' },
                    { label: 'Response time', current: 'Minutes to hours', ai: 'Under 1 second' },
                  ].map((row, i) => (
                    <div key={i} style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                      padding: '16px 32px',
                      borderBottom: i < 4 ? '1px solid var(--border)' : 'none',
                    }}>
                      <div style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>{row.label}</div>
                      <div style={{ fontSize: '15px', color: 'var(--text-muted)', textAlign: 'right' }}>{row.current}</div>
                      <div style={{ fontSize: '15px', color: 'var(--text)', fontWeight: 600, textAlign: 'right' }}>{row.ai}</div>
                    </div>
                  ))}

                  {/* Total row */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    padding: '20px 32px',
                    background: 'rgba(34, 197, 94, 0.05)',
                    borderTop: '2px solid var(--accent)',
                  }}>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)' }}>Monthly Total</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#ef4444', textAlign: 'right' }}>{formatCurrency(currentTotal)}</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--accent)', textAlign: 'right' }}>{formatCurrency(aiTotal)}</div>
                  </div>
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
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '12px',
                  }}>
                    Get a custom quote for your business
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: 'var(--text-secondary)',
                    marginBottom: '32px',
                    maxWidth: '460px',
                    margin: '0 auto 32px',
                  }}>
                    These are estimates. Let us analyze your specific workflows and show you exactly what AI can do.
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
                      Get a Custom Quote
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

              {/* SEO Content */}
              <div style={{ marginTop: '80px', maxWidth: '700px', margin: '80px auto 0' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text)', marginBottom: '16px' }}>
                  How AI Automation Delivers ROI
                </h2>
                <div style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <p style={{ marginBottom: '16px' }}>
                    AI automation replaces repetitive, time-consuming tasks with intelligent systems that work around the clock. Instead of paying staff to answer routine calls, schedule appointments, and send follow-up messages, an AI assistant handles all of it instantly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    The ROI comes from three areas: <strong style={{ color: 'var(--text)' }}>reduced labor costs</strong> (fewer hours spent on repetitive tasks), <strong style={{ color: 'var(--text)' }}>faster response times</strong> (AI responds in seconds, not hours), and <strong style={{ color: 'var(--text)' }}>24/7 availability</strong> (no missed calls or after-hours leads).
                  </p>
                  <p>
                    Most businesses see a positive return within the first month. The calculator above gives you a conservative estimate based on industry averages. Your actual savings may be higher depending on your call volume and current processes.
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
