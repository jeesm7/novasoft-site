// This script generates static HTML pages for all niches
import { getAllSlugs } from '../src/data/niches';
import * as fs from 'fs';
import * as path from 'path';

async function generatePages() {
  const slugs = getAllSlugs();
  console.log(`Generating ${slugs.length} niche pages...`);
  
  // Read the template
  const templatePath = path.join(__dirname, '../out/ai-assistant-for-[slug]/index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Template not found. Run npm run build first.');
    process.exit(1);
  }
  
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  for (const slug of slugs) {
    const outDir = path.join(__dirname, `../out/ai-assistant-for-${slug}`);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    // For now, just copy the template - in production, you'd want to render each page
    fs.writeFileSync(path.join(outDir, 'index.html'), template);
    console.log(`Created: /ai-assistant-for-${slug}/`);
  }
  
  console.log('Done!');
}

generatePages();
