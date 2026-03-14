'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Configuration
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || '';

// Enhanced high-intent thresholds
const CONFIG = {
  minPagesForAlert: 3,        // Pages visited to trigger
  minScrollDepth: 80,         // Scroll % to count as engaged
  minTimeOnPage: 15000,       // 15 seconds on page (was 10s)
  alertCooldownMs: 600000,    // 10 min cooldown between alerts per session (was 5 min)
  minSessionTime: 8000,       // Don't alert until 8s into session (was 5s)
  deepScrollThreshold: 90,    // Very deep scroll threshold
  rapidPageThreshold: 4,      // Rapid page browsing threshold
  longSessionThreshold: 300,  // 5 minutes = very engaged
};

// Check if this looks like a bot
function isBot(): boolean {
  if (typeof window === 'undefined') return true; // SSR
  const ua = navigator.userAgent.toLowerCase();
  const botPatterns = ['bot', 'crawler', 'spider', 'headless', 'lighthouse', 'pagespeed', 'prerender', 'phantom'];
  return botPatterns.some(p => ua.includes(p));
}

// Enhanced high-value pages that indicate buying intent
const HIGH_INTENT_PAGES = ['/contact', '/features', '/use-cases', '/pricing', '/demo', '/about'];
const VERY_HIGH_INTENT_PAGES = ['/contact', '/pricing', '/demo'];

// Form interaction detection patterns
const FORM_SELECTORS = ['input[type="email"]', 'input[type="text"]', 'textarea', 'select'];
const CTA_SELECTORS = [
  'a[href="/contact"]',
  'button:contains("get started")',
  'button:contains("book")',
  'button:contains("demo")',
  'button:contains("try")',
  '.btn-accent',
  '[data-cta]'
];

declare global {
  interface Window {
    clarity: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

// Enhanced Clarity session URL extraction with better error handling
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
      // Handle different cookie formats
      const userId = clck.includes('^') ? clck.split('^')[0] : 
                    clck.includes('|') ? clck.split('|')[0] : 
                    clck.split('.')[0];
      
      const sessionId = clsk.includes('^') ? clsk.split('^')[0] : 
                       clsk.includes('|') ? clsk.split('|')[0] : 
                       clsk.split('.')[0];
      
      if (userId && sessionId) {
        return `https://clarity.microsoft.com/player/${CLARITY_PROJECT_ID}/${userId}/${sessionId}`;
      }
    }
    
    // Fallback: try to get session info from Clarity API if available
    if (window.clarity && typeof window.clarity === 'function') {
      try {
        window.clarity('set', 'tracking', 'session_url');
      } catch (e) {
        console.debug('Clarity API call failed:', e);
      }
    }
    
  } catch (e) {
    console.error('Error getting Clarity session URL:', e);
  }
  
  return null;
}

// Enhanced session data with UTM tracking
function getSessionData() {
  const stored = sessionStorage.getItem('novasoft_prospect');
  if (stored) {
    return JSON.parse(stored);
  }
  
  // Extract UTM parameters from URL on first visit
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};
  
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
    const value = urlParams.get(param);
    if (value) utmParams[param] = value;
  });
  
  return {
    pagesVisited: [],
    maxScrollDepth: 0,
    totalTimeOnSite: 0,
    alertSent: false,
    lastAlertTime: 0,
    entryTime: Date.now(),
    referrer: document.referrer || 'direct',
    utmParams,
    formInteractions: 0,
    ctaClicks: 0,
    rapidPageViews: [],
    sessionId: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  };
}

function saveSessionData(data: ReturnType<typeof getSessionData>) {
  sessionStorage.setItem('novasoft_prospect', JSON.stringify(data));
}

// Enhanced alert scoring and sending
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
  
  // Enhanced payload with more context
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
      utmParams: data.utmParams,
      formInteractions: data.formInteractions,
      ctaClicks: data.ctaClicks,
      sessionId: data.sessionId,
      screenResolution: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };
  
  try {
    // Call local API route (server adds secret and IP)
    const response = await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    
    if (response.ok) {
      data.lastAlertTime = now;
      data.alertSent = true;
      saveSessionData(data);
      
      console.log('[HotProspect] Alert sent:', reason);
      
      // Track in Google Analytics if available
      if (window.gtag) {
        window.gtag('event', 'hot_prospect', {
          event_category: 'engagement',
          event_label: reason,
          value: 1
        });
      }
    } else {
      console.error('[HotProspect] Server rejected alert:', response.status);
    }
    
  } catch (e) {
    console.error('[HotProspect] Failed to send alert:', e);
  }
}

