'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/85 backdrop-blur-xl border-b border-[var(--color-border-subtle)] w-full">
      <div style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-emerald-600 flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
              Novasoft AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link 
              href="/features" 
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-[15px] font-medium"
            >
              Features
            </Link>
            <Link 
              href="/industries" 
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-[15px] font-medium"
            >
              Industries
            </Link>
            <Link 
              href="/use-cases" 
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-[15px] font-medium"
            >
              Use Cases
            </Link>
            <Link 
              href="/case-studies" 
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-[15px] font-medium"
            >
              Case Studies
            </Link>
            <Link 
              href="/tools" 
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-[15px] font-medium"
            >
              Tools
            </Link>
            <Link 
              href="/blog" 
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-[15px] font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-[15px] font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="btn btn-accent">
              Get Started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-[var(--color-border-subtle)] animate-slide-down">
            <div className="flex flex-col gap-1">
              <Link 
                href="/features" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-elevated)] transition-colors py-3 px-4 rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/industries" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-elevated)] transition-colors py-3 px-4 rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link 
                href="/use-cases" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-elevated)] transition-colors py-3 px-4 rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Use Cases
              </Link>
              <Link 
                href="/case-studies" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-elevated)] transition-colors py-3 px-4 rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                href="/tools" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-elevated)] transition-colors py-3 px-4 rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tools
              </Link>
              <Link 
                href="/blog" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-elevated)] transition-colors py-3 px-4 rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-elevated)] transition-colors py-3 px-4 rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 px-4">
                <Link 
                  href="/contact" 
                  className="btn btn-accent w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
