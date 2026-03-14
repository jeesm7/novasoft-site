'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Configuration
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || '';

// High-intent thresholds
const CONFIG = {
  minPagesForAlert: 3,        // Pages visited to trigger
  minScrollDepth: 80,         // Scroll % to count as engaged
  minTimeOnPage: 10000,       // 10 seconds on page
  alertCooldownMs: 300000,    // 5 min cooldown between alerts per session
  minSessionTime: 5000,       // Don't alert until 5s into session (filters bots)
};

// Check if this looks like a bot
function isBot(): boolean {
  if (typeof window === 'undefined') return true; // SSR
  const ua = navigator.userAgent.toLowerCase();
  const botPatterns = ['bot', 'crawler', 'spider', 'headless', 'lighthouse', 'pagespeed', 'prerender'];
  return botPatterns.some(p => ua.includes(p));
}

// High-value pages that indicate buying intent
const HIGH_INTENT_PAGES = ['/contact', '/features', '/use-cases'];

declare global {
  interface Window {
    clarity: (...args: unknown[]) => void;
  }
}

function getClaritySessionUrl(): string | null {
  if (!CLARITY_PROJECT_ID) return null;
  
  try {
    const cookies = document.cookie.split('; ');
    let clck = '';
    let clsk = '';
    
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === '_clck') clck = decodeURIComponent(value);
      if (name === '_clsk') clsk = decodeURIComponent(value);
    }
    
    if (clck && clsk) {
      // Split by ^ or | delimiter
      const userId = clck.includes('^') ? clck.split('^')[0] : clck.split('|')[0];
      const sessionId = clsk.includes('^') ? clsk.split('^')[0] : clsk.split('|')[0];
      
      if (userId && sessionId) {
        return `https://clarity.microsoft.com/player/${CLARITY_PROJECT_ID}/${userId}/${sessionId}`;
      }
    }
  } catch (e) {
    console.error('Error getting Clarity session URL:', e);
  }
  
  return null;
}

function getSessionData() {
  const stored = sessionStorage.getItem('novasoft_prospect');
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    pagesVisited: [],
    maxScrollDepth: 0,
    totalTimeOnSite: 0,
    alertSent: false,
    lastAlertTime: 0,
    entryTime: Date.now(),
    referrer: document.referrer || 'direct',
  };
}

function saveSessionData(data: ReturnType<typeof getSessionData>) {
  sessionStorage.setItem('novasoft_prospect', JSON.stringify(data));
}

async function sendHotProspectAlert(reason: string, data: ReturnType<typeof getSessionData>) {
  // Skip bots
  if (isBot()) {
    console.log('[HotProspect] Bot detected, skipping');
    return;
  }
  
  const now = Date.now();
  
  // Require minimum session time (filters quick bot visits)
  if ((now - data.entryTime) < CONFIG.minSessionTime) {
    console.log('[HotProspect] Session too short, skipping');
    return;
  }
  
  if (data.lastAlertTime && (now - data.lastAlertTime) < CONFIG.alertCooldownMs) {
    console.log('[HotProspect] Cooldown active, skipping alert');
    return;
  }
  
  const clarityUrl = getClaritySessionUrl();
  
  const payload = {
    event: 'hot_prospect',
    reason,
    claritySessionUrl: clarityUrl,
    data: {
      pagesVisited: data.pagesVisited,
      maxScrollDepth: data.maxScrollDepth,
      timeOnSite: Math.round((now - data.entryTime) / 1000),
      referrer: data.referrer,
      currentPage: window.location.pathname,
    },
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };
  
  try {
    // Call local API route (server adds secret)
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    
    data.lastAlertTime = now;
    data.alertSent = true;
    saveSessionData(data);
    
    console.log('[HotProspect] Alert sent:', reason);
  } catch (e) {
    console.error('[HotProspect] Failed to send alert:', e);
  }
}

export default function HotProspectTracker() {
  const pathname = usePathname();
  const scrollDepthRef = useRef(0);
  const pageStartTime = useRef(Date.now());
  
  // Load Clarity
  useEffect(() => {
    if (!CLARITY_PROJECT_ID) return;
    
    // Check if already loaded
    if (document.querySelector(`script[data-clarity="${CLARITY_PROJECT_ID}"]`)) return;
    
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-clarity', CLARITY_PROJECT_ID);
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
    `;
    document.head.appendChild(script);
  }, []);
  
  // Track page visits and check for high intent
  useEffect(() => {
    const data = getSessionData();
    
    // Add current page if not already tracked
    if (!data.pagesVisited.includes(pathname)) {
      data.pagesVisited.push(pathname);
      saveSessionData(data);
    }
    
    // Check: Visited high-intent page
    if (HIGH_INTENT_PAGES.includes(pathname)) {
      sendHotProspectAlert(`Visited high-intent page: ${pathname}`, data);
    }
    
    // Check: Multi-page engagement
    if (data.pagesVisited.length >= CONFIG.minPagesForAlert && !data.alertSent) {
      sendHotProspectAlert(`Visited ${data.pagesVisited.length} pages - highly engaged`, data);
    }
    
    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > scrollDepthRef.current) {
        scrollDepthRef.current = scrollPercent;
        
        const data = getSessionData();
        if (scrollPercent > data.maxScrollDepth) {
          data.maxScrollDepth = scrollPercent;
          saveSessionData(data);
          
          // Check: Deep scroll on homepage
          if (pathname === '/' && scrollPercent >= CONFIG.minScrollDepth && !data.alertSent) {
            sendHotProspectAlert('Scrolled 80%+ on homepage - very interested', data);
          }
        }
      }
    };
    
    // Track time on page
    pageStartTime.current = Date.now();
    const timeInterval = setInterval(() => {
      const timeOnPage = Date.now() - pageStartTime.current;
      if (timeOnPage >= CONFIG.minTimeOnPage) {
        const data = getSessionData();
        if (HIGH_INTENT_PAGES.includes(pathname) && !data.alertSent) {
          sendHotProspectAlert(`Spent ${Math.round(timeOnPage/1000)}s on ${pathname}`, data);
        }
      }
    }, 5000);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, [pathname]);
  
  // Track CTA clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link) {
        const href = link.getAttribute('href');
        const text = link.textContent?.toLowerCase() || '';
        
        // Check if it's a CTA click
        if (
          href === '/contact' ||
          text.includes('get started') ||
          text.includes('book') ||
          text.includes('demo') ||
          text.includes('try') ||
          link.classList.contains('btn-accent')
        ) {
          const data = getSessionData();
          sendHotProspectAlert(`Clicked CTA: "${link.textContent?.trim()}"`, data);
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  
  return null; // This component doesn't render anything
}
