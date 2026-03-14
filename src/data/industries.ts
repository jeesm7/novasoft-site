export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryTechItem {
  name: string;
  description: string;
}

export interface IndustryPainPoint {
  title: string;
  description: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
}

export interface IndustryResult {
  metric: string;
  label: string;
}

export interface Industry {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroEyebrow: string;
  // Content sections
  introHeadline: string;
  introText: string[];
  painPoints: IndustryPainPoint[];
  solutionHeadline: string;
  solutionIntro: string;
  solutions: IndustrySolution[];
  resultsHeadline: string;
  resultsIntro: string;
  results: IndustryResult[];
  proofQuote: string;
  proofAuthor: string;
  proofRole: string;
  techStack: IndustryTechItem[];
  faqs: IndustryFAQ[];
  // Extra long-form content
  whyAutomationHeadline: string;
  whyAutomationText: string[];
  howItWorksSteps: { title: string; description: string }[];
}

export const industries: Industry[] = [
  // ===========================
  // 1. REAL ESTATE
  // ===========================
  {
    slug: 'real-estate',
    name: 'Real Estate',
    headline: 'AI Automation for Real Estate Agencies',
    subheadline: 'Stop losing leads to slow follow-up. Your AI assistant qualifies prospects, books showings, and even recruits agents while you close deals.',
    metaTitle: 'AI Automation for Real Estate Agencies | Novasoft AI',
    metaDescription: 'AI-powered lead qualification, appointment booking, and agent recruitment for real estate agencies. Respond to every lead in under 60 seconds. See how we helped hire 8+ agents for a Texas brokerage.',
    keywords: ['real estate AI automation', 'AI for real estate agents', 'real estate lead qualification AI', 'AI cold caller real estate', 'real estate appointment booking AI', 'real estate agent recruitment AI'],
    heroEyebrow: 'AI FOR REAL ESTATE',
    introHeadline: 'Real estate runs on speed. Your follow-up should too.',
    introText: [
      'In real estate, the first agent to respond wins the deal. Studies show that leads contacted within 5 minutes are 21x more likely to convert. But most agencies take hours or even days to follow up. Agents are busy showing properties, negotiating deals, and managing closings. Lead follow-up falls through the cracks.',
      'The result? You spend thousands on Zillow leads, Facebook ads, and cold lists only to watch them go stale. Meanwhile, your competitors are calling those same prospects first.',
      'Novasoft AI changes the game. Our AI automation platform responds to every single lead in under 60 seconds, qualifies them with natural-sounding voice calls, and books appointments directly on your agents\' calendars. No more missed opportunities. No more dead leads.',
    ],
    painPoints: [
      {
        title: 'Leads go cold before anyone calls them',
        description: 'Your team generates leads from Zillow, Realtor.com, Facebook, and open houses. But agents are showing properties, writing offers, or in meetings. By the time someone follows up, the prospect already talked to another agent.',
      },
      {
        title: 'Agents waste hours on unqualified prospects',
        description: 'Not every lead is ready to buy or sell. Your top producers spend valuable time calling tire-kickers who are "just browsing" or not pre-approved. That time should go toward closings, not cold calls.',
      },
      {
        title: 'Recruiting new agents is a full-time job',
        description: 'Growing your brokerage means constantly recruiting. But calling through lists of licensed agents, screening for fit, and scheduling interviews takes hours every week that you do not have.',
      },
      {
        title: 'After-hours leads get no response until morning',
        description: 'Most home searches happen evenings and weekends. When someone submits an inquiry at 9pm, they expect a quick response. By Monday morning, they have already moved on.',
      },
    ],
    solutionHeadline: 'An AI workforce that never stops selling',
    solutionIntro: 'We build custom AI systems that plug into your existing CRM and lead sources. Within days, your agency has a 24/7 lead machine that sounds human, follows your scripts, and books meetings automatically.',
    solutions: [
      {
        title: 'AI Cold Caller for Lead Qualification',
        description: 'Our AI voice agent calls every new lead within seconds. It follows your custom script, asks qualification questions (budget, timeline, pre-approval status), and routes hot leads directly to the right agent. It handles objections naturally and never sounds robotic.',
      },
      {
        title: 'Automated Appointment Booking',
        description: 'Qualified leads get booked instantly. The AI checks your agents\' calendars in real time, suggests available slots, and sends confirmation texts and emails. No back-and-forth. No missed bookings.',
      },
      {
        title: 'Agent Recruitment Automation',
        description: 'Growing your team? Our AI calls through lists of licensed agents in your market, pitches your brokerage value proposition, screens for experience and fit, and schedules interviews with your hiring manager. One client used this to hire 8+ agents in a single quarter.',
      },
      {
        title: 'Multi-Channel Follow-Up Sequences',
        description: 'Leads that do not answer the first call get automatic follow-up via text, email, and voicemail drops. The AI adjusts its approach based on engagement signals and keeps nurturing until the prospect is ready.',
      },
    ],
    resultsHeadline: 'Results that speak for themselves',
    resultsIntro: 'Real estate agencies using Novasoft AI see dramatic improvements in lead conversion, agent productivity, and overall revenue. Here is what our clients have achieved.',
    results: [
      { metric: '8+', label: 'Agents hired for a Texas brokerage in one quarter' },
      { metric: '<60s', label: 'Average lead response time' },
      { metric: '3x', label: 'Increase in qualified appointments booked' },
      { metric: '24/7', label: 'Lead response coverage including nights and weekends' },
    ],
    proofQuote: 'We were spending $12k/month on leads and losing half of them to slow follow-up. Now every lead gets a call in under a minute. Our appointment rate tripled, and we hired 8 agents using the same system. This paid for itself in the first week.',
    proofAuthor: 'David R.',
    proofRole: 'Broker/Owner, Texas Real Estate Group',
    techStack: [
      { name: 'AI Voice Agent', description: 'Natural-sounding voice calls powered by advanced language models. Follows your exact scripts and handles objections in real time.' },
      { name: 'CRM Integration', description: 'Direct sync with Follow Up Boss, KvCORE, HubSpot, and other popular real estate CRMs. Leads update automatically.' },
      { name: 'Calendar Automation', description: 'Real-time calendar access for Google Calendar, Calendly, and Cal.com. Books appointments without human involvement.' },
      { name: 'Multi-Channel Outreach', description: 'Automated SMS, email, and voicemail drops. Coordinated sequences that adapt based on prospect engagement.' },
    ],
    faqs: [
      {
        question: 'Can the AI follow my specific real estate scripts?',
        answer: 'Yes. We customize the AI with your exact scripts, objection handling, and qualification criteria. You review and approve everything before it goes live. The AI follows your playbook, not a generic template.',
      },
      {
        question: 'Does it integrate with my existing CRM like Follow Up Boss or KvCORE?',
        answer: 'Absolutely. We integrate with all major real estate CRMs including Follow Up Boss, KvCORE, HubSpot, Sierra Interactive, and more. Leads are tagged, scored, and routed automatically based on your existing workflows.',
      },
      {
        question: 'How does the AI handle agent recruitment calls?',
        answer: 'The AI calls licensed agents from your target list, introduces your brokerage, asks screening questions about experience and production, and schedules interviews with qualified candidates. One brokerage used this to hire 8+ agents in a single quarter.',
      },
      {
        question: 'Will prospects know they are talking to an AI?',
        answer: 'Our voice AI sounds remarkably natural and follows conversation flows like a trained ISA. We always recommend transparent disclosure, and the AI can identify itself if asked. Most prospects are impressed by the fast response time regardless.',
      },
      {
        question: 'What happens if the AI cannot answer a question?',
        answer: 'The AI is trained to handle common objections and questions. For anything outside its scope, it smoothly transfers the call to a live agent or schedules a callback. No lead ever hits a dead end.',
      },
    ],
    whyAutomationHeadline: 'Why real estate agencies are switching to AI automation',
    whyAutomationText: [
      'The real estate industry is more competitive than ever. With online portals making it easy for buyers to browse listings, the window to capture and convert a lead has shrunk dramatically. Research from the National Association of Realtors shows that 74% of buyers work with the first agent who responds to their inquiry.',
      'Traditional solutions like hiring ISAs (Inside Sales Agents) or outsourcing to call centers are expensive and inconsistent. An ISA costs $40,000-$60,000 per year in salary alone. Call centers charge per minute and often deliver poor quality conversations that damage your brand.',
      'AI automation gives you the best of both worlds: instant response times at a fraction of the cost. Our AI works 24/7, follows your scripts perfectly, and improves over time based on conversion data. It is the most cost-effective way to scale your lead conversion without scaling your payroll.',
    ],
    howItWorksSteps: [
      { title: 'Connect your lead sources', description: 'We integrate with Zillow, Realtor.com, Facebook Ads, your website, and any other lead source you use. New leads trigger the AI instantly.' },
      { title: 'Customize your scripts and criteria', description: 'Tell us your qualification questions, objection handlers, and routing rules. We build a custom AI agent that sounds and acts like your best ISA.' },
      { title: 'AI qualifies and books appointments', description: 'Every lead gets a call within seconds. The AI qualifies, routes hot leads, and books appointments on your agents\' calendars automatically.' },
      { title: 'Track everything in your CRM', description: 'All calls, outcomes, and appointments sync to your CRM in real time. Full recordings and transcripts available for every conversation.' },
    ],
  },

  // ===========================
  // 2. PROPERTY MANAGEMENT
  // ===========================
  {
    slug: 'property-management',
    name: 'Property Management',
    headline: 'AI for Property Management Companies',
    subheadline: 'Handle tenant inquiries, maintenance requests, and after-hours communication across your entire portfolio without hiring more staff.',
    metaTitle: 'AI for Property Management Companies | Novasoft AI',
    metaDescription: 'AI chatbot and voice agent for property management. Handles tenant communication, maintenance requests, and lease inquiries 24/7. One client manages 120 properties with a 2-person team.',
    keywords: ['property management AI automation', 'AI for property management', 'tenant communication AI', 'property management chatbot', 'maintenance request automation', 'AI property manager'],
    heroEyebrow: 'AI FOR PROPERTY MANAGEMENT',
    introHeadline: 'Your tenants need answers at 2am. Your team should not have to be awake.',
    introText: [
      'Property management is a 24/7 job. Tenants call about leaking faucets at midnight. Prospective renters want to schedule viewings on Sunday afternoon. Owners expect monthly reports and instant updates on their investments. And your team of two or three people is expected to handle it all.',
      'The reality is brutal. Missed calls mean frustrated tenants. Slow maintenance responses lead to property damage and bad reviews. After-hours coverage means either paying for an answering service or burning out your staff. And as your portfolio grows, the communication burden grows exponentially.',
      'Novasoft AI gives your property management company a tireless digital team member. Our AI chatbot and voice agent handles routine tenant communication, triages maintenance requests, answers lease questions by reading your actual documents, and works across WhatsApp, phone, email, and SMS.',
    ],
    painPoints: [
      {
        title: 'Tenant inquiries overwhelm your small team',
        description: 'Every tenant has questions: rent payment dates, lease terms, parking rules, move-out procedures. Your team answers the same questions hundreds of times per month. Each interruption pulls them away from higher-value work like property inspections and owner relations.',
      },
      {
        title: 'After-hours emergencies go unaddressed',
        description: 'Burst pipes, lockouts, and heating failures do not wait for business hours. Without 24/7 coverage, tenants either cannot reach anyone or your staff gets middle-of-the-night calls. Answering services are expensive and cannot actually solve problems.',
      },
      {
        title: 'Maintenance request tracking is chaotic',
        description: 'Requests come in via phone, text, email, and in-person visits. Without a unified system, things slip through the cracks. Tenants submit the same request three times. Vendors do not get dispatched promptly. Property owners only hear about issues when they become expensive problems.',
      },
      {
        title: 'Scaling your portfolio means scaling your headcount',
        description: 'Every 50-75 properties you add means another full-time staff member just to handle communication. At $45,000+ per hire including benefits and training, growth gets expensive fast.',
      },
    ],
    solutionHeadline: 'An AI assistant that knows every property in your portfolio',
    solutionIntro: 'We build a custom AI agent that reads your lease agreements, knows your property rules, and communicates with tenants on their preferred channel. It handles the routine so your team can focus on growth.',
    solutions: [
      {
        title: 'AI Chatbot on WhatsApp and SMS',
        description: 'Tenants message your AI assistant on WhatsApp or SMS just like they would text a real person. It answers questions about rent, lease terms, parking, amenities, and building rules instantly. No app downloads required.',
      },
      {
        title: 'Document-Aware Responses',
        description: 'Our AI reads and understands your actual lease agreements, house rules, and property documentation. When a tenant asks "Can I have a pet?", the AI checks their specific lease and gives the correct answer for their property.',
      },
      {
        title: 'Maintenance Request Triage',
        description: 'The AI captures maintenance requests with photos and descriptions, categorizes urgency (emergency vs. routine), and either dispatches your vendor network automatically or queues it for your team to review in the morning.',
      },
      {
        title: '24/7 Emergency Handling',
        description: 'After-hours emergencies get immediate attention. The AI identifies true emergencies (flooding, gas leaks, lockouts), contacts your emergency vendor list, and notifies your on-call manager. Routine requests get logged for next-day follow-up.',
      },
    ],
    resultsHeadline: 'Manage more properties with fewer people',
    resultsIntro: 'Property management companies using Novasoft AI dramatically reduce their communication overhead while improving tenant satisfaction. Here is what our clients report.',
    results: [
      { metric: '120', label: 'Properties managed by a 2-person team' },
      { metric: '85%', label: 'Tenant inquiries resolved without human involvement' },
      { metric: '24/7', label: 'Coverage across WhatsApp, phone, and email' },
      { metric: '< 30s', label: 'Average tenant response time' },
    ],
    proofQuote: 'We manage 120 properties with just two people. Before the AI, we were drowning in tenant calls. Now the AI handles 85% of inquiries on WhatsApp, triages maintenance requests overnight, and our tenants actually prefer it because they get instant answers.',
    proofAuthor: 'Sarah K.',
    proofRole: 'Operations Director, Midwest Property Group',
    techStack: [
      { name: 'WhatsApp Business API', description: 'Full integration with WhatsApp Business. Tenants message directly and get instant AI responses. Supports photos, documents, and voice messages.' },
      { name: 'Document Intelligence', description: 'AI reads and processes lease agreements, house rules, and property documentation. Gives accurate, property-specific answers to tenant questions.' },
      { name: 'Property Management Software Sync', description: 'Integrates with AppFolio, Buildium, Rent Manager, and other PM platforms. Maintenance requests, tenant records, and lease data stay in sync.' },
      { name: 'Emergency Escalation Engine', description: 'Smart triage system that identifies true emergencies, contacts vendors, and alerts on-call managers. Routine requests get queued for business hours.' },
    ],
    faqs: [
      {
        question: 'Can the AI read and understand our specific lease agreements?',
        answer: 'Yes. We upload your lease templates and property-specific documents. The AI understands the terms and can answer tenant questions accurately based on their specific lease. If a tenant asks about pet policies, the AI checks their lease and responds with the correct information.',
      },
      {
        question: 'How does the AI handle emergency maintenance requests after hours?',
        answer: 'The AI uses a smart triage system to identify true emergencies like flooding, gas leaks, or heating failures. For emergencies, it immediately contacts your preferred vendors and notifies your on-call manager. Routine requests are logged with details and photos for your team to address during business hours.',
      },
      {
        question: 'Does it work on WhatsApp?',
        answer: 'Yes. WhatsApp is our most popular channel for property management. Tenants simply message your business number on WhatsApp and get instant responses. The AI handles text, photos, voice messages, and document sharing. No app downloads or logins required for tenants.',
      },
      {
        question: 'How many properties can the AI handle?',
        answer: 'There is no practical limit. We have clients managing over 200 properties with AI handling the bulk of tenant communication. The AI knows each property individually and gives property-specific answers. Scaling your portfolio no longer means scaling your team.',
      },
      {
        question: 'Can tenants still reach a human if they need to?',
        answer: 'Absolutely. The AI always offers the option to connect with a human team member. For complex issues or when a tenant specifically requests it, the conversation is transferred to your team with full context so they do not have to repeat themselves.',
      },
    ],
    whyAutomationHeadline: 'Why property managers are adopting AI faster than any other industry',
    whyAutomationText: [
      'Property management has one of the highest communication-to-revenue ratios of any industry. Your team might handle 500+ tenant interactions per month across a 100-unit portfolio. Most of those interactions are routine: rent payment questions, maintenance requests, lease clarifications, and move-in/move-out procedures.',
      'Traditional solutions are not scaling. Hiring more staff at $45,000+ per person adds cost that cuts into your management fees. Outsourced call centers give generic answers that frustrate tenants. And answering services just take messages without resolving anything.',
      'AI automation finally offers a real solution. A well-trained AI agent can resolve 80-90% of tenant inquiries instantly, 24 hours a day, at a fraction of the cost of a single employee. It never calls in sick, never has a bad day, and gets smarter over time as it handles more conversations.',
    ],
    howItWorksSteps: [
      { title: 'Upload your property documents', description: 'We ingest your lease agreements, house rules, maintenance procedures, and vendor lists. The AI learns your specific portfolio.' },
      { title: 'Connect your communication channels', description: 'Set up WhatsApp, SMS, phone, and email. Tenants reach your AI on whatever channel they prefer.' },
      { title: 'AI handles inquiries and maintenance', description: 'Routine questions get answered instantly. Maintenance requests get triaged and dispatched. Emergencies get escalated immediately.' },
      { title: 'Your team handles the exceptions', description: 'Complex issues get routed to your team with full context. You review AI conversations anytime and refine responses.' },
    ],
  },

  // ===========================
  // 3. SOLAR ENERGY
  // ===========================
  {
    slug: 'solar-energy',
    name: 'Solar Energy',
    headline: 'AI for Solar Energy Companies',
    subheadline: 'Replace your expensive call center with an AI that qualifies solar leads 24/7, confirms roof eligibility, and books site surveys automatically.',
    metaTitle: 'AI for Solar Energy Companies | Novasoft AI',
    metaDescription: 'AI call center replacement for solar companies. Qualifies high-volume leads 24/7, confirms homeowner eligibility, and books site surveys. Cut lead qualification costs by 70%.',
    keywords: ['solar energy AI automation', 'AI for solar companies', 'solar lead qualification AI', 'solar call center replacement', 'AI for solar sales', 'solar appointment setter AI'],
    heroEyebrow: 'AI FOR SOLAR ENERGY',
    introHeadline: 'Your ads generate leads. Your call center loses them.',
    introText: [
      'Solar companies spend aggressively on lead generation. Facebook ads, Google Ads, door-to-door canvassing, and referral programs generate thousands of leads per month. But here is the problem: most of those leads never get qualified properly.',
      'Call centers are expensive, inconsistent, and only work during business hours. Your best leads come in during evenings and weekends when homeowners are actually at home. By Monday morning, those leads are cold. They have already talked to two other solar companies or lost interest entirely.',
      'Novasoft AI replaces your call center with an AI voice agent that qualifies every lead the moment it comes in. It confirms homeownership, checks roof suitability, verifies utility spend, and books site surveys directly on your sales team\'s calendar. All at a fraction of what you pay your call center.',
    ],
    painPoints: [
      {
        title: 'High lead volume meets slow qualification',
        description: 'A successful solar ad campaign can generate hundreds of leads per week. Your call center cannot keep up. Leads sit in queue for hours or days. By the time someone calls, the homeowner has already spoken with a competitor or forgotten they even filled out the form.',
      },
      {
        title: 'Call centers are your biggest expense after ads',
        description: 'Outsourced solar call centers charge $15-25 per qualified appointment. With conversion rates around 20-30%, you are spending $50-100+ per actual sale opportunity. That cost eats directly into your margins on every installation.',
      },
      {
        title: 'Evening and weekend leads get no response',
        description: 'Homeowners are most likely to fill out solar inquiry forms during evenings and weekends when they are home and thinking about their energy bills. But call centers are typically staffed 9-5 Monday through Friday. Your hottest leads get the coldest response.',
      },
      {
        title: 'Inconsistent qualification wastes sales team time',
        description: 'Call center agents have variable quality. Some rush through qualification scripts. Others miss key disqualifying factors. Your sales team shows up for site surveys only to find renters, shaded roofs, or homes with brand-new roofs that cannot be modified.',
      },
    ],
    solutionHeadline: 'An AI call center that never sleeps and never misses a question',
    solutionIntro: 'Our AI voice agent replaces your call center for a fraction of the cost. It qualifies leads with your exact criteria, handles objections like a trained solar sales rep, and books appointments the moment a lead is qualified.',
    solutions: [
      {
        title: 'Instant Lead Response',
        description: 'Every lead gets a call within seconds of submission, no matter the time or day. The AI introduces itself, confirms interest, and begins the qualification process. Leads are impressed by the fast response, and you capture them before competitors can.',
      },
      {
        title: 'Comprehensive Solar Qualification',
        description: 'The AI follows your custom qualification script: homeownership verification, roof age and condition, monthly utility spend, shade assessment, and credit pre-screening. Only fully qualified leads get passed to your sales team.',
      },
      {
        title: 'Automated Site Survey Booking',
        description: 'Qualified leads are immediately offered available time slots for site surveys. The AI checks your sales reps\' calendars, books the appointment, and sends confirmation via text and email. Shows up rates increase dramatically when appointments are booked in the moment of interest.',
      },
      {
        title: 'Follow-Up Nurture Sequences',
        description: 'Leads that are interested but not ready get entered into automated nurture sequences. The AI follows up via text and email at optimal intervals, re-engages when utility rates increase, and routes them back for booking when they are ready.',
      },
    ],
    resultsHeadline: 'Cut costs. Book more surveys. Close more deals.',
    resultsIntro: 'Solar companies using Novasoft AI are seeing dramatic reductions in lead qualification costs while booking more qualified site surveys than their call centers ever did.',
    results: [
      { metric: '70%', label: 'Reduction in lead qualification costs vs. call centers' },
      { metric: '< 60s', label: 'Average response time to every lead' },
      { metric: '24/7', label: 'Lead qualification including evenings and weekends' },
      { metric: '2.5x', label: 'More site surveys booked per month' },
    ],
    proofQuote: 'We were spending $18,000 per month on our call center and still losing leads over weekends. The AI now handles all our lead qualification around the clock. Our cost per qualified appointment dropped by 70% and we are booking more surveys than ever.',
    proofAuthor: 'Marcus C.',
    proofRole: 'VP Sales, Sunstate Solar Solutions',
    techStack: [
      { name: 'AI Voice Agent', description: 'Natural-sounding voice calls that follow your solar sales scripts. Handles objections about pricing, leasing vs. buying, and utility savings calculations.' },
      { name: 'Lead Source Integration', description: 'Direct connection to Facebook Ads, Google Ads, your website forms, and third-party lead providers. New leads trigger the AI instantly.' },
      { name: 'Calendar and CRM Sync', description: 'Real-time integration with your sales team\'s calendars and CRM. Appointments book automatically and all lead data syncs without manual entry.' },
      { name: 'Qualification Engine', description: 'Custom-built scoring model based on your criteria: homeownership, roof condition, utility spend, credit, and more. Only fully qualified leads reach your team.' },
    ],
    faqs: [
      {
        question: 'How does the AI qualify solar leads differently than a call center?',
        answer: 'The AI follows your exact qualification script every single time, with zero deviation. It never rushes through questions, never forgets to ask about roof condition, and never passes along unqualified leads. Every call is recorded and scored, giving you complete visibility into lead quality.',
      },
      {
        question: 'Can it handle common solar objections about pricing and ROI?',
        answer: 'Yes. We train the AI with your specific objection handling scripts. It can discuss leasing vs. buying, explain federal and state incentives, calculate estimated savings based on utility spend, and address concerns about roof damage. It handles these conversations naturally and confidently.',
      },
      {
        question: 'What happens with leads that are not ready to buy right now?',
        answer: 'Leads that show interest but are not ready get entered into a nurture sequence. The AI follows up via text and email at optimal intervals. When utility rates increase or incentives change, the AI re-engages and attempts to book an appointment.',
      },
      {
        question: 'How quickly can we replace our existing call center?',
        answer: 'Most solar companies are fully transitioned within 2-3 weeks. We start by running the AI in parallel with your existing call center, comparing results. Once you see the AI outperforming your call center on speed, qualification accuracy, and cost, you make the switch.',
      },
      {
        question: 'Does the AI work with our existing lead sources and CRM?',
        answer: 'Yes. We integrate with all major lead sources including Facebook Ads, Google Ads, Modernize, EnergySage, and custom website forms. CRM integrations include Salesforce, HubSpot, Podio, and most solar-specific platforms.',
      },
    ],
    whyAutomationHeadline: 'The solar industry is ripe for AI disruption',
    whyAutomationText: [
      'The solar industry has a lead problem. Companies invest heavily in advertising to generate high volumes of leads, but the infrastructure to qualify and convert those leads has not kept pace. Call centers were a reasonable solution five years ago, but costs have risen while quality has declined.',
      'The math is simple: if you spend $50 per lead on advertising and your call center charges $20 per qualification attempt with a 25% booking rate, your cost per booked appointment is $130 before your sales team even shows up. AI cuts the qualification cost to a fraction of that while improving speed and consistency.',
      'Solar companies that adopt AI early gain a structural cost advantage. Lower cost per appointment means you can either increase margins or outspend competitors on advertising. Either way, you win.',
    ],
    howItWorksSteps: [
      { title: 'Connect your lead sources', description: 'We plug into your Facebook Ads, Google Ads, website forms, and any third-party lead providers. Leads flow directly to the AI.' },
      { title: 'Configure qualification criteria', description: 'We build your custom qualification script: homeownership, roof details, utility spend, credit criteria, and any other requirements specific to your market.' },
      { title: 'AI calls and qualifies 24/7', description: 'Every lead gets a call within seconds. The AI qualifies, handles objections, and books site surveys on your sales team\'s calendar.' },
      { title: 'Review results and optimize', description: 'Full call recordings, transcripts, and analytics. See exactly how leads are being handled and refine scripts based on conversion data.' },
    ],
  },

  // ===========================
  // 4. CONSTRUCTION
  // ===========================
  {
    slug: 'construction',
    name: 'Construction',
    headline: 'AI for Construction Companies',
    subheadline: 'You get 30+ leads a day but your team can only call back a fraction. AI voice follow-up responds in minutes, qualifies every lead, and books estimate appointments.',
    metaTitle: 'AI for Construction Companies | Novasoft AI',
    metaDescription: 'AI voice follow-up for construction companies. Respond to every lead in minutes, qualify project scope and budget, and book estimate appointments automatically. Stop losing deals to slow follow-up.',
    keywords: ['construction AI automation', 'AI for construction companies', 'construction lead follow-up AI', 'AI appointment booking construction', 'construction sales automation', 'AI for contractors'],
    heroEyebrow: 'AI FOR CONSTRUCTION',
    introHeadline: 'Every hour you wait to call back a lead, your close rate drops by half.',
    introText: [
      'Construction companies live and die by their lead pipeline. Whether you specialize in residential remodeling, commercial buildouts, roofing, or general contracting, the pattern is the same: leads come in from Google, HomeAdvisor, Angi, referrals, and your website. And they sit.',
      'Your estimators are on job sites. Your office manager is buried in paperwork. Your sales team is doing walkthroughs. Nobody has time to call back 30+ leads a day within the critical first few minutes.',
      'Research shows that the first contractor to respond wins the job 78% of the time. When you take hours or days to respond, you are not just losing one lead. You are losing the majority of your pipeline to faster competitors. Novasoft AI fixes this with AI voice follow-up that responds to every lead within minutes, qualifies the project, and books estimate appointments on your calendar.',
    ],
    painPoints: [
      {
        title: '30+ leads per day but no time to call them',
        description: 'Your advertising works. Leads are flowing in. But your team is spread across job sites, client meetings, and active projects. By the time someone sits down to make calls, half the day is gone and the leads are lukewarm.',
      },
      {
        title: 'Slow follow-up costs you the biggest deals',
        description: 'A homeowner requesting a $200,000 kitchen renovation fills out forms on three contractor websites. The first one to call and schedule an estimate wins. If you call back two days later, you are not even in the running.',
      },
      {
        title: 'Estimators spend half their time on unqualified projects',
        description: 'Your skilled estimators drive across town, spend 90 minutes doing a walkthrough, and then learn the homeowner\'s budget is half of what the project costs. Without proper qualification, you waste your most valuable team members\' time.',
      },
      {
        title: 'Seasonal spikes overwhelm your capacity',
        description: 'Spring and summer bring a surge of leads that your team cannot possibly handle. You either turn away work during peak season or scramble to hire temporary staff who do not know your business.',
      },
    ],
    solutionHeadline: 'AI that responds faster than any human team',
    solutionIntro: 'Our AI voice agent acts as your always-on first responder. It calls leads within minutes, qualifies project scope, confirms budget ranges, and books estimate appointments directly on your team\'s calendar.',
    solutions: [
      {
        title: 'AI Voice Follow-Up in Minutes',
        description: 'Every new lead gets a call within 2-5 minutes. The AI sounds professional and knowledgeable, introduces your company, and begins the qualification conversation. Speed is the number one factor in construction sales, and AI gives you an unbeatable advantage.',
      },
      {
        title: 'Project Scope Qualification',
        description: 'The AI asks about project type, square footage, timeline, and budget range. It identifies deal-breakers early (budget too low, timeline unrealistic, project type you do not handle) and saves your estimators from wasted site visits.',
      },
      {
        title: 'Automated Estimate Booking',
        description: 'Qualified leads are offered available time slots immediately. The AI checks your estimators\' calendars, accounts for drive time between appointments, and books the visit. Confirmation texts and emails go out automatically with your company branding.',
      },
      {
        title: 'Lead Nurture for Long-Term Projects',
        description: 'Not every project is immediate. The AI identifies leads planning projects 3-6 months out and enters them into a nurture sequence. It follows up at the right time so you are top of mind when they are ready to move forward.',
      },
    ],
    resultsHeadline: 'More estimates. Better qualified. Faster response.',
    resultsIntro: 'Construction companies using Novasoft AI report significant improvements in lead conversion and estimator productivity. Here is what they are seeing.',
    results: [
      { metric: '< 5 min', label: 'Average lead response time' },
      { metric: '4x', label: 'More estimates booked per week' },
      { metric: '40%', label: 'Reduction in wasted site visits' },
      { metric: '78%', label: 'Close rate when responding first to leads' },
    ],
    proofQuote: 'We were getting 35 leads a day and maybe calling back 10 of them. Now every single lead gets a call within minutes. Our estimate bookings quadrupled and our estimators are only visiting qualified projects. We are closing more jobs than ever.',
    proofAuthor: 'Mike T.',
    proofRole: 'Owner, Summit Construction Group',
    techStack: [
      { name: 'AI Voice Agent', description: 'Professional-sounding voice calls customized for construction sales. Discusses project types, timelines, and budgets naturally.' },
      { name: 'Lead Source Integration', description: 'Connects to Google Ads, HomeAdvisor, Angi, Thumbtack, your website, and any CRM. Leads trigger the AI instantly.' },
      { name: 'Smart Calendar Booking', description: 'Books estimate appointments with drive-time awareness. Optimizes your estimators\' routes and prevents double-booking.' },
      { name: 'Pipeline Management', description: 'All leads tracked from first contact through project completion. Dashboard shows conversion rates, response times, and revenue attribution.' },
    ],
    faqs: [
      {
        question: 'Can the AI discuss different types of construction projects?',
        answer: 'Yes. We train the AI on your specific service offerings. Whether you do residential remodeling, commercial buildouts, roofing, concrete, or general contracting, the AI knows your scope and can intelligently discuss project requirements with leads.',
      },
      {
        question: 'How does the AI handle leads who want an immediate price quote?',
        answer: 'The AI is trained to explain that accurate pricing requires an on-site estimate. It positions the site visit as a value-add (free consultation and professional assessment) and focuses on booking the appointment rather than giving ballpark numbers that could be misleading.',
      },
      {
        question: 'Does it account for drive time when booking estimate appointments?',
        answer: 'Yes. Our smart calendar system accounts for travel time between appointments based on job site locations. This prevents back-to-back bookings on opposite sides of town and keeps your estimators\' schedules realistic and efficient.',
      },
      {
        question: 'Can the AI qualify for specific budget ranges?',
        answer: 'Absolutely. We configure minimum project values and budget ranges based on your business. The AI asks about budget expectations early in the conversation and filters out projects that do not meet your minimums. Your estimators only visit leads that match your criteria.',
      },
      {
        question: 'What if we have a seasonal business with huge lead spikes?',
        answer: 'AI scales instantly. Whether you get 10 leads per day or 100, the AI handles every single one with the same speed and quality. No need to hire temporary staff during peak season. The AI absorbs the volume automatically.',
      },
    ],
    whyAutomationHeadline: 'Construction is one of the slowest industries to adopt technology. That is your advantage.',
    whyAutomationText: [
      'Most construction companies still rely on manual callbacks, spreadsheets, and sticky notes to manage their leads. While other industries have embraced sales automation, contractors are still playing phone tag and losing deals to whoever happened to be near their phone.',
      'This creates a massive opportunity for early adopters. When your competitors take 4 hours to call back a lead and you respond in 4 minutes, you do not just win that lead. You build a reputation as the responsive, professional contractor in your market.',
      'AI automation is not about replacing the personal touch that wins construction jobs. It is about making sure every lead gets that personal touch quickly enough to matter. Your estimators and sales team still do what they do best. They just have a much better pipeline to work from.',
    ],
    howItWorksSteps: [
      { title: 'Connect your lead sources', description: 'We integrate with Google, HomeAdvisor, Angi, your website forms, and any other source. New leads trigger the AI within minutes.' },
      { title: 'Define your qualification criteria', description: 'Tell us your ideal project types, minimum budgets, service areas, and timeline preferences. We build an AI agent that filters accordingly.' },
      { title: 'AI calls, qualifies, and books', description: 'Every lead gets a professional call. The AI qualifies the project, confirms budget, and books estimate appointments on your team\'s calendar.' },
      { title: 'Your team shows up prepared', description: 'Estimators get full call summaries with project details, budget range, and timeline. They arrive at site visits fully informed and ready to close.' },
    ],
  },

  // ===========================
  // 5. DENTAL
  // ===========================
  {
    slug: 'dental',
    name: 'Dental',
    headline: 'AI for Dental Practices',
    subheadline: 'Never miss a patient call again. AI receptionist handles scheduling, reminders, insurance questions, and patient communication so your front desk can focus on in-office care.',
    metaTitle: 'AI for Dental Practices | Novasoft AI',
    metaDescription: 'AI receptionist for dental practices. Handles appointment scheduling, reminders, insurance verification, and patient communication 24/7. Reduce no-shows by 60% and never miss a call.',
    keywords: ['dental AI automation', 'AI for dental practices', 'dental receptionist AI', 'dental appointment scheduling AI', 'dental patient communication AI', 'AI dental office automation'],
    heroEyebrow: 'AI FOR DENTAL PRACTICES',
    introHeadline: 'Your front desk is overwhelmed. Your patients are frustrated. There is a better way.',
    introText: [
      'Running a dental practice means balancing clinical excellence with business operations. Your front desk team juggles phone calls, insurance verification, appointment scheduling, patient check-ins, billing questions, and recall management all at once. When the phone rings and the waiting room is full, something has to give.',
      'The data tells the story: dental practices miss an average of 35% of incoming calls during business hours. Every missed call is a potential patient choosing another dentist. And no-shows cost the average practice $150,000+ per year in lost revenue.',
      'Novasoft AI gives your practice an AI receptionist that answers every call, schedules appointments, sends automated reminders, handles insurance questions, and manages patient communication around the clock. Your front desk team gets relief, your patients get instant service, and your schedule stays full.',
    ],
    painPoints: [
      {
        title: 'Missed calls during busy office hours',
        description: 'When your front desk is checking in patients, handling insurance, and assisting the clinical team, the phone goes to voicemail. New patients looking for a dentist call the next practice on their list. Existing patients get frustrated and may eventually switch providers.',
      },
      {
        title: 'No-shows and last-minute cancellations',
        description: 'Appointment no-shows are the silent killer of dental practice revenue. Without consistent reminders across multiple channels, patients forget, oversleep, or just do not show up. Each empty chair costs your practice $200-400 in lost production.',
      },
      {
        title: 'Insurance and billing questions consume staff time',
        description: 'Patients call constantly asking about coverage, copays, and billing. Your staff spends hours per day looking up benefits and explaining details when they should be focused on patient care and practice operations.',
      },
      {
        title: 'Recall and reactivation falls through the cracks',
        description: 'Patients who are overdue for cleanings or treatment need outreach. But recall campaigns require dedicated time your team does not have. Inactive patients represent thousands in unrealized revenue sitting in your practice management system.',
      },
    ],
    solutionHeadline: 'An AI receptionist that never puts patients on hold',
    solutionIntro: 'We deploy a custom AI phone and messaging system for your dental practice. It answers calls instantly, schedules on your actual calendar, sends multi-channel reminders, and handles routine patient questions. All integrated with your practice management software.',
    solutions: [
      {
        title: 'AI Phone Receptionist',
        description: 'Every incoming call is answered within one ring, 24/7. The AI greets patients by name (when caller ID matches), handles scheduling requests, answers common questions about hours, location, and services, and routes urgent clinical calls to your team.',
      },
      {
        title: 'Smart Appointment Scheduling',
        description: 'The AI sees your real-time schedule and books appointments based on your rules: procedure type, provider preference, insurance type, and time blocks. It fills cancellation slots, manages waitlists, and optimizes your daily schedule for maximum production.',
      },
      {
        title: 'Multi-Channel Appointment Reminders',
        description: 'Patients get automated reminders via text, email, and phone call at intervals you set (72 hours, 24 hours, 2 hours before). Patients can confirm, reschedule, or cancel right from the reminder. Cancellation slots get offered to waitlist patients automatically.',
      },
      {
        title: 'Patient Recall and Reactivation',
        description: 'The AI automatically identifies patients overdue for hygiene visits, treatment follow-ups, and recall. It reaches out with personalized messages, handles scheduling, and tracks reactivation rates. Turn your dormant patient base into booked appointments.',
      },
    ],
    resultsHeadline: 'Full schedules. Fewer no-shows. Happier patients.',
    resultsIntro: 'Dental practices using Novasoft AI see immediate improvements in schedule utilization, patient satisfaction, and staff workload. Here are typical results.',
    results: [
      { metric: '60%', label: 'Reduction in no-shows with multi-channel reminders' },
      { metric: '0', label: 'Missed calls during and after business hours' },
      { metric: '25+', label: 'Additional appointments booked per month from recall' },
      { metric: '3 hrs', label: 'Daily staff time saved on phone and scheduling' },
    ],
    proofQuote: 'Our front desk was drowning. We missed 30% of calls and our no-show rate was killing us. The AI receptionist answered every call from day one, our no-shows dropped 60% with automated reminders, and we booked 30 extra appointments last month from patient recall alone. My team can finally focus on patients in the office.',
    proofAuthor: 'Dr. Emily W.',
    proofRole: 'Owner, Brightside Dental',
    techStack: [
      { name: 'AI Voice Receptionist', description: 'Natural-sounding phone system that answers calls, recognizes returning patients, and handles scheduling conversations like a skilled receptionist.' },
      { name: 'Practice Management Integration', description: 'Direct sync with Dentrix, Eaglesoft, Open Dental, and other PMS platforms. Schedule changes reflect in real time without manual entry.' },
      { name: 'Multi-Channel Messaging', description: 'Automated reminders and communication via SMS, email, and phone. Patients respond directly to confirm, reschedule, or ask questions.' },
      { name: 'Analytics Dashboard', description: 'Track call answer rates, appointment conversion, no-show rates, and recall effectiveness. See exactly how the AI impacts your bottom line.' },
    ],
    faqs: [
      {
        question: 'Does the AI integrate with our practice management software?',
        answer: 'Yes. We integrate with all major dental PMS platforms including Dentrix, Eaglesoft, Open Dental, Curve Dental, and Denticon. The AI reads your real-time schedule, books appointments, and updates patient records automatically. No double-entry required.',
      },
      {
        question: 'Can patients tell they are talking to an AI?',
        answer: 'Our AI receptionist sounds natural and professional. It greets patients warmly, uses their name when available, and handles conversations smoothly. We recommend transparent disclosure, and the AI can identify itself when asked. Most patients appreciate the instant response and do not mind.',
      },
      {
        question: 'How does the AI handle emergency dental calls?',
        answer: 'The AI recognizes emergency keywords and situations (severe pain, swelling, knocked-out tooth, bleeding). Emergency calls are immediately flagged and routed to your on-call dentist or clinical team. The AI provides basic first-aid guidance while arranging the connection.',
      },
      {
        question: 'Can it handle insurance verification questions?',
        answer: 'The AI can answer common insurance questions based on the information in your system: which plans you accept, general coverage explanations, and estimated copays for common procedures. For complex verification, it collects the patient\'s insurance details and queues a verification task for your billing team.',
      },
      {
        question: 'How much does the average dental practice save with AI automation?',
        answer: 'Most practices see a return within the first month. Between reduced no-shows (worth $200-400 per empty chair), reactivated patients, and staff time savings, practices typically recover 5-10x their investment. One practice reported $15,000 in additional monthly revenue from recall appointments alone.',
      },
    ],
    whyAutomationHeadline: 'Why the smartest dental practices are investing in AI right now',
    whyAutomationText: [
      'The dental industry is experiencing a staffing crisis. Finding and retaining skilled front desk staff has never been harder. The average dental receptionist position takes 6-8 weeks to fill, and turnover is high. Every time you lose a team member, you lose institutional knowledge and your patient experience suffers.',
      'AI does not replace your front desk team. It augments them. By handling the highest-volume tasks (answering phones, sending reminders, scheduling, recall outreach), AI frees your team to focus on what machines cannot do: greeting patients with warmth, handling complex insurance situations, and providing the personal touch that builds loyalty.',
      'The practices that adopt AI now will have a significant competitive advantage. While other offices are still missing calls and losing patients to no-shows, AI-powered practices will capture every opportunity, maintain full schedules, and deliver the responsive experience that modern patients expect.',
    ],
    howItWorksSteps: [
      { title: 'Connect your practice management system', description: 'We integrate directly with your PMS to access your schedule, patient records, and provider information in real time.' },
      { title: 'Configure your scheduling rules', description: 'Set your preferences for appointment types, time blocks, provider assignments, insurance requirements, and booking rules.' },
      { title: 'AI answers calls and manages patients', description: 'From day one, the AI answers every call, schedules appointments, sends reminders, and handles recall outreach automatically.' },
      { title: 'Monitor results on your dashboard', description: 'Track every metric that matters: calls answered, appointments booked, no-shows prevented, and revenue generated. Refine as needed.' },
    ],
  },

  // ===========================
  // 6. LOGISTICS
  // ===========================
  {
    slug: 'logistics',
    name: 'Logistics',
    headline: 'AI for Logistics Companies',
    subheadline: 'Customer service in logistics is a volume game. AI voice agents handle tracking inquiries, delivery updates, and customer communication in multiple languages, connected to your CRM and TMS.',
    metaTitle: 'AI for Logistics Companies | Novasoft AI',
    metaDescription: 'AI voice agent for logistics and shipping companies. Handles tracking inquiries, delivery updates, and customer service in multiple languages. CRM and TMS connected for real-time shipment data.',
    keywords: ['logistics AI automation', 'AI for logistics companies', 'logistics customer service AI', 'shipping AI chatbot', 'freight AI automation', 'multi-language logistics AI'],
    heroEyebrow: 'AI FOR LOGISTICS',
    introHeadline: 'Your customers are calling about shipments. All day. Every day. In five languages.',
    introText: [
      'Logistics companies handle massive volumes of customer communication. Every shipment generates multiple touchpoints: booking confirmation, pickup notification, in-transit updates, delivery scheduling, and post-delivery follow-up. Multiply that by hundreds or thousands of shipments per week, and your customer service team is perpetually overwhelmed.',
      'The challenge gets harder when your customers speak different languages. International logistics means dealing with inquiries in English, Spanish, Portuguese, French, German, and more. Hiring multilingual agents is expensive and hard to staff consistently.',
      'Novasoft AI deploys AI voice agents and chatbots that handle the bulk of your customer communication. They answer tracking questions in real time by pulling data from your TMS, provide proactive delivery updates, handle scheduling changes, and communicate fluently in multiple languages. Your human team focuses on exceptions, complex issues, and high-value client relationships.',
    ],
    painPoints: [
      {
        title: 'Customer service is overwhelmed by tracking inquiries',
        description: '"Where is my shipment?" accounts for 40-60% of all customer service contacts at most logistics companies. Each call takes 3-5 minutes of agent time to look up tracking information and relay status. It is repetitive, low-value work that consumes your team\'s entire day.',
      },
      {
        title: 'Multi-language support is expensive and inconsistent',
        description: 'Serving international customers requires agents who speak their language. Bilingual and trilingual customer service agents command premium salaries. Staffing coverage across time zones and languages means either a large team or gaps in service.',
      },
      {
        title: 'Delivery windows require constant communication',
        description: 'Coordinating delivery appointments means back-and-forth calls between your team, drivers, and customers. Schedule changes cascade into multiple notifications. Without automation, your team spends more time communicating about deliveries than managing them.',
      },
      {
        title: 'After-hours and weekend inquiries go unanswered',
        description: 'Shipments move 24/7 but your customer service does not. Customers checking on weekend deliveries or overnight freight get voicemail. Urgent issues like missed pickups or refused deliveries sit until Monday morning.',
      },
    ],
    solutionHeadline: 'An AI customer service team that speaks every language your customers do',
    solutionIntro: 'We build custom AI voice and chat agents that connect directly to your TMS and CRM. They handle tracking, scheduling, and customer communication in multiple languages, around the clock.',
    solutions: [
      {
        title: 'AI Voice Agent for Tracking Inquiries',
        description: 'Customers call your number and get instant answers about their shipment status. The AI pulls real-time data from your TMS, provides current location, estimated delivery time, and any exceptions or delays. Average call handling time drops from 4 minutes to under 30 seconds.',
      },
      {
        title: 'Multi-Language Support',
        description: 'Our AI communicates fluently in English, Spanish, Portuguese, French, German, Mandarin, and more. It detects the caller\'s language automatically and responds accordingly. No more lost-in-translation moments or customers hanging up because they cannot communicate.',
      },
      {
        title: 'Proactive Delivery Notifications',
        description: 'Instead of waiting for customers to call, the AI proactively sends updates via call, text, or email. Pickup confirmations, in-transit milestones, delivery window alerts, and delay notifications all go out automatically based on TMS events.',
      },
      {
        title: 'Delivery Scheduling and Rescheduling',
        description: 'Customers can schedule, reschedule, or modify delivery appointments through the AI via phone or text. The AI coordinates with your dispatch system, confirms driver availability, and sends updated notifications to all parties.',
      },
    ],
    resultsHeadline: 'Handle 10x the volume without 10x the staff',
    resultsIntro: 'Logistics companies using Novasoft AI dramatically reduce customer service costs while improving response times and customer satisfaction scores.',
    results: [
      { metric: '80%', label: 'Reduction in routine customer service calls' },
      { metric: '6+', label: 'Languages supported natively' },
      { metric: '< 30s', label: 'Average resolution time for tracking inquiries' },
      { metric: '24/7', label: 'Customer service coverage across all time zones' },
    ],
    proofQuote: 'We handle 2,000+ shipments per week and our customer service team was drowning in "where is my package" calls. The AI now handles 80% of those inquiries automatically in four languages. Our team focuses on actual problems instead of reading tracking numbers all day. CSAT scores went up 35%.',
    proofAuthor: 'Roberto L.',
    proofRole: 'Head of Operations, TransGlobal Logistics',
    techStack: [
      { name: 'AI Voice Agent (Multi-Language)', description: 'Natural voice conversations in 6+ languages with automatic language detection. Handles tracking inquiries, scheduling, and status updates.' },
      { name: 'TMS Integration', description: 'Direct connection to your Transportation Management System for real-time shipment data. Supports most major TMS platforms including Oracle TMS, SAP TM, and MercuryGate.' },
      { name: 'CRM Sync', description: 'Customer records, communication history, and preferences sync between your CRM and the AI. Every interaction is logged for full visibility.' },
      { name: 'Proactive Notification Engine', description: 'Event-driven notifications triggered by TMS milestones. Pickup, in-transit, delivery, exception, and delay alerts sent via voice, SMS, and email.' },
    ],
    faqs: [
      {
        question: 'How does the AI access real-time shipment tracking data?',
        answer: 'We connect directly to your Transportation Management System (TMS) via API. When a customer calls or messages about a shipment, the AI looks up the tracking number in real time and provides current status, location, and estimated delivery time. Data is always live and accurate.',
      },
      {
        question: 'Which languages does the AI support?',
        answer: 'Our AI currently supports English, Spanish, Portuguese, French, German, Mandarin, Arabic, and several more. It detects the caller\'s preferred language automatically and switches seamlessly. We can add additional languages based on your customer base.',
      },
      {
        question: 'Can the AI handle delivery scheduling and changes?',
        answer: 'Yes. The AI can schedule delivery appointments, process rescheduling requests, and update delivery windows. It coordinates with your dispatch system to confirm driver availability and sends updated notifications to all relevant parties including the customer, driver, and receiver.',
      },
      {
        question: 'What happens when a shipment has an exception or delay?',
        answer: 'The AI proactively notifies affected customers about exceptions and delays before they call to ask. When customers do call about a delayed shipment, the AI explains the situation, provides an updated ETA, and offers options like rescheduling. Complex exceptions are escalated to your team with full context.',
      },
      {
        question: 'How does this integrate with our existing customer service team?',
        answer: 'The AI handles routine inquiries (tracking, scheduling, basic questions) automatically. Complex issues, complaints, or customer requests for a human are transferred to your team with full conversation context. Your team gets a dashboard showing all AI interactions and can take over any conversation at any time.',
      },
    ],
    whyAutomationHeadline: 'The logistics industry cannot afford to keep scaling customer service linearly',
    whyAutomationText: [
      'Logistics companies face a fundamental scaling challenge: every new customer and every new shipment generates customer service demand. Traditional staffing models require adding headcount proportionally to volume growth. When you double your shipments, you roughly double your CS team.',
      'AI breaks this linear relationship. An AI voice agent can handle 1,000 tracking inquiries per day as easily as 100. Adding new languages does not require hiring new agents. Scaling to 24/7 coverage does not require night shifts. The marginal cost of each additional customer interaction approaches zero.',
      'For logistics companies operating on tight margins, this is transformational. The companies that automate customer service first will be able to scale more aggressively, serve more customers, and maintain better margins than competitors still scaling the old-fashioned way.',
    ],
    howItWorksSteps: [
      { title: 'Connect your TMS and CRM', description: 'We integrate with your Transportation Management System and CRM to access real-time shipment data and customer records.' },
      { title: 'Configure languages and communication rules', description: 'Set up supported languages, notification triggers, escalation rules, and greeting scripts for your specific operation.' },
      { title: 'AI handles customer inquiries 24/7', description: 'Tracking calls, delivery scheduling, proactive notifications, and routine questions are all handled by the AI in your customers\' preferred language.' },
      { title: 'Your team handles exceptions', description: 'Complex issues, complaints, and VIP clients get routed to your human team with full context. Dashboard gives complete visibility into all AI interactions.' },
    ],
  },
];

// Helper functions
export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}

export function getAllIndustries(): Industry[] {
  return industries;
}
