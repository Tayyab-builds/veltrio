import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';

export default function DashboardLayout({ children }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const closeMobileSidebar = () => setMobileSidebarOpen(false);
  const toggleSidebar = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      setSidebarCollapsed((collapsed) => !collapsed);
    } else {
      setMobileSidebarOpen((open) => !open);
    }
  };

  useEffect(() => {
    if (!mobileSidebarOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileSidebarOpen]);

  return (
    <div className="crm-shell min-h-screen bg-main-bg flex">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        collapsed={sidebarCollapsed}
        onClose={closeMobileSidebar}
      />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopHeader
          onMenuClick={toggleSidebar}
          sidebarCollapsed={sidebarCollapsed}
          notificationOpen={notificationOpen}
          setNotificationOpen={setNotificationOpen}
          profileOpen={profileOpen}
          setProfileOpen={setProfileOpen}
        />
        <main className="flex-1 min-w-0 px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 space-y-6">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}
    </div>
  );
}
