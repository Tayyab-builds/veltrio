import { useEffect, useRef } from 'react';
import { SearchIcon, BellIcon } from '../ui/icons';
import NotificationPanel from './NotificationPanel';
import ProfileMenu from './ProfileMenu';
import { user } from '../../data/dashboardData';

export default function TopHeader({ onMenuClick, sidebarCollapsed, notificationOpen, setNotificationOpen, profileOpen, setProfileOpen }) {
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setNotificationOpen(false);
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [setNotificationOpen, setProfileOpen]);

  return (
    <header className="bg-white/75 backdrop-blur-xl border-b border-white/70 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 sticky top-0 z-20 shadow-[0_1px_0_rgba(148,163,184,0.14)]">
      <button
        onClick={onMenuClick}
        className="icon-button text-secondary-text hover:text-primary active:bg-soft-indigo"
        aria-label="Toggle sidebar"
        title="Toggle sidebar"
      >
        <svg className={`w-6 h-6 transition-transform duration-200 ${sidebarCollapsed ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto">
        {/* Search */}
        <div className="hidden md:flex items-center h-10 bg-white/70 border border-border-color rounded-lg px-3 text-sm text-muted-text shadow-sm focus-within:border-primary/45 focus-within:ring-2 focus-within:ring-primary/10">
          <SearchIcon className="w-4 h-4 mr-2" />
          <input
            type="search"
            placeholder="Search anything..."
            className="bg-transparent outline-none w-40 lg:w-64 focus:ring-0"
          />
          <kbd className="ml-2 px-2 py-0.5 bg-white border border-border-color rounded text-xs font-mono text-muted-text">⌘K</kbd>
        </div>

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="icon-button text-secondary-text hover:text-primary relative"
            aria-label="Notifications"
          >
            <BellIcon className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          {notificationOpen && <NotificationPanel />}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 p-1 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold">
              {user.initials}
            </div>
            <span className="hidden sm:block text-sm font-medium text-dark">{user.name}</span>
          </button>
          {profileOpen && <ProfileMenu />}
        </div>
      </div>
    </header>
  );
}
