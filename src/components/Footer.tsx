import Link from 'next/link';
import { getAllIndustries, getNichesByIndustry } from '@/data/niches';

export default function Footer() {
  const industries = getAllIndustries().slice(0, 6);

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border-subtle)] w-full">
      <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        {/* Main Footer */}
        <div className="py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-emerald-600 flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-[var(--color-text)]" style={{ fontFamily: 'var(--font-display)' }}>Novasoft AI</span>
            </Link>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-8 max-w-xs">
              Your AI assistant that actually does stuff. Automate your business, delight your customers.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-[var(--color-text)] font-semibold mb-5" style={{ fontFamily: 'var(--font-display)' }}>Product</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Features</Link></li>
              <li><Link href="/use-cases" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Use Cases</Link></li>
              <li><Link href="/case-studies" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Integrations</Link></li>
              <li><Link href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">API</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[var(--color-text)] font-semibold mb-5" style={{ fontFamily: 'var(--font-display)' }}>Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">FAQ</Link></li>
              <li><Link href="/glossary" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Glossary</Link></li>
              <li><a href="https://openclawconsultant.com" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">OpenClaw Consulting</a></li>
              <li><a href="https://openclawsetup.xyz" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">OpenClaw Setup</a></li>
              <li><a href="https://moltbot.ceo" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Moltbot Platform</a></li>
              <li><a href="https://cyndra.ai" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Built with Cyndra AI</a></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-[var(--color-text)] font-semibold mb-5" style={{ fontFamily: 'var(--font-display)' }}>Industries</h4>
            <ul className="space-y-4">
              {industries.map(industry => {
                const firstNiche = getNichesByIndustry(industry)[0];
                return (
                  <li key={industry}>
                    <Link 
                      href={`/${firstNiche.slug}`} 
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors"
                    >
                      {industry}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-[var(--color-text)] font-semibold mb-5" style={{ fontFamily: 'var(--font-display)' }}>Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">Security</Link></li>
              <li><Link href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-sm transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-muted)] text-sm">
            © {new Date().getFullYear()} Novasoft AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2.5 text-[var(--color-text-muted)] text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
