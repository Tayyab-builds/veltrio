export const NAV_LINKS = [
  {
    name: 'Features',
    href: '#features',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Lead Capture & Tracking', desc: 'Centralize inbound opportunities', href: '#features' },
      { name: 'Visual Sales Pipeline', desc: 'Kanban tracking for deal stages', href: '#pipeline' },
      { name: 'Real-time Analytics', desc: 'Revenue forecasting and stats', href: '#analytics' },
      { name: 'Team Workspace', desc: 'Task delegation & activity logs', href: '#collaboration' },
    ]
  },
  {
    name: 'Solutions',
    href: '#solutions',
    hasDropdown: true,
    dropdownItems: [
      { name: 'For Sales Teams', desc: 'Close deals 35% faster', href: '#features' },
      { name: 'For B2B Agencies', desc: 'Manage client retentions', href: '#features' },
      { name: 'For Growing Startups', desc: 'Scale client relationships', href: '#features' },
    ]
  },
  { name: 'How It Works', href: '#how-it-works', hasDropdown: false },
  { name: 'Benefits', href: '#benefits', hasDropdown: false },
];

export const TRUST_METRICS = [
  { label: 'Active Leads Managed', value: '10K+' },
  { label: 'Platform Uptime SLA', value: '99.9%' },
  { label: 'Global Markets Ready', value: '50+' },
];

export const CLIENT_LOGOS = [
  { name: 'Apex Global', symbol: 'APEX' },
  { name: 'Nexus Dynamics', symbol: 'NEXUS' },
  { name: 'Quantum Flow', symbol: 'QUANTUM' },
  { name: 'Vanguard Systems', symbol: 'VANGUARD' },
  { name: 'Horizon Cloud', symbol: 'HORIZON' },
];

export const FEATURES_LIST = [
  {
    id: 'lead-mgmt',
    title: 'Lead Management',
    description: 'Capture, organize, qualify, and route incoming sales opportunities automatically without manual data entry.',
    icon: 'UserCheckIcon'
  },
  {
    id: 'client-mgmt',
    title: 'Client Management',
    description: 'Maintain a 360-degree view of client histories, interactions, contracts, and touchpoints in unified profiles.',
    icon: 'BuildingIcon'
  },
  {
    id: 'sales-pipeline',
    title: 'Sales Pipeline',
    description: 'Track deal stages from initial outreach to final signatures using an intuitive, drag-free visual board.',
    icon: 'KanbanIcon'
  },
  {
    id: 'tasks-followups',
    title: 'Tasks & Follow-ups',
    description: 'Ensure critical prospects never fall through the cracks with automated follow-up reminders and action items.',
    icon: 'CheckSquareIcon'
  },
  {
    id: 'team-management',
    title: 'Team Management',
    description: 'Coordinate assignments, balance rep workloads, and maintain transparency across sales representatives.',
    icon: 'UsersGroupIcon'
  },
  {
    id: 'analytics-reporting',
    title: 'Business Analytics',
    description: 'Analyze revenue growth trends, conversion rates, cycle duration, and team quotas with real-time reporting.',
    icon: 'BarChartIcon'
  }
];

