export default function ProfileMenu() {
  const menuItems = [
    { label: 'Profile', href: '/settings' },
    { label: 'Account settings', href: '/settings' },
    { label: 'Help', href: '/help' },
    { label: 'Sign out', href: '/login' },
  ];

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-border-color rounded-xl shadow-lg py-2 z-50">
      {menuItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="block px-4 py-2 text-sm text-secondary-text hover:bg-slate-50 hover:text-primary transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
