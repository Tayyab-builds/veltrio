import { RenderIcon } from '../ui/icons';

export default function KpiCard({ kpi }) {
  return (
    <div className="card-premium bg-white rounded-xl border border-border-color p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-secondary-text">{kpi.title}</span>
        <span className="p-2.5 rounded-xl bg-soft-indigo text-primary">
          <RenderIcon name={kpi.icon} className="w-5 h-5" />
        </span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-[1.7rem] leading-none font-bold tracking-tight text-dark">{kpi.value}</div>
          <div className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${kpi.trend === 'up' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            {kpi.change}
          </div>
        </div>
      </div>
    </div>
  );
}