export const PIPELINE_STAGES = [
  {
    name: 'New Lead',
    count: 14,
    totalValue: '$142,000',
    deals: [
      { id: 1, name: 'Acme Enterprise CRM', client: 'Acme Corp', value: '$48,000', prob: '30%', owner: 'Sarah M.', date: 'Oct 12' },
      { id: 2, name: 'Global Cloud Migration', client: 'Strata Inc', value: '$94,000', prob: '25%', owner: 'David K.', date: 'Oct 15' },
    ]
  },
  {
    name: 'Qualified',
    count: 8,
    totalValue: '$210,000',
    deals: [
      { id: 3, name: 'Fintech Portal License', client: 'PaySphere', value: '$120,000', prob: '50%', owner: 'Elena R.', date: 'Oct 09' },
      { id: 4, name: 'Annual Service Expansion', client: 'Logix LLC', value: '$90,000', prob: '60%', owner: 'Sarah M.', date: 'Oct 18' },
    ]
  },
  {
    name: 'Proposal',
    count: 5,
    totalValue: '$185,000',
    deals: [
      { id: 5, name: 'Global Security Audit', client: 'CyberShield', value: '$185,000', prob: '75%', owner: 'Alex T.', date: 'Oct 06' },
    ]
  },
  {
    name: 'Negotiation',
    count: 4,
    totalValue: '$320,000',
    deals: [
      { id: 6, name: 'SaaS Platform Deployment', client: 'Omni Media', value: '$320,000', prob: '90%', owner: 'Elena R.', date: 'Oct 04' },
    ]
  },
  {
    name: 'Won',
    count: 22,
    totalValue: '$640,000',
    deals: [
      { id: 7, name: 'Regional Infrastructure', client: 'Metro Networks', value: '$240,000', prob: '100%', owner: 'David K.', date: 'Oct 01' },
      { id: 8, name: 'Enterprise License Q4', client: 'Apex Global', value: '$400,000', prob: '100%', owner: 'Alex T.', date: 'Sep 28' },
    ]
  }
];

export const ANALYTICS_METRICS = [
  { label: 'Total Revenue (YTD)', value: '$1,842,500', growth: '+24.8%', positive: true },
  { label: 'Avg Deal Velocity', value: '18 Days', growth: '-3.2 Days', positive: true },
  { label: 'Win Conversion Rate', value: '38.4%', growth: '+4.1%', positive: true },
  { label: 'Active Pipeline Value', value: '$857,000', growth: '+12.5%', positive: true },
];

export const TEAM_COLLABORATION_ITEMS = [
  {
    id: 1,
    user: 'Sarah Miller',
    role: 'Senior Account Executive',
    action: 'updated contract stage to Proposal',
    target: 'Acme Enterprise Contract',
    time: '12m ago',
    avatar: 'SM'
  },
  {
    id: 2,
    user: 'Alex Turner',
    role: 'Sales Manager',
    action: 'assigned follow-up task to David K.',
    target: 'Schedule Tech Discovery call',
    time: '45m ago',
    avatar: 'AT'
  },
  {
    id: 3,
    user: 'Elena Rostova',
    role: 'Product Specialist',
    action: 'added meeting notes for',
    target: 'PaySphere Integration Call',
    time: '2h ago',
    avatar: 'ER'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Capture',
    subtitle: 'Consolidate Inbound Demand',
    description: 'Automatically pull leads from websites, webhooks, and forms into a central workspace with zero manual effort.'
  },
  {
    step: '02',
    title: 'Convert',
    subtitle: 'Streamline Sales Execution',
    description: 'Guide your reps with structured pipelines, task schedules, and automated follow-ups that close deals faster.'
  },
  {
    step: '03',
    title: 'Grow',
    subtitle: 'Scale Business Operations',
    description: 'Uncover bottlenecks, forecast quarterly revenue, and scale client relationships with data-backed decisions.'
  }
];

export const BENEFITS_ITEMS = [
  {
    title: 'One source of truth',
    description: 'Eliminate scattered spreadsheets. Keep leads, client activity history, proposals, and communication logs in a unified hub.',
    tag: 'Centralization'
  },
  {
    title: 'Less manual work',
    description: 'Automate tedious administrative follow-up tracking and status changes so your sales reps spend time selling.',
    tag: 'Automation'
  },
  {
    title: 'Better visibility',
    description: 'Gain executive-level clarity over individual rep performances, conversion bottlenecks, and monthly revenue flow.',
    tag: 'Transparency'
  },
  {
    title: 'Built to scale',
    description: 'Designed to adapt seamlessly as your team grows from 5 to 500+ reps with enterprise security and role permissions.',
    tag: 'Scalability'
  }
];