import { NextRequest, NextResponse } from 'next/server';

// Server-side only - never exposed to browser
const WEBHOOK_URL = process.env.PROSPECT_WEBHOOK_URL || '';
const WEBHOOK_SECRET = process.env.PROSPECT_WEBHOOK_SECRET || '';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (data.event !== 'hot_prospect') {
      return NextResponse.json({ error: 'Invalid event' }, { status: 400 });
    }
    
    // Extract real visitor IP from Vercel headers
    const visitorIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';
    
    // Forward to webhook with server-side secret + visitor IP
    const payload = {
      ...data,
      secret: WEBHOOK_SECRET,
      visitorIp,
    };
    
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) {
      console.error('Webhook error:', await response.text());
      return NextResponse.json({ error: 'Webhook failed' }, { status: 502 });
    }
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Track API error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
