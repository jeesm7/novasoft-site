'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CostComparison() {
  const [salary, setSalary] = useState<number>(45000);
  const [hoursNeeded, setHoursNeeded] = useState<number>(40);
  const [tasks, setTasks] = useState<string[]>(['calls', 'scheduling', 'followup']);

  const [calculated, setCalculated] = useState(false);

  const taskOptions = [
    { id: 'calls', label: 'Answering phone calls' },
    { id: 'scheduling', label: 'Appointment scheduling' },
    { id: 'followup', label: 'Lead follow-up' },
    { id: 'email', label: 'Email management' },
    { id: 'data', label: 'Data entry and CRM updates' },
    { id: 'social', label: 'Social media responses' },
  ];

  const toggleTask = (id: string) => {
    setCalculated(false);
    setTasks(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  // Employee calculations
  const employeeSalary = salary;
  const employeeBenefits = salary * 0.30; // 30% benefits overhead
  const employeeTraining = 2000; // annual training cost
  const employeeEquipment = 3000; // annual equipment/software
  const employeeTotal = employeeSalary + employeeBenefits + employeeTraining + employeeEquipment;
  const employeeMonthly = Math.round(employeeTotal / 12);
  const employeeHourly = Math.round(employeeTotal / (52 * 40));
  const employeeAvailability = '40-45 hrs/week';
  const employeeRampUp = '2-4 weeks';

  // VA calculations
  const vaHourlyRate = 12;
  const vaHoursPerWeek = hoursNeeded;
  const vaMonthly = vaHourlyRate * vaHoursPerWeek * 4.33;
  const vaAnnual = vaMonthly * 12;
  const vaManagement = Math.round(vaMonthly * 0.15); // management overhead
  const vaTotalMonthly = Math.round(vaMonthly + vaManagement);
  const vaTotalAnnual = vaTotalMonthly * 12;
  const vaAvailability = `${vaHoursPerWeek} hrs/week`;
  const vaRampUp = '1-2 weeks';

  // AI calculations
  const aiBaseMonthly = 497;
  const aiTaskMultiplier = Math.max(tasks.length * 0.15, 0.5);
  const aiMonthly = Math.round(aiBaseMonthly * (1 + (aiTaskMultiplier - 0.5)));
  const aiAnnual = aiMonthly * 12;
  const aiAvailability = '24/7/365';
  const aiRampUp = 'Same day';

  const cheapestMonthly = Math.min(employeeMonthly, vaTotalMonthly, aiMonthly);

  const formatCurrency = (n: number) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  const getBarWidth = (value: number, max: number) => `${Math.max((value / max) * 100, 8)}%`;

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
            color: '#a855f7',
            letterSpacing: '0.1em',
            marginBottom: '16px'
          }}>
            COST COMPARISON
          </p>
          <h1 style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: '20px'
          }}>
            Hiring vs AI Assistant<br />
            <span style={{ color: '#a855f7' }}>Cost Calculator</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '560px',
            margin: '0 auto'
          }}>
            Compare the true cost of hiring a full-time employee, a virtual assistant, or using an AI assistant. See which option fits your budget and needs.
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
              Tell Us About Your Needs
            </h2>

            <div className="calc-inputs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
              {/* Salary */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  marginBottom: '10px',
                }}>
                  Expected annual salary ($)
                </label>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => { setSalary(Number(e.target.value)); setCalculated(false); }}
                  min={0}
                  step={1000}
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
                  For the full-time employee comparison
                </span>
              </div>

              {/* Hours */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  marginBottom: '10px',
                }}>
                  Hours of work needed per week
                </label>
                <input
                  type="number"
                  value={hoursNeeded}
                  onChange={(e) => { setHoursNeeded(Number(e.target.value)); setCalculated(false); }}
                  min={1}
                  max={168}
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
                  For the virtual assistant comparison
                </span>
              </div>
            </div>

            {/* Tasks */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                marginBottom: '12px',
              }}>
                Tasks you need handled (select all that apply)
              </label>
              <div className="task-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {taskOptions.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    style={{
                      padding: '14px 18px',
                      background: tasks.includes(task.id) ? 'rgba(168, 85, 247, 0.12)' : 'var(--surface)',
                      border: tasks.includes(task.id) ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid var(--border)',
                      borderRadius: '10px',
                      color: tasks.includes(task.id) ? '#c084fc' : 'var(--text-secondary)',
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textAlign: 'left',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {tasks.includes(task.id) ? '✓ ' : ''}{task.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCalculated(true)}
              style={{
                marginTop: '32px',
                width: '100%',
                padding: '18px',
                background: '#a855f7',
                color: '#fff',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                boxShadow: '0 0 40px rgba(168, 85, 247, 0.2)',
              }}
            >
              Compare Costs
            </button>
          </div>

          {/* Results */}
          {calculated && (
            <>
              {/* Visual Bar Chart */}
              <div style={{
                background: 'var(--surface-elevated)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                padding: '48px',
                marginBottom: '24px',
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text)', marginBottom: '32px' }}>
                  Monthly Cost Comparison
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* Employee */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)' }}>Full-Time Employee</span>
                      <span style={{ fontSize: '15px', fontWeight: 600, color: '#ef4444' }}>{formatCurrency(employeeMonthly)}/mo</span>
                    </div>
                    <div style={{ height: '40px', borderRadius: '10px', background: 'var(--surface)', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: getBarWidth(employeeMonthly, Math.max(employeeMonthly, vaTotalMonthly, aiMonthly)),
                        borderRadius: '10px',
                        background: 'linear-gradient(90deg, #ef4444, #f87171)',
                        transition: 'width 0.6s ease',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '16px',
                      }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>
                          {formatCurrency(employeeTotal)}/yr
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* VA */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)' }}>Virtual Assistant</span>
                      <span style={{ fontSize: '15px', fontWeight: 600, color: '#f59e0b' }}>{formatCurrency(vaTotalMonthly)}/mo</span>
                    </div>
                    <div style={{ height: '40px', borderRadius: '10px', background: 'var(--surface)', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: getBarWidth(vaTotalMonthly, Math.max(employeeMonthly, vaTotalMonthly, aiMonthly)),
                        borderRadius: '10px',
                        background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                        transition: 'width 0.6s ease',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '16px',
                      }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#000' }}>
                          {formatCurrency(vaTotalAnnual)}/yr
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* AI */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)' }}>AI Assistant</span>
                      <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--accent)' }}>{formatCurrency(aiMonthly)}/mo</span>
                    </div>
                    <div style={{ height: '40px', borderRadius: '10px', background: 'var(--surface)', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: getBarWidth(aiMonthly, Math.max(employeeMonthly, vaTotalMonthly, aiMonthly)),
                        borderRadius: '10px',
                        background: 'linear-gradient(90deg, #22c55e, #4ade80)',
                        transition: 'width 0.6s ease',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '16px',
                      }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#000' }}>
                          {formatCurrency(aiAnnual)}/yr
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Savings callout */}
                <div style={{
                  marginTop: '32px',
                  padding: '20px 24px',
                  background: 'var(--accent-dim)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  textAlign: 'center',
                }}>
                  <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
                    AI saves you up to{' '}
                    <strong style={{ color: 'var(--accent)', fontSize: '18px' }}>
                      {formatCurrency((employeeTotal - aiAnnual))}
                    </strong>{' '}
                    per year compared to a full-time hire
                  </span>
                </div>
              </div>

              {/* Detailed Comparison */}
              <div style={{
                background: 'var(--surface-elevated)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                marginBottom: '24px',
              }}>
                <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
                    Side-by-Side Comparison
                  </h3>
                </div>

                {/* Header */}
                <div className="comparison-table-header" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr 1fr',
                  padding: '14px 32px',
                  borderBottom: '1px solid var(--border)',
                  background: 'rgba(255,255,255,0.02)',
                }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Factor</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>Employee</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>VA</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>AI Assistant</div>
                </div>

                {/* Rows */}
                {[
                  { 
                    label: 'Monthly cost', 
                    employee: formatCurrency(employeeMonthly), 
                    va: formatCurrency(vaTotalMonthly), 
                    ai: formatCurrency(aiMonthly),
                    aiBest: aiMonthly <= Math.min(employeeMonthly, vaTotalMonthly),
                  },
                  { 
                    label: 'Annual cost', 
                    employee: formatCurrency(employeeTotal), 
                    va: formatCurrency(vaTotalAnnual), 
                    ai: formatCurrency(aiAnnual),
                    aiBest: aiAnnual <= Math.min(employeeTotal, vaTotalAnnual),
                  },
                  { 
                    label: 'Availability', 
                    employee: employeeAvailability, 
                    va: vaAvailability, 
                    ai: aiAvailability,
                    aiBest: true,
                  },
                  { 
                    label: 'Ramp-up time', 
                    employee: employeeRampUp, 
                    va: vaRampUp, 
                    ai: aiRampUp,
                    aiBest: true,
                  },
                  { 
                    label: 'Sick days / PTO', 
                    employee: '15-20 days/yr', 
                    va: 'Varies', 
                    ai: 'None',
                    aiBest: true,
                  },
                  { 
                    label: 'Scalability', 
                    employee: 'Hire more', 
                    va: 'Add more VAs', 
                    ai: 'Instant',
                    aiBest: true,
                  },
                  { 
                    label: 'Response time', 
                    employee: 'Minutes', 
                    va: 'Minutes to hours', 
                    ai: 'Under 1 second',
                    aiBest: true,
                  },
                  { 
                    label: 'Complex judgment', 
                    employee: 'Excellent', 
                    va: 'Good', 
                    ai: 'Limited',
                    aiBest: false,
                  },
                ].map((row, i) => (
                  <div key={i} className="comparison-table-row" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    padding: '14px 32px',
                    borderBottom: i < 7 ? '1px solid var(--border)' : 'none',
                  }}>
                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{row.label}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)', textAlign: 'center' }}>{row.employee}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)', textAlign: 'center' }}>{row.va}</div>
                    <div style={{ 
                      fontSize: '14px', 
                      textAlign: 'center',
                      color: row.aiBest ? 'var(--accent)' : 'var(--text-muted)',
                      fontWeight: row.aiBest ? 600 : 400,
                    }}>
                      {row.ai}
                    </div>
                  </div>
                ))}
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
                  background: 'radial-gradient(ellipse, rgba(168, 85, 247, 0.1) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '12px',
                  }}>
                    Ready to see what AI can do for you?
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: 'var(--text-secondary)',
                    marginBottom: '32px',
                    maxWidth: '460px',
                    margin: '0 auto 32px',
                  }}>
                    Get a personalized cost analysis based on your specific business needs.
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
                      Get a Custom Analysis
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
                  AI Assistant vs Hiring an Employee: What You Need to Know
                </h2>
                <div style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <p style={{ marginBottom: '16px' }}>
                    When comparing the cost of hiring a full-time employee vs an AI assistant, most business owners are surprised by the true numbers. A $45,000 salary actually costs closer to $60,000+ after benefits, payroll taxes, equipment, and training.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Virtual assistants offer more flexibility but come with their own challenges: time zone differences, communication barriers, variable quality, and management overhead that eats into your savings.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong style={{ color: 'var(--text)' }}>AI assistants</strong> are best suited for repetitive, high-volume tasks: answering calls, scheduling appointments, following up with leads, and managing routine customer inquiries. They work 24/7, never call in sick, and scale instantly.
                  </p>
                  <p>
                    The ideal approach for most small businesses is to use AI for routine tasks and reserve human talent for complex decisions, relationship building, and creative work. This hybrid model gives you the best of both worlds at a fraction of the cost.
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
