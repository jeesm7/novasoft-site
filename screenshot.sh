#!/bin/bash
cd /root/clawd/ai-assistant-site

# Check if server is running, start if not
if ! curl -s localhost:3000 > /dev/null 2>&1; then
  echo "Starting dev server..."
  nohup npx next dev > /tmp/next.log 2>&1 &
  sleep 10
fi

# Take screenshot
node -e "
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  const scrollY = process.argv[2] || 0;
  if (scrollY > 0) {
    await page.evaluate((y) => window.scrollTo(0, y), parseInt(scrollY));
    await new Promise(r => setTimeout(r, 300));
  }
  const fullPage = process.argv[3] === 'full';
  await page.screenshot({ path: 'live-preview.png', fullPage });
  await browser.close();
  console.log('Screenshot saved');
})();
" $1 $2
