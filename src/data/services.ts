// Four service pillars, condensed from the client's "SEO-Optimised Website Content" pack
// (AM_Growth_Partners_SEO_Service_Pages.pdf). Ids double as page anchors (/#admission-conversion).

export type ServiceId = 'brand-strategy' | 'demand-generation' | 'admission-conversion' | 'student-retention';

export interface ServiceOffering {
  title: string;
  summary: string;
}

export interface ServiceStep {
  name: string;
  description: string;
}

export interface Service {
  id: ServiceId;
  number: string;
  title: string;
  tabLabel: string;
  cardSummary: string;
  keyAreas: string[];
  heading: string;
  tagline: string;
  intro: string[];
  challengesTitle: string;
  challenges: string[];
  offerings: ServiceOffering[];
  expectations: string[];
  approachTitle: string;
  approach: ServiceStep[];
  note?: string;
  ctaLabel: string;
  related: { id: ServiceId; text: string };
  theme: {
    accent: string;
    iconBg: string;
    tabActive: string;
    chip: string;
    step: string;
  };
}

export const services: Service[] = [
  {
    id: 'brand-strategy',
    number: '01',
    title: 'Positioning & Brand Strategy',
    tabLabel: 'Brand Strategy',
    cardSummary:
      'Give parents a clear, compelling reason to choose your institution through differentiated positioning, stronger communication and brand strategy.',
    keyAreas: ['Brand audits', 'Market research', 'Parent insights', 'Messaging strategy'],
    heading: 'School Branding & Positioning Strategy',
    tagline: 'Give Parents a Clear Reason to Choose Your Institution.',
    intro: [
      'Every school has something valuable to offer. The challenge is making that value clear, relevant and meaningful to the families it hopes to attract. Many institutions communicate similar promises, making it difficult for parents to understand what truly sets one apart.',
      'We help schools, colleges and coaching institutes identify their distinctive strengths, understand their target audience and build a clear brand positioning strategy that connects institutional identity, parent expectations and local market insight.',
    ],
    challengesTitle: 'A Strong Institution Deserves a Stronger Market Position.',
    challenges: [
      'Parents unable to distinguish the institution from nearby competitors.',
      'Marketing that emphasises facilities rather than educational value.',
      'Inconsistent messaging across website, social media, advertising and admissions teams.',
      'Limited understanding of what existing parents value most.',
      'A strong educational philosophy not translated into parent-facing communication.',
      'Institutional strengths not demonstrated effectively during campus visits.',
    ],
    offerings: [
      {
        title: 'Institutional Brand & Positioning Audit',
        summary: 'We review your website, social media, admissions materials and campus experience to find the gap between how you want to be perceived and what families understand.',
      },
      {
        title: 'Competitor & Catchment Market Analysis',
        summary: 'We assess competing institutions, their positioning and visibility, and your catchment and parent segments to find real opportunities to differentiate.',
      },
      {
        title: 'Parent Perception & Decision-Making Research',
        summary: 'Structured parent feedback and conversations uncover what drives school selection, satisfaction and recommendation.',
      },
      {
        title: 'Institutional Value Proposition Development',
        summary: 'We articulate why families should choose you: educational philosophy, teaching methodology, academic strengths, values and culture.',
      },
      {
        title: 'Brand Communication Strategy',
        summary: 'A consistent messaging direction for your website, brochures, social media, advertisements, admission presentations and parent interactions.',
      },
      {
        title: 'Leadership & Admissions Team Brand Alignment',
        summary: 'We help leadership and counsellors communicate the institution’s actual strengths accurately and consistently.',
      },
    ],
    expectations: [
      'Institutional brand and communication audit',
      'Competitor positioning assessment',
      'Parent perception findings',
      'Target audience and catchment segmentation',
      'Institutional positioning statement',
      'Core messaging and communication guidelines',
      'Admissions presentation narrative',
      'Website and marketing content recommendations',
      'Brand implementation roadmap',
    ],
    approachTitle: 'Discover. Differentiate. Communicate.',
    approach: [
      { name: 'Discover', description: 'Understand the institution, its philosophy, parent experience and competitive environment.' },
      { name: 'Differentiate', description: 'Identify meaningful strengths and build positioning grounded in evidence, not generic claims.' },
      { name: 'Communicate', description: 'Translate that positioning into messaging and experiences families can understand and trust.' },
    ],
    ctaLabel: 'Request a Brand & Growth Assessment',
    related: { id: 'demand-generation', text: 'Turn clear positioning into consistent admissions marketing' },
    theme: {
      accent: 'text-indigo-700',
      iconBg: 'bg-indigo-100 text-indigo-700',
      tabActive: 'bg-indigo-600 text-white border-indigo-600',
      chip: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      step: 'bg-indigo-600',
    },
  },
  {
    id: 'demand-generation',
    number: '02',
    title: 'Demand Generation',
    tabLabel: 'Demand Generation',
    cardSummary:
      'Reach prospective families and generate relevant admissions enquiries through targeted digital marketing, local visibility and data-led campaigns.',
    keyAreas: ['Meta Ads', 'Google Ads', 'Local SEO', 'Content strategy'],
    heading: 'School Admissions Marketing & Demand Generation',
    tagline: 'Reach the Right Parents. Create Meaningful Enquiries. Build Sustainable Demand.',
    intro: [
      'More enquiries do not automatically mean more admissions. Effective education marketing reaches relevant families, communicates genuine value and generates interest that progresses into meaningful admissions conversations.',
      'We build structured, measurable demand generation systems that combine marketing strategy, digital advertising, local visibility, content and enquiry tracking — and we look at what happens after a parent enquires, because marketing should be judged alongside admission outcomes.',
    ],
    challengesTitle: 'Is Your Marketing Generating Enquiries but Not Admissions?',
    challenges: [
      'High volumes of enquiries with low admission intent.',
      'Campaigns reaching people outside the practical catchment.',
      'Inconsistent messaging across advertisements and landing pages.',
      'Limited visibility on which channels produce actual admissions.',
      'Marketing spend without clear performance reporting.',
      'Weak local search visibility.',
      'Poor coordination between marketing and admissions teams.',
    ],
    offerings: [
      {
        title: 'Admissions Marketing Strategy',
        summary: 'Marketing plans built around admission targets, audience, catchment, seasonal demand and competition, so budget goes where it matters.',
      },
      {
        title: 'Meta Ads for Schools & Educational Institutions',
        summary: 'Facebook and Instagram campaigns with audience targeting, lead forms, creative testing, budget monitoring and lead-quality analysis.',
      },
      {
        title: 'Google Ads & Search-Based Enquiry Generation',
        summary: 'Reach parents and students actively searching for schools, courses, coaching programmes and admission information.',
      },
      {
        title: 'Local SEO & Google Business Profile Optimisation',
        summary: 'Stronger Google Business Profile information, location-based content, review processes and local search relevance.',
      },
      {
        title: 'Website & Landing Page Conversion Optimisation',
        summary: 'We assess messaging, mobile usability, enquiry forms, calls to action and the journey from advertisement to enquiry.',
      },
      {
        title: 'Parent-Focused Content & Communication',
        summary: 'Content that communicates your educational philosophy, teaching practices, student experiences and genuine strengths.',
      },
      {
        title: 'Campaign Tracking & Lead Quality Analysis',
        summary: 'Track cost per enquiry, qualified enquiry rate, campus visits and cost per admission wherever reliable data is available.',
      },
    ],
    expectations: [
      'Admissions marketing plan',
      'Audience and catchment targeting strategy',
      'Campaign setup and ongoing optimisation',
      'Advertising creative and content direction',
      'Landing page and enquiry-form recommendations',
      'Local search visibility improvements',
      'Lead source tracking structure',
      'Campaign performance dashboards',
      'Regular review and optimisation recommendations',
    ],
    approachTitle: 'Target. Attract. Measure. Improve.',
    approach: [
      { name: 'Target', description: 'Identify relevant parent and student segments by programme suitability, location and demand.' },
      { name: 'Attract', description: 'Communicate your value through the right channels and campaigns.' },
      { name: 'Measure', description: 'Track enquiries and their progression through the admission process.' },
      { name: 'Improve', description: 'Refine campaigns using lead quality, conversion outcomes and cost-efficiency data.' },
    ],
    note: 'Advertising spend, external media production and third-party software charges are defined separately in the commercial agreement where applicable.',
    ctaLabel: 'Discuss Your Admissions Marketing Strategy',
    related: { id: 'admission-conversion', text: 'Improve your school’s enquiry-to-admission conversion' },
    theme: {
      accent: 'text-purple-700',
      iconBg: 'bg-purple-100 text-purple-700',
      tabActive: 'bg-purple-600 text-white border-purple-600',
      chip: 'bg-purple-50 text-purple-800 border-purple-200',
      step: 'bg-purple-600',
    },
  },
  {
    id: 'admission-conversion',
    number: '03',
    title: 'Admission Conversion',
    tabLabel: 'Admission Conversion',
    cardSummary:
      'Turn more enquiries into confirmed enrolments with organised follow-ups, effective counselling, CRM workflows and improved campus visits.',
    keyAreas: ['Admissions audits', 'CRM', 'Counsellor training', 'Conversion tracking'],
    heading: 'School Admissions Consulting & Conversion Optimisation',
    tagline: 'Every Enquiry Is an Opportunity. What Happens Next Determines the Outcome.',
    intro: [
      'Between a parent’s first enquiry and a student’s enrolment, response time, counselling quality, communication, campus experience and follow-up consistency all influence the final decision. Without a structured system, even genuinely interested families are lost.',
      'We improve the enquiry-to-enrolment process through admissions audits, CRM systems, counsellor training, structured follow-ups and performance management — so every enquiry is tracked, every parent receives professional communication and leadership can see conversion clearly.',
    ],
    challengesTitle: 'Where Are You Losing Potential Admissions?',
    challenges: [
      'Enquiries not being contacted promptly.',
      'Follow-ups depending on individual staff rather than a consistent process.',
      'Limited discovery questions before recommending programmes.',
      'Parent objections handled inconsistently.',
      'Campus visit bookings not turning into completed visits.',
      'Interested families not receiving timely information after counselling.',
      'Old enquiries left inactive without a clear next action.',
      'Management unable to see which stages have the largest drop-offs.',
    ],
    offerings: [
      {
        title: 'Admissions Funnel Audit & Conversion Analysis',
        summary: 'We map the journey from enquiry to enrolment: lead sources, response times, counselling outcomes, visits and final decisions.',
      },
      {
        title: 'Admissions CRM Setup & Process Integration',
        summary: 'Lead allocation, enquiry stages, follow-up schedules, communication logs, reporting fields and escalation, on the right CRM for you.',
      },
      {
        title: 'Admission Counsellor & Telecaller Training',
        summary: 'Practical training in first calls, discovery questions, presenting strengths, handling concerns, scheduling visits and CRM discipline.',
      },
      {
        title: 'Structured Follow-Up & Lead Management',
        summary: 'Stage-based follow-up schedules, reminders, lead prioritisation, dormant-enquiry reviews and clear ownership of every case.',
      },
      {
        title: 'Campus Visit & Parent Experience Optimisation',
        summary: 'From appointment confirmation and reception to counselling, campus presentation and post-visit follow-up.',
      },
      {
        title: 'Admissions Team Performance & Accountability',
        summary: 'Practical indicators for counsellors and managers: response time, contact rate, visit attendance, conversion and pending follow-ups.',
      },
      {
        title: 'Admission Forecasting & Leadership Dashboards',
        summary: 'Clear reporting on enquiries, qualified leads, visits, confirmed admissions, source-wise conversion and enrolment targets.',
      },
    ],
    expectations: [
      'Admissions process audit',
      'Enquiry-stage definitions and workflow mapping',
      'CRM setup and usage guidelines',
      'Counsellor call frameworks and communication templates',
      'Follow-up standard operating procedures',
      'Campus visit process guidelines',
      'Team training and role-play sessions',
      'Daily and weekly performance reporting',
      'Conversion analysis and improvement plans',
      'Admissions management review framework',
    ],
    approachTitle: 'Audit. Structure. Train. Track. Optimise.',
    approach: [
      { name: 'Audit', description: 'Understand the current admissions process and identify measurable gaps.' },
      { name: 'Structure', description: 'Define responsibilities, enquiry stages, CRM workflows and follow-up systems.' },
      { name: 'Train', description: 'Equip the team to communicate with parents effectively and consistently.' },
      { name: 'Track', description: 'Monitor operational indicators and admission outcomes.' },
      { name: 'Optimise', description: 'Use real performance data and parent feedback to keep improving.' },
    ],
    ctaLabel: 'Request an Admissions Conversion Assessment',
    related: { id: 'student-retention', text: 'Sustainable growth also depends on the students who stay' },
    theme: {
      accent: 'text-brand-700',
      iconBg: 'bg-blue-100 text-brand-700',
      tabActive: 'bg-brand-600 text-white border-brand-600',
      chip: 'bg-blue-50 text-brand-800 border-blue-200',
      step: 'bg-brand-600',
    },
  },
  {
    id: 'student-retention',
    number: '04',
    title: 'Retention & Parent Experience',
    tabLabel: 'Retention',
    cardSummary:
      'Strengthen parent satisfaction, understand student withdrawals and build systems that support long-term retention, trust and school growth.',
    keyAreas: ['Parent feedback', 'Retention analysis', 'Communication', 'Net growth'],
    heading: 'Student Retention & Parent Experience Consulting',
    tagline: 'Sustainable School Growth Is Not Just About New Admissions. It Is Also About the Students Who Stay.',
    intro: [
      'Schools invest heavily in attracting new families, yet sustainable growth also depends on retaining existing students and delivering an experience families continue to value. When withdrawals aren’t examined systematically, new admissions can mask deeper challenges.',
      'We help institutions strengthen parent experience, understand why students leave and build structured retention systems — connecting parent feedback, withdrawal analysis, school operations and management reporting.',
    ],
    challengesTitle: 'Are Student Withdrawals Affecting Your School’s Growth?',
    challenges: [
      'Parent concerns resolved one by one without spotting recurring issues.',
      'Limited understanding of why students transfer to other schools.',
      'Parent feedback collected without consistent action tracking.',
      'Academic or communication concerns reaching management too late.',
      'Weak visibility into retention across classes and student groups.',
      'Leaders focusing on gross admissions without reviewing net enrolment growth.',
      'Families feeling their concerns are not acknowledged or addressed.',
    ],
    offerings: [
      {
        title: 'Student Retention & Withdrawal Analysis',
        summary: 'Opening and closing strength, new admissions, withdrawals, class-wise retention, withdrawal reasons and net enrolment growth.',
      },
      {
        title: 'Parent Satisfaction & Feedback Systems',
        summary: 'Structured feedback on academics, communication, well-being, safety, transport, environment and overall satisfaction.',
      },
      {
        title: 'Parent Communication Improvement',
        summary: 'Clearer communication responsibilities, escalation pathways and response processes for updates, concerns and enquiries.',
      },
      {
        title: 'Parent Concern & Complaint Pattern Analysis',
        summary: 'Classify concerns, monitor recurring themes and assign responsibility, track actions and review outcomes.',
      },
      {
        title: 'Student Experience & Belonging Reviews',
        summary: 'Feedback on student comfort, engagement, learning environment and sense of belonging, structured with school leadership.',
      },
      {
        title: 'Academic Experience Feedback & Improvement Coordination',
        summary: 'Organise academic-experience feedback and surface concerns for the principal and academic coordinators to review.',
      },
      {
        title: 'Retention Dashboards & Net Growth Monitoring',
        summary: 'Track retention and withdrawal rates, net change in strength, class-wise patterns, satisfaction trends and action closure.',
      },
    ],
    expectations: [
      'Student retention assessment',
      'Historical enrolment and withdrawal analysis',
      'Class-wise student movement reporting',
      'Parent feedback survey framework',
      'Parent communication review',
      'Complaint categorisation and tracking process',
      'Retention performance dashboard',
      'Management action tracker',
      'Student experience improvement priorities',
      'Periodic retention review framework',
    ],
    approachTitle: 'Listen. Understand. Improve. Retain.',
    approach: [
      { name: 'Listen', description: 'Collect relevant, confidential feedback from parents and institutional teams.' },
      { name: 'Understand', description: 'Examine recurring concerns, withdrawal trends and areas of dissatisfaction.' },
      { name: 'Improve', description: 'Support leadership in developing clear, accountable improvement plans.' },
      { name: 'Retain', description: 'Monitor student continuation, parent experience and net enrolment over time.' },
    ],
    note: 'Safeguarding, behavioural and student well-being matters remain under suitably qualified school professionals; our contribution focuses on management systems, communication, analysis and accountability.',
    ctaLabel: 'Discuss Your School’s Retention Strategy',
    related: { id: 'brand-strategy', text: 'Let genuine parent experience inform credible positioning' },
    theme: {
      accent: 'text-emerald-700',
      iconBg: 'bg-emerald-100 text-emerald-700',
      tabActive: 'bg-emerald-700 text-white border-emerald-700',
      chip: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      step: 'bg-emerald-700',
    },
  },
];

export const serviceById = (id: ServiceId) => services.find((service) => service.id === id)!;
