import useReveal from '../../hooks/useReveal';

export default function ProductOverview() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="solutions" className="py-20 bg-main-bg">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-dark">
            Everything your sales team needs,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              in one place.
            </span>
          </h2>
          <p className="text-base text-secondary-text">
            Consolidate your entire sales operation into a single cohesive interface designed for speed, clarity, and performance.
          </p>
        </div>

        {/* Large Product Interface Visual Block */}
        <div className="card-premium relative overflow-hidden rounded-2xl border border-border-color bg-white shadow-lg">
          {/* Dashboard Header Bar */}
          <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center font-bold text-xs">V</div>
              <span className="text-sm font-semibold tracking-wide">Veltrio Workspace</span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] bg-slate-800 text-slate-300 rounded-md">
                Acme Sales Org
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="hidden sm:inline">Search deals, clients... (⌘K)</span>
              <div className="w-7 h-7 rounded-full bg-slate-700 text-xs font-bold flex items-center justify-center">JD</div>
            </div>
          </div>

          {/* SaaS Interface Body Grid */}
          <div className="grid grid-cols-12 min-h-[420px]">
            {/* Sidebar Navigation */}
            <div className="hidden md:block col-span-3 lg:col-span-2 bg-slate-50 border-r border-border-color p-3 space-y-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-text px-2">Main Menu</div>
              <div className="space-y-1">
                <a
                  href="/dashboard"
                  className="w-full text-left px-2.5 py-1.5 rounded-lg bg-soft-indigo text-primary font-semibold text-xs flex items-center justify-between"
                >
                  <span>Dashboard</span>
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </a>
                <a
                  href="/leads"
                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-secondary-text hover:bg-slate-100 text-xs font-medium transition-colors"
                >
                  Leads &amp; Prospects
                </a>
                <a
                  href="/pipeline"
                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-secondary-text hover:bg-slate-100 text-xs font-medium transition-colors"
                >
                  Deals Pipeline
                </a>
                <a
                  href="/tasks"
                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-secondary-text hover:bg-slate-100 text-xs font-medium transition-colors"
                >
                  Tasks &amp; Follow-ups
                </a>
                <a
                  href="/analytics"
                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-secondary-text hover:bg-slate-100 text-xs font-medium transition-colors"
                >
                  Analytics &amp; Reports
                </a>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-span-12 md:col-span-9 lg:col-span-10 p-4 sm:p-6 space-y-6">
              
              {/* Content Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-color pb-4">
                <div>
                  <h3 className="text-lg font-bold text-dark">Executive Overview</h3>
                  <p className="text-xs text-muted-text">Real-time performance metrics across all active sales reps.</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/reports"
                    className="btn-premium px-3 py-1.5 bg-slate-100 text-xs font-semibold text-dark rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    Export Report
                  </a>
                  <a
                    href="/deals"
                    className="btn-premium px-3 py-1.5 bg-primary text-xs font-semibold text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    + Add Deal
                  </a>
                </div>
              </div>

              {/* Data Table Mockup */}
              <div className="overflow-x-auto border border-border-color rounded-xl">
                <table className="w-full min-w-[620px] text-left border-collapse text-xs" aria-label="Illustrative active sales deals">
                  <thead>
                    <tr className="bg-slate-50 border-b border-border-color text-muted-text font-semibold">
                      <th className="p-3">Deal Name</th>
                      <th className="p-3">Client Company</th>
                      <th className="p-3">Value</th>
                      <th className="p-3">Stage</th>
                      <th className="p-3">Assigned Owner</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color">
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-semibold text-dark">Enterprise Platform License</td>
                      <td className="p-3 text-secondary-text">GlobalTech Corp</td>
                      <td className="p-3 font-bold text-dark">$145,000</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-primary text-[10px] font-semibold">
                          Proposal Sent
                        </span>
                      </td>
                      <td className="p-3 text-secondary-text">Sarah Miller</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-semibold text-dark">Cloud Migration SLA</td>
                      <td className="p-3 text-secondary-text">Nexus Systems</td>
                      <td className="p-3 font-bold text-dark">$88,000</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-semibold">
                          Negotiation
                        </span>
                      </td>
                      <td className="p-3 text-secondary-text">Alex Turner</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-semibold text-dark">Annual API Retainer</td>
                      <td className="p-3 text-secondary-text">Fintech Direct</td>
                      <td className="p-3 font-bold text-dark">$210,000</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                          Closed Won
                        </span>
                      </td>
                      <td className="p-3 text-secondary-text">Elena Rostova</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
