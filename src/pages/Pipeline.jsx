import { pipelineStages } from '../data/dashboardData';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import PageHeader from '../components/crm/PageHeader';

export default function PipelinePage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Sales Pipeline"
        subtitle="Visualize every opportunity and move deals forward."
        actions={
          <button className="btn-premium px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg">
            + Add Deal
          </button>
        }
      />

      <div className="pb-2 sm:overflow-x-auto sm:pb-4">
        <div className="grid gap-4 sm:flex sm:min-w-[1000px]">
          {pipelineStages.map((stage) => (
            <div
              key={stage.name}
              className="relative flex flex-col justify-between rounded-xl border border-border-color bg-slate-50 p-3.5 sm:flex-1"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border-color mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-dark">{stage.name}</span>
                    <span className="text-[10px] px-2 py-0.5 bg-white text-secondary-text font-semibold rounded-full border border-border-color">
                      {stage.count}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-muted-text">{stage.totalValue}</span>
                </div>

                <div className="space-y-3">
                  {stage.deals?.map((deal) => (
                    <div
                      key={deal.id}
                      className="bg-white p-3 rounded-lg border border-border-color shadow-sm space-y-2"
                    >
                      <div className="text-xs font-bold text-dark">{deal.name}</div>
                      <div className="text-[11px] text-muted-text">{deal.client}</div>
                      <div className="flex items-center justify-between pt-1 text-[11px]">
                        <span className="font-bold text-dark">{deal.value}</span>
                        <span className="px-1.5 py-0.5 bg-soft-indigo text-primary font-semibold rounded text-[10px]">
                          {deal.prob}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 pt-2 text-center text-[11px] font-semibold text-secondary-text border-t border-slate-200">
                + Add opportunity
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
