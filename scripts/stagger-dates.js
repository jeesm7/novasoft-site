#!/usr/bin/env node
/**
 * Stagger blog post dates to look realistic.
 * 
 * Strategy: Spread 100 posts across ~8 months (June 2025 - Jan 2026)
 * ~3 posts/week = ~12-13 per month, consistent cadence
 * Avoid weekends (most business blogs publish weekdays)
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'content', 'blog');

function isWeekend(d) {
  const day = d.getDay();
  return day === 0 || day === 6;
}

function formatDate(d) {
  return d.toISOString().split('T')[0];
}

// Seeded pseudo-random for reproducibility
let seed = 42;
function seededRandom() {
  seed = (seed * 16807 + 0) % 2147483647;
  return (seed - 1) / 2147483646;
}

function generateDates(count) {
  const dates = [];
  const start = new Date('2025-06-02'); // Monday
  const end = new Date('2026-01-26');   // Monday
  
  const totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24)); // ~239 days
  // Even spacing: 239 / 100 = ~2.39 days between posts
  const baseInterval = totalDays / count;
  
  for (let i = 0; i < count; i++) {
    // Base position evenly spaced
    const baseDays = Math.round(i * baseInterval);
    // Add small random jitter (-1 to +1 day)
    const jitter = Math.round((seededRandom() - 0.5) * 2);
    const dayOffset = Math.max(0, Math.min(totalDays, baseDays + jitter));
    
    let date = new Date(start.getTime() + dayOffset * 24 * 60 * 60 * 1000);
    
    // Push weekends to Monday
    while (isWeekend(date)) {
      date = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    }
    
    dates.push(date);
  }
  
  // Deduplicate: if same date, bump by 1 day
  dates.sort((a, b) => a - b);
  for (let i = 1; i < dates.length; i++) {
    if (formatDate(dates[i]) === formatDate(dates[i - 1])) {
      dates[i] = new Date(dates[i].getTime() + 24 * 60 * 60 * 1000);
      // Skip weekends again
      while (isWeekend(dates[i])) {
        dates[i] = new Date(dates[i].getTime() + 24 * 60 * 60 * 1000);
      }
    }
  }
  
  return dates;
}

// Main
function main() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
  files.sort();
  
  // Shuffle deterministically
  const shuffled = [...files];
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 16807) % 2147483647;
    const j = Math.floor(((seed - 1) / 2147483646) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  const dates = generateDates(shuffled.length);
  dates.sort((a, b) => a - b);
  
  console.log(`Staggering ${shuffled.length} posts from ${formatDate(dates[0])} to ${formatDate(dates[dates.length - 1])}\n`);
  
  let updated = 0;
  for (let i = 0; i < shuffled.length; i++) {
    const file = shuffled[i];
    const filePath = path.join(BLOG_DIR, file);
    const newDate = formatDate(dates[i]);
    
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/^date:\s*"[^"]+"/m, `date: "${newDate}"`);
    fs.writeFileSync(filePath, content);
    
    console.log(`${newDate}  ${file.replace('.mdx', '')}`);
    updated++;
  }
  
  // Monthly distribution
  console.log('\n=== MONTHLY DISTRIBUTION ===');
  const months = {};
  for (const d of dates) {
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    months[key] = (months[key] || 0) + 1;
  }
  for (const [month, count] of Object.entries(months).sort()) {
    console.log(`${month}: ${count} posts (${'█'.repeat(count)})`);
  }
  
  console.log(`\nUpdated: ${updated} posts`);
}

main();
