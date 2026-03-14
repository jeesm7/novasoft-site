import Link from 'next/link';
import { Metadata } from 'next';
import { getAllGlossaryEntries, getAllCategories, getGlossaryByCategory } from '@/data/glossary';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'AI & Automation Glossary | Novasoft AI',
  description: 'Your complete glossary of AI and business automation terms. Learn what AI chatbots, voice AI, workflow automation, CRM automation, and more mean for your business.',
  keywords: ['AI glossary', 'automation glossary', 'AI terms defined', 'business automation glossary', 'AI definitions', 'what is AI automation'],
  alternates: {
    canonical: 'https://novasoftai.com/glossary/',
  },
  openGraph: {
    title: 'AI & Automation Glossary | Novasoft AI',
    description: 'Your complete glossary of AI and business automation terms. Plain-language definitions with real-world business examples.',
    url: 'https://novasoftai.com/glossary/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Automation Glossary | Novasoft AI',
    description: 'Your complete glossary of AI and business automation terms. Plain-language definitions with real-world business examples.',
  },
};

const categoryIcons: Record<string, string> = {
  'AI Fundamentals': '🧠',
  'Voice & Communication': '🎙️',
  'Sales & Marketing': '📈',
  'Automation & Integration': '⚙️',
  'Tools & Platforms': '🛠️',
};

const categoryDescriptions: Record<string, string> = {
  'AI Fundamentals': 'Core AI concepts that power modern business automation.',
  'Voice & Communication': 'Technologies that enable AI-powered phone calls, chat, and messaging.',
  'Sales & Marketing': 'AI tools for lead generation, qualification, and sales outreach.',
  'Automation & Integration': 'Connecting your tools and automating business processes end to end.',
  'Tools & Platforms': 'Popular platforms used to build and deploy AI automation solutions.',
};

export default function GlossaryPage() {
  const allEntries = getAllGlossaryEntries();
  const categories = getAllCategories();

  // Build alphabetical index
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const entriesByLetter: Record<string, typeof allEntries> = {};
  allEntries.forEach((entry) => {
    const firstChar = entry.term.charAt(0).toUpperCase();
    // Group numbers and special chars under '#'
    const letter = /[A-Z]/.test(firstChar) ? firstChar : '#';
    if (!entriesByLetter[letter]) entriesByLetter[letter] = [];
    entriesByLetter[letter].push(entry);
  });

  const glossarySchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "AI & Automation Glossary",
    "description": "A comprehensive glossary of AI and business automation terms with plain-language definitions and real-world examples.",
    "url": "https://novasoftai.com/glossary/",
    "hasDefinedTerm": allEntries.map((entry) => ({
      "@type": "DefinedTerm",
      "name": entry.term,
      "description": entry.shortDescription,
      "url": `https://novasoftai.com/glossary/${entry.slug}/`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://novasoftai.com/' },
        { name: 'Glossary', url: 'https://novasoftai.com/glossary/' },
      ]} />

      {/* Hero */}
      <section style={{ padding: '140px 0 80px' }}>
        <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ maxWidth: '700px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--color-accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              fontFamily: 'var(--font-display)',
            }}>
              GLOSSARY
            </p>
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--color-text)',
              marginBottom: '24px',
              fontFamily: 'var(--font-display)',
            }}>
              AI & Automation<br />Glossary
            </h1>
            <p style={{
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
              maxWidth: '560px',
            }}>
              Plain-language definitions for the AI and automation terms that matter to your business. No jargon, just clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Quick alphabet nav */}
      <section style={{ padding: '0 0 60px', position: 'sticky', top: '64px', zIndex: 30, background: 'var(--color-background)' }}>
        <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            padding: '16px 0',
            borderBottom: '1px solid var(--color-border-subtle)',
          }}>
            {alphabet.map((letter) => {
              const hasEntries = entriesByLetter[letter] && entriesByLetter[letter].length > 0;
              return (
                <span key={letter}>
                  {hasEntries ? (
                    <a
                      href={`#letter-${letter}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        background: 'var(--color-surface-elevated)',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      {letter}
                    </a>
                  ) : (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--color-text-faint)',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      {letter}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '0 0 80px' }}>
        <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            color: 'var(--color-text)',
            marginBottom: '40px',
            fontFamily: 'var(--font-display)',
          }}>
            Browse by Category
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {categories.map((category) => {
              const entries = getGlossaryByCategory(category);
              return (
                <a
                  key={category}
                  href={`#category-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  style={{
                    padding: '28px',
                    borderRadius: '16px',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border-subtle)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{ fontSize: '28px' }}>{categoryIcons[category] || '📖'}</div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-display)',
                  }}>
                    {category}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.5,
                  }}>
                    {categoryDescriptions[category]}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: 'var(--color-text-muted)',
                  }}>
                    {entries.length} {entries.length === 1 ? 'term' : 'terms'}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* All terms by category */}
      <section style={{ padding: '0 0 80px' }}>
        <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          {categories.map((category) => {
            const entries = getGlossaryByCategory(category);
            const categoryId = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <div key={category} id={`category-${categoryId}`} style={{ marginBottom: '80px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                  <span style={{ fontSize: '24px' }}>{categoryIcons[category] || '📖'}</span>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-display)',
                  }}>
                    {category}
                  </h2>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                  gap: '20px',
                }}>
                  {entries.map((entry) => (
                    <Link
                      key={entry.slug}
                      href={`/glossary/${entry.slug}`}
                      style={{
                        padding: '28px',
                        borderRadius: '16px',
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border-subtle)',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        fontFamily: 'var(--font-display)',
                      }}>
                        {entry.term}
                      </h3>
                      <p style={{
                        fontSize: '15px',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.6,
                        flex: 1,
                      }}>
                        {entry.shortDescription}
                      </p>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--color-accent)',
                      }}>
                        Read definition
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Alphabetical listing */}
      <section style={{ padding: '0 0 80px', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '80px' }}>
        <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            color: 'var(--color-text)',
            marginBottom: '40px',
            fontFamily: 'var(--font-display)',
          }}>
            All Terms A-Z
          </h2>
          {alphabet.map((letter) => {
            const entries = entriesByLetter[letter];
            if (!entries || entries.length === 0) return null;
            return (
              <div key={letter} id={`letter-${letter}`} style={{ marginBottom: '48px' }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  marginBottom: '16px',
                  paddingBottom: '8px',
                  borderBottom: '2px solid var(--color-border-subtle)',
                  fontFamily: 'var(--font-display)',
                }}>
                  {letter}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {entries.map((entry) => (
                    <Link
                      key={entry.slug}
                      href={`/glossary/${entry.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 20px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        transition: 'background 0.2s',
                        background: 'transparent',
                      }}
                    >
                      <div>
                        <span style={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: 'var(--color-text)',
                          fontFamily: 'var(--font-display)',
                        }}>
                          {entry.term}
                        </span>
                        <span style={{
                          fontSize: '14px',
                          color: 'var(--color-text-muted)',
                          marginLeft: '16px',
                        }}>
                          {entry.category}
                        </span>
                      </div>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--color-text-muted)" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 120px' }}>
        <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '48px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(59, 130, 246, 0.08))',
            border: '1px solid var(--color-border)',
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '16px',
              fontFamily: 'var(--font-display)',
            }}>
              Ready to Put These Concepts to Work?
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              Novasoft AI builds custom automation solutions using the technologies in this glossary. See what AI can do for your business.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                borderRadius: '12px',
                background: 'var(--color-accent)',
                color: '#000',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
                fontFamily: 'var(--font-display)',
              }}
            >
              Get Started
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