// Enhanced interaction tracking
function trackFormInteraction(data: ReturnType<typeof getSessionData>) {
  data.formInteractions++;
  saveSessionData(data);
  
  if (data.formInteractions === 1 && !data.alertSent) {
    sendHotProspectAlert('Started filling out a form (first interaction)', data);
  } else if (data.formInteractions >= 3) {
    sendHotProspectAlert(`Heavy form interaction (${data.formInteractions} interactions)`, data);
  }
}

function trackCtaClick(element: HTMLElement, data: ReturnType<typeof getSessionData>) {
  data.ctaClicks++;
  saveSessionData(data);
  
  const ctaText = element.textContent?.trim() || element.getAttribute('aria-label') || 'Unknown CTA';
  sendHotProspectAlert(`Clicked CTA: "${ctaText}"`, data);
}

// Detect rapid page browsing (high engagement indicator)
function trackRapidPageViewing(data: ReturnType<typeof getSessionData>) {
  const now = Date.now();
  data.rapidPageViews.push(now);
  
  // Keep only views from last 2 minutes
  data.rapidPageViews = data.rapidPageViews.filter(time => (now - time) < 120000);
  
  if (data.rapidPageViews.length >= CONFIG.rapidPageThreshold && !data.alertSent) {
    sendHotProspectAlert(`Rapid browsing - ${CONFIG.rapidPageThreshold} pages in 2 minutes`, data);
  }
  
  saveSessionData(data);
}

