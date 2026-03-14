const fs = require('fs');
const path = require('path');

const themesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'blog-themes.json'), 'utf8'));
const postThemes = themesData.postThemes;

const blogDir = path.join(__dirname, '..', 'content', 'blog');
const imageDir = path.join(__dirname, '..', 'public', 'blog', 'images');

// Verify all theme images exist
const existingImages = fs.readdirSync(imageDir).map(f => f.replace('.jpg', ''));
const allThemes = [...new Set(Object.values(postThemes).map(p => p.theme))];
const missingImages = allThemes.filter(t => !existingImages.includes(t));
if (missingImages.length > 0) {
  console.error('Missing images for themes:', missingImages);
  process.exit(1);
}

let updated = 0;
let skipped = 0;
let errors = 0;

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));
console.log(`Processing ${files.length} blog posts...`);

for (const file of files) {
  const slug = file.replace('.mdx', '');
  const themeInfo = postThemes[slug];
  
  if (!themeInfo) {
    console.warn(`  ⚠ No theme for: ${slug}`);
    errors++;
    continue;
  }
  
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if already has image field
  if (content.match(/^image:/m)) {
    console.log(`  ⊘ Already has image: ${slug}`);
    skipped++;
    continue;
  }
  
  const imagePath = `/blog/images/${themeInfo.theme}.jpg`;
  
  // Insert image field after the opening ---
  // Find the first --- and the second ---
  const firstDash = content.indexOf('---');
  const secondDash = content.indexOf('---', firstDash + 3);
  
  if (firstDash === -1 || secondDash === -1) {
    console.warn(`  ⚠ No frontmatter found: ${slug}`);
    errors++;
    continue;
  }
  
  // Insert image before the closing ---
  const before = content.slice(0, secondDash);
  const after = content.slice(secondDash);
  
  // Make sure there's a newline before we add our field
  const newContent = before.trimEnd() + `\nimage: "${imagePath}"\n` + after;
  
  fs.writeFileSync(filePath, newContent);
  updated++;
  console.log(`  ✓ ${slug} → ${themeInfo.theme}.jpg`);
}

console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}, Errors: ${errors}`);
