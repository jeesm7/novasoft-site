const puppeteer = require('puppeteer');

async function preview(options = {}) {
  const {
    url = 'http://localhost:3000',
    width = 1920,  // Higher res for better detail
    height = 1080,
    scrollY = 0,
    fullPage = false,
    outputPath = 'preview.png',
    sections = false  // Take multiple section screenshots
  } = options;

  const browser = await puppeteer.launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 2 }); // 2x for retina-quality
  
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  
  if (sections) {
    // Take screenshots of key sections
    const sectionOffsets = [
      { name: 'hero', y: 0 },
      { name: 'chat', y: 800 },
      { name: 'features', y: 1600 },
      { name: 'industries', y: 2400 },
      { name: 'testimonials', y: 3200 },
    ];
    
    for (const section of sectionOffsets) {
      await page.evaluate((y) => window.scrollTo(0, y), section.y);
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: `section-${section.name}.png` });
      console.log(`Saved: section-${section.name}.png`);
    }
  } else {
    if (scrollY > 0) {
      await page.evaluate((y) => window.scrollTo(0, y), scrollY);
      await new Promise(r => setTimeout(r, 500));
    }
    await page.screenshot({ path: outputPath, fullPage });
    console.log(`Saved: ${outputPath}`);
  }
  
  await browser.close();
}

// CLI usage
const args = process.argv.slice(2);
const options = {};

args.forEach(arg => {
  if (arg === '--full') options.fullPage = true;
  if (arg === '--sections') options.sections = true;
  if (arg.startsWith('--scroll=')) options.scrollY = parseInt(arg.split('=')[1]);
  if (arg.startsWith('--out=')) options.outputPath = arg.split('=')[1];
});

preview(options);