export default function HotProspectTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const scrollDepthRef = useRef(0);
  const pageStartTime = useRef(Date.now());
  const [hasLoadedClarity, setHasLoadedClarity] = useState(false);
  
  // Load Clarity with better error handling
  useEffect(() => {
    if (!CLARITY_PROJECT_ID || hasLoadedClarity) return;
    
    // Check if already loaded
    if (document.querySelector(`script[data-clarity="${CLARITY_PROJECT_ID}"]`)) {
      setHasLoadedClarity(true);
      return;
    }
    
    try {
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
      setHasLoadedClarity(true);
      
      console.log('[HotProspect] Clarity tracking loaded');
    } catch (e) {
      console.error('[HotProspect] Failed to load Clarity:', e);
    }
  }, [hasLoadedClarity]);
  
  // Enhanced page visit tracking
  useEffect(() => {
    const data = getSessionData();
    
    // Update UTM params if they're in the URL
    const urlParams = new URLSearchParams(searchParams.toString());
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      const value = urlParams.get(param);
      if (value) data.utmParams[param] = value;
    });
    
    // Add current page if not already tracked
    if (!data.pagesVisited.includes(pathname)) {
      data.pagesVisited.push(pathname);
      trackRapidPageViewing(data);
      saveSessionData(data);
    }
    
    // Check: Visited very high-intent page
    if (VERY_HIGH_INTENT_PAGES.includes(pathname)) {
      sendHotProspectAlert(`🎯 Visited VERY high-intent page: ${pathname}`, data);
    }
    // Check: Visited high-intent page
    else if (HIGH_INTENT_PAGES.includes(pathname) && !VERY_HIGH_INTENT_PAGES.includes(pathname)) {
      sendHotProspectAlert(`Visited high-intent page: ${pathname}`, data);
    }
    
    // Check: Multi-page engagement with graduated alerts
    if (data.pagesVisited.length === CONFIG.minPagesForAlert && !data.alertSent) {
      sendHotProspectAlert(`Visited ${data.pagesVisited.length} pages - getting engaged`, data);
    } else if (data.pagesVisited.length === 5 && !data.alertSent) {
      sendHotProspectAlert(`🔥 Visited 5 pages - highly engaged visitor!`, data);
    } else if (data.pagesVisited.length >= 7) {
      sendHotProspectAlert(`🔥🔥 SUPER engaged - ${data.pagesVisited.length} pages visited!`, data);
    }
    
    // Enhanced scroll depth tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100)));
      
      if (scrollPercent > scrollDepthRef.current) {
        scrollDepthRef.current = scrollPercent;
        
        const data = getSessionData();
        if (scrollPercent > data.maxScrollDepth) {
          data.maxScrollDepth = scrollPercent;
          saveSessionData(data);
          
          // Check: Deep scroll alerts with better thresholds
          if (pathname === '/' && scrollPercent >= CONFIG.deepScrollThreshold && !data.alertSent) {
            sendHotProspectAlert(`🎯 VERY deep scroll (${scrollPercent}%) on homepage - extremely interested!`, data);
          } else if (scrollPercent >= CONFIG.minScrollDepth && HIGH_INTENT_PAGES.includes(pathname) && !data.alertSent) {
            sendHotProspectAlert(`Deep scroll (${scrollPercent}%) on ${pathname} - very interested`, data);
          }
        }
      }
    };
    
    // Enhanced time tracking
    pageStartTime.current = Date.now();
    const timeInterval = setInterval(() => {
      const timeOnPage = Date.now() - pageStartTime.current;
      const totalTimeOnSite = Date.now() - data.entryTime;
      
      // Long session alert
      if (totalTimeOnSite >= CONFIG.longSessionThreshold * 1000 && !data.alertSent) {
        sendHotProspectAlert(`🕐 Long session - ${Math.round(totalTimeOnSite/60000)} minutes on site!`, data);
      }
      
      // Page-specific time alerts
      if (timeOnPage >= CONFIG.minTimeOnPage) {
        if (VERY_HIGH_INTENT_PAGES.includes(pathname) && !data.alertSent) {
          sendHotProspectAlert(`⏰ Spent ${Math.round(timeOnPage/1000)}s on ${pathname} - very interested!`, data);
        } else if (HIGH_INTENT_PAGES.includes(pathname) && timeOnPage >= 30000 && !data.alertSent) {
          sendHotProspectAlert(`Long time (${Math.round(timeOnPage/1000)}s) on ${pathname}`, data);
        }
      }
    }, 5000);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, [pathname, searchParams]);
  
  // Enhanced click tracking with form interaction detection
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const data = getSessionData();
      
      // Check for CTA clicks with better detection
      const link = target.closest('a, button');
      if (link) {
        const href = link.getAttribute('href');
        const text = link.textContent?.toLowerCase() || '';
        const classes = link.className.toLowerCase();
        
        const isCta = (
          href === '/contact' ||
          href === '/demo' ||
          href === '/pricing' ||
          text.includes('get started') ||
          text.includes('book') ||
          text.includes('demo') ||
          text.includes('try') ||
          text.includes('contact') ||
          text.includes('learn more') ||
          classes.includes('btn-accent') ||
          classes.includes('cta') ||
          link.hasAttribute('data-cta')
        );
        
        if (isCta) {
          trackCtaClick(link, data);
        }
      }
      
      // Check for form interactions
      const formElement = target.closest('input, textarea, select');
      if (formElement && FORM_SELECTORS.some(selector => target.matches(selector))) {
        trackFormInteraction(data);
      }
    };
    
    // Also track focus events for form interactions
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (FORM_SELECTORS.some(selector => target.matches(selector))) {
        const data = getSessionData();
        trackFormInteraction(data);
      }
    };
    
    document.addEventListener('click', handleClick);
    document.addEventListener('focus', handleFocus, true);
    
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('focus', handleFocus, true);
    };
  }, []);
  
  // Track page visibility changes (helps with engagement scoring)
  useEffect(() => {
    const handleVisibilityChange = () => {
      const data = getSessionData();
      
      if (document.hidden) {
        // Page became hidden - user might be comparing with competitors
        console.log('[HotProspect] Page hidden - user might be multitasking');
      } else {
        // Page became visible again
        console.log('[HotProspect] Page visible again - user returned');
        
        // If user returns after being away, it shows continued interest
        const timeAway = Date.now() - (data.lastVisibilityChange || data.entryTime);
        if (timeAway > 30000 && data.pagesVisited.length >= 2) { // 30 seconds away
          sendHotProspectAlert('🔄 Returned after multitasking - still interested!', data);
        }
      }
      
      data.lastVisibilityChange = Date.now();
      saveSessionData(data);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);
  
  return null; // This component doesn't render anything
}