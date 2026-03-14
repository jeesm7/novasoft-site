'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  category?: string;
}

export default function FAQAccordion({ items, category }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {category && (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '24px',
          padding: '8px 16px 8px 10px',
          background: 'var(--accent-dim)',
          borderRadius: '100px',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--accent)',
          letterSpacing: '0.02em'
        }}>
          {category}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} style={{ background: 'var(--surface-elevated)' }}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{
                  width: '100%',
                  padding: '24px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: isOpen ? 'var(--accent)' : 'var(--text)',
                  lineHeight: 1.4,
                  transition: 'color 0.2s',
                }}>
                  {item.question}
                </span>
                <span style={{
                  flexShrink: 0,
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: isOpen ? 'var(--accent-dim)' : 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s, background 0.2s',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke={isOpen ? 'var(--accent)' : 'var(--text-muted)'} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div style={{
                  padding: '0 28px 24px',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}>
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
