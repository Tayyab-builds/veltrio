import Logo from '../ui/Logo';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Sales Pipeline', href: '/#pipeline' },
      { label: 'Analytics', href: '/#analytics' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Integrations', href: '/integrations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Veltrio', href: '/about' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Book a Demo', href: '/book-demo' },
      { label: 'Log in', href: '/login' },
      { label: 'Sign up', href: '/signup' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Resources', href: '/resources' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Help Center', href: '/help' },
      { label: 'Blog', href: '/resources' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-16 text-sm text-slate-400">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="space-y-4 sm:col-span-2">
            <a href="/" className="inline-flex items-center gap-2" aria-label="Veltrio home">
              <Logo className="text-xl text-white" />
            </a>
            <p className="max-w-sm text-xs leading-relaxed text-slate-400">
              Modern B2B client and sales management platform designed for growing teams worldwide.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-white">{column.title}</div>
              <ul className="space-y-2 text-xs">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="nav-link transition-colors hover:text-white">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 text-xs text-slate-500 sm:flex-row">
          <div>&copy; 2026 Veltrio. All rights reserved.</div>
          <a href="/signup" className="nav-link font-medium text-slate-300 transition-colors hover:text-white">Get started</a>
        </div>
      </div>
    </footer>
  );
}
