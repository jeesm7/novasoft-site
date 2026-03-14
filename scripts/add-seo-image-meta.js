const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'content', 'blog');
const themesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'blog-themes.json'), 'utf8'));

// Image descriptions by theme (what the actual Unsplash photo shows)
const themeImageDescriptions = {
  'ai-assistant': 'AI assistant technology with digital interface',
  'customer-service': 'customer service representative with headset at support desk',
  'accounting': 'professional accountant working with financial documents in office',
  'law-firm': 'modern law office with legal books and professional desk',
  'salon': 'bright modern hair salon interior with styling stations',
  'appointment': 'digital calendar and scheduling interface on screen',
  'real-estate-agent': 'real estate professional reviewing property documents with client',
  'cost-comparison': 'business professional analyzing budget data on calculator and laptop',
  'chiropractic': 'chiropractic wellness clinic with modern treatment room',
  'hvac': 'HVAC technician inspecting heating and cooling system',
  'small-business': 'small business owner working at laptop in their shop',
  'business-automation': 'modern business office with automation technology displays',
  'roofing': 'roofing contractor working on residential roof installation',
  'voice-ai': 'professional on business phone call using modern technology',
  'ecommerce': 'ecommerce online shopping interface on laptop screen',
  'real-estate': 'modern house exterior with landscaped property',
  'whatsapp': 'WhatsApp business messaging on mobile phone screen',
  'car-dealership': 'car dealership showroom with vehicles on display',
  'contractor': 'contractor reviewing construction plans at home improvement site',
  'insurance': 'insurance agent meeting with client at professional office',
  'mortgage': 'couple reviewing mortgage documents for new home purchase',
  'pest-control': 'professional pest control service treating residential home',
  'real-estate-investor': 'real estate investment property with modern architecture',
  'recruiting': 'recruiting professional conducting interview at office',
  'trucking': 'commercial truck fleet on highway for logistics dispatch',
  'dental': 'modern dental office with professional treatment equipment',
  'dental-patient': 'dental professional communicating with patient in clinic',
  'veterinary': 'veterinary clinic with caring staff and pet patient',
  'ai-general': 'artificial intelligence technology with futuristic digital display',
  'auto-repair': 'auto mechanic working in professional repair shop',
  'email-automation': 'email marketing inbox on business computer screen',
  'ai-tools': 'business productivity software tools on laptop display',
  'property-management': 'apartment building complex for property management',
  'crm': 'CRM software dashboard on business computer screen',
  'cleaning': 'professional cleaning service worker in residential home',
  'electrician': 'electrician working on electrical wiring installation',
  'fitness': 'modern fitness studio with gym training equipment',
  'chatbot': 'AI chatbot messaging interface on computer screen',
  'personal-injury': 'lawyer consulting with client at professional office desk',
  'solar': 'solar panels installed on residential rooftop',
  'invoice': 'business invoice and billing documents on office desk',
  'sales-automation': 'sales team meeting with technology tools in conference room',
  'landscaping': 'beautifully landscaped garden with professional outdoor design',
  'medical-spa': 'medical spa wellness treatment room with modern equipment',
  'restaurant': 'restaurant dining area with professional table settings',
  'lead-generation': 'business growth analytics chart showing sales leads data',
  'plumbing': 'plumber repairing plumbing fixtures in residential home',
};

// Generate unique alt text and caption for each post
function generateSeoMeta(slug, title, theme, category) {
  const desc = themeImageDescriptions[theme] || 'business professional using AI technology';
  
  // Extract key topic from title for keyword inclusion
  const titleLower = title.toLowerCase();
  
  // Build alt text: image description + relevant keyword context (80-125 chars)
  // Build caption: engaging sentence about the post topic (60-120 chars)
  const seoData = {
    // Each entry maps slug -> { alt, caption }
  };

  // Generate based on theme + specific post content
  return generateForPost(slug, title, theme, category, desc);
}

