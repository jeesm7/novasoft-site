import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = process.env.PROSPECT_WEBHOOK_URL || '';
const WEBHOOK_SECRET = process.env.PROSPECT_WEBHOOK_SECRET || '';

/**
 * GET /api/exclude-me — Excludes the visitor's IP from hot prospect alerts.
 * Visit this URL from your browser to stop triggering your own alerts.
 */
export async function GET(request: NextRequest) {
  const visitorIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown';

  if (!WEBHOOK_URL) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
  }

  try {
    // Derive the exclude-ip endpoint from the webhook URL
    const webhookBase = WEBHOOK_URL.replace('/hot-prospect', '');
    const response = await fetch(`${webhookBase}/exclude-ip`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: WEBHOOK_SECRET,
        ip: visitorIp,
        label: 'owner-self-excluded',
      }),
    });

    const result = await response.json();

    return new NextResponse(
      `<!DOCTYPE html>
<html><head><title>IP Excluded</title></head>
<body style="background:#09090b;color:#fafafa;font-family:system-ui;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0">
<div style="text-align:center;max-width:400px">
<h1 style="color:#22c55e">✅ Done</h1>
<p>Your IP <strong>${visitorIp}</strong> has been excluded from hot prospect alerts.</p>
<p style="color:#71717a;font-size:14px">You won't trigger notifications when browsing the site anymore.</p>
</div>
</body></html>`,
      { status: 200, headers: { 'Content-Type': 'text/html' } }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Failed to exclude IP', details: String(error) }, { status: 500 });
  }
}
