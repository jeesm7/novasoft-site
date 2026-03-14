#!/usr/bin/env node
/**
 * Fetch free images from Unsplash for all blog posts.
 * Pipeline: categorize posts → search Unsplash → extract CDN ID → download → update frontmatter.
 * 
 * Unsplash License: Free to use for commercial and non-commercial purposes. No permission needed.
 * https://unsplash.com/license
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BLOG_DIR = path.join(__dirname, '..', 'content', 'blog');
const IMG_DIR = path.join(__dirname, '..', 'public', 'blog', 'images');
const PROGRESS_FILE = path.join(__dirname, 'image-progress.json');

// Theme-to-search-query mapping for blog posts
// Each post gets categorized, and we search for an appropriate image
const THEME_QUERIES = {
  'real-estate': 'real estate modern house property',
  'real-estate-agent': 'real estate agent client meeting',
  'real-estate-investor': 'real estate investment property',
  'dental': 'dental office modern dentist',
  'dental-patient': 'dental patient appointment',
  'veterinary': 'veterinary clinic pets',
  'medical-spa': 'medical spa wellness beauty',
  'chiropractic': 'chiropractic health wellness clinic',
  'fitness': 'fitness studio gym training',
  'hvac': 'hvac technician heating cooling',
  'plumbing': 'plumber plumbing service repair',
  'electrician': 'electrician electrical work',
  'roofing': 'roofing contractor roof construction',
  'contractor': 'contractor construction home improvement',
  'pest-control': 'pest control service home',
  'cleaning': 'cleaning service professional house',
  'landscaping': 'landscaping garden outdoor maintenance',
  'solar': 'solar panels renewable energy',
  'insurance': 'insurance agent client office',
  'law-firm': 'law firm lawyer office legal',
  'accounting': 'accounting finance office professional',
  'property-management': 'property management apartment building',
  'auto-repair': 'auto repair mechanic shop',
  'car-dealership': 'car dealership automotive showroom',
  'trucking': 'trucking logistics dispatch fleet',
  'restaurant': 'restaurant food service hospitality',
  'salon': 'hair salon beauty appointment',
  'ecommerce': 'ecommerce online shopping business',
  'recruiting': 'recruiting hiring interview office',
  'mortgage': 'mortgage broker home buying',
  'personal-injury': 'personal injury lawyer consultation',
  'voice-ai': 'phone call business technology AI',
  'chatbot': 'chatbot customer support messaging technology',
  'customer-service': 'customer service support team headset',
  'lead-generation': 'sales leads business growth chart',
  'sales-automation': 'sales team technology business meeting',
  'crm': 'CRM software business dashboard',
  'data-entry': 'data entry office computer work',
  'appointment': 'calendar appointment scheduling booking',
  'email-automation': 'email marketing inbox business',
  'invoice': 'invoice billing payment business',
  'business-automation': 'business automation technology office',
  'ai-general': 'artificial intelligence technology modern',
  'ai-tools': 'AI tools software business productivity',
  'ai-assistant': 'AI assistant robot technology helper',
  'cost-comparison': 'budget comparison business calculator',
  'small-business': 'small business owner entrepreneur',
  'whatsapp': 'whatsapp messaging business mobile phone',
};

// Map each blog post slug to a theme
function categorizePost(slug, title) {
  const s = (slug + ' ' + title).toLowerCase();
  
  // Industry-specific
  if (s.includes('real-estate-investor') || s.includes('real estate investor')) return 'real-estate-investor';
  if (s.includes('real-estate') || s.includes('real estate') || s.includes('realtor')) {
    if (s.includes('chatbot') || s.includes('listings')) return 'real-estate';
    if (s.includes('appointment') || s.includes('showing')) return 'real-estate-agent';
    return 'real-estate';
  }
  if (s.includes('dental') || s.includes('dentist')) {
    if (s.includes('patient')) return 'dental-patient';
    return 'dental';
  }
  if (s.includes('veterinar') || s.includes('vet clinic')) return 'veterinary';
  if (s.includes('med-spa') || s.includes('med spa')) return 'medical-spa';
  if (s.includes('chiropractic')) return 'chiropractic';
  if (s.includes('fitness') || s.includes('personal-trainer') || s.includes('personal trainer')) return 'fitness';
  if (s.includes('hvac')) return 'hvac';
  if (s.includes('plumb')) return 'plumbing';
  if (s.includes('electrician')) return 'electrician';
  if (s.includes('roofing') || s.includes('roofer')) return 'roofing';
  if (s.includes('contractor') && !s.includes('roofing')) return 'contractor';
  if (s.includes('pest-control') || s.includes('pest control')) return 'pest-control';
  if (s.includes('cleaning') || s.includes('house-clean')) return 'cleaning';
  if (s.includes('landscap')) return 'landscaping';
  if (s.includes('solar')) return 'solar';
  if (s.includes('insurance')) return 'insurance';
  if (s.includes('law-firm') || s.includes('law firm') || s.includes('lawyer')) {
    if (s.includes('personal-injury') || s.includes('personal injury')) return 'personal-injury';
    return 'law-firm';
  }
  if (s.includes('accounting') || s.includes('accountant')) return 'accounting';
  if (s.includes('property-manag') || s.includes('property manag') || s.includes('tenant')) return 'property-management';
  if (s.includes('auto-repair') || s.includes('auto repair')) return 'auto-repair';
  if (s.includes('car-dealership') || s.includes('car dealership')) return 'car-dealership';
  if (s.includes('trucking') || s.includes('dispatch')) return 'trucking';
  if (s.includes('restaurant')) return 'restaurant';
  if (s.includes('salon')) return 'salon';
  if (s.includes('ecommerce') || s.includes('e-commerce')) return 'ecommerce';
  if (s.includes('recruiting') || s.includes('candidate')) return 'recruiting';
  if (s.includes('mortgage')) return 'mortgage';
  if (s.includes('whatsapp')) return 'whatsapp';
  
  // Feature-specific
  if (s.includes('voice-ai') || s.includes('voice ai') || s.includes('phone') || s.includes('calling') || s.includes('call center') || s.includes('answering') || s.includes('receptionist')) return 'voice-ai';
  if (s.includes('chatbot') && !s.includes('vs')) return 'chatbot';
  if (s.includes('customer-service') || s.includes('customer service') || s.includes('customer support') || s.includes('24/7') || s.includes('24-7')) return 'customer-service';
  if (s.includes('lead') && (s.includes('follow') || s.includes('generat') || s.includes('response') || s.includes('cold'))) return 'lead-generation';
  if (s.includes('sales') && (s.includes('funnel') || s.includes('qualify'))) return 'sales-automation';
  if (s.includes('crm') || s.includes('data-entry') || s.includes('data entry')) return 'crm';
  if (s.includes('appointment') || s.includes('scheduling') || s.includes('booking') || s.includes('no-show')) return 'appointment';
  if (s.includes('email') || s.includes('follow-up') || s.includes('follow up')) return 'email-automation';
  if (s.includes('invoice') || s.includes('billing')) return 'invoice';
  if (s.includes('cost') || s.includes('pricing') || s.includes('budget') || s.includes('vs') || s.includes('comparison')) return 'cost-comparison';
  if (s.includes('chatbot')) return 'chatbot';
  if (s.includes('ai-tool') || s.includes('ai tool') || s.includes('best ai')) return 'ai-tools';
  if (s.includes('ai-assistant') || s.includes('ai assistant') || s.includes('task')) return 'ai-assistant';
  if (s.includes('small-business') || s.includes('small business') || s.includes('automate today') || s.includes('signs')) return 'small-business';
  
  // General fallbacks
  if (s.includes('automation') || s.includes('automate')) return 'business-automation';
  if (s.includes('ai')) return 'ai-general';
  
  return 'business-automation';
}

// Extract CDN photo ID from an Unsplash photo page
async function getUnsplashCdnId(photoUrl) {
  try {
    // Extract slug from URL - the ID is at the end after last hyphen
    const urlParts = photoUrl.split('/photos/');
    if (urlParts.length < 2) return null;
    
    const slug = urlParts[1].split('?')[0].split('#')[0];
    // The Unsplash ID is the last segment after the last hyphen in the slug
    // e.g., "man-working-on-laptop-wGlgRXVax5c" -> "wGlgRXVax5c"
    const photoId = slug.split('-').pop();
    
    // Fetch the actual page to get the full CDN ID  
    const html = execSync(`curl -sL "https://unsplash.com/photos/${photoId}" 2>/dev/null`, {
      timeout: 15000,
      maxBuffer: 1024 * 1024
    }).toString();
    
    const match = html.match(/images\.unsplash\.com\/photo-([^"?\s]+)/);
    if (match) return match[1];
    
    return null;
  } catch (e) {
    console.error(`  Error fetching CDN ID: ${e.message}`);
    return null;
  }
}

// Download an image from Unsplash CDN
function downloadImage(cdnId, filename) {
  const url = `https://images.unsplash.com/photo-${cdnId}?w=1200&h=630&fit=crop&q=80`;
  const outPath = path.join(IMG_DIR, filename);
  
  try {
    execSync(`curl -sL -o "${outPath}" "${url}"`, { timeout: 30000 });
    const stats = fs.statSync(outPath);
    if (stats.size < 5000) {
      fs.unlinkSync(outPath);
      return false;
    }
    return true;
  } catch (e) {
    console.error(`  Download failed: ${e.message}`);
    return false;
  }
}

// Update frontmatter in a blog post
function updateFrontmatter(filePath, imageUrl) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Check if image already exists in frontmatter
  if (content.match(/^image:/m)) {
    // Replace existing image line
    const updated = content.replace(/^image:.*$/m, `image: "${imageUrl}"`);
    fs.writeFileSync(filePath, updated);
  } else {
    // Add image before the closing ---
    const parts = content.split('---');
    if (parts.length >= 3) {
      parts[1] = parts[1].trimEnd() + `\nimage: "${imageUrl}"\n`;
      fs.writeFileSync(filePath, parts.join('---'));
    }
  }
}

// Main
async function main() {
  // Create image directory
  fs.mkdirSync(IMG_DIR, { recursive: true });
  
  // Load progress
  let progress = {};
  if (fs.existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
  }
  
  // Read all blog posts
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
  console.log(`Found ${files.length} blog posts`);
  
  // Categorize all posts
  const postsByTheme = {};
  const postThemes = {};
  
  for (const file of files) {
    const slug = file.replace('.mdx', '');
    const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const titleMatch = content.match(/^title:\s*"([^"]+)"/m);
    const title = titleMatch ? titleMatch[1] : slug;
    
    const theme = categorizePost(slug, title);
    postThemes[slug] = { theme, title };
    
    if (!postsByTheme[theme]) postsByTheme[theme] = [];
    postsByTheme[theme].push({ slug, title, file });
  }
  
  // Print categorization summary
  console.log('\n=== THEME CATEGORIZATION ===');
  for (const [theme, posts] of Object.entries(postsByTheme).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`\n${theme} (${posts.length} posts):`);
    posts.forEach(p => console.log(`  - ${p.slug}`));
  }
  
  // Save categorization for the sub-agent to use
  const output = { postThemes, postsByTheme, themeQueries: THEME_QUERIES };
  fs.writeFileSync(path.join(__dirname, 'blog-themes.json'), JSON.stringify(output, null, 2));
  console.log('\nSaved categorization to scripts/blog-themes.json');
  
  // Now search for and download images per theme
  const themeImages = {};
  const themes = Object.keys(postsByTheme);
  
  console.log(`\n=== DOWNLOADING IMAGES FOR ${themes.length} THEMES ===\n`);
  
  for (const theme of themes) {
    if (progress[theme]?.cdnId) {
      console.log(`✓ ${theme}: already downloaded (${progress[theme].filename})`);
      themeImages[theme] = progress[theme];
      continue;
    }
    
    const query = THEME_QUERIES[theme] || theme.replace(/-/g, ' ');
    console.log(`\n→ Searching for: "${query}" (theme: ${theme})`);
    
    // Search Unsplash via web search  
    let photoId = null;
    try {
      // Use curl to search Brave and find Unsplash photo URLs
      const searchQuery = encodeURIComponent(`unsplash.com/photos ${query}`);
      // We'll use a simpler approach - search Unsplash directly by fetching the search page
      const searchUrl = `https://unsplash.com/s/photos/${encodeURIComponent(query.replace(/\s+/g, '-'))}`;
      console.log(`  Fetching: ${searchUrl}`);
      
      const html = execSync(`curl -sL "${searchUrl}" 2>/dev/null`, {
        timeout: 20000,
        maxBuffer: 2 * 1024 * 1024
      }).toString();
      
      // Extract photo CDN IDs from the search results page
      const cdnMatches = [...html.matchAll(/images\.unsplash\.com\/photo-([a-f0-9-]+)/g)];
      const uniqueIds = [...new Set(cdnMatches.map(m => m[1]))];
      
      if (uniqueIds.length > 0) {
        // Pick a random one from first 5 results for variety
        const pick = Math.min(Math.floor(Math.random() * 5), uniqueIds.length - 1);
        const cdnId = uniqueIds[pick];
        const filename = `${theme}.jpg`;
        
        console.log(`  Found ${uniqueIds.length} images, using CDN ID: ${cdnId}`);
        
        if (downloadImage(cdnId, filename)) {
          console.log(`  ✓ Downloaded: ${filename}`);
          themeImages[theme] = { cdnId, filename, query };
          progress[theme] = { cdnId, filename, query };
          fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
        } else {
          console.log(`  ✗ Download failed`);
        }
      } else {
        console.log(`  ✗ No images found on search page`);
        
        // Fallback: try fetching individual photo page
        const pageMatch = html.match(/unsplash\.com\/photos\/[^"'\s]+/);
        if (pageMatch) {
          console.log(`  Trying fallback: ${pageMatch[0]}`);
          const cdnId2 = await getUnsplashCdnId('https://' + pageMatch[0]);
          if (cdnId2) {
            const filename = `${theme}.jpg`;
            if (downloadImage(cdnId2, filename)) {
              console.log(`  ✓ Downloaded (fallback): ${filename}`);
              themeImages[theme] = { cdnId: cdnId2, filename, query };
              progress[theme] = { cdnId: cdnId2, filename, query };
              fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
            }
          }
        }
      }
    } catch (e) {
      console.error(`  Error: ${e.message}`);
    }
    
    // Small delay to be nice
    execSync('sleep 1');
  }
  
  // Update all blog post frontmatter
  console.log('\n=== UPDATING BLOG POST FRONTMATTER ===\n');
  
  let updated = 0;
  let skipped = 0;
  let failed = 0;
  
  for (const file of files) {
    const slug = file.replace('.mdx', '');
    const theme = postThemes[slug].theme;
    const imageInfo = themeImages[theme];
    
    if (!imageInfo) {
      console.log(`✗ ${slug}: no image for theme "${theme}"`);
      failed++;
      continue;
    }
    
    const imageUrl = `/blog/images/${imageInfo.filename}`;
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if already has the correct image
    if (content.includes(imageUrl)) {
      skipped++;
      continue;
    }
    
    updateFrontmatter(filePath, imageUrl);
    console.log(`✓ ${slug} → ${imageUrl}`);
    updated++;
  }
  
  console.log(`\n=== DONE ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped (already set): ${skipped}`);
  console.log(`Failed (no image): ${failed}`);
  console.log(`Total: ${files.length}`);
}

main().catch(console.error);
