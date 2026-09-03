import { useEffect } from 'react';
import Logo from '../ui/Logo';
import { RenderIcon } from '../ui/icons';
import { user } from '../../data/dashboardData';

const navSections = [
  {
    title: 'Main',
    items: [
      { name: 'Dashboard', icon: 'DashboardIcon', path: '/dashboard' },
      { name: 'Contacts', icon: 'ContactsIcon', path: '/contacts' },
      { name: 'Leads', icon: 'LeadsIcon', path: '/leads' },
      { name: 'Deals', icon: 'DealsIcon', path: '/deals' },
      { name: 'Pipeline', icon: 'PipelineIcon', path: '/pipeline' },
      { name: 'Tasks', icon: 'TasksIcon', path: '/tasks' },
    ],
  },
  {
    title: 'Insights',
    items: [
      { name: 'Analytics', icon: 'AnalyticsIcon', path: '/analytics' },
      { name: 'Reports', icon: 'ReportsIcon', path: '/reports' },
    ],
  },
  {
    title: 'Workspace',
    items: [
      { name: 'Team', icon: 'TeamIcon', path: '/team' },
      { name: 'Settings', icon: 'SettingsIcon', path: '/settings' },
    ],
  },
];

export default function Sidebar({ mobileOpen, collapsed, onClose }) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && mobileOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [mobileOpen, onClose]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside id="dashboard-sidebar" className={`dashboard-sidebar hidden lg:flex flex-col overflow-hidden bg-white/80 backdrop-blur-sm border-r border-border-color flex-shrink-0 transition-[width] duration-300 ease-out ${collapsed ? 'w-[4.5rem]' : 'w-60'}`}>
        <SidebarContent currentPath={currentPath} onClose={onClose} collapsed={collapsed} />
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <aside className="sidebar-drawer fixed inset-y-0 left-0 z-40 w-72 max-w-[85vw] bg-white border-r border-border-color shadow-2xl lg:hidden">
          <SidebarContent currentPath={currentPath} onClose={onClose} isMobile />
        </aside>
      )}
    </>
  );
}

function SidebarContent({ currentPath, onClose, isMobile = false, collapsed = false }) {
  return (
    <div className="flex flex-col h-full">
      <div className={`border-b border-border-color flex items-center ${collapsed ? 'justify-center p-4' : 'justify-between p-5'}`}>
        <Logo className="text-xl text-primary" compact={collapsed} />
        {isMobile && (
          <button
            onClick={onClose}
            className="p-1 rounded-md text-muted-text hover:text-dark focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <nav className={`flex-1 overflow-y-auto ${collapsed ? 'p-2 space-y-5' : 'p-4 space-y-6'}`} aria-label="Dashboard navigation">
        {navSections.map((section) => (
          <div key={section.title}>
            <h3 className={`${collapsed ? 'sr-only' : 'px-3'} text-xs font-semibold uppercase tracking-wider text-muted-text mb-2`}>
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    title={collapsed ? item.name : undefined}
                    aria-label={collapsed ? item.name : undefined}
                    className={`flex items-center rounded-lg text-sm font-medium transition-all ${collapsed ? 'justify-center px-2 py-2.5' : 'gap-3 px-3 py-2.5'} ${
                      currentPath === item.path
                        ? 'bg-soft-indigo text-primary shadow-[inset_3px_0_0_#4F46E5]'
                        : 'text-secondary-text hover:bg-slate-50 hover:text-primary hover:translate-x-0.5'
                    }`}
                  >
                    <RenderIcon name={item.icon} className="w-5 h-5" />
                    {!collapsed && <span>{item.name}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className={`border-t border-border-color ${collapsed ? 'p-3' : 'p-4'}`}>
        <a href="/settings" title={collapsed ? `${user.name} — Settings` : 'Open settings'} aria-label={collapsed ? `${user.name} — Settings` : undefined} className={`rounded-lg text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${collapsed ? 'flex justify-center p-1' : 'flex items-center gap-3 p-1'}`}>
          <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
            {user.initials}
          </div>
          {!collapsed && <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-dark truncate">{user.name}</p>
            <p className="text-xs text-muted-text truncate">{user.role}</p>
          </div>}
        </a>
      </div>
    </div>
  );
}