function generateForPost(slug, title, theme, category, imageDesc) {
  // Theme-specific keyword mapping for natural alt text
  const altTexts = {
    // Voice AI posts
    'ai-calling-system-for-sales-teams-setup-guide': {
      alt: 'Sales professional using AI calling system on phone to connect with leads automatically',
      caption: 'AI calling systems help sales teams reach more prospects with less effort.'
    },
    'ai-cold-calling-software-best-tools-strategies': {
      alt: 'Business phone with AI cold calling software interface for automated outreach',
      caption: 'Modern AI cold calling tools replace tedious manual dialing with smart automation.'
    },
    'ai-voice-agent-vs-call-center-cost-comparison': {
      alt: 'Business professional comparing AI voice agent costs versus traditional call center expenses',
      caption: 'AI voice agents can cut customer service costs by up to 80% compared to call centers.'
    },
    'best-ai-phone-answering-service-for-business': {
      alt: 'AI phone answering service handling incoming business calls automatically around the clock',
      caption: 'Never miss a business call again with AI-powered phone answering services.'
    },
    'can-ai-replace-my-receptionist': {
      alt: 'AI receptionist technology answering business phone calls instead of human front desk staff',
      caption: 'AI receptionists handle calls, book appointments, and answer questions 24/7.'
    },
    'how-to-set-up-ai-phone-system-small-business': {
      alt: 'Small business owner setting up an AI phone system on their office desk',
      caption: 'Setting up an AI phone system for your small business takes just minutes.'
    },
    'voice-ai-for-appointment-booking-how-it-works': {
      alt: 'Voice AI technology booking appointments through natural phone conversation',
      caption: 'Voice AI books appointments by having natural conversations with your callers.'
    },
    'what-is-voice-ai-and-how-businesses-use-it': {
      alt: 'Business professional using voice AI technology for automated phone communication',
      caption: 'Voice AI transforms how businesses handle phone calls and customer interactions.'
    },

    // Cost comparison posts
    'ai-assistant-vs-hiring-employee-cost-comparison': {
      alt: 'Cost comparison chart showing AI assistant versus hiring a full-time employee',
      caption: 'An AI assistant costs a fraction of a full-time hire while working 24/7.'
    },
    'ai-automation-agency-pricing-what-to-expect': {
      alt: 'Business calculator analyzing AI automation agency pricing and service packages',
      caption: 'AI automation agency pricing varies widely. Here is what to actually expect.'
    },
    'ai-chatbot-vs-live-chat-which-converts-better': {
      alt: 'Split screen comparing AI chatbot and live chat agent conversion performance',
      caption: 'AI chatbots often outperform live chat in speed, but which truly converts better?'
    },
    'ai-vs-virtual-assistant-complete-comparison-guide': {
      alt: 'Side-by-side comparison of AI automation versus human virtual assistant capabilities',
      caption: 'AI and virtual assistants each have strengths. Choose the right fit for your needs.'
    },
    'custom-ai-chatbot-development-services': {
      alt: 'Developer building a custom AI chatbot solution for business client requirements',
      caption: 'Custom AI chatbot development delivers tailored solutions for unique business needs.'
    },
    'hire-ai-agency-or-build-in-house': {
      alt: 'Business leader weighing the decision between hiring an AI agency or building in-house',
      caption: 'Hiring an AI agency versus building in-house depends on budget, speed, and expertise.'
    },
    'zapier-vs-virtual-assistant-vs-ai-automation': {
      alt: 'Comparison of Zapier, virtual assistant, and AI automation tools for business workflows',
      caption: 'Zapier, virtual assistants, and AI automation each solve different workflow problems.'
    },

    // AI general posts
    'ai-that-actually-does-work-not-just-talks': {
      alt: 'AI technology interface actively completing real business tasks and workflows',
      caption: 'The best AI does not just chat. It actually completes tasks and drives results.'
    },
    'ai-voice-agent-for-business-complete-guide': {
      alt: 'AI voice agent platform showing business communication dashboard and call analytics',
      caption: 'AI voice agents handle calls, qualify leads, and book meetings automatically.'
    },
    'ai-voice-agent-setup-service': {
      alt: 'Professional AI voice agent setup service configuring business phone automation',
      caption: 'Expert setup services get your AI voice agent running in days, not months.'
    },
    'how-to-set-up-ai-business-assistant-step-by-step': {
      alt: 'Step-by-step AI business assistant setup guide displayed on laptop screen',
      caption: 'Follow these steps to set up an AI assistant that handles real business tasks.'
    },
    'what-is-an-ai-agent-and-how-does-it-work': {
      alt: 'Artificial intelligence agent diagram showing how AI processes tasks autonomously',
      caption: 'AI agents go beyond chatbots by taking actions and completing tasks independently.'
    },
    'white-label-ai-voice-agent-for-agencies': {
      alt: 'White-label AI voice agent platform ready for agency branding and client deployment',
      caption: 'White-label AI voice agents let agencies offer AI services under their own brand.'
    },

    // Customer service posts
    '24-7-customer-support-without-night-staff': {
      alt: 'AI customer support system providing 24/7 service without requiring night shift staff',
      caption: 'Deliver round-the-clock customer support without hiring overnight employees.'
    },
    '5-ways-ai-handles-customer-service-24-7': {
      alt: 'Customer service AI handling multiple support channels simultaneously day and night',
      caption: 'AI handles customer service around the clock across chat, phone, and email.'
    },
    'ai-vs-human-customer-service-which-is-better': {
      alt: 'Comparison between AI-powered and human-powered customer service approaches',
      caption: 'AI and human customer service each excel in different situations and channels.'
    },
    'how-to-reduce-customer-service-costs-with-ai': {
      alt: 'Business dashboard showing customer service cost reduction through AI automation',
      caption: 'AI automation can reduce customer service costs by handling routine inquiries.'
    },

    // Business automation posts
    'ai-automation-implementation-partner': {
      alt: 'AI automation implementation partner consulting with business team on workflow strategy',
      caption: 'The right AI implementation partner accelerates your automation journey.'
    },
    'chatgpt-for-business-why-its-not-enough': {
      alt: 'Business professional realizing ChatGPT alone cannot handle full business automation needs',
      caption: 'ChatGPT is powerful, but real business automation needs purpose-built AI tools.'
    },
    'hire-ai-automation-consultant': {
      alt: 'AI automation consultant reviewing business processes for optimization opportunities',
      caption: 'An AI automation consultant identifies the best processes to automate first.'
    },
    'how-to-automate-sales-calls-with-ai': {
      alt: 'AI-powered sales call automation system making outbound calls from business dashboard',
      caption: 'Automate sales calls with AI that qualifies leads and books meetings for you.'
    },

    // Lead generation posts
    'ai-lead-follow-up-system-never-lose-lead': {
      alt: 'AI lead follow-up system automatically contacting new leads within seconds',
      caption: 'AI follow-up systems contact leads instantly so you never lose a prospect.'
    },
    'automated-lead-response-convert-leads-while-you-sleep': {
      alt: 'Automated lead response system converting website visitors into customers overnight',
      caption: 'Automated lead response works around the clock to convert leads while you sleep.'
    },
    'how-to-generate-leads-with-ai-automation': {
      alt: 'AI lead generation dashboard showing automated prospect capture and qualification',
      caption: 'AI automation generates and qualifies leads faster than manual outreach methods.'
    },
    'why-your-leads-go-cold-how-to-fix-automatically': {
      alt: 'Business analytics showing lead response time data and AI-powered automatic follow-up',
      caption: 'Slow follow-up kills leads. AI responds instantly to keep prospects engaged.'
    },

    // AI assistant posts
    '10-small-business-tasks-automate-today': {
      alt: 'Small business owner discovering ten tasks that AI assistants can automate immediately',
      caption: 'These ten common business tasks are perfect candidates for AI automation.'
    },
    'ai-that-actually-does-tasks-not-just-answers': {
      alt: 'AI assistant actively completing business tasks like scheduling and data entry',
      caption: 'Real AI assistants do not just answer questions. They complete actual tasks.'
    },
    'how-ai-assistants-save-small-businesses-20-hours-per-week': {
      alt: 'AI assistant saving small business owner twenty hours per week on routine operations',
      caption: 'AI assistants save small businesses 20+ hours weekly on repetitive tasks.'
    },

    // Roofing posts
    'ai-automation-roofing-companies-lead-management': {
      alt: 'Roofing company using AI automation to manage incoming leads and project estimates',
      caption: 'AI automation helps roofing companies capture and follow up on every lead.'
    },
    'ai-lead-management-for-roofing-contractors': {
      alt: 'Roofing contractor reviewing AI-managed lead pipeline on tablet at job site',
      caption: 'AI lead management ensures roofing contractors never miss a potential project.'
    },
    'lead-management-roofing-companies-complete-guide': {
      alt: 'Complete roofing company lead management system with AI-powered tracking dashboard',
      caption: 'A complete guide to managing roofing leads from first contact to signed contract.'
    },

    // Real estate posts
    'ai-chatbot-for-real-estate-property-listings': {
      alt: 'AI chatbot answering property listing questions for real estate website visitors',
      caption: 'AI chatbots answer listing questions instantly, qualifying buyers around the clock.'
    },
    'ai-for-real-estate-agents-automate-lead-pipeline': {
      alt: 'Real estate agent using AI to automate their lead pipeline and client follow-up',
      caption: 'AI automates the real estate lead pipeline from first inquiry to closing.'
    },
    'how-ai-is-transforming-the-real-estate-industry': {
      alt: 'Modern real estate property showcasing AI transformation in the housing industry',
      caption: 'AI is reshaping real estate with instant responses and smarter lead management.'
    },

    // Insurance posts
    'ai-for-insurance-agencies-lead-follow-up': {
      alt: 'Insurance agency using AI for automated lead follow-up and client communication',
      caption: 'AI follow-up helps insurance agencies convert more leads into policyholders.'
    },
    'how-insurance-agencies-automate-lead-follow-up': {
      alt: 'Insurance agent reviewing automated AI lead follow-up results on office computer',
      caption: 'Automated follow-up ensures no insurance lead falls through the cracks.'
    },
    'insurance-agency-client-retention-ai-automation': {
      alt: 'Insurance agency using AI automation to improve client retention and renewal rates',
      caption: 'AI automation boosts insurance client retention through proactive communication.'
    },

    // Veterinary posts
    'ai-receptionist-for-veterinary-clinics': {
      alt: 'AI receptionist system handling veterinary clinic phone calls and pet appointment bookings',
      caption: 'AI receptionists help vet clinics manage calls and appointments efficiently.'
    },
    'veterinary-clinic-appointment-automation': {
      alt: 'Veterinary clinic using AI to automate pet appointment scheduling and reminders',
      caption: 'Automated scheduling lets vet clinics fill appointments without phone tag.'
    },
    'veterinary-clinic-online-booking-reduce-phone-calls': {
      alt: 'Veterinary clinic online booking system reducing incoming phone call volume',
      caption: 'Online booking systems cut vet clinic phone calls by up to 60 percent.'
    },

    // Dental patient posts
    'automating-dental-practice-patient-communication': {
      alt: 'Dental practice using AI to automate patient communication and appointment reminders',
      caption: 'AI-powered communication keeps dental patients informed and engaged automatically.'
    },
    'automating-patient-appointment-reminders-dental-offices': {
      alt: 'Dental office automated appointment reminder system reducing no-shows and cancellations',
      caption: 'Automated reminders cut dental no-shows by sending timely patient notifications.'
    },
    'dental-practice-automation-guide-patient-communication': {
      alt: 'Comprehensive guide to automating dental practice patient communication workflows',
      caption: 'This guide covers every step of automating your dental practice communications.'
    },

    // Chatbot posts
    'how-much-does-ai-chatbot-cost-for-business': {
      alt: 'AI chatbot pricing breakdown showing costs for different business sizes and features',
      caption: 'AI chatbot costs range from free to enterprise. Find the right tier for you.'
    },
    'outsource-ai-chatbot-development': {
      alt: 'Business outsourcing AI chatbot development to experienced development team',
      caption: 'Outsourcing chatbot development saves time and delivers professional results.'
    },
    'what-does-ai-chatbot-cost-complete-pricing-guide': {
      alt: 'Complete AI chatbot pricing guide comparing monthly costs and feature tiers',
      caption: 'A complete pricing guide to help you budget for AI chatbot implementation.'
    },

    // Accounting posts
    'accounting-firm-automation-client-communication': {
      alt: 'Accounting firm using AI automation for client communication and document collection',
      caption: 'AI streamlines accounting firm communications and document collection workflows.'
    },
    'ai-automation-for-accounting-firms': {
      alt: 'Accounting professional implementing AI automation for financial workflow efficiency',
      caption: 'AI automation helps accounting firms handle more clients with fewer resources.'
    },

    // Appointment posts
    'ai-appointment-scheduling-never-miss-booking': {
      alt: 'AI appointment scheduling system filling calendar bookings automatically 24/7',
      caption: 'AI scheduling ensures you never miss a booking, even outside business hours.'
    },
    'how-to-automate-appointment-booking-with-ai': {
      alt: 'Business owner setting up AI-powered automated appointment booking on their website',
      caption: 'Automate appointment booking with AI that handles scheduling conversations.'
    },

    // HVAC posts
    'ai-automation-for-hvac-companies': {
      alt: 'HVAC company using AI automation to manage service calls and technician scheduling',
      caption: 'AI automation helps HVAC companies dispatch technicians and manage jobs faster.'
    },
    'best-crm-for-hvac-companies-and-how-to-automate-it': {
      alt: 'HVAC technician using CRM with AI automation for job tracking and customer management',
      caption: 'The best CRM for HVAC companies pairs with AI to automate follow-ups.'
    },

    // Small business posts
    'ai-automation-for-small-business-2026': {
      alt: 'Small business owner exploring AI automation trends and tools for 2026 growth',
      caption: 'AI automation in 2026 brings affordable, powerful tools to small businesses.'
    },
    'signs-your-business-needs-automation': {
      alt: 'Overwhelmed business owner recognizing signs that their company needs AI automation',
      caption: 'If these signs sound familiar, your business is ready for AI automation.'
    },

    // Plumbing posts
    'ai-phone-system-for-plumbing-companies': {
      alt: 'Plumbing company AI phone system answering service calls and booking appointments',
      caption: 'AI phone systems help plumbers capture every call, even during jobs.'
    },
    'how-plumbers-automate-lead-follow-up-scheduling': {
      alt: 'Plumber using AI to automate lead follow-up and schedule service appointments',
      caption: 'Automated follow-up helps plumbers book more jobs without chasing leads.'
    },

    // Email automation posts
    'automate-customer-follow-up-without-losing-personal-touch': {
      alt: 'AI email follow-up system maintaining personalized customer communication at scale',
      caption: 'AI follow-ups feel personal while reaching every customer automatically.'
    },
    'how-to-automate-follow-up-messages-with-ai': {
      alt: 'Business setting up automated AI follow-up messages for customer engagement',
      caption: 'Automate follow-up messages with AI that sounds like you wrote them yourself.'
    },

    // AI tools posts
    'best-ai-automation-agency-for-small-business': {
      alt: 'Small business owner comparing the best AI automation agencies and service providers',
      caption: 'Finding the right AI automation agency can transform your small business.'
    },
    'best-ai-tools-for-small-business-owners-2025': {
      alt: 'Top AI tools for small business owners displayed on laptop with productivity dashboard',
      caption: 'These are the best AI tools every small business owner should know in 2025.'
    },

    // Property management posts
    'best-ai-tools-for-property-management-companies': {
      alt: 'Property management company using AI tools to manage tenant communications and maintenance',
      caption: 'AI tools help property managers handle tenant requests and maintenance faster.'
    },
    'how-property-managers-automate-tenant-communication': {
      alt: 'Property manager automating tenant communication with AI messaging and notification system',
      caption: 'AI automates tenant communication so property managers save hours every week.'
    },

    // CRM posts
    'hidden-cost-of-manual-data-entry-small-business': {
      alt: 'Business owner calculating the hidden costs of manual CRM data entry and errors',
      caption: 'Manual data entry costs more than you think in time, errors, and lost sales.'
    },
    'how-to-automate-crm-data-entry': {
      alt: 'CRM dashboard with AI-automated data entry replacing manual input processes',
      caption: 'Automate CRM data entry with AI that captures and organizes information.'
    },

    // Cleaning posts
    'house-cleaning-service-booking-automation': {
      alt: 'House cleaning service using AI to automate online booking and client scheduling',
      caption: 'Booking automation helps cleaning services fill schedules without phone calls.'
    },
    'how-cleaning-companies-use-ai-to-book-more-jobs': {
      alt: 'Cleaning company using AI technology to book more residential and commercial jobs',
      caption: 'AI helps cleaning companies respond faster and book more jobs automatically.'
    },

    // Fitness posts
    'how-fitness-studios-use-ai-to-reduce-no-shows': {
      alt: 'Fitness studio using AI automated reminders to reduce class no-shows and cancellations',
      caption: 'AI reminders help fitness studios reduce no-shows and keep classes full.'
    },
    'personal-trainer-automation-scheduling-client-retention': {
      alt: 'Personal trainer using AI automation for client scheduling and retention management',
      caption: 'Automation helps personal trainers manage schedules and retain more clients.'
    },

    // Sales automation posts
    'how-to-build-ai-sales-funnel': {
      alt: 'AI-powered sales funnel diagram showing automated lead capture through conversion stages',
      caption: 'An AI sales funnel captures, qualifies, and converts leads automatically.'
    },
    'how-to-use-ai-to-qualify-sales-leads-automatically': {
      alt: 'AI system automatically qualifying sales leads and scoring prospects for sales teams',
      caption: 'AI lead qualification scores prospects so your team focuses on ready buyers.'
    },

    // Single-theme posts
    'ai-answering-service-for-law-firms': {
      alt: 'Law firm AI answering service capturing client calls and scheduling consultations',
      caption: 'AI answering services help law firms capture every potential client call.'
    },
    'ai-appointment-reminder-system-for-salons': {
      alt: 'Salon appointment reminder system sending automated booking confirmations to clients',
      caption: 'Automated reminders keep salon chairs filled and reduce last-minute cancellations.'
    },
    'ai-appointment-setter-for-real-estate': {
      alt: 'Real estate AI appointment setter scheduling property showings with prospective buyers',
      caption: 'AI appointment setters book property showings while agents focus on closings.'
    },
    'ai-automation-chiropractic-offices-complete-guide': {
      alt: 'Chiropractic office using AI automation for patient scheduling and follow-up care',
      caption: 'AI automation helps chiropractic offices streamline scheduling and patient care.'
    },
    'ai-chatbot-for-ecommerce-customer-support': {
      alt: 'Ecommerce website AI chatbot helping online shoppers with product questions and orders',
      caption: 'AI chatbots boost ecommerce sales by answering customer questions instantly.'
    },
    'ai-chatbot-for-whatsapp-business-complete-guide': {
      alt: 'WhatsApp Business AI chatbot handling customer conversations on mobile messaging app',
      caption: 'WhatsApp AI chatbots let you engage customers on their favorite messaging app.'
    },
    'ai-for-car-dealership-lead-follow-up': {
      alt: 'Car dealership using AI for automated lead follow-up and vehicle sales inquiries',
      caption: 'AI follow-up helps car dealerships respond to leads before competitors do.'
    },
    'ai-for-contractors-estimates-scheduling': {
      alt: 'Contractor using AI to automate project estimates and job scheduling on tablet',
      caption: 'AI helps contractors send estimates faster and fill their job schedules.'
    },
    'ai-for-insurance-agencies-lead-follow-up': {
      alt: 'Insurance agency using AI for automated lead follow-up and client communication',
      caption: 'AI follow-up helps insurance agencies convert more leads into policyholders.'
    },
    'ai-for-mortgage-brokers-lead-qualification': {
      alt: 'Mortgage broker using AI to qualify home buyer leads and streamline applications',
      caption: 'AI lead qualification helps mortgage brokers focus on ready-to-close buyers.'
    },
    'ai-for-pest-control-companies-scheduling': {
      alt: 'Pest control company using AI to automate service scheduling and customer follow-up',
      caption: 'AI scheduling helps pest control companies book more service appointments.'
    },
    'ai-for-real-estate-investors-lead-generation': {
      alt: 'Real estate investor using AI technology for automated property lead generation',
      caption: 'AI lead generation helps real estate investors find deals before the competition.'
    },
    'ai-for-recruiting-agencies-candidate-screening': {
      alt: 'Recruiting agency using AI for automated candidate screening and interview scheduling',
      caption: 'AI screening helps recruiters identify top candidates faster and more accurately.'
    },
    'ai-for-trucking-companies-dispatch-automation': {
      alt: 'Trucking company using AI dispatch automation for fleet management and route planning',
      caption: 'AI dispatch automation optimizes trucking routes and fleet coordination.'
    },
    'ai-receptionist-for-dental-offices': {
      alt: 'Dental office AI receptionist handling patient calls and appointment scheduling',
      caption: 'AI receptionists answer dental office calls and book patients automatically.'
    },
    'auto-repair-shop-customer-communication-automation': {
      alt: 'Auto repair shop using AI to automate customer communication and service updates',
      caption: 'Automated communication keeps auto repair customers informed at every step.'
    },
    'how-ai-helps-electricians-get-more-customers': {
      alt: 'Electrician using AI marketing and lead generation tools to attract more customers',
      caption: 'AI tools help electricians capture leads and book more service calls.'
    },
    'how-personal-injury-lawyers-automate-client-intake': {
      alt: 'Personal injury lawyer using AI to automate new client intake and case screening',
      caption: 'AI intake automation helps personal injury firms sign cases faster.'
    },
    'how-solar-companies-follow-up-leads-automatically': {
      alt: 'Solar energy company using AI to follow up with installation leads automatically',
      caption: 'Automated follow-up helps solar companies close more installation deals.'
    },
    'how-to-automate-invoice-creation-small-business': {
      alt: 'Small business owner automating invoice creation and billing with AI tools',
      caption: 'AI invoice automation saves hours and reduces billing errors for small businesses.'
    },
    'landscaping-company-scheduling-automation': {
      alt: 'Landscaping company using AI to automate crew scheduling and client appointments',
      caption: 'Scheduling automation helps landscaping companies manage crews and clients.'
    },
    'med-spa-automation-appointments-follow-up': {
      alt: 'Medical spa using AI automation for appointment booking and patient follow-up',
      caption: 'AI automation helps med spas fill appointment slots and retain clients.'
    },
    'restaurant-automation-ai-phone-ordering': {
      alt: 'Restaurant using AI phone ordering system to handle takeout and reservation calls',
      caption: 'AI phone ordering helps restaurants serve more customers without extra staff.'
    },
  };

  const entry = altTexts[slug];
  if (entry) {
    return entry;
  }

  // Fallback - generate from title and theme
  console.warn(`  ⚠ No custom entry for ${slug}, using generated fallback`);
  return {
    alt: `${imageDesc} for ${title.toLowerCase().replace(/[:"]/g, '')}`.slice(0, 125),
    caption: `Learn how AI automation can transform your ${category.toLowerCase()} operations.`
  };
}

