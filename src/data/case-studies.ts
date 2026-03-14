export interface CaseStudy {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  industry: string;
  client: string;
  location: string;
  heroMetric: string;
  heroMetricLabel: string;
  secondaryMetrics: { value: string; label: string }[];
  problem: {
    headline: string;
    paragraphs: string[];
    bullets: string[];
  };
  solution: {
    headline: string;
    paragraphs: string[];
    bullets: string[];
  };
  results: {
    headline: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  techStack: { name: string; description: string }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  relatedSlugs: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-cold-calling-real-estate-recruitment',
    title: 'How a Texas Real Estate Brokerage Hired 8+ Agents Using AI Cold Calling',
    seoTitle: 'AI Cold Calling for Real Estate Recruitment | 8+ Agents Hired',
    metaDescription: 'See how a Texas real estate brokerage used AI voice agents to automate cold calling, recruit 8+ agents, and eliminate manual dialing with smart callback sequences.',
    industry: 'Real Estate',
    client: 'Texas Real Estate Brokerage',
    location: 'Texas, USA',
    heroMetric: '8+',
    heroMetricLabel: 'Agents Hired Through AI Calling',
    secondaryMetrics: [
      { value: '4-Call', label: 'Automated Sequences' },
      { value: '500+', label: 'Agents Targeted' },
      { value: '0', label: 'Manual Dials Needed' },
    ],
    problem: {
      headline: 'Manual cold calling was bleeding time and money',
      paragraphs: [
        'This growing Texas brokerage had an ambitious goal: recruit 500+ real estate agents to join their team. The traditional approach? Hire callers, hand them a list, and hope for the best.',
        'The reality was painful. Human callers were expensive, inconsistent, and burned out fast. Most calls went to voicemail. Follow-ups fell through the cracks. And the best prospects often got missed because nobody called them back at the right time.',
        'The brokerage needed a way to systematically reach hundreds of agents, qualify their interest, and book interviews. All without burning through their recruitment budget.',
      ],
      bullets: [
        'Manual calling was slow, expensive, and inconsistent',
        'Follow-up sequences were impossible to maintain at scale',
        'No system for tracking callback timing or prospect interest',
        'Best candidates slipped through the cracks',
        'Callers burned out quickly on repetitive outreach',
      ],
    },
    solution: {
      headline: 'An AI voice agent that calls, qualifies, and books interviews',
      paragraphs: [
        'We built an AI voice agent specifically trained for agent recruitment conversations. The AI sounds natural, handles objections, and knows when to push forward or schedule a callback.',
        'The system runs automated 4-call sequences for every prospect. If an agent does not answer, the AI schedules smart callbacks based on optimal timing. When a prospect shows interest, the AI qualifies them on the spot and books an interview directly on the recruitment team\'s calendar.',
        'Everything syncs to the brokerage\'s CRM automatically. Every call is logged, every outcome is tracked, and every interested agent gets immediate follow-up.',
      ],
      bullets: [
        'AI voice agent trained on recruitment scripts and objection handling',
        'Automated 4-call sequences with smart callback timing',
        'Real-time qualification during live conversations',
        'Auto-scheduling of interviews on the recruitment calendar',
        'Full CRM integration for tracking and reporting',
        'Natural-sounding conversations that build rapport',
      ],
    },
    results: {
      headline: 'From manual dialing to automated recruitment pipeline',
      paragraphs: [
        'Within weeks of launching, the AI calling system had already produced real hires. Over 8 agents were recruited through AI-driven conversations, with the pipeline continuing to grow.',
        'The brokerage eliminated manual dialing entirely. Every prospect in their database gets contacted automatically, followed up with at the right time, and routed to the recruitment team only when they are genuinely interested.',
      ],
      stats: [
        { value: '8+', label: 'Agents Successfully Hired' },
        { value: '4-Call', label: 'Automated Follow-up Sequences' },
        { value: '100%', label: 'Prospects Contacted (Zero Missed)' },
        { value: '$0', label: 'Manual Caller Costs' },
      ],
    },
    techStack: [
      { name: 'Voice AI', description: 'Natural-sounding AI caller trained on recruitment conversations and objection handling scripts' },
      { name: 'CRM Integration', description: 'Two-way sync with the brokerage CRM for real-time prospect tracking and status updates' },
      { name: 'Auto-Scheduling', description: 'Direct calendar integration to book interviews without human intervention' },
      { name: 'Smart Callback Engine', description: 'Automated timing optimization for follow-up calls based on prospect availability patterns' },
    ],
    testimonial: {
      quote: 'The AI handles the entire top of our recruitment funnel. We only talk to agents who are already interested and qualified. It completely changed how we recruit.',
      author: 'Brokerage Director',
      role: 'Texas Real Estate Brokerage',
    },
    relatedSlugs: [
      'ai-chatbot-property-management',
      'ai-calling-digital-agency-leads',
    ],
  },
  {
    slug: 'ai-chatbot-property-management',
    title: 'AI Chatbot Handles Tenant Communication for 120-Property Management Company',
    seoTitle: 'AI Chatbot for Property Management | 120 Properties, 24/7 Tenant Support',
    metaDescription: 'How a UK property management company uses an AI WhatsApp chatbot to handle tenant inquiries 24/7 across 120 properties, with human approval and CRM integration.',
    industry: 'Property Management',
    client: 'UK Property Management Company',
    location: 'United Kingdom',
    heroMetric: '120',
    heroMetricLabel: 'Properties Managed with AI Support',
    secondaryMetrics: [
      { value: '24/7', label: 'Tenant Response Coverage' },
      { value: '2', label: 'Person Team (Husband & Wife)' },
      { value: '0', label: 'Missed Tenant Inquiries' },
    ],
    problem: {
      headline: 'Two people. 120 properties. Thousands of tenant messages.',
      paragraphs: [
        'This husband-and-wife team built a successful property management business in the UK, growing to 120 properties. But success brought a problem they could not solve by working harder.',
        'Tenant inquiries were constant. Maintenance requests, lease questions, payment issues, move-in details. Every property had its own documents, its own rules, its own history. Answering each inquiry meant digging through files, checking details, and crafting accurate responses.',
        'They were spending entire days just responding to messages. Growth was impossible because every new property meant more communication overhead. They needed a way to handle tenant inquiries without hiring a full support team.',
      ],
      bullets: [
        'Tenant inquiries consumed entire workdays',
        'Each property had unique documents, rules, and history to reference',
        'Response times suffered as the portfolio grew',
        'No way to scale without hiring additional staff',
        'After-hours inquiries went unanswered until morning',
      ],
    },
    solution: {
      headline: 'An AI chatbot on WhatsApp that knows every property inside and out',
      paragraphs: [
        'We deployed an AI chatbot on WhatsApp Business that tenants can message anytime. The AI reads and understands every property\'s documents, tenant information, lease terms, and maintenance history.',
        'When a tenant asks a question, the AI pulls the relevant information, drafts an intelligent response, and presents it for human approval before sending. This gives the property managers full control while eliminating 90% of the research and drafting work.',
        'The system integrates with their CRM, so every conversation is logged, every maintenance request is tracked, and the team has a complete picture of all tenant interactions.',
      ],
      bullets: [
        'WhatsApp Business API integration for seamless tenant messaging',
        'Document parsing for lease agreements, property rules, and maintenance records',
        'Human-in-the-loop approval before any message is sent to tenants',
        'CRM integration for complete conversation tracking',
        'Property-specific knowledge base for accurate, contextual responses',
        'After-hours handling with automatic acknowledgment and queue management',
      ],
    },
    results: {
      headline: 'From drowning in messages to scaling with confidence',
      paragraphs: [
        'The AI chatbot now handles the bulk of tenant communication across all 120 properties. Tenants get fast, accurate responses. The property managers review and approve messages instead of researching and writing them from scratch.',
        'The team went from spending entire days on tenant communication to managing it in focused review sessions. They are now actively growing their portfolio, confident that communication will scale with them.',
      ],
      stats: [
        { value: '120', label: 'Properties Supported by AI' },
        { value: '24/7', label: 'Tenant Inquiry Coverage' },
        { value: '90%+', label: 'Reduction in Manual Response Work' },
        { value: '0', label: 'Additional Staff Needed' },
      ],
    },
    techStack: [
      { name: 'WhatsApp Business API', description: 'Tenant-facing messaging on the platform they already use daily' },
      { name: 'Document Parsing', description: 'AI reads and understands lease agreements, property docs, and maintenance records' },
      { name: 'CRM Integration', description: 'Every conversation logged and tracked for complete tenant relationship management' },
      { name: 'Human Approval Layer', description: 'All AI responses reviewed by the property managers before being sent to tenants' },
    ],
    testimonial: {
      quote: 'We went from drowning in tenant messages to actually having time to grow our business. The AI handles the research and drafting. We just review and approve. It feels like we hired a whole team.',
      author: 'Property Manager',
      role: 'UK Property Management Company',
    },
    relatedSlugs: [
      'ai-cold-calling-real-estate-recruitment',
      'ai-calling-digital-agency-leads',
    ],
  },
  {
    slug: 'ai-calling-digital-agency-leads',
    title: 'From 5,000 Uncontacted Leads to Zero Backlog: AI Calling for a Digital Agency',
    seoTitle: 'AI Lead Calling for Digital Agency | 5,000 Lead Backlog to Zero',
    metaDescription: 'How a digital marketing agency eliminated a 5,000-lead backlog using AI outbound calling. Every lead contacted within minutes. Zero leads lost to competitors.',
    industry: 'Digital Marketing',
    client: 'Digital Marketing Agency',
    location: 'USA',
    heroMetric: '5,000',
    heroMetricLabel: 'Lead Backlog Eliminated',
    secondaryMetrics: [
      { value: '<2 min', label: 'Lead Response Time' },
      { value: '80-90', label: 'New Leads Per Month' },
      { value: '0', label: 'Leads Left Uncontacted' },
    ],
    problem: {
      headline: '5,000+ leads sitting in a spreadsheet. Competitors winning the race.',
      paragraphs: [
        'This digital marketing agency was generating 80 to 90 new leads every month. The leads were coming in. The problem? Nobody was calling them fast enough.',
        'With a growing backlog of over 5,000 uncontacted leads, the agency was leaving money on the table every single day. Industry data shows that responding to a lead within 5 minutes makes you 100x more likely to connect. Their average response time? Days. Sometimes weeks.',
        'Competitors who responded faster were winning deals that should have been theirs. The agency needed a system that could contact every single lead within minutes of them raising their hand, not days later.',
      ],
      bullets: [
        '5,000+ leads sitting uncontacted in the CRM',
        'Average response time measured in days, not minutes',
        'Competitors reaching leads first and closing deals',
        'No capacity to manually call 80-90 new leads per month',
        'Revenue lost to slow follow-up on warm prospects',
      ],
    },
    solution: {
      headline: 'AI outbound calling that reaches every lead within minutes',
      paragraphs: [
        'We built an AI outbound calling system that connects directly to the agency\'s lead sources. The moment a new lead comes in, the AI picks up the phone and calls them.',
        'For the existing backlog, we configured an automated queue that systematically works through every uncontacted lead, prioritizing by recency and lead score. The AI qualifies interest, answers basic questions about the agency\'s services, and routes hot prospects to the sales team.',
        'The entire system syncs with their CRM in real time. Every call is logged, every lead is updated, and the sales team sees a clean pipeline of qualified opportunities instead of a messy spreadsheet of cold names.',
      ],
      bullets: [
        'Instant lead response: AI calls within minutes of form submission',
        'Automated backlog processing with smart prioritization',
        'Lead qualification and interest scoring during calls',
        'Real-time CRM sync for pipeline management',
        'Hot prospect routing to human sales team',
        'Systematic follow-up sequences for non-answers',
      ],
    },
    results: {
      headline: 'Zero backlog. Every lead contacted. More deals closed.',
      paragraphs: [
        'The 5,000-lead backlog was eliminated. Every single lead in their system was contacted, qualified, and properly categorized. New leads now get a call within minutes, not days.',
        'The agency reports faster conversions, more booked calls with qualified prospects, and zero leads falling through the cracks. The AI handles the volume so the sales team can focus on closing.',
      ],
      stats: [
        { value: '5,000→0', label: 'Lead Backlog Cleared' },
        { value: '<2 min', label: 'Average Response Time' },
        { value: '100%', label: 'Leads Contacted' },
        { value: '0', label: 'Leads Lost to Slow Response' },
      ],
    },
    techStack: [
      { name: 'Voice AI', description: 'AI outbound caller that sounds natural and handles real conversations about agency services' },
      { name: 'Automated Lead Queue', description: 'Smart prioritization engine that processes leads by recency, score, and source' },
      { name: 'CRM Sync', description: 'Real-time two-way sync with the agency CRM for pipeline visibility and lead tracking' },
      { name: 'Lead Routing', description: 'Automatic handoff of qualified, interested prospects to the human sales team' },
    ],
    testimonial: {
      quote: 'We had 5,000 leads just sitting there. Within weeks, the AI had called every single one. Now every new lead gets contacted in minutes. We are closing deals we would have lost before.',
      author: 'Agency Founder',
      role: 'Digital Marketing Agency',
    },
    relatedSlugs: [
      'ai-cold-calling-real-estate-recruitment',
      'ai-chatbot-property-management',
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
