const Icon = ({ children, className = 'w-5 h-5', viewBox = '0 0 24 24' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox={viewBox} aria-hidden="true">
    {children}
  </svg>
);

// Existing icons (from landing page)
export const UserCheckIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM5 21a7 7 0 0114 0M16 12l2 2 4-4" /></Icon>;
export const BuildingIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 7h1m4 0h1M9 11h1m4 0h1M10 21v-5h4v5" /></Icon>;
export const KanbanIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h16v14H4zM9 5v14M15 5v14M6 8h1m4 0h1m4 0h1" /></Icon>;
export const CheckSquareIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></Icon>;
export const UsersGroupIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87M7 20H2v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 00-6 6h12a6 6 0 00-6-6zm6-10a3 3 0 010 6M6 4a3 3 0 000 6" /></Icon>;
export const BarChartIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 20V10m6 10V4m6 16v-7m6 7H2" /></Icon>;

// Navigation and UI icons
export const ChevronDownIcon = ({ className = 'w-4 h-4' }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" /></Icon>;
export const ArrowRightIcon = ({ className = 'w-4 h-4' }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6-6l6 6-6 6" /></Icon>;
export const CheckIcon = ({ className = 'w-4 h-4' }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></Icon>;
export const MenuIcon = ({ className = 'w-6 h-6' }) => <Icon className={className}><path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></Icon>;
export const CloseIcon = ({ className = 'w-6 h-6' }) => <Icon className={className}><path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" /></Icon>;

// Dashboard-specific icons
export const DashboardIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" /></Icon>;
export const ContactsIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></Icon>;
export const LeadsIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></Icon>;
export const DealsIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>;
export const PipelineIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18M7 14l3-3 3 3 5-6" /></Icon>;
export const TasksIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></Icon>;
export const AnalyticsIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></Icon>;
export const ReportsIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></Icon>;
export const TeamIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-1.43 7.75" /></Icon>;
export const SettingsIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></Icon>;
export const SearchIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>;
export const BellIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></Icon>;
export const PlusIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></Icon>;
export const DollarIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>;
export const TrendingUpIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></Icon>;
export const UserPlusIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></Icon>;
export const BriefcaseIcon = ({ className }) => <Icon className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></Icon>;

// Map all icons for RenderIcon
const icons = {
  UserCheckIcon,
  BuildingIcon,
  KanbanIcon,
  CheckSquareIcon,
  UsersGroupIcon,
  BarChartIcon,
  DashboardIcon,
  ContactsIcon,
  LeadsIcon,
  DealsIcon,
  PipelineIcon,
  TasksIcon,
  AnalyticsIcon,
  ReportsIcon,
  TeamIcon,
  SettingsIcon,
  SearchIcon,
  BellIcon,
  PlusIcon,
  DollarIcon,
  TrendingUpIcon,
  UserPlusIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  CheckIcon,
  MenuIcon,
  CloseIcon,
};

export function RenderIcon({ name, className }) {
  const SelectedIcon = icons[name];
  return SelectedIcon ? <SelectedIcon className={className} /> : null;
}