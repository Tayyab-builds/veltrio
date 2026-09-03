import { pipelineStages } from '../../data/dashboardData';

export default function SalesPipeline() {
  return (
    <div className="card-premium bg-white rounded-xl border border-border-color p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-dark">Sales pipeline</h3>
        <a href="/pipeline" className="text-sm text-primary hover:underline">View pipeline →</a>
      </div>
      <div className="space-y-2">
        {pipelineStages.map((stage) => (
          <div key={stage.id} className="flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-slate-50">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-soft-indigo" />
              <span className="text-sm font-medium text-dark">{stage.label}</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-dark">{stage.count} deals</div>
              <div className="text-xs text-muted-text">{stage.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
