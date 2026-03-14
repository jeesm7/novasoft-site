import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGlossaryBySlug, getAllGlossarySlugs, getRelatedTerms } from '@/data/glossary';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGlossaryBySlug(slug);
  if (!entry) return {};

  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    keywords: entry.keywords,
    alternates: {
      canonical: `https://novasoftai.com/glossary/${entry.slug}/`,
    },
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      url: `https://novasoftai.com/glossary/${entry.slug}/`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.metaTitle,
      description: entry.metaDescription,
    },
  };
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getGlossaryBySlug(slug);
  if (!entry) notFound();

  const relatedTerms = getRelatedTerms(slug, 4);

  // JSON-LD DefinedTerm schema
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": entry.term,
    "description": entry.shortDescription,
    "url": `https://novasoftai.com/glossary/${entry.slug}/`,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "AI & Automation Glossary",
      "url": "https://novasoftai.com/glossary/"
    }
  };

  // WebPage schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": entry.title,
    "description": entry.metaDescription,
    "url": `https://novasoftai.com/glossary/${entry.slug}/`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Novasoft AI",
      "url": "https://novasoftai.com"
    },
    "about": {
      "@type": "DefinedTerm",
      "name": entry.term,
      "description": entry.shortDescription
    },
    "publisher": {
      "@type": "Organization",
      "name": "Novasoft AI",
      "url": "https://novasoftai.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://novasoftai.com/" },
        { "@type": "ListItem", "position": 2, "name": "Glossary", "item": "https://novasoftai.com/glossary/" },
        { "@type": "ListItem", "position": 3, "name": entry.term, "item": `https://novasoftai.com/glossary/${entry.slug}/` }
      ]
    }
  };

  // Split definition into paragraphs
  const definitionParagraphs = entry.definition.split('\n\n').filter(Boolean);
  const businessParagraphs = entry.businessRelevance.split('\n\n').filter(Boolean);
  const exampleParagraphs = entry.exampleUseCase.split('\n\n').filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://novasoftai.com/' },
        { name: 'Glossary', url: 'https://novasoftai.com/glossary/' },
        { name: entry.term, url: `https://novasoftai.com/glossary/${entry.slug}/` },
      ]} />

      {/* Breadcrumbs */}
      <nav style={{
        background: 'var(--color-surface)',
        padding: '16px 0',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}>
        <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <ol style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            color: 'var(--color-text-muted)',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}>
            <li>
              <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/glossary" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Glossary</Link>
            </li>
            <li>/</li>
            <li style={{ color: 'var(--color-text)' }}>{entry.term}</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <header style={{ padding: '80px 0 60px' }}>
        <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(34, 197, 94, 0.1)',
              color: 'var(--color-accent)',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '24px',
              fontFamily: 'var(--font-display)',
            }}>
              {entry.category}
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-text)',
              marginBottom: '20px',
              fontFamily: 'var(--font-display)',
            }}>
              {entry.title}
            </h1>
            <p style={{
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
            }}>
              {entry.shortDescription}
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <article style={{ padding: '0 0 80px' }}>
        <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', maxWidth: '800px' }}>

            {/* Definition */}
            <section>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '24px',
                fontFamily: 'var(--font-display)',
              }}>
                Definition
              </h2>
              {definitionParagraphs.map((paragraph, index) => (
                <p key={index} style={{
                  fontSize: '17px',
                  lineHeight: 1.75,
                  color: 'var(--color-text-secondary)',
                  marginBottom: '20px',
                }}>
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Business Relevance */}
            <section style={{
              padding: '36px',
              borderRadius: '16px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border-subtle)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(34, 197, 94, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                }}>
                  💼
                </div>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-display)',
                }}>
                  Why It Matters for Business
                </h2>
              </div>
              {businessParagraphs.map((paragraph, index) => (
                <p key={index} style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                  marginBottom: index < businessParagraphs.length - 1 ? '16px' : '0',
                }}>
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Example Use Case */}
            <section style={{
              padding: '36px',
              borderRadius: '16px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border-accent)',
              borderLeft: '4px solid var(--color-accent)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(34, 197, 94, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                }}>
                  🏢
                </div>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-display)',
                }}>
                  Real-World Example
                </h2>
              </div>
              {exampleParagraphs.map((paragraph, index) => (
                <p key={index} style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                  marginBottom: index < exampleParagraphs.length - 1 ? '16px' : '0',
                }}>
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Related Resource */}
            <section>
              <h2 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '16px',
                fontFamily: 'var(--font-display)',
              }}>
                Learn More
              </h2>
              <Link
                href={entry.relatedLink}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  borderRadius: '14px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border-subtle)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
              >
                <div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-display)',
                  }}>
                    {entry.relatedLinkText}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--color-text-muted)',
                    marginTop: '4px',
                  }}>
                    Explore this topic in depth
                  </div>
                </div>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--color-accent)" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </section>
          </div>
        </div>
      </article>

      {/* Related Terms */}
      {relatedTerms.length > 0 && (
        <section style={{
          padding: '80px 0',
          borderTop: '1px solid var(--color-border-subtle)',
          background: 'var(--color-surface)',
        }}>
          <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '32px',
              fontFamily: 'var(--font-display)',
            }}>
              Related Terms
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}>
              {relatedTerms.map((related) => (
                <Link
                  key={related.slug}
                  href={`/glossary/${related.slug}`}
                  style={{
                    padding: '24px',
                    borderRadius: '14px',
                    background: 'var(--color-background)',
                    border: '1px solid var(--color-border-subtle)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{
                    fontSize: '13px',
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-display)',
                  }}>
                    {related.category}
                  </div>
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-display)',
                  }}>
                    {related.term}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.5,
                    flex: 1,
                  }}>
                    {related.shortDescription}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                  }}>
                    Read definition
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to glossary + CTA */}
      <section style={{ padding: '80px 0 120px' }}>
        <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}>
            <Link
              href="/glossary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '10px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
                fontFamily: 'var(--font-display)',
              }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Glossary
            </Link>

            <div style={{
              maxWidth: '600px',
              textAlign: 'center',
              padding: '40px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(59, 130, 246, 0.08))',
              border: '1px solid var(--color-border)',
            }}>
              <h2 style={{
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '12px',
                fontFamily: 'var(--font-display)',
              }}>
                See {entry.term} in Action
              </h2>
              <p style={{
                fontSize: '15px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                Novasoft AI helps businesses implement {entry.term.toLowerCase()} and other automation solutions. Book a free consultation to see what it can do for you.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  borderRadius: '10px',
                  background: 'var(--color-accent)',
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Book Free Consultation
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
