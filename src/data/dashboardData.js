// Mock data for the dashboard – replace with real API calls later

export const kpis = [
  { id: 1, title: 'Revenue', value: '$128,420', change: '+12.8%', trend: 'up', icon: 'DollarIcon' },
  { id: 2, title: 'New Leads', value: '186', change: '+18.4%', trend: 'up', icon: 'UserPlusIcon' },
  { id: 3, title: 'Active Deals', value: '42', change: '+9.2%', trend: 'up', icon: 'BriefcaseIcon' },
  { id: 4, title: 'Conversion Rate', value: '24.8%', change: '+4.6%', trend: 'up', icon: 'TrendingUpIcon' },
];

export const revenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  values: [42000, 48000, 45000, 56000, 61000, 68000, 74000, 82000],
  currentRevenue: '$128,420',
  change: '+12.8%',
};

export const pipelineStages = [
  {
    name: 'New Lead',
    count: 14,
    totalValue: '$142,000',
    deals: [
      { id: 1, name: 'Acme Enterprise CRM', client: 'Acme Corp', value: '$48,000', prob: '30%', owner: 'Sarah M.', date: 'Oct 12' },
      { id: 2, name: 'Global Cloud Migration', client: 'Strata Inc', value: '$94,000', prob: '25%', owner: 'David K.', date: 'Oct 15' },
    ],
  },
  {
    name: 'Qualified',
    count: 8,
    totalValue: '$210,000',
    deals: [
      { id: 3, name: 'Fintech Portal License', client: 'PaySphere', value: '$120,000', prob: '50%', owner: 'Elena R.', date: 'Oct 09' },
      { id: 4, name: 'Annual Service Expansion', client: 'Logix LLC', value: '$90,000', prob: '60%', owner: 'Sarah M.', date: 'Oct 18' },
    ],
  },
  {
    name: 'Proposal',
    count: 5,
    totalValue: '$185,000',
    deals: [
      { id: 5, name: 'Global Security Audit', client: 'CyberShield', value: '$185,000', prob: '75%', owner: 'Alex T.', date: 'Oct 06' },
    ],
  },
  {
    name: 'Negotiation',
    count: 4,
    totalValue: '$320,000',
    deals: [
      { id: 6, name: 'SaaS Platform Deployment', client: 'Omni Media', value: '$320,000', prob: '90%', owner: 'Elena R.', date: 'Oct 04' },
    ],
  },
  {
    name: 'Won',
    count: 22,
    totalValue: '$640,000',
    deals: [
      { id: 7, name: 'Regional Infrastructure', client: 'Metro Networks', value: '$240,000', prob: '100%', owner: 'David K.', date: 'Oct 01' },
      { id: 8, name: 'Enterprise License Q4', client: 'Apex Global', value: '$400,000', prob: '100%', owner: 'Alex T.', date: 'Sep 28' },
    ],
  },
];

export const recentActivities = [
  { id: 1, user: 'Sarah Ahmed', initials: 'SA', action: 'moved Acme Corp to Proposal', time: '2 minutes ago' },
  { id: 2, user: 'Ali Khan', initials: 'AK', action: 'created a new lead', time: '18 minutes ago' },
  { id: 3, user: 'John Smith', initials: 'JS', action: 'completed a follow-up task', time: '42 minutes ago' },
  { id: 4, user: 'Maria', initials: 'MA', action: 'closed a deal worth $8,400', time: '1 hour ago' },
];

export const upcomingTasks = [
  { id: 1, title: 'Follow up with Acme Corp', date: 'Today · 10:30 AM', priority: 'high', done: false },
  { id: 2, title: 'Send proposal to Bright Solutions', date: 'Today · 2:00 PM', priority: 'medium', done: false },
  { id: 3, title: 'Review new leads', date: 'Tomorrow · 9:00 AM', priority: 'low', done: false },
  { id: 4, title: 'Add client onboarding call', date: 'Tomorrow · 3:30 PM', priority: 'high', done: false },
];

export const topCustomers = [
  { id: 1, name: 'Acme Corporation', status: 'Active', deals: 8, revenue: '$24,800' },
  { id: 2, name: 'Bright Solutions', status: 'Active', deals: 5, revenue: '$18,400' },
  { id: 3, name: 'Nova Technologies', status: 'Active', deals: 4, revenue: '$15,900' },
];

export const notifications = [
  { id: 1, text: 'New lead assigned to you', time: '5 min ago', unread: true },
  { id: 2, text: 'Deal moved to Proposal', time: '24 min ago', unread: true },
  { id: 3, text: 'Task due tomorrow', time: '1 hour ago', unread: false },
];

export const quickActions = [
  { id: 1, label: 'Add Contact', icon: 'UserPlusIcon' },
  { id: 2, label: 'Create Lead', icon: 'UserPlusIcon' },
  { id: 3, label: 'Create Deal', icon: 'BriefcaseIcon' },
  { id: 4, label: 'Create Task', icon: 'CheckSquareIcon' },
];

export const user = {
  name: 'Tayyab',
  role: 'Admin',
  initials: 'TA',
};