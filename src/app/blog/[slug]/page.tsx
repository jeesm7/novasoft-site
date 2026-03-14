import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Novasoft AI Blog`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://novasoftai.com/blog/${slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      url: `https://novasoftai.com/blog/${slug}/`,
      ...(post.image ? { images: [{ url: `https://novasoftai.com${post.image}`, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

// Custom MDX components
const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mt-12 mb-6 text-[var(--color-text)]" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-bold mt-10 mb-4 text-[var(--color-text)]" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-semibold mt-8 mb-3 text-[var(--color-text)]" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-xl font-semibold mt-6 mb-2 text-[var(--color-text)]" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-6 space-y-2 text-[var(--color-text-secondary)]" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-6 space-y-2 text-[var(--color-text-secondary)]" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[var(--color-accent)] hover:underline" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-[var(--color-accent)] pl-6 py-2 my-6 italic text-[var(--color-text-secondary)]" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-[var(--color-surface-elevated)] px-2 py-1 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-[var(--color-surface-elevated)] p-4 rounded-lg overflow-x-auto mb-6 text-sm" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-[var(--color-text)]" {...props} />
  ),
  hr: () => (
    <hr className="border-[var(--color-border)] my-8" />
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();
  
  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Novasoft AI",
      "url": "https://novasoftai.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://novasoftai.com/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    ...(post.image ? { "image": { "@type": "ImageObject", "url": `https://novasoftai.com${post.image}`, "width": 1200, "height": 630, "caption": post.imageCaption || post.description } } : {}),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://novasoftai.com/blog/${post.slug}/`
    },
    "url": `https://novasoftai.com/blog/${post.slug}/`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://novasoftai.com/' },
        { name: 'Blog', url: 'https://novasoftai.com/blog/' },
        { name: post.title, url: `https://novasoftai.com/blog/${post.slug}/` },
      ]} />
      
      {/* Breadcrumbs */}
      <nav className="bg-[var(--color-surface)] py-4 border-b border-[var(--color-border-subtle)]">
        <div className="container">
          <ol className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-[var(--color-accent)]">Blog</Link>
            </li>
            <li>/</li>
            <li className="text-[var(--color-text)]">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <header className="section bg-gradient-radial">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm">
                {post.category}
              </span>
              <span className="text-[var(--color-text-muted)]">•</span>
              <span className="text-[var(--color-text-muted)] text-sm">{post.readingTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <p className="text-xl text-[var(--color-text-secondary)] mb-8">
              {post.description}
            </p>
            
            {/* Hero Image */}
            {post.image && (
              <figure className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.imageAlt || post.title}
                  title={post.title}
                  loading="eager"
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '420px', width: '100%', objectFit: 'cover' }}
                />
                {post.imageCaption && (
                  <figcaption className="text-sm text-[var(--color-text-muted)] mt-3 text-center italic">
                    {post.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}
            
            <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-emerald-600 flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[var(--color-surface)] text-xs text-[var(--color-text-muted)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-[var(--color-surface)]">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="h-full p-6 rounded-xl bg-[var(--color-background)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-all">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                      {relatedPost.description}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-primary)]/10 border border-[var(--color-border)]">
            <h2 className="text-2xl font-bold mb-4">Ready to Automate Your Business?</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Get your own AI assistant that handles customer inquiries, scheduling, and more.
            </p>
            <Link href="/contact" className="btn btn-accent px-8 py-3">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
