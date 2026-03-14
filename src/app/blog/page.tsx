import Link from 'next/link';
import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: "Blog - Novasoft AI | Tips, Guides & Updates",
  description: "Learn how to grow your business with AI automation. Tips, guides, case studies, and product updates.",
  alternates: {
    canonical: 'https://novasoftai.com/blog/',
  },
  openGraph: {
    title: "Blog - Novasoft AI | Tips, Guides & Updates",
    description: "Learn how to grow your business with AI automation. Tips, guides, case studies, and product updates.",
    url: 'https://novasoftai.com/blog/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Blog - Novasoft AI",
    description: "Learn how to grow your business with AI automation. Tips, guides, case studies, and product updates.",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  
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
      <section className="blog-hero" style={{ padding: '140px 80px 80px' }}>
        <div style={{ maxWidth: '600px' }}>
          <p style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            marginBottom: '16px'
          }}>
            BLOG
          </p>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '24px'
          }}>
            Tips, guides & updates
          </h1>
          <p style={{
            fontSize: '20px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)'
          }}>
            Learn how to grow your business with AI automation.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="blog-posts-section" style={{ padding: '40px 80px 160px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {posts.length > 0 ? (
            <div className="blog-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px'
            }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{
                    borderRadius: '20px',
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0',
                    transition: 'border-color 0.2s',
                    overflow: 'hidden'
                  }}
                >
                  {post.image && (
                    <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                      <img 
                        src={post.image} 
                        alt={post.imageAlt || post.title}
                        loading="lazy"
                        width={400}
                        height={180}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <h2 style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    lineHeight: 1.3
                  }}>
                    {post.title}
                  </h2>
                  <p style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    flex: 1
                  }}>
                    {post.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--accent)'
                  }}>
                    Read more
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '80px 40px',
              background: 'var(--surface-elevated)',
              borderRadius: '20px',
              border: '1px solid var(--border)'
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>
                Coming soon
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
                We&apos;re working on some great content. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
