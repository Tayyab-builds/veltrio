import usePointerGlow from '../../hooks/usePointerGlow';

export default function HeroProductPreview() {
  const previewRef = usePointerGlow();

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-xl lg:max-w-none">
      {/* Decorative Outer Glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 to-accent/30 blur-xl opacity-70 pointer-events-none animate-float" />

      {/* Main SaaS Window Container */}
      <div
        ref={previewRef}
        className="pointer-glow card-premium relative w-full overflow-hidden rounded-2xl border border-border-color bg-white shadow-lg"
      >
        {/* Top Window Bar */}
        <div className="flex items-center justify-between gap-2 border-b border-border-color bg-slate-50 px-3 py-3 sm:px-4">
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 block" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 block" />
            <span className="w-3 h-3 rounded-full bg-green-400 block" />
            <span className="text-xs font-mono text-muted-text ml-2 hidden sm:inline">
              app.veltrio.com/dashboard
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 text-[11px] text-muted-text sm:gap-2 sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Live Workspace</span>
          </div>
        </div>

        {/* Dashboard Mockup Body */}
        <div className="space-y-4 bg-slate-50/50 p-3 sm:space-y-5 sm:p-6">
          {/* Top Stat Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="card-premium bg-white p-3.5 rounded-xl border border-border-color shadow-sm">
              <span className="text-xs font-medium text-muted-text block">Monthly Revenue</span>
              <span className="text-lg font-bold text-dark mt-0.5 block">$124,500</span>
              <span className="text-[11px] text-emerald-600 font-semibold">↑ +18.4% vs last mo</span>
            </div>

            <div className="card-premium bg-white p-3.5 rounded-xl border border-border-color shadow-sm">
              <span className="text-xs font-medium text-muted-text block">Active Opportunities</span>
              <span className="text-lg font-bold text-dark mt-0.5 block">42 Deals</span>
              <span className="text-[11px] text-primary font-semibold">12 close this week</span>
            </div>

            <div className="card-premium col-span-2 sm:col-span-1 bg-white p-3.5 rounded-xl border border-border-color shadow-sm">
              <span className="text-xs font-medium text-muted-text block">Win Rate</span>
              <span className="text-lg font-bold text-dark mt-0.5 block">41.2%</span>
              <span className="text-[11px] text-emerald-600 font-semibold">↑ +3.1% benchmark</span>
            </div>
          </div>

          {/* Mini Interactive Pipeline Preview */}
          <div className="card-premium space-y-3 rounded-xl border border-border-color bg-white p-3 shadow-sm sm:p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-text">
                High-Value Opportunities
              </h3>
              <span className="text-xs text-primary font-medium hover:underline cursor-pointer">
                View Pipeline →
              </span>
            </div>

            {/* Row 1 */}
            <div className="card-premium flex flex-col gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2.5 transition-colors hover:border-primary/20 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 rounded-full bg-indigo-100 text-primary font-bold text-xs flex items-center justify-center">
                  AG
                </div>
                <div>
                  <div className="text-xs font-bold text-dark">Apex Global Enterprise</div>
                  <div className="text-[11px] text-muted-text">Owner: Alex T. • Negotiation</div>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-xs font-bold text-dark">$180,000</div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">90% prob</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="card-premium flex flex-col gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2.5 transition-colors hover:border-primary/20 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 rounded-full bg-violet-100 text-accent font-bold text-xs flex items-center justify-center">
                  PS
                </div>
                <div>
                  <div className="text-xs font-bold text-dark">PaySphere API Expansion</div>
                  <div className="text-[11px] text-muted-text">Owner: Elena R. • Proposal</div>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-xs font-bold text-dark">$95,000</div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-primary font-medium">75% prob</span>
              </div>
            </div>
          </div>

          {/* Activity / Performance Sparkline preview */}
          <div className="card-premium bg-white rounded-xl border border-border-color p-4 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-dark">Weekly Qualified Leads</div>
              <div className="text-sm font-bold text-primary mt-0.5">+34 Leads</div>
            </div>
            <div className="w-32 h-8">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30">
                <path
                  d="M0 25 Q 20 10, 40 20 T 80 5 T 100 2"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
