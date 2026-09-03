import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
          
          {/* Brand Column */}
          <div className="space-y-4 sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <Logo className="text-white text-xl" />
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Modern B2B client and sales management platform designed for growing teams worldwide.
            </p>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Product</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="nav-link hover:text-white transition-colors">Features</a></li>
              <li><a href="/pipeline" className="nav-link hover:text-white transition-colors">Sales Pipeline</a></li>
              <li><a href="/analytics" className="nav-link hover:text-white transition-colors">Analytics</a></li>
              <li><a href="/book-demo" className="nav-link hover:text-white transition-colors">Book a Demo</a></li>
            </ul>
          </div>

          {/* Workspace links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Workspace</div>
            <ul className="space-y-2 text-xs">
              <li><a href="/login" className="nav-link hover:text-white transition-colors">Log in</a></li>
              <li><a href="/signup" className="nav-link hover:text-white transition-colors">Sign up</a></li>
              <li><a href="/settings" className="nav-link hover:text-white transition-colors">Settings</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Veltrio. All rights reserved.
          </div>
          <a href="/signup" className="nav-link font-medium text-slate-300 hover:text-white transition-colors">Get started</a>
        </div>

      </div>
    </footer>
  );
}