// Main: update all frontmatter
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));
let updated = 0;
let errors = 0;

for (const file of files) {
  const slug = file.replace('.mdx', '');
  const themeInfo = themesData.postThemes[slug];
  
  if (!themeInfo) {
    console.warn(`  ⚠ No theme for: ${slug}`);
    errors++;
    continue;
  }

  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Get category from frontmatter
  const categoryMatch = content.match(/^category:\s*"([^"]+)"/m);
  const category = categoryMatch ? categoryMatch[1] : 'Business';

  const seo = generateForPost(slug, themeInfo.title, themeInfo.theme, category, themeImageDescriptions[themeInfo.theme]);

  // Remove existing imageAlt and imageCaption if present
  content = content.replace(/^imageAlt:.*\n/m, '');
  content = content.replace(/^imageCaption:.*\n/m, '');

  // Find the image line and add imageAlt and imageCaption after it
  if (content.match(/^image:/m)) {
    content = content.replace(
      /^(image:\s*"[^"]*")\s*$/m,
      `$1\nimageAlt: "${seo.alt}"\nimageCaption: "${seo.caption}"`
    );
    fs.writeFileSync(filePath, content);
    updated++;
    console.log(`  ✓ ${slug}`);
  } else {
    console.warn(`  ⚠ No image field in: ${slug}`);
    errors++;
  }
}

console.log(`\nDone! Updated: ${updated}, Errors: ${errors}`);
