import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section min-h-[60vh] flex items-center">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-8xl font-bold text-gradient-accent mb-6">404</div>
          <h1 className="text-3xl font-bold mb-4">Page not found</h1>
          <p className="text-[var(--color-text-secondary)] mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn btn-accent">
              Go Home
            </Link>
            <Link href="/use-cases" className="btn btn-secondary">
              Browse Use Cases
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
