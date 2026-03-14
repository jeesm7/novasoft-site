#!/usr/bin/env node
/**
 * Generate and insert imageAlt + imageCaption into all blog posts.
 * Each post gets unique, SEO-optimized alt text and caption even if they share images.
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'content', 'blog');

// Generate descriptive alt text from post title/slug
function generateAltText(title, slug) {
  // Create a descriptive, keyword-rich alt text based on the post topic
  const t = title.toLowerCase();
  
  // Industry-specific alt texts
  if (t.includes('real estate') && t.includes('investor')) return `Real estate investor analyzing property data with AI-powered lead generation tools on laptop screen`;
  if (t.includes('real estate') && t.includes('chatbot')) return `AI chatbot interface displaying real estate property listings and automated client responses`;
  if (t.includes('real estate') && t.includes('appointment')) return `Real estate agent using AI appointment scheduling software to book property showings automatically`;
  if (t.includes('real estate') && t.includes('pipeline')) return `AI-powered real estate lead pipeline dashboard showing automated follow-up sequences`;
  if (t.includes('real estate') && t.includes('transform')) return `Modern real estate office with AI technology transforming property sales and client management`;
  if (t.includes('real estate')) return `AI automation tools streamlining real estate business operations and lead management`;
  
  if (t.includes('dental') && t.includes('patient')) return `Dental office front desk with AI-powered patient communication and appointment reminder system`;
  if (t.includes('dental')) return `Modern dental practice using AI automation for patient scheduling and communication`;
  
  if (t.includes('veterinar') && t.includes('booking')) return `Veterinary clinic reception area with online booking system reducing phone call volume`;
  if (t.includes('veterinar')) return `Veterinary clinic using AI-powered appointment scheduling and client communication tools`;
  
  if (t.includes('chiropractic')) return `Chiropractic office with AI automation handling patient scheduling and follow-up communications`;
  if (t.includes('med spa') || t.includes('med-spa')) return `Medical spa reception with AI-powered appointment booking and client follow-up automation`;
  if (t.includes('fitness') || t.includes('personal trainer')) return `Fitness studio using AI technology to reduce no-shows and manage client retention`;
  
  if (t.includes('hvac')) return `HVAC technician on service call while AI system manages incoming leads and job scheduling`;
  if (t.includes('plumb')) return `Professional plumber with AI-powered scheduling and lead follow-up system running in background`;
  if (t.includes('electrician')) return `Electrician business using AI customer acquisition tools to generate and convert more leads`;
  if (t.includes('roofing') && t.includes('lead')) return `Roofing contractor reviewing AI-managed lead pipeline and automated follow-up dashboard`;
  if (t.includes('roofing')) return `Roofing company office with AI automation handling lead management and customer communication`;
  if (t.includes('contractor') && t.includes('estimate')) return `General contractor using AI tools for automated estimate scheduling and client communication`;
  if (t.includes('pest control')) return `Pest control service van with AI-powered scheduling and customer booking system`;
  if (t.includes('cleaning') && t.includes('book')) return `Professional cleaning team with AI booking automation system managing service appointments`;
  if (t.includes('cleaning')) return `House cleaning service using AI automation to streamline booking and customer communication`;
  if (t.includes('landscap')) return `Landscaping company crew with AI-powered scheduling and client management running seamlessly`;
  if (t.includes('solar')) return `Solar panel installation team with AI lead follow-up system tracking prospect engagement`;
  
  if (t.includes('insurance') && t.includes('retention')) return `Insurance agency office using AI automation for client retention and policy renewal reminders`;
  if (t.includes('insurance')) return `Insurance agent using AI-powered lead follow-up and client communication tools`;
  if (t.includes('law firm') || t.includes('lawyer')) return `Law firm office with AI answering service capturing client inquiries around the clock`;
  if (t.includes('personal injury')) return `Personal injury law office using AI to automate client intake and case qualification`;
  if (t.includes('accounting') || t.includes('accountant')) return `Accounting firm workspace with AI automation handling client communication and document collection`;
  if (t.includes('property manag') || t.includes('tenant')) return `Property management office using AI tools to automate tenant communication and maintenance requests`;
  if (t.includes('auto repair')) return `Auto repair shop front desk with AI customer communication and service scheduling system`;
  if (t.includes('car dealership')) return `Car dealership showroom with AI-powered lead follow-up and customer engagement automation`;
  if (t.includes('trucking') || t.includes('dispatch')) return `Trucking company dispatch center using AI automation for fleet management and route optimization`;
  if (t.includes('restaurant')) return `Restaurant using AI phone ordering system to handle customer calls and reservations`;
  if (t.includes('salon')) return `Hair salon using AI appointment reminder system to reduce no-shows and fill empty slots`;
  if (t.includes('ecommerce') || t.includes('e-commerce')) return `Ecommerce business dashboard showing AI chatbot handling customer support tickets automatically`;
  if (t.includes('recruiting') || t.includes('candidate')) return `Recruiting agency office using AI to screen candidates and automate interview scheduling`;
  if (t.includes('mortgage')) return `Mortgage broker using AI lead qualification tools to identify and prioritize ready buyers`;
  
  // Feature-specific
  if (t.includes('voice ai') && t.includes('appointment')) return `AI voice assistant interface handling automated appointment booking over phone calls`;
  if (t.includes('voice ai') || t.includes('voice agent')) return `AI voice technology interface showing real-time call handling and natural language processing`;
  if (t.includes('cold call')) return `Sales team workspace with AI cold calling software managing outbound call campaigns`;
  if (t.includes('calling system')) return `AI-powered calling system dashboard displaying automated sales call analytics and outcomes`;
  if (t.includes('phone') && t.includes('answer')) return `Business phone system with AI answering service handling customer calls professionally`;
  if (t.includes('phone') && t.includes('system')) return `AI phone system setup interface for small business automated call handling`;
  if (t.includes('receptionist') && t.includes('replace')) return `Modern office reception area comparing AI receptionist capabilities to traditional front desk staff`;
  if (t.includes('receptionist')) return `AI receptionist system interface handling incoming calls and appointment scheduling`;
  if (t.includes('call center')) return `Side-by-side comparison of AI voice agents and traditional call center operations and costs`;
  
  if (t.includes('chatbot') && t.includes('whatsapp')) return `WhatsApp Business interface showing AI chatbot handling customer conversations automatically`;
  if (t.includes('chatbot') && t.includes('cost')) return `Business cost breakdown dashboard comparing AI chatbot pricing plans and implementation options`;
  if (t.includes('chatbot') && t.includes('vs') && t.includes('live')) return `Split screen comparing AI chatbot and live chat agent conversion rates and response times`;
  if (t.includes('chatbot') && t.includes('develop')) return `Custom AI chatbot development interface showing conversation flow builder and integration options`;
  if (t.includes('chatbot')) return `AI chatbot interface handling customer support conversations with fast automated responses`;
  
  if (t.includes('customer service') || t.includes('customer support')) return `Customer service team dashboard with AI handling support tickets and response automation`;
  if (t.includes('24/7') || t.includes('night staff')) return `Business operating around the clock with AI customer support handling after-hours inquiries`;
  
  if (t.includes('lead') && t.includes('follow')) return `AI lead follow-up system dashboard showing automated email sequences and engagement tracking`;
  if (t.includes('lead') && t.includes('response')) return `Lightning-fast AI lead response system converting website inquiries into booked appointments`;
  if (t.includes('lead') && t.includes('generat')) return `AI lead generation funnel visualization showing automated prospect capture and qualification`;
  if (t.includes('lead') && t.includes('cold')) return `Warm lead notification on business phone from AI-powered outreach and follow-up campaign`;
  if (t.includes('lead') && t.includes('qualify')) return `AI sales qualification dashboard sorting leads by readiness score and engagement level`;
  if (t.includes('sales') && t.includes('funnel')) return `AI-powered sales funnel dashboard showing automated lead nurturing and conversion tracking`;
  if (t.includes('follow-up') || t.includes('follow up')) return `AI follow-up automation system sending personalized messages to customers at optimal times`;
  
  if (t.includes('crm') && t.includes('data entry')) return `CRM dashboard with AI automating data entry and contact record updates in real time`;
  if (t.includes('crm')) return `Business CRM interface showing AI-automated data entry and customer record management`;
  if (t.includes('data entry')) return `Office workspace with AI eliminating manual data entry through intelligent automation`;
  
  if (t.includes('appointment') && t.includes('booking')) return `AI appointment booking interface showing calendar integration and automated scheduling flow`;
  if (t.includes('appointment') && t.includes('reminder')) return `Automated appointment reminder system sending SMS and email notifications to reduce no-shows`;
  if (t.includes('scheduling')) return `AI scheduling tool interface with calendar view and automated booking confirmation system`;
  
  if (t.includes('email') && t.includes('automate')) return `Email automation dashboard showing AI-managed follow-up sequences and personalized outreach`;
  if (t.includes('invoice')) return `AI invoice creation interface automating billing and payment processing for small business`;
  
  if (t.includes('cost') && t.includes('comparison')) return `Business cost comparison chart showing AI assistant savings versus traditional employee expenses`;
  if (t.includes('pricing') && t.includes('agency')) return `AI automation agency pricing breakdown showing service tiers and expected business ROI`;
  if (t.includes('vs') && t.includes('hiring')) return `Side-by-side comparison of AI automation costs versus hiring additional employees`;
  if (t.includes('zapier') || t.includes('virtual assistant')) return `Comparison chart of AI automation platforms versus manual virtual assistant services`;
  if (t.includes('chatgpt') && t.includes('not enough')) return `ChatGPT interface next to business task execution showing gap between chat AI and action AI`;
  
  if (t.includes('implementation') || t.includes('partner')) return `Business team meeting discussing AI automation implementation strategy and partner selection`;
  if (t.includes('hire') && t.includes('agency')) return `Business owner evaluating AI automation agencies versus building in-house AI capabilities`;
  if (t.includes('consultant')) return `AI automation consultant presenting business process improvement recommendations to client`;
  if (t.includes('white label') || t.includes('white-label')) return `White label AI voice agent platform dashboard for agencies managing multiple client deployments`;
  
  if (t.includes('small business') && t.includes('task')) return `Small business owner reviewing list of daily tasks that can be automated with AI tools`;
  if (t.includes('small business') && t.includes('2026')) return `Forward-looking business technology setup with AI automation tools for small business in 2026`;
  if (t.includes('small business')) return `Small business owner using AI productivity tools to automate routine operations`;
  if (t.includes('20 hours')) return `Business owner checking watch while AI assistant handles routine tasks saving 20+ hours weekly`;
  if (t.includes('signs') && t.includes('automation')) return `Overwhelmed business owner surrounded by manual tasks that AI automation could streamline`;
  if (t.includes('set up') || t.includes('setup') || t.includes('step-by-step')) return `Step-by-step AI business assistant setup interface showing configuration and integration process`;
  if (t.includes('what is') && t.includes('agent')) return `Illustrated diagram explaining how AI agents work to autonomously execute business tasks`;
  if (t.includes('what is') && t.includes('voice')) return `Visual explainer showing how voice AI technology processes and responds to business phone calls`;
  if (t.includes('task') && t.includes('not just')) return `AI system actively executing business tasks on screen rather than just providing text suggestions`;
  if (t.includes('actually does')) return `AI automation dashboard showing completed real-world business tasks and measurable results`;
  if (t.includes('best ai tool')) return `Collection of top AI business tools displayed on laptop screen for small business productivity`;
  if (t.includes('reduce') && t.includes('cost')) return `Business cost reduction chart showing savings from AI-powered customer service automation`;
  if (t.includes('hidden cost')) return `Calculator showing hidden costs of manual data entry compared to AI automation savings`;
  if (t.includes('outsource')) return `Business meeting discussing outsourced AI chatbot development versus in-house implementation`;
  
  // Fallback: generate from title
  const clean = title.replace(/[:?!]/g, '').replace(/\s+/g, ' ').trim();
  return `Professional business setting illustrating ${clean.toLowerCase().substring(0, 80)}`;
}

// Generate engaging caption from post title
function generateCaption(title, slug) {
  const t = title.toLowerCase();
  
  // Industry-specific
  if (t.includes('real estate') && t.includes('investor')) return `AI automation helps real estate investors capture and qualify leads without manual follow-up.`;
  if (t.includes('real estate') && t.includes('chatbot')) return `Smart chatbots convert property browsers into qualified buyers around the clock.`;
  if (t.includes('real estate') && t.includes('appointment')) return `Never miss a showing opportunity with AI-powered appointment scheduling for real estate.`;
  if (t.includes('real estate') && t.includes('pipeline')) return `Automated lead pipelines keep real estate agents focused on closing, not chasing.`;
  if (t.includes('real estate') && t.includes('transform')) return `AI is reshaping how real estate professionals manage clients and close deals.`;
  if (t.includes('real estate')) return `AI automation streamlines real estate operations from lead capture to closing.`;
  
  if (t.includes('dental') && t.includes('patient') && t.includes('reminder')) return `Automated reminders cut dental no-shows and keep chairs filled throughout the day.`;
  if (t.includes('dental') && t.includes('patient')) return `AI handles patient outreach so dental teams can focus on delivering exceptional care.`;
  if (t.includes('dental')) return `Modern dental practices use AI to automate scheduling, reminders, and patient communication.`;
  
  if (t.includes('veterinar') && t.includes('booking')) return `Online booking powered by AI reduces phone volume and fills appointment slots faster.`;
  if (t.includes('veterinar')) return `AI-powered scheduling keeps veterinary clinics running smoothly with less staff overhead.`;
  
  if (t.includes('chiropractic')) return `Chiropractic offices save 20+ hours weekly by automating patient communication with AI.`;
  if (t.includes('med spa') || t.includes('med-spa')) return `Med spas boost bookings and retention with AI-driven appointment and follow-up automation.`;
  if (t.includes('fitness') || t.includes('personal trainer')) return `AI helps fitness studios reduce no-shows and keep clients engaged between sessions.`;
  
  if (t.includes('hvac')) return `HVAC companies convert more calls into booked jobs with AI-powered lead response.`;
  if (t.includes('plumb')) return `AI automation helps plumbing businesses respond to leads instantly and fill schedules.`;
  if (t.includes('electrician')) return `Electricians grow their customer base with AI handling lead follow-up and booking.`;
  if (t.includes('roofing')) return `Roofing contractors never lose another lead with AI-managed follow-up and scheduling.`;
  if (t.includes('contractor') && t.includes('estimate')) return `AI streamlines estimate requests and scheduling so contractors stay on the job site.`;
  if (t.includes('pest control')) return `Pest control companies fill their schedule with AI-powered booking and dispatch.`;
  if (t.includes('cleaning')) return `Cleaning companies book more jobs with automated scheduling and customer follow-up.`;
  if (t.includes('landscap')) return `AI scheduling automation keeps landscaping crews busy without the admin headache.`;
  if (t.includes('solar')) return `Solar companies close more deals by following up with every lead automatically.`;
  
  if (t.includes('insurance') && t.includes('retention')) return `AI keeps insurance clients loyal with automated check-ins and renewal reminders.`;
  if (t.includes('insurance')) return `Insurance agencies automate lead follow-up to convert more prospects into policyholders.`;
  if (t.includes('law firm') || (t.includes('lawyer') && !t.includes('personal injury'))) return `AI answering services help law firms capture every potential client call, day or night.`;
  if (t.includes('personal injury')) return `Personal injury firms automate client intake to respond faster and qualify cases.`;
  if (t.includes('accounting')) return `Accounting firms reclaim billable hours by automating client communication with AI.`;
  if (t.includes('property manag') || t.includes('tenant')) return `Property managers automate tenant communication and maintenance requests with AI.`;
  if (t.includes('auto repair')) return `Auto repair shops keep customers informed automatically with AI service updates.`;
  if (t.includes('car dealership')) return `Dealerships follow up with every lead automatically, turning inquiries into test drives.`;
  if (t.includes('trucking') || t.includes('dispatch')) return `AI dispatch automation keeps trucking operations running efficiently around the clock.`;
  if (t.includes('restaurant')) return `AI phone systems handle restaurant orders and reservations without putting callers on hold.`;
  if (t.includes('salon')) return `Salons cut no-shows dramatically with AI-powered appointment reminders and rebooking.`;
  if (t.includes('ecommerce')) return `AI chatbots handle ecommerce support tickets instantly, boosting sales and satisfaction.`;
  if (t.includes('recruiting')) return `Recruiting agencies screen candidates faster with AI-powered qualification and scheduling.`;
  if (t.includes('mortgage')) return `Mortgage brokers qualify leads automatically, focusing time on ready-to-close borrowers.`;
  
  // Feature-specific
  if (t.includes('voice ai') && t.includes('appointment')) return `Voice AI books appointments over the phone, giving callers a natural human-like experience.`;
  if (t.includes('voice ai') || t.includes('voice agent')) return `Voice AI handles business calls with natural conversation, 24 hours a day.`;
  if (t.includes('cold call')) return `AI cold calling tools help sales teams reach more prospects with consistent messaging.`;
  if (t.includes('calling system')) return `Set up an AI calling system that handles outbound and inbound sales calls automatically.`;
  if (t.includes('phone') && t.includes('answer')) return `AI phone answering services ensure every business call gets a professional response.`;
  if (t.includes('receptionist') && t.includes('replace')) return `AI receptionists handle calls, schedule appointments, and never take a sick day.`;
  if (t.includes('receptionist')) return `AI reception technology answers calls and books appointments like a trained professional.`;
  if (t.includes('call center')) return `AI voice agents deliver call center quality at a fraction of traditional staffing costs.`;
  
  if (t.includes('whatsapp')) return `WhatsApp Business chatbots engage customers instantly on their preferred messaging app.`;
  if (t.includes('chatbot') && t.includes('cost')) return `Understanding AI chatbot costs helps businesses budget for the right automation investment.`;
  if (t.includes('chatbot') && t.includes('vs') && t.includes('live')) return `AI chatbots and live chat each have strengths. Here is which converts better for your business.`;
  if (t.includes('chatbot') && t.includes('develop')) return `Custom chatbot development delivers tailored AI experiences for your specific business needs.`;
  if (t.includes('chatbot')) return `AI chatbots handle customer questions instantly, freeing your team for higher-value work.`;
  
  if (t.includes('24/7') || t.includes('night staff')) return `AI keeps your business responsive around the clock without the cost of night shift staff.`;
  if (t.includes('customer service') || t.includes('customer support')) return `AI-powered customer service reduces costs while maintaining fast, consistent response quality.`;
  
  if (t.includes('lead') && t.includes('follow')) return `AI follow-up systems ensure no lead falls through the cracks, responding in seconds.`;
  if (t.includes('lead') && t.includes('response')) return `Instant AI lead response converts more inquiries by engaging prospects while interest is high.`;
  if (t.includes('lead') && t.includes('generat')) return `AI lead generation captures and qualifies prospects automatically across every channel.`;
  if (t.includes('lead') && t.includes('cold')) return `Stop losing leads to slow response times. AI follows up before they go cold.`;
  if (t.includes('lead') && t.includes('qualify')) return `AI qualifies sales leads automatically, scoring prospects so your team closes faster.`;
  if (t.includes('sales') && t.includes('funnel')) return `Build an AI sales funnel that nurtures leads and books calls without manual effort.`;
  if (t.includes('follow-up') || t.includes('follow up')) return `Automated follow-up keeps the personal touch while ensuring consistent prospect engagement.`;
  
  if (t.includes('crm')) return `AI eliminates manual CRM data entry, keeping records accurate and up to date automatically.`;
  if (t.includes('data entry')) return `The hidden cost of manual data entry adds up fast. AI automation fixes it for good.`;
  if (t.includes('appointment') && t.includes('booking')) return `AI appointment booking fills your calendar without phone tag or back-and-forth emails.`;
  if (t.includes('scheduling')) return `Automated scheduling eliminates the back-and-forth, booking appointments in seconds.`;
  if (t.includes('invoice')) return `AI invoice automation saves hours of billing work and reduces payment collection delays.`;
  if (t.includes('email')) return `AI email follow-up sends the right message at the right time, every time.`;
  
  if (t.includes('cost') && t.includes('comparison')) return `See the real numbers: AI assistants deliver more output at a fraction of employee costs.`;
  if (t.includes('pricing') && t.includes('agency')) return `Know what to budget before hiring an AI automation agency for your business.`;
  if (t.includes('vs') && t.includes('hiring')) return `The math is clear: AI automation often costs less than a single part-time hire.`;
  if (t.includes('zapier') || t.includes('virtual assistant')) return `Compare automation approaches to find the best fit for your business needs and budget.`;
  if (t.includes('chatgpt') && t.includes('not enough')) return `ChatGPT answers questions. Your business needs AI that actually completes tasks.`;
  
  if (t.includes('implementation') || t.includes('partner')) return `Choosing the right AI implementation partner determines whether automation succeeds or fails.`;
  if (t.includes('hire') && t.includes('agency')) return `Weigh the tradeoffs of hiring an AI agency versus building automation capabilities in-house.`;
  if (t.includes('consultant')) return `An AI automation consultant helps you identify the highest-impact processes to automate first.`;
  if (t.includes('white label')) return `White label AI voice agents let agencies offer cutting-edge automation under their own brand.`;
  
  if (t.includes('small business') && t.includes('task')) return `These 10 tasks are costing you time every day. AI can handle all of them.`;
  if (t.includes('small business') && t.includes('2026')) return `AI automation in 2026 brings new opportunities for small businesses ready to adapt.`;
  if (t.includes('small business')) return `Small businesses gain the biggest edge from AI automation, punching above their weight.`;
  if (t.includes('20 hours')) return `AI assistants save small businesses 20+ hours per week on routine operational tasks.`;
  if (t.includes('signs') && t.includes('automation')) return `If these signs sound familiar, your business is overdue for AI automation.`;
  if (t.includes('set up') || t.includes('setup') || t.includes('step-by-step')) return `Follow this step-by-step guide to get your AI business assistant running today.`;
  if (t.includes('what is') && t.includes('agent')) return `AI agents go beyond chatbots, autonomously executing multi-step business processes.`;
  if (t.includes('what is') && t.includes('voice')) return `Voice AI turns phone calls into automated conversations that sound remarkably human.`;
  if (t.includes('actually does') && t.includes('task')) return `The difference between AI that talks and AI that works is task execution.`;
  if (t.includes('actually does')) return `Real AI automation completes tasks end-to-end, not just generates suggestions.`;
  if (t.includes('best ai tool')) return `These AI tools deliver the most impact for small business owners in 2025.`;
  if (t.includes('reduce') && t.includes('cost')) return `Cut customer service costs without sacrificing quality using strategic AI automation.`;
  if (t.includes('hidden cost')) return `Manual data entry costs more than you think. See the real impact on your bottom line.`;
  if (t.includes('outsource')) return `Outsourcing chatbot development can accelerate your AI rollout and reduce risk.`;
  
  // Fallback
  return `Discover how AI automation transforms business operations and drives measurable results.`;
}

// Main
function main() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
  console.log(`Processing ${files.length} blog posts...\n`);
  
  let updated = 0;
  let skipped = 0;
  
  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const slug = file.replace('.mdx', '');
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract title
    const titleMatch = content.match(/^title:\s*"([^"]+)"/m);
    const title = titleMatch ? titleMatch[1] : slug;
    
    // Skip if already has imageAlt
    if (content.match(/^imageAlt:/m)) {
      skipped++;
      continue;
    }
    
    // Skip if no image
    if (!content.match(/^image:/m)) {
      console.log(`⊘ ${slug}: no image, skipping`);
      skipped++;
      continue;
    }
    
    const alt = generateAltText(title, slug);
    const caption = generateCaption(title, slug);
    
    // Insert after the image: line
    content = content.replace(
      /^(image:\s*"[^"]+")$/m,
      `$1\nimageAlt: "${alt}"\nimageCaption: "${caption}"`
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`✓ ${slug}`);
    console.log(`  alt: ${alt.substring(0, 80)}...`);
    console.log(`  cap: ${caption.substring(0, 80)}...`);
    updated++;
  }
  
  console.log(`\n=== DONE ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Total: ${files.length}`);
}

main();
